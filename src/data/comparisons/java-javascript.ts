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
    // Static method
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Instance method
    public String greet(String name) {
        return "Hello, " + name;
    }
    
    // Method overloading
    public int multiply(int a, int b) {
        return a * b;
    }
    
    public double multiply(double a, double b) {
        return a * b;
    }
    
    // Varargs
    public int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) {
            total += n;
        }
        return total;
    }
    
    // Generic method
    public <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.println(element);
        }
    }
}`,
        targetCode: `// Standalone function declaration
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// Function expression
const multiply = function(a, b) {
    return a * b;
};

// Method in class
class Utils {
    // Instance method
    greet(name) {
        return \`Hello, \${name}\`;
    }
    
    // Static method
    static add(a, b) {
        return a + b;
    }
}

// No method overloading - use default params or check types
function multiplyFlexible(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    throw new Error('Both arguments must be numbers');
}

// Rest parameters (like varargs)
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

// Arrow function with rest params
const sumArrow = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);

// Generic-like behavior (dynamic typing)
function printArray(array) {
    array.forEach(element => console.log(element));
}

// Higher-order function example
const createMultiplier = (factor) => (number) => number * factor;
const double = createMultiplier(2);
const triple = createMultiplier(3);

// Usage
console.log(add(5, 3));
console.log(Utils.add(5, 3));
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(double(5)); // 10`
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
      },
      {
        topic: 'Async Programming',
        description: 'Asynchronous operations and concurrency',
        sourceCode: `import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class AsyncExample {
    // CompletableFuture for async operations
    public static CompletableFuture<String> fetchDataAsync(String url) {
        return CompletableFuture.supplyAsync(() -> {
            // Simulate HTTP request
            try {
                Thread.sleep(1000);
                return "Data from " + url;
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        });
    }
    
    // Combining multiple async operations
    public static void main(String[] args) {
        CompletableFuture<String> future1 = fetchDataAsync("api1.com");
        CompletableFuture<String> future2 = fetchDataAsync("api2.com");
        
        // Wait for both to complete
        CompletableFuture<Void> combinedFuture = CompletableFuture.allOf(future1, future2);
        
        combinedFuture.thenRun(() -> {
            try {
                String result1 = future1.get();
                String result2 = future2.get();
                System.out.println(result1 + ", " + result2);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        
        // Chaining operations
        fetchDataAsync("api.com")
            .thenApply(data -> data.toUpperCase())
            .thenAccept(System.out::println)
            .exceptionally(ex -> {
                System.err.println("Error: " + ex.getMessage());
                return null;
            });
    }
}`,
        targetCode: `// Async/await for asynchronous operations
async function fetchDataAsync(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        return await response.text();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

// Promise-based approach
function fetchDataPromise(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            return response.text();
        });
}

// Combining multiple async operations
async function main() {
    try {
        // Parallel execution with Promise.all
        const [result1, result2] = await Promise.all([
            fetchDataAsync("https://api1.com"),
            fetchDataAsync("https://api2.com")
        ]);
        console.log(result1, result2);
        
        // Sequential execution
        const data1 = await fetchDataAsync("https://api.com");
        const data2 = await fetchDataAsync("https://api2.com");
        console.log(data1, data2);
        
        // Promise.allSettled for handling mixed results
        const results = await Promise.allSettled([
            fetchDataAsync("https://api1.com"),
            fetchDataAsync("https://api2.com"),
            fetchDataAsync("https://api3.com")
        ]);
        
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(\`Request \${index + 1} succeeded: \${result.value}\`);
            } else {
                console.log(\`Request \${index + 1} failed: \${result.reason}\`);
            }
        });
    } catch (error) {
        console.error("Main error:", error);
    }
}

// Chaining operations
fetchDataAsync("https://api.com")
    .then(data => data.toUpperCase())
    .then(uppercased => console.log(uppercased))
    .catch(error => console.error("Error:", error));

// Creating custom promises
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Using async/await with delay
async function delayedOperation() {
    console.log("Starting...");
    await delay(2000);
    console.log("Finished after 2 seconds");
}

// Run async function
main();
delayedOperation();`
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