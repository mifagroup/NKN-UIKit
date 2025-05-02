"use client";
import Link from "next/link";
import React from "react";

export const links = [
  {
    id: "home",
    label: "خانه",
    href: "/",
  },
  {
    id: "nikan_structure",
    label: "بیمارستان‌ها و مراکز درمانی",
    href: "/contact-us",
  },
  {
    id: "international",
    label: "واحد بین‌الملل (IPD)",
    href: "/nikan-international",
  },
  {
    id: "blogs",
    label: "اخبار و مقالات",
    href: "/blogs",
  },
  {
    id: "nikan_structure",
    label: "تماس با ما",
    href: "/contact-us",
  },
  {
    id: "about-us",
    label: "داستان نیکان",
    href: "/about-us",
  },
];

const Links = () => {
  return (
    <div className="flex items-center gap-x-5">
      {links?.map((link) => (
        <Link
          href={link.href}
          key={link.id}
          className="text-sm text-text-600 font-semibold"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Links;
