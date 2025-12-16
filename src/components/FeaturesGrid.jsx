import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import {
    PenLine, Mic, Camera, Users, History,
    Calculator, WifiOff, Globe, Zap, ChevronDown, Smartphone, RefreshCw, Lock,
    FileText, Calendar, Wrench, Receipt, PieChart, BarChart3, Bell, Settings, Trash2, LayoutDashboard, UserCog
} from 'lucide-react';

// 7 Diferenciais
const differentiators = [
    { icon: Globe, label: "100% Web" },
    { icon: WifiOff, label: "Funciona Offline" },
    { icon: PenLine, label: "Assinatura Digital" },
    { icon: Calculator, label: "Cálculos Automáticos" },
    { icon: Smartphone, label: "PWA Instalável" },
    { icon: Lock, label: "Segurança RLS" },
    { icon: RefreshCw, label: "Auto-save" },
];

// 14 Módulos
const moduleCategories = [
    {
        name: "Operacional",
        color: "primary",
        modules: [
            { icon: FileText, name: "Gestão de RATs", desc: "Voz, fotos, assinatura" },
            { icon: Calculator, name: "Orçamentos", desc: "Link para aprovação" },
            { icon: Calendar, name: "Agenda", desc: "Calendário + lembretes" },
        ]
    },
    {
        name: "Gestão",
        color: "secondary",
        modules: [
            { icon: Users, name: "Clientes", desc: "Busca por CNPJ" },
            { icon: Wrench, name: "Equipamentos", desc: "Histórico completo" },
            { icon: UserCog, name: "Fechamento", desc: "Horas e KM" },
        ]
    },
    {
        name: "Financeiro",
        color: "emerald",
        modules: [
            { icon: Receipt, name: "Faturamento", desc: "NFs e pagamentos" },
            { icon: PieChart, name: "Dashboard", desc: "KPIs em tempo real" },
            { icon: BarChart3, name: "Analytics", desc: "Performance" },
        ]
    },
    {
        name: "Sistema",
        color: "purple",
        modules: [
            { icon: LayoutDashboard, name: "Home", desc: "Ações rápidas" },
            { icon: Bell, name: "Notificações", desc: "Push + histórico" },
            { icon: Settings, name: "Config", desc: "Empresa e taxas" },
            { icon: Users, name: "Usuários", desc: "Roles e convites" },
            { icon: Trash2, name: "Lixeira", desc: "Restaurar itens" },
        ]
    }
];

const colors = {
    primary: { bg: "bg-primary/10", border: "border-primary/20", text: "text-primary" },
    secondary: { bg: "bg-secondary/10", border: "border-secondary/20", text: "text-secondary" },
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
    purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
};

