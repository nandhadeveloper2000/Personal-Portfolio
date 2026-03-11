"use client";

import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import toast from "react-hot-toast";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiUser,
  FiMessageSquare,
  FiEdit3,
  FiLoader,
  FiSmartphone,
} from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "../data/portfolio";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company: string;
  formStartedAt: number;
};

const createInitialForm = (): FormData => ({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  company: "",
  formStartedAt: Date.now(),
});

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(createInitialForm());
  const [loading, setLoading] = useState(false);

  const emailValid = useMemo(() => {
    if (!formData.email) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  }, [formData.email]);

  const phoneValid = useMemo(() => {
    if (!formData.phone) return true;
    return /^[0-9+\-\s()]{7,20}$/.test(formData.phone);
  }, [formData.phone]);

  const isFormValid =
    formData.name.trim().length >= 2 &&
    emailValid &&
    phoneValid &&
    formData.email.trim().length > 0 &&
    formData.phone.trim().length >= 7 &&
    formData.subject.trim().length >= 3 &&
    formData.message.trim().length >= 10;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    if (!isFormValid) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to send message.");
      }

      toast.success("Message sent successfully.", { id: toastId });
      setFormData(createInitialForm());
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong.",
        { id: toastId }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-30 bg-[#030712]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.16),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="absolute left-1/2 top-10 -z-10 h-95 w-95 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionTitle
            eyebrow="Contact"
           title="Let’s turn ideas into powerful digital products"
description="I collaborate with teams, founders, and businesses to build scalable web and mobile applications. If you have an opportunity, project, or idea, let’s discuss how we can bring it to life."
            center
          />
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(99,102,241,0.10),rgba(168,85,247,0.06),rgba(236,72,153,0.08))]" />

            <div className="relative">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-200">
                Available for work
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                Get in touch
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                I’m available for MERN stack, Next.js, and React Native work,
                including freelance projects, product development, and full-time
                opportunities.
              </p>

              <div className="mt-8 space-y-5">
                <InfoItem
                  icon={<FiMail className="h-5 w-5" />}
                  label="Email"
                  value={personalInfo.email}
                  href={`mailto:${personalInfo.email}`}
                  iconClass="text-indigo-300"
                />

                <InfoItem
                  icon={<FiPhone className="h-5 w-5" />}
                  label="Phone"
                  value={personalInfo.phone}
                  href={`tel:${personalInfo.phone}`}
                  iconClass="text-pink-300"
                />

                <InfoItem
                  icon={<FiMapPin className="h-5 w-5" />}
                  label="Location"
                  value={personalInfo.location}
                  iconClass="text-violet-300"
                />
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-slate-200 transition hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
                  aria-label="GitHub"
                >
                  <FiGithub className="h-5 w-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-slate-200 transition hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500/10 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(99,102,241,0.05),rgba(236,72,153,0.06))]" />

            <form onSubmit={handleSubmit} className="relative space-y-5">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <InputField
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  icon={<FiUser className="h-4 w-4" />}
                  minLength={2}
                  maxLength={80}
                />

                <InputField
                  label="Mobile Number"
                  name="phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  icon={<FiSmartphone className="h-4 w-4" />}
                  minLength={7}
                  maxLength={20}
                  error={!phoneValid ? "Please enter a valid mobile number." : ""}
                />
              </div>

              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                icon={<FiMail className="h-4 w-4" />}
                minLength={5}
                maxLength={120}
                error={!emailValid ? "Please enter a valid email address." : ""}
              />

              <InputField
                label="Subject"
                name="subject"
                type="text"
                placeholder="Enter message subject"
                value={formData.subject}
                onChange={handleChange}
                icon={<FiEdit3 className="h-4 w-4" />}
                minLength={3}
                maxLength={150}
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>

                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-4 text-slate-400">
                    <FiMessageSquare className="h-4 w-4" />
                  </span>

                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={3000}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-500 transition focus:border-violet-400/50 focus:bg-white/10"
                  />
                </div>

                <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Minimum 10 characters</span>
                  <span>{formData.message.length}/3000</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !isFormValid}
                className="inline-flex min-w-52.5 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3.5 font-semibold text-white shadow-[0_12px_35px_rgba(168,85,247,0.35)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <FiLoader className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type InputFieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  icon: React.ReactNode;
  minLength?: number;
  maxLength?: number;
  error?: string;
};

function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  icon,
  minLength,
  maxLength,
  error,
}: InputFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>

      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>

        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          minLength={minLength}
          maxLength={maxLength}
          className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-white outline-none placeholder:text-slate-500 transition focus:border-indigo-400/50 focus:bg-white/10"
        />
      </div>

      {error ? <p className="mt-2 text-xs text-rose-300">{error}</p> : null}
    </div>
  );
}

type InfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  iconClass?: string;
};

function InfoItem({ icon, label, value, href, iconClass }: InfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 ${iconClass ?? ""}`}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-400">{label}</p>

        {href ? (
          <a
            href={href}
            className="text-white transition hover:text-indigo-300"
          >
            {value}
          </a>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
    </div>
  );
}