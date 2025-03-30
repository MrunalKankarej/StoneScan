import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'login' | 'dashboard';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  children, 
  variant = 'default' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Configure backgrounds based on variant
  const getBackgroundConfig = () => {
    switch (variant) {
      case 'login':
        return {
          bgColor: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          bubbleColors: ['#4e7ac7', '#825ee4', '#5c9ce4'],
          bubbleCount: 6,
        };
      case 'dashboard':
        return {
          bgColor: 'linear-gradient(135deg, #f5f7fa 0%, #ebf4f5 100%)',
          bubbleColors: ['#4C9FD5', '#5D72CC', '#42A5F5'],
          bubbleCount: 8,
        };
      default:
        return {
          bgColor: 'linear-gradient(135deg, #f5f7fa 0%, #e8eaec 100%)',
          bubbleColors: ['#5D72CC', '#4C9FD5', '#42A5F5'],
          bubbleCount: 5,
        };
    }
  };

  const { bgColor, bubbleColors, bubbleCount } = getBackgroundConfig();

  // Create an array of bubble objects
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => {
    const size = Math.floor(Math.random() * 150) + 50;
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;
    const duration = Math.random() * 20 + 20;
    const color = bubbleColors[i % bubbleColors.length];
    const delay = Math.random() * 5;
    
    return { size, initialX, initialY, duration, color, delay };
  });

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: '100%',
        width: '100%',
        background: bgColor,
        position: 'relative',
        overflow: 'hidden',
        zIndex: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Animated bubbles */}
      {bubbles.map((bubble, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: 'fixed',
            width: bubble.size,
            height: bubble.size,
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${bubble.color}33, ${bubble.color}11)`,
            filter: 'blur(10px)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
          initial={{ 
            x: `${bubble.initialX}vw`, 
            y: `${bubble.initialY}vh`,
            opacity: 0.3 
          }}
          animate={{
            x: [`${bubble.initialX}vw`, `${(bubble.initialX + 20) % 100}vw`, `${bubble.initialX}vw`],
            y: [`${bubble.initialY}vh`, `${(bubble.initialY + 30) % 100}vh`, `${bubble.initialY}vh`],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 5,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          mt: 0,
          pt: 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AnimatedBackground; 