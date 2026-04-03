"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Car Accident",
  "Truck Accident",
  "Motorcycle Accident",
  "Medical Malpractice",
  "Workers' Compensation",
  "Wrongful Death",
  "Slip and Fall",
  "Construction Accident",
  "Other Injury",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (submitted) {
    return (
      <div className="bg-success/10 border border-success/30 rounded-xl p-10 text-center">
        <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
        <h3 className="text-xl font-heading font-semibold text-primary mb-2">
          Case Review Submitted!
        </h3>
        <p className="text-text-muted text-sm">
          Thank you for reaching out. Our team will review your case and get
          back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary mb-1.5"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary ${
            errors.name ? "border-red-400" : "border-border"
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-xs mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-primary mb-1.5"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary ${
            errors.email ? "border-red-400" : "border-border"
          }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-xs mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-primary mb-1.5"
        >
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary ${
            errors.phone ? "border-red-400" : "border-border"
          }`}
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-xs mt-1">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-primary mb-1.5"
        >
          Type of Injury
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => handleChange("service", e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
        >
          <option value="">Select injury type...</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary mb-1.5"
        >
          Tell Us What Happened{" "}
          <span className="text-text-muted text-xs">(Optional)</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary resize-vertical"
          placeholder="Briefly describe your accident or injury..."
        />
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
          {submitError}
        </div>
      )}

      <div className="flex items-center justify-center gap-4 text-xs text-text-muted mb-4">
        <span>Free & Confidential</span>
        <span className="w-1 h-1 rounded-full bg-text-muted" />
        <span>No Fee Unless We Win</span>
        <span className="w-1 h-1 rounded-full bg-text-muted" />
        <span>Available 24/7</span>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Get My Free Case Review
          </>
        )}
      </button>

      <p className="text-[11px] text-gray-400 leading-relaxed mt-3">
        Submitting this form does not establish an attorney-client relationship.
        Please do not include confidential or sensitive information in your
        message.
      </p>
    </form>
  );
}
