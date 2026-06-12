import React from "react";
import { components } from "@/lib/api/v1";

type Term = components["schemas"]["TermResource"];

/**
 * Static class map — full literal strings so Tailwind JIT can detect them.
 * (Never build these dynamically like `bg-[${color}]`, JIT won't compile them.)
 */
const TERM_BG_CLASSES: Record<string, string> = {
  "اقدسیه": "bg-[#E43C7F]",
  "سپید": "bg-[#F4DE63]",
  "مرکز جراحی محدود نیکان": "bg-[#4CC5AC]",
  "غرب": "bg-[#4CB1DD]",
  "ویزیت آنلاین": "bg-[#42aad6]",
};

const SIZE_CLASSES = {
  sm: "px-6 py-0.5 text-[10px] font-light rounded-[4px]",
  md: "px-3.5 py-1 text-[12px] font-medium rounded-[8px]",
} as const;

export interface TermBadgeProps {
  term: Term;
  size?: keyof typeof SIZE_CLASSES;
  className?: string;
}

/**
 * Get the Tailwind background class for a term title.
 *
 * @param title - Term title
 * @returns Tailwind background class
 */
export const getTermBgClass = (title?: string | null): string =>
  TERM_BG_CLASSES[title ?? ""] ?? "bg-gray-500";

/**
 * Colored badge for a TermResource (hospital/category tag).
 *
 * @example
 * {blog.terms?.map((term) => <TermBadge key={term.id} term={term} />)}
 */
const TermBadge = ({ term, size = "sm", className = "" }: TermBadgeProps) => {
  if (!term?.title) return null;

  return (
    <span
      className={`text-white ${SIZE_CLASSES[size]} ${getTermBgClass(term.title)} ${className}`}
    >
      {term.title}
    </span>
  );
};

export default TermBadge;
