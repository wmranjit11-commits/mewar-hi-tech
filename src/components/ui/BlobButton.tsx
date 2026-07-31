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
    <button
      className={`blob-btn ${
        variant === "secondary" ? "blob-btn--secondary" : ""
      } ${className}`}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
    </button>
  );
}
