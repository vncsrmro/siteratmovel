import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom SVG Logo Component
const Logo = ({ className = "" }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative w-10 h-10">
            <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                    <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00FF94" />
                        <stop offset="100%" stopColor="#00B8FF" />
                    </linearGradient>
                </defs>
                <rect x="8" y="4" width="18" height="32" rx="3" fill="url(#phoneGradient)" opacity="0.9" />
                <rect x="10" y="8" width="14" height="20" rx="1" fill="#050505" />
                <circle cx="28" cy="28" r="10" fill="#050505" stroke="#00FF94" strokeWidth="2" />
                <circle cx="28" cy="28" r="4" fill="#00FF94" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <rect
                        key={i}
                        x="26"
                        y="17"
                        width="4"
                        height="4"
                        fill="#00FF94"
                        transform={`rotate(${angle} 28 28)`}
                    />
                ))}
            </svg>
        </div>
        <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight">
                <span className="text-white">RAT</span>
                <span className="text-primary"> Móvel</span>
            </span>
            <span className="text-[10px] text-gray-500 tracking-widest uppercase">by InovaSys</span>
        </div>
    </div>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-xl">
                <Logo />

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
                    <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
                    <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
                    <a href="#contato" className="hover:text-white transition-colors">Contato</a>
                    <button className="bg-gradient-to-r from-primary to-secondary text-black px-5 py-2.5 rounded-xl font-bold flex items-center gap-2">
                        <Zap size={16} className="fill-black" />
                        Área do Cliente
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-4 z-50"
                    >
                        <a href="#funcionalidades" className="text-gray-300 hover:text-primary py-2" onClick={() => setIsOpen(false)}>Funcionalidades</a>
                        <a href="#beneficios" className="text-gray-300 hover:text-primary py-2" onClick={() => setIsOpen(false)}>Benefícios</a>
                        <a href="#contato" className="text-gray-300 hover:text-primary py-2" onClick={() => setIsOpen(false)}>Contato</a>
                        <button className="mt-2 bg-gradient-to-r from-primary to-secondary w-full text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2">
                            <Zap size={18} className="fill-black" />
                            Área do Cliente
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
