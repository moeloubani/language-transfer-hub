import type { LanguageComparison } from '../../types/language';

export const pythonJavascriptComparison: LanguageComparison = {
    sourceLanguage: 'Python',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration',
        sourceCode: `# Python variables - no declaration keyword
name = "John"
age = 25
is_active = True

# Dynamic typing
value = 42          # integer
value = "hello"     # now string
value = [1, 2, 3]   # now list

# Convention: UPPER_CASE for constants
PI = 3.14159
MAX_SIZE = 100`,
        targetCode: `// var: function-scoped, hoisted
var count = 0;
var count = 1; // OK to redeclare

// let: block-scoped, not hoisted
let age = 25;
age = 26; // OK to reassign
// let age = 30; // Error: already declared

// const: block-scoped, immutable binding
const name = "John";
// name = "Jane"; // Error: can't reassign

// const with mutable contents
const config = { debug: true };
config.debug = false; // OK - object is mutable
config.mode = "production"; // OK - can add properties

// Use const by default, let when needed
const PI = 3.14159; // True constant
let counter = 0; // Will be incremented`
      },
      {
        topic: 'Lists / Arrays',
        description: 'Creating and manipulating lists',
        sourceCode: `fruits = ["apple", "banana", "orange"]
first = fruits[0]
fruits.append("grape")
length = len(fruits)`,
        targetCode: `const fruits = ["apple", "banana", "orange"];
const first = fruits[0];
fruits.push("grape");
const length = fruits.length;

// Modern destructuring and spread
const [firstFruit, secondFruit, ...others] = fruits;
const moreFruits = [...fruits, "kiwi", "mango"];
console.log({ firstFruit, moreFruits });`
      },
      {
        topic: 'Dictionaries / Objects',
        description: 'Key-value data structures',
        sourceCode: `person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
print(person["name"])
print(person.get("age", 0))`,
        targetCode: `const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Traditional access
console.log(person.name);
console.log(person.age || 0);

// Modern destructuring with default values
const { name, age = 0, email = "unknown" } = person;
console.log({ name, age, email });

// Object spread and merging
const updatedPerson = { ...person, age: 31, country: "USA" };
console.log(updatedPerson);`
      },
      {
        topic: 'Functions',
        description: 'Function definition',
        sourceCode: `# Regular function
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Lambda function
square = lambda x: x ** 2

# Functions as first-class objects
def apply_twice(func, arg):
    return func(func(arg))

# Keyword arguments
def create_user(name, age, **kwargs):
    user = {"name": name, "age": age}
    user.update(kwargs)
    return user

# Usage
print(greet("John"))
print(square(5))
print(apply_twice(square, 2))  # 16
print(create_user("Alice", 25, city="NYC", role="admin"))`,
        targetCode: `// Traditional function declaration
function greet(name, greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
}

// Arrow function expression
const greetArrow = (name, greeting = "Hello") => \`\${greeting}, \${name}!\`;

// Single-expression arrow function (implicit return)
const square = x => x ** 2;

// Function expression
const multiply = function(a, b) {
    return a * b;
};

// Higher-order function
const applyTwice = (func, arg) => func(func(arg));

// Rest parameters (like Python's **kwargs)
function createUser(name, age, ...extras) {
    const user = { name, age };
    if (extras.length > 0) {
        const [city, role] = extras;
        if (city) user.city = city;
        if (role) user.role = role;
    }
    return user;
}

// Destructuring parameters
const createUserDestructured = ({ name, age, city = "Unknown", role = "user" }) => ({
    name,
    age,
    city,
    role
});

// Usage
console.log(greet("John"));
console.log(square(5));
console.log(applyTwice(square, 2)); // 16
console.log(createUser("Alice", 25, "NYC", "admin"));
console.log(createUserDestructured({ name: "Bob", age: 30, role: "admin" }));`
      },
      {
        topic: 'List Comprehension / Array Methods',
        description: 'Transforming lists/arrays',
        sourceCode: `numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
evens = [x for x in numbers if x % 2 == 0]`,
        targetCode: `const numbers = [1, 2, 3, 4, 5];

// Array methods (modern functional approach)
const squared = numbers.map(x => x**2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, x) => acc + x, 0);

// Chaining methods
const evenSquares = numbers
  .filter(x => x % 2 === 0)
  .map(x => x**2);

console.log({ squared, evens, sum, evenSquares });`
      },
      {
        topic: 'Classes',
        description: 'Object-oriented programming',
        sourceCode: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hi, I'm {self.name}"

person = Person("John", 30)
print(person.greet())`,
        targetCode: `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return \`Hi, I'm \${this.name}\`;
    }
}

const person = new Person("John", 30);
console.log(person.greet());`
      },
      {
        topic: 'Async Programming',
        description: 'Asynchronous operations and promises',
        sourceCode: `import asyncio
import aiohttp

# Async function definition
async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

# Multiple concurrent requests
async def fetch_multiple(urls):
    tasks = [fetch_data(url) for url in urls]
    results = await asyncio.gather(*tasks)
    return results

# Running async code
async def main():
    data = await fetch_data("https://api.example.com")
    print(data)
    
    # Concurrent requests
    urls = ["https://api1.com", "https://api2.com"]
    results = await fetch_multiple(urls)
    print(results)

# Python 3.7+
asyncio.run(main())`,
        targetCode: `// Async function with async/await
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

// Multiple concurrent requests with Promise.all
async function fetchMultiple(urls) {
    try {
        const promises = urls.map(url => fetchData(url));
        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error("Error in parallel fetch:", error);
        throw error;
    }
}

// Using async functions
async function main() {
    try {
        // Single request
        const data = await fetchData("https://api.example.com");
        console.log(data);
        
        // Concurrent requests
        const urls = ["https://api1.com", "https://api2.com"];
        const results = await fetchMultiple(urls);
        console.log(results);
    } catch (error) {
        console.error("Main error:", error);
    }
}

// Run the async function
main();

// Alternative: using .then() and .catch()
fetchData("https://api.example.com")
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Creating and handling promises
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Async generator function
async function* asyncGenerator() {
    for (let i = 0; i < 3; i++) {
        await delay(1000);
        yield i;
    }
}

// Using async generator
(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
})();`
      }
    ],
    commonPitfalls: [
      {
        title: 'Indentation vs Braces',
        description: 'Python uses indentation, JavaScript uses braces',
        sourceExample: `if condition:
    do_something()
    do_another_thing()`,
        targetExample: `if (condition) {
    doSomething();
    doAnotherThing();
}`,
        correctApproach: 'Always use braces in JavaScript, even for single statements'
      },
      {
        title: 'Truthy/Falsy Values',
        description: 'Different falsy values between languages',
        sourceExample: `# Python falsy: False, None, 0, "", [], {}
if not []:
    print("Empty list is falsy")`,
        targetExample: `// JS falsy: false, null, undefined, 0, "", NaN
if (![]) {
    // This won't execute! [] is truthy in JS
}`,
        correctApproach: 'Check array length explicitly: if (arr.length === 0)'
      },
      {
        title: 'String Methods',
        description: 'Different naming conventions',
        sourceExample: `text = "Hello World"
text.lower()
text.upper()
text.split()`,
        targetExample: `let text = "Hello World";
text.toLowerCase();
text.toUpperCase();
text.split(" ");`,
        correctApproach: 'JavaScript uses camelCase for methods, Python uses snake_case'
      }
    ],
    keyDifferences: [
      {
        topic: 'Import System',
        description: 'Module importing syntax',
        sourceApproach: 'Python uses import and from...import statements',
        targetApproach: 'JavaScript uses import/export with ES6 modules or require() with CommonJS'
      },
      {
        topic: 'Type System',
        description: 'Static vs dynamic typing',
        sourceApproach: 'Python is dynamically typed with optional type hints (Python 3.5+)',
        targetApproach: 'JavaScript is dynamically typed; TypeScript adds static typing'
      },
      {
        topic: 'Standard Library',
        description: 'Built-in functionality',
        sourceApproach: 'Python has a comprehensive standard library ("batteries included")',
        targetApproach: 'JavaScript has a smaller standard library, relies more on npm packages'
      }
    ]
};