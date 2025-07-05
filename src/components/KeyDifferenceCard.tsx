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
    <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl p-6 mb-6 shadow-lg">
      <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-3 flex items-center">
        <span className="text-2xl mr-2">🔍</span>
        {difference.topic}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{difference.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
            <span className="inline-block w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
            {sourceLanguage} Approach:
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {difference.sourceApproach}
          </p>
        </div>
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-5 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
            <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
            {targetLanguage} Approach:
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {difference.targetApproach}
          </p>
        </div>
      </div>
    </div>
  );
};