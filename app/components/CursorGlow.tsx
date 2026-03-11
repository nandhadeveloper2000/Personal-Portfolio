"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
    const mouseX = useMotionValue(-200);
    const mouseY = useMotionValue(-200);

    const x = useSpring(mouseX, {
        stiffness: 120,
        damping: 20,
        mass: 0.4,
    });

    const y = useSpring(mouseY, {
        stiffness: 120,
        damping: 20,
        mass: 0.4,
    });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 160);
            mouseY.set(e.clientY - 160);
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                style={{ x, y }}
                className="pointer-events-none fixed left-0 top-0 z-1 hidden h-80 w-[320px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,rgba(168,85,247,0.12)_35%,rgba(236,72,153,0.08)_55%,transparent_75%)] blur-3xl lg:block"
            />
            <motion.div
                style={{ x, y }}
                className="pointer-events-none fixed left-0 top-0 z-1 hidden h-45 w-45 translate-x-17.5 translate-y-17.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,transparent_70%)] blur-2xl lg:block"
            />
        </>
    );
}