"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Content renders in place. The fade-in reveals were removed on 2026-11-17:
// in a capture of the live page half the home sections sat at partial opacity
// and read as empty, and Caleb called the motion an AI design tell.
export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type Props = { children: ReactNode; className?: string; delay?: number };

export function Reveal({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}

export function StaggerGroup({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
