

// import React, { useState, useEffect } from 'react';
// import { Head, useForm, usePage, Link, router } from '@inertiajs/react';
// import {
//     User, Lock, Save, Eye, EyeOff,
//     ArrowLeft, CheckCircle, X
// } from 'lucide-react';

// export default function Edit({ user }) {
//     const { flash } = usePage().props;
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [notification, setNotification] = useState(null);

//     // Form logic
//     const infoForm = useForm({
//         name: user.name,
//         email: user.email
//     });

//     const passwordForm = useForm({
//         password: '',
//         password_confirmation: '',
//     });

//     // Handle the redirect and notification logic
//     const handleSuccess = (message) => {
//         setNotification(message);

//         // Wait 2 seconds so the user sees the "Success" popup, then redirect
//         setTimeout(() => {
//             router.visit(route('admin.dashboard'));
//         }, 2000);
//     };

//     const updateInfo = (e) => {
//         e.preventDefault();
//         infoForm.patch(route('profile.update'), {
//             preserveScroll: true,
//             onSuccess: () => handleSuccess("Profile updated successfully! Redirecting..."),
//         });
//     };

//     const updatePassword = (e) => {
//         e.preventDefault();
//         passwordForm.put(route('profile.password'), {
//             preserveScroll: true,
//             onSuccess: () => {
//                 passwordForm.reset();
//                 handleSuccess("Password updated successfully! Redirecting...");
//             },
//         });
//     };

//     return (
//         <div className="min-h-screen bg-[#FBFBFE] p-12 relative">
//             <Head title="Admin Profile" />

//             {/* Success Popup */}
//             {notification && (
//                 <div className="fixed top-10 right-10 z-[100] animate-in fade-in slide-in-from-right-8 duration-300">
//                     <div className="bg-slate-900 text-white px-8 py-5 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-slate-700">
//                         <div className="bg-green-500 p-1.5 rounded-full">
//                             <CheckCircle size={20} className="text-white" />
//                         </div>
//                         <div>
//                             <p className="font-black text-sm tracking-tight">{notification}</p>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <div className="max-w-4xl mx-auto">
//                 <div className="flex items-center justify-between mb-10">
//                     <div>
//                         <h1 className="text-3xl font-black text-slate-900 tracking-tight">Account Settings</h1>
//                         <p className="text-slate-500 font-medium text-sm">Update your identity and security protocols.</p>
//                     </div>
//                     <Link
//                         href={route('admin.dashboard')}
//                         className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-100 rounded-2xl text-slate-600 font-bold text-sm hover:bg-gray-50 transition-all shadow-sm"
//                     >
//                         <ArrowLeft size={18} /> Back to Dashboard
//                     </Link>
//                 </div>

//                 <div className="grid gap-8">
//                     {/* Profile Section */}
//                     <section className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
//                         <div className="flex items-center gap-4 mb-8">
//                             <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
//                                 <User size={24} />
//                             </div>
//                             <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Profile Information</h2>
//                         </div>

//                         <form onSubmit={updateInfo} className="space-y-6">
//                             <div className="grid md:grid-cols-2 gap-6">
//                                 <div className="space-y-2">
//                                     <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">Full Name</label>
//                                     <input
//                                         className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-blue-500 font-bold transition-all"
//                                         value={infoForm.data.name}
//                                         onChange={e => infoForm.setData('name', e.target.value)}
//                                     />
//                                     {infoForm.errors.name && <p className="text-red-500 text-xs font-bold mt-1 ml-2">{infoForm.errors.name}</p>}
//                                 </div>
//                                 <div className="space-y-2">
//                                     <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">Email Address</label>
//                                     <input
//                                         readOnly
//                                         className="w-full px-6 py-4 bg-gray-100 border-2 border-transparent rounded-2xl outline-none font-bold transition-all cursor-not-allowed opacity-70"
//                                         value={infoForm.data.email}
//                                         tabIndex="-1"
//                                     />
//                                     <p className="text-[9px] text-slate-400 ml-2 italic">Email address cannot be changed.</p>
//                                     {infoForm.errors.email && <p className="text-red-500 text-xs font-bold mt-1 ml-2">{infoForm.errors.email}</p>}
//                                 </div>
//                             </div>
//                             <button
//                                 disabled={infoForm.processing}
//                                 className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 disabled:opacity-50"
//                             >
//                                 <Save size={18} /> {infoForm.processing ? 'Saving...' : 'Save Profile'}
//                             </button>
//                         </form>
//                     </section>

//                     {/* Security Section */}
//                     <section className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
//                         <div className="flex items-center gap-4 mb-8">
//                             <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center">
//                                 <Lock size={24} />
//                             </div>
//                             <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Security Credentials</h2>
//                         </div>

//                         <form onSubmit={updatePassword} className="space-y-6">
//                             <div className="space-y-2">
//                                 <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">New Password</label>
//                                 <div className="relative">
//                                     <input
//                                         type={showPassword ? "text" : "password"}
//                                         className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-orange-500 font-bold transition-all pr-14"
//                                         value={passwordForm.data.password}
//                                         onChange={e => passwordForm.setData('password', e.target.value)}
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowPassword(!showPassword)}
//                                         className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
//                                     >
//                                         {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                                     </button>
//                                 </div>
//                                 {passwordForm.errors.password && <p className="text-red-500 text-xs font-bold mt-1 ml-2">{passwordForm.errors.password}</p>}
//                             </div>

