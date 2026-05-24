"use client";
import { useState } from "react";

// ============================================================
// 🔗 APNA REFERRAL LINK YAHAN PASTE KAREIN
// Har "Download" button is link pe redirect karega
const REFERRAL_LINK = "https://d222uwsa1xjkam.cloudfront.net/v/zW/d.html?uid=194867829&pid=202404000";
// ============================================================

// ── REAL LOGO COMPONENT (Image 1 jaisa: money bag + $ + dark green bg) ──
import Image from "next/image";

function KKLogo({ size = 42 }) {
  return (
    <Image
      src="/images/logo.png"   // ← aapki logo file ka naam
      alt="Kamai Kendra Logo"
      width={size}
      height={size}
      style={{ borderRadius: 10 }}
    />
  );
}

// ── APP ICON (smaller, for phone mockups — like Image 2) ──
function AppIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="42" height="42" rx="10" fill="#2a4a14"/>
      <ellipse cx="21" cy="26" rx="11" ry="10" fill="#f5c842"/>
      <rect x="17" y="15" width="8" height="5" rx="2" fill="#e6b020"/>
      <ellipse cx="21" cy="14" rx="5" ry="3.5" fill="#f5c842"/>
      <ellipse cx="21" cy="13" rx="3" ry="2" fill="#e6b020"/>
      <text x="21" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2a4a14" fontFamily="Arial,sans-serif">$</text>
      <ellipse cx="17" cy="22" rx="2.5" ry="3.5" fill="white" fillOpacity="0.25" transform="rotate(-20 17 22)"/>
    </svg>
  );
}

const features = [
  { icon: "📱", title: "Simple Tasks", desc: "send sms and earn , referal and earn , small tasks and earn — all easy to complete." },
  { icon: "♾️", title: "Flexible Tasks", desc: "No cap on tasks. Pick and complete at your own pace with unlimited access anytime." },
  { icon: "💰", title: "Multiple Rewards", desc: "Earn cash, points and assets — all redeemable for real money in your local currency." },
  { icon: "👥", title: "Referral Commissions", desc: "Share your referral link, invite friends to sign up, and earn commissions per referral." },
  { icon: "🏦", title: "Easy Withdrawals", desc: "Cashout anytime via e-wallet, bank account, credit card and other payment options." },
  { icon: "🆓", title: "No Investment", desc: "Zero fees, zero investment. The app provides third-party tasks and pays you commission." },
];

const earningsData = [
  { label: "Daily Earnings",   value: "₹100",      icon: "📅", color: "#2d5a1b" },
  { label: "Referral Earning", value: "₹2,500",    icon: "👥", color: "#4a2c8a" },
  { label: "Weekly Earning",   value: "₹700",      icon: "📆", color: "#1a6b6b" },
  { label: "Monthly Earning",  value: "₹3,000",    icon: "🗓️", color: "#8a3a1a" },
  { label: "Annual Earning",   value: "₹1,25,000", icon: "🏆", color: "#1a4a8a" },
];

const faqs = [
  { q: "What is Kamai Kendra?", a: "Kamai Kendra is an Android app that offers online earning opportunities. Users need to solve puzzles and quizzes, watch ads, complete surveys, and other simple tasks to earn real money." },
  { q: "What are the main features of the Kamai Kendra App?", a: "It is an earning app that offers various tasks to complete, rewards users with multiple types of rewards (cash, points, assets), and has a large and growing community of earners." },
  { q: "Does Kamai Kendra pay real money to users?", a: "Yes, Kamai Kendra pays real money. Points earned by completing tasks are redeemable for real cash in India, Pakistan, Bangladesh, and several other countries." },
  { q: "Is Kamai Kendra free to download and use?", a: "Yes, the app is completely free to download and use. There is no investment or registration fee required." },
  { q: "Which devices are compatible with Kamai Kendra?", a: "Kamai Kendra is compatible with Android 5.0 and above. The APK file size is 49.8 MB." },
  { q: "How do I withdraw my earnings?", a: "You can withdraw your earnings anytime via e-wallet, bank account, credit card, and other available payment options. There is no limit on withdrawals." },
];

