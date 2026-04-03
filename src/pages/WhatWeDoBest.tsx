import React from 'react';
import { Target, TrendingUp, ShieldCheck, PieChart, Award, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const WhatWeDoBest = () => {
  const usps = [
    {
      title: "Goal Planning",
      desc: "We help you plan for big events like retirement or your child's education.",
      icon: <Target className="w-10 h-10" />,
    },
    {
      title: "SIP Guidance",
      desc: "Start small and grow big with regular, disciplined monthly investments.",
      icon: <TrendingUp className="w-10 h-10" />,
    },
    {
      title: "Risk Profiling",
      desc: "We understand how much risk you can take before suggesting any fund.",
      icon: <ShieldCheck className="w-10 h-10" />,
    },
    {
      title: "Portfolio Review",
      desc: "Regularly checking your investments to ensure they are on the right track.",
      icon: <PieChart className="w-10 h-10" />,
    },
    {
      title: "Tax Saving",
      desc: "Helping you save tax legally through ELSS and other smart options.",
      icon: <Award className="w-10 h-10" />,
    },
    {
      title: "Retirement Planning",
      desc: "Ensuring you have enough money to live comfortably after you stop working.",
      icon: <Clock className="w-10 h-10" />,
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">What We Do Best</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our unique approach focuses on simplicity, trust, and your long-term financial success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-white text-secondary rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                {usp.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{usp.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-primary rounded-3xl text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Experience the Ascent Advantage</h2>
          <p className="text-slate-200 mb-8 max-w-xl mx-auto">
            Join thousands of families who trust us with their financial future.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
          >
            Get Started Now <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoBest;
