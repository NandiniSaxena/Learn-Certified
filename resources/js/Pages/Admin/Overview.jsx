// import React from 'react';
// import { Head, Link, router } from '@inertiajs/react';
// import {
//     LayoutDashboard, Briefcase, PersonStanding, LogOut,
//     Command, Users, Award, ChevronRight, Plus, Bell
// } from "lucide-react";
// import { motion } from 'framer-motion';

// export default function Overview({ stats, recentCertifications = [], totalUserCount = 0 }) {

//     // Stats configuration
//     const displayStats = stats || [
//         { label: 'Total Users', value: totalUserCount, icon: <Users size={24} />, color: 'bg-blue-500', shadow: 'shadow-blue-200' },
//         { label: 'Vendor Categories', value: recentCertifications.length, icon: <Briefcase size={24} />, color: 'bg-purple-500', shadow: 'shadow-purple-200' },
//         { label: 'Active Certifications', value: '24', icon: <Award size={24} />, color: 'bg-emerald-500', shadow: 'shadow-emerald-200' },
//     ];

//     return (
//         <div className="min-h-screen bg-[#FBFBFE] flex font-sans text-[#1A1C1E]">
//             <Head title="Admin Overview" />

//             {/* Premium Sidebar */}
//             <aside className="w-72 bg-white border-r border-gray-100 fixed h-full flex flex-col z-20">
//                 <div className="p-8">
//                     <div className="flex items-center gap-3 mb-10 px-2">
//                         <div className="w-10 h-10 bg-gradient-to-br from-[#0d6efd] to-[#0047b3] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
//                             <Command className="text-white" size={22} />
//                         </div>
//                         <span className="text-xl font-black tracking-tight text-slate-800">Learn and <span className="text-[#0d6efd]">Certified</span></span>
//                     </div>

//                     <nav className="space-y-1">
//                         <Link href={route('admin.dashboard')}>
//                             <NavItem
//                                 icon={<LayoutDashboard size={20}/>}
//                                 label="Overview"
//                                 active={route().current('admin.dashboard')}
//                             />
//                         </Link>

//                         <Link href={route('certifications.index')}>
//                             <NavItem
//                                 icon={<Briefcase size={20}/>}
//                                 label="Certifications"
//                                 active={route().current('certifications.index')}
//                             />
//                         </Link>

//                         <Link href={route('users.index')}>
//                             <NavItem
//                                 icon={<PersonStanding size={20}/>}
//                                 label="User Details"
//                                 active={route().current('users.index')}
//                             />
//                         </Link>
//                     </nav>
//                 </div>

//                 <div className="mt-auto p-8">
//                     <button
//                         onClick={() => router.post(route('logout'))}
//                         className="flex items-center gap-3 text-slate-400 hover:text-red-500 font-bold transition-all w-full px-4 py-3 rounded-xl hover:bg-red-50"
//                     >
//                         <LogOut size={20} /> Sign Out
//                     </button>
//                 </div>
//             </aside>

//             {/* Content Area */}
//             <main className="ml-72 flex-1 min-h-screen bg-gray-50/30">

//                 {/* Top Navbar */}
//                 <header className="h-20 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 px-12 flex items-center justify-between">
//                     <div>
//                         <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Command Center</h2>
//                     </div>

//                     <div className="flex items-center gap-6">
//                         <Link href={route('profile.edit')} className="group flex items-center gap-3 pl-6 border-l border-gray-100 transition-all">
//                             <div className="text-right hidden md:block">
//                                 <p className="text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-[#0d6efd] transition-colors">
//                                     Admin Account
//                                 </p>
//                                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//                                     View Profile
//                                 </p>
//                             </div>
//                             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center font-bold text-gray-500 text-xs group-hover:border-[#0d6efd] group-hover:text-[#0d6efd] transition-all">
//                                 AD
//                             </div>
//                         </Link>
//                     </div>
//                 </header>

//                 <div className="p-12 max-w-7xl mx-auto">
//                     {/* Welcome Section */}
//                     <header className="mb-10 flex justify-between items-end">
//                         <div>
//                             <h1 className="text-4xl font-black text-slate-900 tracking-tight">System Overview</h1>
//                             <p className="text-slate-500 font-medium mt-1">Welcome back, Admin. Here is what's happening today.</p>
//                         </div>
//                         <div className="text-right">
//                             <div className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
//                                 Live System Status
//                             </div>
//                         </div>
//                     </header>

