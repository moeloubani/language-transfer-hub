import type { LanguageComparison } from '../../types/language';

export const csharpPythonComparison: LanguageComparison = {
    sourceLanguage: 'C#',
    targetLanguage: 'Python',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Static typing to dynamic typing',
        sourceCode: `string name = "John";
int age = 25;
bool isActive = true;
List<string> items = new List<string>();`,
        targetCode: `name = "John"
age = 25
is_active = True
items = []`
      },
      {
        topic: 'Classes and Properties',
        description: 'OOP with different syntax',
        sourceCode: `public class Person {
    private string name;
    private int age;
    
    public Person(string name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public string Name {
        get => name;
        set => name = value;
    }
    
    public override string ToString() {
        return $"Person(Name={name}, Age={age})";
    }
}`,
        targetCode: `class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        self._name = value
    
    def __str__(self):
        return f"Person(name={self._name}, age={self._age})"`
      }
    ],
    commonPitfalls: [
      {
        title: 'Indentation vs Braces',
        description: 'Code block structure',
        sourceExample: `if (condition) {
    DoSomething();
    DoAnotherThing();
}`,
        targetExample: `if condition:
    do_something()
    do_another_thing()`,
        correctApproach: 'Use consistent indentation in Python'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design goals',
        sourceApproach: 'C# emphasizes type safety and enterprise development',
        targetApproach: 'Python emphasizes simplicity and readability'
      }
    ]
};