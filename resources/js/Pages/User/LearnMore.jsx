import React from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    ChevronLeft, ShieldCheck, Zap, Globe,
    FileCheck, MessageCircle, HelpCircle, ArrowRight
} from "lucide-react";
import { motion } from 'framer-motion';

export default function LearnMore() {
    return (
        <div className="min-h-screen bg-white font-sans antialiased text-[#212529]">
            <Head title="How It Works | Learn and Certified" />

            {/* Simple Navigation */}
            <nav className="py-6 px-6 md:px-12 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-2 text-[#0d6efd] font-black uppercase tracking-tighter text-xl">
                    <ChevronLeft size={20} /> Learn & Certified
                </Link>
                <a href="https://wa.me/919259239522" className="text-sm font-bold bg-gray-100 px-4 py-2 rounded-lg hover:bg-[#0d6efd] hover:text-white transition-all">
                    Support 24/7
                </a>
            </nav>

            {/* Hero Section */}
            <header className="bg-[#0d6efd] text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tighter"
                    >
                        Your Career, <br /> <span className="opacity-60">Simplified.</span>
                    </motion.h1>
                    <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto leading-relaxed">
                        We bridge the gap between your professional experience and official certification.
                        No stress, no failed attempts—just guaranteed results.
                    </p>
                </div>
            </header>

            {/* Process Flow */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-black uppercase tracking-tight text-slate-800">The 4-Step Process</h2>
                    <div className="w-16 h-1 bg-[#0d6efd] mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    <StepCard
                        number="01"
                        icon={<MessageCircle size={32}/>}
                        title="Consultation"
                        desc="Contact us on WhatsApp to discuss your target certification and timeline."
                    />
                    <StepCard
                        number="02"
                        icon={<FileCheck size={32}/>}
                        title="Registration"
                        desc="We help you book the exam slot or handle the registration details securely."
                    />
                    <StepCard
                        number="03"
                        icon={<Zap size={32}/>}
                        title="The Exam"
                        desc="Our experts provide remote support or proxy services to ensure a 100% pass."
                    />
                    <StepCard
                        number="04"
                        icon={<Globe size={32}/>}
                        title="Certification"
                        desc="Receive your official certificate directly from the vendor (AWS, Cisco, etc.)."
                    />
                </div>
            </section>



            {/* Deep Dive Features */}
            <section className="bg-gray-50 py-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-slate-800 uppercase leading-none">
                            Why choose <br /> <span className="text-[#0d6efd]">Learn and Certified?</span>
                        </h2>

                        <div className="space-y-6">
                            <FeatureItem
                                title="Direct Expert Consultation"
                                desc="You get a dedicated expert who guides you through the technical requirements, system checks, and scheduling from start to finish."
                            />
                            <FeatureItem
                                title="End-to-End Privacy"
                                desc="Your personal data and credentials are encrypted and never shared with third parties."
                            />
                            <FeatureItem
                                title="Global Reach"
                                desc="We support candidates from the USA, UK, UAE, India, and other countries."
                            />
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
                        <HelpCircle className="text-[#0d6efd] mb-6" size={48} />
                        <h3 className="text-2xl font-black mb-4 uppercase">Frequently Asked Questions</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-slate-800">Is the certificate official?</h4>
                                <p className="text-gray-500 text-sm">Yes. The certificate is issued directly by the vendor (Microsoft, PMI, etc.) and is verifiable on their official portal.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">Do I need to study?</h4>
                                <p className="text-gray-500 text-sm">While we encourage learning, our service is designed to help busy professionals pass without spending months on test prep.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 text-center">
                <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Ready to boost your salary?</h2>
                <a
                    href="https://wa.me/919259239522"
                    className="inline-flex items-center gap-3 bg-[#0d6efd] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform"
                >
                    Start Your Journey <ArrowRight size={24} />
                </a>
            </section>

            <footer className="bg-[#0b1220] py-12 text-center text-gray-500 text-sm font-bold uppercase tracking-widest">
                © 2026 Learn and Certified. All Rights Reserved.
            </footer>
        </div>
    );
}

function StepCard({ number, icon, title, desc }) {
    return (
        <div className="relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <span className="absolute -top-4 -left-4 w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-full font-black italic text-lg shadow-lg">
                {number}
            </span>
            <div className="text-[#0d6efd] mb-6">{icon}</div>
            <h3 className="text-xl font-black mb-3 uppercase text-slate-800">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">{desc}</p>
        </div>
    );
}

function FeatureItem({ title, desc }) {
    return (
        <div className="flex gap-4">
            <div className="mt-1"><ShieldCheck className="text-emerald-500" size={24} /></div>
            <div>
                <h4 className="font-black text-lg uppercase text-slate-800">{title}</h4>
                <p className="text-gray-500 font-medium">{desc}</p>
            </div>
        </div>
    );
}
