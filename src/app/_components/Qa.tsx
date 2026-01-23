"use client";
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/components/ui/accordion"
import { Qas } from '~/data/Qas'

export const Qa = () => {
    // Protección: Si no hay datos, no mostramos nada
    if (!Qas || Qas.length === 0) return null;

    return (
        <section id="preguntas-frecuentes" className="relative w-full bg-[#4a5ae4] pb-20 pt-28 sm:pt-40">

            {/* --- BORDE DE OLAS SUPERIOR --- */}
            <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-[0]">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[calc(100%+1.3px)] h-[100px] sm:h-[150px]"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>

            {/* --- CONTENIDO --- */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full">

                {/* Título */}
                <div className="mx-auto max-w-2xl text-center mb-10">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Preguntas Frecuentes
                    </h2>
                    <p className="mt-3 text-blue-100">
                        Todo lo que necesitas saber para crear tu figura personalizada.
                    </p>
                </div>

                {/* Acordeón */}
                <div className="mx-auto max-w-4xl bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                    >
                        {Qas.map((qa, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-blue-300/30 last:border-0"
                            >
                                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-yellow-300 hover:no-underline py-4 transition-colors">
                                    {qa.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-blue-50 text-base leading-relaxed pb-4 font-light">
                                    {qa.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}