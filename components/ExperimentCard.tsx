
import React from 'react';
import type { ExperimentCardProps } from '../types';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);


export const ExperimentCard: React.FC<ExperimentCardProps> = ({ title, description, steps, result }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      {steps.length > 0 && (
        <ul className="space-y-2 mb-4">
          {steps.map((step, index) => (
            <li key={index} className="flex items-center text-slate-600">
                <span className="text-indigo-500 font-bold mr-2 text-lg">•</span> {step}
            </li>
          ))}
        </ul>
      )}
      <div className="bg-indigo-50 text-indigo-800 p-4 rounded-lg flex items-start">
        <CheckIcon />
        <p className="font-medium">{result}</p>
      </div>
    </div>
  );
};
