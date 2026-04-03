import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-primary mb-6">Get in Touch</h1>
            <p className="text-lg text-gray-600 mb-12">
              Ready to start your wealth creation journey? Or just have a quick question? We're here to help you in simple, clear language.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-secondary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Call or WhatsApp</h3>
                  <p className="text-gray-600">+91 92360 87951</p>
                  <p className="text-sm text-secondary font-medium mt-1">Available Daily, 9 AM - 9 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-secondary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Email Us</h3>
                  <p className="text-gray-600">shailendrasahu80@gmail.com</p>
                  <p className="text-sm text-gray-400 mt-1">We usually reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Our Office</h3>
                  <p className="text-gray-600">
                    A-3, Mehra Business Center, Adjacent Akashwani Kendra,<br />
                    Vidhan Sabha Marg, Lucknow. 226001
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-100 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 text-slate-800 font-bold mb-2">
                <MessageSquare size={20} />
                Quick Support
              </div>
              <p className="text-slate-700 text-sm">
                Prefer WhatsApp? Send us a "Hi" at +91 92360 87951 and we'll get back to you instantly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gray-100 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Message Received!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for reaching out. One of our experts will contact you shortly to discuss your financial goals.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-secondary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-gray-100 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-gray-100 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-gray-100 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">What are you interested in?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-gray-100 outline-none transition-all bg-white">
                    <option>Starting a new SIP</option>
                    <option>Retirement Planning</option>
                    <option>Child's Education Fund</option>
                    <option>Tax Saving (ELSS)</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Your Message (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-gray-100 outline-none transition-all"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-secondary transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
                <p className="text-center text-xs text-gray-400">
                  By clicking send, you agree to be contacted by Ascent Finvest experts.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
