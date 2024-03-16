import React from "react";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="p-2 shadow-md" aria-roledescription="section-heading">
      <h1 className="text-lg font-medium">{title}</h1>
      {subtitle && <h2 className="text-gray-600 italic">{subtitle}</h2>}
    </div>
  );
};

export default React.memo(SectionHeading);
