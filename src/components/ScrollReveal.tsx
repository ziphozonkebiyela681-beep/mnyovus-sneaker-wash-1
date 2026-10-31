import React from 'react';
import { motion } from 'motion/react';

export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
  distance?: number;
  duration?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'left',
  className = '',
  distance = 65,
  duration = 0.65,
  once = false, // false ensures it glides in every time the user scrolls up or down towards it
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        // Enters from the left side of the screen
        return { opacity: 0, x: -distance, y: 0 };
      case 'right':
        // Enters from the right side of the screen
        return { opacity: 0, x: distance, y: 0 };
      case 'up':
        // Enters from below
        return { opacity: 0, x: 0, y: distance };
      case 'down':
        // Enters from above
        return { opacity: 0, x: 0, y: -distance };
      default:
        return { opacity: 0, x: -distance, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{
        once,
        amount: 0.1,
        margin: '0px 0px -40px 0px',
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth snappy glide with buttery deceleration
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
