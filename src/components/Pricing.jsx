import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Users, Zap, Star, Building2, Sparkles, FileText, Smartphone, Headphones } from 'lucide-react';

// Funcionalidades base incluídas em TODOS os planos
const baseFeatures = [
    "RAT Digital completo",
    "Orçamentos ilimitados",
    "Histórico de atendimentos",
    "Kanban Financeiro",
    "Modo offline",
    "Sincronização automática",
    "Dashboard em tempo real",
    "Relatórios básicos",
];

// Planos diferenciados apenas por número de usuários
const plans = [
    {
        name: "Starter",
        subtitle: "Para começar",
        price: 99,
        period: "/mês",
        users: "1 Gestor + 1 Técnico",
        maxUsers: 2,
        icon: <Zap size={24} />,
        isPopular: false,
        cta: "Começar Grátis",
        ctaVariant: "outline",
    },
    {
        name: "Growth",
        subtitle: "Mais popular",
        price: 197,
        period: "/mês",
        users: "1 Gestor + 5 Técnicos",
        maxUsers: 6,
        extraUserPrice: 29.90,
        icon: <Star size={24} />,
        isPopular: true,
        cta: "Começar Agora",
        ctaVariant: "primary",
    },
    {
        name: "Enterprise",
        subtitle: "Para grandes equipes",
        price: 497,
        period: "/mês",
        users: "Usuários ilimitados",
        maxUsers: null,
        icon: <Building2 size={24} />,
        isPopular: false,
        cta: "Falar com Vendas",
        ctaVariant: "outline",
    },
];

// Extras para upsell (placeholder para adicionar depois)
const extras = [
    {
        id: "nf",
        name: "Emissão de NF-e/NFS-e",
        description: "Emita notas fiscais diretamente pelo sistema",
        price: "R$ 49",
        period: "/mês",
        icon: <FileText size={20} />,
        comingSoon: true,
    },
    {
        id: "app",
        name: "App Nativo iOS/Android",
        description: "Aplicativo nativo com sua marca",
        price: "R$ 99",
        period: "/mês",
        icon: <Smartphone size={20} />,
        comingSoon: true,
    },
    {
        id: "suporte",
        name: "Suporte Prioritário 24/7",
        description: "Atendimento exclusivo via WhatsApp",
        price: "R$ 79",
        period: "/mês",
        icon: <Headphones size={20} />,
        comingSoon: true,
    },
];

function PricingCard({ plan, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-2xl p-6 flex flex-col h-full ${plan.isPopular
                    ? 'bg-gradient-to-b from-primary/10 to-[#0a1a14] border-2 border-primary/50 shadow-xl shadow-primary/10'
                    : 'bg-[#0d1117] border border-white/10'
                }`}
        >
            {/* Popular badge */}
            {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-emerald-400 text-black text-sm font-bold flex items-center gap-2 whitespace-nowrap">
                        <Star size={14} className="fill-black" />
                        Mais Popular
                    </span>
                </div>
            )}

            {/* Header */}
            <div className="text-center mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${plan.isPopular ? 'bg-primary/20 text-primary' : 'bg-white/10 text-gray-400'
                    }`}>
                    {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.subtitle}</p>
            </div>

            {/* Price */}
            <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-400 text-sm">R$</span>
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
            </div>

            {/* Users */}
            <div className={`rounded-xl p-4 mb-6 ${plan.isPopular ? 'bg-primary/10 border border-primary/20' : 'bg-white/5 border border-white/10'
                }`}>
                <div className="flex items-center justify-center gap-2">
                    <Users size={18} className={plan.isPopular ? 'text-primary' : 'text-gray-400'} />
                    <span className={`font-semibold ${plan.isPopular ? 'text-primary' : 'text-white'}`}>
                        {plan.users}
                    </span>
                </div>
                {plan.extraUserPrice && (
                    <p className="text-xs text-gray-500 text-center mt-2">
                        Técnico extra: R$ {plan.extraUserPrice.toFixed(2).replace('.', ',')}/mês
                    </p>
                )}
            </div>

            {/* Features - same for all */}
            <div className="flex-1 mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Incluso no plano:</p>
                <ul className="space-y-2">
                    {baseFeatures.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                            <Check size={16} className={`flex-shrink-0 ${plan.isPopular ? 'text-primary' : 'text-gray-500'
                                }`} />
                            <span className="text-gray-400">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA Button */}
            <button className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.ctaVariant === 'primary'
                    ? 'bg-gradient-to-r from-primary to-emerald-400 text-black hover:shadow-lg hover:shadow-primary/30'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}>
                {plan.cta}
            </button>
        </motion.div>
    );
}

function ExtraCard({ extra, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative bg-[#0d1117] border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors group"
        >
            {/* Coming Soon Badge */}
            {extra.comingSoon && (
                <div className="absolute -top-2 -right-2">
                    <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium border border-orange-500/30">
                        Em breve
                    </span>
                </div>
            )}

            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors flex-shrink-0">
                {extra.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white truncate">{extra.name}</h4>
                <p className="text-xs text-gray-500 truncate">{extra.description}</p>
            </div>

            {/* Price */}
            <div className="text-right flex-shrink-0">
                <span className="text-sm font-bold text-white">{extra.price}</span>
                <span className="text-xs text-gray-500">{extra.period}</span>
            </div>
        </motion.div>
    );
}

export default function Pricing() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-[#080808] to-background pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Preço <span className="text-primary">Simples e Justo</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Todos os planos incluem as mesmas funcionalidades. Escolha pelo tamanho da sua equipe.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {plans.map((plan, index) => (
                        <PricingCard key={plan.name} plan={plan} index={index} />
                    ))}
                </div>

                {/* Extras Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Sparkles size={20} className="text-primary" />
                        <h3 className="text-xl font-semibold text-white">Extras para Turbinar</h3>
                    </div>
                    <p className="text-gray-500 text-sm text-center mb-8 max-w-lg mx-auto">
                        Adicione recursos avançados conforme sua necessidade. Disponíveis para qualquer plano.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {extras.map((extra, index) => (
                            <ExtraCard key={extra.id} extra={extra} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* Trust note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 text-sm"
                >
                    ✓ Cancele quando quiser &nbsp; ✓ Sem fidelidade &nbsp; ✓ 14 dias grátis
                </motion.p>
            </div>
        </section>
    );
}
