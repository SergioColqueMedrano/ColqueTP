'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Grid from '../grid/Grid';


const Battlefield: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState<number | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  const moveIfMouseInMargin = useCallback(() => {
    if (mouseX == null || mouseY == null || ref.current == null) return;

    const containerWidth = ref.current.offsetWidth;
    const containerHeight = ref.current.offsetHeight;

    const scrollMargin = 50;
    const scrollAmount = 10;

    let leftScroll = ref.current.scrollLeft;
    let topScroll = ref.current.scrollTop;

    if (mouseX > containerWidth - scrollMargin) {
      leftScroll += scrollAmount;
    }

    if (mouseX < scrollMargin) {
      leftScroll -= scrollAmount;
    }

    if (mouseY > containerHeight - scrollMargin) {
      topScroll += scrollAmount;
    }

    if (mouseY < scrollMargin) {
      topScroll -= scrollAmount;
    }

    ref.current.scroll(leftScroll, topScroll);
  }, [mouseX, mouseY]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(moveIfMouseInMargin, 100);
    return () => clearInterval(interval);
  }, [moveIfMouseInMargin]);

  return (
    <div
      className="wrapper overflow-hidden relative w-full h-full"
      ref={ref}
      style={{ width: '100vw', height: '100vh' }}
    >
      <Grid rows={10} columns={10} />
    </div>
  );
};

export default Battlefield;
