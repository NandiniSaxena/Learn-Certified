import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import {
  LayoutDashboard, BookOpen, Award, Settings,
  LogOut, User, Bell, Search, CheckCircle, Clock
} from "lucide-react";

export default function Dashboard() {
  const { auth } = usePage().props;

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <Head title="User Dashboard | Global Training" />

      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-[#0b1220] text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-black tracking-tighter text-[#0d6efd]">GLOBALTRAINING</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#0d6efd] rounded-xl font-bold transition-all">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all font-medium">
            <BookOpen size={20} /> My Courses
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all font-medium">
            <Award size={20} /> Certificates
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all font-medium">
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/logout" method="post" as="button" className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 w-full rounded-xl font-bold transition-all">
            <LogOut size={20} /> Logout
          </Link>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8">
          <div className="flex items-center gap-2 text-gray-500">
            <span className="font-bold text-slate-800">Welcome back, {auth.user.name}!</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-[#0d6efd] transition-colors"><Bell size={20} /></button>
            <div className="w-10 h-10 bg-[#0d6efd] rounded-full flex items-center justify-center text-white font-black">
               {auth.user.name.charAt(0)}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase">Active Exams</p>
                <h3 className="text-3xl font-black mt-1">02</h3>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl text-[#0d6efd]"><Clock size={28} /></div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase">Completed</p>
                <h3 className="text-3xl font-black mt-1">05</h3>
              </div>
              <div className="bg-green-50 p-4 rounded-xl text-green-600"><CheckCircle size={28} /></div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase">Certificates</p>
                <h3 className="text-3xl font-black mt-1">03</h3>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl text-purple-600"><Award size={28} /></div>
            </div>
          </div>

          {/* Table/List Area */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-black text-slate-800 uppercase tracking-tight">Recent Exam Requests</h3>
              <button className="text-[#0d6efd] font-bold text-sm hover:underline">View All</button>
            </div>
            <div className="p-0">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-400 text-[11px] font-black uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Certification</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date Requested</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-700">SAP S/4HANA Certified Associate</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-[11px] font-black uppercase">Pending</span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">Oct 24, 2025</td>
                    <td className="px-6 py-4"><button className="text-[#0d6efd] font-bold text-sm">Details</button></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-700">AWS Solutions Architect - Associate</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[11px] font-black uppercase">Approved</span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">Oct 20, 2025</td>
                    <td className="px-6 py-4"><button className="text-[#0d6efd] font-bold text-sm">Details</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
