"use client";

import React, { useState } from "react";
import Image from "next/image";
import { api } from "~/trpc/react";
import { allLegoItems } from "~/data/Lego";
import { pets } from "~/data/Lego/pets";
import { Fondos } from "~/data/Lego/fondos";
import { Package, PawPrint, ImageIcon, Lock } from "lucide-react";
import { Button } from "~/components/ui/button";

type TabType = "lego" | "pet" | "fondo";

export function InventoryList() {
  const [activeTab, setActiveTab] = useState<TabType>("lego");

  const { data: disabledIds, refetch } = api.disabledProducts.getIds.useQuery();
  const toggle = api.disabledProducts.toggle.useMutation({
    onSuccess: () => refetch(),
  });

  const legoIds = disabledIds?.lego ?? [];
  const petIds = disabledIds?.pet ?? [];
  const fondoIds = disabledIds?.fondo ?? [];

  const isDisabled = (type: TabType, itemId: number) => {
    if (type === "lego") return legoIds.includes(itemId);
    if (type === "pet") return petIds.includes(itemId);
    return fondoIds.includes(itemId);
  };

  const handleToggle = (type: TabType, itemId: number) => {
    toggle.mutate({ type, itemId });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">Inventario</h2>
        <p className="text-sm text-gray-500">
          Los ítems deshabilitados se muestran en el configurador pero no se pueden seleccionar.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab("lego")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === "lego"
              ? "bg-blue-100 text-blue-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Package size={18} />
          Lego (pelo, rostro, ropa, etc.)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("pet")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === "pet"
              ? "bg-amber-100 text-amber-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <PawPrint size={18} />
          Mascotas
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("fondo")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === "fondo"
              ? "bg-green-100 text-green-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <ImageIcon size={18} />
          Fondos
        </button>
      </div>

      {/* Contenido por tab */}
      {activeTab === "lego" && (
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500 mb-4">
            {allLegoItems.length} ítems. Deshabilita los que no estén disponibles.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-h-[60vh] overflow-y-auto">
            {allLegoItems.map((item) => {
              const disabled = isDisabled("lego", item.id);
              return (
                <div
                  key={item.id}
                  className={`relative rounded-xl border-2 overflow-hidden transition-all ${
                    disabled ? "border-red-200 bg-red-50/50" : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                    {disabled && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Lock size={24} className="text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-[10px] font-medium text-gray-700 px-1 py-1 truncate text-center border-t border-gray-100">
                    {item.name}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant={disabled ? "default" : "outline"}
                    className="w-full rounded-t-none text-xs"
                    onClick={() => handleToggle("lego", item.id)}
                    disabled={toggle.isPending}
                  >
                    {disabled ? (
                      <>Desbloquear</>
                    ) : (
                      <>Deshabilitar</>
                    )}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === "pet" && (
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500 mb-4">
            {pets.length} mascotas. Deshabilita las que no estén disponibles.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {pets.map((item) => {
              const disabled = isDisabled("pet", item.id);
              return (
                <div
                  key={item.id}
                  className={`relative rounded-xl border-2 overflow-hidden transition-all ${
                    disabled ? "border-red-200 bg-red-50/50" : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                    {disabled && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Lock size={24} className="text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs font-medium text-gray-700 px-2 py-1 truncate text-center border-t border-gray-100">
                    {item.name}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant={disabled ? "default" : "outline"}
                    className="w-full rounded-t-none text-xs"
                    onClick={() => handleToggle("pet", item.id)}
                    disabled={toggle.isPending}
                  >
                    {disabled ? "Desbloquear" : "Deshabilitar"}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === "fondo" && (
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500 mb-4">
            {Fondos.length} fondos. Deshabilita los que no estén disponibles.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-h-[60vh] overflow-y-auto">
            {Fondos.map((item) => {
              const disabled = isDisabled("fondo", item.id);
              return (
                <div
                  key={item.id}
                  className={`relative rounded-xl border-2 overflow-hidden transition-all ${
                    disabled ? "border-red-200 bg-red-50/50" : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    {disabled && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Lock size={24} className="text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-[10px] font-medium text-gray-700 px-1 py-1 truncate text-center border-t border-gray-100">
                    {item.name}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant={disabled ? "default" : "outline"}
                    className="w-full rounded-t-none text-xs"
                    onClick={() => handleToggle("fondo", item.id)}
                    disabled={toggle.isPending}
                  >
                    {disabled ? "Desbloquear" : "Deshabilitar"}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
