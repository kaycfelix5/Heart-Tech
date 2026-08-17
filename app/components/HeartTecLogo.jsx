"use client";

import React from "react";

export default function HeartTecLogo({ size = 160, className = "" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="drop-shadow-sm"
      >
        {/* Círculo Principal com traço */}
        <circle
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke="#4A5568"
          strokeWidth="3.5"
          strokeDasharray="6 6"
          className="opacity-40"
        />
        
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="#FFFFFF"
          stroke="#2D3748"
          strokeWidth="2.5"
        />

        {/* Linha de batimento cardíaco / conectividade interna */}
        <path
          d="M 50 100 L 78 100 L 88 75 L 102 125 L 114 90 L 124 100 L 145 100"
          fill="none"
          stroke="#55B7A8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Conector / Peça no canto inferior direito como no Figma */}
        <g transform="translate(125, 125)">
          <rect
            x="0"
            y="0"
            width="42"
            height="42"
            rx="10"
            fill="#8DDDD0"
            stroke="#55B7A8"
            strokeWidth="3"
          />
          {/* Detalhe de conector / coração */}
          <path
            d="M 21 12 C 16 7, 8 12, 12 18 L 21 28 L 30 18 C 34 12, 26 7, 21 12 Z"
            fill="#55B7A8"
          />
        </g>
      </svg>
    </div>
  );
}
