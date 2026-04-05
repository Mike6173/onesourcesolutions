"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SERVICES } from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactFormLight() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    if (!name || name.trim().length < 2) errs.name = "Please enter your full name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email address.";
    if (!phone || phone.replace(/\D/g, "").length < 10) errs.phone = "Please enter a valid phone number.";
    if (!message || message.trim().length < 10) errs.message = "Please include a brief message (at least 10 characters).";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstError = form.querySelector("[aria-invalid='true']");
      (firstError as HTMLElement)?.focus();
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-blue-800" />
        </div>
        <h3 className="text-gray-900 text-xl font-bold mb-2">Message Received!</h3>
        <p className="text-gray-600 leading-relaxed">
          Thank you for reaching out to One Source Solutions. We'll be in touch within 1 business day to discuss your estimate.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-blue-800 text-sm hover:text-blue-900 transition-colors duration-150"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4" role="alert">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-600 text-sm">Something went wrong. Please try again or call us directly at (516) 508-8865.</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name-light" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-blue-800" aria-hidden>*</span>
          </label>
          <input
            id="name-light"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-light-error" : undefined}
            placeholder="John Smith"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors duration-150 aria-[invalid=true]:border-red-400"
          />
          {errors.name && (
            <p id="name-light-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email-light" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address <span className="text-blue-800" aria-hidden>*</span>
          </label>
          <input
            id="email-light"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-light-error" : undefined}
            placeholder="john@example.com"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors duration-150 aria-[invalid=true]:border-red-400"
          />
          {errors.email && (
            <p id="email-light-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone-light" className="block text-sm font-medium text-gray-700 mb-1.5">
          Phone Number <span className="text-blue-800" aria-hidden>*</span>
        </label>
        <input
          id="phone-light"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-light-error" : undefined}
          placeholder="(516) 555-0123"
          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors duration-150 aria-[invalid=true]:border-red-400"
        />
        {errors.phone && (
          <p id="phone-light-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="service-light" className="block text-sm font-medium text-gray-700 mb-1.5">
          Service Needed
        </label>
        <select
          id="service-light"
          name="service"
          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors duration-150 appearance-none cursor-pointer"
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
          <option value="Multiple Services">Multiple Services</option>
          <option value="Not Sure">Not Sure, Need a Consultation</option>
        </select>
      </div>

      <div>
        <label htmlFor="message-light" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-blue-800" aria-hidden>*</span>
        </label>
        <textarea
          id="message-light"
          name="message"
          rows={5}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-light-error" : undefined}
          placeholder="Tell us about your property and what you need cleaned..."
          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors duration-150 resize-y min-h-[120px] aria-[invalid=true]:border-red-400"
        />
        {errors.message && (
          <p id="message-light-error" className="mt-1.5 text-xs text-red-500" role="alert">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-blue-800 text-white py-4 rounded-lg font-semibold text-sm hover:bg-blue-900 active:scale-95 transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-800/20"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send My Estimate Request"
        )}
      </button>

      <p className="text-center text-xs text-gray-500">
        We respond within 1 business day. Your information is kept private.
      </p>
    </form>
  );
}
