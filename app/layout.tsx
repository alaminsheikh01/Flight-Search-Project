"use client";

import "./globals.css";
import "antd/dist/reset.css";
import { Layout } from "antd";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { usePathname } from "next/navigation";
import { ToastContainer } from 'react-toastify';
import TrendingDestinations from "@/src/components/Card";

const { Content } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current path

  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">
        <Layout>
          {pathname !== "/result" && <Navbar />}
          <Content>{children}</Content>
          {pathname !== "/result" && <TrendingDestinations/> } 
          <Footer />
        </Layout>
        <ToastContainer />
      </body>
    </html>
  );
}
