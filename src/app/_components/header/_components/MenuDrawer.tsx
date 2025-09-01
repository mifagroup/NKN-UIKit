"use client";
import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Links, { links } from "./Links";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MenuDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if (!newOpen) {
      setExpandedItems([]);
    }
  };

  const toggleExpanded = (linkId: string) => {
    setExpandedItems(prev => 
      prev.includes(linkId) 
        ? prev.filter(id => id !== linkId)
        : [...prev, linkId]
    );
  };

  const theme = useTheme();

  const greaterThanLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className="lg:hidden flex">
      <button onClick={toggleDrawer(true)}>
        <Image
          src={"/images/responsive-menu-icon.png"}
          alt="menu-icon"
          width={21}
          height={17}
        />
      </button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "#F1F1F1",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <div className="border-b border-b-[#D6D6D6] bg-white">
          <div className="xl:max-w-[1315px] container lg:px-0 px-5">
            <div className="flex items-center justify-between lg:py-[38px] pt-[20px] pb-[14px]">
              <div className="flex items-center gap-x-10">
                <Link href={"/"}>
                  <Image
                    src={
                      greaterThanLg
                        ? "/images/logo.svg"
                        : "/images/header-responsive-logo.svg"
                    }
                    alt="logo"
                    width={greaterThanLg ? 87 : 136}
                    height={greaterThanLg ? 70 : 40}
                    quality={100}
                  />
                </Link>
                {greaterThanLg && <Links />}
              </div>
              <div className="flex items-center gap-x-[22px]">
                {/* <div className="flex items-center gap-x-1.5">
                  <LangSwicher />
                  <LoginButton />
                </div> */}
                <CloseIcon onClick={toggleDrawer(false)} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="pt-[23px] pb-5 px-5 gap-x-2.5 grid grid-cols-2 border-b border-b-[#D3D3D3]">
            <Link
              className="flex flex-col items-center gap-y-2.5 bg-white py-5 rounded-[9px] border border-[#DBDBDB]"
              href={"/doctors"}
              onClick={toggleDrawer(false)}
            >
              <Image
                src={"/images/search-doctor.png"}
                alt="search-doctors-icon"
                width={44}
                height={40}
              />
              <span className="text-[15px] text-[#686868] font-medium">
                جستجوی پزشکان
              </span>
            </Link>
            <Link
              className="flex flex-col items-center gap-x-2.5 bg-white py-5 rounded-[9px] border border-[#DBDBDB]"
              href={""}
              onClick={toggleDrawer(false)}
            >
              <Image
                src={"/images/nobat-icon.png"}
                alt="nobat-icon-icon"
                width={44}
                height={40}
                quality={100}
              />
              <span className="text-[15px] text-[#686868] font-medium">
                تعیین نوبت
              </span>
            </Link>
          </div>
          <div className="flex-grow flex flex-col gap-y-5 pb-5">
            <div className="flex flex-col">
              {links?.map((link) => (
                <div key={link.id}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#545454] font-medium py-4 px-[30px] border-b border-b-[#DBDBDB] flex-grow"
                      onClick={link.children ? (e) => {
                        e.preventDefault();
                        toggleExpanded(link.id);
                      } : () => toggleDrawer(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        onClick={() => toggleExpanded(link.id)}
                        className="px-[30px] py-4 border-b border-b-[#DBDBDB]"
                      >
                        <KeyboardArrowDownIcon 
                          className={`text-[#545454] transition-transform duration-200 ${
                            expandedItems.includes(link.id) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown Children */}
                  {link.children && expandedItems.includes(link.id) && (
                    <div className="bg-gray-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          className="block text-[14px] text-[#666666] font-medium py-3 px-[50px] border-b border-b-[#DBDBDB]"
                          onClick={toggleDrawer(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex-grow flex flex-col gap-y-5 justify-center items-center">
              <Link
                href={"/contact-us"}
                className="text-[20px] text-white font-extrabold bg-primary-main w-[310px] h-[58px] rounded-[13px] flex justify-center items-center"
                onClick={toggleDrawer(false)}
              >
                تماس با نیکان
              </Link>
              <Link
                href={""}
                className="w-[310px] h-[58px] bg-[#D1D1D1] rounded-[13px] text-[20px] text-[#777777] font-medium flex justify-center items-center"
                onClick={toggleDrawer(false)}
              >
                خدمات درمانی در منزل
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
