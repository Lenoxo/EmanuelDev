import { useState } from "react";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Footer from "./Footer";
import { Montserrat, Crimson_Pro } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const crimson_pro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  display: "swap",
});

export default function MainLayout({ children }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className={`${montserrat.variable} ${crimson_pro.className}`}>
      <Header
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
