import React from 'react';
import type { FrameworkComparison } from '../types/language';
import HighlightedCode from './HighlightedCode';

interface Props {
  frameworks: FrameworkComparison[];
  sourceLanguage: string;
  targetLanguage: string;
}

export default function FrameworkComparisonComponent({ frameworks, sourceLanguage, targetLanguage }: Props) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [query, setQuery] = React.useState<string>('');

  const categories = React.useMemo(() => {
    const cats = new Set(['all']);
    frameworks.forEach(fw => cats.add(fw.category));
    return Array.from(cats);
  }, [frameworks]);

  const filteredFrameworks = React.useMemo(() => {
    const byCategory = selectedCategory === 'all' ? frameworks : frameworks.filter(fw => fw.category === selectedCategory);
    if (!query.trim()) return byCategory;
    const q = query.toLowerCase();
    return byCategory.filter(fw =>
      fw.sourceFramework.name.toLowerCase().includes(q) ||
      fw.targetFramework.name.toLowerCase().includes(q) ||
      fw.migrationTips.some(t => t.toLowerCase().includes(q)) ||
      fw.commonPitfalls.some(t => t.toLowerCase().includes(q))
    );
  }, [frameworks, selectedCategory, query]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return '🌐';
      case 'mobile': return '📱';
      case 'desktop': return '🖥️';
      case 'testing': return '🧪';
      case 'build': return '🔨';
      case 'fullstack': return '🏗️';
      case 'api': return '🔌';
      default: return '📦';
    }
  };

  const getCategoryLabel = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  if (!frameworks || frameworks.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          No framework comparisons available for {sourceLanguage} → {targetLanguage} yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 items-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category
                ? 'bg-emerald-500 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {category === 'all' ? 'All Categories' : (
              <>
                <span className="mr-1">{getCategoryIcon(category)}</span>
                {getCategoryLabel(category)}
              </>
            )}
          </button>
        ))}
        <div className="ml-auto">
          <input
            placeholder="Search frameworks..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          />
        </div>
      </div>

      {/* Framework Comparisons */}
      <div className="grid gap-6">
        {filteredFrameworks.map((framework, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getCategoryIcon(framework.category)}</span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {framework.sourceFramework.name} vs {framework.targetFramework.name}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
                  {getCategoryLabel(framework.category)}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Framework Comparison Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Source Framework */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white flex items-center">
                    <span className="text-blue-500 mr-2">{sourceLanguage}</span>
                    {framework.sourceFramework.name}
                  </h4>
                  
                  {/* Setup */}
                  <div>
                    <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Setup</h5>
                    <HighlightedCode code={framework.sourceFramework.setupCode} language="bash" />
                  </div>

                  {/* Basic Example */}
                  <div>
                    <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Basic Example</h5>
                    <HighlightedCode code={framework.sourceFramework.basicExample} language="javascript" />
                  </div>

                  {/* Strengths */}
                  <div>
                    <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Strengths</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {framework.sourceFramework.strengths.map((strength, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300">{strength}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Target Framework */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white flex items-center">
                    <span className="text-emerald-500 mr-2">{targetLanguage}</span>
                    {framework.targetFramework.name}
                  </h4>
                  
                  {/* Setup */}
                  <div>
                    <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Setup</h5>
                    <HighlightedCode code={framework.targetFramework.setupCode} language="bash" />
                  </div>

                  {/* Basic Example */}
                  <div>
                    <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Basic Example</h5>
                    <HighlightedCode code={framework.targetFramework.basicExample} language="javascript" />
                  </div>

                  {/* Strengths */}
                  <div>
                    <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Strengths</h5>
                    <ul className="list-disc list-inside space-y-1">
                      {framework.targetFramework.strengths.map((strength, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300">{strength}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Migration Tips */}
              {framework.migrationTips.length > 0 && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                    💡 Migration Tips
                  </h4>
                  <ul className="space-y-2">
                    {framework.migrationTips.map((tip, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Common Pitfalls */}
              {framework.commonPitfalls.length > 0 && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                    ⚠️ Common Pitfalls
                  </h4>
                  <ul className="space-y-2">
                    {framework.commonPitfalls.map((pitfall, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{pitfall}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ecosystem Comparison */}
              <div className="grid md:grid-cols-2 gap-4 border-t pt-4">
                <div>
                  <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    {framework.sourceFramework.name} Ecosystem
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {framework.sourceFramework.ecosystem.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    {framework.targetFramework.name} Ecosystem
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {framework.targetFramework.ecosystem.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}