import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Calendar,
  Mountain,
  Apple,
  Shield,
  Droplets,
  HandMetal,
  Leaf,
  Phone,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { appleVarieties } from "../data/Content";
import backimgae from "../Assets/apple-tree-orchard-red.jpg";
import ApplePicking from "../Assets/Apple-picking.webp";

const Home = () => {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={backimgae}
            alt="Orchard"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6 fade-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-green-400">
                Harvest Season 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] fade-up-delay-1">
              Premium
              <br />
              <span className="text-neutral-400">Himalayan</span>
              <br />
              Apples
            </h1>
            <p className="text-sm md:text-base text-neutral-400 mt-8 max-w-md leading-relaxed fade-up-delay-2">
              Growing premium apples and pears in Jubbal, Himachal Pradesh since
              1990. Hand-picked from our family orchard at 6,500 ft in the heart
              of the Himalayas.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-10 fade-up-delay-3">
              <Link
                to="/gallery"
                className="h-12 px-8 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 hover:bg-neutral-200 transition-colors"
              >
                Explore Varieties <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="h-12 px-8 border border-white/10 text-sm font-medium rounded-full flex items-center gap-2 hover:border-white/30 hover:bg-white/5 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={20} className="text-neutral-500" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-5 border-y border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "1990", label: "Established", Icon: Calendar },
              { num: "6,500ft", label: "Altitude", Icon: Mountain },
              { num: "8+", label: "Varieties", Icon: Apple },
              { num: "35+", label: "Years of Trust", Icon: Shield },
            ].map((s, i) => (
              <div
                key={i}
                className="text-center fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center">
                  <s.Icon size={20} className="text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-medium tracking-tight">
                  {s.num}
                </div>
                <div className="text-xs text-neutral-500 mt-1 tracking-wider uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apples */}
      <section className="py-15 md:py-22">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our Finest"
            title="Featured Varieties"
            subtitle="Each variety is carefully cultivated in the pristine climate of Jubbal, where cool mountain air and abundant sunshine create apples of extraordinary quality."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appleVarieties.slice(0, 4).map((apple, i) => (
              <div
                key={i}
                className="group card-hover rounded-2xl border border-white/5 bg-neutral-900/30 overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={apple.image}
                    alt={apple.name}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${apple.color}`}
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-medium tracking-wider uppercase text-white/70 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      Premium
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium tracking-tight">
                    {apple.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {apple.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
            >
              View All Varieties{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-10 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="From Our Orchard to Your Table"
                center={false}
              />
              <div className="space-y-6 mt-8">
                {[
                  {
                    Icon: Mountain,
                    title: "Himalayan Altitude",
                    desc: "At 6,500 ft, our apples develop thicker skins, crunchier texture, and more concentrated sugars.",
                  },
                  {
                    Icon: Droplets,
                    title: "Pristine Water",
                    desc: "Irrigated with pure mountain spring water from the Himalayan ranges — no chemicals, no compromise.",
                  },
                  {
                    Icon: HandMetal,
                    title: "Hand Picked",
                    desc: "Every single apple is hand-picked by experienced orchardists to prevent bruising and ensure quality.",
                  },
                  {
                    Icon: Leaf,
                    title: "No Wax Coating",
                    desc: "Our apples come to you in their natural state — no artificial wax, no polish, just pure fruit.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:border-green-500/30 transition-colors">
                      <item.Icon size={18} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden glow-blue">
                <img
                  src={ApplePicking}
                  alt="Our apples"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#111] border border-white/10 rounded-2xl p-5 glow-blue-strong">
                <div className="text-3xl font-medium text-green-400">100%</div>
                <div className="text-xs text-neutral-400 mt-1">
                  Natural & Fresh
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/cta-orchard-wide-33/1920/600.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight gradient-text">
            Taste the Difference of Himalayan Apples
          </h2>
          <p className="text-sm text-neutral-400 mt-6 max-w-lg mx-auto leading-relaxed">
            Order fresh from our orchard. Bulk and retail orders welcome. We
            ship across India with careful cold-chain packaging.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <Link
              to="/contact"
              className="h-12 px-8 bg-white text-black text-sm font-medium rounded-full flex items-center gap-2 hover:bg-neutral-200 transition-colors"
            >
              Place an Order <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+919876543210"
              className="h-12 px-8 border border-white/10 text-sm font-medium rounded-full flex items-center gap-2 hover:border-white/30 hover:bg-white/5 transition-all"
            >
              <Phone size={14} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
