import type { LanguageComparison } from '../../types/language';

export const csharpGoComparison: LanguageComparison = {
    sourceLanguage: 'C#',
    targetLanguage: 'Go',
    syntaxExamples: [
      {
        topic: 'Simple Comparison',
        description: 'Different approaches to simplicity',
        sourceCode: `public class Person {
    public string Name { get; set; }
    public int Age { get; set; }
    
    public string Greet() {
        return $"Hi, I'm {Name}";
    }
}`,
        targetCode: `type Person struct {
    Name string
    Age  int
}

func (p Person) Greet() string {
    return "Hi, I'm " + p.Name
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Error Handling',
        description: 'Exceptions vs explicit errors',
        sourceExample: `public void ReadFile() {
    throw new FileNotFoundException();
}`,
        targetExample: `func readFile() ([]byte, error) {
    return nil, errors.New("file not found")
}`,
        correctApproach: 'Return errors explicitly in Go'
      }
    ],
    keyDifferences: [
      {
        topic: 'Complexity',
        description: 'Language feature sets',
        sourceApproach: 'C# has many advanced features (generics, LINQ, properties)',
        targetApproach: 'Go deliberately keeps features minimal for simplicity'
      }
    ]
};