import type { LanguageComparison } from '../../types/language';

export const javaTypescriptComparison: LanguageComparison = {
    sourceLanguage: 'Java',
    targetLanguage: 'TypeScript',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static typing approaches',
        sourceCode: `String name = "John";
int age = 25;
boolean isActive = true;
List<String> items = new ArrayList<>();`,
        targetCode: `const name: string = "John";
const age: number = 25;
const isActive: boolean = true;
const items: string[] = [];

// Type inference also works
const inferredName = "John"; // string
const inferredAge = 25; // number`
      },
      {
        topic: 'Classes and Interfaces',
        description: 'OOP with type safety',
        sourceCode: `public interface Greetable {
    String greet();
}

public class Person implements Greetable {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String greet() {
        return "Hi, I'm " + this.name;
    }
    
    public String getName() {
        return this.name;
    }
}`,
        targetCode: `interface Greetable {
    greet(): string;
}

class Person implements Greetable {
    private name: string;
    private age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet(): string {
        return \`Hi, I'm \${this.name}\`;
    }
    
    getName(): string {
        return this.name;
    }
}`
      },
      {
        topic: 'Generics',
        description: 'Type parameterization',
        sourceCode: `public class Container<T> {
    private T value;
    
    public Container(T value) {
        this.value = value;
    }
    
    public T getValue() {
        return this.value;
    }
    
    public void setValue(T value) {
        this.value = value;
    }
}

Container<String> stringContainer = new Container<>("hello");
Container<Integer> intContainer = new Container<>(42);`,
        targetCode: `class Container<T> {
    private value: T;
    
    constructor(value: T) {
        this.value = value;
    }
    
    getValue(): T {
        return this.value;
    }
    
    setValue(value: T): void {
        this.value = value;
    }
}

let stringContainer = new Container<string>("hello");
let intContainer = new Container<number>(42);`
      },
      {
        topic: 'Method Overloading vs Function Overloads',
        description: 'Multiple method signatures',
        sourceCode: `public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
}`,
        targetCode: `// Function overloads in TypeScript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

// Or using generics
function addGeneric<T extends number | string>(a: T, b: T): T {
    return (a as any) + (b as any);
}`
      },
      {
        topic: 'Collections and Arrays',
        description: 'Working with typed collections',
        sourceCode: `// Java Arrays and Collections
String[] fruits = {"apple", "banana", "orange"};
List<String> fruitsList = Arrays.asList(fruits);
Map<String, Integer> ages = new HashMap<>();
ages.put("John", 30);
ages.put("Jane", 25);

// Stream operations
List<String> upperFruits = fruitsList.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());`,
        targetCode: `// TypeScript Arrays
let fruits: string[] = ["apple", "banana", "orange"];
let fruitsList: string[] = [...fruits];
let ages: Map<string, number> = new Map([
    ["John", 30],
    ["Jane", 25]
]);

// Array methods
let upperFruits: string[] = fruitsList.map(fruit => fruit.toUpperCase());`
      }
    ],
    commonPitfalls: [
      {
        title: 'Compilation Target',
        description: 'Java compiles to bytecode, TypeScript to JavaScript',
        sourceExample: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
        targetExample: `// TypeScript compiles to JavaScript
console.log("Hello World");
// No main method or class required`,
        correctApproach: 'TypeScript is more lightweight, no need for class wrappers for simple scripts'
      },
      {
        title: 'Null Safety',
        description: 'Different approaches to null handling',
        sourceExample: `String name = null;
int length = name.length(); // NullPointerException!`,
        targetExample: `let name: string | null = null;
let length = name?.length; // undefined, no crash`,
        correctApproach: 'Use optional chaining (?.) and strict null checks in TypeScript'
      },
      {
        title: 'Package vs Module System',
        description: 'Different organization approaches',
        sourceExample: `package com.example.utils;
import java.util.List;

public class StringUtils { }`,
        targetExample: `// TypeScript modules
import { List } from './types';
export class StringUtils { }`,
        correctApproach: 'Use ES6 modules in TypeScript, not Java-style packages'
      }
    ],
    keyDifferences: [
      {
        topic: 'Runtime Environment',
        description: 'Execution platforms',
        sourceApproach: 'Java runs on JVM, platform independent bytecode',
        targetApproach: 'TypeScript compiles to JavaScript, runs in browsers/Node.js'
      },
      {
        topic: 'Type Erasure vs Runtime Types',
        description: 'How types are handled at runtime',
        sourceApproach: 'Java has type erasure for generics at runtime',
        targetApproach: 'TypeScript types are completely erased, pure JavaScript at runtime'
      },
      {
        topic: 'Ecosystem',
        description: 'Libraries and tooling',
        sourceApproach: 'Java has mature enterprise ecosystem, Maven/Gradle',
        targetApproach: 'TypeScript inherits JavaScript ecosystem, npm/yarn'
      }
    ]
};