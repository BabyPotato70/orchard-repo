import React from "react";

const SectionHeading = ({ eyebrow, title, subtitle, center = true }) => {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-blue-400 mb-4 fade-up">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight gradient-text fade-up-delay-1">
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-sm text-neutral-400 mt-4 max-w-2xl leading-relaxed fade-up-delay-2"
          style={center ? { margin: "16px auto 0" } : {}}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
export default SectionHeading;
