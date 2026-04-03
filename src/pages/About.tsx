import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, TrendingUp, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl font-bold text-primary mb-6">20 Years of Helping Families Grow.</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Ascent Finvest was started with a simple idea: to make financial planning easy for everyone. We believe that you don't need to be a math expert to build wealth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Over the last two decades, we have guided thousands of families through market ups and downs. Our focus has always been on trust, transparency, and long-term relationships.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-secondary mb-1">2005</h3>
                <p className="text-sm text-gray-500 font-medium">Year Founded</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-secondary mb-1">1000+</h3>
                <p className="text-sm text-gray-500 font-medium">Families Served</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
              alt="Our Team"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-3xl p-12 md:p-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-gray-600">What makes Ascent Finvest different.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Client First",
                desc: "Your goals are our priority. We only suggest what's right for you.",
                icon: <Heart className="w-10 h-10 text-secondary" />,
              },
              {
                title: "Transparency",
                desc: "We believe in complete openness. No hidden costs or complex terms.",
                icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
              },
              {
                title: "Simple Language",
                desc: "No jargon. We explain everything in plain English that anyone can understand.",
                icon: <MessageSquare className="w-10 h-10 text-secondary" />,
              },
              {
                title: "Long-term Focus",
                desc: "We don't chase quick gains. We build wealth steadily over time.",
                icon: <TrendingUp className="w-10 h-10 text-secondary" />,
              }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 italic leading-relaxed">
            "To empower every Indian family with the knowledge and tools to achieve financial freedom through disciplined, long-term investing."
          </p>
        </div>
      </div>
    </div>
  );
};

import { MessageSquare } from 'lucide-react';

export default About;
