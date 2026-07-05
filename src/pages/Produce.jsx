import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { produceSteps, boxTypes } from "../data/content";

const Produce = () => {
  const packingSeeds = [
    "box-apple-pack-41",
    "box-stack-42",
    "box-closeup-43",
    "box-warehouse-44",
    "box-label-45",
    "box-foam-46",
    "box-loaded-47",
    "box-fresh-48",
  ];

  return (
    <div className="page-transition pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Our Process"
          title="From Tree to Box"
          subtitle="Every apple that leaves Manohar Orchard goes through a meticulous process to ensure you receive only the finest quality fruit."
        />

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {produceSteps.map((step, i) => {
            const IconComponent = getIcon(step.icon);
            return (
              <div
                key={i}
                className="card-hover rounded-2xl border border-white/5 bg-neutral-900/30 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${step.seed}/600/400.jpg`}
                    alt={step.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-xs font-medium">
                    {i + 1}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent size={16} className="text-green-400" />
                    <h3 className="text-sm font-medium">{step.title}</h3>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Packing Gallery */}
        <SectionHeading
          eyebrow="Packing Gallery"
          title="Carefully Packed, Delivered Fresh"
          subtitle="Our packing facility ensures every apple is protected during transit."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {packingSeeds.map((seed, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden border border-white/5 aspect-square"
            >
              <img
                src={`https://picsum.photos/seed/${seed}/500/500.jpg`}
                alt="Packing"
                className="w-full h-full object-cover img-zoom"
              />
            </div>
          ))}
        </div>

        {/* Box Types */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Packaging Options"
            title="Choose Your Box"
            subtitle="We offer multiple packaging options to suit your needs — from retail to bulk wholesale."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {boxTypes.map((box, i) => (
              <div
                key={i}
                className="card-hover rounded-2xl border border-white/5 bg-neutral-900/30 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${box.seed}/600/400.jpg`}
                    alt={box.name}
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium">{box.name}</h3>
                    <span className="text-[10px] font-medium tracking-wider uppercase text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                      {box.weight}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                    {box.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-sm font-medium text-white">
                      {box.price}
                    </span>
                    <Link
                      to="/contact"
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      Order <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Produce;

/* Helper to dynamically get icon from lucide-react */
import {
  Hand,
  Filter,
  Package,
  Thermometer,
  CheckCircle,
  Truck,
} from "lucide-react";

const iconMap = {
  Hand,
  Filter,
  Package,
  Thermometer,
  CheckCircle,
  Truck,
};

function getIcon(name) {
  return iconMap[name] || Package;
}
