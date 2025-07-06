import type { LanguageComparison } from '../../types/language';

export const javaCsharpComparison: LanguageComparison = {
    sourceLanguage: 'Java',
    targetLanguage: 'C#',
    syntaxExamples: [
      {
        topic: 'Similar Syntax',
        description: 'Very similar object-oriented approaches',
        sourceCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return this.name;
    }
}`,
        targetCode: `public class Person {
    private string name;
    private int age;
    
    public Person(string name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public string Name {
        get { return this.name; }
        set { this.name = value; }
    }
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Properties vs Getters/Setters',
        description: 'C# has built-in property syntax',
        sourceExample: `public String getName() { return name; }
public void setName(String name) { this.name = name; }`,
        targetExample: `public string Name { get; set; }`,
        correctApproach: 'Use C# properties instead of explicit getter/setter methods'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform',
        description: 'Runtime environments',
        sourceApproach: 'Java runs on JVM, truly cross-platform',
        targetApproach: 'C# runs on .NET, primarily Microsoft ecosystem'
      }
    ]
};