import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, History, Wrench, ScanLine } from 'lucide-react';

export default function QRCodeHighlight() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f0a] to-black pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                                <ScanLine className="inline-block w-4 h-4 mr-2" />
                                Tecnologia Exclusiva PaperX
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                O Histórico da Máquina <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">
                                    Em Um Scan.
                                </span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                                Chega de etiquetas de papel que apagam. Cada equipamento ganha uma
                                <strong> Identidade Digital</strong> única acessível via QR Code.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Para o Técnico",
                                    desc: "Escaneie e veja o histórico completo: peças trocadas, datas e defeitos anteriores.",
                                    icon: Wrench,
                                    color: "text-primary",
                                    bg: "bg-primary/10",
                                    border: "border-primary/20"
                                },
                                {
                                    title: "Para o Cliente",
                                    desc: "Seu cliente escaneia o código e abre um chamado automaticamente, sem precisar ligar.",
                                    icon: Smartphone,
                                    color: "text-secondary",
                                    bg: "bg-secondary/10",
                                    border: "border-secondary/20"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className={`flex items-start gap-4 p-4 rounded-xl border ${item.border} ${item.bg} hover:scale-[1.02] transition-transform duration-300`}
                                >
                                    <div className={`w-12 h-12 rounded-lg ${item.bg} border ${item.border} flex items-center justify-center shrink-0`}>
                                        <item.icon size={24} className={item.color} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Animation */}
                    <div className="relative flex justify-center items-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full max-w-md aspect-square"
                        >
                            {/* Glowing rings */}
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />

                            {/* Phone Mockup Frame (Abstract) */}
                            <div className="absolute inset-0 rounded-[3rem] border-2 border-white/10 bg-black/50 backdrop-blur-xl flex items-center justify-center overflow-hidden">

                                {/* Scan Line Animation */}
                                <motion.div
                                    animate={{ top: ['10%', '90%', '10%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm z-20"
                                />

                                {/* QR Code Center */}
                                <div className="relative z-10 w-48 h-48 bg-white p-2 rounded-xl">
                                    <div className="w-full h-full border-4 border-black border-dashed rounded-lg flex items-center justify-center">
                                        <QrCode size={80} className="text-black" />
                                    </div>
                                    {/* Corner Accents */}
                                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl" />
                                    <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl" />
                                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl" />
                                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl" />
                                </div>

                                {/* Floating Labels */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute top-10 left-8 px-3 py-1 bg-black/80 border border-primary/30 rounded-lg backdrop-blur-md"
                                >
                                    <div className="flex items-center gap-2">
                                        <History size={12} className="text-primary" />
                                        <span className="text-xs font-bold text-primary">Histórico Carregado</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    className="absolute bottom-10 right-8 px-3 py-1 bg-black/80 border border-secondary/30 rounded-lg backdrop-blur-md"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-xs font-bold text-white">Máquina Identificada</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
