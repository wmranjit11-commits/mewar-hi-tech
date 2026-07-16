"use client";
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, Upload } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Mechanical Design Engineer',
    dept: 'R&D / Engineering',
    loc: 'Udaipur, Rajasthan',
    type: 'Full-Time',
  },
  {
    title: 'CNC Machine Operator',
    dept: 'Manufacturing & Production',
    loc: 'Udaipur, Rajasthan',
    type: 'Full-Time',
  },
  {
    title: 'Sales & Business Development Executive',
    dept: 'Sales & Marketing',
    loc: 'Udaipur, Rajasthan',
    type: 'Full-Time',
  },
  {
    title: 'Quality Assurance (QA) Inspector',
    dept: 'Quality Control',
    loc: 'Udaipur, Rajasthan',
    type: 'Full-Time',
  },
];

const CareersPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen text-[#111111] select-none flex flex-col justify-between">
      <Header />

      <main className="pt-28 flex-grow">
        {/* Page Hero */}
        <section className="bg-gradient-to-r from-[#0c0e12] to-[#1a1f26] py-16 lg:py-24 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#F4B400] font-bold text-xs md:text-sm tracking-[0.2em] uppercase"
            >
              Careers
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl sm:text-5xl font-extrabold uppercase mt-3 mb-6"
            >
              Join Our Engineering Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            >
              Build the future of heavy industrial machinery. We are looking for talented, passionate individuals to help us design and manufacture next-generation mobile crushers and screeners.
            </motion.p>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-16 lg:py-24 bg-[#F7F7F7]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Open Jobs List (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-2xl font-extrabold text-[#111111] uppercase tracking-wide mb-8">
                Current Openings
              </h2>

              <div className="space-y-4">
                {jobs.map((job, idx) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-white border border-[#E4E4E4] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-gray-400">
                        <Briefcase size={12} />
                        <span>{job.dept}</span>
                        <span>&bull;</span>
                        <span>{job.loc}</span>
                      </div>
                      <h3 className="font-heading font-extrabold text-base text-[#111111] uppercase">
                        {job.title}
                      </h3>
                    </div>

                    <a
                      href="#apply"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#232D39] hover:bg-[#F4B400] text-white hover:text-black font-extrabold text-xs px-5 py-2.5 rounded-full uppercase tracking-wider transition-colors shrink-0"
                    >
                      <span>Apply</span>
                      <ArrowRight size={12} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Application Form (Cols 8-12) */}
            <div id="apply" className="lg:col-span-5 bg-white border border-[#E4E4E4] p-8 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] h-fit">
              <h2 className="font-heading text-xl font-extrabold text-[#111111] uppercase tracking-wide mb-2">
                Apply Today
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">
                Fill out the form below or email your resume directly to our HR team at <strong className="text-black font-bold">careers@mewarhitech.com</strong>.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-2">
                  <h3 className="font-heading font-bold text-sm">Application Submitted!</h3>
                  <p className="text-xs text-emerald-700">Thank you for applying. Our hiring managers will review your profile and get in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Nikhil Sharma"
                      className="w-full border border-[#E4E4E4] px-4 py-2.5 text-xs rounded-lg focus:outline-none focus:border-[#F4B400] text-black bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="nikhil@example.com"
                      className="w-full border border-[#E4E4E4] px-4 py-2.5 text-xs rounded-lg focus:outline-none focus:border-[#F4B400] text-black bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1">Position Applied For</label>
                    <select className="w-full border border-[#E4E4E4] px-4 py-2.5 text-xs rounded-lg focus:outline-none focus:border-[#F4B400] text-black bg-white">
                      {jobs.map((job) => (
                        <option key={job.title} value={job.title}>{job.title}</option>
                      ))}
                      <option value="other">Other / General Application</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1">Upload Resume (PDF)</label>
                    <div className="border border-dashed border-[#E4E4E4] p-6 rounded-lg text-center cursor-pointer hover:border-[#F4B400] transition-colors relative">
                      <Upload size={20} className="text-gray-400 mx-auto mb-2" />
                      <span className="text-[10px] text-gray-400 block">Click to select PDF or drag it here</span>
                      <input type="file" accept=".pdf" className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F4B400] hover:bg-[#D89B00] text-black font-extrabold text-xs uppercase tracking-wider py-3 rounded-lg transition-colors mt-2 shadow-sm"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
