import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Target, ShieldCheck, PieChart, Clock, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Mutual Fund Distribution",
      desc: "Access a wide range of mutual fund schemes from top AMCs. We help you pick the right ones based on your goals.",
      icon: <PieChart className="w-10 h-10" />,
      features: ["Equity Funds", "Debt Funds", "Hybrid Funds", "Index Funds"]
    },
    {
      title: "SIP (Systematic Investment Plan)",
      desc: "Start small with as little as ₹500 per month. Build a large corpus over time through regular investing.",
      icon: <TrendingUp className="w-10 h-10" />,
      features: ["Monthly Savings", "Cost Averaging", "Compounding Benefit", "Flexible Amounts"]
    },
    {
      title: "Goal-Based Planning",
      desc: "Planning for your child's education, marriage, or a dream home? We create a roadmap for every milestone.",
      icon: <Target className="w-10 h-10" />,
      features: ["Education Fund", "Marriage Fund", "Home Purchase", "Travel Planning"]
    },
    {
      title: "Retirement Solutions",
      desc: "Ensure a steady income after you stop working. We help you build a retirement nest egg that lasts.",
      icon: <Clock className="w-10 h-10" />,
      features: ["Pension Planning", "Wealth Preservation", "Inflation Protection", "Regular Income"]
    },
    {
      title: "Tax Saving (ELSS)",
      desc: "We can help in tax saving by offering ELSS while growing your money through equity investments.",
      icon: <Award className="w-10 h-10" />,
      features: ["Section 80C Benefit", "Shortest Lock-in (3yrs)", "Potential for Growth", "Easy to Start"]
    },
    {
      title: "Risk Management",
      desc: "We assess your risk appetite and suggest a balanced portfolio to protect your capital during market volatility.",
      icon: <ShieldCheck className="w-10 h-10" />,
      features: ["Risk Assessment", "Portfolio Balancing", "Diversification", "Safety First"]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of financial services designed to help you build wealth steadily and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="w-16 h-16 bg-gray-100 text-secondary rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                {service.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-secondary font-bold hover:gap-2 transition-all"
              >
                Learn More <ChevronRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-primary rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Not sure where to start?</h2>
          <p className="text-slate-200 mb-8 max-w-xl mx-auto">
            Schedule a free consultation with our experts to discuss your financial goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all inline-block"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
