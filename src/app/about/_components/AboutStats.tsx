"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({
  targetValue,
  suffix = "",
  duration = 2.2
}: {
  targetValue: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = (timestamp - startTimestamp) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Apple-like smooth easeOutExpo easing curve
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easedProgress * targetValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, targetValue, duration]);

  const formattedCount = count.toLocaleString("en-US");

  return (
    <span ref={ref}>
      {formattedCount} {suffix}
    </span>
  );
}

export default function AboutStats() {
  const stats = [
    { targetValue: 15, suffix: "+", label: "Years Experience" },
    { targetValue: 10000, suffix: "+", label: "Students Mentored" },
    { targetValue: 50, suffix: "+", label: "Industry Mentors" },
    { targetValue: 100, suffix: "%", label: "Placement Assistance" },
  ];

  return (
    <section style={{ padding: "48px 0", background: "#FFFFFF", borderTop: "1px solid #EDE9FE", borderBottom: "1px solid #EDE9FE" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", textAlign: "center" }} className="grid-2col">
          {stats.map((st, idx) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <span style={{ fontFamily: "var(--font-headings), sans-serif", fontSize: "42px", fontWeight: "900", color: "#0B1F3A", lineHeight: "1" }}>
                <AnimatedCounter targetValue={st.targetValue} suffix={st.suffix} />
              </span>
              <span style={{ fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "#64748B", marginTop: "8px" }}>
                {st.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
