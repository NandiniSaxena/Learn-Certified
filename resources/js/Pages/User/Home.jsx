// import React, { useState } from "react";
// import { Head, Link } from "@inertiajs/react";
// import {
//   Phone, Mail, MapPin, CheckCircle,
//   Search, MessageCircle, ChevronDown, Award,
//   ShieldCheck, Star, Clock, Users, UserPlus, LogIn
// } from "lucide-react";
// import { router } from '@inertiajs/react';

// export default function Home({ certifications = [] }) {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // This prevents the marquee from being empty if certifications haven't loaded yet
//   const navItems = certifications.length > 0 ? certifications : [];

//   return (
//     <div className="min-h-screen font-sans antialiased text-[#212529] bg-white overflow-x-hidden">
//       <Head title="Global Training & Certifications | IT Certification Exam Support" />

//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           display: flex;
//           width: max-content;
//           animation: marquee 60s linear infinite;
//         }
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//         .dropdown-container {
//           white-space: normal;
//         }
//       `}</style>

//       {/* ================= TOP BLUE CONTACT BAR ================= */}
//       <div className="bg-[#0d6efd] text-white py-2 px-6 md:px-12 flex justify-between items-center text-[13px] md:text-[14px]">
//         <div className="flex items-center gap-2">
//           <Mail size={14} />
//           <a href="mailto:learnandcertified@gmail.com" className="hover:underline">
//             learnandcertified@gmail.com
//           </a>
//         </div>
//         <div className="flex items-center gap-4">
//           <span className="hidden sm:inline">For Order/Enquiry:</span>
//           <div className="flex items-center gap-2 font-bold">
//             <Phone size={14} />
//             <a href="tel:+919259239522" className="hover:underline">+91 9259239522</a>
//           </div>
//         </div>
//       </div>

//       {/* ================= MAIN BRAND HEADER ================= */}
//       <header className="bg-white py-5 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-sm gap-4">
//         <div className="text-center md:text-left">
//           <h1 className="text-[#0d6efd] text-3xl md:text-4xl font-black leading-none tracking-tight">
//             Learn and Certified
//           </h1>
//           <p className="text-gray-500 text-[10px] md:text-[11px] font-bold tracking-[0.2em] mt-1 uppercase">
//             Helping you real time online
//           </p>
//         </div>

//         <div className="flex flex-wrap items-center justify-center gap-3">
//           <div className="flex items-center bg-gray-100 rounded-lg p-1 mr-2">
//             <Link href="/login" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#0d6efd] transition-colors">
//               <LogIn size={16} /> Login
//             </Link>
//             <div className="w-[1px] h-4 bg-gray-300"></div>
//             <Link href="/register" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#0d6efd] transition-colors">
//               <UserPlus size={16} /> Register
//             </Link>
//           </div>

//           <a href="https://wa.me/919259239522" target="_blank" className="bg-[#0d6efd] text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-[#0b5ed7] transition-all shadow-md text-sm">
//             <MessageCircle size={18} fill="white" /> WhatsApp Now
//           </a>
//         </div>
//       </header>

//       {/* ================= MOVING NAVIGATION ================= */}
//       <nav className="bg-[#0b5ed7] text-white py-3.5 sticky top-0 z-50 shadow-lg overflow-visible">
//         <div className="animate-marquee">
//           {[1, 2].map((loop) => (
//             <div key={`loop-${loop}`} className="flex gap-12 px-6">
//               {navItems.map((item, idx) => (
//                 <div
//                   key={`nav-${loop}-${item.id}-${idx}`}
//                   className="relative group py-1"
//                   onMouseEnter={() => setActiveDropdown(`${loop}-${item.id}-${idx}`)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-colors uppercase font-bold text-[13px] tracking-tight whitespace-nowrap">
//                     {item.name} <ChevronDown size={14} strokeWidth={3} className={`transition-transform ${activeDropdown === `${loop}-${item.id}-${idx}` ? 'rotate-180' : ''}`} />
//                   </div>

