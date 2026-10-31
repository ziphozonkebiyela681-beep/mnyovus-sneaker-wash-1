import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Zap } from 'lucide-react';

interface RunningSilhouettesIntroProps {
  triggerKey?: string | number;
  onComplete?: () => void;
}

export const RunningSilhouettesIntro: React.FC<RunningSilhouettesIntroProps> = ({ 
  triggerKey, 
  onComplete 
}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  // Restart whenever triggerKey changes (e.g. page switch or initial mount)
  useEffect(() => {
    setIsPlaying(true);
    const timer = setTimeout(() => {
      setIsPlaying(false);
      if (onComplete) onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [triggerKey, onComplete]);

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          key={`runners-${triggerKey || 'intro'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-50 pointer-events-none overflow-hidden flex items-end pb-12 sm:pb-16 md:pb-24 select-none"
        >
          {/* Subtle responsive glowing track ground line */}
          <div className="absolute bottom-12 sm:bottom-16 md:bottom-24 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-sky-400 to-red-500 opacity-60 shadow-[0_0_12px_#38bdf8]"></div>

          {/* Running speed dust particles */}
          <div className="absolute bottom-10 sm:bottom-14 md:bottom-20 left-0 right-0 h-4 sm:h-6 overflow-hidden opacity-40">
            <div className="w-full h-full bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]"></div>
          </div>

          {/* RUNNER 1 (Leader) with Glowing Cyan Sneakers & "MANJE CLEAN !!" Floating Banner */}
          <motion.div
            initial={{ x: '-30vw' }}
            animate={{ x: '115vw' }}
            transition={{
              duration: 2.8,
              ease: [0.22, 0.1, 0.25, 1],
            }}
            className="absolute bottom-12 sm:bottom-16 md:bottom-24 flex flex-col items-center"
          >
            {/* "MANJE CLEAN !!" Text Banner sprinting along with the runner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-1 sm:mb-2 flex items-center gap-1.5 whitespace-nowrap bg-[#0b1a38]/90 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-sky-400/70 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
            >
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-bounce fill-amber-400" />
              <span className="text-xs sm:text-base md:text-lg font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-red-400">
                MANJE CLEAN !!
              </span>
              <Sparkles className="w-3 h-3 text-sky-300 animate-spin" />
            </motion.div>

            {/* Silhouette Figure (Scales seamlessly from small mobile to large desktop) */}
            <div className="relative w-20 h-28 sm:w-28 sm:h-38 md:w-34 md:h-46">
              <svg
                viewBox="0 0 100 130"
                className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
                fill="#071126"
              >
                {/* Head with cap */}
                <circle cx="68" cy="22" r="10" />
                <path d="M72 16 L88 20 L76 24 Z" fill="#071126" />

                {/* Torso */}
                <path
                  d="M58 32 C62 42, 60 58, 48 68 L42 66 C48 54, 52 42, 46 34 Z"
                  fill="#0b1a38"
                />
                {/* Arms */}
                <path
                  d="M56 38 L76 46 L82 38"
                  stroke="#071126"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M48 38 L30 46 L24 58"
                  stroke="#071126"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Legs */}
                <path
                  d="M48 68 L66 84 L78 106"
                  stroke="#071126"
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M46 68 L28 82 L12 94"
                  stroke="#071126"
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              {/* Glowing Neon Cyan Sneaker (Front foot) */}
              <div className="absolute bottom-2.5 right-2 sm:bottom-4 sm:right-3">
                <div className="absolute -inset-2 bg-sky-400 rounded-full blur-md opacity-90 animate-pulse"></div>
                <div className="relative w-6 h-3.5 sm:w-8 sm:h-4.5 md:w-10 md:h-5 bg-sky-300 rounded-sm rounded-tr-xl border-t border-white shadow-[0_0_18px_#38bdf8] flex items-center justify-center">
                  <div className="w-full h-0.5 sm:h-1 bg-white rounded-full shadow-[0_0_8px_#fff]"></div>
                  <div className="absolute -top-1 -right-0.5 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-1/2 right-full w-8 sm:w-12 h-1 bg-gradient-to-l from-sky-400 to-transparent blur-[1px]"></div>
              </div>

              {/* Glowing Neon Cyan Sneaker (Back foot) */}
              <div className="absolute bottom-5 left-1 sm:bottom-7 sm:left-2">
                <div className="absolute -inset-2 bg-sky-400 rounded-full blur-md opacity-80 animate-pulse"></div>
                <div className="relative w-5.5 h-3 sm:w-7 sm:h-4 md:w-9 md:h-4.5 bg-sky-300 rounded-sm rounded-tr-xl border-t border-white shadow-[0_0_16px_#38bdf8] flex items-center justify-center">
                  <div className="w-full h-0.5 sm:h-1 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-1/2 right-full w-6 sm:w-10 h-1 bg-gradient-to-l from-sky-400 to-transparent blur-[1px]"></div>
              </div>
            </div>
          </motion.div>

          {/* RUNNER 2 (Chaser) with Glowing Crimson Red Sneakers & Trailing Sparkles */}
          <motion.div
            initial={{ x: '-42vw' }}
            animate={{ x: '105vw' }}
            transition={{
              duration: 3.1,
              ease: [0.22, 0.1, 0.25, 1],
              delay: 0.15,
            }}
            className="absolute bottom-12 sm:bottom-16 md:bottom-24 flex flex-col items-center"
          >
            {/* Trailing Sub-Text */}
            <div className="mb-1 sm:mb-2 opacity-90 bg-red-600/90 backdrop-blur-md px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white">
                WE'VE GOT YOU COVERED
              </span>
            </div>

            {/* Silhouette Figure */}
            <div className="relative w-18 h-26 sm:w-26 sm:h-36 md:w-32 md:h-44">
              <svg
                viewBox="0 0 100 130"
                className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] opacity-95"
                fill="#071126"
              >
                <circle cx="64" cy="24" r="9" />
                <path
                  d="M54 34 C58 44, 56 60, 44 70 L38 68 C44 56, 48 44, 42 36 Z"
                  fill="#0b1a38"
                />
                <path
                  d="M52 40 L72 48 L76 40"
                  stroke="#071126"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M44 40 L26 48 L18 60"
                  stroke="#071126"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M44 70 L62 86 L74 104"
                  stroke="#071126"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M42 70 L24 84 L10 94"
                  stroke="#071126"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              {/* Glowing Crimson Sneaker (Front foot) */}
              <div className="absolute bottom-2.5 right-2 sm:bottom-4 sm:right-3">
                <div className="absolute -inset-2 bg-red-500 rounded-full blur-md opacity-90 animate-pulse"></div>
                <div className="relative w-6 h-3.5 sm:w-8 sm:h-4.5 md:w-10 md:h-5 bg-red-400 rounded-sm rounded-tr-xl border-t border-white shadow-[0_0_18px_#ef4444] flex items-center justify-center">
                  <div className="w-full h-0.5 sm:h-1 bg-white rounded-full shadow-[0_0_6px_#fff]"></div>
                  <div className="absolute -top-1 -right-0.5 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-1/2 right-full w-8 sm:w-12 h-1 bg-gradient-to-l from-red-500 to-transparent blur-[1px]"></div>
              </div>

              {/* Glowing Crimson Sneaker (Back foot) */}
              <div className="absolute bottom-5 left-1 sm:bottom-7 sm:left-2">
                <div className="absolute -inset-2 bg-red-500 rounded-full blur-md opacity-80 animate-pulse"></div>
                <div className="relative w-5.5 h-3 sm:w-7 sm:h-4 md:w-9 md:h-4.5 bg-red-400 rounded-sm rounded-tr-xl border-t border-white shadow-[0_0_16px_#ef4444] flex items-center justify-center">
                  <div className="w-full h-0.5 sm:h-1 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-1/2 right-full w-6 sm:w-10 h-1 bg-gradient-to-l from-red-500 to-transparent blur-[1px]"></div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
