import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Home, Zap, Star, Shield, CreditCard, MessageCircle } from "lucide-react";

const navItems = [
    { name: 'Início', url: '#inicio', icon: Home },
    { name: 'Funções', url: '#funcionalidades', icon: Zap },
    { name: 'Clientes', url: '#depoimentos', icon: Star },
    { name: 'Segurança', url: '#seguranca', icon: Shield },
    { name: 'Preços', url: '#precos', icon: CreditCard },
    { name: 'Contato', url: '#contato', icon: MessageCircle },
];

export function TubelightNavbar({ className }) {
    const [activeTab, setActiveTab] = useState('Início');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['inicio', 'funcionalidades', 'depoimentos', 'seguranca', 'precos', 'contato'];
            const scrollPos = window.scrollY + 200;

            let current = 'Início';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPos) {
                    current = navItems.find(item => item.url === `#${section}`)?.name || 'Início';
                }
            }
            setActiveTab(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, name, url) => {
        e.preventDefault();
        setActiveTab(name);
        const element = document.querySelector(url);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={cn(
                "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-2",
                className,
            )}
        >
            <div className="flex items-center gap-0.5 sm:gap-1 bg-black/90 border border-white/10 backdrop-blur-xl py-2 px-2 rounded-full shadow-2xl shadow-black/50">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.name;

                    return (
                        <a
                            key={item.name}
                            href={item.url}
                            onClick={(e) => handleClick(e, item.name, item.url)}
                            className={cn(
                                "relative cursor-pointer text-xs font-medium px-2.5 sm:px-3 py-2 rounded-full transition-all duration-300",
                                "text-gray-500 hover:text-white",
                                isActive && "text-primary",
                            )}
                        >
                            <span className="flex items-center justify-center gap-1">
                                <Icon size={16} strokeWidth={2} />
                                <span className="hidden lg:inline text-xs">{item.name}</span>
                            </span>

                            {isActive && (
                                <motion.div
                                    layoutId="tubelight"
                                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30,
                                    }}
                                >
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full">
                                        <div className="absolute w-8 h-3 bg-primary/30 rounded-full blur-sm -top-0.5 -left-1" />
                                    </div>
                                </motion.div>
                            )}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}

export default TubelightNavbar;
