import type { LanguageComparison } from '../../types/language';

export const javaRubyComparison: LanguageComparison = {
    sourceLanguage: 'Java',
    targetLanguage: 'Ruby',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Verbose vs minimal syntax',
        sourceCode: `String name = "John";
int age = 25;
boolean isActive = true;
System.out.println("Hello " + name);`,
        targetCode: `name = "John"
age = 25
is_active = true
puts "Hello #{name}"`
      },
      {
        topic: 'Classes',
        description: 'OOP with different philosophies',
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
    
    public void setName(String name) {
        this.name = name;
    }
}`,
        targetCode: `class Person
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  attr_accessor :name
  attr_reader :age
end`
      }
    ],
    commonPitfalls: [
      {
        title: 'Explicit vs Implicit',
        description: 'Ruby favors implicit returns and minimal syntax',
        sourceExample: `public String greet() {
    return "Hello";
}`,
        targetExample: `def greet
  "Hello"  # Implicit return
end`,
        correctApproach: 'Embrace Ruby\'s implicit returns and minimal syntax'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design goals',
        sourceApproach: 'Java prioritizes safety, performance, and enterprise features',
        targetApproach: 'Ruby prioritizes developer happiness and expressiveness'
      }
    ]
};