//                   {activeDropdown === `${loop}-${item.id}-${idx}` && item.sub_certifications?.length > 0 && (
//                     <div className={`absolute top-full -mt-1 pt-4 w-80 z-[100] dropdown-container pointer-events-auto
//                       ${idx > navItems.length / 2 ? 'right-0' : 'left-0'}
//                     `}>
//                       <div className="bg-white rounded-md shadow-2xl border border-gray-100 p-6">
//                         <h4 className="text-[#0d6efd] font-bold text-[15px] mb-4 border-b border-gray-100 pb-3">
//                           {item.name} Certifications
//                         </h4>
//                         <ul className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
//                           {item.sub_certifications.map((sub) => (
//                             <li key={sub.id} className="text-[#444] text-[13px] leading-snug hover:text-[#0d6efd] cursor-pointer font-medium transition-colors text-left">
//                               {/* Matches Route::get('/certification/{name}') */}
//                               <Link href={`/certification/${sub.slug}`} className="block w-full">
//                                 {sub.name}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                         <a
//                           href={`https://wa.me/919259239522?text=Hi, I am interested in ${item.name} exams.`}
//                           target="_blank"
//                           className="w-full bg-[#0d6efd] text-white py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#0b5ed7] transition-all text-[14px] shadow-sm"
//                         >
//                           Get Pricing on WhatsApp
//                         </a>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </nav>

//       {/* ================= HERO SECTION ================= */}
//       <section className="bg-[#0d6efd] text-white pt-16 pb-24 px-6 md:px-15 relative">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
//               Guaranteed <br /> Success
//             </h1>
//             <div className="w-20 h-1.5 bg-white opacity-60"></div>
//             <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-lg font-medium">
//               Get worldwide IT/NON-IT Certifications with remote support and 100% passing guarantee.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button className="bg-white text-[#0d6efd] px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:bg-gray-100 transition-all" onClick={() =>
//     window.open(
//       "https://api.whatsapp.com/send?phone=919259239522",
//       "_blank"
//     )
//   }>
//                 <Search size={22} strokeWidth={3} /> Get Exam Support Now
//               </button>
//               <button onClick={() => router.visit(route('learn.more'))} className="border-2 border-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white hover:text-[#0d6efd] transition-all">
//                 Learn More
//               </button>
//             </div>
//           </div>
//           <div className="relative">
//             <img src="pic1.png" className="rounded-[2.5rem] shadow-2xl w-full border-[12px] border-white/10" alt="Professional Success Team" />
//           </div>
//         </div>
//       </section>

