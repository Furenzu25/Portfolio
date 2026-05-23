"use client";

import { useRef, useCallback } from "react";
import { useMotionValue, useTransform } from "framer-motion";

export function usePointerTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-4, 4]);

  const updateFromPoint = useCallback(
    (clientX: number, clientY: number) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      x.set((clientX - rect.left) / rect.width - 0.5);
      y.set((clientY - rect.top) / rect.height - 0.5);
    },
    [x, y],
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const pointerHandlers = {
    onMouseMove: (e: React.MouseEvent) => updateFromPoint(e.clientX, e.clientY),
    onMouseLeave: reset,
    onTouchStart: (e: React.TouchEvent) => {
      const touch = e.touches[0];
      if (touch) updateFromPoint(touch.clientX, touch.clientY);
    },
    onTouchMove: (e: React.TouchEvent) => {
      const touch = e.touches[0];
      if (touch) updateFromPoint(touch.clientX, touch.clientY);
    },
    onTouchEnd: reset,
    onTouchCancel: reset,
  };

  return { ref, rotateX, rotateY, pointerHandlers };
}
