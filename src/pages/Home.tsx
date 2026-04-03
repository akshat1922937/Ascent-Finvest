import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Users, Target, ChevronRight, PieChart, Clock, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-accent/20 text-primary text-sm font-bold rounded-full mb-6 border border-accent/30">
                  Trusted for 20+ Years
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                  Building Your Wealth, <br />
                  <span className="text-secondary">One Step at a Time.</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Simple, honest, and professional mutual fund guidance for your family's future. We help you navigate market-linked returns with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/contact"
                    className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary transition-all shadow-xl hover:shadow-blue-200"
                  >
                    Start Investing Now
                  </Link>
                  <Link
                    to="/tools"
                    className="bg-white text-secondary border-2 border-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-all"
                  >
                    Calculate Your SIP
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1573163281530-5be9c89b997e?auto=format&fit=crop&w=800&q=80"
                  alt="Financial Planning"
                  className="rounded-3xl shadow-2xl border-8 border-white"
                  referrerPolicy="no-referrer"
                />
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce-slow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Experience</p>
                      <p className="text-xl font-bold text-primary">20+ Years</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce-slow delay-700">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Users className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Clients</p>
                      <p className="text-xl font-bold text-primary">1000+</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Award className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary">20+</h3>
              <p className="text-gray-500 text-sm">Years of Trust</p>
            </div>
            <div className="space-y-2">
              <ShieldCheck className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary">AMFI</h3>
              <p className="text-gray-500 text-sm">Registered Distributor</p>
            </div>
            <div className="space-y-2">
              <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary">1000+</h3>
              <p className="text-gray-500 text-sm">Happy Families</p>
            </div>
            <div className="space-y-2">
              <Clock className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary">24/7</h3>
              <p className="text-gray-500 text-sm">Support Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Best */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Do Best</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We focus on simple, effective strategies to help you grow your money over the long term.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Goal Planning",
                desc: "We help you plan for big events like retirement or your child's education.",
                icon: <Target className="w-8 h-8" />,
              },
              {
                title: "SIP Guidance",
                desc: "Start small and grow big with regular, disciplined monthly investments.",
                icon: <TrendingUp className="w-8 h-8" />,
              },
              {
                title: "Risk Profiling",
                desc: "We understand how much risk you can take before suggesting any fund.",
                icon: <ShieldCheck className="w-8 h-8" />,
              },
              {
                title: "Portfolio Review",
                desc: "Regularly checking your investments to ensure they are on the right track.",
                icon: <PieChart className="w-8 h-8" />,
              },
              {
                title: "Tax Saving",
                desc: "We can help in tax saving by offering ELSS legally.",
                icon: <Award className="w-8 h-8" />,
              },
              {
                title: "Retirement Planning",
                desc: "Ensuring you have enough money to live comfortably after you stop working.",
                icon: <Clock className="w-8 h-8" />,
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 bg-gray-100 text-secondary rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Why Choose Us"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Ascent Finvest?</h2>
              <p className="text-gray-600 leading-relaxed">
                We believe in simplicity. Investing shouldn't be complicated. We take the stress out of managing your money so you can focus on what matters most to you.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Unbiased Advice", desc: "We suggest funds based on performance and your needs, not commissions." },
                  { title: "Regular Monitoring", desc: "We don't just invest and forget. We track your portfolio constantly." },
                  { title: "Easy Documentation", desc: "We handle all the paperwork and digital setup for you." },
                  { title: "20+ Years Legacy", desc: "Two decades of experience in navigating Indian market cycles." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 bg-gray-100 text-secondary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={14} className="font-bold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10 lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Calculate Your Future Wealth</h2>
              <p className="text-blue-100 text-lg mb-8">
                Use our simple SIP calculator to see how small monthly savings can grow into a large amount over time.
              </p>
              <Link
                to="/tools"
                className="inline-flex items-center bg-white text-secondary px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all"
              >
                Try SIP Calculator <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block opacity-20">
              <PieChart className="w-full h-full p-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Simple 5-Step Process</h2>
            <p className="text-gray-600">How we work together to build your financial future.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Understand Goals", desc: "We talk about what you want to achieve." },
              { step: "02", title: "Risk Profiling", desc: "We check your comfort level with market changes." },
              { step: "03", title: "Recommendation", desc: "We suggest funds that fit your needs." },
              { step: "04", title: "Investment", desc: "We help you start your investment journey." },
              { step: "05", title: "Review", desc: "We meet regularly to check your progress." }
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 bg-white border-2 border-secondary text-secondary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Footer Note */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-primary font-bold italic">
            "Mutual Fund investments are subject to market risks, read all scheme related documents carefully."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
