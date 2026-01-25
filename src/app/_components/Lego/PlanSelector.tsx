"use client";
import React from 'react';
import { Check, Users } from 'lucide-react';

export type PlanType = 'standard' | 'familiar';

interface Plan {
    id: PlanType;
    name: string;
    subtitle: string;
    price: number;
    dimensions: string;
    maxFigures: number;
    maxAccsPerFigure: number;
    accExtraCost: number;
    features: string[];
    popular?: boolean;
    allowsExtra?: boolean;
}

const PLANS: Plan[] = [
    {
        id: 'standard',
        name: 'Tamaño Estándar',
        subtitle: '15cm x 20cm',
        price: 19990,
        dimensions: '20cm x 15cm',
        maxFigures: 2,
        maxAccsPerFigure: 1,
        accExtraCost: 1000,
        features: [
            'Incluye 2 Figuras',
            'Incluye 2 Accesorios',
            'Fondo Personalizado',
            'Accesorios extra: +$1.000 c/u',
            'Permite agregar mascota: +$1.500 c/u'
        ],
        popular: true,
    },
    {
        id: 'familiar',
        name: 'Tamaño Familiar',
        subtitle: '20cm x 25cm',
        price: 24990,
        dimensions: '20cm x 25cm',
        maxFigures: 4,
        maxAccsPerFigure: 1,
        accExtraCost: 1000,
        features: [
            'Incluye 3 Figuras',
            'Ideal para familias',
            'Más espacio para detalles',
            'Permite añadir figuras adicionales: +$3.000 c/u',
            'Accesorios extra: +$1.000 c/u'
        ],
        allowsExtra: true,
    }
];

interface PlanSelectorProps {
    onSelectPlan: (plan: Plan) => void;
}

export const PlanSelector: React.FC<PlanSelectorProps> = ({ onSelectPlan }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                    Elige el tamaño de tu cuadro
                </h2>
                <p className="text-xl text-gray-600">
                    El tamaño define cuántas historias caben dentro.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {PLANS.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-4 ${
                            plan.popular 
                                ? 'border-yellow-400' 
                                : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => onSelectPlan(plan)}
                    >
                        {/* Badge Popular */}
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 font-bold px-6 py-2 rounded-full shadow-md">
                                Popular
                            </div>
                        )}

                        {/* Icono representativo */}
                        <div className="flex justify-center mb-6 mt-4">
                            <div className={`relative ${plan.id === 'standard' ? 'w-48 h-32' : 'w-64 h-32'} border-4 border-gray-800 rounded-lg bg-gray-50 flex items-center justify-center`}>
                                {plan.id === 'standard' ? (
                                    <div className="flex gap-4">
                                        <Users size={40} className="text-gray-400" />
                                        <Users size={40} className="text-gray-400" />
                                    </div>
                                ) : (
                                    <div className="flex gap-3">
                                        <Users size={32} className="text-gray-400" />
                                        <Users size={32} className="text-gray-400" />
                                        <Users size={32} className="text-gray-400" />
                                        <Users size={32} className="text-gray-400" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Nombre y dimensiones */}
                        <h3 className="text-2xl font-black text-gray-900 text-center mb-2">
                            {plan.name}
                        </h3>
                        <p className="text-gray-500 text-center mb-6 font-semibold">
                            {plan.subtitle}
                        </p>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Check className="text-blue-500 flex-shrink-0 mt-0.5" size={20} strokeWidth={3} />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Precio */}
                        <div className="text-center mb-6">
                            <span className="text-5xl font-black text-blue-600">
                                ${plan.price.toLocaleString()}
                            </span>
                        </div>

                        {/* Botón */}
                        <button
                            onClick={() => onSelectPlan(plan)}
                            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                                plan.popular
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                                    : 'bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-xl'
                            }`}
                        >
                            Seleccionar Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Exportar el tipo Plan para usarlo en otros componentes
export type { Plan };
