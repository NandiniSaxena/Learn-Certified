
// import React from "react";
// import { Head, Link } from "@inertiajs/react";
// import { UserPlus, Mail, Lock, User, ArrowLeft, ShieldCheck } from "lucide-react";

// export default function Register() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
//       <Head title="Register | Global Training" />

//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <Link href="/" className="flex items-center justify-center gap-2 text-[#0d6efd] mb-6 hover:underline font-bold">
//           <ArrowLeft size={18} /> Back to Home
//         </Link>
//         <h2 className="text-center text-3xl font-black text-slate-800 uppercase tracking-tight">
//           Create Account
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Join thousands of certified professionals today
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
//         <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-2xl sm:px-10">
//           <form className="space-y-5">
//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">First Name</label>
//                 <div className="mt-1 relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                     <User size={18} />
//                   </div>
//                   <input type="text" required className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd] sm:text-sm transition-all" />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Last Name</label>
//                 <div className="mt-1 relative">
//                   <input type="text" required className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd] sm:text-sm transition-all" />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
//               <div className="mt-1 relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <Mail size={18} />
//                 </div>
//                 <input type="email" required className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd] sm:text-sm transition-all" />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Password</label>
//               <div className="mt-1 relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <Lock size={18} />
//                 </div>
//                 <input type="password" required className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd] sm:text-sm transition-all" />
//               </div>
//             </div>

//             <div className="flex items-start">
//               <div className="flex items-center h-5">
//                 <input type="checkbox" required className="h-4 w-4 text-[#0d6efd] border-gray-300 rounded" />
//               </div>
//               <div className="ml-3 text-sm">
//                 <label className="text-gray-600 font-medium">
//                   I agree to the <a href="#" className="text-[#0d6efd] font-bold">Terms of Service</a> and <a href="#" className="text-[#0d6efd] font-bold">Privacy Policy</a>
//                 </label>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-black text-white bg-[#0d6efd] hover:bg-[#0b5ed7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d6efd] transition-all"
//             >
//               <UserPlus size={20} /> CREATE ACCOUNT
//             </button>
//           </form>

//           <div className="mt-6 border-t border-gray-100 pt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link href="/login" className="font-black text-[#0d6efd] hover:underline">
//                 Sign In
//               </Link>
//             </p>
//           </div>
//         </div>

//         <div className="mt-8 flex items-center justify-center gap-4 text-gray-400">
//           <ShieldCheck size={20} />
//           <span className="text-xs font-bold uppercase tracking-widest">100% Secure SSL Encrypted</span>
//         </div>
//       </div>
//     </div>
//   );
// }






import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { UserPlus, Mail, Lock, User, ArrowLeft, ShieldCheck } from "lucide-react";

export default function Register() {
  // 1. Initialize Inertia Form Hook
  const { data, setData, post, processing, errors } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/register"); // This sends the data to your Controller
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <Head title="Register | Global Training" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 text-[#0d6efd] mb-6 hover:underline font-bold">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        <h2 className="text-center text-3xl font-black text-slate-800 uppercase tracking-tight">Create Account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-2xl sm:px-10">

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase">First Name</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    value={data.first_name}
                    onChange={(e) => setData("first_name", e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd]"
                  />
                </div>
                {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase">Last Name</label>
                <input
                  type="text"
                  value={data.last_name}
                  onChange={(e) => setData("last_name", e.target.value)}
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase">Email Address</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd]"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase">Password</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  value={data.password}
                  onChange={(e) => setData("password", e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd]"
                />
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className={`w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-black text-white bg-[#0d6efd] hover:bg-[#0b5ed7] transition-all ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <UserPlus size={20} /> {processing ? 'REGISTERING...' : 'CREATE ACCOUNT'}
            </button>
          </form>

          <div className="mt-6 border-t border-gray-100 pt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account? <Link href="/login" className="font-black text-[#0d6efd] hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
