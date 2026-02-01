import React, { useState } from 'react';
import { Head, useForm, router, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus, Award, Trash2, LogOut, X, Save,
    LayoutDashboard, Briefcase, Search,
    ChevronRight, Settings, Bell, Globe, Command, Trash,
    PersonStanding, Menu
} from "lucide-react";

export default function Dashboard({ certifications = [] }) {
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        description: '',
        sub_certs: [''],
    });

    const filteredCertifications = certifications.filter((cert) => {
        const searchLower = searchTerm.toLowerCase();
        const matchesVendor = cert.name.toLowerCase().includes(searchLower);
        const matchesSubCert = cert.sub_certifications?.some(sub => {
            const subName = typeof sub === 'object' ? sub.name : sub;
            return subName.toLowerCase().includes(searchLower);
        });
        return matchesVendor || matchesSubCert;
    });

    const addSubField = () => setData('sub_certs', [...data.sub_certs, '']);

    const removeSubField = (index) => {
        const newSubs = data.sub_certs.filter((_, i) => i !== index);
        setData('sub_certs', newSubs);
    };

    const updateSubField = (index, value) => {
        const newSubs = [...data.sub_certs];
        newSubs[index] = value;
        setData('sub_certs', newSubs);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('certifications.store'), {
            onSuccess: () => {
                setShowModal(false);
                reset();
            }
        });
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this category? All sub-certifications will be removed.")) {
            router.delete(route('certifications.destroy', id));
        }
    };

    return (
        <div className="min-h-screen bg-[#FBFBFE] flex font-sans text-[#1A1C1E]">
            <Head title="Admin Command Center" />

            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-md text-[#0d6efd] focus:outline-none"
            >
                <Menu size={24} />
            </button>

            {/* Mobile Sidebar (slide-in) */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                        />
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
                                    <NavItem icon={<Briefcase size={20}/>} label="Certifications" active />
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
                        <NavItem icon={<Briefcase size={20}/>} label="Certifications" active />
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

                {/* Top Navbar – extra left padding on mobile */}
                <header className="h-16 lg:h-20 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 pl-16 sm:pl-20 lg:pl-12 pr-4 sm:pr-6 lg:pr-12 flex items-center justify-between">
                    <div className="flex items-center gap-4 bg-gray-100/50 px-4 py-2 rounded-2xl w-full max-w-md">
                        <Search size={18} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search vendors or sub-certs..."
                            className="bg-transparent border-none outline-none text-sm font-medium w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
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

                <div className="p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-1 sm:mb-2">Manage Certifications</h1>
                            <p className="text-slate-500 font-medium text-sm sm:text-base">
                                {searchTerm ? `Found ${filteredCertifications.length} results matching "${searchTerm}"` : 'Add, edit or remove certification categories and vendors.'}
                            </p>
                        </div>
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-blue-500/25 transition-all transform active:scale-95 w-full sm:w-auto"
                        >
                            <Plus size={20} strokeWidth={3} /> Add Category
                        </button>
                    </div>

                    {/* Grid Layout – responsive stacking */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode='popLayout'>
                            {filteredCertifications.map((cert) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    key={cert.id}
                                    className="group bg-white border border-gray-100 p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
                                >
                                    <div className="flex justify-between items-start mb-5 sm:mb-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 text-[#0d6efd] rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-lg sm:text-xl group-hover:bg-[#0d6efd] group-hover:text-white transition-all duration-300">
                                            {cert.name.charAt(0)}
                                        </div>
                                        <button
                                            onClick={() => handleDelete(cert.id)}
                                            className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-black text-slate-800 uppercase tracking-tight mb-1">{cert.name}</h3>
                                    <p className="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">Vendor Category</p>

                                    <div className="text-[10px] sm:text-[11px] font-bold text-blue-500 bg-blue-50 w-fit px-3 py-1 rounded-full mb-4 sm:mb-6">
                                        {cert.sub_certifications?.length || 0} Sub-Certs
                                    </div>

                                    <div className="pt-5 sm:pt-6 border-t border-gray-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                                        <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded-md lowercase">/{cert.slug}</span>
                                        <Link href={route('certifications.edit', cert.id)}
                                            className="text-[#0d6efd] font-black text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all hover:text-[#0b5ed7]">
                                            Edit Details <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Empty State */}
                    {filteredCertifications.length === 0 && (
                        <div className="text-center py-16 sm:py-24 bg-white rounded-[2.5rem] sm:rounded-[3rem] border border-dashed border-gray-200">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                {searchTerm ? <Search className="text-gray-300" size={32} sm:size={40} /> : <Award className="text-gray-300" size={32} sm:size={40} />}
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-slate-800 uppercase tracking-widest">
                                {searchTerm ? 'No matches found' : 'No Certifications Yet'}
                            </h3>
                            <p className="text-gray-400 mt-2 text-sm sm:text-base">
                                {searchTerm ? `We couldn't find any vendor or certification matching "${searchTerm}"` : 'Start by adding your first vendor category.'}
                            </p>
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="mt-4 text-[#0d6efd] font-bold text-sm underline"
                                >
                                    Clear search
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </main>

            {/* Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => { setShowModal(false); reset(); }}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white w-full max-w-2xl rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl relative z-10 overflow-hidden"
                        >
                            <div className="p-6 sm:p-8 border-b border-gray-50 flex justify-between items-center">
                                <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">Add New Vendor</h3>
                                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600"><X size={20} sm:size={24} /></button>
                            </div>

                            <form onSubmit={submit} className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">Vendor Name</label>
                                        <input
                                            className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#0d6efd] font-bold transition-all"
                                            placeholder="e.g. Microsoft"
                                            value={data.name} onChange={e => setData('name', e.target.value)}
                                            required
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">Description (Optional)</label>
                                        <input
                                            className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#0d6efd] font-bold transition-all"
                                            placeholder="Cloud & Infrastructure"
                                            value={data.description} onChange={e => setData('description', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-gray-50">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                        <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">Sub-Certifications</label>
                                        <button type="button" onClick={addSubField} className="bg-blue-50 text-[#0d6efd] px-3 py-1 rounded-lg text-xs font-black hover:bg-blue-100 transition-colors">
                                            + Add Field
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        {data.sub_certs.map((sub, index) => (
                                            <div key={index} className="flex flex-col sm:flex-row gap-2">
                                                <input
                                                    className="flex-1 px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium focus:border-[#0d6efd] outline-none"
                                                    placeholder="e.g. AZ-900 Fundamentals"
                                                    value={sub}
                                                    onChange={e => updateSubField(index, e.target.value)}
                                                    required
                                                />
                                                {data.sub_certs.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeSubField(index)}
                                                        className="p-3 text-gray-400 hover:text-red-500 self-start sm:self-center"
                                                    >
                                                        <Trash size={18} />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    disabled={processing}
                                    className="w-full bg-[#0d6efd] text-white py-4 sm:py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:bg-[#0b5ed7] flex items-center justify-center gap-2 transition-all mt-4 disabled:opacity-50"
                                >
                                    {processing ? 'Processing...' : <><Save size={20}/> Save Vendor & Certifications</>}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

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
