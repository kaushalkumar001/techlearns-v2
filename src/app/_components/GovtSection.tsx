"use client";

import React, { useLayoutEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { Compass, Building2, TrendingUp, CheckCircle2, Award, Link2, Sparkles, Cpu, Layers } from "lucide-react";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = "" }) => (
  <div className="scroll-stack-card-wrapper">
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 140,
  itemScale = 0.03,
  itemStackDistance = 24,
  stackPosition = "28%",
  scaleEndPosition = "15%",
  baseScale = 0.88,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, any>());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
        scrollContainer: scroller!
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      const wrapper = (element.parentElement as HTMLElement) || element;
      if (useWindowScroll) {
        const rect = wrapper.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return wrapper.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? (document.querySelector(".scroll-stack-end") as HTMLElement)
      : (scrollerRef.current?.querySelector(".scroll-stack-end") as HTMLElement);

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const calculatedPinEnd = endElementTop - stackPositionPx - 150;
      const pinEnd = Math.max(pinStart + 300, calculatedPinEnd);

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementOffset(cardsRef.current[j]);
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 10) / 10,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.05 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";

        card.style.transform = transform;
        card.style.filter = filter;
        card.style.zIndex = `${i + 1}`;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.08,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      lenis.on("scroll", handleScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector(".scroll-stack-inner") as HTMLElement,
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        gestureOrientation: "vertical",
        wheelMultiplier: 1,
        lerp: 0.08,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      lenis.on("scroll", handleScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller && !useWindowScroll) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scroller
        ? scroller.querySelectorAll(".scroll-stack-card")
        : []
    ) as HTMLElement[];

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
      card.style.webkitTransform = "translateZ(0)";
      card.style.perspective = "1000px";
      card.style.webkitPerspective = "1000px";
      card.style.zIndex = `${i + 1}`;
    });

    setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

const strategicTargetsList = [
  { name: "NSDC", tag: "Primary Partner", featured: true },
  { name: "Skill India", tag: "National Hub", featured: false },
  { name: "MSDE", tag: "Ministry Body", featured: false },
  { name: "Digital India", tag: "Tech Ecosystem", featured: false },
  { name: "FutureSkills Prime", tag: "Emerging Tech", featured: true },
  { name: "nasscom", tag: "IT Industry Council", featured: false },
  { name: "Startup India", tag: "Innovation Hub", featured: false },
  { name: "AICTE", tag: "Academic Alliance", featured: false },
  { name: "MeitY ecosystem", tag: "Govt Electronics & IT", featured: false }
];

