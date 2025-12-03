
import React from 'react';
import type { ColorSystemProps } from '../types';

const ColorChip: React.FC<{ colorName: string }> = ({ colorName }) => {
  const colorMap: { [key: string]: string } = {
    'Red': 'bg-red-500',
    'Yellow': 'bg-yellow-400',
    'Blue': 'bg-blue-500',
    'Green': 'bg-green-500',
  };
  return <div className={`w-5 h-5 rounded-full mr-3 flex-shrink-0 ${colorMap[colorName]}`}></div>;
};

export const ColorSystemCard: React.FC<ColorSystemProps> = ({ title, usage, colors, reason, mixes }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-500 mb-4">{usage}</p>
      
      <div className="space-y-2 mb-4">
        {colors.map(color => (
          <div key={color.name} className="flex items-center">
            <ColorChip colorName={color.name} />
            <p className="text-slate-600"><strong className="font-medium text-slate-700">{color.name}:</strong> {color.description}</p>
          </div>
        ))}
      </div>

      <h4 className="font-semibold text-slate-700 mt-6 mb-2">Why these three?</h4>
      <p className="text-slate-600 mb-4">{reason}</p>

      <h4 className="font-semibold text-slate-700 mt-6 mb-2">What you can mix:</h4>
      <div className="space-y-2">
        {mixes.map((mix, index) => (
          <div key={index} className="flex items-center text-lg font-mono tracking-tight">
            {mix.equation.map((part, partIndex) => (
              <span key={partIndex} style={{ color: mix.colors[partIndex] }} className="font-bold mx-1">
                {part}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
