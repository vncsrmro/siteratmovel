import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Server, Lock, Globe, Clock } from 'lucide-react';
import InfrastructureAnimation from './ui/infrastructure-animation';

const stats = [
    { value: "99.9%", label: "Uptime", icon: Clock },
    { value: "256-bit", label: "Criptografia", icon: Lock },
    { value: "<50ms", label: "Latência", icon: Zap },
    { value: "3x", label: "Backups/dia", icon: Server },
];

const TechBadge = ({ children, icon: Icon }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300 flex items-center gap-3 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
    >
        <Icon size={18} className="text-primary" />
        {children}
    </motion.div>
);

export default function Authority() {
    return (
        <section className="py-32 px-4 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-[#060606] to-background" />
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at center, rgba(0,255,148,0.03) 0%, transparent 50%)`,
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        🔒 Segurança & Infraestrutura
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Robustez <span className="text-primary">Enterprise</span>,
                        <br />
                        Preço de Startup
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Seus dados blindados com tecnologia de ponta utilizada por grandes empresas.
                    </p>
                </motion.div>

                {/* Infrastructure Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-16"
                >
                    <InfrastructureAnimation />
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-center group hover:border-primary/30 transition-all"
                        >
                            <stat.icon size={24} className="mx-auto mb-3 text-gray-500 group-hover:text-primary transition-colors" />
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm text-gray-500 mb-6">Powered by tecnologias de classe mundial</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <TechBadge icon={Server}>PostgreSQL</TechBadge>
                        <TechBadge icon={Shield}>Supabase Auth</TechBadge>
                        <TechBadge icon={Globe}>Edge Network</TechBadge>
                        <TechBadge icon={Lock}>AES-256</TechBadge>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