//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//                         {displayStats.map((stat, i) => (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: i * 0.1 }}
//                                 key={i}
//                                 className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
//                             >
//                                 <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg ${stat.shadow}`}>
//                                     {stat.icon}
//                                 </div>
//                                 <h4 className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mb-1">{stat.label}</h4>
//                                 <div className="text-3xl font-black text-slate-900">{stat.value}</div>
//                             </motion.div>
//                         ))}
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                         {/* Recent Certifications */}
//                         <section className="bg-white rounded-[3rem] border border-gray-100 p-8">
//                             <div className="flex justify-between items-center mb-8 px-2">
//                                 <h3 className="text-xl font-black text-slate-900 tracking-tight">Recently Added Vendors</h3>
//                                 <Link href={route('certifications.index')} className="text-[#0d6efd] text-xs font-bold uppercase hover:underline">View All</Link>
//                             </div>
//                             <div className="space-y-4">
//                                 {recentCertifications.map((cert) => (
//                                     <div key={cert.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors group">
//                                         <div className="flex items-center gap-4">
//                                             <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-500 group-hover:bg-[#0d6efd] group-hover:text-white transition-all">
//                                                 {cert.name ? cert.name.charAt(0) : '?'}
//                                             </div>
//                                             <div>
//                                                 <p className="font-bold text-slate-800">{cert.name}</p>
//                                                 <p className="text-xs text-slate-400">{cert.sub_certifications?.length || 0} Certifications</p>
//                                             </div>
//                                         </div>
//                                         <ChevronRight size={18} className="text-slate-300" />
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>

//                         {/* Quick Actions & Health */}
//                         <section className="space-y-8">
//                             <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-8 text-white shadow-2xl">
//                                 <h3 className="text-xl font-black mb-2">Quick Actions</h3>
//                                 <p className="text-slate-400 text-sm mb-6">Common administrative tasks</p>
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <Link href={route('certifications.index')} className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all border border-white/5 flex flex-col gap-3">
//                                         <Plus size={20} className="text-blue-400" />
//                                         <span className="text-xs font-bold">Add Vendor</span>
//                                     </Link>
//                                     <Link href={route('users.index')} className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all border border-white/5 flex flex-col gap-3">
//                                         <Users size={20} className="text-purple-400" />
//                                         <span className="text-xs font-bold">Manage Users</span>
//                                     </Link>
//                                 </div>
//                             </div>

//                             <div className="bg-white rounded-[3rem] border border-gray-100 p-8">
//                                 <h3 className="text-xl font-black text-slate-900 tracking-tight mb-6">System Health</h3>
//                                 <div className="space-y-6">
//                                     <HealthRow label="Database" status="Optimal" color="text-emerald-500" />
//                                     <HealthRow label="File Storage" status="92% Free" color="text-blue-500" />
//                                     <HealthRow label="Server Load" status="Normal" color="text-emerald-500" />
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }

// // Sub-components
// function NavItem({ icon, label, active = false }) {
//     return (
//         <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer transition-all duration-300 font-bold ${
//             active ? 'bg-blue-50 text-[#0d6efd]' : 'text-slate-400 hover:bg-gray-50 hover:text-slate-600'
//         }`}>
//             {icon}
//             <span className="text-sm tracking-tight">{label}</span>
//         </div>
//     );
// }

// /** * This component was missing and causing the Uncaught ReferenceError
//  */
// function HealthRow({ label, status, color }) {
//     return (
//         <div className="flex items-center justify-between py-1">
//             <span className="text-sm font-bold text-slate-500">{label}</span>
//             <span className={`text-[10px] font-black uppercase tracking-widest ${color}`}>
//                 {status}
//             </span>
//         </div>
//     );
// }






// import React from 'react';
// import { Head, Link, router } from '@inertiajs/react';
// import {
//     LayoutDashboard, Briefcase, PersonStanding, LogOut,
//     Command, Users, Award, ChevronRight, Plus, Bell
// } from "lucide-react";
// import { motion } from 'framer-motion';

// export default function Overview({ stats, recentCertifications = [], totalUserCount = 0 }) {

//     // Stats configuration
//     const displayStats = stats || [
//         { label: 'Total Users', value: totalUserCount, icon: <Users size={24} />, color: 'bg-blue-500', shadow: 'shadow-blue-200' },
//         { label: 'Vendor Categories', value: recentCertifications.length, icon: <Briefcase size={24} />, color: 'bg-purple-500', shadow: 'shadow-purple-200' },
//         { label: 'Active Certifications', value: '24', icon: <Award size={24} />, color: 'bg-emerald-500', shadow: 'shadow-emerald-200' },
//     ];

