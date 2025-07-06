export interface SyntaxExample {
  topic: string;
  description?: string;
  sourceCode: string;
  targetCode: string;
}

export interface Pitfall {
  title: string;
  description: string;
  sourceExample?: string;
  targetExample?: string;
  correctApproach: string;
}

export interface KeyDifference {
  topic: string;
  description: string;
  sourceApproach: string;
  targetApproach: string;
}

export interface FrameworkExample {
  name: string;
  setupCode: string;
  basicExample: string;
  strengths: string[];
  ecosystem: string[];
}

export interface FrameworkComparison {
  category: 'web' | 'mobile' | 'desktop' | 'testing' | 'build' | 'fullstack' | 'api';
  sourceFramework: FrameworkExample;
  targetFramework: FrameworkExample;
  migrationTips: string[];
  commonPitfalls: string[];
}

export interface LanguageComparison {
  sourceLanguage: string;
  targetLanguage: string;
  syntaxExamples: SyntaxExample[];
  commonPitfalls: Pitfall[];
  keyDifferences: KeyDifference[];
  frameworkComparisons?: FrameworkComparison[];
}

export type Language = 'javascript' | 'typescript' | 'python' | 'java' | 'php' | 'ruby' | 'go' | 'rust' | 'csharp' | 'swift';