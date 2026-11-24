"use client";
import { useState } from "react";

const BUNDLES = [
  { gb: "1GB", price: 4.60, tag: "Promo" },
  { gb: "2GB", price: 8.50, tag: "" },
  { gb: "3GB", price: 12.00, tag: "" },
  { gb: "5GB", price: 19.50, tag: "" },
  { gb: "10GB", price: 36.00, tag: "Popular" },
  { gb: "15GB", price: 50.00, tag: "Best Value" },
  { gb: "20GB", price: 65.00, tag: "" },
];

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState("select");
  const [orderId, setOrderId] = useState("");
  const bundle = BUNDLES[selected];

  const handlePay = () => {
    if (phone.length < 10) { alert("Please enter your MTN number"); return; }
    setStep("pay");
  };

  const handlePaid = () => {
    setOrderId("HS" + Math.floor(1000 + Math.random() * 9000));
    setStep("done");
  };

  if (step === "done") {
    return (
      <div style={{maxWidth:420,margin:"0 auto",padding:20,fontFamily:"sans-serif",textAlign:"center"}}>
        <div style={{fontSize:60}}>✅</div>
        <h1>Order Received!</h1>
        <p>Order ID: <b>{orderId}</b></p>
        <p><b>{bundle.gb} - GHC {bundle.price.toFixed(2)}</b><br/>To: {phone}</p>
        <p>We will deliver your data in 5-10 minutes after we confirm your payment.</p>
        <p style={{background:"#f0f0f0",padding:12,borderRadius:10}}>Keep this Order ID. If data delays, call <b>0597832036</b></p>
        <button onClick={()=>{setStep("select");setPhone("");}} style={{width:"100%",padding:14,background:"#000",color:"#fff",borderRadius:12,border:"none",fontSize:16,marginTop:10}}>Buy Another Bundle</button>
      </div>
    );
  }

  if (step === "pay") {
    return (
      <div style={{maxWidth:420,margin:"0 auto",padding:20,fontFamily:"sans-serif"}}>
        <button onClick={()=>setStep("select")} style={{border:"none",background:"none",fontSize:16}}>← Back</button>
        <h1 style={{textAlign:"center"}}>Pay with MoMo</h1>
        <div style={{background:"#FFCC00",padding:16,borderRadius:14,textAlign:"center"}}>
          <p style={{margin:0}}>Send</p>
          <h1 style={{margin:"5px 0",fontSize:36}}>GHC {bundle.price.toFixed(2)}</h1>
          <p style={{margin:0}}>To: <b>0597832036</b><br/>Name: Happy Soul Data Mart</p>
        </div>
        <div style={{background:"#f8f8f8",padding:14,borderRadius:12,marginTop:14}}>
          <b>How to pay:</b>
          <p>1. Dial <b>*170#</b><br/>2. Choose <b>Send Money</b><br/>3. To: <b>0597832036</b><br/>4. Amount: <b>{bundle.price.toFixed(2)}</b><br/>5. Reference: <b>{bundle.gb} {phone}</b><br/>6. Enter your MoMo PIN</p>
        </div>
        <p style={{textAlign:"center"}}>Bundle: <b>{bundle.gb}</b> | To Number: <b>{phone}</b></p>
        <button onClick={handlePaid} style={{width:"100%",padding:16,background:"#00C853",color:"#fff",borderRadius:12,border:"none",fontSize:18,fontWeight:"bold"}}>I Have Paid ✓</button>
        <p style={{textAlign:"center",color:"#666",fontSize:13}}>Tap only after you have sent the money</p>
      </div>
    );
  }

  return (
    <div style={{maxWidth:420,margin:"0 auto",padding:20,fontFamily:"sans-serif"}}>
      <div style={{textAlign:"center"}}>
        <div style={{fontSize:40}}>⚡</div>
        <h1 style={{margin:"5px 0"}}>Happy Soul Data Mart</h1>
        <p style={{color:"#666",margin:0}}>Fast • Cheap • Instant Delivery</p>
      </div>
      <h3 style={{marginTop:20}}>Choose Bundle</h3>
      {BUNDLES.map((b,i)=>(
        <button key={b.gb} onClick={()=>setSelected(i)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:14,marginBottom:8,borderRadius:12,border:selected===i?"2px solid #00C853":"1px solid #ddd",background:selected===i?"#f0fff4":"#fff"}}>
          <span><b>{b.gb}</b> {b.tag && <span style={{background:"#FFCC00",fontSize:11,padding:"2px 6px",borderRadius:20}}>{b.tag}</span>}</span>
          <span><b>GHC {b.price.toFixed(2)}</b></span>
        </button>
      ))}
      <h3>Your MTN Number</h3>
      <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="e.g. 0597832036" maxLength={10} style={{width:"100%",padding:14,borderRadius:12,border:"1px solid #ddd",fontSize:16,boxSizing:"border-box"}} />
      <div style={{display:"flex",justifyContent:"space-between",margin:"16px 0",fontSize:18}}><span>Total</span><b>GHC {bundle.price.toFixed(2)}</b></div>
      <button onClick={handlePay} style={{width:"100%",padding:16,background:"#00C853",color:"#fff",borderRadius:12,border:"none",fontSize:18,fontWeight:"bold"}}>Pay with MoMo →</button>
      <p style={{textAlign:"center",color:"#666",fontSize:13}}>No WhatsApp needed • Pay in 30 seconds</p>
    </div>
  );
}
