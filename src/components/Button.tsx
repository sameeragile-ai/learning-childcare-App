import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'olive';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  isLoading = false,
  className = '',
  icon,
}) => {
  const baseStyles =
    'group relative inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4E5E46] disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-sm gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-sm gap-2',
    lg: 'text-base px-6 py-3.5 rounded-sm gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#4E5E46] text-[#FAF8F5] hover:bg-[#3E4C37] shadow-xs hover:shadow-sm active:translate-y-px',
    secondary:
      'bg-[#E7ECE6] text-[#2C3827] hover:bg-[#D9E1D7] active:translate-y-px',
    olive:
      'bg-[#2C3827] text-[#FAF8F5] hover:bg-[#1F281B] shadow-xs active:translate-y-px',
    outline:
      'border border-[#2C3827]/30 text-[#2C3827] hover:bg-[#2C3827]/5 hover:border-[#2C3827]',
    ghost:
      'text-[#2C3827] hover:bg-[#2C3827]/5',
  }[variant];

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      <span>{children}</span>
      {icon && !isLoading && (
        <span className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {content}
    </button>
  );
};
