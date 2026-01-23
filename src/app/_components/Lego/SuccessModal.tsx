"use client";
import React from 'react';
import { CheckCircle2, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SuccessModalProps {
    isOpen: boolean;
    orderId: number;
    onClose: () => void;
    onBackToPlans: () => void;
    onGoHome: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
    isOpen,
    orderId: _orderId,
    onClose,
    onBackToPlans,
    onGoHome,
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
                        >
                            {/* Botón cerrar */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Icono de éxito con animación */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="flex justify-center mb-6"
                            >
                                <div className="bg-green-100 rounded-full p-4">
                                    <CheckCircle2 size={64} className="text-green-600" strokeWidth={2} />
                                </div>
                            </motion.div>

                            {/* Título */}
                            <h2 className="text-3xl font-black text-center text-gray-900 mb-2">
                                ¡Pedido Confirmado!
                            </h2>

                            {/* Mensaje */}
                            <p className="text-center text-gray-600 mb-6">
                                Tu pedido ha sido registrado exitosamente. Pronto nos contactaremos contigo para coordinar los detalles.
                            </p>

                            {/* Nota informativa */}
                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-6">
                                <p className="text-sm text-yellow-800 text-center">
                                    Te enviaremos un correo con los detalles de tu pedido
                                </p>
                            </div>

                            {/* Botones */}
                            <div className="flex gap-3">
                                <button
                                    onClick={onBackToPlans}
                                    className="flex-1 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors"
                                >
                                    Hacer otro pedido
                                </button>
                                <button
                                    onClick={onGoHome}
                                    className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors shadow-lg flex items-center justify-center gap-2"
                                >
                                    <Home size={20} />
                                    Ir al Inicio
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
