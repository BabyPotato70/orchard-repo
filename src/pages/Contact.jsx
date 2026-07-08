import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Orchard from "../Assets/himachal-covered-apple-trees.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      Icon: MapPin,
      label: "Address",
      value: "Chhajpur, Jubbal,\nDist. Shimla, HP – 171205",
    },
    {
      Icon: Phone,
      label: "Phone",
      value: "+91 8800618248\n+91 7011655017",
    },
    {
      Icon: Mail,
      label: "Email",
      value: "info@manoharorchard.com\norders@manoharorchard.com",
    },
    {
      Icon: Clock,
      label: "Working Hours",
      value: "Mon – Sat: 8 AM – 6 PM\nSunday: By appointment",
    },
  ];

  // const socials = [
  //   { Icon: Instagram, label: "Instagram" },
  //   { Icon: Facebook, label: "Facebook" },
  //   { Icon: Youtube, label: "YouTube" },
  // ];

  return (
    <div className="page-transition pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Get in Touch"
          title="We'd Love to Hear From You"
          subtitle="Whether you're looking to place a bulk order, have questions about our varieties, or want to visit our orchard — reach out to us."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/5 bg-neutral-900/30 p-8">
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 fade-up">
                  <CheckCircle size={18} className="text-green-400" />
                  <span className="text-sm text-green-400">
                    Thank you! We'll get back to you within 24 hours.
                  </span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-neutral-400 mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-neutral-400 mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-medium text-neutral-400 mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="+91 8800618248"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-neutral-400 mb-2 block">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#111]">
                        Select a subject
                      </option>
                      <option value="bulk" className="bg-[#111]">
                        Bulk Order
                      </option>
                      <option value="retail" className="bg-[#111]">
                        Retail Order
                      </option>
                      <option value="visit" className="bg-[#111]">
                        Orchard Visit
                      </option>
                      <option value="partnership" className="bg-[#111]">
                        Business Partnership
                      </option>
                      <option value="other" className="bg-[#111]">
                        Other
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-400 mb-2 block">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 px-8 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2"
                >
                  Send Message <Send size={14} />
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info Card */}
            <div className="rounded-2xl border border-white/5 bg-neutral-900/30 p-6">
              <h3 className="text-sm font-medium mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center shrink-0">
                      <item.Icon size={14} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500">
                        {item.label}
                      </div>
                      <div className="text-sm text-neutral-300 mt-0.5 whitespace-pre-line">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visit Card */}
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <img
                src={Orchard}
                alt="Location"
                className="w-full h-48 object-cover opacity-60"
              />
              <div className="p-5 bg-neutral-900/30">
                <h4 className="text-sm font-medium">Visit Our Orchard</h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  We welcome visitors during harvest season
                  (September–November). Please call ahead to schedule a visit.
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-xs text-green-400 hover:text-green-300 mt-3 transition-colors"
                >
                  <Phone size={12} /> Schedule a Visit
                </a>
              </div>
            </div>

            {/* Socials Card */}
            {/* <div className="rounded-2xl border border-white/5 bg-neutral-900/30 p-6">
              <h3 className="text-sm font-medium mb-3">Follow Us</h3>
              <div className="flex items-center gap-3">
                {socials.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="flex-1 h-10 rounded-lg border border-white/10 flex items-center justify-center gap-2 text-xs text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                  >
                    <Icon size={13} />
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
