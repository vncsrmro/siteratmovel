import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, BookOpen, Smartphone, FileText, Settings, Users, BarChart3, Filter } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'inicio', label: 'Primeiros Passos' },
    { id: 'os', label: 'Ordens de Serviço' },
    { id: 'financeiro', label: 'Financeiro' },
    { id: 'configuracao', label: 'Configuração' },
];

const tutorials = [
    {
        id: 1,
        category: 'inicio',
        title: 'Configuração Inicial do PaperX',
        description: 'Aprenda a configurar sua conta e personalizar o app para seu negócio.',
        duration: '8 min',
        icon: <Settings size={24} />,
        gradient: 'from-primary to-emerald-400',
    },
    {
        id: 2,
        category: 'inicio',
        title: 'Cadastrando seus Primeiros Clientes',
        description: 'Como adicionar clientes, máquinas e histórico de atendimentos.',
        duration: '6 min',
        icon: <Users size={24} />,
        gradient: 'from-blue-500 to-cyan-400',
    },
    {
        id: 3,
        category: 'os',
        title: 'Criando Ordens de Serviço',
        description: 'Passo a passo completo para criar e gerenciar suas OS.',
        duration: '10 min',
        icon: <FileText size={24} />,
        gradient: 'from-purple-500 to-pink-400',
    },
    {
        id: 4,
        category: 'os',
        title: 'Assinatura Digital na Prática',
        description: 'Como coletar assinaturas dos clientes diretamente no app.',
        duration: '4 min',
        icon: <Smartphone size={24} />,
        gradient: 'from-orange-500 to-yellow-400',
    },
    {
        id: 5,
        category: 'os',
        title: 'Modo Offline: Como Funciona',
        description: 'Entenda como trabalhar sem internet e sincronizar depois.',
        duration: '7 min',
        icon: <BookOpen size={24} />,
        gradient: 'from-red-500 to-rose-400',
    },
    {
        id: 6,
        category: 'financeiro',
        title: 'Controle Financeiro Integrado',
        description: 'Gerencie receitas, despesas e fluxo de caixa em um só lugar.',
        duration: '12 min',
        icon: <BarChart3 size={24} />,
        gradient: 'from-green-500 to-emerald-400',
    },
    {
        id: 7,
        category: 'financeiro',
        title: 'Gerando Relatórios e Gráficos',
        description: 'Como extrair insights valiosos dos seus dados de atendimento.',
        duration: '9 min',
        icon: <BarChart3 size={24} />,
        gradient: 'from-indigo-500 to-purple-400',
    },
    {
        id: 8,
        category: 'configuracao',
        title: 'Personalizando Modelos de OS',
        description: 'Crie templates personalizados para diferentes tipos de serviço.',
        duration: '8 min',
        icon: <FileText size={24} />,
        gradient: 'from-teal-500 to-cyan-400',
    },
];

const stepByStepGuides = [
    {
        title: 'Primeiros Passos',
        steps: [
            'Baixe o app na Play Store ou App Store',
            'Crie sua conta com email e senha',
            'Complete as informações da sua empresa',
            'Cadastre seus primeiros clientes',
            'Crie sua primeira Ordem de Serviço',
        ],
    },
    {
        title: 'Configurando sua Equipe',
        steps: [
            'Acesse Configurações > Usuários',
            'Clique em "Adicionar Técnico"',
            'Preencha nome, email e telefone',
            'Defina as permissões de acesso',
            'Envie o convite por email',
        ],
    },
];

function TutorialCard({ tutorial }) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
        >
            {/* Thumbnail */}
            <div className={`relative h-40 bg-gradient-to-br ${tutorial.gradient} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative text-white/90">
                    {tutorial.icon}
                </div>
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Play size={24} className="text-white ml-1 fill-white" />
                    </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-xs text-white">
                    <Clock size={12} />
                    {tutorial.duration}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {tutorial.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    {tutorial.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Tutorials() {
    const [activeCategory, setActiveCategory] = useState('todos');

    const filteredTutorials = activeCategory === 'todos'
        ? tutorials
        : tutorials.filter(t => t.category === activeCategory);

    return (
        <PageLayout title="Tutoriais">
            <p className="text-gray-400 text-lg mb-8">
                Aprenda tudo sobre o PaperX com nossos tutoriais em vídeo e guias passo a passo.
            </p>

            {/* Category Filter */}
            <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
                <Filter size={18} className="text-gray-500 flex-shrink-0" />
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === cat.id
                                ? 'bg-primary text-black'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Video Tutorials Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
                {filteredTutorials.map(tutorial => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
            </div>

            {/* Step by Step Guides */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <BookOpen size={24} className="text-primary" />
                    Guias Rápidos
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {stepByStepGuides.map((guide, i) => (
                        <div
                            key={i}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6"
                        >
                            <h3 className="font-semibold text-white mb-4">{guide.title}</h3>
                            <ol className="space-y-3">
                                {guide.steps.map((step, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center">
                                            {j + 1}
                                        </span>
                                        <span className="text-gray-400 text-sm leading-relaxed">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            </div>

            {/* Coming Soon */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-2xl p-6 text-center"
            >
                <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full mb-3">
                    EM BREVE
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">Novos tutoriais toda semana</h3>
                <p className="text-gray-500 text-sm">
                    Estamos preparando mais conteúdos para ajudar você a dominar o PaperX.
                </p>
            </motion.div>
        </PageLayout>
    );
}
