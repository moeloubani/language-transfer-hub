import React from 'react';
import type { KeyDifference } from '../types/language';

interface KeyDifferenceCardProps {
  difference: KeyDifference;
  sourceLanguage: string;
  targetLanguage: string;
}

export const KeyDifferenceCard: React.FC<KeyDifferenceCardProps> = ({
  difference,
  sourceLanguage,
  targetLanguage
}) => {
  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6 shadow-sm">
      <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
        <span className="text-2xl mr-2">🔍</span>
        {difference.topic}
      </h3>
      <p className="text-gray-700 mb-6">{difference.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
            <span className="inline-block w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
            {sourceLanguage} Approach:
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {difference.sourceApproach}
          </p>
        </div>
        <div className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
            <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
            {targetLanguage} Approach:
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {difference.targetApproach}
          </p>
        </div>
      </div>
    </div>
  );
};