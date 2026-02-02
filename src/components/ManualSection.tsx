import React from 'react';

interface ManualSectionProps {
  number: string;
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

export function ManualSection({ number, title, icon, children }: ManualSectionProps) {
  return (
    <div className="manual-section bg-white rounded-lg shadow-sm p-8 mb-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">{number}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          </div>
        </div>
      </div>
      <div className="ml-16">{children ?? null}</div>
    </div>
  );
}
