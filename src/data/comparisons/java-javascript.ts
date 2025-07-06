import type { LanguageComparison } from '../../types/language';

export const javaJavascriptComparison: LanguageComparison = {
    sourceLanguage: 'Java',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration with types',
        sourceCode: `// Java requires type declarations
String name = "John";
int age = 25;
boolean isActive = true;
final double PI = 3.14159;

// Java 10+ has var for type inference
var message = "Hello"; // String inferred
var count = 42;        // int inferred`,
        targetCode: `// var: function-scoped, legacy
var message = "Hello";
var message = "Hi"; // OK - can redeclare

// let: block-scoped, modern
let age = 25;
age = 26; // OK - can reassign
{ 
  let age = 30; // OK - different scope
}

// const: block-scoped, preferred
const name = "John";
// name = "Jane"; // Error: can't reassign
const PI = 3.14159; // Like Java's final

// Type inference (no explicit types needed)
const inferred = "Hello"; // String type inferred
let count = 42;           // Number type inferred`
      },
      {
        topic: 'Arrays',
        description: 'Array creation and manipulation',
        sourceCode: `// Fixed size array
int[] numbers = new int[5];
numbers[0] = 10;

// Array with values
String[] fruits = {"apple", "banana", "orange"};

// Dynamic array
ArrayList<String> list = new ArrayList<>();
list.add("item");`,
        targetCode: `// Dynamic arrays by default
const numbers = new Array(5);
numbers[0] = 10;

// Array with values
const fruits = ["apple", "banana", "orange"];

// All arrays are dynamic
const list = [];
list.push("item");`
      },
      {
        topic: 'Methods/Functions',
        description: 'Method definition',
        sourceCode: `public class Utils {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public String greet(String name) {
        return "Hello, " + name;
    }
}`,
        targetCode: `// Standalone function
function add(a, b) {
    return a + b;
}

// Method in object/class
class Utils {
    greet(name) {
        return \`Hello, \${name}\`;
    }
}`
      },
      {
        topic: 'Classes and Objects',
        description: 'Object-oriented programming',
        sourceCode: `public class Person {
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
}

Person person = new Person("John", 30);`,
        targetCode: `class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    
    get name() {
        return this._name;
    }
    
    set name(value) {
        this._name = value;
    }
}

const person = new Person("John", 30);`
      },
      {
        topic: 'Loops',
        description: 'Different loop types',
        sourceCode: `// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Enhanced for loop
int[] nums = {1, 2, 3, 4, 5};
for (int num : nums) {
    System.out.println(num);
}

// While loop
int j = 0;
while (j < 5) {
    System.out.println(j);
    j++;
}`,
        targetCode: `// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For-of loop
let nums = [1, 2, 3, 4, 5];
for (let num of nums) {
    console.log(num);
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Type Safety',
        description: 'Java is strongly typed, JavaScript is not',
        sourceExample: `int number = 5;
number = "text"; // Compilation error`,
        targetExample: `let number = 5;
number = "text"; // No error!`,
        correctApproach: 'Be careful with type changes in JavaScript, consider using TypeScript for type safety'
      },
      {
        title: 'Null vs Undefined',
        description: 'JavaScript has both null and undefined',
        sourceExample: `String text = null;
if (text == null) {
    // Handle null
}`,
        targetExample: `let text;
if (text === null || text === undefined) {
    // Handle both cases
}
// Or use: if (text == null) for both`,
        correctApproach: 'Understand the difference between null and undefined in JavaScript'
      },
      {
        title: 'Method Overloading',
        description: 'Java supports overloading, JavaScript does not',
        sourceExample: `public void print(String s) { }
public void print(int i) { }
public void print(String s, int i) { }`,
        targetExample: `function print(...args) {
    if (typeof args[0] === 'string') {
        // Handle string
    } else if (typeof args[0] === 'number') {
        // Handle number
    }
}`,
        correctApproach: 'Use default parameters, rest parameters, or type checking in JavaScript'
      }
    ],
    keyDifferences: [
      {
        topic: 'Compilation',
        description: 'Compiled vs Interpreted',
        sourceApproach: 'Java is compiled to bytecode, runs on JVM',
        targetApproach: 'JavaScript is interpreted (JIT compiled at runtime)'
      },
      {
        topic: 'Threading',
        description: 'Concurrency models',
        sourceApproach: 'Java has true multi-threading with Thread class and concurrent utilities',
        targetApproach: 'JavaScript is single-threaded with event loop, uses Web Workers for parallelism'
      },
      {
        topic: 'Access Modifiers',
        description: 'Encapsulation approaches',
        sourceApproach: 'Java has public, private, protected, and package-private',
        targetApproach: 'JavaScript has public by default, # for private fields (ES2022)'
      }
    ]
};