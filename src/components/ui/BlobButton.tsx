import React from "react";

interface BlobButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
}

export default function BlobButton({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: BlobButtonProps) {

  const btn = (
    <button
      className={`blob-btn ${
        variant === "secondary" ? "blob-btn--secondary" : ""
      } ${className}`}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="inline-block">
        {btn}
      </a>
    );
  }

  return btn;

}
