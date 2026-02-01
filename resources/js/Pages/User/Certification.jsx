// import React, { useState } from 'react';
// import { Head, Link } from '@inertiajs/react';
// import {
//     Phone, Mail, MapPin, CheckCircle,
//     Search, MessageCircle, ChevronDown, Award,
//     ShieldCheck, Star, Clock, Users, UserPlus, LogIn, Globe, User
// } from "lucide-react";

// export default function Certification({ certName }) {
//     const [activeDropdown, setActiveDropdown] = useState(null);

//     const certificationsList = [
//         "Cisco", "Microsoft", "AWS", "CompTIA", "VMware", "Google", "Oracle", "PMI",
//         "ISACA", "Fortinet", "EC-Council", "ITIL", "Prince2", "Juniper", "Salesforce",
//         "ServiceNow", "Scrum", "Six Sigma", "IBM", "SAP", "Splunk", "Palo Alto",
//         "Kubernetes", "TOGAF", "DevOps", "ISTQB", "IIBA"
//     ];

//     const navItems = [
//         "SAP", "SAFe Agile", "Splunk", "Palo Alto", "Kubernetes",
//         "TOGAF", "DevOps", "ISTQB", "IIBA", "Cisco", "Microsoft", "ISACA"
//     ];

//     const dropdownData = {
//         "ISACA": [
//             "CISA (Certified Information Systems Auditor)",
//             "CISM (Certified Information Security Manager)",
//             "CRISC (Certified in Risk and Information Systems Control)",
//             "CGEIT (Certified in the Governance of Enterprise IT)"
//         ],
//         "Cisco": [
//             "CCNA (Cisco Certified Network Associate)",
//             "CCNP Enterprise (Core & Concentration)",
//             "CCIE Security / Infrastructure"
//         ],
//         "Microsoft": [
//             "AZ-900: Azure Fundamentals",
//             "AZ-104: Azure Administrator",
//             "AZ-400: DevOps Engineer Expert"
//         ]
//     };

//     return (
//         <div className="min-h-screen font-sans antialiased text-[#212529] bg-white overflow-x-hidden">
//             <Head title={`${certName} | Global Training & Certifications`} />

//             <style>{`
//                 @keyframes marquee {
//                     0% { transform: translateX(0); }
//                     100% { transform: translateX(-50%); }
//                 }
//                 .animate-marquee {
//                     display: flex;
//                     width: max-content;
//                     animation: marquee 40s linear infinite;
//                 }
//                 .animate-marquee:hover {
//                     animation-play-state: paused;
//                 }
//                 .dropdown-container {
//                     white-space: normal;
//                 }
//             `}</style>

//             {/* ================= TOP BLUE CONTACT BAR ================= */}
//             <div className="bg-[#0d6efd] text-white py-2 px-6 md:px-12 flex justify-between items-center text-[13px] md:text-[14px]">
//                 <div className="flex items-center gap-2">
//                     <Mail size={14} />
//                     <a href="mailto:info@globaltrainingcertifications.org" className="hover:underline">
//                         info@globaltrainingcertifications.org
//                     </a>
//                 </div>
//                 <div className="flex items-center gap-4">
//                     <span className="hidden sm:inline">For Order/Enquiry:</span>
//                     <div className="flex items-center gap-2 font-bold">
//                         <Phone size={14} />
//                         <a href="tel:+918603516998" className="hover:underline">+91 8603516998</a>
//                     </div>
//                 </div>
//             </div>

//             {/* ================= MAIN BRAND HEADER ================= */}
//             <header className="bg-white py-5 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-sm gap-4">
//                 <div className="text-center md:text-left">
//                     <Link href="/">
//                         <h1 className="text-[#0d6efd] text-3xl md:text-4xl font-black leading-none tracking-tight">
//                             GLOBALTRAINING
//                         </h1>
//                     </Link>
//                     <p className="text-gray-500 text-[10px] md:text-[11px] font-bold tracking-[0.2em] mt-1 uppercase">
//                         Helping you real time online
//                     </p>
//                 </div>

