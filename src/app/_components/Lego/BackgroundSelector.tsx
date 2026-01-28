"use client";
import React, { useState, useRef } from 'react';
import { Fondos } from '~/data/Lego/fondos';
import { ChevronLeft, Upload, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { CUSTOM_BACKGROUND_ID, uploadImage } from '~/lib/cloudinary';

const FONDO_PERSONALIZADO_FOLDER = 'fondoPersonalizado';

interface BackgroundSelectorProps {
  /** (backgroundId, customImageUrl?) — use CUSTOM_BACKGROUND_ID (0) + url cuando sea fondo personalizado */
  onSelect: (backgroundId: number, customImageUrl?: string) => void;
  onBack: () => void;
  initialSelection?: number | null;
  initialCustomUrl?: string | null;
  /** IDs de fondos deshabilitados (se muestran pero no se pueden seleccionar) */
  disabledFondoIds?: number[];
}

export const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({ 
  onSelect, 
  onBack,
  initialSelection,
  initialCustomUrl = null,
  disabledFondoIds = [],
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(initialSelection ?? null);
  const [customUrl, setCustomUrl] = useState<string | null>(initialCustomUrl ?? null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (initialSelection !== undefined) {
      setSelectedId(initialSelection);
    }
  }, [initialSelection]);

  React.useEffect(() => {
    if (initialCustomUrl !== undefined) {
      setCustomUrl(initialCustomUrl);
    }
  }, [initialCustomUrl]);

  const handleContinue = () => {
    if (selectedId !== null) {
      if (selectedId === CUSTOM_BACKGROUND_ID && customUrl) {
        onSelect(CUSTOM_BACKGROUND_ID, customUrl);
      } else {
        onSelect(selectedId);
      }
    }
  };

  const handleSelect = (id: number) => {
    if (id !== CUSTOM_BACKGROUND_ID && disabledFondoIds.includes(id)) return;
    setSelectedId(id);
    if (id !== CUSTOM_BACKGROUND_ID) setCustomUrl(null);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const valid = ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type);
    if (!valid) {
      setUploadError('Solo se admiten JPG o PNG');
      return;
    }
    setUploadError(null);
    setUploading(true);
    try {
      const { secure_url } = await uploadImage(file, FONDO_PERSONALIZADO_FOLDER);
      setCustomUrl(secure_url);
      setSelectedId(CUSTOM_BACKGROUND_ID);
      // Solo se selecciona; el usuario avanza con "Continuar"
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Error al subir');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
        {/* Header con botón de volver */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors self-start"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold">Volver a figuras</span>
        </button>

        <div className="text-center md:flex-1 md:-ml-24">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            Elige el fondo
          </h2>
          <p className="text-gray-600 mt-1">
            Selecciona el diseño que más te guste para tu cuadro
          </p>
        </div>
      </div>

      {/* Fondo personalizado: subir imagen (JPG/PNG) a fondoPersonalizado */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-700 mb-3">Fondo personalizado</h3>
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          className="hidden"
          onChange={handleFileChange}
        />
        <div
          onClick={() => !uploading && fileInputRef.current?.click()}
          className={`
            relative rounded-xl border-2 border-dashed overflow-hidden transition-all
            ${selectedId === CUSTOM_BACKGROUND_ID && customUrl
              ? 'ring-4 ring-blue-500 border-blue-300 bg-blue-50/50'
              : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/30 cursor-pointer'
            }
            ${uploading ? 'pointer-events-none opacity-70' : ''}
          `}
        >
          <div className="aspect-[3/4] max-h-48 md:max-h-56 relative flex items-center justify-center">
            {customUrl ? (
              <>
                <Image
                  src={customUrl}
                  alt="Fondo personalizado"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 280px"
                />
                {selectedId === CUSTOM_BACKGROUND_ID && (
                  <div className="absolute inset-0 bg-blue-500/10 z-10 flex items-center justify-center">
                    <div className="bg-blue-500 text-white p-2 rounded-full shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center gap-2 text-gray-500 p-6">
                {uploading ? (
                  <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
                ) : (
                  <Upload className="w-10 h-10" />
                )}
                <span className="text-sm font-semibold">
                  {uploading ? 'Subiendo…' : 'Subir imagen (JPG o PNG)'}
                </span>
                <span className="text-xs">Se guardará en fondo personalizado</span>
              </div>
            )}
          </div>
          <div className="p-3 text-center border-t border-gray-200 bg-white">
            <p className={`font-bold text-sm ${selectedId === CUSTOM_BACKGROUND_ID && customUrl ? 'text-blue-700' : 'text-gray-700'}`}>
              {customUrl ? 'Fondo personalizado' : 'Clic para subir tu imagen'}
            </p>
          </div>
        </div>
        {uploadError && (
          <p className="text-red-600 text-sm mt-2">{uploadError}</p>
        )}
      </div>

      {/* Grid de Fondos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {Fondos.map((fondo) => {
          const isDisabled = disabledFondoIds.includes(fondo.id);
          return (
          <div
            key={fondo.id}
            onClick={() => handleSelect(fondo.id)}
            className={`
              relative group rounded-xl overflow-hidden transition-all duration-300
              ${isDisabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
              ${selectedId === fondo.id && !isDisabled
                ? 'ring-4 ring-blue-500 shadow-xl scale-[1.02]' 
                : !isDisabled ? 'hover:shadow-lg hover:scale-[1.02] border-2 border-transparent hover:border-gray-200' : 'border-2 border-transparent'
              }
            `}
          >
            <div className="aspect-[3/4] relative bg-white">
              <Image
                src={fondo.image}
                alt={fondo.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              {isDisabled && (
                <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
                  <span className="text-xs font-bold text-white bg-gray-700 px-2 py-1 rounded">No disponible</span>
                </div>
              )}
              {selectedId === fondo.id && !isDisabled && (
                <div className="absolute inset-0 bg-blue-500/10 z-10 flex items-center justify-center">
                  <div className="bg-blue-500 text-white p-2 rounded-full shadow-lg transform transition-transform scale-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            
            <div className={`p-3 text-center transition-colors ${selectedId === fondo.id && !isDisabled ? 'bg-blue-50' : 'bg-white'}`}>
              <h3 className={`font-bold text-sm ${selectedId === fondo.id && !isDisabled ? 'text-blue-700' : 'text-gray-900'}`}>
                {fondo.name}
              </h3>
            </div>
          </div>
          );
        })}
      </div>

      {/* Footer Fijo en Móvil / Normal en Desktop */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:relative md:bg-transparent md:border-t-0 md:p-0 z-20">
        <div className="max-w-6xl mx-auto flex justify-end">
            <button
                onClick={handleContinue}
                disabled={selectedId === null || (selectedId === CUSTOM_BACKGROUND_ID && !customUrl)}
                className={`
                    w-full md:w-auto px-8 py-3 rounded-xl font-bold text-lg shadow-lg transition-all
                    ${(selectedId !== null && (selectedId !== CUSTOM_BACKGROUND_ID || !!customUrl))
                        ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:-translate-y-1' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }
                `}
            >
                Continuar
            </button>
        </div>
      </div>
      
      {/* Espaciador para el footer fijo en móvil */}
      <div className="h-20 md:h-0" />
    </div>
  );
};
