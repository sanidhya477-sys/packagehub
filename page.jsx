"use client";
import {useSearchParams} from "next/navigation";
import Link from "next/link";
const data={1:["Starter",500],2:["Plus",1000],3:["Pro",1500]};
export default function Payment(){
 const sp=useSearchParams(); const [id]=[sp.get("package")||"1"]; const [name,price]=data[id]||data[1];
 return <><nav className="nav"><div className="brand">PackageHub</div><Link href="/packages">Back</Link></nav>
 <main className="container" style={{maxWidth:760}}><div className="grid2"><div className="card"><h1>Payment</h1><p>Selected package: <b>{name}</b></p><div className="price">₹{price}</div><p className="muted">Connect this screen to a licensed payment gateway. Do not collect UPI credentials or card details directly.</p><button className="btn" onClick={()=>alert("Demo only: connect your payment gateway here.")}>Pay securely</button></div>
 <div className="card"><h3>Order details</h3><p>Package benefits</p><p className="muted">Benefits should be fulfilled through your actual service/product system.</p><hr/><p>Order status: <span className="badge">Awaiting payment</span></p></div></div></main></>
}