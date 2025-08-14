import React from 'react';
import type { SyntaxExample } from '../types/language';
import HighlightedCode from './HighlightedCode';

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
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // ignored
    }
  }
  const langMap: Record<string, string> = {
    javascript: 'javascript',
    typescript: 'typescript',
    python: 'python',
    java: 'java',
    php: 'php',
    ruby: 'ruby',
    go: 'go',
    rust: 'rust',
    csharp: 'csharp',
    swift: 'swift',
  };

  const sourceKey = (sourceLanguage || '').toLowerCase();
  const targetKey = (targetLanguage || '').toLowerCase();

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{example.topic}</h3>
      {example.description && (
        <p className="text-gray-600 mb-4">{example.description}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
            <span className="inline-block w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
            {sourceLanguage}
            <button
              onClick={() => copy(example.sourceCode)}
              className="ml-auto text-xs px-2 py-1 rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
            >
              Copy
            </button>
          </h4>
          <HighlightedCode code={example.sourceCode} language={langMap[sourceKey] || 'javascript'} colorClass="text-emerald-700" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
            <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
            {targetLanguage}
            <button
              onClick={() => copy(example.targetCode)}
              className="ml-auto text-xs px-2 py-1 rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
            >
              Copy
            </button>
          </h4>
          <HighlightedCode code={example.targetCode} language={langMap[targetKey] || 'javascript'} colorClass="text-teal-700" />
        </div>
      </div>
    </div>
  );
};