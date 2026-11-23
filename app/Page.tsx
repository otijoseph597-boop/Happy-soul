"use client";
import { useState } from "react";

const DATA: any = {
  MTN: [
    { name: "1GB Promo", price: 4.6, tag: "HOT" },
    { name: "2GB", price: 8.5, tag: "" },
    { name: "3GB", price: 12, tag: "" },
    { name: "5GB", price: 18, tag: "POPULAR" },
    { name: "10GB", price: 32, tag: "" },
    { name: "15GB", price: 45, tag: "" },
    { name: "20GB", price: 58, tag: "BEST VALUE" },
  ],
  Telecel: [
    { name: "5GB", price: 22, tag: "" },
    { name: "10GB", price: 40, tag: "POPULAR" },
    { name: "15GB", price: 55, tag: "" },
  ],
  "AirtelTigo": [
    { name: "5GB", price: 20, tag: "" },
    { name: "10GB", price: 35, tag: "POPULAR" },
  ],
};

export default function Home() {
  const [network, setNetwork] = useState("MTN");

  const order = (b: any) => {
    const msg = `Hello Happy Soul! I want to buy ${network} ${b.name} for GHC ${b.price}. Please send me payment details.`;
    window.open(`https://wa.me/233550000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: 16, fontFamily: "sans-serif", background: "#f6f7fb", minHeight: "100vh" }}>
      <div style={{ background: "#0a7a42", color: "white", padding: 20, borderRadius: 16, textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>HAPPY SOUL 🛒</h1>
        <p style={{ margin: "6px 0 0", opacity: 0.9, fontSize: 14 }}>Fast & Cheap Data Bundles • Instant Delivery</p>
        <div style={{ background: "rgba(255,255,255,0.2)", padding: "6px
