import type { LanguageComparison } from '../../types/language';

export const csharpJavascriptComparison: LanguageComparison = {
    sourceLanguage: 'C#',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static typing to dynamic typing',
        sourceCode: `// C# requires explicit types (or var)
string name = "John";
int age = 25;
bool isActive = true;
const double PI = 3.14159; // compile-time constant
readonly int maxSize = 100; // runtime constant

// Type inference with var
var inferredName = "John";
var inferredAge = 25;

// Nullable types
string? nullableName = null;
int? nullableAge = null;`,
        targetCode: `// var: function-scoped, hoisted, redeclarable
var globalConfig = "old way";
var globalConfig = "redeclared"; // OK

// let: block-scoped, mutable, modern
let age = 25;
age = 26; // OK - can reassign
{ let age = 30; } // OK - different scope

// const: block-scoped, immutable binding (preferred)
const name = "John";
// name = "Jane"; // Error: can't reassign
const PI = 3.14159; // Like C#'s const

// const with mutable objects
const user = { name: "John" };
user.name = "Jane"; // OK - object is mutable
user.age = 25; // OK - can add properties

// No built-in nullable types (use null/undefined)
let nullableName = null;
let nullableAge = undefined;`
      },
      {
        topic: 'Classes and Objects',
        description: 'OOP with different approaches',
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
    
    public string Greet() {
        return $"Hi, I'm {this.name}";
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
    
    greet() {
        return \`Hi, I'm \${this._name}\`;
    }
}

const person = new Person("John", 30);`
      },
      {
        topic: 'Methods and Functions',
        description: 'Function definition approaches',
        sourceCode: `public class MathUtils {
    public static int Add(int a, int b) {
        return a + b;
    }
    
    public static double CalculateArea(double radius) {
        return Math.PI * radius * radius;
    }
}

// Method overloading
public static string Greet(string name) {
    return $"Hello, {name}";
}

public static string Greet(string name, string greeting) {
    return $"{greeting}, {name}";
}`,
        targetCode: `// Functions don't need classes
function add(a, b) {
    return a + b;
}

function calculateArea(radius) {
    return Math.PI * radius * radius;
}

// Function overloading simulation
function greet(name, greeting = "Hello") {
    return \`\${greeting}, \${name}\`;
}

// Arrow functions
const addArrow = (a, b) => a + b;`
      },
      {
        topic: 'Collections and Arrays',
        description: 'Working with data structures',
        sourceCode: `// C# Arrays and Collections
string[] fruits = {"apple", "banana", "orange"};
List<string> fruitsList = new List<string>(fruits);
fruitsList.Add("grape");

Dictionary<string, int> ages = new Dictionary<string, int> {
    {"John", 30},
    {"Jane", 25}
};

// LINQ operations
var upperFruits = fruitsList.Select(f => f.ToUpper()).ToList();
var adults = ages.Where(kvp => kvp.Value >= 18).ToList();`,
        targetCode: `// JavaScript Arrays
const fruits = ["apple", "banana", "orange"];
const fruitsList = [...fruits];
fruitsList.push("grape");

const ages = new Map([
    ["John", 30],
    ["Jane", 25]
]);

// Array methods
const upperFruits = fruitsList.map(f => f.toUpperCase());
const adults = Array.from(ages).filter(([name, age]) => age >= 18);`
      },
      {
        topic: 'Async Programming',
        description: 'Asynchronous operations',
        sourceCode: `// C# async/await
public async Task<string> FetchDataAsync(string url) {
    try {
        using (HttpClient client = new HttpClient()) {
            HttpResponseMessage response = await client.GetAsync(url);
            return await response.Content.ReadAsStringAsync();
        }
    } catch (Exception ex) {
        Console.WriteLine($"Error: {ex.Message}");
        return null;
    }
}

// Usage
string data = await FetchDataAsync("https://api.example.com/data");`,
        targetCode: `// Modern JavaScript async/await with enhanced error handling
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
        }
        return await response.text();
    } catch (error) {
        console.error(\`Error fetching \${url}:\`, error.message);
        throw error; // Re-throw for caller to handle
    }
}

// Multiple concurrent requests (like C# Task.WhenAll)
async function fetchMultiple(urls) {
    try {
        const results = await Promise.all(
            urls.map(url => fetchData(url))
        );
        return results;
    } catch (error) {
        console.error('One or more requests failed:', error);
        throw error;
    }
}

// Usage with proper error handling
async function main() {
    try {
        // Single request
        const data = await fetchData("https://api.example.com/data");
        console.log(data);
        
        // Multiple requests
        const multiple = await fetchMultiple([
            "https://api.example.com/users",
            "https://api.example.com/posts"
        ]);
        console.log(multiple);
    } catch (error) {
        console.error('Application error:', error);
    }
}`
      },
      {
        topic: 'Error Handling',
        description: 'Exception handling approaches',
        sourceCode: `try {
    string content = File.ReadAllText("data.txt");
    int number = int.Parse(content);
    Console.WriteLine(number);
} catch (FileNotFoundException ex) {
    Console.WriteLine($"File not found: {ex.Message}");
} catch (FormatException ex) {
    Console.WriteLine($"Invalid format: {ex.Message}");
} catch (Exception ex) {
    Console.WriteLine($"General error: {ex.Message}");
} finally {
    Console.WriteLine("Cleanup completed");
}`,
        targetCode: `// Modern error handling with validation
function readAndParseFile(filename) {
    try {
        const content = require('fs').readFileSync(filename, 'utf8');
        
        // Input validation
        if (!content.trim()) {
            throw new Error('File is empty');
        }
        
        const number = parseInt(content.trim());
        
        // Validation with meaningful errors
        if (isNaN(number)) {
            throw new Error(\`Invalid number format: "\${content.trim()}"\`);
        }
        
        return { success: true, data: number };
    } catch (error) {
        // Error type checking and handling
        if (error.code === 'ENOENT') {
            console.error(\`File not found: \${filename}\`);
            return { success: false, error: 'FILE_NOT_FOUND' };
        } else if (error.code === 'EACCES') {
            console.error(\`Permission denied: \${filename}\`);
            return { success: false, error: 'PERMISSION_DENIED' };
        } else {
            console.error(\`Parse error: \${error.message}\`);
            return { success: false, error: 'PARSE_ERROR' };
        }
    } finally {
        console.log("File operation completed");
    }
}

// Usage with result pattern
const result = readAndParseFile('data.txt');
if (result.success) {
    console.log(\`Number: \${result.data}\`);
} else {
    console.log(\`Failed: \${result.error}\`);
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Naming Conventions',
        description: 'PascalCase vs camelCase',
        sourceExample: `public void GetUserData() { }
public string UserName { get; set; }`,
        targetExample: `function getUserData() { }
const userName = "john";`,
        correctApproach: 'Use camelCase for variables and functions in JavaScript'
      },
      {
        title: 'Type Safety',
        description: 'Static vs dynamic typing',
        sourceExample: `string name = "John";
name = 123; // Compilation error`,
        targetExample: `let name = "John";
name = 123; // Perfectly fine`,
        correctApproach: 'Be careful with type changes in JavaScript, consider TypeScript for type safety'
      },
      {
        title: 'Null vs Undefined',
        description: 'Different null concepts',
        sourceExample: `string value = null;
if (value == null) {
    // Handle null
}`,
        targetExample: `const value = null;
if (value === null || value === undefined) {
    // Handle both cases
}`,

        correctApproach: 'Understand JavaScript has both null and undefined'
      },
      {
        title: 'Collections vs Arrays',
        description: 'Different data structure approaches',
        sourceExample: `List<string> items = new List<string>();
items.Add("item");
int count = items.Count;`,
        targetExample: `const items = [];
items.push("item");
const count = items.length;`,
        correctApproach: 'JavaScript arrays are more flexible but less type-safe'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform and Runtime',
        description: 'Execution environment',
        sourceApproach: 'C# runs on .NET runtime, primarily desktop and server applications',
        targetApproach: 'JavaScript runs in browsers and Node.js, web-focused'
      },
      {
        topic: 'Type System',
        description: 'Compile-time vs runtime typing',
        sourceApproach: 'C# has strong static typing with compile-time checking',
        targetApproach: 'JavaScript is dynamically typed with runtime type checking'
      },
      {
        topic: 'Memory Management',
        description: 'Automatic memory handling',
        sourceApproach: 'C# has sophisticated garbage collection with generations',
        targetApproach: 'JavaScript has simpler garbage collection optimized for short-lived objects'
      },
      {
        topic: 'Development Ecosystem',
        description: 'Tooling and frameworks',
        sourceApproach: 'C# has Visual Studio, NuGet, enterprise-focused frameworks',
        targetApproach: 'JavaScript has diverse tooling, npm ecosystem, web-focused frameworks'
      },
      {
        topic: 'Concurrency Model',
        description: 'Handling concurrent operations',
        sourceApproach: 'C# uses threads, Tasks, and async/await with thread pool',
        targetApproach: 'JavaScript uses event loop with single-threaded execution'
      }
    ]
};