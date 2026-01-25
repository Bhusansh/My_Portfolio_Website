"use client";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Contact Section */}
        <section className="mx-auto max-w-6xl px-4py-10 lg:py-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get In Touch
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Let's Talk About Your Project
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Ready to bring your ideas to life? Send me a message and let's discuss how I can help you build amazing web applications.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="border-t border-neutral-200 bg-gradient-to-br from-white via-neutral-50 to-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-10 lg:grid-cols-2 lg:py-10">
            {/* Contact Info */}
            <div className="space-y-8 lg:sticky lg:top-20 lg:h-fit lg:self-start">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Let's Connect</h2>
                <p className="mt-3 text-neutral-600">
                  I'm always excited to hear about new projects and opportunities. Whether it's a quick question or a detailed proposal, I'll get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-lg shadow-black/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    📧
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Email</p>
                    <a
                      href="mailto:bhusansharma303@gmail.com"
                      className="text-sm font-medium text-neutral-600 hover:text-black"
                    >
                      bhusansharma303@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-lg shadow-black/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    💼
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/bhusan-sharma-94667a285/"
                      className="text-sm font-medium text-neutral-600 hover:text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bhusan Sharma
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-lg shadow-black/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    💻
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">GitHub</p>
                    <a
                      href="https://github.com/Bhusansh/"
                      className="text-sm font-medium text-neutral-600 hover:text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bhusansh
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-lg shadow-black/5">
                  <Image
                    src="/logo_bg.png"
                    alt="Esta Travels"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-2xl object-contain"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900">Esta Travels</p>
                    <a href="https://estatravels.in" className="text-sm font-medium text-neutral-600 hover:text-black">
                      estatravels.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-black/10 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-neutral-900">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-0"
                      placeholder="What's your name?"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-neutral-900">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-0"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-neutral-900">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-0"
                      placeholder="What do you want to talk about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-neutral-900">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full resize-vertical rounded-2xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-0"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-3xl bg-black px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-black/10 hover:bg-neutral-800 disabled:bg-neutral-400 disabled:shadow-none transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="mt-6 rounded-2xl bg-green-50 p-6 text-center">
                    <div className="mx-auto h-12 w-12 text-green-600">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-green-900">Message Sent!</h3>
                    <p className="mt-2 text-green-700">
                      Thanks for reaching out! I'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-6 rounded-2xl bg-red-50 p-6 text-center">
                    <div className="mx-auto h-12 w-12 text-red-600">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-2.948-1.5-3.816 0L2.697 16.126z"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-red-900">Oops!</h3>
                    <p className="mt-2 text-red-700">
                      Something went wrong. Please try again or send me an email directly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
