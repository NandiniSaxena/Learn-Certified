import React, { useState, useEffect } from "react";
import { Head, useForm, router, Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, LogOut, Search, Edit2, Command, LayoutDashboard, Briefcase, Settings, PersonStanding, Eye, EyeOff, CheckCircle, AlertCircle, Menu, X } from "lucide-react";

export default function UserIndex({ users = [], flash = {}, auth }) {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data, setData, reset, processing, errors, clearErrors, post, put } = useForm({
    id: null,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (flash?.success) showToast('success', flash.success);
    else if (flash?.error) showToast('error', flash.error);
    else if (Object.keys(errors).length > 0) {
      const firstError = Object.values(errors)[0];
      showToast('error', firstError);
    }
  }, [flash, errors]);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const filteredUsers = users.filter(user =>
    (user.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.email || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openCreateModal = () => {
    setEditMode(false);
    clearErrors();
    reset();
    setShowModal(true);
  };

  const openEditModal = (user) => {
    setEditMode(true);
    clearErrors();
    const nameParts = user.name ? user.name.split(' ') : ['', ''];
    setData({
      id: user.id,
      first_name: nameParts[0],
      last_name: nameParts.slice(1).join(' '),
      email: user.email,
      password: '',
    });
    setShowModal(true);
  };

  const submit = (e) => {
    e.preventDefault();

    if (editMode) {
      put(route('users.update', data.id), {
        preserveScroll: true,
        onSuccess: () => { setShowModal(false); reset(); },
      });
    } else {
      post(route('users.store'), {
        onSuccess: () => { setShowModal(false); reset(); },
      });
    }
  };

  const handleDelete = (id) => {
    if (confirm("Delete this user?")) {
      router.delete(route('users.destroy', id));
    }
  };

  const ErrorMsg = ({ msg }) => (
    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-red-500 text-[11px] font-bold mt-1 ml-2 uppercase tracking-wide">
      {msg}
    </motion.p>
  );

  return (
    <div className="min-h-screen bg-[#FBFBFE] flex font-sans text-[#1A1C1E]">
      <Head title="User Management" />

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-md text-[#0d6efd] focus:outline-none"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Sidebar */}
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
                  <Link href={route('certifications.index')} onClick={() => setIsSidebarOpen(false)}>
                    <NavItem icon={<Briefcase size={20}/>} label="Certifications" />
                  </Link>
                  <NavItem icon={<PersonStanding size={20}/>} label="User Details" active />
                </nav>
              </div>

              <div className="mt-auto p-6">
                <button onClick={() => router.post(route('logout'))} className="flex items-center gap-3 text-slate-400 hover:text-red-500 font-bold transition-all w-full px-4 py-3 rounded-xl hover:bg-red-50">
                  <LogOut size={20} /> Sign Out
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 right-4 sm:right-6 z-[200] px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 text-white font-medium text-sm sm:text-base ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
          >
            {toast.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar – FIXED: Removed "hidden" class so it's always visible on desktop */}
      <aside className="w-72 bg-white border-r border-gray-100 fixed h-full flex-col z-20 lg:flex hidden">
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
              <NavItem icon={<Briefcase size={20}/>} label="Certifications" />
            </Link>
            <NavItem icon={<PersonStanding size={20}/>} label="User Details" active />
          </nav>
        </div>

        <div className="mt-auto p-8">
          <button onClick={() => router.post(route('logout'))} className="flex items-center gap-3 text-slate-400 hover:text-red-500 font-bold transition-all w-full px-4 py-3 rounded-xl hover:bg-red-50">
            <LogOut size={20} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 flex-1 min-h-screen bg-gray-50/30">
        {/* Top Navbar */}
        <header className="h-16 lg:h-20 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 pl-16 sm:pl-20 lg:pl-12 pr-4 sm:pr-6 lg:pr-12 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4 bg-gray-100/50 px-4 py-2 rounded-2xl w-full max-w-md">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
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
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">User Directory</h1>
                <span className="bg-blue-100 text-[#0d6efd] text-[14px] sm:text-[18px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  {users.length} Total Users
                </span>
              </div>
              <p className="text-slate-500 font-medium text-sm sm:text-base">Manage permissions and accounts.</p>
            </div>
            <button onClick={openCreateModal} className="bg-[#0d6efd] text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-blue-500/25 transition-all transform active:scale-95 w-full sm:w-auto">
              <Plus size={20} /> Add User
            </button>
          </div>

          {/* Table – scrollable on mobile */}
          <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-sm overflow-x-auto">
            <table className="w-full min-w-[600px] lg:min-w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-6 py-4 sm:px-8 sm:py-5 text-[10px] sm:text-xs font-black uppercase text-gray-400">User</th>
                  <th className="px-6 py-4 sm:px-8 sm:py-5 text-[10px] sm:text-xs font-black uppercase text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-blue-50/30 group transition-colors">
                    <td className="px-6 py-5 sm:px-8 sm:py-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-sm sm:text-base">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-black text-slate-800 text-sm sm:text-base">
                            {user.name}
                            {auth.user && user.id === auth.user.id && (
                              <span className="ml-2 text-[9px] sm:text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full uppercase tracking-tighter">You</span>
                            )}
                          </p>
                          <p className="text-xs text-slate-400">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 sm:px-8 sm:py-6 text-right">
                      {auth.user && user.id !== auth.user.id ? (
                        <div className="flex justify-end gap-2">
                          <button onClick={() => openEditModal(user)} className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                            <Edit2 size={16} sm:size={18} />
                          </button>
                          <button onClick={() => handleDelete(user.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                            <Trash2 size={16} sm:size={18} />
                          </button>
                        </div>
                      ) : (
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-300 uppercase tracking-widest">Protected</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-lg rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl relative z-10 p-6 sm:p-10 overflow-y-auto max-h-[90vh]"
            >
              <form onSubmit={submit} className="space-y-5" autoComplete="off">
                <header className="flex justify-between items-center mb-2">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">{editMode ? 'Update User' : 'Create User'}</h3>
                  {processing && <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>}
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      placeholder="First Name"
                      className={`w-full px-5 sm:px-6 py-3 sm:py-4 bg-gray-50 rounded-2xl outline-none border-2 transition-all ${errors.first_name ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-blue-500'}`}
                      value={data.first_name}
                      onChange={e => setData('first_name', e.target.value)}
                    />
                    {errors.first_name && <ErrorMsg msg={errors.first_name} />}
                  </div>
                  <div>
                    <input
                      placeholder="Last Name"
                      className={`w-full px-5 sm:px-6 py-3 sm:py-4 bg-gray-50 rounded-2xl outline-none border-2 transition-all ${errors.last_name ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-blue-500'}`}
                      value={data.last_name}
                      onChange={e => setData('last_name', e.target.value)}
                    />
                    {errors.last_name && <ErrorMsg msg={errors.last_name} />}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    autoComplete="off"
                    className={`w-full px-5 sm:px-6 py-3 sm:py-4 bg-gray-50 rounded-2xl outline-none border-2 transition-all ${errors.email ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-blue-500'}`}
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                  />
                  {errors.email && <ErrorMsg msg={errors.email} />}
                </div>

                <div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder={editMode ? "New Password (Optional)" : "Password"}
                      autoComplete="new-password"
                      className={`w-full px-5 sm:px-6 py-3 sm:py-4 bg-gray-50 rounded-2xl outline-none border-2 transition-all ${errors.password ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-blue-500'}`}
                      value={data.password}
                      onChange={e => setData('password', e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <ErrorMsg msg={errors.password} />}
                  {editMode && !errors.password && <p className="text-[10px] text-slate-400 ml-2 mt-1 italic">Leave blank to keep existing password</p>}
                </div>

                <button
                  disabled={processing}
                  className="w-full bg-[#0d6efd] text-white py-4 sm:py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processing ? 'Processing...' : editMode ? 'Update Account' : 'Create Account'}
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
    <div className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer font-bold transition-all ${active ? 'bg-blue-50 text-[#0d6efd]' : 'text-slate-400 hover:bg-gray-50'}`}>
      {icon} <span className="text-sm">{label}</span>
    </div>
  );
}

function ErrorMsg({ msg }) {
  return (
    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-red-500 text-[11px] font-bold mt-1 ml-2 uppercase tracking-wide">
      {msg}
    </motion.p>
  );
}