//                 <div className="flex flex-wrap items-center justify-center gap-3">
//                     <div className="flex items-center bg-gray-100 rounded-lg p-1 mr-2">
//                         <Link href="/login" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#0d6efd] transition-colors">
//                             <LogIn size={16} /> Login
//                         </Link>
//                         <div className="w-[1px] h-4 bg-gray-300"></div>
//                         <Link href="/register" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#0d6efd] transition-colors">
//                             <UserPlus size={16} /> Register
//                         </Link>
//                     </div>

//                     <a href="https://wa.me/918603516998" target="_blank" className="bg-[#0d6efd] text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-[#0b5ed7] transition-all shadow-md text-sm">
//                         <MessageCircle size={18} fill="white" /> WhatsApp Now
//                     </a>
//                 </div>
//             </header>

//             {/* ================= MOVING NAVIGATION (FIXED DROPDOWN HOVER) ================= */}
//             <nav className="bg-[#0b5ed7] text-white py-3.5 sticky top-0 z-50 shadow-lg overflow-visible">
//                 <div className="animate-marquee">
//                     <div className="flex gap-12 px-6">
//                         {navItems.map((item, idx) => (
//                             <div
//                                 key={`nav-1-${idx}`}
//                                 className="relative group py-1"
//                                 onMouseEnter={() => setActiveDropdown(item)}
//                                 onMouseLeave={() => setActiveDropdown(null)}
//                             >
//                                 <div className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-colors uppercase font-bold text-[13px] tracking-tight whitespace-nowrap">
//                                     {item} <ChevronDown size={14} strokeWidth={3} className={`transition-transform ${activeDropdown === item ? 'rotate-180' : ''}`} />
//                                 </div>

//                                 {activeDropdown === item && dropdownData[item] && (
//                                     /* Added pt-4 and -mt-1 to bridge the hover gap */
//                                     <div className={`absolute top-full -mt-1 pt-4 w-80 z-[100] dropdown-container
//                                         ${idx > 7 ? 'right-0' : 'left-0'}
//                                     `}>
//                                         <div className="bg-white rounded-md shadow-2xl border border-gray-100 p-6">
//                                             <h4 className="text-[#0d6efd] font-bold text-[15px] mb-4 border-b border-gray-100 pb-3">
//                                                 {item} Certifications
//                                             </h4>
//                                             <ul className="space-y-4 mb-6">
//                                                 {dropdownData[item].map((sub, sIdx) => (
//                                                     <li key={sIdx} className="text-[#444] text-[13px] leading-snug hover:text-[#0d6efd] cursor-pointer font-medium transition-colors text-left">
//                                                         <Link href={`/certification/${sub.replace(/\s+/g, '-')}`} className="block w-full">
//                                                             {sub}
//                                                         </Link>
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                             <a href="https://wa.me/918603516998" target="_blank" className="w-full bg-[#0d6efd] text-white py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#0b5ed7] transition-all text-[14px] shadow-sm">
//                                                 Get Pricing on WhatsApp
//                                             </a>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                     {/* Duplicate loop */}
//                     <div className="flex gap-12 px-6 lg:flex md:flex sm:hidden">
//                         {navItems.map((item, idx) => (
//                             <div key={`nav-2-${idx}`} className="flex items-center gap-1 uppercase font-bold text-[13px] tracking-tight whitespace-nowrap opacity-100">
//                                 {item} <ChevronDown size={14} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </nav>

