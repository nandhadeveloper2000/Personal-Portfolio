"use client";

import { useEffect, useRef, useState } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { FiArrowUp, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

type DockItem = {
    label: string;
    href?: string;
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    glow: string;
    external?: boolean;
    onClick?: () => void;
    show?: boolean;
};

type MagneticIconButtonProps = {
    item: DockItem;
    mobile?: boolean;
};

function MagneticIconButton({
    item,
    mobile = false,
}: MagneticIconButtonProps) {
    const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const springX = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.5 });
    const springY = useSpring(my, { stiffness: 220, damping: 18, mass: 0.5 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (mobile || !ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        mx.set(x * 0.18);
        my.set(y * 0.18);
    };

    const handleMouseLeave = () => {
        mx.set(0);
        my.set(0);
    };

    const Icon = item.icon;

    const sharedClassName =
        "group relative flex items-center justify-center outline-none";

    const content = (
        <>
            {/* Hover label */}
            {!mobile && (
                <div className="pointer-events-none absolute right-[calc(100%+14px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/85 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/90 opacity-0 shadow-[0_18px_40px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block lg:-translate-x-2">
                    <span className="tracking-[0.2em] text-slate-400">{item.label}</span>
                </div>
            )}

            <motion.div
                style={!mobile ? { x: springX, y: springY } : undefined}
                className={`relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/6 shadow-[0_14px_35px_rgba(2,6,23,0.38)] backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 ${item.glow} sm:h-14.5 sm:w-14.5`}
            >
                <div className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))]" />
                <div className="absolute inset-px rounded-full bg-slate-950/40" />
                <div
                    className={`absolute inset-1.75 rounded-full bg-linear-to-br ${item.gradient} opacity-95 blur-[0.2px] transition duration-300 group-hover:scale-105`}
                />
                <div className="absolute inset-1.75 rounded-full bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <Icon className="relative z-10 h-5 w-5 text-white sm:h-5.5 sm:w-5.5" />
            </motion.div>
        </>
    );

    if (item.href) {
        const isExternal = item.external;

        return (
            <motion.a
                ref={ref as React.RefObject<HTMLAnchorElement>}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileTap={{ scale: 0.96 }}
                className={sharedClassName}
                aria-label={item.label}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            ref={ref as React.RefObject<HTMLButtonElement>}
            type="button"
            onClick={item.onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.96 }}
            className={sharedClassName}
            aria-label={item.label}
        >
            {content}
        </motion.button>
    );
}

export default function LuxuryFloatingContactBar() {
    const [showTop, setShowTop] = useState(false);

    const phone = "918939615914";
    const whatsappHref = `https://wa.me/${phone}?text=Hello%20Nandhakumar%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`;
    const callHref = `tel:${phone}`;

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 260);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const items: DockItem[] = [
        {
            label: "WHATSAPP",
            href: whatsappHref,
            icon: FaWhatsapp,
            gradient: "from-emerald-400 via-green-500 to-lime-400",
            glow: "group-hover:shadow-[0_18px_45px_rgba(34,197,94,0.36)]",
            external: true,
            show: true,
        },
        {
            label: "CALL",
            href: callHref,
            icon: FiPhone,
            gradient: "from-violet-500 via-fuchsia-500 to-indigo-500",
            glow: "group-hover:shadow-[0_18px_45px_rgba(168,85,247,0.34)]",
            show: true,
        },
        {
            label: "TOP",
            icon: FiArrowUp,
            gradient: "from-sky-400 via-cyan-400 to-indigo-500",
            glow: "group-hover:shadow-[0_18px_45px_rgba(56,189,248,0.30)]",
            onClick: scrollToTop,
            show: showTop,
        },
    ];

    return (
        <>
            {/* Desktop / tablet floating vertical dock */}
            <div className="fixed bottom-6 right-5 z-80 hidden sm:block">
                <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.45 }}
                    className="relative"
                >
                    <div className="pointer-events-none absolute -inset-5 rounded-4xl bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.18),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.14),transparent_30%)] blur-2xl" />

                    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/50 p-3 shadow-[0_25px_70px_rgba(2,6,23,0.55)] backdrop-blur-2xl">
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
                        <div className="relative flex flex-col gap-3">
                            {items
                                .filter((item) => item.show)
                                .map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: 20, scale: 0.94 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{ duration: 0.32, delay: index * 0.06 }}
                                    >
                                        <MagneticIconButton item={item} />
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Mobile right-side short floating dock */}
            <div className="fixed bottom-25 right-3 z-80 sm:hidden">
                <motion.div
                    initial={{ opacity: 0, x: 18, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.38 }}
                    className="relative"
                >
                    <div className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.16),transparent_35%)] blur-xl" />

                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-2.5 shadow-[0_18px_50px_rgba(2,6,23,0.45)] backdrop-blur-2xl">
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]" />

                        <div className="relative flex flex-col items-center gap-2.5">
                            {items
                                .filter((item) => item.show)
                                .map((item) => (
                                    <MagneticIconButton
                                        key={item.label}
                                        item={item}
                                        mobile
                                    />
                                ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}