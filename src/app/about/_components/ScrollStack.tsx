"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export interface ScrollStackProps {
  children: React.ReactNode[];
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: number; // e.g. 100px from top
  baseScale?: number;
  className?: string;
}

export function ScrollStack({
  children,
  itemScale = 0.035,
  itemStackDistance = 28,
  stackPosition = 110,
  className = ""
}: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor window scroll relative to the main ScrollStack container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const total = children.length;

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-scroller ${className}`}
      style={{
        position: "relative",
        width: "100%",
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)"
      }}
    >
      <div
        className="scroll-stack-inner"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          paddingBottom: "80px"
        }}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <ScrollStackItem
              key={index}
              index={index}
              total={total}
              itemScale={itemScale}
              itemStackDistance={itemStackDistance}
              stackPosition={stackPosition}
              scrollYProgress={scrollYProgress}
            >
              {child}
            </ScrollStackItem>
          );
        })}
      </div>

      {/* Sentinel element to ensure smooth release at end of stack */}
      <div className="scroll-stack-end" style={{ width: "100%", height: "1px" }} />
    </div>
  );
}

interface ScrollStackItemProps {
  children: React.ReactNode;
  index: number;
  total: number;
  itemScale: number;
  itemStackDistance: number;
  stackPosition: number;
  scrollYProgress: MotionValue<number>;
}

function ScrollStackItem({
  children,
  index,
  total,
  itemScale,
  itemStackDistance,
  stackPosition,
  scrollYProgress
}: ScrollStackItemProps) {
  // Calculate window trigger range for this specific card
  const cardStart = index / total;
  const cardEnd = (index + 1) / total;

  // As subsequent cards scroll over this card, scale down slightly for depth
  const scale = useTransform(
    scrollYProgress,
    [cardStart, Math.min(1, cardEnd + 0.2)],
    [1, Math.max(0.85, 1 - (total - index - 1) * itemScale)]
  );

  // Slight opacity shift on deep stack
  const opacity = useTransform(
    scrollYProgress,
    [cardStart, Math.min(1, cardEnd + 0.3)],
    [1, 0.9 + index * 0.015]
  );

  const stickyTop = stackPosition + index * itemStackDistance;

  return (
    <div
      className="scroll-stack-card-wrapper"
      style={{
        position: "sticky",
        top: `${stickyTop}px`,
        zIndex: index + 1,
        width: "100%"
      }}
    >
      <motion.div
        className="scroll-stack-card"
        style={{
          scale,
          opacity,
          transformOrigin: "top center",
          willChange: "transform, filter",
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
