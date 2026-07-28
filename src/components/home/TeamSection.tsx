"use client";

import React from "react";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const TEAM_MEMBERS = [
  {
    name: "Ranjit Singh Rathore",
    role: "Managing Director",
    phone: "+91-9001113333",
    email: "ranjit@kingsoncrusher.com",
    initials: "RR",
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    name: "Manilala Rathore",
    role: "Technical Director",
    phone: "+91-9001113334",
    email: "mangi@kingsoncrusher.com",
    initials: "MR",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    name: "Sanjay Rathore",
    role: "Operations Director",
    phone: "+91-9001113335",
    email: "sanjay@kingsoncrusher.com",
    initials: "SR",
    gradient: "from-emerald-500 to-teal-700",
  },
];

export default function TeamSection() {
  return (
    <section className="py-8 lg:py-12 bg-background border-b border-border/60">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Executive Leadership
          </span>
          <h2 className="common-heading text-3xl sm:text-4xl text-foreground mt-2">
            Our Management Team
          </h2>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-card border border-border/80 shadow-xs hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center space-y-5"
            >
              {/* Profile Avatar with initials and gradient */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-heading text-3xl font-black shadow-lg shadow-black/10 shrink-0`}>
                {member.initials}
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <h3 className="common-heading text-lg font-black text-foreground">
                  {member.name}
                </h3>
                <div className="flex items-center justify-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-wider">
                  <ShieldCheck size={12} />
                  <span>{member.role}</span>
                </div>
              </div>

              
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
