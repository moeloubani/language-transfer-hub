import type { LanguageComparison } from '../../types/language';

export const javascriptJavaComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Java',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static typing and variable declarations',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;
let items = [];`,
        targetCode: `String name = "John";
int age = 25;
boolean isActive = true;
ArrayList<String> items = new ArrayList<>();`
      },
      {
        topic: 'Functions vs Methods',
        description: 'Java requires everything in classes',
        sourceCode: `function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

const add = (a, b) => a + b;`,
        targetCode: `public class Utils {
    public static String greet(String name, String greeting) {
        return greeting + ", " + name + "!";
    }
    
    public static String greet(String name) {
        return greet(name, "Hello");
    }
    
    public static int add(int a, int b) {
        return a + b;
    }
}`
      },
      {
        topic: 'Classes and Objects',
        description: 'OOP with strong typing',
        sourceCode: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
}

let person = new Person("John", 30);`,
        targetCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String greet() {
        return "Hi, I'm " + this.name;
    }
}

Person person = new Person("John", 30);`
      }
    ],
    commonPitfalls: [
      {
        title: 'Dynamic vs Static Typing',
        description: 'Java requires explicit types everywhere',
        sourceExample: `let data = fetchData();
data = "string"; // Works in JS`,
        targetExample: `Object data = fetchData(); // Not ideal
String data = fetchData(); // Better - be specific`,
        correctApproach: 'Always declare specific types in Java'
      }
    ],
    keyDifferences: [
      {
        topic: 'Type System',
        description: 'Static vs dynamic typing',
        sourceApproach: 'JavaScript is dynamically typed',
        targetApproach: 'Java is statically typed with compile-time checking'
      },
      {
        topic: 'Execution Model',
        description: 'Compilation and runtime',
        sourceApproach: 'JavaScript is interpreted/JIT compiled',
        targetApproach: 'Java compiles to bytecode, runs on JVM'
      }
    ]
};