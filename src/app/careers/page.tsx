"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Upload } from "lucide-react";
import BlobButton from "@/components/ui/BlobButton";

const jobs = [
  {
    title: "Senior Mechanical Design Engineer",
    dept: "R&D / Engineering",
    loc: "Udaipur, Rajasthan",
    type: "Full-Time",
  },
  {
    title: "CNC Machine Operator",
    dept: "Manufacturing & Production",
    loc: "Udaipur, Rajasthan",
    type: "Full-Time",
  },
  {
    title: "Sales & Business Development Executive",
    dept: "Sales & Marketing",
    loc: "Udaipur, Rajasthan",
    type: "Full-Time",
  },
  {
    title: "Quality Assurance (QA) Inspector",
    dept: "Quality Control",
    loc: "Udaipur, Rajasthan",
    type: "Full-Time",
  },
];

const CareersPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
      <Header />

      <main className="pt-28 flex-grow">
        {/* Page Hero */}
        <section className="bg-secondary py-16 lg:py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <img src="/images/hero_crusher.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold text-xs tracking-widest uppercase block"
            >
              Careers
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl sm:text-5xl font-black uppercase mt-3 mb-6 text-secondary-foreground"
            >
              Join Our Engineering Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-secondary-foreground/75 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Build the future of heavy industrial machinery. We are looking for talented, passionate individuals to help us design and manufacture next-generation mobile crushers and screeners.
            </motion.p>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Open Jobs List (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-2xl font-black text-foreground uppercase tracking-wide mb-8">
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
                    className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-muted-foreground">
                        <Briefcase size={12} className="text-primary" />
                        <span>{job.dept}</span>
                        <span>&bull;</span>
                        <span>{job.loc}</span>
                      </div>
                      <h3 className="font-heading font-black text-base text-foreground uppercase">
                        {job.title}
                      </h3>
                    </div>

                    <BlobButton
                      variant="primary"
                      className="!py-2.5 !px-5 text-xs font-black shrink-0"
                      onClick={() => {
                        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <span>Apply</span>
                        <ArrowRight size={12} className="stroke-[2.5]" />
                      </div>
                    </BlobButton>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Application Form (Cols 8-12) */}
            <div id="apply" className="lg:col-span-5 bg-card border border-border p-8 rounded-2xl shadow-sm h-fit">
              <h2 className="font-heading text-xl font-black text-foreground uppercase tracking-wide mb-2">
                Apply Today
              </h2>
              <p className="text-muted-foreground text-xs leading-relaxed mb-6 font-medium">
                Fill out the form below or email your resume directly to our HR team at <strong className="text-foreground font-bold">careers@keestrack.com</strong>.
              </p>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 p-6 rounded-xl text-center space-y-2">
                  <h3 className="font-heading font-bold text-sm">Application Submitted!</h3>
                  <p className="text-xs text-emerald-500/80">Thank you for applying. Our hiring managers will review your profile and get in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-semibold">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-muted-foreground tracking-wider mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Nikhil Sharma"
                      className="w-full border border-border px-4 py-2.5 text-xs rounded-lg focus:outline-none focus:border-primary text-foreground bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-muted-foreground tracking-wider mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="nikhil@example.com"
                      className="w-full border border-border px-4 py-2.5 text-xs rounded-lg focus:outline-none focus:border-primary text-foreground bg-background"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-muted-foreground tracking-wider mb-1">Position Applied For</label>
                    <select className="w-full border border-border px-4 py-2.5 text-xs rounded-lg focus:outline-none focus:border-primary text-foreground bg-background">
                      {jobs.map((j) => (
                        <option key={j.title}>{j.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-muted-foreground tracking-wider mb-1">Upload Resume (PDF)</label>
                    <div className="border-2 border-dashed border-border hover:border-primary transition-colors rounded-lg p-6 text-center cursor-pointer relative bg-background">
                      <input
                        type="file"
                        accept=".pdf"
                        required
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload size={20} className="mx-auto text-muted-foreground mb-2" />
                      <span className="block text-[10px] text-muted-foreground uppercase font-bold">Drag and drop file here, or browse</span>
                    </div>
                  </div>

                  <BlobButton type="submit" variant="primary" className="w-full !py-3 text-xs font-black">
                    Submit Application
                  </BlobButton>
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
