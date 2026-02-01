// import React from "react";
// import { Head, useForm, Link } from "@inertiajs/react";  // ← add useForm
// import { LogIn, Mail, Lock, ArrowLeft } from "lucide-react";

// export default function Login() {
//   const { data, setData, post, processing, errors } = useForm({
//     email: "",
//     password: "",
//     remember: false,
//   });

//   const submit = (e) => {
//     e.preventDefault();
//     post(route("login"), {
//       onFinish: () => console.log("Login attempt finished"),
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
//       <Head title="Login | Global Training" />

//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <Link href="/" className="flex items-center justify-center gap-2 text-[#0d6efd] mb-6 hover:underline font-bold">
//           <ArrowLeft size={18} /> Back to Home
//         </Link>
//         <h2 className="text-center text-3xl font-black text-slate-800 uppercase tracking-tight">
//           Welcome Back
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Sign in to access your certification dashboard
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-2xl sm:px-10">
//           <form onSubmit={submit} className="space-y-6">
//             {/* Email */}
//             <div>
//               <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
//                 Email Address
//               </label>
//               <div className="mt-1 relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <Mail size={18} />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={data.email}
//                   onChange={(e) => setData("email", e.target.value)}
//                   required
//                   autoFocus
//                   placeholder="admin@gmail.com"
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] sm:text-sm transition-all"
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <Lock size={18} />
//                 </div>
//                 <input
//                   type="password"
//                   name="password"
//                   value={data.password}
//                   onChange={(e) => setData("password", e.target.value)}
//                   required
//                   placeholder="••••••••"
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] sm:text-sm transition-all"
//                 />
//               </div>
//               {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
//             </div>

//             {/* Remember + Forgot */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="remember"
//                   checked={data.remember}
//                   onChange={(e) => setData("remember", e.target.checked)}
//                   className="h-4 w-4 text-[#0d6efd] focus:ring-[#0d6efd] border-gray-300 rounded"
//                 />
//                 <label className="ml-2 block text-sm text-gray-700 font-medium">Remember me</label>
//               </div>

//               <div className="text-sm">
//                 <a href="#" className="font-bold text-[#0d6efd] hover:text-[#0b5ed7]">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             {/* Submit button */}
//             <button
//               type="submit"
//               disabled={processing}
//               className={`w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg text-lg font-black text-white
//                 ${processing ? "bg-gray-400 cursor-not-allowed" : "bg-[#0d6efd] hover:bg-[#0b5ed7]"}
//                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d6efd] transition-all`}
//             >
//               <LogIn size={20} />
//               {processing ? "Signing in..." : "SIGN IN"}
//             </button>
//           </form>

//           {/* Register link + dev info */}
//           <div className="mt-6 border-t border-gray-100 pt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Don't have an account?{" "}
//               <Link href="/register" className="font-black text-[#0d6efd] hover:underline">
//                 Register Now
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import React from "react";
// import { Head, useForm, Link } from "@inertiajs/react";
// import { LogIn, Mail, Lock, ArrowLeft } from "lucide-react";

// export default function Login() {
//   const { data, setData, post, processing, errors } = useForm({
//     email: "",
//     password: "",
//     remember: false,
//   });

//   const submit = (e) => {
//     e.preventDefault();
//     post(route("login"), {
//       onFinish: () => console.log("Login attempt finished"),
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
//       <Head title="Login | Global Training" />

//       {/* Header Section */}
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <Link
//           href="/"
//           className="flex items-center justify-center gap-2 text-[#0d6efd] mb-4 sm:mb-6 hover:underline font-bold text-sm sm:text-base transition-all"
//         >
//           <ArrowLeft size={18} /> Back to Home
//         </Link>

//         <h2 className="text-center text-2xl sm:text-3xl font-black text-slate-800 uppercase tracking-tight">
//           Welcome Back
//         </h2>
//         <p className="mt-2 text-center text-xs sm:text-sm text-gray-600 px-4">
//           Sign in to access your certification dashboard and results.
//         </p>
//       </div>

//       {/* Form Card */}
//       <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-6 shadow-sm sm:shadow-xl border border-gray-100 rounded-2xl sm:px-10">
//           <form onSubmit={submit} className="space-y-5 sm:space-y-6">

//             {/* Email Field */}
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
//                   name="email"
//                   value={data.email}
//                   onChange={(e) => setData("email", e.target.value)}
//                   required
//                   autoFocus
//                   placeholder="admin@gmail.com"
//                   className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="mt-1.5 text-xs font-medium text-red-600 ml-1">{errors.email}</p>
//               )}
//             </div>

