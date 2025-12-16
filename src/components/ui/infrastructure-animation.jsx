import React from "react";
import { motion } from "framer-motion";
import { Cloud, Shield, Database, Zap } from "lucide-react";
import { cn } from "../../lib/utils";

const InfrastructureAnimation = ({
    className,
    circleText = "RAT",
    badgeTexts = {
        first: "SYNC",
        second: "AUTH",
        third: "BACKUP",
        fourth: "ENCRYPT",
    },
    buttonTexts = {
        first: "Supabase",
        second: "Real-time",
    },
    title = "Infraestrutura 100% Cloud com Segurança Nível Bancário",
    lightColor = "#00FF94",
}) => {
    return (
        <div
            className={cn(
                "relative flex h-[350px] w-full max-w-[500px] flex-col items-center",
                className
            )}
        >
            {/* SVG Paths */}
            <svg
                className="h-full sm:w-full text-gray-700"
                width="100%"
                height="100%"
                viewBox="0 0 200 100"
            >
                <g
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0.4"
                    strokeDasharray="100 100"
                    pathLength="100"
                >
                    <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
                    <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
                    <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
                    <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
                    <animate
                        attributeName="stroke-dashoffset"
                        from="100"
                        to="0"
                        dur="1s"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.25,0.1,0.5,1"
                        keyTimes="0; 1"
                    />
                </g>
                {/* Light animations */}
                <g mask="url(#db-mask-1)">
                    <circle
                        className="database db-light-1"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-green-grad)"
                    />
                </g>
                <g mask="url(#db-mask-2)">
                    <circle
                        className="database db-light-2"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-green-grad)"
                    />
                </g>
                <g mask="url(#db-mask-3)">
                    <circle
                        className="database db-light-3"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-green-grad)"
                    />
                </g>
                <g mask="url(#db-mask-4)">
                    <circle
                        className="database db-light-4"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-green-grad)"
                    />
                </g>
                {/* Buttons */}
                <g stroke="currentColor" fill="none" strokeWidth="0.4">
                    {/* First Button - SYNC */}
                    <g>
                        <rect fill="#0a0a0a" x="14" y="5" width="34" height="10" rx="5" stroke="#00FF94" strokeWidth="0.3" />
                        <CloudIcon x="18" y="7.5" />
                        <text x="28" y="12" fill="#00FF94" stroke="none" fontSize="5" fontWeight="600">
                            {badgeTexts.first}
                        </text>
                    </g>
                    {/* Second Button - AUTH */}
                    <g>
                        <rect fill="#0a0a0a" x="60" y="5" width="34" height="10" rx="5" stroke="#00B8FF" strokeWidth="0.3" />
                        <ShieldIcon x="64" y="7.5" />
                        <text x="74" y="12" fill="#00B8FF" stroke="none" fontSize="5" fontWeight="600">
                            {badgeTexts.second}
                        </text>
                    </g>
                    {/* Third Button - BACKUP */}
                    <g>
                        <rect fill="#0a0a0a" x="105" y="5" width="40" height="10" rx="5" stroke="#a855f7" strokeWidth="0.3" />
                        <DatabaseIconSVG x="109" y="7.5" />
                        <text x="119" y="12" fill="#a855f7" stroke="none" fontSize="5" fontWeight="600">
                            {badgeTexts.third}
                        </text>
                    </g>
                    {/* Fourth Button - ENCRYPT */}
                    <g>
                        <rect fill="#0a0a0a" x="150" y="5" width="44" height="10" rx="5" stroke="#f59e0b" strokeWidth="0.3" />
                        <LockIcon x="154" y="7.5" />
                        <text x="164" y="12" fill="#f59e0b" stroke="none" fontSize="5" fontWeight="600">
                            {badgeTexts.fourth}
                        </text>
                    </g>
                </g>
                <defs>
                    <mask id="db-mask-1">
                        <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" />
                    </mask>
                    <mask id="db-mask-2">
                        <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" />
                    </mask>
                    <mask id="db-mask-3">
                        <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" />
                    </mask>
                    <mask id="db-mask-4">
                        <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" />
                    </mask>
                    <radialGradient id="db-green-grad" fx="1">
                        <stop offset="0%" stopColor={lightColor} />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
            </svg>
            {/* Main Box */}
            <div className="absolute bottom-10 flex w-full flex-col items-center">
                {/* bottom shadow */}
                <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-xl bg-primary/10 blur-xl" />
                {/* box title */}
                <div className="absolute -top-3 z-20 flex items-center justify-center rounded-xl border border-primary/30 bg-[#0a0a0a] px-3 py-1.5 sm:-top-4">
                    <Zap className="size-3 text-primary" />
                    <span className="ml-2 text-[10px] text-gray-300">{title}</span>
                </div>
                {/* box outer circle */}
                <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border border-primary/30 bg-[#0a0a0a] font-bold text-xs text-primary">
                    {circleText}
                </div>
                {/* box content */}
                <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
                    {/* Badges */}
                    <div className="absolute bottom-8 left-8 z-10 h-7 rounded-full bg-[#0a0a0a] px-3 text-xs border border-secondary/30 flex items-center gap-2">
                        <Database className="size-4 text-secondary" />
                        <span className="text-gray-300">{buttonTexts.first}</span>
                    </div>
                    <div className="absolute right-12 z-10 hidden h-7 rounded-full bg-[#0a0a0a] px-3 text-xs sm:flex border border-primary/30 items-center gap-2">
                        <Zap className="size-4 text-primary" />
                        <span className="text-gray-300">{buttonTexts.second}</span>
                    </div>
                    {/* Animated Circles */}
                    <motion.div
                        className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-primary/20 bg-primary/5"
                        animate={{ scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t border-primary/15 bg-primary/3"
                        animate={{ scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-primary/10 bg-primary/2"
                        animate={{ scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t border-primary/5"
                        animate={{ scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </div>
        </div>
    );
};

export default InfrastructureAnimation;

// SVG Icons as inline components
const CloudIcon = ({ x = "0", y = "0" }) => (
    <svg x={x} y={y} width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
);

const ShieldIcon = ({ x = "0", y = "0" }) => (
    <svg x={x} y={y} width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="#00B8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const DatabaseIconSVG = ({ x = "0", y = "0" }) => (
    <svg x={x} y={y} width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
);

const LockIcon = ({ x = "0", y = "0" }) => (
    <svg x={x} y={y} width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);
