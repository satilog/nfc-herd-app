import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode, useEffect } from "react";

import { useAppContext } from "@/context/AppContext";

export default function Inventory({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  

  const isScreenHeight = true;
  return (
    <div className={`flex flex-col w-screen items-center justify-center"`}>
      {children}
    </div>
  );
}
