import React from 'react';
import type { Pitfall } from '../types/language';
import HighlightedCode from './HighlightedCode';

interface PitfallCardProps {
  pitfall: Pitfall;
}

export const PitfallCard: React.FC<PitfallCardProps> = ({ pitfall }) => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6 shadow-sm">
      <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
        <span className="text-2xl mr-2">⚠️</span>
        {pitfall.title}
      </h3>
      <p className="text-gray-700 mb-4">{pitfall.description}</p>
      
      {(pitfall.sourceExample || pitfall.targetExample) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {pitfall.sourceExample && (
            <div>
              <h4 className="text-sm font-medium mb-3 text-gray-700 flex items-center">
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                Source (Problematic):
              </h4>
              <HighlightedCode code={pitfall.sourceExample} language="javascript" colorClass="text-red-700" />
            </div>
          )}
          {pitfall.targetExample && (
            <div>
              <h4 className="text-sm font-medium mb-3 text-gray-700 flex items-center">
                <span className="inline-block w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                Target (Better):
              </h4>
              <HighlightedCode code={pitfall.targetExample} language="javascript" colorClass="text-emerald-700" />
            </div>
          )}
        </div>
      )}
      
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-emerald-800 mb-2 flex items-center">
          <span className="text-lg mr-2">✅</span>
          Correct Approach:
        </h4>
        <p className="text-sm text-gray-700">{pitfall.correctApproach}</p>
      </div>
    </div>
  );
};