export default function FeaturesGrid() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden section-light">
            {/* Background effects - otimizado */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-2xl" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                        ⚡ O Poder do Ecossistema
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        14 Funcionalidades que a{' '}
                        <span className="text-primary">Concorrência Não Tem</span>
                    </h2>
                </div>

                {/* Differentiators - Badges */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                    {differentiators.map((diff, i) => {
                        const Icon = diff.icon;
                        return (
                            <div
                                key={i}
                                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 transition-colors duration-200"
                            >
                                <Icon size={14} className="text-primary" />
                                <span className="text-xs sm:text-sm font-medium text-white">{diff.label}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Bento Grid - 6 columns layout */}
                <div className="grid grid-cols-6 gap-3 sm:gap-4">

                    {/* Card 1: 100% Offline - DESTAQUE */}
                    <Card className="col-span-6 sm:col-span-3 lg:col-span-2 bg-white/[0.02] border-white/10 hover:border-primary/30 transition-colors duration-200 overflow-hidden">
                        <CardContent className="pt-6 text-center">
                            <div className="relative flex h-24 w-full items-center justify-center">
                                <svg className="absolute inset-0 w-full h-full text-primary/20" viewBox="0 0 254 104" fill="none">
                                    <path d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z" fill="currentColor" />
                                </svg>
                                <span className="relative text-5xl font-bold text-white">100%</span>
                            </div>
                            <h3 className="mt-6 text-2xl font-bold text-white">Offline</h3>
                            <p className="mt-2 text-gray-400 text-sm">Funciona sem internet. Sincroniza quando conectar.</p>
                        </CardContent>
                    </Card>

                    {/* Card 2: Assinatura Digital */}
                    <Card className="col-span-6 sm:col-span-3 lg:col-span-2 bg-white/[0.02] border-white/10 hover:border-primary/30 transition-colors duration-200 overflow-hidden">
                        <CardContent className="pt-6">
                            <div className="relative mx-auto flex aspect-square w-28 rounded-full border border-white/10 items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5">
                                <PenLine size={40} className="text-primary" strokeWidth={1.5} />
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-lg font-bold text-white">Assinatura Digital & PDF</h3>
                                <p className="text-gray-400 text-sm mt-2">O cliente assina na tela. O PDF vai pro e-mail na hora.</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 3: 100% Web - DESTAQUE GRADIENTE */}
                    <Card className="col-span-6 sm:col-span-3 lg:col-span-2 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 hover:border-primary/40 transition-colors duration-200 overflow-hidden">
                        <CardContent className="pt-6 text-center">
                            <div className="relative mx-auto flex aspect-square w-20 rounded-2xl bg-primary/20 border border-primary/30 items-center justify-center">
                                <Globe size={36} className="text-primary" strokeWidth={1.5} />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-bold text-white">100% Web</h3>
                                <p className="text-gray-400 text-sm mt-2">Não precisa baixar na App Store. PWA instalável.</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 4: Entrada de Voz - GRANDE */}
                    <Card className="col-span-6 lg:col-span-3 bg-white/[0.02] border-white/10 hover:border-secondary/30 transition-colors duration-200 overflow-hidden">
                        <CardContent className="grid sm:grid-cols-2 gap-6 pt-6">
                            <div className="flex flex-col justify-between space-y-4">
                                <div className="relative flex aspect-square w-12 rounded-full border border-white/10 items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5">
                                    <Mic size={24} className="text-secondary" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Entrada de Voz</h3>
                                    <p className="text-gray-400 text-sm mt-2">Dite o relatório. O app escreve. Economize 50% do tempo.</p>
                                </div>
                            </div>
                            <div className="relative rounded-xl border border-white/5 p-4 bg-black/30">
                                <div className="absolute left-3 top-2 flex gap-1">
                                    <span className="block w-2 h-2 rounded-full bg-red-500/50"></span>
                                    <span className="block w-2 h-2 rounded-full bg-yellow-500/50"></span>
                                    <span className="block w-2 h-2 rounded-full bg-green-500/50"></span>
                                </div>
                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                                            <Mic size={14} className="text-secondary" />
                                        </div>
                                        <div className="flex-1 h-3 bg-secondary/20 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-gradient-to-r from-secondary to-primary rounded-full" />
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-gray-500 mt-2">"Troca de compressor realizada..."</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 5: Gestão de Equipe - GRANDE */}
                    <Card className="col-span-6 lg:col-span-3 bg-white/[0.02] border-white/10 hover:border-purple-500/30 transition-colors duration-200 overflow-hidden">
                        <CardContent className="grid sm:grid-cols-2 gap-6 pt-6">
                            <div className="flex flex-col justify-between space-y-4">
                                <div className="relative flex aspect-square w-12 rounded-full border border-white/10 items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border before:border-white/5">
                                    <Users size={24} className="text-purple-400" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Gestão de Equipe</h3>
                                    <p className="text-gray-400 text-sm mt-2">Painel Master para você, app simples para o técnico.</p>
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-center space-y-3">
                                <div className="flex items-center gap-2 justify-end">
                                    <span className="text-xs text-gray-500 px-2 py-1 rounded border border-purple-500/20 bg-purple-500/10">Master</span>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-400 flex items-center justify-center text-white text-xs font-bold">V</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">C</div>
                                    <span className="text-xs text-gray-500 px-2 py-1 rounded border border-white/10">Técnico</span>
                                </div>
                                <div className="flex items-center gap-2 justify-end">
                                    <span className="text-xs text-gray-500 px-2 py-1 rounded border border-white/10">Técnico</span>
                                    <div className="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs font-bold">P</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Cards pequenos */}
                    <Card className="col-span-3 sm:col-span-2 bg-white/[0.02] border-white/10 hover:border-orange-500/30 transition-colors duration-200">
                        <CardContent className="pt-6 text-center">
                            <div className="w-10 h-10 mx-auto rounded-xl bg-orange-500/10 flex items-center justify-center">
                                <Camera size={20} className="text-orange-400" />
                            </div>
                            <h3 className="mt-4 text-sm font-bold text-white">Fotos Organizadas</h3>
                            <p className="text-gray-500 text-xs mt-1">Problema, Solução, Peças</p>
                        </CardContent>
                    </Card>

                    <Card className="col-span-3 sm:col-span-2 bg-white/[0.02] border-white/10 hover:border-rose-500/30 transition-colors duration-200">
                        <CardContent className="pt-6 text-center">
                            <div className="w-10 h-10 mx-auto rounded-xl bg-rose-500/10 flex items-center justify-center">
                                <History size={20} className="text-rose-400" />
                            </div>
                            <h3 className="mt-4 text-sm font-bold text-white">Histórico de Máquinas</h3>
                            <p className="text-gray-500 text-xs mt-1">CRM de equipamentos</p>
                        </CardContent>
                    </Card>

                    <Card className="col-span-6 sm:col-span-2 bg-white/[0.02] border-white/10 hover:border-emerald-500/30 transition-colors duration-200">
                        <CardContent className="pt-6 text-center">
                            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                <Calculator size={20} className="text-emerald-400" />
                            </div>
                            <h3 className="mt-4 text-sm font-bold text-white">Cálculo Automático</h3>
                            <p className="text-gray-500 text-xs mt-1">Horas extras, KM, totais</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Botão Ver Mais */}
                <div className="mt-10">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 rounded-2xl text-white font-medium transition-colors duration-200"
                    >
                        <span>{isExpanded ? 'Esconder módulos' : 'Ver todos os 14 módulos'}</span>
                        <ChevronDown
                            size={20}
                            className={`text-primary transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                    </button>
                </div>

                {/* Área Expandível - CSS transition em vez de framer-motion */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="pt-8 space-y-6">
                        {moduleCategories.map((cat) => {
                            const c = colors[cat.color];
                            return (
                                <div key={cat.name}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>
                                            {cat.name}
                                        </span>
                                        <div className="flex-1 h-px bg-white/5" />
                                    </div>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {cat.modules.map((mod) => {
                                            const Icon = mod.icon;
                                            return (
                                                <div key={mod.name} className={`p-4 rounded-xl ${c.bg} border ${c.border}`}>
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
                                                            <Icon size={18} className={c.text} />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <h4 className="font-semibold text-white text-sm truncate">{mod.name}</h4>
                                                            <p className="text-xs text-gray-400 truncate">{mod.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                        <div className="text-center pt-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-primary to-emerald-400 text-black font-bold rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-200">
                                <Zap size={18} className="inline mr-2 fill-black" />
                                Testar Grátis Agora
                            </button>
                        </div>
                    </div>
                </div>

                {!isExpanded && (
                    <p className="text-center text-gray-500 text-sm mt-6">
                        + Agenda, Faturamento, Analytics, Notificações e muito mais...
                    </p>
                )}
            </div>
        </section>
    );
}
