import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Play, Sparkles, CheckCircle, Wifi, PieChart } from 'lucide-react';

// Phone mockup with app content
const PhoneMockup = () => (
    <div className="relative mx-auto w-[240px] sm:w-[260px] lg:w-[280px]">
        {/* Glow effect behind phone */}
        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-150" />

        {/* Phone frame */}
        <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-2 shadow-2xl shadow-black/50 border-4 border-[#2a2a2a]">
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
            {/* Screen */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#050505]">
                <div className="w-full h-full p-4 pt-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm font-bold text-primary">RAT Móvel</div>
                        <div className="text-[10px] text-gray-500">v2.0</div>
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-primary/10 rounded-xl p-3 border border-primary/20">
                            <p className="text-[9px] text-gray-400">Este mês</p>
                            <p className="text-lg font-bold text-white">R$ 12.4k</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                            <p className="text-[9px] text-gray-400">OS Abertas</p>
                            <p className="text-lg font-bold text-white">8</p>
                        </div>
                    </div>
                    {/* List */}
                    <div className="space-y-2">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-white/5 rounded-xl p-2.5 border border-white/5 flex items-center gap-2">
                                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                    <CheckCircle size={12} className="text-primary" />
                                </div>
                                <div className="flex-1">
                                    <div className="h-2 w-16 bg-white/20 rounded mb-1" />
                                    <div className="h-1.5 w-10 bg-white/10 rounded" />
                                </div>
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
        </div>
    </div>
);

export default function Hero() {
    const benefits = ["100% Web", "Funciona Offline", "PWA Instalável", "Auto-save"];

    return (
        <section className="relative min-h-screen pt-20 pb-32 overflow-hidden flex items-center">

            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />
            </div>

            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(69,248,130,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(69,248,130,0.03) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Main container with proper spacing */}
            <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Text content */}
                    <div className="text-center lg:text-left order-2 lg:order-1 space-y-8">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-primary"
                        >
                            <Sparkles size={16} />
                            <span>ERP de Bolso Completo</span>
                        </motion.div>

                        {/* H1 */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
                        >
                            O Seu Negócio de Assistência Técnica,{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                No Piloto Automático.
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0"
                        >
                            Do agendamento ao faturamento. Gerencie técnicos, máquinas e orçamentos em um único app.
                            <span className="text-white font-medium"> Funciona Offline. Assinatura na Tela. Sem Papel.</span>
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
                        >
                            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-emerald-400 text-black font-bold text-lg rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] transition-all">
                                <Zap size={20} className="fill-black" />
                                Testar Grátis Agora
                            </button>

                            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 border border-white/20 flex items-center justify-center gap-3 hover:scale-[1.02] transition-all">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <Play size={14} className="fill-white ml-0.5" />
                                </div>
                                Ver Demo
                            </button>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 pt-2"
                        >
                            {benefits.map((benefit, i) => (
                                <span key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                    <CheckCircle size={14} className="text-primary" />
                                    {benefit}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Phone mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative order-1 lg:order-2 flex justify-center"
                    >
                        <PhoneMockup />

                        {/* Floating cards */}
                        <div className="absolute -left-4 lg:-left-12 top-1/4 bg-black/80 backdrop-blur-sm border border-primary/30 rounded-xl p-3 shadow-xl animate-float hidden sm:block">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                    <Wifi size={14} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[9px] text-gray-400">Modo Offline</p>
                                    <p className="text-xs font-bold text-white">Ativo ✓</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -right-4 lg:-right-12 top-1/2 bg-black/80 backdrop-blur-sm border border-secondary/30 rounded-xl p-3 shadow-xl animate-float-delayed hidden sm:block">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                                    <PieChart size={14} className="text-secondary" />
                                </div>
                                <div>
                                    <p className="text-[9px] text-gray-400">Faturamento</p>
                                    <p className="text-xs font-bold text-white">+47% este mês</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
                    <div className="w-1 h-1 rounded-full bg-primary animate-bounce" />
                </div>
            </div>
        </section>
    );
}
