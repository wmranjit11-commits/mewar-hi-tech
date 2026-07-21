import React from "react";

interface BlobButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function BlobButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: BlobButtonProps) {
  return (
    <>
      <button
        className={`blob-btn ${
          variant === "secondary" ? "blob-btn--secondary" : ""
        } ${className}`}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </button>

      {/* Gooey filter SVG container */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="absolute w-0 h-0 hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </>
  );
}
