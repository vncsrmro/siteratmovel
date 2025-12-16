import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Globe } from 'lucide-react';
import { TextHoverEffect, FooterBackgroundGradient } from './ui/hover-footer';

const footerLinks = [
    {
        title: "Produto",
        links: [
            { label: "Funcionalidades", href: "/#funcionalidades" },
            { label: "Preços", href: "/#precos" },
            { label: "Depoimentos", href: "/#depoimentos" },
            { label: "Roadmap", href: "/#roadmap" },
        ],
    },
    {
        title: "Suporte",
        links: [
            { label: "Central de Ajuda", href: "/ajuda", isRoute: true },
            { label: "Tutoriais", href: "/tutoriais", isRoute: true },
            { label: "WhatsApp", href: "https://wa.me/5519960003434", pulse: true },
        ],
    },
];

const contactInfo = [
    {
        icon: <MessageCircle size={18} className="text-primary" />,
        text: "(19) 9600-3434",
        href: "https://wa.me/5519960003434",
    },
    {
        icon: <Mail size={18} className="text-primary" />,
        text: "ratmovel@inovasys.digital",
        href: "mailto:ratmovel@inovasys.digital",
    },
    {
        icon: <MapPin size={18} className="text-primary" />,
        text: "São Paulo, Brasil",
    },
];

const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Globe size={20} />, label: "Website", href: "https://inovasys.digital" },
];

export default function Footer() {
    return (
        <footer className="relative rounded-t-3xl overflow-hidden mt-8 pb-20">
            <div className="max-w-7xl mx-auto px-6 py-14 z-40 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">

                    {/* Brand section */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold text-lg">
                                {'</>'}
                            </div>
                            <div>
                                <span className="text-xl font-bold">
                                    <span className="text-gray-400">inova</span>
                                    <span className="text-primary">sys</span>
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Soluções que transformam o seu negócio. Tecnologia de ponta desenvolvida no Brasil.
                        </p>
                    </div>

                    {/* Footer link sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white text-lg font-semibold mb-6">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label} className="relative">
                                        {link.isRoute ? (
                                            <Link
                                                to={link.href}
                                                className="text-gray-500 hover:text-primary transition-colors text-sm"
                                            >
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="text-gray-500 hover:text-primary transition-colors text-sm"
                                            >
                                                {link.label}
                                            </a>
                                        )}
                                        {link.pulse && (
                                            <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact section */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-6">
                            Contato
                        </h4>
                        <ul className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    {item.icon}
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-gray-500 hover:text-primary transition-colors text-sm"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span className="text-gray-500 text-sm">
                                            {item.text}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="border-t border-white/5 my-8" />

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
                    {/* Social icons */}
                    <div className="flex space-x-6 text-gray-600">
                        {socialLinks.map(({ icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="hover:text-primary transition-colors"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-600 text-center md:text-left">
                        © {new Date().getFullYear()} InovaSys. Todos os direitos reservados.
                    </p>

                    {/* Legal links */}
                    <div className="flex gap-6 text-gray-600">
                        <Link to="/privacidade" className="hover:text-gray-400 transition-colors">Política de Privacidade</Link>
                        <Link to="/termos" className="hover:text-gray-400 transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>

            {/* Text hover effect */}
            <div className="lg:flex hidden h-[25rem] -mt-48 -mb-32 justify-center pointer-events-none">
                <TextHoverEffect text="INOVASYS" className="z-50" />
            </div>

            <FooterBackgroundGradient />
        </footer>
    );
}
