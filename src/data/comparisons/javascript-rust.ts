import type { LanguageComparison } from '../../types/language';

export const javascriptRustComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Rust',
    syntaxExamples: [
      {
        topic: 'Variables and Ownership',
        description: 'Memory safety with ownership',
        sourceCode: `let name = "John";
let age = 25;
let items = ["a", "b", "c"];`,
        targetCode: `let name = "John";
let age = 25;
let items = vec!["a", "b", "c"];

// Mutable variables
let mut count = 0;
count += 1;`
      }
    ],
    commonPitfalls: [
      {
        title: 'Ownership and Borrowing',
        description: 'Rust\'s unique memory model',
        sourceExample: `let data = getData();
processData(data);
useData(data); // Fine in JS`,
        targetExample: `let data = get_data();
process_data(data); // data moved!
use_data(data); // ERROR`,
        correctApproach: 'Use references (&) or clone when needed'
      }
    ],
    keyDifferences: [
      {
        topic: 'Memory Management',
        description: 'GC vs ownership',
        sourceApproach: 'JavaScript has garbage collection',
        targetApproach: 'Rust uses ownership for zero-cost memory safety'
      }
    ]
};