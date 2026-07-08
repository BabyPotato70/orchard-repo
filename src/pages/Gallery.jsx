import React, { useState } from "react";
import { Eye, X, MapPin, Calendar } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { appleVarieties } from "../data/Content";

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="page-transition pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Apple Gallery"
          title="Our Premium Varieties"
          subtitle="Discover the full range of apples we grow at Manohar Orchard. Each variety has been carefully selected and nurtured for decades in our Himalayan orchard."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {appleVarieties.map((apple, i) => (
            <div
              key={i}
              onClick={() => setSelected(apple)}
              className="group card-hover rounded-2xl border border-white/5 bg-neutral-900/30 overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={apple.image}
                  alt={apple.name}
                  className="w-full h-full object-cover img-zoom"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${apple.color}`}
                />
                <div className="gallery-item-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <span className="text-xs text-white/80 flex items-center gap-1">
                    <Eye size={12} /> View Details
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-medium tracking-tight group-hover:text-green-400 transition-colors">
                  {apple.name}
                </h3>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed line-clamp-2">
                  {apple.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative bg-[#111] border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden glow-blue-strong"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${selected.color}`}
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X size={14} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium">{selected.name}</h3>
              <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                {selected.desc}
              </p>
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <MapPin size={12} /> Jubbal, HP
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <Calendar size={12} /> Season: Aug–Nov
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Gallery;
