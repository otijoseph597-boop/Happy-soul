"use client";
import { useState } from "react";
import { BUNDLES } from "../lib/bundles";

export default function Home() {
  const [selected, setSelected] = useState(BUNDLES[0]);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const orderText = `Hello Happy Soul! I want to buy ${selected.label} for GHC ${selected.price}. My number: ${phone} Name: ${name}`;
  const whatsappLink = `https://wa.me/233597832036?text=${encodeURIComponent(orderText)}`;

  return (
    <main style={{ maxWidth: 480, margin: "0 auto", padding: 20, fontFamily: "sans-serif", background: "#FFF7ED", minHeight: "100vh" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 32, margin: 0 }}>✨ Happy Soul ✨</h1>
        <p style={{ color: "#666" }}>Fast MTN Data Bundles • Ghana</p>
        <div style={{ background: "#FFD600", padding: 10, borderRadius: 10, fontWeight: "bold" }}>
          🔥 1GB PROMO — ONLY GHC 4.60
        </div>
      </div>

      <h3>Choose Bundle:</h3>
      {BUNDLES.map((b) => (
        <button
          key={b.id}
          onClick={() => setSelected(b)}
          style={{
            display: "flex", justifyContent: "space-between", width: "100%",
            padding: 14, marginBottom: 8, borderRadius: 12, border: selected.id === b.id ? "3px solid #000" : "1px solid #ddd",
            background: selected.id === b.id ? "#000" : "#fff",
            color: selected.id === b.id ? "#fff" : "#000", fontWeight: "bold", fontSize: 16
          }}
        >
          <span>{b.label}</span><span>GHC {b.price.toFixed(2)}</span>
        </button>
      ))}

      <h3>Your Details:</h3>
      <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: 14, marginBottom: 10, borderRadius: 10, border: "1px solid #ddd" }} />
      <input placeholder="MTN Number e.g. 0531234567" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", padding: 14, marginBottom: 10, borderRadius: 10, border: "1px solid #ddd" }} />

      <div style={{ background: "#fff", padding: 14, borderRadius: 12, marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}><span>Total:</span><b>GHC {selected.price.toFixed(2)}</b></div>
        <small>Instant delivery • No expiry • All networks</small>
      </div>

      <a href={whatsappLink} target="_blank" style={{ display: "block", textAlign: "center", background: "#25D366", color: "#fff", padding: 16, borderRadius: 12, fontWeight: "bold", textDecoration: "none", fontSize: 18 }}>
        Order on WhatsApp — GHC {selected.price.toFixed(2)}
      </a>
      <p style={{ textAlign: "center", color: "#888", fontSize: 12 }}>Pay with MoMo • Paystack coming soon</p>
    </main>
  );
}
