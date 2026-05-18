"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/animations";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-xl overflow-hidden shadow-sm"
    >
      <motion.button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-brown pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-wine" />
        </motion.div>
      </motion.button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-taupe leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

const FAQ = (props: any) => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-wine font-medium tracking-wider uppercase text-sm">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-georgia text-brown mt-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {props.data.map((faq: any, i: number) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
