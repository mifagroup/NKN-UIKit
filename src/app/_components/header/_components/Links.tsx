"use client";
import Link from "next/link";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    id: "doctors",
    label: "پزشکان",
    href: "/doctors",
  },
  {
    id: "about-us",
    label: "داستان نیکان",
    href: "/about-us",
    children: [
      {
        id: "social-responsibility",
        label: "مسئولیت اجتماعی",
        href: "/social-responsibility",
      },
      {
        id: "about-us",
        label: "معرفی نیکان",
        href: "/about-us",
      },
      {
        id: "news",
        label: "اخبار",
        href: "/news",
      },
      {
        id: "blogs",
        label: "مقالات",
        href: "/blogs",
      },
    ]
  },
  {
    id: "contact-us",
    label: "تماس با ما",
    href: "/contact-us",
  },
  {
    id: "nikan365",
    label: "نیاکان 365",
    href: "/nikan365",
  },
  {
    id: "cooperation",
    label: "فرصت همکاری",
    href: "/cooperation",
  },
];

const Links = () => {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const handleDropdownToggle = (linkId: string) => {
    setOpenDropdown(openDropdown === linkId ? null : linkId);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="flex items-center gap-x-5 relative">
      {links?.map((link) => (
        <div key={link.id} className="relative">
          <div className="flex items-center gap-x-1">
            <Link
              href={link.href}
              className="text-sm text-secondary-600 font-semibold hover:text-primary-main transition-colors"
              onClick={link.children ? (e) => {
                e.preventDefault();
                handleDropdownToggle(link.id);
              } : undefined}
            >
              {link.label}
            </Link>
            {link.children && (
              <KeyboardArrowDownIcon 
                className={`text-secondary-600 text-sm transition-transform duration-200 ${
                  openDropdown === link.id ? 'rotate-180' : ''
                }`}
              />
            )}
          </div>
          
          {/* Dropdown Menu */}
          {link.children && openDropdown === link.id && (
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[220px] z-50"
              onMouseLeave={handleDropdownClose}
            >
              {link.children.map((child) => (
                <Link
                  key={child.id}
                  href={child.href}
                  className="block px-4 py-3 text-sm text-secondary-600 hover:bg-secondary-50 hover:text-primary-main transition-colors"
                  onClick={handleDropdownClose}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      
      {/* Overlay to close dropdown when clicking outside */}
      {openDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={handleDropdownClose}
        />
      )}
    </div>
  );
};

export default Links;
