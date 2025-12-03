
import React from 'react';

interface ListItemProps {
  title: string;
  description: string;
}

export const ListItem: React.FC<ListItemProps> = ({ title, description }) => {
  return (
    <li className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:bg-slate-50 transition-colors">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-medium text-slate-900">{title}</h4>
        <p className="mt-1 text-slate-600">{description}</p>
      </div>
    </li>
  );
};
