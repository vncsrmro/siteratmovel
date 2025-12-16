import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Calculator, Calendar, Users, Settings, PieChart, Receipt, BarChart3, Bell, Trash2, ClipboardList, Wrench, UserCog, LayoutDashboard } from 'lucide-react';

// 14 Módulos do Sistema organizados por categoria
const moduleCategories = [
    {
        name: "Operacional",
        color: "primary",
        modules: [
            {
                icon: FileText,
                name: "Gestão de RATs",
                description: "RAT Digital completo com entrada de voz, fotos categorizadas, apontamento de horas, cálculo automático e assinatura digital."
            },
            {
                icon: Calculator,
                name: "Orçamentos",
                description: "Criação de orçamentos com cálculo automático, link público para aprovação e conversão direta para RAT."
            },
            {
                icon: Calendar,
                name: "Agenda",
                description: "Calendário visual com agendamentos, designação de técnicos, lembretes automáticos e conversão para RAT."
            },
        ]
    },
    {
        name: "Gestão",
        color: "secondary",
        modules: [
            {
                icon: Users,
                name: "Clientes",
                description: "Cadastro completo com busca automática por CNPJ, endereço e histórico de atendimentos."
            },
            {
                icon: Wrench,
                name: "Equipamentos",
                description: "Cadastro de equipamentos por cliente com histórico completo de manutenções e PDF do histórico."
            },
            {
                icon: UserCog,
                name: "Fechamento de Técnicos",
                description: "Total de horas trabalhadas, KM rodado, cálculo de valores e PDF de fechamento."
            },
        ]
    },
    {
        name: "Financeiro",
        color: "emerald",
        modules: [
            {
                icon: Receipt,
                name: "Faturamento",
                description: "Lista de RATs para faturar, status de pagamento, formas de pagamento e número da NF."
            },
            {
                icon: PieChart,
                name: "Dashboard Financeiro",
                description: "KPIs em tempo real, gráficos de receitas/despesas, contas a pagar e alertas de vencimento."
            },
            {
                icon: BarChart3,
                name: "Analytics",
                description: "Dashboard com KPIs, receitas mensais, performance por técnico e funil de conversão."
            },
        ]
    },
    {
        name: "Sistema",
        color: "purple",
        modules: [
            {
                icon: LayoutDashboard,
                name: "Dashboard Principal",
                description: "Cards estatísticos, agenda semanal, ações rápidas personalizáveis e relatórios recentes."
            },
            {
                icon: Bell,
                name: "Notificações",
                description: "Push notifications, histórico completo, busca e filtros, preferências por tipo de evento."
            },
            {
                icon: Settings,
                name: "Configurações",
                description: "Dados da empresa, logotipo personalizado, preferências de notificação e taxas globais."
            },
            {
                icon: ClipboardList,
                name: "Gerenciamento de Usuários",
                description: "Lista de usuários, alterar roles (Master/Comum), ativar/desativar e convidar novos."
            },
            {
                icon: Trash2,
                name: "Lixeira",
                description: "Visualizar itens deletados, restaurar RATs e Orçamentos, exclusão permanente."
            },
        ]
    }
];

const colorMap = {
    primary: {
        bg: "bg-primary/10",
        border: "border-primary/20",
        text: "text-primary",
        icon: "bg-primary/20",
    },
    secondary: {
        bg: "bg-secondary/10",
        border: "border-secondary/20",
        text: "text-secondary",
        icon: "bg-secondary/20",
    },
    emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        text: "text-emerald-400",
        icon: "bg-emerald-500/20",
    },
    purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        text: "text-purple-400",
        icon: "bg-purple-500/20",
    },
};

export default function FeaturesModal({ isOpen, onClose }) {
    // Fechar com ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-4 md:inset-8 lg:inset-16 bg-[#0a0a0a] border border-white/10 rounded-2xl z-50 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Todas as Funcionalidades</h2>
                                <p className="text-sm text-gray-500 mt-1">14 módulos completos para sua assistência técnica</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                            >
                                <X size={20} className="text-gray-400" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="space-y-8">
                                {moduleCategories.map((category, catIndex) => {
                                    const colors = colorMap[category.color];
                                    return (
                                        <div key={category.name}>
                                            {/* Category Header */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
                                                    {category.name}
                                                </span>
                                                <div className="flex-1 h-px bg-white/5" />
                                            </div>

                                            {/* Modules Grid */}
                                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {category.modules.map((module, modIndex) => {
                                                    const Icon = module.icon;
                                                    return (
                                                        <motion.div
                                                            key={module.name}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: (catIndex * 0.1) + (modIndex * 0.05) }}
                                                            className={`p-4 rounded-xl ${colors.bg} border ${colors.border} hover:scale-[1.02] transition-transform`}
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <div className={`w-10 h-10 rounded-lg ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                                                                    <Icon size={20} className={colors.text} />
                                                                </div>
                                                                <div>
                                                                    <h3 className="font-semibold text-white text-sm">{module.name}</h3>
                                                                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{module.description}</p>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-white/10 bg-black/50">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-sm text-gray-500 text-center sm:text-left">
                                    ✓ Funciona 100% Offline &nbsp; ✓ Assinatura Digital &nbsp; ✓ Auto-save
                                </p>
                                <button
                                    onClick={onClose}
                                    className="px-6 py-3 bg-gradient-to-r from-primary to-emerald-400 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-shadow"
                                >
                                    Testar Grátis
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
