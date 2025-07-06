import type { LanguageComparison } from '../../types/language';

export const javascriptGoComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Go',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static typing with inference',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;`,
        targetCode: `var name string = "John"
var age int = 25
var isActive bool = true

// Or with inference
name := "John"
age := 25`
      },
      {
        topic: 'Functions',
        description: 'Explicit return types',
        sourceCode: `function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}`,
        targetCode: `func greet(name string, greeting string) string {
    if greeting == "" {
        greeting = "Hello"
    }
    return greeting + ", " + name + "!"
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Error Handling',
        description: 'No exceptions in Go',
        sourceExample: `try {
  let data = riskyOperation();
} catch (error) {
  console.error(error);
}`,
        targetExample: `data, err := riskyOperation()
if err != nil {
    fmt.Printf("Error: %v", err)
    return
}`,
        correctApproach: 'Always check error returns explicitly'
      }
    ],
    keyDifferences: [
      {
        topic: 'Concurrency',
        description: 'Built-in vs callback-based',
        sourceApproach: 'JavaScript uses callbacks, promises, async/await',
        targetApproach: 'Go has built-in goroutines and channels'
      }
    ]
};