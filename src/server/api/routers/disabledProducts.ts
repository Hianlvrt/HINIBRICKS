import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const typeSchema = z.enum(["lego", "pet", "fondo"]);

export const disabledProductsRouter = createTRPCRouter({
  getIds: publicProcedure.query(async ({ ctx }) => {
    const rows = await ctx.db.disabledProduct.findMany();
    const lego: number[] = [];
    const pet: number[] = [];
    const fondo: number[] = [];
    for (const row of rows) {
      if (row.type === "lego") lego.push(row.itemId);
      if (row.type === "pet") pet.push(row.itemId);
      if (row.type === "fondo") fondo.push(row.itemId);
    }
    return { lego, pet, fondo };
  }),

  toggle: publicProcedure
    .input(
      z.object({
        type: typeSchema,
        itemId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.disabledProduct.findUnique({
        where: {
          type_itemId: { type: input.type, itemId: input.itemId },
        },
      });
      if (existing) {
        await ctx.db.disabledProduct.delete({
          where: { id: existing.id },
        });
        return { disabled: false };
      }
      await ctx.db.disabledProduct.create({
        data: { type: input.type, itemId: input.itemId },
      });
      return { disabled: true };
    }),
});
