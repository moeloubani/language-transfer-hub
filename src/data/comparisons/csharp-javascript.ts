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
    // Static method
    public static int Add(int a, int b) {
        return a + b;
    }
    
    // Expression-bodied method (C# 6+)
    public static double CalculateArea(double radius) => Math.PI * radius * radius;
    
    // Method overloading
    public static string Greet(string name) {
        return $"Hello, {name}";
    }
    
    public static string Greet(string name, string greeting) {
        return $"{greeting}, {name}";
    }
    
    // Optional parameters
    public static void Log(string message, LogLevel level = LogLevel.Info) {
        Console.WriteLine($"[{level}] {message}");
    }
    
    // Generic method
    public static T Max<T>(T a, T b) where T : IComparable<T> {
        return a.CompareTo(b) > 0 ? a : b;
    }
    
    // Async method
    public static async Task<string> FetchDataAsync(string url) {
        using var client = new HttpClient();
        return await client.GetStringAsync(url);
    }
    
    // Lambda expression
    public static readonly Func<int, int> Square = x => x * x;
}`,
        targetCode: `// Standalone functions (no class needed)
function add(a, b) {
    return a + b;
}

// Arrow function (concise syntax)
const calculateArea = (radius) => Math.PI * radius * radius;

// Function expression
const multiply = function(a, b) {
    return a * b;
};

// Single-expression arrow function (implicit return)
const square = x => x * x;

// Function overloading - use default params or rest params
function greet(name, greeting = "Hello") {
    return \`\${greeting}, \${name}\`;
}

// Alternative: check argument count
function greetFlexible(...args) {
    if (args.length === 1) {
        return \`Hello, \${args[0]}\`;
    }
    return \`\${args[1]}, \${args[0]}\`;
}

// Optional parameters with defaults
function log(message, level = "INFO") {
    console.log(\`[\${level}] \${message}\`);
}

// Generic-like behavior (JS is dynamically typed)
function max(a, b) {
    return a > b ? a : b;
}

// Async function
async function fetchData(url) {
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

// Higher-order functions and closures
const createCounter = (initial = 0) => {
    let count = initial;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
};

// Function composition
const compose = (f, g) => x => f(g(x));
const addOne = x => x + 1;
const double = x => x * 2;
const addOneThenDouble = compose(double, addOne);

// Usage examples
console.log(add(5, 3)); // 8
console.log(square(4)); // 16
console.log(addOneThenDouble(3)); // 8
const counter = createCounter();
console.log(counter.increment()); // 1`
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
      },
      {
        topic: 'Modern Language Features',
        description: 'Destructuring, spread, and modern patterns',
        sourceCode: `// C# Tuples and Deconstruction
var (name, age) = GetPerson();
(string firstName, string lastName) = GetFullName();

// Pattern matching (C# 8+)
string GetDescription(object obj) => obj switch {
    int n when n > 0 => "Positive number",
    string s => $"String: {s}",
    null => "Null value",
    _ => "Unknown"
};

// Record types (C# 9+)
public record Person(string Name, int Age);
var person = new Person("John", 30);
var updatedPerson = person with { Age = 31 };

// Collection expressions (C# 12+)
int[] numbers = [1, 2, 3, 4, 5];
int[] moreNumbers = [..numbers, 6, 7, 8];

// Object initializers
var user = new User {
    Name = "John",
    Age = 30,
    Tags = new List<string> { "admin", "user" }
};

// LINQ for data transformation
var adults = people
    .Where(p => p.Age >= 18)
    .Select(p => new { p.Name, p.Age })
    .OrderBy(p => p.Name);`,
        targetCode: `// Array and Object Destructuring
const [name, age] = getPerson();
const [firstName, lastName] = getFullName();

// Object destructuring with renaming
const { name: userName, age: userAge } = user;

// Nested destructuring
const { address: { city, street } } = person;

// Default values in destructuring
const { theme = 'light', lang = 'en' } = settings;

// Pattern-like behavior with conditionals
const getDescription = (obj) => {
    if (typeof obj === 'number' && obj > 0) return "Positive number";
    if (typeof obj === 'string') return \`String: \${obj}\`;
    if (obj === null) return "Null value";
    return "Unknown";
};

// Object spread for immutable updates
const person = { name: "John", age: 30 };
const updatedPerson = { ...person, age: 31 };

// Array spread
const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [...numbers, 6, 7, 8];

// Rest parameters in destructuring
const { name, ...otherProps } = person;
const [first, ...rest] = numbers;

// Object property shorthand
const createUser = (name, age) => ({ name, age });

// Array methods for data transformation
const adults = people
    .filter(p => p.age >= 18)
    .map(p => ({ name: p.name, age: p.age }))
    .sort((a, b) => a.name.localeCompare(b.name));

// Optional chaining and nullish coalescing
const city = person?.address?.city ?? 'Unknown';
const port = config.port ?? 3000;

// Dynamic property names
const prop = 'status';
const obj = {
    [prop]: 'active',
    [\`is\${prop.charAt(0).toUpperCase() + prop.slice(1)}\`]: true
};

// Template literal tags
const sql = (strings, ...values) => {
    // SQL template tag implementation
    return { query: strings.join('?'), values };
};

const query = sql\`SELECT * FROM users WHERE id = \${userId}\`;`
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