//     return (
//         <div className="min-h-screen bg-[#FBFBFE] flex font-sans text-[#1A1C1E]">
//             <Head title="Admin Overview" />

//             {/* Premium Sidebar – Mobile: hidden, toggleable if needed */}
//             <aside className="hidden lg:flex lg:w-72 bg-white border-r border-gray-100 fixed h-full flex-col z-20">
//                 <div className="p-6 lg:p-8">
//                     <div className="flex items-center gap-3 mb-10 px-2">
//                         <div className="w-10 h-10 bg-gradient-to-br from-[#0d6efd] to-[#0047b3] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
//                             <Command className="text-white" size={22} />
//                         </div>
//                         <span className="text-xl font-black tracking-tight text-slate-800">Learn and <span className="text-[#0d6efd]">Certified</span></span>
//                     </div>

//                     <nav className="space-y-1">
//                         <Link href={route('admin.dashboard')}>
//                             <NavItem
//                                 icon={<LayoutDashboard size={20}/>}
//                                 label="Overview"
//                                 active={route().current('admin.dashboard')}
//                             />
//                         </Link>

//                         <Link href={route('certifications.index')}>
//                             <NavItem
//                                 icon={<Briefcase size={20}/>}
//                                 label="Certifications"
//                                 active={route().current('certifications.index')}
//                             />
//                         </Link>

//                         <Link href={route('users.index')}>
//                             <NavItem
//                                 icon={<PersonStanding size={20}/>}
//                                 label="User Details"
//                                 active={route().current('users.index')}
//                             />
//                         </Link>
//                     </nav>
//                 </div>

//                 <div className="mt-auto p-6 lg:p-8">
//                     <button
//                         onClick={() => router.post(route('logout'))}
//                         className="flex items-center gap-3 text-slate-400 hover:text-red-500 font-bold transition-all w-full px-4 py-3 rounded-xl hover:bg-red-50"
//                     >
//                         <LogOut size={20} /> Sign Out
//                     </button>
//                 </div>
//             </aside>

//             {/* Content Area – Full width on mobile */}
//             <main className="lg:ml-72 flex-1 min-h-screen bg-gray-50/30">

//                 {/* Top Navbar – Responsive padding */}
//                 <header className="h-16 lg:h-20 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 px-4 sm:px-6 lg:px-12 flex items-center justify-between">
//                     <div>
//                         <h2 className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Command Center</h2>
//                     </div>

//                     <div className="flex items-center gap-4 sm:gap-6">
//                         <Link href={route('profile.edit')} className="group flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 border-l border-gray-100 transition-all">
//                             <div className="text-right hidden sm:block">
//                                 <p className="text-[10px] sm:text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-[#0d6efd] transition-colors">
//                                     Admin Account
//                                 </p>
//                                 <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//                                     View Profile
//                                 </p>
//                             </div>
//                             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center font-bold text-gray-500 text-xs group-hover:border-[#0d6efd] group-hover:text-[#0d6efd] transition-all">
//                                 AD
//                             </div>
//                         </Link>
//                     </div>
//                 </header>

//                 {/* Main Content – Responsive padding */}
//                 <div className="p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto">
//                     {/* Welcome Section */}
//                     <header className="mb-8 sm:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
//                         <div>
//                             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-1 sm:mb-2">System Overview</h1>
//                             <p className="text-slate-500 font-medium text-sm sm:text-base">Welcome back, Admin. Here is what's happening today.</p>
//                         </div>
//                         <div className="text-right">
//                             <div className="text-[10px] sm:text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
//                                 Live System Status
//                             </div>
//                         </div>
//                     </header>

//                     {/* Stats Grid – Responsive columns */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
//                         {displayStats.map((stat, i) => (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: i * 0.1 }}
//                                 key={i}
//                                 className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
//                             >
//                                 <div className={`w-12 h-12 sm:w-14 sm:h-14 ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg ${stat.shadow}`}>
//                                     {stat.icon}
//                                 </div>
//                                 <h4 className="text-slate-400 font-bold uppercase text-[10px] sm:text-xs tracking-[0.2em] mb-1">{stat.label}</h4>
//                                 <div className="text-2xl sm:text-3xl font-black text-slate-900">{stat.value}</div>
//                             </motion.div>
//                         ))}
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//                         {/* Recent Certifications */}
//                         <section className="bg-white rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 p-6 sm:p-8">
//                             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 px-2 gap-4">
//                                 <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Recently Added Vendors</h3>
//                                 <Link href={route('certifications.index')} className="text-[#0d6efd] text-xs font-bold uppercase hover:underline">
//                                     View All
//                                 </Link>
//                             </div>
//                             <div className="space-y-3 sm:space-y-4">
//                                 {recentCertifications.map((cert) => (
//                                     <div key={cert.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors group">
//                                         <div className="flex items-center gap-3 sm:gap-4">
//                                             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-500 group-hover:bg-[#0d6efd] group-hover:text-white transition-all">
//                                                 {cert.name ? cert.name.charAt(0) : '?'}
//                                             </div>
//                                             <div>
//                                                 <p className="font-bold text-slate-800 text-sm sm:text-base">{cert.name}</p>
//                                                 <p className="text-xs text-slate-400">{cert.sub_certifications?.length || 0} Certifications</p>
//                                             </div>
//                                         </div>
//                                         <ChevronRight size={16} sm:size={18} className="text-slate-300" />
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>