export default function KamaiKendraPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq]   = useState(null);

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#fff", color: "#1a1a1a", minHeight: "100vh" }}>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0;}
        a{color:inherit;text-decoration:none;}
        .btn-dl{
          display:inline-flex;align-items:center;gap:10px;
          background:#2d5a1b;color:#fff;border:none;
          padding:14px 36px;border-radius:8px;
          font-size:16px;font-family:Georgia,serif;cursor:pointer;
          transition:background 0.2s,transform 0.1s;text-decoration:none;
        }
        .btn-dl:hover{background:#1e4010;transform:translateY(-2px);}
        .btn-dl-outline{
          display:inline-flex;align-items:center;gap:8px;
          background:transparent;color:#2d5a1b;
          border:2px solid #2d5a1b;padding:12px 28px;border-radius:8px;
          font-size:15px;font-family:Georgia,serif;cursor:pointer;
          transition:all 0.2s;text-decoration:none;
        }
        .btn-dl-outline:hover{background:#2d5a1b;color:#fff;}
        .section-tag{
          display:inline-block;background:#2d5a1b;color:#fff;
          font-size:12px;letter-spacing:1.5px;text-transform:uppercase;
          padding:6px 18px;border-radius:4px;margin-bottom:16px;
          font-family:Arial,sans-serif;
        }
        .feature-card{
          background:#fafaf8;border:1px solid #e5e1d8;border-radius:12px;
          padding:26px 20px;transition:box-shadow 0.2s,transform 0.2s;
        }
        .feature-card:hover{box-shadow:0 6px 24px rgba(45,90,27,0.12);transform:translateY(-3px);}
        .faq-item{border-bottom:1px solid #e5e1d8;}
        .faq-q{
          width:100%;background:none;border:none;text-align:left;
          padding:18px 0;font-size:16px;font-family:Georgia,serif;
          cursor:pointer;display:flex;justify-content:space-between;
          align-items:center;color:#1a1a1a;
        }
        .faq-q:hover{color:#2d5a1b;}
        .faq-a{padding:0 0 18px 0;font-size:15px;color:#555;line-height:1.75;}
        .earn-step{
          display:flex;align-items:flex-start;gap:14px;
          background:#fafaf8;border:1px solid #e5e1d8;border-radius:10px;
          padding:16px 18px;
        }
        .step-circle{
          width:32px;height:32px;background:#2d5a1b;color:#fff;
          border-radius:50%;display:flex;align-items:center;justify-content:center;
          font-size:14px;font-family:Arial,sans-serif;flex-shrink:0;
        }
        .phone-frame{
          background:#1a1a1a;border-radius:32px;padding:10px;
          box-shadow:0 16px 48px rgba(0,0,0,0.45);
          border:2px solid #333;
        }
        .status-bar{
          display:flex;justify-content:space-between;align-items:center;
          padding:4px 10px 6px;
        }
        @media(max-width:700px){
          .grid-3{grid-template-columns:1fr 1fr !important;}
          .grid-2{grid-template-columns:1fr !important;}
          .phones-row{flex-wrap:wrap !important;justify-content:center !important;}
          .earnings-grid{grid-template-columns:1fr 1fr !important;}
          .nav-d{display:none !important;}
          .nav-m{display:flex !important;}
        }
        @media(min-width:701px){.nav-m{display:none !important;}}
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{background:"#2d5a1b",padding:"0 32px",display:"flex",alignItems:"center",justifyContent:"space-between",height:64,position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 12px rgba(0,0,0,0.25)"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <KKLogo size={42}/>
          <div>
            <div style={{color:"#fff",fontWeight:"bold",fontSize:17,lineHeight:1.1}}>Kamai Kendra</div>
            <div style={{color:"#a8d48a",fontSize:10,letterSpacing:1,fontFamily:"Arial,sans-serif"}}>EARN · REFER · GROW</div>
          </div>
        </div>
        <div className="nav-d" style={{display:"flex",gap:28,alignItems:"center"}}>
          {[["Home","#home"],["Features","#features"],["Earnings","#earnings"],["Install","#install"],["FAQs","#faqs"]].map(([l,h])=>(
            <a key={l} href={h} style={{color:"rgba(255,255,255,0.85)",fontSize:14,fontFamily:"Arial,sans-serif"}}>{l}</a>
          ))}
          <a href={REFERRAL_LINK} className="btn-dl" style={{padding:"9px 20px",fontSize:14}}>⬇ Download</a>
        </div>
        <button className="nav-m" onClick={()=>setMenuOpen(o=>!o)} style={{background:"none",border:"none",color:"#fff",fontSize:26,cursor:"pointer"}}>☰</button>
      </nav>
      {menuOpen && (
        <div style={{background:"#2d5a1b",padding:"16px 32px",display:"flex",flexDirection:"column",gap:12,borderTop:"1px solid rgba(255,255,255,0.1)"}}>
          {["Home","Features","Earnings","Install","FAQs"].map(l=>(
            <a key={l} href={`#${l.toLowerCase()}`} style={{color:"rgba(255,255,255,0.9)",fontSize:15}} onClick={()=>setMenuOpen(false)}>{l}</a>
          ))}
          <a href={REFERRAL_LINK} className="btn-dl" style={{width:"fit-content",padding:"10px 24px",fontSize:14}}>⬇ Download Free</a>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" style={{background:"linear-gradient(160deg,#2d5a1b 0%,#1e4010 55%,#162e0b 100%)",padding:"72px 24px 80px",textAlign:"center"}}>
        <p style={{color:"#a8d48a",fontSize:12,letterSpacing:2,textTransform:"uppercase",marginBottom:14,fontFamily:"Arial,sans-serif"}}>Android App · Free Download · No Investment</p>
        <h1 style={{color:"#fff",fontSize:"clamp(28px,5vw,46px)",fontWeight:"normal",lineHeight:1.2,maxWidth:640,margin:"0 auto 18px"}}>
          Kamai Kendra — Earn Real Money Doing Simple Tasks
        </h1>
        <p style={{color:"#c8e8b0",fontSize:17,maxWidth:520,margin:"0 auto 36px",lineHeight:1.75}}>
          Download the free Kamai Kendra App for Android and start earning up to{" "}
          <strong style={{color:"#fff"}}>₹1,25,000 per year</strong> by completing easy tasks like watching videos, surveys, quizzes, and referring friends.
        </p>
        <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginBottom:40}}>
          <a href={REFERRAL_LINK} className="btn-dl" style={{fontSize:17,padding:"15px 40px",background:"#fff",color:"#2d5a1b",fontWeight:"bold"}}>⬇ Free Download</a>
          <a href="#features" className="btn-dl-outline" style={{color:"#a8d48a",borderColor:"rgba(168,212,138,0.6)"}}>Explore Features</a>
        </div>
        <div style={{display:"flex",gap:24,justifyContent:"center",flexWrap:"wrap"}}>
          {[["🔒","CM Security"],["🛡","Lookout"],["✔","McAfee"]].map(([icon,name])=>(
            <div key={name} style={{color:"rgba(255,255,255,0.55)",fontSize:13,display:"flex",alignItems:"center",gap:6,fontFamily:"Arial,sans-serif"}}>
              <span>{icon}</span><span>{name} Verified</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── EARNINGS TABLE ── */}
      <section id="earnings" style={{background:"#fafaf8",padding:"64px 24px"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:36}}>
            <span className="section-tag">Earning Potential</span>
            <h2 style={{fontSize:26,fontWeight:"normal",lineHeight:1.4}}>How Much Can You Earn on Kamai Kendra?</h2>
            <p style={{color:"#666",marginTop:10,fontSize:15}}>Based on regular usage and active referrals</p>
          </div>
          <div className="earnings-grid" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:14}}>
            {earningsData.map(({label,value,icon,color})=>(
              <div key={label}
                style={{background:"#fff",border:`2px solid ${color}22`,borderRadius:12,padding:"22px 14px",textAlign:"center",cursor:"default",transition:"transform 0.2s,box-shadow 0.2s"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow=`0 8px 24px ${color}33`;}}
                onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
                <div style={{fontSize:28,marginBottom:8}}>{icon}</div>
                <div style={{fontSize:20,fontWeight:"bold",color,marginBottom:4}}>{value}</div>
                <div style={{fontSize:12,color:"#888",textTransform:"uppercase",letterSpacing:0.8,fontFamily:"Arial,sans-serif"}}>{label}</div>
              </div>
            ))}
          </div>
          <p style={{textAlign:"center",color:"#888",fontSize:13,marginTop:18,fontFamily:"Arial,sans-serif"}}>* Earnings vary based on task completion and referral activity.</p>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{maxWidth:780,margin:"0 auto",padding:"72px 24px 56px"}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <span className="section-tag">What is Kamai Kendra?</span>
          <h2 style={{fontSize:28,fontWeight:"normal",lineHeight:1.35,maxWidth:580,margin:"0 auto"}}>An Android App Built Around Earning Real Rewards</h2>
        </div>
        <p style={{fontSize:16,lineHeight:1.85,color:"#444",marginBottom:18}}>
          <strong>Kamai Kendra</strong> is an Android application loaded with different tasks that help users earn a good amount of money. Users get points as a reward for completing tasks — and these points are redeemable for real money in India, Pakistan, Bangladesh, and several other countries.
        </p>
        <p style={{fontSize:16,lineHeight:1.85,color:"#444",marginBottom:18}}>
          The app is loaded with diverse tasks like watching ads, referrals, surveys, puzzles, and many more. After completing any task, there is no waiting period before you can pick another. It is approachable enough that even a student or first-time earner can use it without any hassle.
        </p>
        <p style={{fontSize:16,lineHeight:1.85,color:"#444"}}>
          The best part is that users don't need to invest anything. Since the app has its own revenue generation model, it provides third-party tasks for which it gets paid — and passes a commission to you for completing them.
        </p>
        <div style={{marginTop:32,textAlign:"center"}}>
          <a href={REFERRAL_LINK} className="btn-dl">⬇ Download & Start Earning</a>
        </div>
      </section>

      <hr style={{border:"none",borderTop:"1px solid #e5e1d8"}}/>

  {/* ── APP SCREENSHOTS (realistic phone mockups) ── */}
<section
  style={{
    background:
      "linear-gradient(135deg,#0f0520 0%,#2a0f50 50%,#0f0520 100%)",
    padding: "72px 24px",
  }}
>
  <div style={{ maxWidth: 960, margin: "0 auto" }}>

    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <span
        style={{
          display: "inline-block",
          background: "rgba(255,255,255,0.12)",
          color: "#d8bfff",
          fontSize: 12,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          padding: "6px 18px",
          borderRadius: 4,
          marginBottom: 16,
          fontFamily: "Arial,sans-serif",
        }}
      >
        App Preview
      </span>

      <h2
        style={{
          color: "#fff",
          fontSize: 26,
          fontWeight: "normal",
          lineHeight: 1.4,
        }}
      >
        See Kamai Kendra in Action
      </h2>

      <p
        style={{
          color: "rgba(255,255,255,0.55)",
          marginTop: 10,
          fontSize: 15,
        }}
      >
        Simple install process, beautiful interface, instant rewards
      </p>
    </div>

    <div
      className="phones-row"
      style={{
        display: "flex",
        gap: 32,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >

      {/* Phone 1 */}
      <Image
        src="/images/screenshot1.png"
        alt="Install screen"
        width={155}
        height={300}
        style={{ borderRadius: 18 }}
      />

      {/* Phone 2 */}
      <Image
        src="/images/screenshot2.png"
        alt="App screen"
        width={165}
        height={320}
        style={{ borderRadius: 18 }}
      />

      {/* Phone 3 */}
      <Image
        src="/images/screenshot3.png"
        alt="Installing"
        width={155}
        height={300}
        style={{ borderRadius: 18 }}
      />

    </div>
  </div>
</section>

      {/* ── APP INFO ── */}
      <section style={{background:"#fafaf8",padding:"64px 24px"}}>
        <div style={{maxWidth:880,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:36}}>
            <span className="section-tag">App Information</span>
          </div>
          <div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {[
              {label:"App Name",      value:"Kamai Kendra",  icon:"📱"},
              {label:"Category",      value:"sms and earn", icon:"🎯"},
              {label:"Developer",     value:"Kamai Kendra",  icon:"👨‍💻"},
              {label:"Version",       value:"1.0",           icon:"🔖"},
              {label:"File Size",     value:"49.8 MB",       icon:"📦"},
              {label:"Compatible",    value:"Android 5.0+",  icon:"✅"},
            ].map(({label,value,icon})=>(
              <div key={label} style={{background:"#fff",border:"1px solid #e5e1d8",borderRadius:10,padding:"22px 18px",textAlign:"center"}}>
                <div style={{fontSize:24,marginBottom:8}}>{icon}</div>
                <div style={{fontSize:11,color:"#999",textTransform:"uppercase",letterSpacing:1,fontFamily:"Arial,sans-serif",marginBottom:6}}>{label}</div>
                <div style={{fontSize:15,fontWeight:"bold",color:"#2d5a1b"}}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{border:"none",borderTop:"1px solid #e5e1d8"}}/>

      {/* ── FEATURES ── */}
      <section id="features" style={{maxWidth:980,margin:"0 auto",padding:"72px 24px"}}>
        <div style={{textAlign:"center",marginBottom:48}}>
          <span className="section-tag">Features</span>
          <h2 style={{fontSize:28,fontWeight:"normal",maxWidth:500,margin:"0 auto",lineHeight:1.35}}>Key Features That Make Kamai Kendra Worth Your Time</h2>
        </div>
        <div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
          {features.map(({icon,title,desc})=>(
            <div key={title} className="feature-card">
              <div style={{fontSize:32,marginBottom:12}}>{icon}</div>
              <h3 style={{fontSize:16,marginBottom:8,color:"#1a1a1a"}}>{title}</h3>
              <p style={{fontSize:14,color:"#666",lineHeight:1.7}}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{border:"none",borderTop:"1px solid #e5e1d8"}}/>

      {/* ── HOW TO INSTALL ── */}
      <section id="install" style={{background:"#fafaf8",padding:"72px 24px"}}>
        <div style={{maxWidth:720,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <span className="section-tag">Installation Guide</span>
            <h2 style={{fontSize:26,fontWeight:"normal",lineHeight:1.4}}>How to Download and Install Kamai Kendra APK</h2>
            <p style={{color:"#666",marginTop:12,fontSize:15,lineHeight:1.7}}>Before installing, enable <strong>Unknown Sources</strong> in your Android settings (Settings → Security → Unknown Sources), then follow these steps:</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {[
              "Tap on the Download button below.",
              "Wait for a few minutes until the APK file is fully downloaded.",
              "Open the File Manager app on your phone.",
              "Navigate to the Downloads folder.",
              "Locate and tap on the Kamai Kendra APK file.",
              "Tap on the Install button when prompted.",
              "Give it a few seconds to let the installation process complete.",
            ].map((step,i)=>(
              <div key={i} className="earn-step">
                <div className="step-circle">{i+1}</div>
                <p style={{fontSize:15,color:"#333",lineHeight:1.65,paddingTop:4}}>{step}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:36}}>
            <a href={REFERRAL_LINK} className="btn-dl" style={{fontSize:16,padding:"15px 44px"}}>⬇ Download Kamai Kendra APK — Free</a>
          </div>
        </div>
      </section>

      <hr style={{border:"none",borderTop:"1px solid #e5e1d8"}}/>

      {/* ── HOW TO EARN ── */}
      <section style={{maxWidth:780,margin:"0 auto",padding:"72px 24px"}}>
        <div style={{textAlign:"center",marginBottom:40}}>
          <span className="section-tag">How to Earn</span>
          <h2 style={{fontSize:26,fontWeight:"normal",lineHeight:1.4}}>How to Earn Money on Kamai Kendra</h2>
          <p style={{color:"#666",marginTop:10,fontSize:15}}>Start earning in just 5 simple steps — no skills or investment required</p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:0}}>
          {[
            {icon:"📥",title:"Download & Install",    desc:"Download the Kamai Kendra APK from the link on this page and install it on your Android smartphone or tablet."},
            {icon:"✍️",title:"Register Your Account", desc:"Sign up using your email address or mobile phone number. Set a password and verify your account to get started."},
            {icon:"🎯",title:"Pick a Task",           desc:"Browse the available tasks — watch videos, complete surveys, solve quizzes, puzzles, or refer friends. Choose what you like."},
            {icon:"✅",title:"Complete the Task",     desc:"Complete the selected task as instructed. Each completed task rewards you with points or a direct cash reward."},
            {icon:"💸",title:"Withdraw Your Earnings",desc:"Once you've earned enough, withdraw your money anytime via your preferred payment method — bank, e-wallet, or card."},
          ].map(({icon,title,desc},i)=>(
            <div key={i} style={{display:"flex",gap:20,padding:"24px 0",borderBottom:i<4?"1px solid #e5e1d8":"none",alignItems:"flex-start"}}>
              <div style={{width:52,height:52,background:"#eef6e8",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0,border:"1px solid #d0e8c8"}}>{icon}</div>
              <div>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                  <span style={{background:"#2d5a1b",color:"#fff",borderRadius:"50%",width:22,height:22,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:12,fontFamily:"Arial,sans-serif",flexShrink:0}}>{i+1}</span>
                  <h3 style={{fontSize:17}}>{title}</h3>
                </div>
                <p style={{fontSize:15,color:"#555",lineHeight:1.75}}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:"#eef6e8",border:"1px solid #c8e0b8",borderRadius:12,padding:"20px 24px",marginTop:32}}>
          <p style={{fontSize:15,color:"#2d5a1b",lineHeight:1.75}}>
            <strong>Final Words:</strong> Kamai Kendra features some easy earning options for people looking for quick and instant income. There is nothing special users need to do — just complete surveys, solve quizzes, watch videos, and refer friends to win cash rewards. Download the latest APK from this page and install it on your Android device to get started today.
          </p>
        </div>
      </section>

     {/* ── FAQ SECTION ── */}
<section
  id="faqs"
  style={{
    background: "#fafaf8",
    padding: "90px 24px",
    borderTop: "1px solid #e5e1d8",
  }}
>
  <div
    style={{
      maxWidth: 850,
      margin: "0 auto",
    }}
  >

    {/* HEADING */}
    <div
      style={{
        textAlign: "center",
        marginBottom: 50,
      }}
    >
      <span className="section-tag">
        FAQs
      </span>

      <h2
        style={{
          fontSize: "clamp(28px,4vw,40px)",
          fontWeight: "normal",
          lineHeight: 1.3,
          color: "#1a1a1a",
          marginTop: 18,
          marginBottom: 18,
        }}
      >
        Frequently Asked Questions
      </h2>

      <p
        style={{
          color: "#666",
          fontSize: 16,
          lineHeight: 1.8,
          maxWidth: 650,
          margin: "0 auto",
        }}
      >
        Everything you need to know about Kamai Kendra,
        earning rewards, withdrawals, tasks and referrals.
      </p>
    </div>

    {/* FAQ BOX */}
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e1d8",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
      }}
    >

      {faqs.map(({ q, a }, i) => (

        <div
          key={i}
          style={{
            borderBottom:
              i !== faqs.length - 1
                ? "1px solid #ece8df"
                : "none",
          }}
        >

          {/* QUESTION */}
          <button
            onClick={() =>
              setOpenFaq(openFaq === i ? null : i)
            }
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              padding: "26px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              textAlign: "left",
            }}
          >

            <span
              style={{
                fontSize: 18,
                color: "#1a1a1a",
                lineHeight: 1.6,
                paddingRight: 20,
              }}
            >
              {q}
            </span>

            <span
              style={{
                fontSize: 28,
                color: "#2d5a1b",
                transition: "0.2s",
                transform:
                  openFaq === i
                    ? "rotate(45deg)"
                    : "rotate(0deg)",
              }}
            >
              +
            </span>

          </button>

          {/* ANSWER */}
          {openFaq === i && (

            <div
              style={{
                padding: "0 28px 28px",
              }}
            >

              <p
                style={{
                  fontSize: 16,
                  color: "#555",
                  lineHeight: 1.9,
                }}
              >
                {a}
              </p>

            </div>

          )}

        </div>

      ))}

    </div>

    {/* BOTTOM TEXT */}
    <div
      style={{
        textAlign: "center",
        marginTop: 24,
      }}
    >
      <p
        style={{
          color: "#777",
          fontSize: 14,
          lineHeight: 1.7,
        }}
      >
        Still have questions? Contact support or read more
        information inside the app.
      </p>
    </div>

  </div>
</section>
      {/* ── SAFE DOWNLOAD GUIDE ── */}
<section
  style={{
    background: "#fff",
    padding: "72px 24px",
    borderTop: "1px solid #e5e1d8",
  }}
>
  <div style={{ maxWidth: 1050, margin: "0 auto" }}>

    <div style={{ textAlign: "center", marginBottom: 50 }}>
      <span className="section-tag">
        Download Issue Fix
      </span>

      <h2
        style={{
          fontSize: 30,
          fontWeight: "normal",
          marginBottom: 16,
          lineHeight: 1.4,
        }}
      >
        Seeing “Dangerous Site” Warning in Chrome?
      </h2>

      <p
        style={{
          color: "#666",
          fontSize: 16,
          lineHeight: 1.8,
          maxWidth: 750,
          margin: "0 auto",
        }}
      >
        Sometimes Chrome may show a warning while downloading APK files
        from third-party websites. This happens because APK files are not
        downloaded from Google Play Store. If you trust the source,
        follow the simple steps below to continue safely.
      </p>
    </div>

    {/* STEP 1 */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center",
        marginBottom: 70,
      }}
      className="grid-2"
    >

      <div>
        <div
          style={{
            background: "#2d5a1b",
            color: "#fff",
            width: 42,
            height: 42,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
            fontWeight: "bold",
          }}
        >
          1
        </div>

        <h3
          style={{
            fontSize: 24,
            marginBottom: 14,
            color: "#1a1a1a",
          }}
        >
          Tap on “Details”
        </h3>

        <p
          style={{
            color: "#555",
            lineHeight: 1.8,
            fontSize: 16,
          }}
        >
          When Chrome shows the “Dangerous Site” warning page,
          scroll slightly and tap on the
          <strong> “Details” </strong>
          button available at the bottom of the warning message.
        </p>
      </div>

      <div style={{ textAlign: "center" }}>
        <img
          src="/images/error-warning.jpg"
          alt="Dangerous Site Warning"
          style={{
            width: "100%",
            maxWidth: 320,
            borderRadius: 18,
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        />
      </div>
    </div>

    {/* STEP 2 */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center",
      }}
      className="grid-2"
    >

      <div style={{ textAlign: "center" }}>
        <img
          src="/images/unsafe-site-step.jpg"
          alt="Unsafe Site Option"
          style={{
            width: "100%",
            maxWidth: 320,
            borderRadius: 18,
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      <div>
        <div
          style={{
            background: "#2d5a1b",
            color: "#fff",
            width: 42,
            height: 42,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
            fontWeight: "bold",
          }}
        >
          2
        </div>

        <h3
          style={{
            fontSize: 24,
            marginBottom: 14,
            color: "#1a1a1a",
          }}
        >
          Tap on “Unsafe Site”
        </h3>

        <p
          style={{
            color: "#555",
            lineHeight: 1.8,
            fontSize: 16,
          }}
        >
          After opening the details section, Chrome will show an option
          called
          <strong> “unsafe site” </strong>
          or
          <strong> “Continue to site”</strong>.
          Tap on it to proceed to the APK download page safely.
        </p>

        <p
          style={{
            color: "#777",
            lineHeight: 1.8,
            fontSize: 15,
            marginTop: 18,
          }}
        >
          This warning is common for APK downloads outside the Play Store.
          Always make sure you are downloading from a trusted source.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* ── FINAL CTA ── */}
      <section style={{background:"linear-gradient(135deg,#2d5a1b 0%,#1e4010 100%)",padding:"80px 24px",textAlign:"center"}}>
        <div style={{maxWidth:560,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"center",marginBottom:20}}>
            <KKLogo size={64}/>
          </div>
          <h2 style={{color:"#fff",fontSize:"clamp(24px,4vw,34px)",fontWeight:"normal",marginBottom:14,lineHeight:1.3}}>
            Start Earning Up to ₹1,25,000/Year — It's Free
          </h2>
          <p style={{color:"#c8e8b0",fontSize:16,marginBottom:36,lineHeight:1.75}}>
            Download the Kamai Kendra app for Android and begin earning real money with simple tasks, surveys, videos and referrals — zero investment required.
          </p>
          <a href={REFERRAL_LINK} className="btn-dl" style={{fontSize:17,padding:"16px 48px",background:"#fff",color:"#2d5a1b",fontWeight:"bold",display:"inline-flex"}}>
            ⬇ Download Free — Android APK
          </a>
          <p style={{color:"rgba(255,255,255,0.4)",fontSize:12,marginTop:18,fontFamily:"Arial,sans-serif"}}>Free · No Investment · Android 5.0+</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{background:"#0f0f0f",color:"#666",padding:"36px 24px",textAlign:"center"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:16}}>
          <KKLogo size={34}/>
          <span style={{color:"#aaa",fontSize:16,fontFamily:"Georgia,serif"}}>Kamai Kendra</span>
        </div>
        <div style={{display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap",marginBottom:16}}>
          {["Privacy Policy","Terms of Use","Contact Us","FAQs","Blog"].map(l=>(
            <a key={l} href="#" style={{fontSize:13,color:"#777",fontFamily:"Arial,sans-serif"}}>{l}</a>
          ))}
        </div>
        <p style={{fontSize:13,color:"#555",fontFamily:"Arial,sans-serif"}}>Copyright © 2024 – 2025 – Kamai Kendra. All rights reserved.</p>
      </footer>
    </div>
  );
}