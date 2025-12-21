import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, FileText, Clock, DollarSign, Smartphone, Cloud, CheckSquare, AlertTriangle, TrendingUp } from 'lucide-react';

const AnimatedIcon = ({ icon: Icon, color, delay }) => (
    <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay, type: "spring", stiffness: 200 }}
        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}
    >
        <Icon size={18} />
    </motion.div>
);

export default function Comparison() {
    const painPoints = [
        { icon: FileText, title: "Blocos Ilegíveis", desc: "Letras impossíveis de ler, folhas perdidas." },
        { icon: Clock, title: "Histórico Perdido", desc: "Quando troquei essa peça? Ninguém sabe." },
        { icon: DollarSign, title: "Dinheiro Voando", desc: "Peças esquecidas de cobrar no final do mês." },
        { icon: AlertTriangle, title: "Contestações", desc: "Cliente nega ter autorizado o serviço." },
    ];

    const solutions = [
        { icon: Smartphone, title: "Tudo Digital", desc: "Ordem de Serviço completa na palma da mão." },
        { icon: Cloud, title: "Histórico na Nuvem", desc: "Acesse tudo sobre a máquina em segundos." },
        { icon: CheckSquare, title: "Cálculo Automático", desc: "Peças somadas automaticamente. Zero erro." },
        { icon: TrendingUp, title: "Relatórios", desc: "Dashboard com métricas em tempo real." },
    ];

    return (
        <section id="beneficios" className="py-24 md:py-32 px-4 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-[#080808] to-background pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                        ⚠️ O Problema
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Você ainda usa <span className="text-red-400 line-through decoration-2">papelada</span>?
                    </h2>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        Descubra o que você está perdendo com métodos ultrapassados.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 relative">

                    {/* Left Side: The Chaos */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-red-950/30 to-[#0a0a0a] border border-red-500/10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                                <XCircle className="text-red-400" size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">O Jeito Antigo</h3>
                                <p className="text-red-400/70 text-xs">Caos. Prejuízo. Estresse.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {painPoints.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-red-500/5 hover:border-red-500/20 transition-all"
                                >
                                    <AnimatedIcon icon={item.icon} color="bg-red-500/10 text-red-400" delay={i * 0.1} />
                                    <div className="min-w-0">
                                        <strong className="block text-sm text-gray-300 mb-0.5">{item.title}</strong>
                                        <span className="text-gray-500 text-xs">{item.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-[#0a0a0a] border border-primary/20"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                                <CheckCircle className="text-primary" size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">O Jeito PaperX</h3>
                                <p className="text-primary/70 text-xs">Controle. Lucro. Profissionalismo.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {solutions.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-primary/5 hover:border-primary/20 transition-all"
                                >
                                    <AnimatedIcon icon={item.icon} color="bg-primary/10 text-primary" delay={i * 0.1} />
                                    <div className="min-w-0">
                                        <strong className="block text-sm text-white mb-0.5">{item.title}</strong>
                                        <span className="text-gray-400 text-xs">{item.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Featured badge - positioned inside card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-black font-bold px-4 py-2 rounded-xl text-sm"
                        >
                            <Sparkles size={16} />
                            Resultado: +40% Produtividade
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

const Sparkles = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
    </svg>
);
