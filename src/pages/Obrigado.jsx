import React, { useEffect, useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const Obrigado = () => {
    const [showContent, setShowContent] = useState(false);
    const [showCheckmark, setShowCheckmark] = useState(false);
    const [showParticles, setShowParticles] = useState(false);

    useEffect(() => {
        // Animate entrance sequence
        setTimeout(() => setShowCheckmark(true), 300);
        setTimeout(() => setShowContent(true), 800);
        setTimeout(() => setShowParticles(true), 1200);
    }, []);

    // Generate floating particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${3 + Math.random() * 4}s`,
        size: `${4 + Math.random() * 8}px`,
    }));

    return (
        <div className="min-h-screen bg-background font-sans text-white overflow-hidden relative">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-cyan-500/10 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-primary/10 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />

                {/* Floating particles */}
                {showParticles && particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute rounded-full bg-primary/40 animate-float"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: particle.size,
                            height: particle.size,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration,
                        }}
                    />
                ))}

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,148,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,148,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
                {/* Success Animation */}
                <div className={`transform transition-all duration-700 ${showCheckmark ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                    <div className="relative">
                        {/* Outer glow rings */}
                        <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '1.5s' }} />
                        <div className="absolute inset-2 w-28 h-28 md:w-36 md:h-36 rounded-full bg-primary/30 animate-pulse" />

                        {/* Main checkmark circle */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-[0_0_60px_rgba(0,255,148,0.5)]">
                            <CheckCircle size={64} className="text-black" strokeWidth={2.5} />
                        </div>

                        {/* Sparkle decorations */}
                        <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-primary animate-pulse" />
                        <Sparkles className="absolute -bottom-2 -left-6 w-6 h-6 text-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                </div>

                {/* Text Content */}
                <div className={`mt-10 text-center transform transition-all duration-700 delay-300 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="gradient-text">Pagamento Confirmado!</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-2">
                        Obrigado por confiar na <strong className="text-white">PaperX</strong>
                    </p>
                    <p className="text-gray-500 max-w-lg mx-auto">
                        Seu pagamento foi processado com sucesso. Em breve você receberá uma confirmação por e-mail com todos os detalhes.
                    </p>
                </div>

                {/* Logos Section */}
                <div className={`mt-16 transform transition-all duration-700 delay-500 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="text-center text-gray-500 text-sm mb-6">Desenvolvido por</p>
                    <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
                        {/* PaperX Logo */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <img
                                src="/paperx-logo.png"
                                alt="PaperX"
                                className="h-12 md:h-16 w-auto object-contain relative z-10 opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>

                        {/* Divider */}
                        <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent" />

                        {/* InovaSys Logo - White filter applied */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <img
                                src="/inovasys-logo.png"
                                alt="InovaSys"
                                className="h-12 md:h-16 w-auto object-contain relative z-10 opacity-80 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
                            />
                        </div>
                    </div>
                </div>

                {/* Payment Badge */}
                <div className={`mt-12 transform transition-all duration-700 delay-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-gray-400">Pagamento processado via</span>
                        <span className="text-xs font-semibold text-white">Abacate Pay</span>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
    );
};

export default Obrigado;
