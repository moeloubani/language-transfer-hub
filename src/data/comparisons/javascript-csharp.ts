import type { LanguageComparison } from '../../types/language';

export const javascriptCsharpComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'C#',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Strong typing with inference',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;`,
        targetCode: `string name = "John";
int age = 25;
bool isActive = true;

// Or with var inference
var inferredName = "John";`
      }
    ],
    commonPitfalls: [
      {
        title: 'Naming Conventions',
        description: 'PascalCase vs camelCase',
        sourceExample: `function getUserData() { }
let userName = "john";`,
        targetExample: `public UserData GetUserData() { }
string UserName = "john";`,
        correctApproach: 'Use PascalCase for methods and properties in C#'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform',
        description: 'Runtime environment',
        sourceApproach: 'JavaScript runs in browsers and Node.js',
        targetApproach: 'C# runs on .NET runtime, cross-platform'
      }
    ]
};