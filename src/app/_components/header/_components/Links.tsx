"use client";
import Link from "next/link";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLanguage } from "@/contexts/LanguageContext";

export const links = [
  {
    id: "home",
    tKey: "menu.home",
    href: "/",
  },
  {
    id: "international",
    tKey: "menu.international",
    href: "https://ipd.nikan.hospital",
  },
  {
    id: "doctors",
    tKey: "menu.doctors",
    href: "/doctors",
  },
  {
    id: "about-us",
    tKey: "menu.about_us",
    href: "/about-us",
    children: [
      {
        id: "social-responsibility",
        tKey: "menu.social_responsibility",
        href: "/social-responsibility",
      },
      {
        id: "about-us",
        tKey: "menu.about_nikan",
        href: "/about-us",
      },
      {
        id: "news",
        tKey: "menu.news",
        href: "/news",
      },
      {
        id: "blogs",
        tKey: "menu.blogs",
        href: "/blogs",
      },
    ],
  },
  {
    id: "contact-us",
    tKey: "menu.contact_us",
    href: "/contact-us",
  },
  {
    id: "nikan365",
    tKey: "menu.nikan365",
    href: "/nikan365",
  },
  {
    id: "cooperation",
    tKey: "menu.cooperation",
    href: "/cooperation",
  },
];

const Links = () => {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const { t } = useLanguage();

  const handleDropdownToggle = (linkId: string) => {
    setOpenDropdown(openDropdown === linkId ? null : linkId);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  return (
      <div className="flex items-center gap-x-5 relative">
        {links?.map((link, index) => (
            <div key={link.id} className="flex items-center relative">
              <div className="flex items-center gap-x-1">
                <Link
                    href={link.href}
                    className="text-sm text-secondary-600 font-semibold hover:text-primary-main transition-colors"
                    onClick={
                      link.children
                          ? (e) => {
                            e.preventDefault();
                            handleDropdownToggle(link.id);
                          }
                          : undefined
                    }
                >
                  {t(link.tKey)}
                </Link>
                {link.children && (
                    <KeyboardArrowDownIcon
                        className={`text-secondary-600 text-sm transition-transform duration-200 ${
                            openDropdown === link.id ? "rotate-180" : ""
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
                          {t(child.tKey)}
                        </Link>
                    ))}
                  </div>
              )}

              {/* Divider between items */}
              {index < links.length - 1 && (
                  <span className="mx-2 h-5 border-l border-gray-300"></span>
              )}
            </div>
        ))}

        {/* Overlay to close dropdown when clicking outside */}
        {openDropdown && (
            <div className="fixed inset-0 z-40" onClick={handleDropdownClose} />
        )}
      </div>
  );


};

export default Links;