//                         {/* Quick Actions & Health */}
//                         <section className="space-y-6 sm:space-y-8">
//                             <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 text-white shadow-2xl">
//                                 <h3 className="text-lg sm:text-xl font-black mb-2">Quick Actions</h3>
//                                 <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">Common administrative tasks</p>
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <Link href={route('certifications.index')} className="bg-white/10 hover:bg-white/20 p-4 sm:p-5 rounded-2xl transition-all border border-white/5 flex flex-col gap-2 sm:gap-3">
//                                         <Plus size={20} className="text-blue-400" />
//                                         <span className="text-xs sm:text-sm font-bold">Add Vendor</span>
//                                     </Link>
//                                     <Link href={route('users.index')} className="bg-white/10 hover:bg-white/20 p-4 sm:p-5 rounded-2xl transition-all border border-white/5 flex flex-col gap-2 sm:gap-3">
//                                         <Users size={20} className="text-purple-400" />
//                                         <span className="text-xs sm:text-sm font-bold">Manage Users</span>
//                                     </Link>
//                                 </div>
//                             </div>

//                             <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 p-6 sm:p-8">
//                                 <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-4 sm:mb-6">System Health</h3>
//                                 <div className="space-y-4 sm:space-y-6">
//                                     <HealthRow label="Database" status="Optimal" color="text-emerald-500" />
//                                     <HealthRow label="File Storage" status="92% Free" color="text-blue-500" />
//                                     <HealthRow label="Server Load" status="Normal" color="text-emerald-500" />
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }

// // Sub-components (unchanged)
// function NavItem({ icon, label, active = false }) {
//     return (
//         <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer transition-all duration-300 font-bold ${
//             active ? 'bg-blue-50 text-[#0d6efd]' : 'text-slate-400 hover:bg-gray-50 hover:text-slate-600'
//         }`}>
//             {icon}
//             <span className="text-sm tracking-tight">{label}</span>
//         </div>
//     );
// }

// function HealthRow({ label, status, color }) {
//     return (
//         <div className="flex items-center justify-between py-1">
//             <span className="text-sm font-bold text-slate-500">{label}</span>
//             <span className={`text-[10px] font-black uppercase tracking-widest ${color}`}>
//                 {status}
//             </span>
//         </div>
//     );
// }





