import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { TestimonialCard } from './ui/testimonial-card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        author: {
            name: "Renato Vitorio",
            handle: "RVTEC Assistência",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
        },
        text: "O RAT Móvel revolucionou minha assistência técnica. Antes eu perdia horas preenchendo papéis e ainda esquecia de cobrar peças. Agora tudo é automático, meus clientes ficam impressionados com o profissionalismo!",
    },
    {
        author: {
            name: "Carlos Eduardo Silva",
            handle: "CE Refrigeração",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        text: "Finalmente um sistema que entende a realidade do técnico em campo. A assinatura digital acabou com as contestações de clientes. Recomendo para todos do ramo!",
    },
    {
        author: {
            name: "Mariana Costa",
            handle: "TechFrio Soluções",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
        },
        text: "Como gestora de uma equipe de 8 técnicos, o RAT Móvel me deu controle total. Sei onde cada um está, quanto faturamos e o histórico de cada máquina. Aumentamos 35% no faturamento!",
    },
    {
        author: {
            name: "Roberto Mendes",
            handle: "Mendes Ar Condicionado",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        text: "O orçamento via link pelo WhatsApp é genial. O cliente aprova na hora e eu já começo o serviço. Economia de tempo e mais vendas fechadas!",
    },
    {
        author: {
            name: "Fernanda Lima",
            handle: "FL Manutenção Industrial",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
        },
        text: "Testei vários sistemas antes, mas o RAT Móvel é o único que funciona de verdade em campo. Interface simples, funciona offline e sincroniza tudo quando volta a internet. Perfeito!",
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 px-4 relative overflow-hidden bg-[#040404]">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
                        <Star size={16} className="fill-yellow-400" />
                        Avaliação 4.9/5
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Quem usa, <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">recomenda</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        +500 assistências técnicas já transformaram sua gestão com o RAT Móvel
                    </p>
                </motion.div>

                {/* Marquee */}
                <div className="relative flex flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden py-4 gap-6">
                        <motion.div
                            className="flex shrink-0 gap-6"
                            animate={{ x: [0, -1920] }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {[...Array(4)].map((_, setIndex) => (
                                testimonials.map((testimonial, i) => (
                                    <TestimonialCard
                                        key={`${setIndex}-${i}`}
                                        {...testimonial}
                                    />
                                ))
                            ))}
                        </motion.div>
                    </div>

                    {/* Gradient fades */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#040404] to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#040404] to-transparent z-10" />
                </div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                        <Quote size={20} className="text-primary" />
                        <span className="text-gray-400">Depoimentos reais de clientes verificados</span>
                        <div className="flex -space-x-2">
                            {testimonials.slice(0, 4).map((t, i) => (
                                <img
                                    key={i}
                                    src={t.author.avatar}
                                    alt=""
                                    className="w-8 h-8 rounded-full border-2 border-[#040404]"
                                />
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-[#040404] bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                                +
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
