
import React from 'react';

const tableData = [
  { aspect: 'Primary Colors', paint: 'Red, Yellow, Blue', light: 'Red, Green, Blue' },
  { aspect: 'Mixing All Together', paint: 'Brown/Muddy Dark', light: 'White' },
  { aspect: 'Type of Mixing', paint: 'Subtractive', light: 'Additive' },
  { aspect: 'Used For', paint: 'Art, printing, painting', light: 'Screens, stage lights, photography' },
];

export const ComparisonTable: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="w-full text-left text-slate-600">
        <thead className="bg-slate-100 text-sm text-slate-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">Aspect</th>
            <th scope="col" className="px-6 py-3">Paint/Pigment (RYB)</th>
            <th scope="col" className="px-6 py-3">Light (RGB)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="bg-white border-b border-slate-200 hover:bg-slate-50">
              <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                {row.aspect}
              </th>
              <td className="px-6 py-4">{row.paint}</td>
              <td className="px-6 py-4">{row.light}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
