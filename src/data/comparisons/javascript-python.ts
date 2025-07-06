import type { LanguageComparison } from '../../types/language';

export const javascriptPythonComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Python',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Basic syntax differences',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;
let items = [];

// Semicolons required
console.log("Hello World");`,
        targetCode: `name = "John"
age = 25
is_active = True  # Note: True/False capitalized
items = []

# No semicolons needed
print("Hello World")`
      },
      {
        topic: 'Functions',
        description: 'Function definition syntax',
        sourceCode: `function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

const add = (a, b) => a + b;

// Calling functions
console.log(greet("John"));
console.log(add(5, 3));`,
        targetCode: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Python doesn't have arrow functions
def add(a, b):
    return a + b

# Calling functions
print(greet("John"))
print(add(5, 3))`
      },
      {
        topic: 'Arrays vs Lists',
        description: 'Working with collections',
        sourceCode: `let fruits = ["apple", "banana", "orange"];
let first = fruits[0];
fruits.push("grape");
let length = fruits.length;

// Array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(x => x * 2);
let evens = numbers.filter(x => x % 2 === 0);`,
        targetCode: `fruits = ["apple", "banana", "orange"]
first = fruits[0]
fruits.append("grape")
length = len(fruits)

# List comprehensions (more Pythonic)
numbers = [1, 2, 3, 4, 5]
doubled = [x * 2 for x in numbers]
evens = [x for x in numbers if x % 2 == 0]`
      },
      {
        topic: 'Objects vs Dictionaries',
        description: 'Key-value data structures',
        sourceCode: `let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name);
console.log(person["age"]);
person.email = "john@example.com";

// Object destructuring
const {name, age} = person;`,
        targetCode: `person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

print(person["name"])
print(person["age"])
person["email"] = "john@example.com"

# Dictionary unpacking
name = person["name"]
age = person["age"]`
      },
      {
        topic: 'Classes',
        description: 'Object-oriented programming',
        sourceCode: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
  
  get info() {
    return \`\${this.name} is \${this.age} years old\`;
  }
}

let person = new Person("John", 30);`,
        targetCode: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hi, I'm {self.name}"
    
    @property
    def info(self):
        return f"{self.name} is {self.age} years old"

person = Person("John", 30)`
      },
      {
        topic: 'Async Programming',
        description: 'Handling asynchronous operations',
        sourceCode: `// Modern async/await with Promise.all
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

// Fetch multiple endpoints concurrently
async function fetchMultiple(urls) {
  try {
    const results = await Promise.all(
      urls.map(url => fetchData(url))
    );
    return results;
  } catch (error) {
    console.error("Multiple fetch error:", error);
    throw error;
  }
}

// Usage with proper error handling
async function main() {
  try {
    const data = await fetchData("https://api.example.com/data");
    console.log(data);
    
    const multiple = await fetchMultiple([
      "https://api.example.com/users",
      "https://api.example.com/posts"
    ]);
    console.log(multiple);
  } catch (error) {
    console.error("Application error:", error);
  }
}`,
        targetCode: `import asyncio
import aiohttp

async def fetch_data(url):
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response:
                data = await response.json()
                return data
    except Exception as error:
        print(f"Error: {error}")

# Using the function
async def main():
    data = await fetch_data("https://api.example.com/data")
    print(data)

asyncio.run(main())`
      }
    ],
    commonPitfalls: [
      {
        title: 'Indentation vs Braces',
        description: 'Python uses indentation for code blocks',
        sourceExample: `if (condition) {
  doSomething();
  doAnotherThing();
}`,
        targetExample: `if condition:
    do_something()
    do_another_thing()`,
        correctApproach: 'Use consistent indentation (4 spaces) instead of braces'
      },
      {
        title: 'Variable Naming',
        description: 'Different naming conventions',
        sourceExample: `let firstName = "John";
let isUserActive = true;
function getUserData() { }`,
        targetExample: `first_name = "John"
is_user_active = True
def get_user_data():
    pass`,
        correctApproach: 'Use snake_case for variables and functions in Python'
      },
      {
        title: 'Truthiness',
        description: 'Different falsy values',
        sourceExample: `if ([]) {
  // This executes - empty array is truthy
}
if ({}) {
  // This executes - empty object is truthy
}`,
        targetExample: `if []:
    # This does NOT execute - empty list is falsy
    pass
if {}:
    # This does NOT execute - empty dict is falsy
    pass`,
        correctApproach: 'Check length explicitly: if len(items) > 0:'
      },
      {
        title: 'String Formatting',
        description: 'Different approaches to string interpolation',
        sourceExample: `let name = "John";
let age = 30;
let message = \`Hello \${name}, you are \${age} years old\`;`,
        targetExample: `name = "John"
age = 30
message = f"Hello {name}, you are {age} years old"`,
        correctApproach: 'Use f-strings (Python 3.6+) for string formatting'
      }
    ],
    keyDifferences: [
      {
        topic: 'Execution Environment',
        description: 'Where code runs',
        sourceApproach: 'JavaScript runs in browsers and Node.js',
        targetApproach: 'Python runs on servers, desktops, and embedded systems'
      },
      {
        topic: 'Syntax Philosophy',
        description: 'Code structure approach',
        sourceApproach: 'JavaScript uses braces and semicolons (C-style syntax)',
        targetApproach: 'Python emphasizes readability with indentation and minimal punctuation'
      },
      {
        topic: 'Standard Library',
        description: 'Built-in functionality',
        sourceApproach: 'JavaScript has minimal standard library, relies on npm packages',
        targetApproach: 'Python has extensive standard library ("batteries included")'
      },
      {
        topic: 'Asynchronous Programming',
        description: 'Concurrency models',
        sourceApproach: 'JavaScript is async-first with event loop',
        targetApproach: 'Python added async support later, still primarily synchronous'
      }
    ]
};