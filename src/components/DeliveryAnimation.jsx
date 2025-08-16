import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Package, Container, Bike } from 'lucide-react';

const DeliveryAnimation = () => {
  const [leftVanPosition, setLeftVanPosition] = useState(0);
  const [rightVanPosition, setRightVanPosition] = useState(95);
  const [leftDirection, setLeftDirection] = useState(1); // 1 for down, -1 for up
  const [rightDirection, setRightDirection] = useState(-1); // -1 for up, 1 for down
  const [showLeftBox, setShowLeftBox] = useState(false);
  const [showRightBox, setShowRightBox] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      // Left van movement
      setLeftVanPosition((prev) => {
        let newPos = prev + (leftDirection * 2.5);
        
        // Check boundaries and reverse direction
        if (newPos >= 95) {
          newPos = 95;
          setLeftDirection(-1);
        } else if (newPos <= 0) {
          newPos = 0;
          setLeftDirection(1);
        }
        
        // Show box when van is at bottom (position 90-95)
        setShowLeftBox(newPos >= 85);
        
        return newPos;
      });

      // Right van movement (starts going up)
      setRightVanPosition((prev) => {
        let newPos = prev + (rightDirection * 2.5);
        
        // Check boundaries and reverse direction
        if (newPos >= 95) {
          newPos = 95;
          setRightDirection(-1);
        } else if (newPos <= 0) {
          newPos = 0;
          setRightDirection(1);
        }
        
        // Show box when van is at bottom (position 90-95)
        setShowRightBox(newPos >= 85);
        
        return newPos;
      });

      // Update directions
      setLeftDirection((prev) => {
        if (leftVanPosition >= 95) return -1;
        if (leftVanPosition <= 0) return 1;
        return prev;
      });

      setRightDirection((prev) => {
        if (rightVanPosition >= 95) return -1;
        if (rightVanPosition <= 0) return 1;
        return prev;
      });

    }, 40); // Faster animation interval

    return () => clearInterval(animationInterval);
  }, [leftVanPosition, rightVanPosition, leftDirection, rightDirection]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Left side van */}
      <motion.div
        className="absolute left-6 text-white transition-all duration-100 ease-linear"
        style={{
          top: `${leftVanPosition}%`,
        }}
        animate={{
          scale: leftVanPosition >= 80 ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 0.6,
          repeat: leftVanPosition >= 80 ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        <Bike 
          size={28} 
          className={`transition-transform duration-300 ${
            leftDirection === 1 ? 'rotate-90' : '-rotate-90'
          }`}
        />
      </motion.div>

      {/* Left delivery box */}
      <AnimatePresence>
        {showLeftBox && (
          <motion.div
            className="absolute left-8 bottom-4 text-blue-300"
            initial={{ opacity: 0, scale: 0.3, y: 10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotate: [0, 5, -5, 0]
            }}
            exit={{ opacity: 0, scale: 0.3, y: 10 }}
            transition={{ 
              duration: 0.4,
              rotate: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Container size={24} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right side van */}
      <motion.div
        className="absolute right-6 text-white transition-all duration-100 ease-linear"
        style={{
          top: `${rightVanPosition}%`,
        }}
        animate={{
          scale: rightVanPosition >= 80 ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 0.6,
          repeat: rightVanPosition >= 80 ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        <Truck 
          size={28} 
          className={`transition-transform duration-300 ${
            rightDirection === 1 ? 'rotate-90' : '-rotate-90'
          }`}
        />
      </motion.div>

      {/* Right delivery box */}
      <AnimatePresence>
        {showRightBox && (
          <motion.div
            className="absolute right-8 bottom-4 text-orange-500"
            initial={{ opacity: 0, scale: 0.3, y: 10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotate: [0, -5, 5, 0]
            }}
            exit={{ opacity: 0, scale: 0.3, y: 10 }}
            transition={{ 
              duration: 0.4,
              rotate: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Package size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeliveryAnimation;