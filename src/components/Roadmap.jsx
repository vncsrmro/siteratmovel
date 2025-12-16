import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Smartphone, FileCheck, Wifi, QrCode } from 'lucide-react';

const roadmapItems = [
    { label: "Portal do Cliente (QR Code)", icon: QrCode },
    { label: "Módulo Fiscal (NFS-e)", icon: FileCheck },
    { label: "Integração IoT", icon: Wifi },
    { label: "App Nativo iOS/Android", icon: Smartphone },
];

export default function Roadmap() {
    return (
        <section className="py-16 px-4 relative">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 text-gray-500 mb-2">
                        <Rocket size={16} />
                        <span className="text-sm font-medium">Sempre Evoluindo</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Roadmap & <span className="text-primary">Futuro</span>
                    </h2>
                </motion.div>

                {/* Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    {roadmapItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all"
                            >
                                <Icon size={16} className="text-primary" />
                                <span className="text-sm text-gray-300">{item.label}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary font-medium">Em breve</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 text-sm mt-6"
                >
                    O RAT Móvel não para no tempo. Novas funcionalidades todo mês.
                </motion.p>
            </div>
        </section>
    );
}
