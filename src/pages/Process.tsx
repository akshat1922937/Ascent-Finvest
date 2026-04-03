import React from 'react';
import { motion } from 'motion/react';
import { Target, ShieldCheck, TrendingUp, Award, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process = () => {
  const steps = [
    {
      title: "Understand Goals",
      desc: "We start by talking about your dreams and goals. Whether it's a new home, child's education, or retirement, we listen first.",
      icon: <Target className="w-10 h-10" />,
      details: "We'll discuss your time horizon, financial status, and what you want to achieve."
    },
    {
      title: "Risk Profiling",
      desc: "Everyone is different. We check how much risk you're comfortable with before suggesting any investment.",
      icon: <ShieldCheck className="w-10 h-10" />,
      details: "We use a simple questionnaire to understand your risk appetite."
    },
    {
      title: "Recommendation",
      desc: "Based on your goals and risk profile, we suggest a mix of mutual funds that fit your needs.",
      icon: <Award className="w-10 h-10" />,
      details: "We explain why we chose these specific funds in simple terms."
    },
    {
      title: "Investment",
      desc: "We help you with the paperwork and set up your investment. It's quick, easy, and secure.",
      icon: <TrendingUp className="w-10 h-10" />,
      details: "Whether it's a lump sum or a monthly SIP, we handle the process for you."
    },
    {
      title: "Review",
      desc: "Investing is not a one-time thing. We meet regularly to check how your money is growing.",
      icon: <Clock className="w-10 h-10" />,
      details: "We'll suggest changes if your goals change or if the market needs a different approach."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Simple 5-Step Process</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a disciplined and transparent process to ensure your financial journey is smooth and successful.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-20 h-20 bg-gray-100 text-secondary rounded-3xl flex items-center justify-center mb-8 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold border-4 border-white">
                    {i + 1}
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">{step.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.desc}
                  </p>
                  <p className="text-sm text-gray-500 font-medium bg-gray-50 p-4 rounded-xl border-l-4 border-secondary">
                    {step.details}
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-xl border-8 border-white">
                  <img
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1554224155-6726b3ff858f' : i === 1 ? '1551836022-d5d88e9218df' : i === 2 ? '1454165833767-02a6e240f033' : i === 3 ? '1553729459-efe14ef6055d' : '1552664730-d307ca884978'}?auto=format&fit=crop&w=800&q=80`}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            to="/contact"
            className="bg-primary text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary transition-all shadow-xl inline-flex items-center gap-3"
          >
            Start Your Journey Today <ChevronRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Process;
