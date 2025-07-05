import { useState } from 'react';
import { LanguageSelector } from './components/LanguageSelector';
import { CodeComparison } from './components/CodeComparison';
import { PitfallCard } from './components/PitfallCard';
import { KeyDifferenceCard } from './components/KeyDifferenceCard';
import { getLanguageComparison, LANGUAGES } from './utils/languageUtils';

function App() {
  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [activeTab, setActiveTab] = useState<'syntax' | 'pitfalls' | 'differences'>('syntax');

  const comparison = sourceLanguage && targetLanguage 
    ? getLanguageComparison(sourceLanguage, targetLanguage)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Language Transfer Hub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Transfer your programming knowledge from one language to another
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LanguageSelector
                label="I know..."
                value={sourceLanguage}
                onChange={setSourceLanguage}
                excludeLanguage={targetLanguage}
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
                  className={`px-6 py-3 rounded-t-xl font-medium transition-all duration-200 ${
                    activeTab === 'syntax'
                      ? 'bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 shadow-lg border-b-2 border-emerald-500'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  Syntax Comparison
                </button>
                <button
                  onClick={() => setActiveTab('pitfalls')}
                  className={`px-6 py-3 rounded-t-xl font-medium transition-all duration-200 ${
                    activeTab === 'pitfalls'
                      ? 'bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 shadow-lg border-b-2 border-emerald-500'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  Common Pitfalls
                </button>
                <button
                  onClick={() => setActiveTab('differences')}
                  className={`px-6 py-3 rounded-t-xl font-medium transition-all duration-200 ${
                    activeTab === 'differences'
                      ? 'bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 shadow-lg border-b-2 border-emerald-500'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  Key Differences
                </button>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
                {activeTab === 'syntax' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Syntax Comparison</h2>
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
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Common Pitfalls</h2>
                    {comparison.commonPitfalls.map((pitfall, index) => (
                      <PitfallCard key={index} pitfall={pitfall} />
                    ))}
                  </div>
                )}

                {activeTab === 'differences' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Key Differences</h2>
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
              </div>
            </>
          ) : (
            sourceLanguage && targetLanguage && (
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Sorry, we don't have a comparison for {LANGUAGES[sourceLanguage as keyof typeof LANGUAGES]} to {LANGUAGES[targetLanguage as keyof typeof LANGUAGES]} yet.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
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