import React from 'react';
import type { SyntaxExample } from '../types/language';

interface CodeComparisonProps {
  example: SyntaxExample;
  sourceLanguage: string;
  targetLanguage: string;
}

export const CodeComparison: React.FC<CodeComparisonProps> = ({
  example,
  sourceLanguage,
  targetLanguage
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{example.topic}</h3>
      {example.description && (
        <p className="text-gray-600 dark:text-gray-400 mb-4">{example.description}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
            <span className="inline-block w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
            {sourceLanguage}
          </h4>
          <pre className="bg-gray-900 text-emerald-400 rounded-lg p-4 overflow-x-auto text-sm border border-gray-700 shadow-lg">
            <code>
              {example.sourceCode}
            </code>
          </pre>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
            <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
            {targetLanguage}
          </h4>
          <pre className="bg-gray-900 text-teal-400 rounded-lg p-4 overflow-x-auto text-sm border border-gray-700 shadow-lg">
            <code>
              {example.targetCode}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};