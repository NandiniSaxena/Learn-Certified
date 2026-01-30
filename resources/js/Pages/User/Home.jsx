import React from "react";
import { Head, Link } from "@inertiajs/react";
import {
  Phone, Mail, MapPin, CheckCircle,
  Search, MessageCircle, ChevronDown, Award,
  ShieldCheck, Star, Clock, Users, UserPlus, LogIn
} from "lucide-react";

export default function Home() {
  const certifications = [
    "Cisco", "Microsoft", "AWS", "CompTIA", "VMware", "Google", "Oracle", "PMI",
    "ISACA", "Fortinet", "EC-Council", "ITIL", "Prince2", "Juniper", "Salesforce",
    "ServiceNow", "Scrum", "Six Sigma", "IBM", "SAP", "Splunk", "Palo Alto",
    "Kubernetes", "TOGAF", "DevOps", "ISTQB", "IIBA"
  ];

  const navItems = [
    "SAP", "SAFe Agile", "Splunk", "Palo Alto", "Kubernetes",
    "TOGAF", "DevOps", "ISTQB", "IIBA", "Cisco", "Microsoft"
  ];

  return (
    <div className="min-h-screen font-sans antialiased text-[#212529] bg-white">
      <Head title="Global Training & Certifications | IT Certification Exam Support & Online Training" />

      {/* ================= TOP BLUE CONTACT BAR ================= */}
      <div className="bg-[#0d6efd] text-white py-2 px-6 md:px-12 flex justify-between items-center text-[13px] md:text-[14px]">
        <div className="flex items-center gap-2">
          <Mail size={14} />
          <a href="mailto:info@globaltrainingcertifications.org" className="hover:underline">
            info@globaltrainingcertifications.org
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">For Order/Enquiry:</span>
          <div className="flex items-center gap-2 font-bold">
            <Phone size={14} />
            <a href="tel:+918603516998" className="hover:underline">+91 8603516998</a>
          </div>
        </div>
      </div>

      {/* ================= MAIN BRAND HEADER ================= */}
      <header className="bg-white py-5 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-sm gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-[#0d6efd] text-3xl md:text-4xl font-black leading-none tracking-tight">
            GLOBALTRAINING
          </h1>
          <p className="text-gray-500 text-[10px] md:text-[11px] font-bold tracking-[0.2em] mt-1 uppercase">
            Helping you real time online
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Auth Buttons */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1 mr-2">
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#0d6efd] transition-colors"
              title="Default: admin@gmail.com / admin123"
            >
              <LogIn size={16} /> Login
            </Link>
            <div className="w-[1px] h-4 bg-gray-300"></div>
            <Link
              href="/register"
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#0d6efd] transition-colors"
            >
              <UserPlus size={16} /> Register
            </Link>
          </div>

          <a
            href="https://wa.me/918603516998"
            target="_blank"
            className="bg-[#0d6efd] text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-[#0b5ed7] transition-all shadow-md text-sm"
          >
            <MessageCircle size={18} fill="white" /> WhatsApp Now
          </a>
        </div>
      </header>

      {/* ================= SECONDARY NAVIGATION (MOVING RIGHT TO LEFT) ================= */}
      <nav className="bg-[#0b5ed7] text-white py-3.5 sticky top-0 z-50 shadow-lg overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          <div className="flex gap-12 px-6">
            {navItems.map((item, idx) => (
              <div key={`nav-1-${idx}`} className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-colors uppercase font-bold text-[13px] tracking-tight">
                {item} <ChevronDown size={14} strokeWidth={3} />
              </div>
            ))}
          </div>
          <div className="flex gap-12 px-6">
            {navItems.map((item, idx) => (
              <div key={`nav-2-${idx}`} className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-colors uppercase font-bold text-[13px] tracking-tight">
                {item} <ChevronDown size={14} strokeWidth={3} />
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0d6efd] text-white pt-16 pb-24 px-6 md:px-20 lg:px-32 relative">
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
              <button className="bg-white text-[#0d6efd] px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:bg-gray-100 transition-all">
                <Search size={22} strokeWidth={3} /> Get Exam Support Now
              </button>
              <button className="border-2 border-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white hover:text-[#0d6efd] transition-all">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 pt-10 border-t border-white/20">
              <div className="flex items-center gap-3 font-bold text-lg"><CheckCircle size={24} className="text-green-300" /> 100% Pass Guarantee</div>
              <div className="flex items-center gap-3 font-bold text-lg"><CheckCircle size={24} className="text-green-300" /> 24/7 Support</div>
              <div className="flex items-center gap-3 font-bold text-lg"><CheckCircle size={24} className="text-green-300" /> Expert Guidance</div>
              <div className="flex items-center gap-3 font-bold text-lg"><CheckCircle size={24} className="text-green-300" /> Instant Results</div>
            </div>
          </div>

          <div className="relative">
            <img
              src="pic1.png"
              className="rounded-[2.5rem] shadow-2xl w-full border-[12px] border-white/10"
              alt="Professional Success Team"
            />
          </div>
        </div>
      </section>

      {/* ================= SIMPLE STEPS SECTION ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-[44px] font-black text-center mb-20 leading-tight text-slate-800 uppercase">
          Global Training & Certifications Service in <br />
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
                <p className="text-lg font-bold">+918603516998</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white text-center border border-white/20">
                <Mail className="mx-auto mb-4" size={32} />
                <h4 className="font-black text-xl mb-2 uppercase">Email</h4>
                <p className="text-[13px] font-bold break-all">info@globaltrainingcertifications.org</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white text-center border border-white/20">
                <MapPin className="mx-auto mb-4" size={32} />
                <h4 className="font-black text-xl mb-2 uppercase">Address</h4>
                <p className="text-sm font-bold leading-relaxed">Andheri East, Mumbai, Maharashtra 400069, India</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl text-white text-center border border-white/20 flex flex-col items-center justify-center">
              <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Scan QR Code</h4>
              <div className="bg-white p-3 rounded-xl shadow-2xl">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=whatsapp" alt="WhatsApp QR" className="w-32 h-32" />
              </div>
              <p className="text-[11px] mt-6 opacity-80 font-bold uppercase">Scan to open WhatsApp chat</p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">Get Started Today</h2>
            <button className="bg-white text-[#0d6efd] px-14 py-5 rounded-2xl font-black text-2xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-4 mx-auto uppercase">
               <MessageCircle fill="#0d6efd" size={28} /> Start WhatsApp Chat
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0b1220] text-gray-400 py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-8">
            <h3 className="text-[#0d6efd] text-3xl font-black leading-tight tracking-tighter uppercase">
              Global Training & <br /> Certifications
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-400 font-medium">
              Your trusted partner for IT certification success. We provide guaranteed pass solutions for all major technology certifications including Cisco, Microsoft, AWS, and more.
            </p>
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg cursor-pointer hover:-translate-y-1 transition"><MessageCircle size={22} fill="white" /></div>
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg cursor-pointer hover:-translate-y-1 transition"><Phone size={22} fill="white" /></div>
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg cursor-pointer hover:-translate-y-1 transition"><Mail size={22} fill="white" /></div>
            </div>
          </div>

          <div className="md:col-span-8">
            <h4 className="text-white font-black text-xl mb-10 uppercase tracking-widest border-b border-white/10 pb-4">All Certifications</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 text-[14px] font-bold">
              {certifications.map((cert) => (
                <Link key={cert} href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#0d6efd] rounded-full"></span> {cert}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[13px] font-bold">
          <p className="uppercase tracking-widest opacity-60">© 2025 Global Training & Certifications. All rights reserved.</p>
          <div className="flex gap-10 mt-8 md:mt-0 uppercase tracking-widest text-[#0d6efd]">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}











