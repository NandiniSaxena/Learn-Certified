
// import React, { useState } from "react";
// import { Head, Link, router, usePage } from "@inertiajs/react";
// import {
//   LayoutDashboard, BookOpen, Award, Settings,
//   LogOut, User, Bell, Search, CheckCircle, Clock, Menu, X
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 flex font-sans">
//       <Head title="User Dashboard | Global Training" />

//       {/* Mobile Hamburger Button */}
//       <button
//         onClick={() => setIsSidebarOpen(true)}
//         className="md:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-md text-[#0d6efd] focus:outline-none"
//       >
//         <Menu size={24} />
//       </button>

//       {/* Mobile Sidebar (slide-in) */}
//       <AnimatePresence>
//         {isSidebarOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsSidebarOpen(false)}
//               className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
//             />
//             {/* Sidebar panel */}
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed inset-y-0 left-0 z-50 w-72 bg-[#0b1220] text-white flex flex-col md:hidden"
//             >
//               <button
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
//               >
//                 <X size={24} />
//               </button>

//               <div className="p-6 border-b border-white/10">
//                 <h1 className="text-xl font-black tracking-tighter text-[#0d6efd]">
//                   Learn and Certified
//                 </h1>
//               </div>

//               <nav className="flex-1 p-4 space-y-2 mt-4">
//                 <Link
//                   href="/dashboard"
//                   className="flex items-center gap-3 px-4 py-3 bg-[#0d6efd] rounded-xl font-bold transition-all"
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   <LayoutDashboard size={20} /> Dashboard
//                 </Link>
//                 {/* <Link
//                   href="#"
//                   className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all font-medium"
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   <BookOpen size={20} /> My Courses
//                 </Link>
//                 <Link
//                   href="#"
//                   className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all font-medium"
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   <Award size={20} /> Certificates
//                 </Link>
//                 <Link
//                   href="#"
//                   className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all font-medium"
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   <Settings size={20} /> Settings
//                 </Link> */}
//               </nav>

//               <div className="p-4 border-t border-white/10">
//                 <Link
//                   href="/logout"
//                   method="post"
//                   as="button"
//                   className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 w-full rounded-xl font-bold transition-all"
//                 >
//                   <LogOut size={20} /> Logout
//                 </Link>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Desktop Sidebar – Always visible on desktop */}
//       <aside className="w-64 bg-[#0b1220] text-white hidden md:flex flex-col fixed h-full z-20">
//         <div className="p-6 border-b border-white/10">
//           <h1 className="text-xl font-black tracking-tighter text-[#0d6efd]">
//             Learn and Certified
//           </h1>
//         </div>

//         <nav className="flex-1 p-4 space-y-2 mt-4">
//           <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#0d6efd] rounded-xl font-bold transition-all">
//             <LayoutDashboard size={20} /> Dashboard
//           </Link>
//           {/* <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all font-medium">
//             <BookOpen size={20} /> My Courses
//           </Link>
//           <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all font-medium">
//             <Award size={20} /> Certificates
//           </Link>
//           <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all font-medium">
//             <Settings size={20} /> Settings
//           </Link> */}
//         </nav>

//         <div className="p-4 border-t border-white/10">
//           <Link href="/logout" method="post" as="button" className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 w-full rounded-xl font-bold transition-all">
//             <LogOut size={20} /> Logout
//           </Link>
//         </div>
//       </aside>

//       {/* Main Content – shifted right only on desktop */}
//       <main className="flex-1 flex flex-col md:ml-64">
//         {/* Header */}
//         <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2 text-gray-500">
//             <span className="font-bold text-slate-800">Welcome back!</span>
//           </div>
//           <div className="flex items-center gap-4">
//             {/* <button className="p-2 text-gray-400 hover:text-[#0d6efd] transition-colors"><Bell size={20} /></button> */}
//             {/* <div className="w-10 h-10 bg-[#0d6efd] rounded-full flex items-center justify-center text-white font-black">
//               U
//             </div> */}
//             <div className="flex items-center gap-4 sm:gap-6">
//                         <Link href={route('profile.edit')} className="group flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 border-l border-gray-100 transition-all">
//                             <div className="text-right hidden sm:block">
//                                 <p className="text-[10px] sm:text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-[#0d6efd] transition-colors">
//                                     User Account
//                                 </p>
//                                 <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//                                     View Profile
//                                 </p>
//                             </div>
//                             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center font-bold text-gray-500 text-xs group-hover:border-[#0d6efd] group-hover:text-[#0d6efd] transition-all">
//                                 US
//                             </div>
//                         </Link>
//                     </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto w-full">
//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-bold uppercase">Active Exams</p>
//                 <h3 className="text-3xl font-black mt-1">0</h3>
//               </div>
//               <div className="bg-blue-50 p-4 rounded-xl text-[#0d6efd]"><Clock size={28} /></div>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-bold uppercase">Completed</p>
//                 <h3 className="text-3xl font-black mt-1">0</h3>
//               </div>
//               <div className="bg-green-50 p-4 rounded-xl text-green-600"><CheckCircle size={28} /></div>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-bold uppercase">Certificates</p>
//                 <h3 className="text-3xl font-black mt-1">0</h3>
//               </div>
//               <div className="bg-purple-50 p-4 rounded-xl text-purple-600"><Award size={28} /></div>
//             </div>
//           </div>

//           {/* Recent Exam Requests – No data placeholder */}
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="p-6 border-b border-gray-100 flex justify-between items-center">
//               <h3 className="font-black text-slate-800 uppercase tracking-tight">Recent Exam Requests</h3>
//               <button className="text-[#0d6efd] font-bold text-sm hover:underline">View All</button>
//             </div>
//             <div className="p-8 text-center text-gray-500">
//               <Clock size={48} className="mx-auto mb-4 opacity-50" />
//               <p className="text-lg font-medium">No recent exam requests yet.</p>
//               <p className="mt-2 text-sm">When you request an exam, it will appear here.</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }










// import React, { useState } from "react";
// import { Head, Link, router } from "@inertiajs/react";
// import {
//   LayoutDashboard, BookOpen, Award, Settings,
//   LogOut, User, Bell, Search, CheckCircle, Clock, Menu, X
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Hard logout that clears history and prevents forward navigation back to dashboard
//   const handleLogout = () => {
//     router.post('/logout', {}, {
//       onSuccess: () => {
//         // Force hard redirect to login to break history stack
//         window.location.href = '/login';
//       },
//       onError: () => {
//         console.error("Logout failed");
//       }
//     });
//   };

//   // Hard back navigation (also clears history issues)
//   const handleBack = () => {
//     window.location.href = '/login'; // or '/' if login is root
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex font-sans">
//       <Head title="User Dashboard | Global Training" />

//       {/* Mobile Hamburger Button */}
//       <button
//         onClick={() => setIsSidebarOpen(true)}
//         className="md:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-md text-[#0d6efd] focus:outline-none"
//       >
//         <Menu size={24} />
//       </button>

//       {/* Mobile Sidebar (slide-in) */}
//       <AnimatePresence>
//         {isSidebarOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsSidebarOpen(false)}
//               className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
//             />
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed inset-y-0 left-0 z-50 w-72 bg-[#0b1220] text-white flex flex-col md:hidden"
//             >
//               <button
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
//               >
//                 <X size={24} />
//               </button>

//               <div className="p-6 border-b border-white/10">
//                 <h1 className="text-xl font-black tracking-tighter text-[#0d6efd]">
//                   Learn and Certified
//                 </h1>
//               </div>

//               <nav className="flex-1 p-4 space-y-2 mt-4">
//                 <Link
//                   href="/dashboard"
//                   className="flex items-center gap-3 px-4 py-3 bg-[#0d6efd] rounded-xl font-bold transition-all"
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   <LayoutDashboard size={20} /> Dashboard
//                 </Link>
//               </nav>

//               <div className="p-4 border-t border-white/10">
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 w-full rounded-xl font-bold transition-all text-left"
//                 >
//                   <LogOut size={20} /> Logout
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Desktop Sidebar */}
//       <aside className="w-64 bg-[#0b1220] text-white hidden md:flex flex-col fixed h-full z-20">
//         <div className="p-6 border-b border-white/10">
//           <h1 className="text-xl font-black tracking-tighter text-[#0d6efd]">
//             Learn and Certified
//           </h1>
//         </div>

//         <nav className="flex-1 p-4 space-y-2 mt-4">
//           <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#0d6efd] rounded-xl font-bold transition-all">
//             <LayoutDashboard size={20} /> Dashboard
//           </Link>
//         </nav>

//         <div className="p-4 border-t border-white/10">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 w-full rounded-xl font-bold transition-all text-left"
//           >
//             <LogOut size={20} /> Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col md:ml-64">
//         {/* Header */}
//         <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2 text-gray-500">
//             <span className="font-bold text-slate-800">Welcome back!</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-4 sm:gap-6">
//               <Link href={route('profile.edit')} className="group flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 border-l border-gray-100 transition-all">
//                 <div className="text-right hidden sm:block">
//                   <p className="text-[10px] sm:text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-[#0d6efd] transition-colors">
//                     User Account
//                   </p>
//                   <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//                     View Profile
//                   </p>
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center font-bold text-gray-500 text-xs group-hover:border-[#0d6efd] group-hover:text-[#0d6efd] transition-all">
//                   US
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto w-full">
//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-bold uppercase">Active Exams</p>
//                 <h3 className="text-3xl font-black mt-1">0</h3>
//               </div>
//               <div className="bg-blue-50 p-4 rounded-xl text-[#0d6efd]"><Clock size={28} /></div>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-bold uppercase">Completed</p>
//                 <h3 className="text-3xl font-black mt-1">0</h3>
//               </div>
//               <div className="bg-green-50 p-4 rounded-xl text-green-600"><CheckCircle size={28} /></div>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-bold uppercase">Certificates</p>
//                 <h3 className="text-3xl font-black mt-1">0</h3>
//               </div>
//               <div className="bg-purple-50 p-4 rounded-xl text-purple-600"><Award size={28} /></div>
//             </div>
//           </div>

//           {/* Recent Exam Requests */}
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="p-6 border-b border-gray-100 flex justify-between items-center">
//               <h3 className="font-black text-slate-800 uppercase tracking-tight">Recent Exam Requests</h3>
//               <button className="text-[#0d6efd] font-bold text-sm hover:underline">View All</button>
//             </div>
//             <div className="p-8 text-center text-gray-500">
//               <Clock size={48} className="mx-auto mb-4 opacity-50" />
//               <p className="text-lg font-medium">No recent exam requests yet.</p>
//               <p className="mt-2 text-sm">When you request an exam, it will appear here.</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }









// import React, { useState } from "react";
// import { Head, Link, router } from "@inertiajs/react";
// import {
//   LayoutDashboard, BookOpen, Award, Settings,
//   LogOut, User, Bell, Search, CheckCircle, Clock, Menu, X
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Hard logout that prevents going back to dashboard via browser buttons
//   const handleLogout = () => {
//     router.post('/logout', {}, {
//       preserveState: false,
//       preserveScroll: false,
//       onSuccess: () => {
//         // Replace history state + hard redirect to prevent forward/back to dashboard
//         window.history.replaceState(null, '', '/login');
//         window.location.replace('/login'); // or '/' if your login is at root
//       },
//       onError: (err) => {
//         console.error("Logout failed", err);
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex font-sans">
//       <Head title="User Dashboard | Global Training" />

//       {/* Mobile Hamburger Button */}
//       <button
//         onClick={() => setIsSidebarOpen(true)}
//         className="md:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-md text-[#0d6efd] focus:outline-none"
//       >
//         <Menu size={24} />
//       </button>

//       {/* Mobile Sidebar (slide-in) */}
//       <AnimatePresence>
//         {isSidebarOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsSidebarOpen(false)}
//               className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
//             />
//             {/* Sidebar panel */}
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed inset-y-0 left-0 z-50 w-72 bg-[#0b1220] text-white flex flex-col md:hidden"
//             >
//               <button
//                 onClick={() => setIsSidebarOpen(false)}
//                 className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
//               >
//                 <X size={24} />
//               </button>

//               <div className="p-6 border-b border-white/10">
//                 <h1 className="text-xl font-black tracking-tighter text-[#0d6efd]">
//                   Learn and Certified
//                 </h1>
//               </div>

//               <nav className="flex-1 p-4 space-y-2 mt-4">
//                 <Link
//                   href="/dashboard"
//                   className="flex items-center gap-3 px-4 py-3 bg-[#0d6efd] rounded-xl font-bold transition-all"
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   <LayoutDashboard size={20} /> Dashboard
//                 </Link>
//               </nav>

//               <div className="p-4 border-t border-white/10">
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 w-full rounded-xl font-bold transition-all text-left"
//                 >
//                   <LogOut size={20} /> Logout
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* Desktop Sidebar */}
//       <aside className="w-64 bg-[#0b1220] text-white hidden md:flex flex-col fixed h-full z-20">
//         <div className="p-6 border-b border-white/10">
//           <h1 className="text-xl font-black tracking-tighter text-[#0d6efd]">
//             Learn and Certified
//           </h1>
//         </div>

//         <nav className="flex-1 p-4 space-y-2 mt-4">
//           <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#0d6efd] rounded-xl font-bold transition-all">
//             <LayoutDashboard size={20} /> Dashboard
//           </Link>
//         </nav>

//         <div className="p-4 border-t border-white/10">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 w-full rounded-xl font-bold transition-all text-left"
//           >
//             <LogOut size={20} /> Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col md:ml-64">
//         {/* Header */}
//         <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center gap-2 text-gray-500">
//             <span className="font-bold text-slate-800">Welcome back!</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-4 sm:gap-6">
//               <Link href={route('profile.edit')} className="group flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 border-l border-gray-100 transition-all">
//                 <div className="text-right hidden sm:block">
//                   <p className="text-[10px] sm:text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-[#0d6efd] transition-colors">
//                     User Account
//                   </p>
//                   <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
//                     View Profile
//                   </p>
//                 </div>
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center font-bold text-gray-500 text-xs group-hover:border-[#0d6efd] group-hover:text-[#0d6efd] transition-all">
//                   US
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto w-full">
//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-bold uppercase">Active Exams</p>
//                 <h3 className="text-3xl font-black mt-1">0</h3>
//               </div>
//               <div className="bg-blue-50 p-4 rounded-xl text-[#0d6efd]"><Clock size={28} /></div>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-bold uppercase">Completed</p>
//                 <h3 className="text-3xl font-black mt-1">0</h3>
//               </div>
//               <div className="bg-green-50 p-4 rounded-xl text-green-600"><CheckCircle size={28} /></div>
//             </div>
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
//               <div>
//                 <p className="text-gray-500 text-sm font-bold uppercase">Certificates</p>
//                 <h3 className="text-3xl font-black mt-1">0</h3>
//               </div>
//               <div className="bg-purple-50 p-4 rounded-xl text-purple-600"><Award size={28} /></div>
//             </div>
//           </div>

//           {/* Recent Exam Requests */}
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="p-6 border-b border-gray-100 flex justify-between items-center">
//               <h3 className="font-black text-slate-800 uppercase tracking-tight">Recent Exam Requests</h3>
//               <button className="text-[#0d6efd] font-bold text-sm hover:underline">View All</button>
//             </div>
//             <div className="p-8 text-center text-gray-500">
//               <Clock size={48} className="mx-auto mb-4 opacity-50" />
//               <p className="text-lg font-medium">No recent exam requests yet.</p>
//               <p className="mt-2 text-sm">When you request an exam, it will appear here.</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }










import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import {
  LayoutDashboard, BookOpen, Award, Settings,
  LogOut, User, Bell, Search, CheckCircle, Clock, Menu, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Hard logout that prevents going back to dashboard via browser buttons
  const handleLogout = () => {
    router.post('/logout', {}, {
      preserveState: false,
      preserveScroll: false,
      onSuccess: () => {
        // Replace history state + hard redirect to prevent forward/back to dashboard
        window.history.replaceState(null, '', '/login');
        window.location.replace('/login'); // or '/' if your login is at root
      },
      onError: (err) => {
        console.error("Logout failed", err);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <Head title="User Dashboard | Global Training" />

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-md text-[#0d6efd] focus:outline-none"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Sidebar (slide-in) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            {/* Sidebar panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-72 bg-[#0b1220] text-white flex flex-col md:hidden"
            >
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="p-6 border-b border-white/10">
                <h1 className="text-xl font-black tracking-tighter text-[#0d6efd]">
                  Learn and Certified
                </h1>
              </div>

              <nav className="flex-1 p-4 space-y-2 mt-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 px-4 py-3 bg-[#0d6efd] rounded-xl font-bold transition-all"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <LayoutDashboard size={20} /> Dashboard
                </Link>
              </nav>

              <div className="p-4 border-t border-white/10">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 w-full rounded-xl font-bold transition-all text-left"
                >
                  <LogOut size={20} /> Logout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="w-64 bg-[#0b1220] text-white hidden md:flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-black tracking-tighter text-[#0d6efd]">
            Learn and Certified
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#0d6efd] rounded-xl font-bold transition-all">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 w-full rounded-xl font-bold transition-all text-left"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-gray-500">
            <span className="font-bold text-slate-800">Welcome back!</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href={route('profile.edit')} className="group flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 border-l border-gray-100 transition-all">
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] sm:text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-[#0d6efd] transition-colors">
                    User Account
                  </p>
                  <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    View Profile
                  </p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center font-bold text-gray-500 text-xs group-hover:border-[#0d6efd] group-hover:text-[#0d6efd] transition-all">
                  US
                </div>
              </Link>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8 max-w-7xl mx-auto w-full">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase">Active Exams</p>
                <h3 className="text-3xl font-black mt-1">0</h3>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl text-[#0d6efd]"><Clock size={28} /></div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase">Completed</p>
                <h3 className="text-3xl font-black mt-1">0</h3>
              </div>
              <div className="bg-green-50 p-4 rounded-xl text-green-600"><CheckCircle size={28} /></div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase">Certificates</p>
                <h3 className="text-3xl font-black mt-1">0</h3>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl text-purple-600"><Award size={28} /></div>
            </div>
          </div>

          {/* Recent Exam Requests */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-black text-slate-800 uppercase tracking-tight">Recent Exam Requests</h3>
              <button className="text-[#0d6efd] font-bold text-sm hover:underline">View All</button>
            </div>
            <div className="p-8 text-center text-gray-500">
              <Clock size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">No recent exam requests yet.</p>
              <p className="mt-2 text-sm">When you request an exam, it will appear here.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

