import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Bell, UserCheck, Mail, Calendar } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const sections = [
    {
        id: 'coleta',
        icon: <Database size={20} />,
        title: '1. Coleta de Dados',
        content: `Coletamos apenas os dados necessários para fornecer nossos serviços:

• **Dados de Cadastro**: Nome, email, telefone, CNPJ/CPF e endereço da empresa.
• **Dados de Uso**: Informações sobre como você utiliza o aplicativo para melhorar sua experiência.
• **Dados de Clientes**: Informações que você cadastra sobre seus clientes e máquinas.
• **Dados Financeiros**: Informações de pagamento processadas por nossos parceiros de pagamento (Stripe/PagSeguro).

Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.`
    },
    {
        id: 'uso',
        icon: <Eye size={20} />,
        title: '2. Uso dos Dados',
        content: `Utilizamos seus dados para:

• Fornecer, manter e melhorar nossos serviços
• Processar transações e enviar notificações relacionadas
• Enviar comunicações sobre atualizações e novos recursos
• Fornecer suporte técnico e responder suas solicitações
• Detectar, prevenir e resolver problemas técnicos ou de segurança
• Cumprir obrigações legais e regulatórias`
    },
    {
        id: 'armazenamento',
        icon: <Lock size={20} />,
        title: '3. Armazenamento e Segurança',
        content: `Seus dados são tratados com máxima segurança:

• **Criptografia**: Todos os dados são criptografados em trânsito (TLS 1.3) e em repouso (AES-256).
• **Servidores**: Utilizamos infraestrutura em nuvem certificada (AWS/Google Cloud) com datacenters no Brasil.
• **Backups**: Realizamos backups automáticos diários com retenção de 30 dias.
• **Acesso Restrito**: Apenas funcionários autorizados têm acesso aos dados, mediante autenticação de dois fatores.
• **Monitoramento**: Sistemas de detecção de intrusão funcionam 24/7.`
    },
    {
        id: 'compartilhamento',
        icon: <UserCheck size={20} />,
        title: '4. Compartilhamento de Dados',
        content: `Compartilhamos dados apenas quando necessário:

• **Processadores de Pagamento**: Para processar suas transações financeiras.
• **Serviços de Infraestrutura**: Provedores de nuvem e CDN para entrega do serviço.
• **Obrigação Legal**: Quando exigido por lei, ordem judicial ou autoridade governamental.
• **Proteção de Direitos**: Para proteger nossos direitos, propriedade ou segurança.

Todos os nossos parceiros estão sujeitos a acordos de confidencialidade e conformidade com a LGPD.`
    },
    {
        id: 'direitos',
        icon: <Shield size={20} />,
        title: '5. Seus Direitos (LGPD)',
        content: `De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:

• **Acesso**: Solicitar uma cópia de todos os dados que temos sobre você.
• **Correção**: Corrigir dados incompletos, inexatos ou desatualizados.
• **Exclusão**: Solicitar a exclusão dos seus dados pessoais.
• **Portabilidade**: Receber seus dados em formato estruturado para transferência.
• **Revogação**: Revogar o consentimento para processamento de dados.
• **Oposição**: Opor-se ao processamento de dados em certas circunstâncias.

Para exercer qualquer destes direitos, entre em contato conosco.`
    },
    {
        id: 'cookies',
        icon: <Bell size={20} />,
        title: '6. Cookies e Rastreamento',
        content: `Utilizamos cookies e tecnologias similares para:

• **Cookies Essenciais**: Necessários para o funcionamento do site/app.
• **Cookies de Desempenho**: Para entender como você usa nossos serviços.
• **Cookies de Funcionalidade**: Para lembrar suas preferências.

Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.`
    },
    {
        id: 'contato',
        icon: <Mail size={20} />,
        title: '7. Contato',
        content: `Para questões sobre privacidade e proteção de dados:

• **Email**: privacidade@inovasys.digital
• **WhatsApp**: (19) 9600-3434
• **Encarregado de Dados (DPO)**: dpo@inovasys.digital

Responderemos sua solicitação em até 15 dias úteis.`
    },
];

export default function PrivacyPolicy() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <PageLayout title="Política de Privacidade">
            {/* Last Updated */}
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
                <Calendar size={16} />
                <span>Última atualização: 16 de Dezembro de 2024</span>
            </div>

            {/* Intro */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <p className="text-gray-300 leading-relaxed">
                    A InovaSys e o RAT Móvel estão comprometidos em proteger sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12">
                <h2 className="text-lg font-semibold text-white mb-4">Índice</h2>
                <nav className="grid sm:grid-cols-2 gap-2">
                    {sections.map(section => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="flex items-center gap-2 text-left text-gray-400 hover:text-primary transition-colors text-sm py-1"
                        >
                            <span className="text-primary">{section.icon}</span>
                            {section.title}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Sections */}
            <div className="space-y-8">
                {sections.map((section, i) => (
                    <motion.div
                        key={section.id}
                        id={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 scroll-mt-24"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                                {section.icon}
                            </div>
                            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                        </div>
                        <div className="text-gray-400 leading-relaxed whitespace-pre-line prose-strong:text-white">
                            {section.content.split('**').map((part, j) =>
                                j % 2 === 1 ? <strong key={j} className="text-white">{part}</strong> : part
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </PageLayout>
    );
}
