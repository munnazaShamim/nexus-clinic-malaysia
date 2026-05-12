"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles, GripVertical, ImageOff, MoveHorizontal } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  floatAnimation,
} from "../lib/animations";

const ImageComparisonSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [beforeError, setBeforeError] = useState(false);
  const [afterError, setAfterError] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({
    before: false,
    after: false,
  });

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      updateSliderPosition(e.clientX);
    },
    [updateSliderPosition],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    },
    [isDragging, updateSliderPosition],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updateSliderPosition(e.touches[0].clientX);
    },
    [updateSliderPosition],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.touches[0].clientX);
    },
    [isDragging, updateSliderPosition],
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      updateSliderPosition(e.clientX);
    },
    [updateSliderPosition],
  );

  const isLoading = !imagesLoaded.before || !imagesLoaded.after;
  const hasError = beforeError && afterError;

  return (
    <div
      ref={containerRef}
      className="relative aspect-square rounded-2xl overflow-hidden select-none bg-brown/20 cursor-ew-resize group"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {/* Loading State */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-brown/30 z-30">
          <div className="w-8 h-8 border-2 border-light/30 border-t-light rounded-full animate-spin" />
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-brown/50 z-30">
          <div className="text-center text-light/70">
            <ImageOff className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm font-inter">Failed to load images</p>
          </div>
        </div>
      )}

      {/* Before Image (Background - Full) */}
      <div className="absolute inset-0">
        {!beforeError ? (
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-full object-cover"
            draggable={false}
            onLoad={() =>
              setImagesLoaded((prev) => ({ ...prev, before: true }))
            }
            onError={() => {
              setBeforeError(true);
              setImagesLoaded((prev) => ({ ...prev, before: true }));
            }}
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-taupe/30 to-brown/30 flex items-center justify-center">
            <ImageOff className="w-16 h-16 text-light/30" />
          </div>
        )}
      </div>

      {/* After Image (Clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        {!afterError ? (
          <img
            src={afterImage}
            alt={afterLabel}
            className="w-full h-full object-cover"
            draggable={false}
            onLoad={() => setImagesLoaded((prev) => ({ ...prev, after: true }))}
            onError={() => {
              setAfterError(true);
              setImagesLoaded((prev) => ({ ...prev, after: true }));
            }}
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-rose/30 to-wine/30 flex items-center justify-center">
            <ImageOff className="w-16 h-16 text-light/30" />
          </div>
        )}
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-10">
        <span className="px-3 py-1.5 bg-brown/80 backdrop-blur-sm text-light text-xs sm:text-sm rounded-full font-inter font-medium">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <span className="px-3 py-1.5 bg-wine/90 backdrop-blur-sm text-light text-xs sm:text-sm rounded-full font-inter font-medium">
          {afterLabel}
        </span>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-light z-20 pointer-events-none"
        style={{
          left: `${sliderPosition}%`,
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        }}
      />

      {/* Slider Handle */}
      <div
        className="absolute top-1/2 z-20 pointer-events-none"
        style={{
          left: `${sliderPosition}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 bg-light rounded-full shadow-xl flex items-center justify-center border-4 border-wine transition-transform duration-150 ${
            isDragging ? "scale-110" : "scale-100"
          }`}
        >
          <GripVertical className="w-5 h-5 sm:w-6 sm:h-6 text-wine" />
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 bg-wine/40 rounded-full blur-xl -z-10" />
      </div>

      {/* Hover Instructions */}
      <div
        className={`absolute inset-0 bg-brown/30 flex items-center justify-center transition-opacity duration-300 pointer-events-none z-10 ${
          isDragging ? "opacity-0" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="bg-brown/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <p className="text-light text-sm font-inter flex items-center gap-2">
            <MoveHorizontal className="w-4 h-4" />
            Drag to compare
          </p>
        </div>
      </div>
    </div>
  );
};

// Before/After Section Component
const BeforeAfterSection = () => {
  const transformations = [
    {
      id: 1,
      before: "/images/om-before1.webp",
      after: "/images/om-after1.webp",
      title: "Weight Loss Journey",
      result: "-15 kg in 12 weeks",
    },
    {
      id: 2,
      before: "/images/om-before2.webp",
      after: "/images/om-after2.webp",
      title: "Body Transformation",
      result: "-20 kg in 16 weeks",
    },
    {
      id: 3,
      before: "/images/om-before3.webp",
      after: "/images/om-after3.webp",
      title: "Lifestyle Change",
      result: "-18 kg in 14 weeks",
    },
  ];

  return (
    <section className="py-24 bg-brown relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        animate={floatAnimation}
        className="absolute top-20 right-10 w-72 h-72 bg-wine/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, delay: 1.5 },
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-rose/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-wine/30 text-rose rounded-full text-sm font-inter font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Real Results
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl sm:text-4xl lg:text-5xl text-light mb-4"
          >
            Before & <span className="italic text-rose">After</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-light/70 font-inter max-w-2xl mx-auto"
          >
            Slide to see the incredible transformations achieved by our clients
            with GLP-1 treatment
          </motion.p>
        </motion.div>

        {/* Comparison Sliders Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {transformations.map((item, index) => (
            <motion.div key={item.id} variants={scaleIn} className="group">
              {/* Image Comparison Slider */}
              <ImageComparisonSlider
                beforeImage={item.before}
                afterImage={item.after}
              />

              {/* Card Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="mt-4 text-center"
              >
                <h3 className="font-georgia text-xl text-light mb-1">
                  {item.title}
                </h3>
                <p className="text-rose font-inter font-medium">
                  {item.result}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-light/60 font-inter mb-6">
            Results may vary. Individual results depend on various factors.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-wine text-light rounded-full font-inter font-medium inline-flex items-center gap-2 shadow-lg shadow-wine/30 hover:bg-wine/90 transition-colors"
          >
            <Sparkles className="w-5 h-5" />
            Start Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
