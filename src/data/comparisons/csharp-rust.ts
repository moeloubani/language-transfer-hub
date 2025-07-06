import type { LanguageComparison } from '../../types/language';

export const csharpRustComparison: LanguageComparison = {
    sourceLanguage: 'C#',
    targetLanguage: 'Rust',
    syntaxExamples: [
      {
        topic: 'Memory Management',
        description: 'GC vs ownership',
        sourceCode: `string name = "John";
List<string> items = new List<string>();
items.Add(name);
// Garbage collector handles cleanup`,
        targetCode: `let name = String::from("John");
let mut items: Vec<String> = Vec::new();
items.push(name);
// Ownership system handles cleanup`
      }
    ],
    commonPitfalls: [
      {
        title: 'Ownership and Borrowing',
        description: 'Different memory models',
        sourceExample: `string data = GetData();
ProcessData(data);
UseData(data); // Fine in C#`,
        targetExample: `let data = get_data();
process_data(data); // data moved!
use_data(data); // ERROR`,
        correctApproach: 'Understand Rust\'s ownership system'
      }
    ],
    keyDifferences: [
      {
        topic: 'Memory Safety',
        description: 'Different safety approaches',
        sourceApproach: 'C# uses garbage collection for memory safety',
        targetApproach: 'Rust uses ownership for zero-cost memory safety'
      }
    ]
};