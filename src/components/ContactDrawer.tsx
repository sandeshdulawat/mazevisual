"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, CheckCircle } from "lucide-react";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    discipline: "Branding",
    currency: "$",
    budget: "10k - 25k",
    customBudget: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
          setForm({
            name: "",
            email: "",
            discipline: "Branding",
            currency: "$",
            budget: "10k - 25k",
            customBudget: "",
            message: "",
          });
        }, 2500);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex justify-end" style={{ zIndex: 9999 }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto z-10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-neutral-900" />
                  <h3 className="font-serif-custom text-2xl text-neutral-900 font-bold">
                    Work with MazeVisual
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-custom text-3xl text-neutral-900 font-bold">
                    Message Received!
                  </h4>
                  <p className="text-sm text-neutral-600 max-w-xs">
                    Thank you for reaching out. Our creative director will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-500 mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Julian Vance"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-500 mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="julian@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-500 mb-1">
                      Discipline of Interest
                    </label>
                    <select
                      value={form.discipline}
                      onChange={(e) => setForm({ ...form, discipline: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors"
                    >
                      <option value="Branding">Branding & Identity</option>
                      <option value="Architecture">Architecture</option>
                      <option value="Digital">Digital & Cyber UI</option>
                      <option value="Visualization">3D Visualization</option>
                      <option value="Interior">Interior Design</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-semibold uppercase text-neutral-500">
                        Project Budget
                      </label>
                      <select
                        value={form.currency}
                        onChange={(e) => setForm({ ...form, currency: e.target.value })}
                        className="text-xs bg-transparent border-none text-neutral-600 focus:outline-none cursor-pointer hover:text-neutral-900 transition-colors"
                      >
                        <option value="$">USD ($)</option>
                        <option value="€">EUR (€)</option>
                        <option value="£">GBP (£)</option>
                        <option value="₹">INR (₹)</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {["5k - 10k", "10k - 25k", "25k+", "Custom"].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setForm({ ...form, budget: b })}
                          className={`py-2 text-xs rounded-md border font-medium transition-colors ${form.budget === b
                              ? "bg-neutral-900 text-white border-neutral-900"
                              : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50"
                            }`}
                        >
                          {b === "Custom" ? b : `${form.currency}${b}`}
                        </button>
                      ))}
                    </div>
                    {form.budget === "Custom" && (
                      <input
                        type="text"
                        placeholder={`e.g. ${form.currency}50k+`}
                        value={form.customBudget}
                        onChange={(e) => setForm({ ...form, customBudget: e.target.value })}
                        className="mt-2 w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-500 mb-1">
                      Project Overview
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your project vision, timeline, and targets..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 bg-neutral-900 text-white rounded-lg font-medium text-sm hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Commission Inquiry"}</span>
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 border-t border-neutral-100 text-center text-xs text-neutral-400">
              MazeVisual Creative Studio &copy; {new Date().getFullYear()} &bull; All Rights Reserved
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
