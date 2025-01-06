"use client";

import "./globals.css";
import "antd/dist/reset.css";
import { Layout } from "antd";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const { Content } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">
        <Layout>
          <Navbar />
          <Content>{children}</Content>
          <Footer/>
        </Layout>
      </body>
    </html>
  );
}
