import type { Language, LanguageComparison } from '../types/language';
import { languageData } from '../data/languageData';

export const LANGUAGES: Record<Language, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  java: 'Java',
  php: 'PHP',
  ruby: 'Ruby',
  go: 'Go',
  rust: 'Rust',
  csharp: 'C#',
  swift: 'Swift'
};

export function getLanguageComparison(source: string, target: string): LanguageComparison | null {
  const key = `${source.toLowerCase()}-${target.toLowerCase()}`;
  const reverseKey = `${target.toLowerCase()}-${source.toLowerCase()}`;
  
  if (languageData[key]) {
    return languageData[key];
  } else if (languageData[reverseKey]) {
    // Swap source and target in the reversed data
    const reversed = languageData[reverseKey];
    return {
      ...reversed,
      sourceLanguage: reversed.targetLanguage,
      targetLanguage: reversed.sourceLanguage,
      syntaxExamples: reversed.syntaxExamples.map(ex => ({
        ...ex,
        sourceCode: ex.targetCode,
        targetCode: ex.sourceCode
      })),
      commonPitfalls: reversed.commonPitfalls.map(pit => ({
        ...pit,
        sourceExample: pit.targetExample,
        targetExample: pit.sourceExample
      })),
      keyDifferences: reversed.keyDifferences.map(diff => ({
        ...diff,
        sourceApproach: diff.targetApproach,
        targetApproach: diff.sourceApproach
      })),
      frameworkComparisons: reversed.frameworkComparisons?.map(fc => ({
        ...fc,
        sourceFramework: fc.targetFramework,
        targetFramework: fc.sourceFramework,
        // Note: migrationTips and commonPitfalls might need to be adjusted
        // but for now we'll keep them as they still provide value
      }))
    };
  }
  
  return null;
}

export function getAvailableLanguagePairs(): string[] {
  return Object.keys(languageData);
}