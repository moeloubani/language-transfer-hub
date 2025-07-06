import type { LanguageComparison } from '../../types/language';

export const javascriptSwiftComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Swift',
    syntaxExamples: [
      {
        topic: 'Variables and Optionals',
        description: 'Type safety with optionals',
        sourceCode: `let name = "John";
let age = 25;
let email = null;`,
        targetCode: `let name = "John"
let age = 25
var email: String? = nil

// Optional binding
if let email = email {
    print("Email: \(email)")
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Null vs Optional',
        description: 'Swift\'s safe approach to nil',
        sourceExample: `let value = null;
console.log(value); // prints null`,
        targetExample: `var value: String? = nil
print(value!) // CRASH if nil!`,
        correctApproach: 'Use optional binding: if let value = value { ... }'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform Focus',
        description: 'Target platforms',
        sourceApproach: 'JavaScript is web-focused, universal',
        targetApproach: 'Swift is Apple ecosystem focused'
      }
    ]
};