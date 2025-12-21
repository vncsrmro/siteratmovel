import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, MessageCircle, Mail, HelpCircle, CreditCard, Settings, Zap } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const faqCategories = [
    { id: 'conta', label: 'Conta', icon: <HelpCircle size={18} /> },
    { id: 'pagamentos', label: 'Pagamentos', icon: <CreditCard size={18} /> },
    { id: 'tecnico', label: 'Técnico', icon: <Settings size={18} /> },
    { id: 'integracao', label: 'Integração', icon: <Zap size={18} /> },
];

const faqItems = [
    {
        category: 'conta',
        question: 'Como criar minha conta no PaperX?',
        answer: 'Para criar sua conta, acesse nosso site e clique em "Testar Grátis". Preencha seus dados e você receberá um email de confirmação. O processo leva menos de 2 minutos!'
    },
    {
        category: 'conta',
        question: 'Posso ter múltiplos usuários na mesma conta?',
        answer: 'Sim! Dependendo do seu plano, você pode adicionar técnicos ilimitados. Cada usuário terá seu próprio login e você pode gerenciar as permissões de cada um.'
    },
    {
        category: 'conta',
        question: 'Como alterar minha senha?',
        answer: 'Acesse Configurações > Minha Conta > Segurança. Clique em "Alterar Senha" e siga as instruções. Se esqueceu sua senha, use a opção "Esqueci minha senha" na tela de login.'
    },
    {
        category: 'pagamentos',
        question: 'Quais formas de pagamento são aceitas?',
        answer: 'Aceitamos cartões de crédito (Visa, Mastercard, Elo, Amex), boleto bancário e PIX. Para planos anuais, oferecemos desconto especial no pagamento à vista.'
    },
    {
        category: 'pagamentos',
        question: 'Posso cancelar a qualquer momento?',
        answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem multa. O acesso continua ativo até o final do período pago. Seus dados ficam salvos por 90 dias após o cancelamento.'
    },
    {
        category: 'pagamentos',
        question: 'Como funciona o período de teste?',
        answer: 'Oferecemos 14 dias de teste grátis com acesso a todas as funcionalidades. Não pedimos cartão de crédito para começar. Ao final do período, você escolhe o plano ideal.'
    },
    {
        category: 'tecnico',
        question: 'O app funciona sem internet?',
        answer: 'Sim! O PaperX foi projetado para funcionar 100% offline. Suas OS, clientes e máquinas ficam sincronizados localmente. Quando voltar a ter conexão, tudo é sincronizado automaticamente.'
    },
    {
        category: 'tecnico',
        question: 'Quais dispositivos são compatíveis?',
        answer: 'O PaperX funciona em smartphones e tablets Android (versão 8.0+) e iOS (versão 14+). Também temos versão web para acessar no computador.'
    },
    {
        category: 'tecnico',
        question: 'Como funciona a assinatura digital?',
        answer: 'O cliente assina diretamente na tela do seu dispositivo. A assinatura é capturada com data, hora e geolocalização, garantindo validade jurídica para suas OS.'
    },
    {
        category: 'integracao',
        question: 'Posso integrar com meu sistema de notas fiscais?',
        answer: 'Sim! Temos integração nativa com os principais sistemas de NF-e do mercado. Também oferecemos API REST completa para integrações personalizadas.'
    },
    {
        category: 'integracao',
        question: 'Como importar meus dados de outro sistema?',
        answer: 'Oferecemos importação via planilha Excel/CSV para clientes, máquinas e produtos. Nossa equipe de suporte pode ajudar na migração sem custo adicional.'
    },
    {
        category: 'integracao',
        question: 'Vocês oferecem API para desenvolvedores?',
        answer: 'Sim! Nossa API REST está disponível para clientes dos planos Profissional e Empresarial. Documentação completa disponível em nossa central de desenvolvedores.'
    },
];

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
                <span className="font-medium text-white pr-4">{question}</span>
                <ChevronDown
                    size={20}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function HelpCenter() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('conta');

    const filteredFAQs = faqItems.filter(item => {
        const matchesCategory = item.category === activeCategory;
        const matchesSearch = searchQuery === '' ||
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <PageLayout title="Central de Ajuda">
            {/* Search */}
            <div className="relative mb-8">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    placeholder="Buscar dúvidas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 mb-8">
                {faqCategories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${activeCategory === cat.id
                                ? 'bg-primary text-black'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                            }`}
                    >
                        {cat.icon}
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4 mb-16">
                {filteredFAQs.length > 0 ? (
                    filteredFAQs.map((item, i) => (
                        <FAQItem key={i} question={item.question} answer={item.answer} />
                    ))
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        <HelpCircle size={48} className="mx-auto mb-4 opacity-50" />
                        <p>Nenhuma pergunta encontrada.</p>
                        <p className="text-sm mt-2">Tente buscar por outros termos.</p>
                    </div>
                )}
            </div>

            {/* Contact CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-8 text-center"
            >
                <h3 className="text-2xl font-bold text-white mb-3">Não encontrou o que procurava?</h3>
                <p className="text-gray-400 mb-6">Nossa equipe está pronta para ajudar você!</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://wa.me/5519960003434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors"
                    >
                        <MessageCircle size={20} />
                        WhatsApp
                    </a>
                    <a
                        href="mailto:ratmovel@inovasys.digital"
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                    >
                        <Mail size={20} />
                        Email
                    </a>
                </div>
            </motion.div>
        </PageLayout>
    );
}
