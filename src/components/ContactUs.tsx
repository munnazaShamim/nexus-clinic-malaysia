"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-brown">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm tracking-widest uppercase mb-4 block text-rose">
              Get in Touch
            </span>
            <h2 className="text-3xl lg:text-5xl text-white mb-8 font-georgia">
              Visit <span className="text-rose">Nexus Clinic</span>
            </h2>

            <div className="space-y-6 mb-12">
              {[
                { icon: MapPin, text: "LG 10, Wisma UOA II, Jalan Pinang, KL" },
                { icon: Phone, text: "016-702 5699 / 03-2163 5699" },
                { icon: Clock, text: "Mon - Sat: 9:00 AM - 6:00 PM" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-wine">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <span className="text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {["Facebook", "Instagram", "TikTok"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="px-5 py-2 rounded-full text-sm text-white border border-white/30 hover:bg-white/10 transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl mb-8 font-georgia text-brown">
                Book Your Consultation
              </h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    aria-label="Your name"
                    className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-brown placeholder:text-taupe"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email address"
                    className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-brown placeholder:text-taupe"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  aria-label="Phone number"
                  className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-brown placeholder:text-taupe"
                />
                <select
                  aria-label="Select treatment interest"
                  className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-taupe"
                >
                  <option>Select Treatment Interest</option>
                  <option>Facial & Anti-Aging</option>
                  <option>Weight Loss Program</option>
                  <option>Skin Treatments</option>
                  <option>Hair Restoration</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  aria-label="Your message"
                  className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine resize-none transition-colors text-brown placeholder:text-taupe"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl text-white font-medium tracking-wide bg-wine hover:bg-rose transition-colors"
                >
                  Submit Enquiry
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
