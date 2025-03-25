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
    id: "care_and_cure",
    label: "پزشکان",
    href: "/doctors",
  },
  {
    id: "nikan365",
    label: "نیکان 365",
    href: "/nikan365",
  },
  {
    id: "nikan_structure",
    label: "ساختار نیکان",
    href: "/contact-us",
  },
  {
    id: "about_nikan",
    label: "درباره نیکان",
    href: "/about-us",
  },
  {
    id: "blogs",
    label: "مقالات",
    href: "/blogs",
  },
  {
    id: "cooperation",
    label: "درخواست همکاری",
    href: "/cooperation",
  },
  {
    id: "insurances",
    label: "بیمه‌ها",
    href: "/insurances",
  },
  {
    id: "international",
    label: "واحد بین‌الملل",
    href: "/nikan-international",
  },
  {
    id: "social-responsibility",
    label: "مسئولیت اجتماعی",
    href: "/social-responsibility",
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
