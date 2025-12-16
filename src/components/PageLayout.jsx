import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import Footer from './Footer';
import TubelightNavbar from './ui/tubelight-navbar';

export default function PageLayout({ title, children, showBackButton = true }) {
    return (
        <div className="min-h-screen bg-background font-sans text-white overflow-x-hidden selection:bg-primary selection:text-black">
            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />
            </div>

            {/* Grid background */}
            <div
                className="fixed inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(69,248,130,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(69,248,130,0.03) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <main className="relative z-10 pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        {showBackButton && (
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-6 group"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                <span>Voltar ao início</span>
                            </Link>
                        )}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                            {title}
                        </h1>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {children}
                    </motion.div>
                </div>
            </main>

            <Footer />
            <TubelightNavbar />
        </div>
    );
}
