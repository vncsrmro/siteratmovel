import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Zap, CheckCircle, Clock } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Card with glassmorphism */}
                    <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20 overflow-hidden">

                        {/* Decorative circles */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />

                        <div className="relative z-10 text-center">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
                                <Clock size={16} />
                                <span>Resposta em até 5 minutos</span>
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            </div>

                            {/* Heading */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                Pronto para{' '}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                    Transformar
                                </span>{' '}
                                sua Assistência?
                            </h2>

                            {/* Subheading */}
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                                Fale com nossa equipe e descubra como o PaperX pode aumentar sua produtividade em até 40%.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                                <motion.a
                                    href="https://wa.me/5519960003434?text=Olá! Gostaria de saber mais sobre o PaperX."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-2xl shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow"
                                >
                                    <MessageCircle size={24} />
                                    Chamar no WhatsApp
                                </motion.a>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-emerald-400 text-black font-bold text-lg rounded-2xl shadow-lg shadow-primary/30"
                                >
                                    <Zap size={20} className="fill-black" />
                                    Testar Grátis
                                </motion.button>
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                                <span className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-primary" />
                                    Sem cartão de crédito
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-primary" />
                                    14 dias grátis
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-primary" />
                                    Cancele quando quiser
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
