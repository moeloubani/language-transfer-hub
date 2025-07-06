import type { LanguageComparison } from '../../types/language';

export const csharpPhpComparison: LanguageComparison = {
    sourceLanguage: 'C#',
    targetLanguage: 'PHP',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static to dynamic typing',
        sourceCode: `string name = "John";
int age = 25;
bool isActive = true;`,
        targetCode: `$name = "John";
$age = 25;
$isActive = true;`
      }
    ],
    commonPitfalls: [
      {
        title: 'Variable Syntax',
        description: 'Different variable declaration',
        sourceExample: `string name = "John";`,
        targetExample: `$name = "John";`,
        correctApproach: 'All variables in PHP must start with $'
      }
    ],
    keyDifferences: [
      {
        topic: 'Execution Model',
        description: 'Compilation vs interpretation',
        sourceApproach: 'C# is compiled to intermediate language',
        targetApproach: 'PHP is interpreted at runtime'
      }
    ]
};