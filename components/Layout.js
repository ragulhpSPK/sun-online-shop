import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();

  return (
    <div>
      {router.pathname.split("/").includes("dashboard") ? "" : <Navbar />}
      {children}
      {router.pathname.split("/").includes("dashboard") ? "" : <Footer />}
    </div>
  );
}

export default Layout;
