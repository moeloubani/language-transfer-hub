import type { LanguageComparison } from '../../types/language';

export const javaGoComparison: LanguageComparison = {
    sourceLanguage: 'Java',
    targetLanguage: 'Go',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static typing approaches',
        sourceCode: `String name = "John";
int age = 25;
boolean isActive = true;
List<String> items = new ArrayList<>();`,
        targetCode: `var name string = "John"
var age int = 25
var isActive bool = true
var items []string

// Short declaration
name := "John"
age := 25`
      },
      {
        topic: 'Classes vs Structs',
        description: 'Different OOP approaches',
        sourceCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String greet() {
        return "Hi, I'm " + this.name;
    }
}`,
        targetCode: `type Person struct {
    name string
    age  int
}

func NewPerson(name string, age int) Person {
    return Person{name: name, age: age}
}

func (p Person) greet() string {
    return "Hi, I'm " + p.name
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Error Handling',
        description: 'Exceptions vs explicit error returns',
        sourceExample: `public void readFile() throws IOException {
    // Code that might throw
}`,
        targetExample: `func readFile() ([]byte, error) {
    data, err := ioutil.ReadFile("file.txt")
    if err != nil {
        return nil, err
    }
    return data, nil
}`,
        correctApproach: 'Always check and handle error returns in Go'
      }
    ],
    keyDifferences: [
      {
        topic: 'Concurrency',
        description: 'Threading models',
        sourceApproach: 'Java uses threads and concurrent utilities',
        targetApproach: 'Go uses lightweight goroutines and channels'
      }
    ]
};