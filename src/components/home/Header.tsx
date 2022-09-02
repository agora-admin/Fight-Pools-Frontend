import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const changeScrolled = () => {
    if (window !== undefined) {
      window.scrollY >= 80 ? setScrolled(true) : setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeScrolled);

    return () => {
      window.removeEventListener("scroll", changeScrolled);
    };
  });

  return (
    <nav className={`w-full transition-all ease-in-out duration-1000 ${scrolled && "fixed top-0 z-[1000] md:justify-between px-12"} bg-[#101D26] flex justify-center items-center md:items-stretch ${!scrolled && "justify-center"} py-2`}>
      <div className={`flex ${!scrolled && "flex-col"} ${scrolled && "flex-row items-center gap-0"} gap-1`}>
        <Image src="/brandLogo.svg" width={60} height={35} alt="Brand Logo" />
        <label className="font-gilroy text-sm text-lightBlue">
          fightSquare
        </label>
      </div>

      <Link href='/discourses' passHref>
        <button className={`hidden md:block ${!scrolled && "md:hidden"} bg-lightBlue text-[#101D26] rounded-[89px] px-2 text-[10px] font-bold`}>
          Launch dAPP <span className="bg-orange rounded-[89px] px-2 py-1 ml-2 text-[8px] text-lightBlue">BETA</span>
        </button>
      </Link>

    </nav>
  );
};

export default Header;
