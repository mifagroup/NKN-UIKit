"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DescriptionSectionProps {
  description?: string;
}

export default function DescriptionSection({ description , slug }: DescriptionSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!description) {
    return null;
  }

  return (
    <div className="mt-8 text-gray-700 leading-relaxed ">
      <div className="bg-white p-6 rounded-[16px]">
        <div className={`${isOpen ? "border-b border-gray-200" : ""} pb-4`}>
          <h2
            className="text-lg font-medium text-gray-900 cursor-pointer flex items-center justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h2 className="text-base font-bold"> راهنمای بیماران {slug}</h2>
            <svg
              className={`h-5 w-5 text-gray-500 transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </h2>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-gray-700 leading-relaxed overflow-hidden"
            >
              <div
                  className="prose prose-sm prose-neutral max-w-none [&_a]:break-words [&_a]:text-primary-600 [&_a]:underline [&_a]:decoration-primary-600"
                  dangerouslySetInnerHTML={{ __html: description ?? "" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}