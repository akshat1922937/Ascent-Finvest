import React from 'react';
import { motion } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left gap-4 group"
      >
        <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-secondary' : 'text-primary group-hover:text-secondary'}`}>
          {question}
        </h3>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-secondary text-white rotate-180' : 'bg-gray-100 text-primary'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="overflow-hidden"
        >
          <p className="pt-4 text-gray-600 leading-relaxed">
            {answer}
          </p>
        </motion.div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is a Mutual Fund?",
      answer: "A mutual fund is a pool of money collected from many investors to invest in stocks, bonds, and other securities. It is managed by professional fund managers."
    },
    {
      question: "Is my money safe in Mutual Funds?",
      answer: "Mutual funds are subject to market risks, meaning their value can go up or down. However, they are regulated by SEBI in India, which ensures transparency and safety of the process."
    },
    {
      question: "What is an SIP?",
      answer: "SIP stands for Systematic Investment Plan. It is a way to invest a small, fixed amount in mutual funds every month, helping you build wealth over time without needing a large lump sum."
    },
    {
      question: "How much money do I need to start?",
      answer: "You can start an SIP with as little as ₹500 per month. There is no upper limit, so you can increase your investment as your income grows."
    },
    {
      question: "Can I withdraw my money anytime?",
      answer: "Most mutual funds are 'open-ended', meaning you can withdraw your money whenever you need it. Some funds, like ELSS (tax-saving), have a lock-in period of 3 years."
    },
    {
      question: "What are the returns I can expect?",
      answer: "Mutual fund returns are market-linked and not guaranteed. Historically, equity funds have provided good returns over the long term (5-10 years or more) compared to traditional savings."
    },
    {
      question: "Do I need to be an expert to invest?",
      answer: "No, that's where we come in! As your distributor, we help you understand the options and pick the right funds based on your goals and risk appetite."
    },
    {
      question: "How do I track my investments?",
      answer: "We provide you with regular statements and access to online portals where you can see your current portfolio value and performance anytime."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gray-100 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            Everything you need to know about starting your investment journey with Ascent Finvest.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-3xl border border-gray-200">
          <h3 className="text-xl font-bold text-primary mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8">We're happy to help you understand anything that's unclear.</p>
          <a
            href="https://wa.me/9198XXXXXXXX"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
