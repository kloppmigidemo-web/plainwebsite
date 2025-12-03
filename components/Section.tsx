
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
        {title}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};
