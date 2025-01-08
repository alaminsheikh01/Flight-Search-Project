"use client";
import Banner from "@/src/components/Banner";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Flight Search";
  }, []);

  return (
    <main className="bg-gray-100">
      <Banner />
    </main>
  );
}
