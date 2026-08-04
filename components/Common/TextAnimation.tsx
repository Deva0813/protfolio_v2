"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useInView } from "motion/react"; // or "framer-motion"
import { Geist } from "next/font/google";

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