//                             <div className="space-y-2">
//                                 <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">Confirm New Password</label>
//                                 <div className="relative">
//                                     <input
//                                         type={showConfirmPassword ? "text" : "password"}
//                                         className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-orange-500 font-bold transition-all pr-14"
//                                         value={passwordForm.data.password_confirmation}
//                                         onChange={e => passwordForm.setData('password_confirmation', e.target.value)}
//                                     />
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                                         className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
//                                     >
//                                         {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                                     </button>
//                                 </div>
//                             </div>

//                             <button
//                                 disabled={passwordForm.processing}
//                                 className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 disabled:opacity-50"
//                             >
//                                 <Lock size={18} /> {passwordForm.processing ? 'Updating...' : 'Update Security'}
//                             </button>
//                         </form>
//                     </section>
//                 </div>
//             </div>
//         </div>
//     );
// }














import React, { useState, useEffect } from "react";
import { Head, useForm, usePage, Link, router } from '@inertiajs/react';
import {
    User, Lock, Save, Eye, EyeOff,
    ArrowLeft, CheckCircle, X
} from 'lucide-react';

export default function Edit({ user }) {
    const { flash, auth } = usePage().props;
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [notification, setNotification] = useState(null);

    // Form logic
    const infoForm = useForm({
        name: user.name,
        email: user.email
    });

    const passwordForm = useForm({
        password: '',
        password_confirmation: '',
    });

    // Handle the redirect and notification logic
    const handleSuccess = (message) => {
        setNotification(message);

        // Wait 2 seconds so the user sees the "Success" popup, then redirect
        setTimeout(() => {
            router.visit(route('admin.dashboard'));
        }, 2000);
    };

    const updateInfo = (e) => {
        e.preventDefault();
        infoForm.patch(route('profile.update'), {
            preserveScroll: true,
            onSuccess: () => handleSuccess("Profile updated successfully! Redirecting..."),
        });
    };

    const updatePassword = (e) => {
        e.preventDefault();
        passwordForm.put(route('profile.password'), {
            preserveScroll: true,
            onSuccess: () => {
                passwordForm.reset();
                handleSuccess("Password updated successfully! Redirecting...");
            },
        });
    };

    // Conditional back route based on email
    const backRoute = auth.user?.email === "admin@gmail.com"
        ? route('admin.dashboard')
        : route('dashboard');

    return (
        <div className="min-h-screen bg-[#FBFBFE] p-12 relative">
            <Head title="Admin Profile" />

            {/* Success Popup */}
            {notification && (
                <div className="fixed top-10 right-10 z-[100] animate-in fade-in slide-in-from-right-8 duration-300">
                    <div className="bg-slate-900 text-white px-8 py-5 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-slate-700">
                        <div className="bg-green-500 p-1.5 rounded-full">
                            <CheckCircle size={20} className="text-white" />
                        </div>
                        <div>
                            <p className="font-black text-sm tracking-tight">{notification}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Account Settings</h1>
                        <p className="text-slate-500 font-medium text-sm">Update your identity and security protocols.</p>
                    </div>
                    <Link
                        href={backRoute}
                        className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-100 rounded-2xl text-slate-600 font-bold text-sm hover:bg-gray-50 transition-all shadow-sm"
                    >
                        <ArrowLeft size={18} /> Back to Dashboard
                    </Link>
                </div>

                <div className="grid gap-8">
                    {/* Profile Section */}
                    <section className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                <User size={24} />
                            </div>
                            <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Profile Information</h2>
                        </div>

                        <form onSubmit={updateInfo} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">Full Name</label>
                                    <input
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-blue-500 font-bold transition-all"
                                        value={infoForm.data.name}
                                        onChange={e => infoForm.setData('name', e.target.value)}
                                    />
                                    {infoForm.errors.name && <p className="text-red-500 text-xs font-bold mt-1 ml-2">{infoForm.errors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">Email Address</label>
                                    <input
                                        readOnly
                                        className="w-full px-6 py-4 bg-gray-100 border-2 border-transparent rounded-2xl outline-none font-bold transition-all cursor-not-allowed opacity-70"
                                        value={infoForm.data.email}
                                        tabIndex="-1"
                                    />
                                    <p className="text-[9px] text-slate-400 ml-2 italic">Email address cannot be changed.</p>
                                    {infoForm.errors.email && <p className="text-red-500 text-xs font-bold mt-1 ml-2">{infoForm.errors.email}</p>}
                                </div>
                            </div>
                            <button
                                disabled={infoForm.processing}
                                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 disabled:opacity-50"
                            >
                                <Save size={18} /> {infoForm.processing ? 'Saving...' : 'Save Profile'}
                            </button>
                        </form>
                    </section>

                    {/* Security Section */}
                    <section className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center">
                                <Lock size={24} />
                            </div>
                            <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Security Credentials</h2>
                        </div>

                        <form onSubmit={updatePassword} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">New Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-orange-500 font-bold transition-all pr-14"
                                        value={passwordForm.data.password}
                                        onChange={e => passwordForm.setData('password', e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                {passwordForm.errors.password && <p className="text-red-500 text-xs font-bold mt-1 ml-2">{passwordForm.errors.password}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-2">Confirm New Password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:bg-white focus:border-orange-500 font-bold transition-all pr-14"
                                        value={passwordForm.data.password_confirmation}
                                        onChange={e => passwordForm.setData('password_confirmation', e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <button
                                disabled={passwordForm.processing}
                                className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 disabled:opacity-50"
                            >
                                <Lock size={18} /> {passwordForm.processing ? 'Updating...' : 'Update Security'}
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}
