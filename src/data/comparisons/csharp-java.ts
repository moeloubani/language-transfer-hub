import type { LanguageComparison } from '../../types/language';

export const csharpJavaComparison: LanguageComparison = {
    sourceLanguage: 'C#',
    targetLanguage: 'Java',
    syntaxExamples: [
      {
        topic: 'Very Similar Syntax',
        description: 'Both are strongly-typed OOP languages',
        sourceCode: `public class Person {
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
}`,
        targetCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Properties vs Getters/Setters',
        description: 'Different accessor patterns',
        sourceExample: `public string Name { get; set; }`,
        targetExample: `public String getName() { return name; }
public void setName(String name) { this.name = name; }`,
        correctApproach: 'Use explicit getter/setter methods in Java'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform',
        description: 'Runtime environments',
        sourceApproach: 'C# runs on .NET, primarily Microsoft ecosystem',
        targetApproach: 'Java runs on JVM, truly cross-platform'
      }
    ]
};