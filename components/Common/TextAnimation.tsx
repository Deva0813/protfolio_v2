"use client";

import { motion, useAnimationFrame, useInView, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "motion/react"; // or "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react";

interface ScrambleTextLoopProps {
  /** Array of words/phrases to cycle through */
  words: string[];
  /** Duration of the scramble animation phase in seconds */
  scrambleDuration?: number;
  /** Pause time on each word before scrambling to the next (in seconds) */
  holdDuration?: number;
  /** Speed of character shuffling in seconds */
  speed?: number;
  /** Characters used for scrambling */
  characterSet?: string;
  /** Optional CSS classes */
  className?: string;
}

const DEFAULT_CHARS = "0123456789ABCDEF#%&*+=-_?";


export function ScrambleTextLoop({
  words,
  scrambleDuration = 1.0,
  holdDuration = 2.0,
  speed = 0.05,
  characterSet = DEFAULT_CHARS,
  className = "",
}: ScrambleTextLoopProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const currentWord = words[wordIndex] || "";
  const [displayText, setDisplayText] = useState(currentWord);

  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef);

  const animateLoop = useCallback(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    // Phase 1: Hold the completed target word
    timeoutId = setTimeout(() => {
      // Pick next word index
      const nextIndex = (wordIndex + 1) % words.length;
      const targetWord = words[nextIndex];

      const totalSteps = Math.floor((scrambleDuration * 1000) / (speed * 1000));
      let currentStep = 0;

      // Phase 2: Scramble transition to target word
      intervalId = setInterval(() => {
        currentStep++;

        // Generate scrambled output matching the target word's length
        const scrambled = targetWord
          .split("")
          .map((char) => {
            if (char === " ") return " ";
            const randomIndex = Math.floor(Math.random() * characterSet.length);
            return characterSet[randomIndex];
          })
          .join("");

        setDisplayText(scrambled);

        // Snap to target word and update state to trigger next loop cycle
        if (currentStep >= totalSteps) {
          clearInterval(intervalId);
          setDisplayText(targetWord);
          setWordIndex(nextIndex);
        }
      }, speed * 1000);
    }, holdDuration * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [wordIndex, words, scrambleDuration, holdDuration, speed, characterSet]);

  useEffect(() => {
    if (isInView && words.length > 0) {
      const cleanup = animateLoop();
      return cleanup;
    }
  }, [isInView, animateLoop, words.length]);

  return (
    <motion.span ref={containerRef} className={className}  >
      {displayText}
    </motion.span>
  );
}

function wrap(min: number, max: number, v: number) {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

export function LineScroll({ text, baseVelocity }: { text: string; baseVelocity: number }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false })
  const x = useTransform(baseX, (v) => `${wrap(-25, -75, v)}%`)

  const directionRef = useRef(1)
  useAnimationFrame((_, delta) => {
    let moveBy = directionRef.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) directionRef.current = -1
    else if (velocityFactor.get() > 0) directionRef.current = 1
    moveBy += directionRef.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="flex overflow-hidden whitespace-nowrap uppercase leading-none">
      <motion.div className="flex flex-nowrap" style={{ x }}>
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className={`mr-5 shrink-0  tracking-tighter text-[clamp(38px,4vw,84px)] font-semibold ${
              i % 2 === 0
                ? 'text-(--text)':"text-(--accent)"
                // : 'text-transparent [-webkit-text-stroke:1.5px_var(--border-strong)]'
            }`}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  )
}