"use client";

import React, { useState, useEffect, useRef } from "react";

interface HoverProps {
  children: React.ReactNode;
  color?: string;
  delay?: number;
  size?: number;
}

const Hover: React.FC<HoverProps> = ({
  children,
  color = "#00ffcc", // Default color
  delay = 0.05,
  size = 300,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 }); // Use ref to store target position
  const animationFrameId = useRef<number | null>(null); // Ref to store the animation frame ID

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Set the target position on mouse move
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      // Interpolate between the current position and the target position for smooth transition
      setPosition((prevPosition) => {
        const diffX = targetPosition.current.x - prevPosition.x;
        const diffY = targetPosition.current.y - prevPosition.y;

        // Move the circle closer to the target position with easing
        const newX = prevPosition.x + diffX * 0.8; // 0.1 for smoothing
        const newY = prevPosition.y + diffY * 0.04;

        return { x: newX, y: newY };
      });

      // Continue the animation by requesting the next frame
      animationFrameId.current = requestAnimationFrame(updatePosition);
    };

    // Start the animation loop
    updatePosition();

    // Cleanup the animation on component unmount
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="relative group isolate">
      <div
        className="absolute inset-0 -z-10 pointer-events-none transition-transform ease-in-out"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${color} 0%, ${color} 5%, transparent 85%)`,
          opacity: 0.5,
          pointerEvents: "none", // Ensure no interference with interactions
          transitionDelay: `${delay}s`,
        }}
      />
      {children}
    </div>
  );
};

export default Hover;
