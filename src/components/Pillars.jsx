import React from 'react';
import { WifiOff, PieChart, Settings } from 'lucide-react';

const pillars = [
    {
        icon: PieChart,
        title: "ERP de Bolso Completo",
        description: "Chega de planilhas! Controle orçamentos, faturamento, reembolsos de KM e toda gestão financeira em tempo real.",
        color: "primary",
        badge: "Diferencial #1"
    },
    {
        icon: Settings,
        title: "CRM de Ativos",
        description: "O fim do 'eu acho'. Histórico completo de cada equipamento com um clique. Saiba tudo sobre cada máquina atendida.",
        color: "secondary",
        badge: "Gestão Completa"
    },
    {
        icon: WifiOff,
        title: "Funciona Offline",
        description: "Seus técnicos nunca param, mesmo sem internet. Sincronização automática quando reconecta.",
        color: "purple",
        badge: "Bônus"
    },
];

const colorMap = {
    primary: {
        bg: "bg-primary/10",
        border: "border-primary/20",
        text: "text-primary",
        icon: "bg-primary/20",
    },
    secondary: {
        bg: "bg-secondary/10",
        border: "border-secondary/20",
        text: "text-secondary",
        icon: "bg-secondary/20",
    },
    purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        text: "text-purple-400",
        icon: "bg-purple-500/20",
    },
};

export default function Pillars() {
    return (
        <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 relative section-accent">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-[#080808] to-background pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Por que <span className="text-primary">PaperX</span>?
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Os 3 pilares que fazem a diferença na sua assistência técnica
                    </p>
                </div>

                {/* 3 Pillars Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {pillars.map((pillar, i) => {
                        const colors = colorMap[pillar.color];
                        const Icon = pillar.icon;

                        return (
                            <div
                                key={i}
                                className={`relative p-6 rounded-2xl ${colors.bg} border ${colors.border} hover:scale-[1.02] transition-transform duration-200`}
                            >
                                {/* Badge */}
                                <span className={`absolute top-4 right-4 text-[10px] px-2 py-1 rounded-full ${colors.bg} ${colors.text} font-medium`}>
                                    {pillar.badge}
                                </span>

                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}>
                                    <Icon size={24} className={colors.text} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