//             {/* ================= MAIN CERTIFICATION CONTENT ================= */}
//             <main className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
//                 <div className="space-y-6">
//                     <div className="flex gap-2">
//                         <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">IT Certification</span>
//                         <span className="bg-gray-50 text-gray-500 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Guaranteed Pass</span>
//                     </div>
//                     <h2 className="text-5xl md:text-6xl font-black text-[#0d6efd] leading-tight uppercase">
//                         {certName}
//                     </h2>
//                     <p className="text-gray-600 text-lg leading-relaxed max-w-xl font-medium">
//                         Advance your career with the <strong>{certName}</strong> certification. We provide full remote support and a 100% passing guarantee for your peace of mind.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                         <a href="https://wa.me/918603516998" target="_blank" className="bg-[#0d6efd] text-white px-8 py-4 rounded-xl font-black flex items-center justify-center gap-3 shadow-xl hover:bg-[#0b5ed7] transition-all">
//                             <MessageCircle size={22} fill="white" /> Get Exam Support
//                         </a>
//                         <a href="tel:+918603516998" className="border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-black flex items-center justify-center hover:bg-gray-50 transition-all">
//                             Call: +91 8603516998
//                         </a>
//                     </div>
//                 </div>

//                 <div className="relative flex justify-center">
//                     <div className="bg-blue-50/50 p-12 rounded-[3rem] border border-blue-100 flex flex-col items-center text-center max-w-sm relative shadow-inner">
//                         <div className="bg-white p-5 rounded-full shadow-lg mb-6">
//                             <img src="/logo-small.png" alt="GT&C Logo" className="w-16 h-16 object-contain" />
//                         </div>
//                         <h4 className="font-black text-blue-600 text-xl mb-4 uppercase">Official Training</h4>
//                         <ul className="text-left space-y-4 text-[13px] font-bold text-gray-700">
//                             <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500" /> 100% PASSING GUARANTEED</li>
//                             <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500" /> REMOTE ACCESS SUPPORT</li>
//                             <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500" /> NO PASS, NO PAY POLICY</li>
//                         </ul>
//                         <div className="mt-8 bg-[#0d6efd] text-white px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase">
//                             Global Training & Certifications
//                         </div>
//                     </div>
//                 </div>
//             </main>

//             {/* ================= FEATURES GRID ================= */}
//             <section className="bg-gray-50/50 py-20 px-6 border-y border-gray-100">
//                 <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
//                     {[
//                         { icon: <ShieldCheck size={32} />, title: "Secure Process", desc: "Fully encrypted and safe remote testing environment." },
//                         { icon: <Award size={32} />, title: "Expert Support", desc: "Handled by professionals with 20+ years of experience." },
//                         { icon: <Clock size={32} />, title: "Quick Results", desc: "Get your certification results in the shortest possible time." },
//                         { icon: <Globe size={32} />, title: "Global Validity", desc: "Certificates accepted by top MNCs worldwide." }
//                     ].map((feature, idx) => (
//                         <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center space-y-4">
//                             <div className="text-[#0d6efd] flex justify-center">{feature.icon}</div>
//                             <h4 className="font-black text-sm uppercase tracking-wider">{feature.title}</h4>
//                             <p className="text-xs text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* ================= CURRICULUM SECTION ================= */}
//             <section className="max-w-7xl mx-auto px-6 py-20">
//                 <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
//                     <h3 className="text-3xl font-black mb-2 uppercase text-slate-800">Exam Objectives</h3>
//                     <p className="text-gray-500 text-sm mb-12 font-medium tracking-wide">WHAT YOU NEED TO KNOW FOR {certName.toUpperCase()}</p>

