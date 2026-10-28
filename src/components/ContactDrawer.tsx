"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, CheckCircle } from "lucide-react";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CURRENCY_CONFIG: Record<
  string,
  {
    symbol: string;
    label: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    tiers: { id: string; display: string }[];
    customPlaceholder: string;
  }
> = {
  "₹": {
    symbol: "₹",
    label: "INR (₹)",
    namePlaceholder: "e.g. Aarav Sharma",
    emailPlaceholder: "aarav@company.com",
    tiers: [
      { id: "tier-1", display: "₹5k - ₹20k" },
      { id: "tier-2", display: "₹20k - ₹50k" },
      { id: "tier-3", display: "₹50k - ₹1.5L" },
    ],
    customPlaceholder: "e.g. ₹2,00,000+",
  },
  "$": {
    symbol: "$",
    label: "USD ($)",
    namePlaceholder: "e.g. Julian Vance",
    emailPlaceholder: "julian@company.com",
    tiers: [
      { id: "tier-1", display: "$60 - $250" },
      { id: "tier-2", display: "$250 - $600" },
      { id: "tier-3", display: "$600 - $1.8k" },
    ],
    customPlaceholder: "e.g. $2,500+",
  },
  "€": {
    symbol: "€",
    label: "EUR (€)",
    namePlaceholder: "e.g. Lucas Müller",
    emailPlaceholder: "lucas@company.eu",
    tiers: [
      { id: "tier-1", display: "€55 - €220" },
      { id: "tier-2", display: "€220 - €550" },
      { id: "tier-3", display: "€550 - €1.6k" },
    ],
    customPlaceholder: "e.g. €2,200+",
  },
  "£": {
    symbol: "£",
    label: "GBP (£)",
    namePlaceholder: "e.g. Oliver Davies",
    emailPlaceholder: "oliver@company.co.uk",
    tiers: [
      { id: "tier-1", display: "£50 - £180" },
      { id: "tier-2", display: "£180 - £450" },
      { id: "tier-3", display: "£450 - £1.4k" },
    ],
    customPlaceholder: "e.g. £2,000+",
  },
};

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    discipline: "Branding",
    currency: "₹",
    selectedTier: "tier-1",
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

    const currentConfig = CURRENCY_CONFIG[form.currency] || CURRENCY_CONFIG["₹"];
    const currentTier = currentConfig.tiers.find((t) => t.id === form.selectedTier);
    const budgetValue = form.selectedTier === "custom" ? "Custom" : (currentTier ? currentTier.display : "₹5k - ₹20k");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          budget: budgetValue,
        }),
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
            currency: "₹",
            selectedTier: "tier-1",
            customBudget: "",
            message: "",
          });
        }, 2500);
      } else {
        const errorData = await response.json().catch(() => null);
        alert(errorData?.error || "Failed to send message. Please try again.");
      }
    } catch (error: any) {
      alert(error?.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentConfig = CURRENCY_CONFIG[form.currency] || CURRENCY_CONFIG["₹"];

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
                      placeholder={currentConfig.namePlaceholder}
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
                      placeholder={currentConfig.emailPlaceholder}
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
                        className="text-xs bg-transparent border-none text-neutral-700 font-medium focus:outline-none cursor-pointer hover:text-neutral-900 transition-colors"
                      >
                        <option value="₹">INR (₹)</option>
                        <option value="$">USD ($)</option>
                        <option value="€">EUR (€)</option>
                        <option value="£">GBP (£)</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {currentConfig.tiers.map((t) => (
                        <button
                          type="button"
                          key={t.id}
                          onClick={() => setForm({ ...form, selectedTier: t.id })}
                          className={`py-2 text-xs rounded-md border font-medium transition-colors ${
                            form.selectedTier === t.id
                              ? "bg-neutral-900 text-white border-neutral-900"
                              : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50"
                          }`}
                        >
                          {t.display}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, selectedTier: "custom" })}
                        className={`py-2 text-xs rounded-md border font-medium transition-colors ${
                          form.selectedTier === "custom"
                            ? "bg-neutral-900 text-white border-neutral-900"
                            : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50"
                        }`}
                      >
                        Custom
                      </button>
                    </div>
                    {form.selectedTier === "custom" && (
                      <input
                        type="text"
                        placeholder={currentConfig.customPlaceholder}
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
