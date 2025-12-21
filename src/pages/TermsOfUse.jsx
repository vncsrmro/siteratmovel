import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, AlertTriangle, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const sections = [
    {
        id: 'aceitacao',
        title: '1. Aceitação dos Termos',
        content: `Ao acessar ou usar o PaperX ("Serviço"), você concorda em cumprir estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar o Serviço.

O uso continuado do Serviço após alterações nos termos constitui aceitação das modificações.`,
        highlight: true,
    },
    {
        id: 'servico',
        title: '2. Descrição do Serviço',
        content: `O PaperX é uma plataforma de gestão para assistências técnicas que oferece:

• Gerenciamento de Ordens de Serviço (OS)
• Cadastro de clientes e máquinas
• Controle financeiro básico
• Assinatura digital de documentos
• Funcionamento offline com sincronização
• Relatórios e dashboards

O Serviço é oferecido "como está" e pode ser modificado a qualquer momento.`,
    },
    {
        id: 'conta',
        title: '3. Conta do Usuário',
        content: `Para usar o Serviço, você deve:

• Ter pelo menos 18 anos de idade
• Fornecer informações verdadeiras e completas no cadastro
• Manter a segurança da sua senha e credenciais
• Notificar-nos imediatamente sobre uso não autorizado
• Ser responsável por todas as atividades na sua conta

Podemos suspender ou encerrar contas que violem estes termos.`,
    },
    {
        id: 'pagamento',
        title: '4. Pagamento e Assinatura',
        content: `Os planos pagos estão sujeitos às seguintes condições:

• Cobranças são processadas automaticamente no início de cada ciclo
• Preços podem ser alterados com aviso prévio de 30 dias
• Não há reembolso para períodos parciais de uso
• O período de teste não requer cartão de crédito
• Inadimplência pode resultar em suspensão do acesso

Cancelamentos devem ser feitos antes do próximo ciclo de cobrança.`,
    },
    {
        id: 'uso',
        title: '5. Uso Aceitável',
        content: `Você concorda em NÃO usar o Serviço para:

• Atividades ilegais ou fraudulentas
• Violar direitos de propriedade intelectual
• Transmitir vírus ou código malicioso
• Tentar acessar sistemas não autorizados
• Sobrecarregar ou interferir na infraestrutura
• Coletar dados de outros usuários sem permissão
• Revender ou redistribuir o Serviço`,
        warning: true,
    },
    {
        id: 'dados',
        title: '6. Propriedade dos Dados',
        content: `Sobre os dados no Serviço:

• Você mantém a propriedade dos dados que inserir
• Nos concede licença para processar e armazenar seus dados
• É responsável por backups adicionais que considerar necessários
• Pode exportar seus dados a qualquer momento
• Após cancelamento, seus dados são retidos por 90 dias

Consulte nossa Política de Privacidade para mais detalhes.`,
    },
    {
        id: 'propriedade',
        title: '7. Propriedade Intelectual',
        content: `Todos os direitos de propriedade intelectual do Serviço pertencem à InovaSys:

• Código-fonte, design e interface do aplicativo
• Marcas registradas PaperX e InovaSys
• Documentação e materiais de suporte
• Algoritmos e tecnologias proprietárias

O uso do Serviço não lhe concede nenhum direito de propriedade intelectual.`,
    },
    {
        id: 'limitacao',
        title: '8. Limitação de Responsabilidade',
        content: `A InovaSys não será responsável por:

• Danos indiretos, incidentais ou consequenciais
• Perda de dados, lucros ou oportunidades de negócio
• Interrupções ou falhas no Serviço
• Ações de terceiros ou integrações externas
• Uso indevido por parte do usuário

Nossa responsabilidade máxima está limitada ao valor pago nos últimos 12 meses.`,
        warning: true,
    },
    {
        id: 'rescisao',
        title: '9. Rescisão',
        content: `Este acordo pode ser encerrado:

• Por você, a qualquer momento, cancelando sua assinatura
• Por nós, com aviso prévio de 30 dias
• Imediatamente por nós, em caso de violação dos termos
• Automaticamente, após inadimplência superior a 30 dias

Após rescisão, você perderá acesso ao Serviço e seus dados serão tratados conforme nossa Política de Privacidade.`,
    },
    {
        id: 'geral',
        title: '10. Disposições Gerais',
        content: `Disposições adicionais:

• **Legislação Aplicável**: Leis da República Federativa do Brasil
• **Foro**: Comarca de São Paulo - SP
• **Integralidade**: Este documento representa o acordo completo entre as partes
• **Renúncia**: A não aplicação de qualquer cláusula não implica renúncia
• **Cessão**: Você não pode transferir sua conta sem nosso consentimento
• **Alterações**: Podemos modificar estes termos com aviso prévio de 15 dias`,
    },
];

export default function TermsOfUse() {
    return (
        <PageLayout title="Termos de Uso">
            {/* Last Updated */}
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
                <Calendar size={16} />
                <span>Última atualização: 16 de Dezembro de 2024</span>
            </div>

            {/* Intro Card */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                        <FileText size={24} />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-2">Leia com Atenção</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Estes Termos de Uso ("Termos") regem o uso do aplicativo e serviços PaperX, desenvolvido e operado pela InovaSys Tecnologia LTDA ("InovaSys", "nós" ou "nosso").
                        </p>
                    </div>
                </div>
            </div>

            {/* Sections */}
            <div className="space-y-6">
                {sections.map((section, i) => (
                    <motion.div
                        key={section.id}
                        id={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        className={`rounded-2xl p-6 scroll-mt-24 ${section.highlight
                                ? 'bg-primary/10 border-2 border-primary/30'
                                : section.warning
                                    ? 'bg-orange-500/10 border border-orange-500/20'
                                    : 'bg-white/5 border border-white/10'
                            }`}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            {section.highlight && <CheckCircle size={20} className="text-primary" />}
                            {section.warning && <AlertTriangle size={20} className="text-orange-400" />}
                            <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                        </div>
                        <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                            {section.content.split('**').map((part, j) =>
                                j % 2 === 1 ? <strong key={j} className="text-white">{part}</strong> : part
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Footer Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6"
            >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm text-center sm:text-left">
                        Ao usar o PaperX, você concorda com estes termos.
                    </p>
                    <div className="flex gap-3">
                        <Link
                            to="/privacidade"
                            className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2"
                        >
                            Política de Privacidade
                            <ArrowRight size={16} />
                        </Link>
                        <Link
                            to="/"
                            className="px-4 py-2 bg-primary text-black text-sm font-bold rounded-xl hover:bg-primary/90 transition-colors"
                        >
                            Voltar ao Início
                        </Link>
                    </div>
                </div>
            </motion.div>
        </PageLayout>
    );
}
