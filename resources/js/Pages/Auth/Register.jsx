// import React from "react";
// import { Head, Link, useForm } from "@inertiajs/react";
// import { UserPlus, Mail, Lock, User, ArrowLeft, ShieldCheck } from "lucide-react";

// export default function Register() {
//   // 1. Initialize Inertia Form Hook
//   const { data, setData, post, processing, errors } = useForm({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post("/register"); // This sends the data to your Controller
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
//       <Head title="Register | Global Training" />

//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <Link href="/" className="flex items-center justify-center gap-2 text-[#0d6efd] mb-6 hover:underline font-bold">
//           <ArrowLeft size={18} /> Back to Home
//         </Link>
//         <h2 className="text-center text-3xl font-black text-slate-800 uppercase tracking-tight">Create Account</h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
//         <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-2xl sm:px-10">

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 uppercase">First Name</label>
//                 <div className="mt-1 relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                     <User size={18} />
//                   </div>
//                   <input
//                     type="text"
//                     value={data.first_name}
//                     onChange={(e) => setData("first_name", e.target.value)}
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd]"
//                   />
//                 </div>
//                 {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-gray-700 uppercase">Last Name</label>
//                 <input
//                   type="text"
//                   value={data.last_name}
//                   onChange={(e) => setData("last_name", e.target.value)}
//                   className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd]"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-bold text-gray-700 uppercase">Email Address</label>
//               <div className="mt-1 relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <Mail size={18} />
//                 </div>
//                 <input
//                   type="email"
//                   value={data.email}
//                   onChange={(e) => setData("email", e.target.value)}
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd]"
//                 />
//               </div>
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-bold text-gray-700 uppercase">Password</label>
//               <div className="mt-1 relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <Lock size={18} />
//                 </div>
//                 <input
//                   type="password"
//                   value={data.password}
//                   onChange={(e) => setData("password", e.target.value)}
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-[#0d6efd] focus:border-[#0d6efd]"
//                 />
//               </div>
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>

//             <button
//               type="submit"
//               disabled={processing}
//               className={`w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-black text-white bg-[#0d6efd] hover:bg-[#0b5ed7] transition-all ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               <UserPlus size={20} /> {processing ? 'REGISTERING...' : 'CREATE ACCOUNT'}
//             </button>
//           </form>

//           <div className="mt-6 border-t border-gray-100 pt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account? <Link href="/login" className="font-black text-[#0d6efd] hover:underline">Sign In</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








// import React from "react";
// import { Head, Link, useForm } from "@inertiajs/react";
// import { UserPlus, Mail, Lock, User, ArrowLeft } from "lucide-react";

// export default function Register() {
//   const { data, setData, post, processing, errors } = useForm({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post("/register");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
//       <Head title="Register | Global Training" />

//       {/* Header Section */}
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <Link
//           href="/"
//           className="flex items-center justify-center gap-2 text-[#0d6efd] mb-4 sm:mb-6 hover:underline font-bold text-sm sm:text-base transition-all"
//         >
//           <ArrowLeft size={18} /> Back to Home
//         </Link>
//         <h2 className="text-center text-2xl sm:text-3xl font-black text-slate-800 uppercase tracking-tight">
//           Create Account
//         </h2>
//         <p className="mt-2 text-center text-xs sm:text-sm text-gray-600 px-4">
//           Join thousands of professionals getting certified globally.
//         </p>
//       </div>

//       {/* Form Card */}
//       <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
//         <div className="bg-white py-8 px-6 shadow-sm sm:shadow-xl border border-gray-100 rounded-2xl sm:px-10">

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Name Grid - Stacks on mobile, side-by-side on sm+ */}
//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
//                   First Name
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                     <User size={18} />
//                   </div>
//                   <input
//                     type="text"
//                     value={data.first_name}
//                     onChange={(e) => setData("first_name", e.target.value)}
//                     placeholder="John"
//                     className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
//                   />
//                 </div>
//                 {errors.first_name && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.first_name}</p>}
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   value={data.last_name}
//                   onChange={(e) => setData("last_name", e.target.value)}
//                   placeholder="Doe"
//                   className="block w-full px-4 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
//                 />
//                 {errors.last_name && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.last_name}</p>}
//               </div>
//             </div>