//             {/* Password Field */}
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
//                   name="password"
//                   value={data.password}
//                   onChange={(e) => setData("password", e.target.value)}
//                   required
//                   placeholder="••••••••"
//                   className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:border-[#0d6efd] transition-all"
//                 />
//               </div>
//               {errors.password && (
//                 <p className="mt-1.5 text-xs font-medium text-red-600 ml-1">{errors.password}</p>
//               )}
//             </div>

//             {/* Remember + Forgot Row */}
//             <div className="flex items-center justify-between gap-2 px-1">
//               <div className="flex items-center">
//                 <input
//                   id="remember"
//                   type="checkbox"
//                   name="remember"
//                   checked={data.remember}
//                   onChange={(e) => setData("remember", e.target.checked)}
//                   className="h-5 w-5 text-[#0d6efd] focus:ring-[#0d6efd] border-gray-300 rounded transition-all cursor-pointer"
//                 />
//                 <label
//                   htmlFor="remember"
//                   className="ml-2 block text-sm text-gray-700 font-medium select-none cursor-pointer"
//                 >
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <a href="#" className="font-bold text-[#0d6efd] hover:text-[#0b5ed7] transition-colors">
//                   Forgot?
//                 </a>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={processing}
//               className={`w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl shadow-lg text-base sm:text-lg font-black text-white uppercase tracking-wider
//                 ${processing
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-[#0d6efd] hover:bg-[#0b5ed7] active:scale-[0.98]"
//                 }
//                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d6efd] transition-all`}
//             >
//               {processing ? (
//                 <span className="flex items-center gap-2">
//                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Processing...
//                 </span>
//               ) : (
//                 <>
//                   <LogIn size={20} />
//                   SIGN IN
//                 </>
//               )}
//             </button>
//           </form>

        //   {/* Registration Footer */}
        //   <div className="mt-8 border-t border-gray-100 pt-6 text-center">
        //     <p className="text-sm text-gray-600">
        //       Don't have an account?{" "}
        //       <Link
        //         href="/register"
        //         className="block sm:inline mt-2 sm:mt-0 font-black text-[#0d6efd] hover:underline"
        //       >
        //         Register Now
        //       </Link>
        //     </p>
        //   </div>
//         </div>
//       </div>
//     </div>
//   );
// }









import React from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import { LogIn, Mail, Lock, ArrowLeft } from "lucide-react";

export default function Login() {
  // 1. Initialize form with 'remember' field
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false, // This maps to your session cookie logic in Laravel
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      // 2. Clear password on failure for better security/UX
      onFinish: () => reset("password"),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <Head title="Login | Global Training" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-[#0d6efd] mb-4 sm:mb-6 hover:underline font-bold text-sm sm:text-base transition-all"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <h2 className="text-center text-2xl sm:text-3xl font-black text-slate-800 uppercase tracking-tight">
          Welcome Back
        </h2>
      </div>

      <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-sm sm:shadow-xl border border-gray-100 rounded-2xl sm:px-10">
          <form onSubmit={submit} className="space-y-5 sm:space-y-6">

            {/* Email Field */}
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
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  className={`block w-full pl-10 pr-3 py-3.5 border rounded-xl text-base transition-all focus:outline-none focus:ring-2
                    ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0d6efd]'}`}
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs font-medium text-red-600 ml-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
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
                  value={data.password}
                  onChange={(e) => setData("password", e.target.value)}
                  className={`block w-full pl-10 pr-3 py-3.5 border rounded-xl text-base transition-all focus:outline-none focus:ring-2
                    ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0d6efd]'}`}
                />
              </div>
              {errors.password && <p className="mt-1.5 text-xs font-medium text-red-600 ml-1">{errors.password}</p>}
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center justify-between gap-2 px-1">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={data.remember}
                  onChange={(e) => setData("remember", e.target.checked)}
                  className="h-5 w-5 text-[#0d6efd] focus:ring-[#0d6efd] border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 font-medium cursor-pointer">
                  Remember me
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={processing}
              className={`w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl shadow-lg text-base font-black text-white uppercase tracking-wider transition-all
                ${processing ? "bg-gray-400" : "bg-[#0d6efd] hover:bg-[#0b5ed7] active:scale-[0.98]"}`}
            >
              {processing ? "Signing in..." : "SIGN IN"}
            </button>
          </form>
          {/* Registration Footer */}
          <div className="mt-8 border-t border-gray-100 pt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="block sm:inline mt-2 sm:mt-0 font-black text-[#0d6efd] hover:underline"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
