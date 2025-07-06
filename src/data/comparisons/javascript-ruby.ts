import type { LanguageComparison } from '../../types/language';

export const javascriptRubyComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Ruby',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Clean, minimal syntax',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;
console.log("Hello World");`,
        targetCode: `name = "John"
age = 25
is_active = true
puts "Hello World"`
      },
      {
        topic: 'Functions vs Methods',
        description: 'Method definition',
        sourceCode: `function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

const add = (a, b) => a + b;`,
        targetCode: `def greet(name, greeting = "Hello")
  "#{greeting}, #{name}!"
end

def add(a, b)
  a + b
end`
      },
      {
        topic: 'Arrays and Hashes',
        description: 'Ruby collections',
        sourceCode: `let fruits = ["apple", "banana"];
fruits.push("orange");

let person = {
  name: "John",
  age: 30
};`,
        targetCode: `fruits = ["apple", "banana"]
fruits << "orange"

person = {
  name: "John",
  age: 30
}
# Or with symbols
person = {name: "John", age: 30}`
      }
    ],
    commonPitfalls: [
      {
        title: 'String Interpolation',
        description: 'Different syntax for templates',
        sourceExample: `let message = \`Hello \${name}!\`;`,
        targetExample: `message = "Hello #{name}!"`,
        correctApproach: 'Use #{} for interpolation in Ruby'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design goals',
        sourceApproach: 'JavaScript aims for flexibility and ubiquity',
        targetApproach: 'Ruby prioritizes developer happiness and expressiveness'
      }
    ]
};