import React from 'react';
import type { Pitfall } from '../types/language';

interface PitfallCardProps {
  pitfall: Pitfall;
}

export const PitfallCard: React.FC<PitfallCardProps> = ({ pitfall }) => {
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6 mb-6 shadow-lg">
      <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 flex items-center">
        <span className="text-2xl mr-2">⚠️</span>
        {pitfall.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{pitfall.description}</p>
      
      {(pitfall.sourceExample || pitfall.targetExample) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {pitfall.sourceExample && (
            <div>
              <h4 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300 flex items-center">
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                Source (Problematic):
              </h4>
              <pre className="bg-gray-900 text-red-400 rounded-lg p-4 overflow-x-auto text-sm border border-gray-700 shadow-lg">
                <code>
                  {pitfall.sourceExample}
                </code>
              </pre>
            </div>
          )}
          {pitfall.targetExample && (
            <div>
              <h4 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300 flex items-center">
                <span className="inline-block w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                Target (Better):
              </h4>
              <pre className="bg-gray-900 text-emerald-400 rounded-lg p-4 overflow-x-auto text-sm border border-gray-700 shadow-lg">
                <code>
                  {pitfall.targetExample}
                </code>
              </pre>
            </div>
          )}
        </div>
      )}
      
      <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
          <span className="text-lg mr-2">✅</span>
          Correct Approach:
        </h4>
        <p className="text-sm text-gray-700 dark:text-gray-300">{pitfall.correctApproach}</p>
      </div>
    </div>
  );
};