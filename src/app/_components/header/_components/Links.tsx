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
    id: "contact-us",
    label: "تماس با ما",
    href: "/contact-us",
  },
  {
    id: "about-us",
    label: "داستان نیکان",
    href: "/about-us",
  },
  {
    id: "virtual-hospital",
    label: "بیمارستان مجازی",
    href: "/virtual-hospital",
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
