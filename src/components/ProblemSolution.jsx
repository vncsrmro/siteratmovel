import React from 'react';
import { FileX, Smartphone, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
    return (
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden section-light">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
                        💡 O Problema
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Você ainda usa{' '}
                        <span className="text-red-400">papel e planilhas</span>?
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Veja como o RAT Móvel transforma seu trabalho de campo
                    </p>
                </div>

                {/* Before / After Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

                    {/* ANTES */}
                    <div className="relative p-6 rounded-2xl bg-red-500/5 border border-red-500/20 overflow-hidden">
                        {/* Badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold">
                            ANTES
                        </div>

                        {/* Imagem */}
                        <div className="rounded-xl overflow-hidden mb-6 border border-red-500/10">
                            <img
                                src="/images/before-paperwork.png"
                                alt="Técnico frustrado com papelada"
                                className="w-full h-48 sm:h-56 object-cover opacity-90"
                                loading="lazy"
                            />
                        </div>

                        {/* Problems list */}
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <FileX size={20} className="text-red-400" />
                            Com papel e planilhas
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Formulários perdidos ou ilegíveis",
                                "Horas perdidas repassando dados",
                                "Sem histórico do equipamento",
                                "Cliente contesta o serviço",
                                "Demora para faturar"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                    <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-red-400 text-xs">✕</span>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* DEPOIS */}
                    <div className="relative p-6 rounded-2xl bg-primary/5 border border-primary/20 overflow-hidden">
                        {/* Badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                            DEPOIS
                        </div>

                        {/* Imagem */}
                        <div className="rounded-xl overflow-hidden mb-6 border border-primary/10">
                            <img
                                src="/images/digital-signature.png"
                                alt="Cliente assinando digitalmente"
                                className="w-full h-48 sm:h-56 object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Solutions list */}
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Smartphone size={20} className="text-primary" />
                            Com RAT Móvel
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Tudo digital e organizado",
                                "Relatório pronto em segundos",
                                "Histórico completo da máquina",
                                "Assinatura digital do cliente",
                                "Fatura no mesmo dia"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle size={12} className="text-primary" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <a
                        href="#funcionalidades"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                        Veja todas as funcionalidades
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}
