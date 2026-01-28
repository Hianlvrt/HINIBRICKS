import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    /** API key de Resend para envío de correos (pedido confirmado → cliente y admin) */
    RESEND_API_KEY: z.string().optional(),
    /** Remitente de correos (ej. "HiniBricks <pedidos@hinibricks.cl>") */
    EMAIL_FROM: z.string().optional(),
    /** Correo del administrador para notificación de nuevos pedidos */
    ADMIN_EMAIL: z.string().email().optional(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_SHOW_COMING_SOON: z.string().optional(),
    NEXT_PUBLIC_LAUNCH_DATE: z.string().optional(),
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: z.string().optional(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    NEXT_PUBLIC_SHOW_COMING_SOON: process.env.NEXT_PUBLIC_SHOW_COMING_SOON,
    NEXT_PUBLIC_LAUNCH_DATE: process.env.NEXT_PUBLIC_LAUNCH_DATE,
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
