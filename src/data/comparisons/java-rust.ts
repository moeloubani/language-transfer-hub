import type { LanguageComparison } from '../../types/language';

export const javaRustComparison: LanguageComparison = {
    sourceLanguage: 'Java',
    targetLanguage: 'Rust',
    syntaxExamples: [
      {
        topic: 'Memory Management',
        description: 'GC vs ownership',
        sourceCode: `String name = "John";
List<String> items = new ArrayList<>();
items.add(name);
// Garbage collector handles cleanup`,
        targetCode: `let name = String::from("John");
let mut items: Vec<String> = Vec::new();
items.push(name);
// Ownership system handles cleanup automatically`
      }
    ],
    commonPitfalls: [
      {
        title: 'Ownership and Borrowing',
        description: 'Rust\'s unique memory model',
        sourceExample: `String data = getData();
processData(data);
useData(data); // Fine in Java`,
        targetExample: `let data = get_data();
process_data(data); // data moved!
use_data(data); // ERROR: value used after move`,
        correctApproach: 'Use references (&) or clone data when needed in Rust'
      }
    ],
    keyDifferences: [
      {
        topic: 'Memory Safety',
        description: 'Different safety approaches',
        sourceApproach: 'Java prevents memory errors through garbage collection',
        targetApproach: 'Rust prevents memory errors through ownership at compile time'
      }
    ]
};