"use client";

import "./globals.css";
import "antd/dist/reset.css";
import { Layout } from "antd";
import Navbar from "@/src/components/Navbar";

const { Content, Footer } = Layout;

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
          <Footer className="text-center text-gray-500 py-4">
            © 2025 Flight Search. All rights reserved.
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