//       {/* ================= SIMPLE STEPS SECTION ================= */}
//       <section className="py-24 px-6 max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-[44px] font-black text-center mb-20 leading-tight text-slate-800 uppercase">
//           Learn & Certified Service in <br />
//           <span className="text-[#0d6efd] relative inline-block">Simple Steps
//              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#0d6efd] rounded-full"></span>
//           </span>
//         </h2>
//         <div className="grid md:grid-cols-3 gap-10">
//           {[
//             { icon: <CheckCircle size={40} />, color: "bg-green-500", title: "Pass Guarantee", text: "We are a long-term player in the industry with a proven (100% Pass Guaranteed) record." },
//             { icon: <Award size={40} />, color: "bg-blue-500", title: "Certified Experience", text: "Passing Without Exam, Our professionals will take your Exam in testing center for you." },
//             { icon: <ShieldCheck size={40} />, color: "bg-purple-600", title: "Simple But Secure", text: "No matter where you locate, you can take your exams and obtain certifications at home without any effort!" },
//             { icon: <Star size={40} />, color: "bg-yellow-400", title: "We're The First One", text: "We are the first IT Exam Substituting Company for worldwide." },
//             { icon: <Clock size={40} />, color: "bg-red-500", title: "20 Years Experience", text: "With over 5000 clients passed their exam and got the certificates." },
//             { icon: <Users size={40} />, color: "bg-[#0dcaf0]", title: "Great Support", text: "We're here 24/7 available to serve your request regarding your certifications." },
//           ].map((item, idx) => (
//             <div key={idx} className="bg-white p-12 rounded-[2rem] text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all border border-gray-100 group">
//               <div className={`${item.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white shadow-lg transform group-hover:scale-110 transition-transform`}>
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-black mb-4 tracking-wide uppercase text-slate-800">{item.title}</h3>
//               <p className="text-gray-500 leading-relaxed font-medium">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CONTACT & QR SECTION ================= */}
//       <section className="bg-[#0d6efd] py-24 px-6 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-4 gap-6">
//             <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
//               <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white text-center border border-white/20">
//                 <Phone className="mx-auto mb-4" size={32} />
//                 <h4 className="font-black text-xl mb-2 uppercase">Phone</h4>
//                 <p className="text-lg font-bold">+919259239522</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white text-center border border-white/20">
//                 <Mail className="mx-auto mb-4" size={32} />
//                 <h4 className="font-black text-xl mb-2 uppercase">Email</h4>
//                 <p className="text-[13px] font-bold break-all">learnandcertified@gmail.com</p>
//               </div>
//               <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white text-center border border-white/20">
//                 <MapPin className="mx-auto mb-4" size={32} />
//                 <h4 className="font-black text-xl mb-2 uppercase">Address</h4>
//                 <p className="text-sm font-bold leading-relaxed">India</p>
//               </div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white text-center border border-white/20 flex flex-col items-center justify-center">
//               <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Scan QR Code</h4>
//               <div className="bg-white p-3 rounded-xl shadow-2xl">
//                 <img src="/qr.png" alt="WhatsApp QR" className="w-32 h-32" />
//               </div>
//               <p className="text-[11px] mt-6 opacity-80 font-bold uppercase">Scan to open WhatsApp chat</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="bg-[#0b1220] text-gray-400 py-24 px-6 md:px-20">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
//           <div className="md:col-span-4 space-y-8">
//             <h3 className="text-[#0d6efd] text-3xl font-black leading-tight tracking-tighter uppercase">
//               Learn & <br /> Certified
//             </h3>
//             <p className="text-[15px] leading-relaxed text-gray-400 font-medium">
//               Your trusted partner for IT certification success.
//             </p>
//           </div>

//           <div className="md:col-span-8">
//             <h4 className="text-white font-black text-xl mb-10 uppercase tracking-widest border-b border-white/10 pb-4">All Certifications</h4>
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 text-[14px] font-bold">
//               {/* FIXED: Replaced 'certificationsList' with dynamic 'certifications' and fixed the 'cert' reference */}
//               {certifications.map((item) => (
//                 <Link key={item.id} href={`/certification/${item.slug}`} className="hover:text-blue-400 transition-colors flex items-center gap-2 uppercase">
//                   <span className="w-1.5 h-1.5 bg-[#0d6efd] rounded-full"></span> {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }









import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import {
  Phone, Mail, MapPin, CheckCircle,
  Search, MessageCircle, ChevronDown, Award,
  ShieldCheck, Star, Clock, Users, UserPlus, LogIn, User, LogOut
} from "lucide-react";
import { router } from '@inertiajs/react';

