import React from 'react';
import { cn } from '../../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './avatar';

export function TestimonialCard({
    author,
    text,
    href,
    className
}) {
    const Card = href ? 'a' : 'div';

    return (
        <Card
            {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn(
                "flex flex-col rounded-2xl border border-white/10",
                "bg-gradient-to-b from-white/[0.08] to-white/[0.02]",
                "p-6 text-start backdrop-blur-sm",
                "hover:from-white/[0.12] hover:to-white/[0.04]",
                "hover:border-primary/30",
                "w-[320px] sm:w-[360px]",
                "transition-all duration-300",
                className
            )}
        >
            <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-14 w-14 ring-2 ring-primary/20">
                    <AvatarImage src={author.avatar} alt={author.name} />
                    <AvatarFallback className="bg-primary/20 text-primary font-bold">
                        {author.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                    <h3 className="text-base font-bold text-white leading-tight">
                        {author.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {author.handle}
                    </p>
                </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                "{text}"
            </p>
        </Card>
    );
}
