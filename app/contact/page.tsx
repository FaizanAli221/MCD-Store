"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-8xl px-4 md:px-8 py-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-ink">
            Get In Touch
          </h1>
          <p className="text-sm text-ink/70">
            Have a question about sizing, custom orders, or your delivery? Our team is here to assist you 6 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details */}
          <div className="lg:col-span-5 bg-cream border border-line p-8 rounded-lg space-y-8">
            <h2 className="text-lg font-bold uppercase tracking-wider text-ink border-b border-line pb-4">
              Contact Information
            </h2>

            <div className="space-y-6 text-sm text-ink">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-paper rounded border border-line text-ink">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-ink/50">
                    Phone / WhatsApp
                  </span>
                  <a href="tel:+923264382910" className="font-semibold hover:underline">
                    +92 326 4382910
                  </a>
                  <p className="text-xs text-ink/60">Mon-Fri 11am-6pm PKT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-paper rounded border border-line text-ink">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-ink/50">
                    Email Support
                  </span>
                  <a href="mailto:info@mcd.com.pk" className="font-semibold hover:underline">
                    info@mcd.com.pk
                  </a>
                  <p className="text-xs text-ink/60">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-paper rounded border border-line text-ink">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-ink/50">
                    Headquarters
                  </span>
                  <p className="font-semibold">MCD Sports Headquarters</p>
                  <p className="text-xs text-ink/60">Industrial Estate, Sialkot / Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-paper rounded border border-line text-ink">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-ink/50">
                    Working Hours
                  </span>
                  <p className="font-semibold">Monday — Saturday</p>
                  <p className="text-xs text-ink/60">11:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-paper border border-line p-8 rounded-lg">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 size={48} className="mx-auto text-green-700" />
                <h3 className="text-xl font-bold text-ink">Message Sent Successfully!</h3>
                <p className="text-sm text-ink/70">
                  Thank you for contacting MCD Sports. A customer specialist will reach out to <strong>{email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-ink text-paper text-xs font-semibold rounded"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-lg font-bold uppercase tracking-wider text-ink border-b border-line pb-4">
                  Send Us A Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-cream border border-line rounded text-ink focus:outline-none focus:border-ink"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-cream border border-line rounded text-ink focus:outline-none focus:border-ink"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Subject / Order Number
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Size exchange inquiry"
                    className="w-full px-3.5 py-2.5 text-sm bg-cream border border-line rounded text-ink focus:outline-none focus:border-ink"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you today?"
                    className="w-full px-3.5 py-2.5 text-sm bg-cream border border-line rounded text-ink focus:outline-none focus:border-ink"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-ink text-paper text-xs font-bold uppercase tracking-wider rounded hover:bg-ink/90 transition-colors"
                >
                  <Send size={14} />
                  Submit Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
