import { useState, useEffect } from 'react';
import { LanguageSelector } from './components/LanguageSelector';
import { CodeComparison } from './components/CodeComparison';
import { PitfallCard } from './components/PitfallCard';
import { KeyDifferenceCard } from './components/KeyDifferenceCard';
import FrameworkComparison from './components/FrameworkComparison';
import { getLanguageComparison, LANGUAGES } from './utils/languageUtils';
import SocialShare from './components/SocialShare';

function App() {
  const [sourceLanguage, setSourceLanguage] = useState(() => localStorage.getItem('sourceLanguage') || '');
  const [targetLanguage, setTargetLanguage] = useState(() => localStorage.getItem('targetLanguage') || '');
  const [activeTab, setActiveTab] = useState<'syntax' | 'pitfalls' | 'differences' | 'frameworks'>(() => {
    const stored = localStorage.getItem('activeTab');
    if (stored === 'syntax' || stored === 'pitfalls' || stored === 'differences' || stored === 'frameworks') {
      return stored;
    }
    return 'syntax';
  });

  // Initialize from URL params (for shared links)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlSource = params.get('source') || '';
    const urlTarget = params.get('target') || '';
    const urlTab = params.get('tab') as 'syntax' | 'pitfalls' | 'differences' | 'frameworks' | null;
    if (urlSource) setSourceLanguage(urlSource);
    if (urlTarget) setTargetLanguage(urlTarget);
    if (urlTab && ['syntax', 'pitfalls', 'differences', 'frameworks'].includes(urlTab)) {
      setActiveTab(urlTab);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist selections
  useEffect(() => {
    localStorage.setItem('sourceLanguage', sourceLanguage);
  }, [sourceLanguage]);
  useEffect(() => {
    localStorage.setItem('targetLanguage', targetLanguage);
  }, [targetLanguage]);
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  // Keep URL in sync (clean shareable links)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (sourceLanguage) params.set('source', sourceLanguage); else params.delete('source');
    if (targetLanguage) params.set('target', targetLanguage); else params.delete('target');
    if (activeTab) params.set('tab', activeTab); else params.delete('tab');
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [sourceLanguage, targetLanguage, activeTab]);

  const comparison = sourceLanguage && targetLanguage 
    ? getLanguageComparison(sourceLanguage, targetLanguage)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Language Transfer Hub</h1>
              <p className="text-sm text-gray-600">Transfer your programming knowledge from one language to another</p>
            </div>
            <SocialShare sourceLanguage={sourceLanguage} targetLanguage={targetLanguage} activeTab={activeTab} />
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <LanguageSelector
                label="I know..."
                value={sourceLanguage}
                onChange={setSourceLanguage}
                excludeLanguage={targetLanguage}
                onSwap={() => {
                  if (targetLanguage) {
                    setSourceLanguage(targetLanguage);
                    setTargetLanguage(sourceLanguage);
                  }
                }}
              />
              <LanguageSelector
                label="Teach me..."
                value={targetLanguage}
                onChange={setTargetLanguage}
                excludeLanguage={sourceLanguage}
              />
            </div>
          </div>

          {comparison ? (
            <>
              <div className="flex space-x-1 mb-6">
                <button
                  onClick={() => setActiveTab('syntax')}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 border ${
                    activeTab === 'syntax'
                      ? 'bg-white text-emerald-700 border-emerald-200 shadow-sm'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  Syntax Comparison
                </button>
                <button
                  onClick={() => setActiveTab('pitfalls')}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 border ${
                    activeTab === 'pitfalls'
                      ? 'bg-white text-emerald-700 border-emerald-200 shadow-sm'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  Common Pitfalls
                </button>
                <button
                  onClick={() => setActiveTab('differences')}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 border ${
                    activeTab === 'differences'
                      ? 'bg-white text-emerald-700 border-emerald-200 shadow-sm'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  Key Differences
                </button>
                <button
                  onClick={() => setActiveTab('frameworks')}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 border ${
                    activeTab === 'frameworks'
                      ? 'bg-white text-emerald-700 border-emerald-200 shadow-sm'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  Frameworks
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                {activeTab === 'syntax' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Syntax Comparison</h2>
                    {comparison.syntaxExamples.map((example, index) => (
                      <CodeComparison
                        key={index}
                        example={example}
                        sourceLanguage={comparison.sourceLanguage}
                        targetLanguage={comparison.targetLanguage}
                      />
                    ))}
                  </div>
                )}

                {activeTab === 'pitfalls' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Common Pitfalls</h2>
                    {comparison.commonPitfalls.map((pitfall, index) => (
                      <PitfallCard key={index} pitfall={pitfall} />
                    ))}
                  </div>
                )}

                {activeTab === 'differences' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Key Differences</h2>
                    {comparison.keyDifferences.map((difference, index) => (
                      <KeyDifferenceCard
                        key={index}
                        difference={difference}
                        sourceLanguage={comparison.sourceLanguage}
                        targetLanguage={comparison.targetLanguage}
                      />
                    ))}
                  </div>
                )}

                {activeTab === 'frameworks' && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Framework Comparisons</h2>
                    <FrameworkComparison
                      frameworks={comparison.frameworkComparisons || []}
                      sourceLanguage={comparison.sourceLanguage}
                      targetLanguage={comparison.targetLanguage}
                    />
                  </div>
                )}
              </div>
            </>
          ) : (
            sourceLanguage && targetLanguage && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                <p className="text-gray-700">
                  Sorry, we don't have a comparison for {LANGUAGES[sourceLanguage as keyof typeof LANGUAGES]} to {LANGUAGES[targetLanguage as keyof typeof LANGUAGES]} yet.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Try PHP to JavaScript, Python to JavaScript, or Java to JavaScript.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;