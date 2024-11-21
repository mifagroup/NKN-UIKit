import Image from "next/image";
import React from "react";

const MenuDrawer = () => {
  return (
    <div className="lg:hidden">
      <Image
        src={"/images/responsive-menu-icon.png"}
        alt="menu-icon"
        width={21}
        height={17}
      />
    </div>
  );
};

export default MenuDrawer;
