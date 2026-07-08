import React from "react";
import { Mountain, CloudRain, TreePine } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { seasons } from "../data/Content";
import photoSeeds1 from "../Assets/Apples0mountain.jpg";
import photoSeeds2 from "../Assets/Main-top.jpg";
import photoSeeds3 from "../Assets/Mountain-view.webp";
import photoSeeds5 from "../Assets/moreimages2.jpg";
import photoSeeds6 from "../Assets/moreimages3.webp";
import photoSeeds4 from "../Assets/Mian-image.jpg";
import MainImage from "../Assets/Main-one.jpg";

const orchardInfo = [
  {
    Icon: Mountain,
    title: "Location",
    text: "Chhajpur village, Jubbal tehsil, District Shimla. Located at 6,500 ft altitude in the heart of Himachal's apple belt.",
  },
  {
    Icon: CloudRain,
    title: "Climate",
    text: "Temperate climate with cold winters for dormancy and warm, sunny summers perfect for fruit development. Annual rainfall: 1200mm.",
  },
  {
    Icon: TreePine,
    title: "Orchard Composition",
    text: "Over 2,000 apple trees across 8+ varieties, along with pear and cherry trees. Age range: 5 to 35 years.",
  },
];

const photoSeeds = [
  photoSeeds4,
  photoSeeds2,
  photoSeeds3,
  photoSeeds1,
  photoSeeds5,
  photoSeeds6,
];

const Orchard = () => {
  return (
    <div className="page-transition pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Our Orchard"
          title="Where Magic Grows"
          subtitle="Nestled in the picturesque Jubbal valley of Himachal Pradesh, our orchard spans across terraced slopes at an altitude of 6,500 feet, surrounded by snow-capped peaks and ancient deodar forests."
        />

        {/* Panorama */}
        <div className="rounded-2xl overflow-hidden mb-12 glow-blue">
          <img
            src={MainImage}
            alt="Orchard Panorama"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {orchardInfo.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30 card-hover"
            >
              <div className="w-10 h-10 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center mb-4">
                <item.Icon size={18} className="text-green-400" />
              </div>
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Seasons */}
        <SectionHeading
          eyebrow="Through The Seasons"
          title="A Year in Our Orchard"
          subtitle="Each season brings its own beauty and work to the orchard."
        />
        <div className="grid md:grid-cols-4 gap-6 mb-24">
          {seasons.map((s, i) => (
            <div
              key={i}
              className="card-hover rounded-2xl border border-white/5 bg-neutral-900/30 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.season}
                  className="w-full h-full object-cover img-zoom"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${s.color} to-transparent`}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">{s.season}</h3>
                  <span className="text-[10px] text-neutral-500">
                    {s.months}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photoSeeds.map((seed, i) => (
            <div
              key={i}
              className={`group rounded-xl overflow-hidden border border-white/5 ${
                i === 0 ? "col-span-2 row-span-2" : ""
              } aspect-square`}
            >
              <img
                src={seed}
                alt="Orchard"
                className="w-full h-full object-cover img-zoom"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Orchard;