// Added 'auth' to the props
export default function Home({ certifications = [], auth }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems = certifications.length > 0 ? certifications : [];

  // Handle Logout
  const handleLogout = (e) => {
    e.preventDefault();
    router.post(route('logout'));
  };

  return (
    <div className="min-h-screen font-sans antialiased text-[#212529] bg-white overflow-x-hidden">
      <Head title="Global Training & Certifications | IT Certification Exam Support" />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .dropdown-container {
          white-space: normal;
        }
      `}</style>

      {/* ================= TOP BLUE CONTACT BAR ================= */}
      <div className="bg-[#0d6efd] text-white py-2 px-6 md:px-12 flex justify-between items-center text-[13px] md:text-[14px]">
        <div className="flex items-center gap-2">
          <Mail size={14} />
          <a href="mailto:learnandcertified@gmail.com" className="hover:underline">
            learnandcertified@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">For Order/Enquiry:</span>
          <div className="flex items-center gap-2 font-bold">
            <Phone size={14} />
            <a href="tel:+919259239522" className="hover:underline">+91 9259239522</a>
          </div>
        </div>
      </div>

      {/* ================= MAIN BRAND HEADER ================= */}
      <header className="bg-white py-5 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-sm gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-[#0d6efd] text-3xl md:text-4xl font-black leading-none tracking-tight">
            Learn and Certified
          </h1>
          <p className="text-gray-500 text-[10px] md:text-[11px] font-bold tracking-[0.2em] mt-1 uppercase">
            Helping you real time online
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* SESSION MANAGEMENT LOGIC STARTS HERE */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1 mr-2 relative">
            {auth.user ? (
              // If Logged In: Show User Profile Dropdown
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#0d6efd] hover:bg-white rounded-md transition-all"
                >
                  <User size={16} /> {auth.user.first_name || 'My Account'} <ChevronDown size={14} />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 z-[110] overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
                       <p className="text-[10px] uppercase text-gray-400 font-black tracking-widest">Logged in as</p>
                       <p className="text-sm font-bold text-slate-800 truncate">{auth.user.email}</p>
                    </div>
                    <Link href="/dashboard" className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50">
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors border-t border-gray-50"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // If Not Logged In: Show Login/Register
              <>
                <Link href="/login" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#0d6efd] transition-colors">
                  <LogIn size={16} /> Login
                </Link>
                <div className="w-[1px] h-4 bg-gray-300"></div>
                <Link href="/register" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#0d6efd] transition-colors">
                  <UserPlus size={16} /> Register
                </Link>
              </>
            )}
          </div>
          {/* SESSION MANAGEMENT LOGIC ENDS HERE */}

          <a href="https://wa.me/919259239522" target="_blank" className="bg-[#0d6efd] text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-[#0b5ed7] transition-all shadow-md text-sm">
            <MessageCircle size={18} fill="white" /> WhatsApp Now
          </a>
        </div>
      </header>

      {/* ================= MOVING NAVIGATION ================= */}
      <nav className="bg-[#0b5ed7] text-white py-3.5 sticky top-0 z-50 shadow-lg overflow-visible">
        <div className="animate-marquee">
          {[1, 2].map((loop) => (
            <div key={`loop-${loop}`} className="flex gap-12 px-6">
              {navItems.map((item, idx) => (
                <div
                  key={`nav-${loop}-${item.id}-${idx}`}
                  className="relative group py-1"
                  onMouseEnter={() => setActiveDropdown(`${loop}-${item.id}-${idx}`)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-colors uppercase font-bold text-[13px] tracking-tight whitespace-nowrap">
                    {item.name} <ChevronDown size={14} strokeWidth={3} className={`transition-transform ${activeDropdown === `${loop}-${item.id}-${idx}` ? 'rotate-180' : ''}`} />
                  </div>

                  {activeDropdown === `${loop}-${item.id}-${idx}` && item.sub_certifications?.length > 0 && (
                    <div className={`absolute top-full -mt-1 pt-4 w-80 z-[100] dropdown-container pointer-events-auto
                      ${idx > navItems.length / 2 ? 'right-0' : 'left-0'}
                    `}>
                      <div className="bg-white rounded-md shadow-2xl border border-gray-100 p-6">
                        <h4 className="text-[#0d6efd] font-bold text-[15px] mb-4 border-b border-gray-100 pb-3">
                          {item.name} Certifications
                        </h4>
                        <ul className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                          {item.sub_certifications.map((sub) => (
                            <li key={sub.id} className="text-[#444] text-[13px] leading-snug hover:text-[#0d6efd] cursor-pointer font-medium transition-colors text-left">
                              <Link href={`/certification/${sub.slug}`} className="block w-full">
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <a
                          href={`https://wa.me/919259239522?text=Hi, I am interested in ${item.name} exams.`}
                          target="_blank"
                          className="w-full bg-[#0d6efd] text-white py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#0b5ed7] transition-all text-[14px] shadow-sm"
                        >
                          Get Pricing on WhatsApp
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0d6efd] text-white pt-16 pb-24 px-6 md:px-15 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              Guaranteed <br /> Success
            </h1>
            <div className="w-20 h-1.5 bg-white opacity-60"></div>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-lg font-medium">
              Get worldwide IT/NON-IT Certifications with remote support and 100% passing guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-[#0d6efd] px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:bg-gray-100 transition-all" onClick={() =>
                window.open("https://api.whatsapp.com/send?phone=919259239522", "_blank")
              }>
                <Search size={22} strokeWidth={3} /> Get Exam Support Now
              </button>
              <button onClick={() => router.visit(route('learn.more'))} className="border-2 border-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white hover:text-[#0d6efd] transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img src="pic1.png" className="rounded-[2.5rem] shadow-2xl w-full border-[12px] border-white/10" alt="Professional Success Team" />
          </div>
        </div>
      </section>

      {/* ================= SIMPLE STEPS SECTION ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-[44px] font-black text-center mb-20 leading-tight text-slate-800 uppercase">
          Learn & Certified Service in <br />
          <span className="text-[#0d6efd] relative inline-block">Simple Steps
             <span className="absolute bottom-0 left-0 w-full h-1 bg-[#0d6efd] rounded-full"></span>
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: <CheckCircle size={40} />, color: "bg-green-500", title: "Pass Guarantee", text: "We are a long-term player in the industry with a proven (100% Pass Guaranteed) record." },
            { icon: <Award size={40} />, color: "bg-blue-500", title: "Certified Experience", text: "Passing Without Exam, Our professionals will take your Exam in testing center for you." },
            { icon: <ShieldCheck size={40} />, color: "bg-purple-600", title: "Simple But Secure", text: "No matter where you locate, you can take your exams and obtain certifications at home without any effort!" },
            { icon: <Star size={40} />, color: "bg-yellow-400", title: "We're The First One", text: "We are the first IT Exam Substituting Company for worldwide." },
            { icon: <Clock size={40} />, color: "bg-red-500", title: "20 Years Experience", text: "With over 5000 clients passed their exam and got the certificates." },
            { icon: <Users size={40} />, color: "bg-[#0dcaf0]", title: "Great Support", text: "We're here 24/7 available to serve your request regarding your certifications." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[2rem] text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all border border-gray-100 group">
              <div className={`${item.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white shadow-lg transform group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-4 tracking-wide uppercase text-slate-800">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT & QR SECTION ================= */}
      <section className="bg-[#0d6efd] py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white text-center border border-white/20">
                <Phone className="mx-auto mb-4" size={32} />
                <h4 className="font-black text-xl mb-2 uppercase">Phone</h4>
                <p className="text-lg font-bold">+919259239522</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white text-center border border-white/20">
                <Mail className="mx-auto mb-4" size={32} />
                <h4 className="font-black text-xl mb-2 uppercase">Email</h4>
                <p className="text-[13px] font-bold break-all">learnandcertified@gmail.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white text-center border border-white/20">
                <MapPin className="mx-auto mb-4" size={32} />
                <h4 className="font-black text-xl mb-2 uppercase">Address</h4>
                <p className="text-sm font-bold leading-relaxed">India</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white text-center border border-white/20 flex flex-col items-center justify-center">
              <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Scan QR Code</h4>
              <div className="bg-white p-3 rounded-xl shadow-2xl">
                <img src="/qr.png" alt="WhatsApp QR" className="w-32 h-32" />
              </div>
              <p className="text-[11px] mt-6 opacity-80 font-bold uppercase">Scan to open WhatsApp chat</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0b1220] text-gray-400 py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-8">
            <h3 className="text-[#0d6efd] text-3xl font-black leading-tight tracking-tighter uppercase">
              Learn & <br /> Certified
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-400 font-medium">
              Your trusted partner for IT certification success.
            </p>
          </div>

          <div className="md:col-span-8">
            <h4 className="text-white font-black text-xl mb-10 uppercase tracking-widest border-b border-white/10 pb-4">All Certifications</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 text-[14px] font-bold">
              {certifications.map((item) => (
                <Link key={item.id} href={`/certification/${item.slug}`} className="hover:text-blue-400 transition-colors flex items-center gap-2 uppercase">
                  <span className="w-1.5 h-1.5 bg-[#0d6efd] rounded-full"></span> {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
