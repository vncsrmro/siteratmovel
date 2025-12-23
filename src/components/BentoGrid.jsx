import React from 'react';
import { motion } from 'framer-motion';
import { History, Send, PenLine, PieChart, Wrench, Camera, MapPin, Bell, QrCode } from 'lucide-react';

const features = [
    {
        icon: History,
        title: "Histórico Completo",
        description: "Saiba o que a máquina teve ANTES de abrir a maleta. Todas as manutenções, peças trocadas e fotos em um só lugar.",
        size: "large",
        gradient: "from-primary/20 to-emerald-500/10",
        iconBg: "bg-primary/20 text-primary",
    },
    {
        icon: Send,
        title: "Orçamento via Link",
        description: "Envie propostas profissionais pelo WhatsApp e receba aprovação instantânea.",
        size: "tall",
        gradient: "from-secondary/20 to-blue-500/10",
        iconBg: "bg-secondary/20 text-secondary",
    },
    {
        icon: PenLine,
        title: "Assinatura Digital",
        description: "Cliente assina na tela. Fim das contestações.",
        size: "normal",
        gradient: "from-purple-500/20 to-pink-500/10",
        iconBg: "bg-purple-500/20 text-purple-400",
    },
    {
        icon: PieChart,
        title: "Financeiro Integrado",
        description: "Do Relatório direto para o faturamento. Controle total.",
        size: "normal",
        gradient: "from-orange-500/20 to-yellow-500/10",
        iconBg: "bg-orange-500/20 text-orange-400",
    },
    {
        icon: Camera,
        title: "Fotos com Marca d'Água",
        description: "Evidências automáticas com data e GPS.",
        size: "normal",
        gradient: "from-cyan-500/20 to-teal-500/10",
        iconBg: "bg-cyan-500/20 text-cyan-400",
    },
    {
        icon: MapPin,
        title: "Localização de Equipes",
        description: "Saiba onde cada técnico está em tempo real.",
        size: "normal",
        gradient: "from-rose-500/20 to-red-500/10",
        iconBg: "bg-rose-500/20 text-rose-400",
    },
];

const BentoCard = ({ feature, index }) => {
    const sizeClasses = {
        large: "md:col-span-2 md:row-span-1",
        tall: "md:row-span-2",
        normal: "",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`group relative p-8 rounded-[2rem] bg-gradient-to-br ${feature.gradient} border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden ${sizeClasses[feature.size]}`}
        >
            {/* Animated border glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-1px] rounded-[2rem] bg-gradient-to-r from-primary via-secondary to-primary opacity-20 blur-sm" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 shadow-lg`}
                >
                    <feature.icon size={26} />
                </motion.div>

                {/* Text */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-grow">
                    {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Saiba mais</span>
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="ml-2"
                    >
                        →
                    </motion.span>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-[4rem] -z-10 transform translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
        </motion.div>
    );
};

export default function BentoGrid() {
    return (
        <section id="funcionalidades" className="py-32 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        ⚡ Funcionalidades
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Tudo o que você precisa, <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            na palma da mão
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Funcionalidades pensadas por quem entende de campo.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {features.map((feature, index) => (
                        <BentoCard key={index} feature={feature} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 mb-4">E muito mais: checklist, peças, despesas, integração com ERP...</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-semibold hover:bg-white/10 transition-all"
                    >
                        Ver todas as funcionalidades →
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
