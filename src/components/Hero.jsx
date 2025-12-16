import React from 'react';
import { Zap, Play, Sparkles, CheckCircle, FileX, Smartphone } from 'lucide-react';

export default function Hero() {
    const benefits = ["100% Web", "Funciona Offline", "PWA Instalável", "Auto-save"];

    return (
        <section className="relative min-h-screen pt-16 pb-24 overflow-hidden flex items-center">

            {/* Background - gradiente mais vibrante */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1410] via-background to-[#0a0f14]" />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
            </div>

            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(69,248,130,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(69,248,130,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Main container - padding aumentado para mobile */}
            <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left: Text content */}
                    <div className="text-center lg:text-left space-y-6 animate-fadeIn">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-primary">
                            <Sparkles size={16} />
                            <span>ERP de Bolso Completo</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                            O Seu Negócio de Assistência Técnica,{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                No Piloto Automático.
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0">
                            Do agendamento ao faturamento. Gerencie técnicos, máquinas e orçamentos em um único app.
                            <span className="text-white font-medium"> Funciona Offline. Assinatura na Tela. Sem Papel.</span>
                        </p>

                        {/* Visual antes/depois - mobile friendly */}
                        <div className="flex items-center justify-center lg:justify-start gap-4 py-2">
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                                <FileX size={18} className="text-red-400" />
                                <span className="text-sm text-red-400">Papelada</span>
                            </div>
                            <div className="text-2xl text-gray-500">→</div>
                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
                                <Smartphone size={18} className="text-primary" />
                                <span className="text-sm text-primary">Digital</span>
                            </div>
                        </div>

                        {/* CTAs - botões maiores para touch */}
                        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2">
                            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-emerald-400 text-black font-bold text-lg rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-200 min-h-[56px]">
                                <Zap size={20} className="fill-black" />
                                Testar Grátis Agora
                            </button>

                            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 border border-white/20 flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-200 min-h-[56px]">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <Play size={14} className="fill-white ml-0.5" />
                                </div>
                                Ver Demo
                            </button>
                        </div>

                        {/* Benefits */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 pt-2">
                            {benefits.map((benefit, i) => (
                                <span key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                    <CheckCircle size={14} className="text-primary" />
                                    {benefit}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: Imagem do técnico */}
                    <div className="relative flex justify-center animate-slideUp order-first lg:order-last">
                        {/* Container da imagem com glow */}
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full scale-110" />

                            {/* Imagem principal */}
                            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/10">
                                <img
                                    src="/images/hero-technician.png"
                                    alt="Técnico em campo usando o RAT Móvel"
                                    className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] h-auto object-cover"
                                    loading="eager"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                                {/* Badge sobre a imagem */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-black/80 backdrop-blur-sm border border-primary/30">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Smartphone size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Digitalizando o trabalho</p>
                                        <p className="text-sm font-bold text-white">Sem papel, sem stress</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating card - Stats */}
                            <div className="absolute -left-4 sm:-left-8 top-1/4 bg-black/90 backdrop-blur-sm border border-white/10 rounded-xl p-3 shadow-xl hidden sm:block animate-float">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                        <CheckCircle size={14} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400">Status</p>
                                        <p className="text-xs font-bold text-white">100% Offline ✓</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating card - Revenue */}
                            <div className="absolute -right-4 sm:-right-8 top-1/2 bg-black/90 backdrop-blur-sm border border-secondary/20 rounded-xl p-3 shadow-xl hidden sm:block animate-float-delayed">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                                        <span className="text-secondary text-xs font-bold">+40%</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400">Produtividade</p>
                                        <p className="text-xs font-bold text-white">Garantida</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
                    <div className="w-1 h-1 rounded-full bg-primary animate-bounce" />
                </div>
            </div>
        </section>
    );
}
