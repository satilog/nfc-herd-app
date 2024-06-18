import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import ThemeToggle from "@/components/Theme/ThemeToggle";
import { BiNetworkChart } from "react-icons/bi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBar from "./SearchBar.tsx";

import { useAppContext } from '@/context/AppContext';

const inter = Inter({ subsets: ["latin"] });

interface HeaderProps {
  isFullWidth: boolean;
}

export default function Header(props: HeaderProps) {
  const { isFullWidth = false } = props;
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // useEffect(() => {

  // }, [currentStep]);

  return (
    <div
      className={
        "flex flex-row w-full items-center justify-around custom-bg-white-color h-16 border-b-[1.5px] custom-border-color"
      }
    >
      <div
        className={
          "w-full custom-container flex flex-row justify-between p-0 py-2 items-center custom-bg-invert-color"
        }
      >
        <div
          className="custom-text-color text-2xl font-bold"
          onClick={() => router.push(`/`)}
        >
          NFC HERD
          {/* <Image
            className="hover:cursor-pointer"
            src="/LankaWikiLogoShort.png"
            alt="Logo"
            width={40}
            height={40}
            onClick={() => router.push("/")}
          /> */}
        </div>
      </div>
    </div>
  );
}
