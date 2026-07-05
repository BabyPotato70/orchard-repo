import React from "react";
import { Heart, Sprout, Users, Award } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { timeline } from "../data/Content";

const values = [
  {
    Icon: Heart,
    title: "Quality First",
    desc: "We'd rather sell fewer apples than compromise on quality. Every apple that bears our name meets strict standards.",
  },
  {
    Icon: Sprout,
    title: "Sustainable Farming",
    desc: "We use organic manure, minimal pesticides, and traditional farming wisdom passed down through generations.",
  },
  {
    Icon: Users,
    title: "Fair Trade",
    desc: "We ensure fair wages and good working conditions for all our orchard workers and packing staff.",
  },
  {
    Icon: Award,
    title: "Heritage & Trust",
    desc: "Over 35 years of trusted relationships with wholesalers, retailers, and direct customers across India.",
  },
];

const About = () => {
  return (
    <div className="page-transition pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-blue-400 mb-4 fade-up">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight gradient-text fade-up-delay-1">
              Three Decades of
              <br />
              Growing Excellence
            </h2>
            <p className="text-sm text-neutral-400 mt-6 leading-relaxed fade-up-delay-2">
              Manohar Orchard was established in 1990 in the serene village of
              Chhajpur, nestled in the Jubbal valley of Shimla district. What
              began as a small family orchard has grown into one of the most
              respected apple-growing operations in the region.
            </p>
            <p className="text-sm text-neutral-400 mt-4 leading-relaxed fade-up-delay-3">
              Our founder, inspired by the rich apple-growing heritage of
              Himachal Pradesh, planted the first saplings with a simple belief:
              that the unique combination of Himalayan altitude, pristine water,
              and organic soil could produce apples unlike any other in the
              world.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden glow-blue">
            <img
              src="https://picsum.photos/seed/about-family-91/700/900.jpg"
              alt="Family"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <SectionHeading eyebrow="Our Values" title="What We Stand For" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30 card-hover text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center mb-4">
                <v.Icon size={20} className="text-green-400" />
              </div>
              <h3 className="text-sm font-medium">{v.title}</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <SectionHeading eyebrow="Our Journey" title="Milestones" />
        <div className="max-w-2xl mx-auto">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-6 mb-8 last:mb-0 group">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full border-2 border-green-500 bg-[#050505] group-hover:bg-green-500 transition-colors" />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-white/10 mt-2" />
                )}
              </div>
              <div className="pb-8">
                <span className="text-xs font-medium text-green-400">
                  {item.year}
                </span>
                <p className="text-sm text-neutral-300 mt-1 leading-relaxed">
                  {item.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;