export default function GovtSection() {
  return (
    <section
      id="govt-ecosystem"
      style={{
        background: "#F5F3FF",
        borderTop: "1px solid #EDE9FE",
        borderBottom: "1px solid #EDE9FE",
        padding: "80px 0 40px",
        position: "relative",
        overflow: "visible"
      }}
    >
      <div style={{ maxWidth: "1040px", margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "56px",
            position: "relative",
            zIndex: 15,
            background: "#F5F3FF",
            paddingBottom: "12px"
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#EDE9FE",
              color: "#5B2E91",
              fontSize: "13px",
              fontWeight: "800",
              padding: "5px 16px",
              borderRadius: "9999px",
              marginBottom: "18px",
              letterSpacing: "0.05em"
            }}
          >
            07 • GOVERNMENT ECOSYSTEM
          </div>

          <h2
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontSize: "48px",
              fontWeight: "800",
              color: "#0B1F3A",
              lineHeight: "1.15",
              letterSpacing: "-0.03em",
              marginBottom: "16px"
            }}
          >
            Government &amp; National Skilling{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5B2E91 0%, #7A42BE 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Ecosystem
            </span>
          </h2>

          <div style={{ width: "48px", height: "4px", background: "#5B2E91", borderRadius: "2px", margin: "0 auto 16px" }} />

          <p style={{ fontSize: "16px", color: "#64748B", margin: "0 auto", maxWidth: "600px", fontWeight: "500" }}>
            Here I would be careful with branding.
          </p>
        </div>

        {/* Eye-Catching ScrollStack Deck */}
        <ScrollStack
          itemDistance={140}
          itemScale={0.03}
          itemStackDistance={24}
          stackPosition="22%"
          scaleEndPosition="12%"
          baseScale={0.88}
          useWindowScroll={true}
        >

          {/* CARD 1: Strategic Targets */}
          <ScrollStackItem>
            <div
              style={{
                background: "#FFFFFF",
                border: "2px solid #EDE9FE",
                borderRadius: "32px",
                padding: "44px 40px",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Top Accent Strip */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", background: "linear-gradient(90deg, #5B2E91 0%, #7A42BE 50%, #2563EB 100%)" }} />

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "16px",
                      background: "linear-gradient(135deg, #5B2E91 0%, #7A42BE 100%)",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <Compass size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: "800", color: "#5B2E91", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>
                      01 • CORE INSTITUTIONAL TARGETS
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                        fontSize: "28px",
                        fontWeight: "800",
                        color: "#0B1F3A",
                        margin: 0
                      }}
                    >
                      Strategic Targets
                    </h3>
                  </div>
                </div>

                <div
                  style={{
                    background: "#F5F3FF",
                    border: "1px solid #DDD6FE",
                    color: "#5B2E91",
                    fontSize: "12px",
                    fontWeight: "800",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <Sparkles size={14} color="#7A42BE" />
                  <span>9 National Alliances</span>
                </div>
              </div>

              <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.65", marginBottom: "28px", maxWidth: "820px" }}>
                Key government bodies, national skill development corporations, and digital technology councils aligned for enterprise learning:
              </p>

              {/* Eye-Catching Interactive Target Cards Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
                {strategicTargetsList.map((target) => (
                  <motion.div
                    key={target.name}
                    whileHover={{ y: -3, borderColor: "#5B2E91", background: "#F5F3FF" }}
                    transition={{ duration: 0.15 }}
                    style={{
                      background: target.featured ? "#F3E8FF" : "#FAF9FC",
                      border: target.featured ? "1.5px solid #C4B5FD" : "1.5px solid #E2E8F0",
                      borderRadius: "16px",
                      padding: "14px 18px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "800", color: "#0B1F3A" }}>
                        {target.name}
                      </span>
                      {target.featured && (
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#7C3AED" }} />
                      )}
                    </div>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: target.featured ? "#6D28D9" : "#64748B" }}>
                      {target.tag}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollStackItem>

          {/* CARD 2: My first target would be NSDC. */}
          <ScrollStackItem>
            <div
              style={{
                background: "#FFFFFF",
                border: "2px solid #5B2E91",
                borderRadius: "32px",
                padding: "44px 40px",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Top Accent Strip */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", background: "#5B2E91" }} />

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "16px",
                      background: "#3A1B68",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <Building2 size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: "800", color: "#5B2E91", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>
                      02 • PRIMARY STRATEGIC PARTNERSHIP
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                        fontSize: "28px",
                        fontWeight: "800",
                        color: "#0B1F3A",
                        margin: 0
                      }}
                    >
                      My first target would be NSDC.
                    </h3>
                  </div>
                </div>

                <div
                  style={{
                    background: "#3A1B68",
                    color: "#FFFFFF",
                    fontSize: "12px",
                    fontWeight: "800",
                    padding: "6px 16px",
                    borderRadius: "9999px",
                    letterSpacing: "0.04em"
                  }}
                >
                  HIGH PRIORITY TARGET
                </div>
              </div>

              <p style={{ fontSize: "15.5px", color: "#334155", lineHeight: "1.65", marginBottom: "24px", fontWeight: "400" }}>
                NSDC currently explicitly invites organizations—including companies, startups, trusts, societies and foundations—to pursue training partnerships. Its partnership framework can include approved certifications, industry linkages, Skill India Digital Hub onboarding and other skilling opportunities.
              </p>

              {/* 3 Core NSDC Pillars Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "24px" }}>
                <div style={{ background: "#F5F3FF", border: "1.5px solid #EDE9FE", borderRadius: "18px", padding: "18px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <Award size={20} color="#5B2E91" />
                    <span style={{ fontSize: "14px", fontWeight: "800", color: "#3A1B68" }}>Approved Certifications</span>
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#64748B", margin: 0, lineHeight: "1.5" }}>
                    Official government recognized credentials and skill certificates.
                  </p>
                </div>

                <div style={{ background: "#F5F3FF", border: "1.5px solid #EDE9FE", borderRadius: "18px", padding: "18px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <Link2 size={20} color="#5B2E91" />
                    <span style={{ fontSize: "14px", fontWeight: "800", color: "#3A1B68" }}>Industry Linkages</span>
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#64748B", margin: 0, lineHeight: "1.5" }}>
                    Direct integration with enterprise hiring partners and corporate networks.
                  </p>
                </div>

                <div style={{ background: "#F5F3FF", border: "1.5px solid #EDE9FE", borderRadius: "18px", padding: "18px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <Layers size={20} color="#5B2E91" />
                    <span style={{ fontSize: "14px", fontWeight: "800", color: "#3A1B68" }}>Skill India Digital Hub</span>
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#64748B", margin: 0, lineHeight: "1.5" }}>
                    Seamless onboarding to national skilling digital platforms.
                  </p>
                </div>
              </div>

              {/* Highlight Callout Banner */}
              <div
                style={{
                  background: "#FAF5FF",
                  borderLeft: "5px solid #5B2E91",
                  border: "1.5px solid #EDE9FE",
                  borderLeftWidth: "5px",
                  borderRadius: "16px",
                  padding: "18px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px"
                }}
              >
                <CheckCircle2 size={24} color="#5B2E91" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: "14px", color: "#3A1B68", lineHeight: "1.55", fontWeight: "800", margin: 0 }}>
                  That could eventually allow Techlearns to carry significantly stronger positioning than simply displaying “Digital India”.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          {/* CARD 3: FutureSkills Prime */}
          <ScrollStackItem>
            <div
              style={{
                background: "#FFFFFF",
                border: "2px solid #2563EB",
                borderRadius: "32px",
                padding: "44px 40px",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Top Accent Strip */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", background: "linear-gradient(90deg, #2563EB 0%, #7C3AED 100%)" }} />

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "16px",
                      background: "#2563EB",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <TrendingUp size={24} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: "800", color: "#2563EB", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>
                      03 • CURRICULUM ALIGNMENT &amp; ROADMAP
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                        fontSize: "28px",
                        fontWeight: "800",
                        color: "#0B1F3A",
                        margin: 0
                      }}
                    >
                      FutureSkills Prime
                    </h3>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  <span style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", color: "#1D4ED8", fontSize: "12px", fontWeight: "800", padding: "5px 12px", borderRadius: "9999px", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Cpu size={14} /> AI &amp; Cloud Focus
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "15.5px", color: "#334155", lineHeight: "1.65", marginBottom: "26px", fontWeight: "400" }}>
                This is also highly aligned with Techlearns because its emphasis includes areas such as AI, data analytics and cloud computing.
              </p>

              {/* Strategic Roadmap Diagram Container */}
              <div
                style={{
                  background: "#F8FAFC",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: "24px",
                  padding: "24px 28px"
                }}
              >
                <div style={{ fontSize: "12px", fontWeight: "800", color: "#5B2E91", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
                  RECOMMENDED EXECUTION PRIORITIZATION ROADMAP
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "nowrap", overflowX: "auto", marginBottom: "16px", paddingBottom: "4px" }}>
                  <div style={{ background: "#3A1B68", color: "#FFFFFF", padding: "10px 18px", borderRadius: "14px", fontSize: "13px", fontWeight: "800", display: "flex", alignItems: "center", gap: "6px", whiteSpace: "nowrap", flexShrink: 0 }}>
                    <span>Step 1: NSDC Partnership</span>
                  </div>

                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B2E91" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>

                  <div style={{ background: "#FFFFFF", border: "2px solid #5B2E91", color: "#0F172A", padding: "10px 18px", borderRadius: "14px", fontSize: "13px", fontWeight: "800", display: "flex", alignItems: "center", gap: "5px", whiteSpace: "nowrap", flexShrink: 0 }}>
                    <span>Step 2: FutureSkills Prime /</span>
                    <span style={{ color: "#DC2626" }}>nasscom</span>
                  </div>

                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B2E91" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>

                  <div style={{ background: "#2563EB", color: "#FFFFFF", padding: "10px 18px", borderRadius: "14px", fontSize: "13px", fontWeight: "800", whiteSpace: "nowrap", flexShrink: 0 }}>
                    Step 3: Skill India Ecosystem
                  </div>
                </div>

                <p style={{ fontSize: "13px", color: "#64748B", margin: 0, fontWeight: "600" }}>
                  Priority pathway before attempting to portray a generic Digital India association.
                </p>
              </div>
            </div>
          </ScrollStackItem>

        </ScrollStack>

      </div>

      <style jsx global>{`
        .scroll-stack-scroller {
          position: relative;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: visible;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          will-change: scroll-position;
        }

        .scroll-stack-inner {
          padding: 10px 1rem 2rem;
          min-height: auto;
        }

        .scroll-stack-card-wrapper {
          position: relative;
        }

        .scroll-stack-card {
          transform-origin: top center;
          will-change: transform, filter;
          backface-visibility: hidden;
          transform-style: preserve-3d;
          box-shadow: none;
          min-height: 16rem;
          width: 100%;
          margin: 30px 0;
          border-radius: 36px;
          box-sizing: border-box;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          position: relative;
        }

        .scroll-stack-end {
          width: 100%;
          height: 80px;
        }
      `}</style>
    </section>
  );
}