//             {/* Email Address */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <Mail size={18} />
//                 </div>
//                 <input
//                   type="email"
//                   value={data.email}
//                   onChange={(e) => setData("email", e.target.value)}
//                   placeholder="name@company.com"
//                   className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
//                 />
//               </div>
//               {errors.email && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.email}</p>}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <Lock size={18} />
//                 </div>
//                 <input
//                   type="password"
//                   value={data.password}
//                   onChange={(e) => setData("password", e.target.value)}
//                   placeholder="••••••••"
//                   className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
//                 />
//               </div>
//               {errors.password && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.password}</p>}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={processing}
//               className={`w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl shadow-lg text-base sm:text-lg font-black text-white uppercase tracking-wider transition-all
//                 ${processing
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-[#0d6efd] hover:bg-[#0b5ed7] active:scale-[0.98]"
//                 }`}
//             >
//               {processing ? (
//                  <span className="flex items-center gap-2">
//                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
//                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
//                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                    </svg>
//                    Creating Account...
//                  </span>
//               ) : (
//                 <>
//                   <UserPlus size={20} />
//                   Create Account
//                 </>
//               )}
//             </button>
//           </form>

//           {/* Login Link */}
//           <div className="mt-8 border-t border-gray-100 pt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link
//                 href="/login"
//                 className="block sm:inline mt-2 sm:mt-0 font-black text-[#0d6efd] hover:underline"
//               >
//                 Sign In
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











// import React from "react";
// import { Head, Link, useForm } from "@inertiajs/react";
// import { UserPlus, Mail, Lock, User, ArrowLeft } from "lucide-react";

// export default function Register() {
//   const { data, setData, post, processing, errors, reset } = useForm({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//     password_confirmation: "", // Standard for registration
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post("/register", {
//       onFinish: () => reset("password", "password_confirmation"),
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
//       <Head title="Register | Global Training" />

//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <Link
//           href="/"
//           className="flex items-center justify-center gap-2 text-[#0d6efd] mb-4 sm:mb-6 hover:underline font-bold text-sm sm:text-base"
//         >
//           <ArrowLeft size={18} /> Back to Home
//         </Link>
//         <h2 className="text-center text-2xl sm:text-3xl font-black text-slate-800 uppercase tracking-tight">
//           Create Account
//         </h2>
//       </div>

//       <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
//         <div className="bg-white py-8 px-6 shadow-sm sm:shadow-xl border border-gray-100 rounded-2xl sm:px-10">

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Name Grid */}
//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
//                   First Name
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                     <User size={18} />
//                   </div>
//                   <input
//                     type="text"
//                     value={data.first_name}
//                     onChange={(e) => setData("first_name", e.target.value)}
//                     placeholder="Enter first name" // Removed admin reference
//                     className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
//                   />
//                 </div>
//                 {errors.first_name && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.first_name}</p>}
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   value={data.last_name}
//                   onChange={(e) => setData("last_name", e.target.value)}
//                   placeholder="Enter last name"
//                   className="block w-full px-4 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
//                 />
//                 {errors.last_name && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.last_name}</p>}
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <Mail size={18} />
//                 </div>
//                 <input
//                   type="email"
//                   autoComplete="off"
//                   value={data.email}
//                   onChange={(e) => setData("email", e.target.value)}
//                   placeholder="yourname@email.com" // Generic placeholder
//                   className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
//                 />
//               </div>
//               {errors.email && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.email}</p>}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <Lock size={18} />
//                 </div>
//                 <input
//                   type="password"

//                   value={data.password}
//                   onChange={(e) => setData("password", e.target.value)}
//                   placeholder="Create a password"
//                   className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
//                 />
//               </div>
//               {errors.password && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.password}</p>}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <Lock size={18} />
//                 </div>
//                 <input
//                   type="password"
//                   value={data.password_confirmation}
//                   onChange={(e) => setData("password_confirmation", e.target.value)}
//                   placeholder="Repeat your password"
//                   className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={processing}
//               className={`w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl shadow-lg text-base sm:text-lg font-black text-white uppercase tracking-wider transition-all
//                 ${processing ? "bg-gray-400 cursor-not-allowed" : "bg-[#0d6efd] hover:bg-[#0b5ed7] active:scale-[0.98]"}`}
//             >
//               {processing ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
//             </button>
//           </form>

//           {/* Login Link */}
//           <div className="mt-8 border-t border-gray-100 pt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link href="/login" className="block sm:inline mt-2 sm:mt-0 font-black text-[#0d6efd] hover:underline">
//                 Sign In
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { UserPlus, Mail, Lock, User, ArrowLeft } from "lucide-react";

export default function Register() {
  // Initialize with empty strings to ensure no data is pre-loaded
  const { data, setData, post, processing, errors, reset } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/register", {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <Head title="Register | Global Training" />

      {/* Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-[#0d6efd] mb-4 sm:mb-6 hover:underline font-bold text-sm sm:text-base"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
        <h2 className="text-center text-2xl sm:text-3xl font-black text-slate-800 uppercase tracking-tight">
          Create Account
        </h2>
      </div>

      <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-6 shadow-sm sm:shadow-xl border border-gray-100 rounded-2xl sm:px-10">

          <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
            {/* Name Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
                  First Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    value={data.first_name}
                    onChange={(e) => setData("first_name", e.target.value)}
                    placeholder="First name"
                    className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
                  />
                </div>
                {errors.first_name && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.first_name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={data.last_name}
                  onChange={(e) => setData("last_name", e.target.value)}
                  placeholder="Last name"
                  className="block w-full px-4 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
                />
                {errors.last_name && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.last_name}</p>}
              </div>
            </div>

            {/* Email - Using autoComplete="off" */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  placeholder="Enter your email"
                  className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
                />
              </div>
              {errors.email && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.email}</p>}
            </div>

            {/* Password - Using autoComplete="new-password" */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  autoComplete="new-password"
                  value={data.password}
                  onChange={(e) => setData("password", e.target.value)}
                  placeholder="Create a password"
                  className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
                />
              </div>
              {errors.password && <p className="text-red-600 text-xs mt-1.5 ml-1 font-medium">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5 ml-1">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  autoComplete="new-password"
                  value={data.password_confirmation}
                  onChange={(e) => setData("password_confirmation", e.target.value)}
                  placeholder="Confirm your password"
                  className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={processing}
              className={`w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl shadow-lg text-base sm:text-lg font-black text-white uppercase tracking-wider transition-all
                ${processing
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0d6efd] hover:bg-[#0b5ed7] active:scale-[0.98]"
                }`}
            >
              {processing ? (
                 <span className="flex items-center gap-2">
                   <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Creating...
                 </span>
              ) : (
                <>
                  <UserPlus size={20} />
                  Register Now
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 border-t border-gray-100 pt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="block sm:inline mt-2 sm:mt-0 font-black text-[#0d6efd] hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
