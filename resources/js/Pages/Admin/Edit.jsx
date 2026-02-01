

import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import {
    ChevronLeft, Save, Trash, Plus,
    Award, AlertCircle
} from "lucide-react";

export default function Edit({ certification }) {
    // 1. Initialize Form with existing data
    const { data, setData, put, processing, errors } = useForm({
        name: certification.name || '',
        description: certification.description || '',
        // Map sub-certifications objects to an array of strings
        sub_certs: certification.sub_certifications?.length > 0
            ? certification.sub_certifications.map(s => s.name)
            : [''],
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

    // 2. Submit Logic with Pop-up
    const submit = (e) => {
        e.preventDefault();
        put(route('certifications.update', certification.id), {
            onSuccess: () => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Certification has been updated.',
                    icon: 'success',
                    confirmButtonColor: '#0d6efd',
                });
            },
            onError: () => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Please check the form for mistakes.',
                    icon: 'error',
                    confirmButtonColor: '#ef4444',
                });
            }
        });
    };

    return (
        <div className="min-h-screen bg-[#FBFBFE] font-sans text-[#1A1C1E] p-12">
            <Head title={`Edit ${certification.name}`} />

            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <Link
                        href={route('admin.dashboard')}
                        className="flex items-center gap-2 text-slate-400 hover:text-[#0d6efd] font-bold transition-colors"
                    >
                        <ChevronLeft size={20} /> Back to Dashboard
                    </Link>
                    <span className="px-4 py-1.5 bg-blue-50 text-[#0d6efd] rounded-full text-xs font-black uppercase tracking-widest">
                        Editing Mode
                    </span>
                </div>

                <div className="bg-white rounded-[3rem] shadow-xl shadow-blue-500/5 border border-gray-100 overflow-hidden">
                    <div className="p-10 border-b border-gray-50 bg-gradient-to-r from-white to-gray-50/50">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                            Update {certification.name}
                        </h1>
                    </div>

                    <form onSubmit={submit} className="p-10 space-y-10">
                        {/* Primary Details */}
                        <section className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">Vendor Name</label>
                                <input
                                    className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl outline-none font-bold transition-all ${errors.name ? 'border-red-500 focus:bg-white' : 'border-transparent focus:bg-white focus:border-[#0d6efd]'}`}
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                />
                                {errors.name && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.name}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">Category Description</label>
                                <input
                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#0d6efd] font-bold transition-all"
                                    value={data.description}
                                    onChange={e => setData('description', e.target.value)}
                                />
                            </div>
                        </section>

                        {/* Tracks */}
                        <section className="space-y-6">
                            <div className="flex justify-between items-center px-2">
                                <div>
                                    <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">Certification Tracks</h3>
                                    {errors.sub_certs && <p className="text-red-500 text-xs mt-1">{errors.sub_certs}</p>}
                                </div>
                                <button type="button" onClick={addSubField} className="bg-slate-900 text-white px-5 py-2 rounded-xl text-xs font-black hover:bg-slate-800 transition-all flex items-center gap-2">
                                    <Plus size={14} strokeWidth={3} /> Add Track
                                </button>
                            </div>

                            <div className="grid gap-4">
                                <AnimatePresence>
                                    {data.sub_certs.map((sub, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-1"
                                        >
                                            <div className="flex gap-3 group">
                                                <div className="flex-1 relative">
                                                    <input
                                                        className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl text-sm font-bold focus:bg-white outline-none transition-all ${errors[`sub_certs.${index}`] ? 'border-red-500' : 'border-transparent focus:border-[#0d6efd]'}`}
                                                        placeholder="Track name..."
                                                        value={sub}
                                                        onChange={e => updateSubField(index, e.target.value)}
                                                    />
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
                                                        <Award size={18} />
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => removeSubField(index)}
                                                    className="p-4 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                                                >
                                                    <Trash size={20} />
                                                </button>
                                            </div>
                                            {errors[`sub_certs.${index}`] && (
                                                <p className="text-red-500 text-[10px] font-bold ml-4 uppercase tracking-tighter italic">Required</p>
                                            )}
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </section>

                        {/* Actions */}
                        <div className="pt-6 border-t border-gray-50">
                            <button
                                disabled={processing}
                                className="w-full bg-[#0d6efd] text-white py-5 rounded-[2rem] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:bg-[#0b5ed7] flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                            >
                                <Save size={20}/> {processing ? 'Processing...' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