//                     <div className="grid md:grid-cols-2 gap-16">
//                         <div className="space-y-8">
//                             <h4 className="text-[#0d6efd] font-black text-lg uppercase flex items-center gap-2">
//                                 <span className="w-8 h-1 bg-[#0d6efd] rounded-full"></span> Technical Skills
//                             </h4>
//                             <ul className="space-y-5">
//                                 {["Implementation and administration", "Industry best practices", "Troubleshooting and optimization"].map((text, i) => (
//                                     <li key={i} className="flex items-start gap-4 text-[15px] font-bold text-slate-700">
//                                         <CheckCircle size={20} className="text-[#0d6efd] shrink-0" /> {text}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="space-y-8">
//                             <h4 className="text-[#0d6efd] font-black text-lg uppercase flex items-center gap-2">
//                                 <span className="w-8 h-1 bg-[#0d6efd] rounded-full"></span> Preparation
//                             </h4>
//                             <ul className="space-y-5">
//                                 {["Real-world scenario labs", "Exam environment simulation", "Pass guarantee verification"].map((text, i) => (
//                                     <li key={i} className="flex items-start gap-4 text-[15px] font-bold text-slate-700">
//                                         <CheckCircle size={20} className="text-[#0d6efd] shrink-0" /> {text}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ================= FOOTER ================= */}
//             <footer className="bg-[#0b1220] text-gray-400 py-24 px-6 md:px-20">
//                 <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
//                     <div className="md:col-span-4 space-y-8">
//                         <h3 className="text-[#0d6efd] text-3xl font-black leading-tight tracking-tighter uppercase">
//                             Global Training & <br /> Certifications
//                         </h3>
//                         <p className="text-[15px] leading-relaxed text-gray-400 font-medium">
//                             Your trusted partner for IT certification success.
//                         </p>
//                     </div>

//                     <div className="md:col-span-8">
//                         <h4 className="text-white font-black text-xl mb-10 uppercase tracking-widest border-b border-white/10 pb-4">All Certifications</h4>
//                         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 text-[14px] font-bold">
//                             {certificationsList.map((cert) => (
//                                 <Link key={cert} href={`/certification/${cert.replace(/\s+/g, '-')}`} className="hover:text-blue-400 transition-colors flex items-center gap-2">
//                                     <span className="w-1.5 h-1.5 bg-[#0d6efd] rounded-full"></span> {cert}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }

















import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    Phone, Mail, MapPin, CheckCircle,
    Search, MessageCircle, ChevronDown, Award,
    ShieldCheck, Star, Clock, Users, UserPlus, LogIn, Globe, User
} from "lucide-react";

