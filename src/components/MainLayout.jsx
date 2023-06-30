import { useState } from "react";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <Header
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      {showMobileMenu && (
        <MobileMenu
          setShowMobileMenu={setShowMobileMenu}
        />
      )}
      {children}
      <Footer />
    </>
  );
}