// import React, { useState } from 'react';
// import { Head, Link, router } from '@inertiajs/react';
// import {
//     LayoutDashboard, Briefcase, PersonStanding, LogOut,
//     Command, Users, Award, ChevronRight, Plus, Bell, Menu, X
// } from "lucide-react";
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Overview({ stats, recentCertifications = [], totalUserCount = 0 }) {

//     // Stats configuration
//     const displayStats = stats || [
//         { label: 'Total Users', value: totalUserCount, icon: <Users size={24} />, color: 'bg-blue-500', shadow: 'shadow-blue-200' },
//         { label: 'Vendor Categories', value: recentCertifications.length, icon: <Briefcase size={24} />, color: 'bg-purple-500', shadow: 'shadow-purple-200' },
//         { label: 'Active Certifications', value: '24', icon: <Award size={24} />, color: 'bg-emerald-500', shadow: 'shadow-emerald-200' },
//     ];

//     // Mobile sidebar toggle state
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     return (
//         <div className="min-h-screen bg-[#FBFBFE] flex font-sans text-[#1A1C1E]">
//             <Head title="Admin Overview" />

//             {/* Mobile Hamburger Button */}
//             <button
//                 onClick={() => setIsSidebarOpen(true)}
//                 className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-md text-[#0d6efd]"
//             >
//                 <Menu size={24} />
//             </button>

//             {/* Sidebar – Visible on desktop, slide-in on mobile */}
//             <AnimatePresence>
//                 {isSidebarOpen && (
//                     <motion.div
//                         initial={{ x: '-100%' }}
//                         animate={{ x: 0 }}
//                         exit={{ x: '-100%' }}
//                         transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//                         className="fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-100 flex flex-col lg:hidden"
//                     >
//                         {/* Close button */}
//                         <button
//                             onClick={() => setIsSidebarOpen(false)}
//                             className="absolute top-4 right-4 p-2 text-gray-600 hover:text-[#0d6efd]"
//                         >
//                             <X size={24} />
//                         </button>

//                         <div className="p-6 pt-16">
//                             <div className="flex items-center gap-3 mb-10 px-2">
//                                 <div className="w-10 h-10 bg-gradient-to-br from-[#0d6efd] to-[#0047b3] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
//                                     <Command className="text-white" size={22} />
//                                 </div>
//                                 <span className="text-xl font-black tracking-tight text-slate-800">
//                                     Learn and <span className="text-[#0d6efd]">Certified</span>
//                                 </span>
//                             </div>

//                             <nav className="space-y-1">
//                                 <Link href={route('admin.dashboard')} onClick={() => setIsSidebarOpen(false)}>
//                                     <NavItem icon={<LayoutDashboard size={20}/>} label="Overview" active={route().current('admin.dashboard')} />
//                                 </Link>
//                                 <Link href={route('certifications.index')} onClick={() => setIsSidebarOpen(false)}>
//                                     <NavItem icon={<Briefcase size={20}/>} label="Certifications" active={route().current('certifications.index')} />
//                                 </Link>
//                                 <Link href={route('users.index')} onClick={() => setIsSidebarOpen(false)}>
//                                     <NavItem icon={<PersonStanding size={20}/>} label="User Details" active={route().current('users.index')} />
//                                 </Link>
//                             </nav>
//                         </div>

//                         <div className="mt-auto p-6">
//                             <button
//                                 onClick={() => router.post(route('logout'))}
//                                 className="flex items-center gap-3 text-slate-400 hover:text-red-500 font-bold transition-all w-full px-4 py-3 rounded-xl hover:bg-red-50"
//                             >
//                                 <LogOut size={20} /> Sign Out
//                             </button>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* Desktop Sidebar – Always visible on lg+ */}
//             <aside className="hidden lg:flex lg:w-72 bg-white border-r border-gray-100 fixed h-full flex-col z-20">
//                 <div className="p-8">
//                     <div className="flex items-center gap-3 mb-10 px-2">
//                         <div className="w-10 h-10 bg-gradient-to-br from-[#0d6efd] to-[#0047b3] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
//                             <Command className="text-white" size={22} />
//                         </div>
//                         <span className="text-xl font-black tracking-tight text-slate-800">
//                             Learn and <span className="text-[#0d6efd]">Certified</span>
//                         </span>
//                     </div>

//                     <nav className="space-y-1">
//                         <Link href={route('admin.dashboard')}>
//                             <NavItem icon={<LayoutDashboard size={20}/>} label="Overview" active={route().current('admin.dashboard')} />
//                         </Link>
//                         <Link href={route('certifications.index')}>
//                             <NavItem icon={<Briefcase size={20}/>} label="Certifications" active={route().current('certifications.index')} />
//                         </Link>
//                         <Link href={route('users.index')}>
//                             <NavItem icon={<PersonStanding size={20}/>} label="User Details" active={route().current('users.index')} />
//                         </Link>
//                     </nav>
//                 </div>

//                 <div className="mt-auto p-8">
//                     <button
//                         onClick={() => router.post(route('logout'))}
//                         className="flex items-center gap-3 text-slate-400 hover:text-red-500 font-bold transition-all w-full px-4 py-3 rounded-xl hover:bg-red-50"
//                     >
//                         <LogOut size={20} /> Sign Out
//                     </button>
//                 </div>
//             </aside>

//             {/* Content Area – Full width on mobile */}
//             <main className="lg:ml-72 flex-1 min-h-screen bg-gray-50/30">

//                 {/* Top Navbar – Responsive padding */}
//                 <header className="h-16 lg:h-20 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 px-4 sm:px-6 lg:px-12 flex items-center justify-between">
//                     <div>
//                         <h2 className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Command Center</h2>
//                     </div>

//                     <div className="flex items-center gap-4 sm:gap-6">
//                         <Link href={route('profile.edit')} className="group flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 border-l border-gray-100 transition-all">
//                             <div className="text-right hidden sm:block">
//                                 <p className="text-[10px] sm:text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-[#0d6efd] transition-colors">
//                                     Admin Account
//                                 </p>
//                                 <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//                                     View Profile
//                                 </p>
//                             </div>
//                             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center font-bold text-gray-500 text-xs group-hover:border-[#0d6efd] group-hover:text-[#0d6efd] transition-all">
//                                 AD
//                             </div>
//                         </Link>
//                     </div>
//                 </header>

//                 {/* Main Content – Responsive padding */}
//                 <div className="p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto">
//                     {/* Welcome Section */}
//                     <header className="mb-8 sm:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
//                         <div>
//                             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-1 sm:mb-2">System Overview</h1>
//                             <p className="text-slate-500 font-medium text-sm sm:text-base">Welcome back, Admin. Here is what's happening today.</p>
//                         </div>
//                         <div className="text-right">
//                             <div className="text-[10px] sm:text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
//                                 Live System Status
//                             </div>
//                         </div>
//                     </header>

//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
//                         {displayStats.map((stat, i) => (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: i * 0.1 }}
//                                 key={i}
//                                 className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
//                             >
//                                 <div className={`w-12 h-12 sm:w-14 sm:h-14 ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg ${stat.shadow}`}>
//                                     {stat.icon}
//                                 </div>
//                                 <h4 className="text-slate-400 font-bold uppercase text-[10px] sm:text-xs tracking-[0.2em] mb-1">{stat.label}</h4>
//                                 <div className="text-2xl sm:text-3xl font-black text-slate-900">{stat.value}</div>
//                             </motion.div>
//                         ))}
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//                         {/* Recent Certifications */}
//                         <section className="bg-white rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 p-6 sm:p-8">
//                             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 px-2 gap-4">
//                                 <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Recently Added Vendors</h3>
//                                 <Link href={route('certifications.index')} className="text-[#0d6efd] text-xs font-bold uppercase hover:underline">
//                                     View All
//                                 </Link>
//                             </div>
//                             <div className="space-y-3 sm:space-y-4">
//                                 {recentCertifications.map((cert) => (
//                                     <div key={cert.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors group">
//                                         <div className="flex items-center gap-3 sm:gap-4">
//                                             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-500 group-hover:bg-[#0d6efd] group-hover:text-white transition-all">
//                                                 {cert.name ? cert.name.charAt(0) : '?'}
//                                             </div>
//                                             <div>
//                                                 <p className="font-bold text-slate-800 text-sm sm:text-base">{cert.name}</p>
//                                                 <p className="text-xs text-slate-400">{cert.sub_certifications?.length || 0} Certifications</p>
//                                             </div>
//                                         </div>
//                                         <ChevronRight size={16} className="text-slate-300" />
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>

//                         {/* Quick Actions & Health */}
//                         <section className="space-y-6 sm:space-y-8">
//                             <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 text-white shadow-2xl">
//                                 <h3 className="text-lg sm:text-xl font-black mb-2">Quick Actions</h3>
//                                 <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">Common administrative tasks</p>
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <Link href={route('certifications.index')} className="bg-white/10 hover:bg-white/20 p-4 sm:p-5 rounded-2xl transition-all border border-white/5 flex flex-col gap-2 sm:gap-3">
//                                         <Plus size={20} className="text-blue-400" />
//                                         <span className="text-xs sm:text-sm font-bold">Add Vendor</span>
//                                     </Link>
//                                     <Link href={route('users.index')} className="bg-white/10 hover:bg-white/20 p-4 sm:p-5 rounded-2xl transition-all border border-white/5 flex flex-col gap-2 sm:gap-3">
//                                         <Users size={20} className="text-purple-400" />
//                                         <span className="text-xs sm:text-sm font-bold">Manage Users</span>
//                                     </Link>
//                                 </div>
//                             </div>

//                             <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 p-6 sm:p-8">
//                                 <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-4 sm:mb-6">System Health</h3>
//                                 <div className="space-y-4 sm:space-y-6">
//                                     <HealthRow label="Database" status="Optimal" color="text-emerald-500" />
//                                     <HealthRow label="File Storage" status="92% Free" color="text-blue-500" />
//                                     <HealthRow label="Server Load" status="Normal" color="text-emerald-500" />
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }

// // Sub-components (unchanged)
// function NavItem({ icon, label, active = false }) {
//     return (
//         <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer transition-all duration-300 font-bold ${
//             active ? 'bg-blue-50 text-[#0d6efd]' : 'text-slate-400 hover:bg-gray-50 hover:text-slate-600'
//         }`}>
//             {icon}
//             <span className="text-sm tracking-tight">{label}</span>
//         </div>
//     );
// }

// function HealthRow({ label, status, color }) {
//     return (
//         <div className="flex items-center justify-between py-1">
//             <span className="text-sm font-bold text-slate-500">{label}</span>
//             <span className={`text-[10px] font-black uppercase tracking-widest ${color}`}>
//                 {status}
//             </span>
//         </div>
//     );
// }







import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import {
    LayoutDashboard, Briefcase, PersonStanding, LogOut,
    Command, Users, Award, ChevronRight, Plus, Bell, Menu, X
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

export default function Overview({ stats, recentCertifications = [], totalUserCount = 0 }) {

    // Stats configuration
    const displayStats = stats || [
        { label: 'Total Users', value: totalUserCount, icon: <Users size={24} />, color: 'bg-blue-500', shadow: 'shadow-blue-200' },
        { label: 'Vendor Categories', value: recentCertifications.length, icon: <Briefcase size={24} />, color: 'bg-purple-500', shadow: 'shadow-purple-200' },
        { label: 'Active Certifications', value: '24', icon: <Award size={24} />, color: 'bg-emerald-500', shadow: 'shadow-emerald-200' },
    ];

    // Mobile sidebar toggle
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#FBFBFE] flex font-sans text-[#1A1C1E]">
            <Head title="Admin Overview" />

            {/* Mobile Hamburger Button – Positioned over navbar */}
            <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-md text-[#0d6efd] focus:outline-none"
            >
                <Menu size={24} />
            </button>

            {/* Sidebar – Slide-in on mobile, fixed on desktop */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                        />

                        {/* Sidebar panel */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 flex flex-col lg:hidden"
                        >
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="absolute top-4 right-4 p-2 text-gray-600 hover:text-[#0d6efd]"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-6 pt-16">
                                <div className="flex items-center gap-3 mb-10 px-2">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#0d6efd] to-[#0047b3] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                        <Command className="text-white" size={22} />
                                    </div>
                                    <span className="text-xl font-black tracking-tight text-slate-800">
                                        Learn and <span className="text-[#0d6efd]">Certified</span>
                                    </span>
                                </div>

                                <nav className="space-y-1">
                                    <Link href={route('admin.dashboard')} onClick={() => setIsSidebarOpen(false)}>
                                        <NavItem icon={<LayoutDashboard size={20}/>} label="Overview" active={route().current('admin.dashboard')} />
                                    </Link>
                                    <Link href={route('certifications.index')} onClick={() => setIsSidebarOpen(false)}>
                                        <NavItem icon={<Briefcase size={20}/>} label="Certifications" active={route().current('certifications.index')} />
                                    </Link>
                                    <Link href={route('users.index')} onClick={() => setIsSidebarOpen(false)}>
                                        <NavItem icon={<PersonStanding size={20}/>} label="User Details" active={route().current('users.index')} />
                                    </Link>
                                </nav>
                            </div>

                            <div className="mt-auto p-6">
                                <button
                                    onClick={() => router.post(route('logout'))}
                                    className="flex items-center gap-3 text-slate-400 hover:text-red-500 font-bold transition-all w-full px-4 py-3 rounded-xl hover:bg-red-50"
                                >
                                    <LogOut size={20} /> Sign Out
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex lg:w-72 bg-white border-r border-gray-100 fixed h-full flex-col z-20">
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-10 px-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#0d6efd] to-[#0047b3] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                            <Command className="text-white" size={22} />
                        </div>
                        <span className="text-xl font-black tracking-tight text-slate-800">
                            Learn and <span className="text-[#0d6efd]">Certified</span>
                        </span>
                    </div>

                    <nav className="space-y-1">
                        <Link href={route('admin.dashboard')}>
                            <NavItem icon={<LayoutDashboard size={20}/>} label="Overview" active={route().current('admin.dashboard')} />
                        </Link>
                        <Link href={route('certifications.index')}>
                            <NavItem icon={<Briefcase size={20}/>} label="Certifications" active={route().current('certifications.index')} />
                        </Link>
                        <Link href={route('users.index')}>
                            <NavItem icon={<PersonStanding size={20}/>} label="User Details" active={route().current('users.index')} />
                        </Link>
                    </nav>
                </div>

                <div className="mt-auto p-8">
                    <button
                        onClick={() => router.post(route('logout'))}
                        className="flex items-center gap-3 text-slate-400 hover:text-red-500 font-bold transition-all w-full px-4 py-3 rounded-xl hover:bg-red-50"
                    >
                        <LogOut size={20} /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:ml-72 flex-1 min-h-screen bg-gray-50/30">

                {/* Top Navbar – Extra left padding on mobile to avoid hamburger overlap */}
                <header className="h-16 lg:h-20 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 pl-16 sm:pl-20 lg:pl-12 pr-4 sm:pr-6 lg:pr-12 flex items-center justify-between">
                    <div>
                        <h2 className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Command Center</h2>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link href={route('profile.edit')} className="group flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 border-l border-gray-100 transition-all">
                            <div className="text-right hidden sm:block">
                                <p className="text-[10px] sm:text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-[#0d6efd] transition-colors">
                                    Admin Account
                                </p>
                                <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    View Profile
                                </p>
                            </div>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center font-bold text-gray-500 text-xs group-hover:border-[#0d6efd] group-hover:text-[#0d6efd] transition-all">
                                AD
                            </div>
                        </Link>
                    </div>
                </header>

                {/* Main Content */}
                <div className="p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto">
                    {/* Welcome Section */}
                    <header className="mb-8 sm:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-1 sm:mb-2">System Overview</h1>
                            <p className="text-slate-500 font-medium text-sm sm:text-base">Welcome back, Admin. Here is what's happening today.</p>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] sm:text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
                                Live System Status
                            </div>
                        </div>
                    </header>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
                        {displayStats.map((stat, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={i}
                                className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg ${stat.shadow}`}>
                                    {stat.icon}
                                </div>
                                <h4 className="text-slate-400 font-bold uppercase text-[10px] sm:text-xs tracking-[0.2em] mb-1">{stat.label}</h4>
                                <div className="text-2xl sm:text-3xl font-black text-slate-900">{stat.value}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Recent Certifications */}
                        <section className="bg-white rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 p-6 sm:p-8">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 px-2 gap-4">
                                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Recently Added Vendors</h3>
                                <Link href={route('certifications.index')} className="text-[#0d6efd] text-xs font-bold uppercase hover:underline">
                                    View All
                                </Link>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                {recentCertifications.map((cert) => (
                                    <div key={cert.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors group">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-500 group-hover:bg-[#0d6efd] group-hover:text-white transition-all">
                                                {cert.name ? cert.name.charAt(0) : '?'}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800 text-sm sm:text-base">{cert.name}</p>
                                                <p className="text-xs text-slate-400">{cert.sub_certifications?.length || 0} Certifications</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-slate-300" />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Quick Actions & Health */}
                        <section className="space-y-6 sm:space-y-8">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 text-white shadow-2xl">
                                <h3 className="text-lg sm:text-xl font-black mb-2">Quick Actions</h3>
                                <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6">Common administrative tasks</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <Link href={route('certifications.index')} className="bg-white/10 hover:bg-white/20 p-4 sm:p-5 rounded-2xl transition-all border border-white/5 flex flex-col gap-2 sm:gap-3">
                                        <Plus size={20} className="text-blue-400" />
                                        <span className="text-xs sm:text-sm font-bold">Add Vendor</span>
                                    </Link>
                                    <Link href={route('users.index')} className="bg-white/10 hover:bg-white/20 p-4 sm:p-5 rounded-2xl transition-all border border-white/5 flex flex-col gap-2 sm:gap-3">
                                        <Users size={20} className="text-purple-400" />
                                        <span className="text-xs sm:text-sm font-bold">Manage Users</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-4 sm:mb-6">System Health</h3>
                                <div className="space-y-4 sm:space-y-6">
                                    <HealthRow label="Database" status="Optimal" color="text-emerald-500" />
                                    <HealthRow label="File Storage" status="92% Free" color="text-blue-500" />
                                    <HealthRow label="Server Load" status="Normal" color="text-emerald-500" />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

// NavItem and HealthRow remain unchanged
function NavItem({ icon, label, active = false }) {
    return (
        <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer transition-all duration-300 font-bold ${
            active ? 'bg-blue-50 text-[#0d6efd]' : 'text-slate-400 hover:bg-gray-50 hover:text-slate-600'
        }`}>
            {icon}
            <span className="text-sm tracking-tight">{label}</span>
        </div>
    );
}

function HealthRow({ label, status, color }) {
    return (
        <div className="flex items-center justify-between py-1">
            <span className="text-sm font-bold text-slate-500">{label}</span>
            <span className={`text-[10px] font-black uppercase tracking-widest ${color}`}>
                {status}
            </span>
        </div>
    );
}