export default function Certification({ certName, certifications = [] }) {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navItems = certifications.length > 0 ? certifications : [];

    return (
        <div className="min-h-screen font-sans antialiased text-[#212529] bg-white overflow-x-hidden">
            <Head title={`${certName} | Global Training & Certifications`} />

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
                    <Link href="/">
                        <h1 className="text-[#0d6efd] text-3xl md:text-4xl font-black leading-none tracking-tight">
                            Learn and Certified
                        </h1>
                    </Link>
                    <p className="text-gray-500 text-[10px] md:text-[11px] font-bold tracking-[0.2em] mt-1 uppercase">
                        Helping you real time online
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <div className="flex items-center bg-gray-100 rounded-lg p-1 mr-2">
                        <Link href="/login" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#0d6efd] transition-colors">
                            <LogIn size={16} /> Login
                        </Link>
                        <div className="w-[1px] h-4 bg-gray-300"></div>
                        <Link href="/register" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#0d6efd] transition-colors">
                            <UserPlus size={16} /> Register
                        </Link>
                    </div>

                    <a href="https://wa.me/919259239522" target="_blank" className="bg-[#0d6efd] text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-[#0b5ed7] transition-all shadow-md text-sm">
                        <MessageCircle size={18} fill="white" /> WhatsApp Now
                    </a>
                </div>
            </header>

            {/* ================= MOVING NAVIGATION (FIXED DROPDOWN HOVER) ================= */}
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
                                    {/* Matches Route::get('/certification/{name}') */}
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


            {/* ================= MAIN CERTIFICATION CONTENT ================= */}
            <main className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="flex gap-2">
                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">IT Certification</span>
                        <span className="bg-gray-50 text-gray-500 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Guaranteed Pass</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-[#0d6efd] leading-tight uppercase">
                        {certName}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl font-medium">
                        Advance your career with the <strong>{certName}</strong> certification. We provide full remote support and a 100% passing guarantee for your peace of mind.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="https://wa.me/919259239522" target="_blank" className="bg-[#0d6efd] text-white px-8 py-4 rounded-xl font-black flex items-center justify-center gap-3 shadow-xl hover:bg-[#0b5ed7] transition-all">
                            <MessageCircle size={22} fill="white" /> Get Exam Support
                        </a>
                        <a href="tel:+919259239522" className="border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-black flex items-center justify-center hover:bg-gray-50 transition-all">
                            Call: +91 9259239522
                        </a>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <div className="bg-blue-50/50 p-12 rounded-[3rem] border border-blue-100 flex flex-col items-center text-center max-w-sm relative shadow-inner">
                        <div className="bg-white p-5 rounded-full shadow-lg mb-6">
                            <img src="/logo-small.png" alt="GT&C Logo" className="w-16 h-16 object-contain" />
                        </div>
                        <h4 className="font-black text-blue-600 text-xl mb-4 uppercase">Official Training</h4>
                        <ul className="text-left space-y-4 text-[13px] font-bold text-gray-700">
                            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500" /> 100% PASSING GUARANTEED</li>
                            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500" /> REMOTE ACCESS SUPPORT</li>
                            <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500" /> NO PASS, NO PAY POLICY</li>
                        </ul>
                        <div className="mt-8 bg-[#0d6efd] text-white px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase">
                            Learn and Certified
                        </div>
                    </div>
                </div>
            </main>

            {/* ================= FEATURES GRID ================= */}
            <section className="bg-gray-50/50 py-20 px-6 border-y border-gray-100">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                    {[
                        { icon: <ShieldCheck size={32} />, title: "Secure Process", desc: "Fully encrypted and safe remote testing environment." },
                        { icon: <Award size={32} />, title: "Expert Support", desc: "Handled by professionals with 20+ years of experience." },
                        { icon: <Clock size={32} />, title: "Quick Results", desc: "Get your certification results in the shortest possible time." },
                        { icon: <Globe size={32} />, title: "Global Validity", desc: "Certificates accepted by top MNCs worldwide." }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center space-y-4">
                            <div className="text-[#0d6efd] flex justify-center">{feature.icon}</div>
                            <h4 className="font-black text-sm uppercase tracking-wider">{feature.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CURRICULUM SECTION ================= */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                    <h3 className="text-3xl font-black mb-2 uppercase text-slate-800">Exam Objectives</h3>
                    <p className="text-gray-500 text-sm mb-12 font-medium tracking-wide">WHAT YOU NEED TO KNOW FOR {certName.toUpperCase()}</p>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h4 className="text-[#0d6efd] font-black text-lg uppercase flex items-center gap-2">
                                <span className="w-8 h-1 bg-[#0d6efd] rounded-full"></span> Technical Skills
                            </h4>
                            <ul className="space-y-5">
                                {["Implementation and administration", "Industry best practices", "Troubleshooting and optimization"].map((text, i) => (
                                    <li key={i} className="flex items-start gap-4 text-[15px] font-bold text-slate-700">
                                        <CheckCircle size={20} className="text-[#0d6efd] shrink-0" /> {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-[#0d6efd] font-black text-lg uppercase flex items-center gap-2">
                                <span className="w-8 h-1 bg-[#0d6efd] rounded-full"></span> Preparation
                            </h4>
                            <ul className="space-y-5">
                                {["Real-world scenario labs", "Exam environment simulation", "Pass guarantee verification"].map((text, i) => (
                                    <li key={i} className="flex items-start gap-4 text-[15px] font-bold text-slate-700">
                                        <CheckCircle size={20} className="text-[#0d6efd] shrink-0" /> {text}
                                    </li>
                                ))}
                            </ul>
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
