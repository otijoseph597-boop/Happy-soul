"use client";
import { useState, useEffect } from "react";

export default function Admin() {
  const [orders, setOrders] = useState<any[]>([]);
  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("happySoulOrders");
    if (saved) setOrders(JSON.parse(saved));
  }, []);

  const checkPin = () => {
    if (pin === "1234") setUnlocked(true);
    else alert("Wrong PIN");
  };

  const markDone = (id: string) => {
    const updated = orders.map(o => o.id === id ? {...o, done: true} : o);
    setOrders(updated);
    localStorage.setItem("happySoulOrders", JSON.stringify(updated));
  };

  const clearAll = () => {
    if (confirm("Clear all orders?")) {
      setOrders([]); localStorage.removeItem("happySoulOrders");
    }
  };

  if (!unlocked) {
    return (
      <div style={{maxWidth:400,margin:"0 auto",padding:20,fontFamily:"sans-serif",textAlign:"center"}}>
        <h1>🔒 Happy Soul Admin</h1>
        <p>Enter Admin PIN</p>
        <input value={pin} onChange={e=>setPin(e.target.value)} type="password" placeholder="PIN" style={{width:"100%",padding:14,borderRadius:12,border:"1px solid #ddd",fontSize:16,boxSizing:"border-box"}} />
        <button onClick={checkPin} style={{width:"100%",padding:14,background:"#000",color:"#fff",borderRadius:12,border:"none",marginTop:10,fontSize:16}}>Unlock</button>
        <p style={{color:"#666",fontSize:13}}>Test PIN for now: 1234</p>
      </div>
    );
  }

  return (
    <div style={{maxWidth:420,margin:"0 auto",padding:20,fontFamily:"sans-serif"}}>
      <h1>📋 Happy Soul Orders</h1>
      <p>Total Orders: <b>{orders.length}</b> | Pending: <b>{orders.filter(o=>!o.done).length}</b></p>
      <button onClick={clearAll} style={{padding:8,background:"#ff4444",color:"#fff",border:"none",borderRadius:8}}>Clear All</button>
      {orders.length === 0 && <p style={{marginTop:20}}>No orders yet. Make a test order on the main site.</p>}
      {orders.slice().reverse().map(o=>(
        <div key={o.id} style={{border:"1px solid #ddd",padding:14,borderRadius:12,marginTop:12,background:o.done?"#f0fff4":"#fff"}}>
          <b>{o.bundle} - GHC {o.price}</b><br/>
          To: <b>{o.phone}</b><br/>
          Order ID: {o.id}<br/>
          Time: {o.time}<br/>
          Status: {o.done ? "✅ Delivered" : "⏳ Pending"}
          {!o.done && <button onClick={()=>markDone(o.id)} style={{width:"100%",padding:10,background:"#00C853",color:"#fff",border:"none",borderRadius:8,marginTop:8}}>Mark as Delivered</button>}
        </div>
      ))}
    </div>
  );
}
