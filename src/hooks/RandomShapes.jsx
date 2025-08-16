import { useState, useEffect } from 'react';

const shapeTypes = [
  'circle', 'square', 'triangle', 'diamond', 'star', 'hexagon', 'bicycle'
];

const colors = [
  'bg-orange-500', 'bg-orange-400', 'bg-orange-600',
  'bg-yellow-400', 'bg-red-400', 'bg-pink-400',
  'bg-purple-400', 'bg-blue-400', 'bg-green-400'
];

const animations = [
  'animate-slow-ping', 'animate-pulse', 'animate-bounce',
  'animate-float', 'animate-rotate', 'animate-fade', 'animate-move-around'
];

const sizes = [
  'w-3 h-3', 'w-4 h-4', 'w-5 h-5', 'w-6 h-6', 'w-2 h-2'
];

const RandomShapes = ({ count = 15 }) => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const generateShapes = () => {
      const newShapes = [];
      
      // Add 4 different vehicles: bicycle, van, motorcycle, person
      const vehicles = [
        { type: 'bicycle', size: 'w-8 h-8' },
        { type: 'van', size: 'w-10 h-6' },
        { type: 'motorcycle', size: 'w-8 h-6' },
        { type: 'person', size: 'w-6 h-8' }
      ];
      
      for (let i = 0; i < 4; i++) {
        const vehicle = vehicles[i];
        newShapes.push({
          id: `vehicle-${i}`,
          type: vehicle.type,
          color: 'text-white',
          animation: `animate-move-direction-${i}`,
          size: vehicle.size,
          top: Math.random() * 60 + 20 + '%', // Keep well away from edges
          left: Math.random() * 60 + 20 + '%',
          delay: Math.random() * 3 + 's',
          opacity: 0.8
        });
      }
      
      // Add regular shapes
      for (let i = 0; i < count; i++) {
        const shapeType = shapeTypes[Math.floor(Math.random() * (shapeTypes.length - 4))]; // Exclude bicycle, van, motorcycle, person from random selection
        newShapes.push({
          id: i,
          type: shapeType,
          color: colors[Math.floor(Math.random() * colors.length)],
          animation: animations[Math.floor(Math.random() * (animations.length - 1))], // Exclude move-around from regular shapes
          size: sizes[Math.floor(Math.random() * sizes.length)],
          top: Math.random() * 90 + '%',
          left: Math.random() * 90 + '%',
          delay: Math.random() * 3 + 's',
          opacity: Math.random() * 0.7 + 0.3
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
  }, [count]);

  const getShapeClasses = (shape) => {
    let baseClasses = `absolute ${shape.size} ${shape.color} ${shape.animation}`;
    
    switch (shape.type) {
      case 'circle':
        return `${baseClasses} rounded-full`;
      case 'square':
        return `${baseClasses} rounded-sm`;
      case 'triangle':
        return `${baseClasses} rotate-45 rounded-sm`;
      case 'diamond':
        return `${baseClasses} rotate-45 rounded`;
      case 'star':
        return `${baseClasses} rounded-full`;
      case 'hexagon':
        return `${baseClasses} rounded-lg`;
      default:
        return `${baseClasses} rounded-full`;
    }
  };

  const renderShape = (shape) => {
    const style = {
      top: shape.top,
      left: shape.left,
      animationDelay: shape.delay,
      opacity: shape.opacity,
      zIndex: 1
    };

    if (shape.type === 'bicycle' || shape.type === 'van' || shape.type === 'motorcycle' || shape.type === 'person') {
      const animationStyle = {
        ...style,
        animation: `moveVehicle${shape.id.split('-')[1]} 15s linear infinite`,
        animationDelay: shape.delay
      };

      return (
        <>
          <style key={`style-${shape.id}`}>{`
            @keyframes moveVehicle0 {
              0%   { transform: translateX(0) translateY(0); }
              15%  { transform: translateX(-100px) translateY(30px); }
              30%  { transform: translateX(-200px) translateY(-150px); }
              50%  { transform: translateX(100px) translateY(-100px); }
              70%  { transform: translateX(150px) translateY(200px); }
              100% { transform: translateX(0) translateY(0); }
            }

            @keyframes moveVehicle1 {
              0%   { transform: translateX(0) translateY(0); }
              20%  { transform: translateX(200px) translateY(30px); }
              40%  { transform: translateX(200px) translateY(-100px); }
              60%  { transform: translateX(-100px) translateY(-100px); }
              80%  { transform: translateX(-150px) translateY(150px); }
              100% { transform: translateX(0) translateY(0); }
            }

            @keyframes moveVehicle2 {
              0%   { transform: translateX(0) translateY(0); }
              10%  { transform: translateX(0) translateY(-100px); }
              30%  { transform: translateX(200px) translateY(-100px); }
              50%  { transform: translateX(200px) translateY(120px); }
              70%  { transform: translateX(-100px) translateY(150px); }
              90%  { transform: translateX(-200px) translateY(50px); }
              100% { transform: translateX(0) translateY(0); }
            }

            @keyframes moveVehicle3 {
              0%   { transform: translateX(0) translateY(0); }
              25%  { transform: translateX(-150px) translateY(-80px); }
              50%  { transform: translateX(100px) translateY(-150px); }
              75%  { transform: translateX(200px) translateY(200px); }
              100% { transform: translateX(0) translateY(0); }
            }
          `}</style>
          <div
            key={shape.id}
            className="absolute"
            style={animationStyle}
          >
            {shape.type === 'bicycle' && (
              <svg
                className={`${shape.size} ${shape.color}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M6 18L12 8L18 18" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M9 15L15 15" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M12 8L12 5" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M10 5L14 5" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="12" cy="15" r="1" fill="currentColor"/>
                <path d="M11 5L13 5" stroke="currentColor" strokeWidth="2"/>
              </svg>
            )}
            {shape.type === 'van' && (
              <svg
                className={`${shape.size} ${shape.color}`}
                fill="currentColor"
                viewBox="0 0 24 16"
              >
                <rect x="2" y="4" width="16" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="currentColor"/>
                <rect x="3" y="5" width="4" height="3" fill="black" opacity="0.3"/>
                <rect x="8" y="5" width="4" height="3" fill="black" opacity="0.3"/>
                <rect x="13" y="5" width="4" height="3" fill="black" opacity="0.3"/>
                <circle cx="6" cy="14" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                <rect x="18" y="6" width="2" height="4" fill="currentColor"/>
              </svg>
            )}
            {shape.type === 'motorcycle' && (
              <svg
                className={`${shape.size} ${shape.color}`}
                fill="currentColor"
                viewBox="0 0 24 16"
              >
                <circle cx="5" cy="13" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="17" cy="13" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M5 13L8 8L12 8L15 13L17 13" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M12 8L12 6L14 6" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M10 10L14 10" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="11" cy="10" r="0.5" fill="currentColor"/>
              </svg>
            )}
            {shape.type === 'person' && (
              <svg
                className={`${shape.size} ${shape.color}`}
                fill="currentColor"
                viewBox="0 0 16 24"
              >
                <circle cx="8" cy="4" r="2.5" stroke="currentColor" strokeWidth="1" fill="currentColor"/>
                <rect x="6" y="7" width="4" height="8" rx="1" fill="currentColor"/>
                <path d="M6 9L3 12L4 13" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M10 9L13 12L12 13" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M6 15L5 20L6 21" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M10 15L11 20L10 21" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            )}
          </div>
        </>
      );
    }

    if (shape.type === 'star') {
      return (
        <div
          key={shape.id}
          className={`absolute ${shape.animation}`}
          style={style}
        >
          <svg
            className={`${shape.size} ${shape.color.replace('bg-', 'text-')}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      );
    }

    if (shape.type === 'triangle') {
      return (
        <div
          key={shape.id}
          className={`absolute ${shape.animation}`}
          style={style}
        >
          <div
            className={`${shape.size} ${shape.color}`}
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        </div>
      );
    }

    return (
      <div
        key={shape.id}
        className={getShapeClasses(shape)}
        style={style}
      />
    );
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map(renderShape)}
    </div>
  );
};

export default RandomShapes;