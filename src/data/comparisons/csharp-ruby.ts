import type { LanguageComparison } from '../../types/language';

export const csharpRubyComparison: LanguageComparison = {
    sourceLanguage: 'C#',
    targetLanguage: 'Ruby',
    syntaxExamples: [
      {
        topic: 'Syntax Comparison',
        description: 'Verbose vs minimal syntax',
        sourceCode: `public class Person {
    private string name;
    
    public Person(string name) {
        this.name = name;
    }
    
    public string Greet() {
        return $"Hello, {name}";
    }
}`,
        targetCode: `class Person
  def initialize(name)
    @name = name
  end
  
  def greet
    "Hello, #{@name}"
  end
end`
      }
    ],
    commonPitfalls: [
      {
        title: 'Explicit vs Implicit',
        description: 'Ruby favors implicit returns',
        sourceExample: `public string Greet() {
    return "Hello";
}`,
        targetExample: `def greet
  "Hello"  # Implicit return
end`,
        correctApproach: 'Embrace Ruby\'s implicit returns'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design approach',
        sourceApproach: 'C# emphasizes explicit syntax and type safety',
        targetApproach: 'Ruby emphasizes developer happiness and expressiveness'
      }
    ]
};