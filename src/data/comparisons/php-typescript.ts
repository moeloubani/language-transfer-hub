import type { LanguageComparison } from '../../types/language';

export const phpTypescriptComparison: LanguageComparison = {
    sourceLanguage: 'PHP',
    targetLanguage: 'TypeScript',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Variable declaration with optional typing',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;
$score = 95.5;`,
        targetCode: `const name: string = "John";
const age: number = 25;
const isActive: boolean = true;
const score: number = 95.5;

// Type inference also works
const inferredName = "John"; // string
const inferredAge = 25; // number`
      },
      {
        topic: 'Arrays and Objects',
        description: 'Working with typed arrays and objects',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape";

// Associative array
$person = [
  "name" => "John",
  "age" => 30,
  "city" => "New York"
];`,
        targetCode: `const fruits: string[] = ["apple", "banana", "orange"];
const first: string = fruits[0];
fruits.push("grape");

// Object with type annotation
const person: {name: string, age: number, city: string} = {
  name: "John",
  age: 30,
  city: "New York"
};

// Or using interface
interface Person {
  name: string;
  age: number;
  city: string;
}

const typedPerson: Person = {
  name: "John",
  age: 30,
  city: "New York"
};`
      },
      {
        topic: 'Functions',
        description: 'Function declaration with type annotations',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}

function calculateArea($width, $height) {
  return $width * $height;
}

echo greet("John");`,
        targetCode: `function greet(name: string, greeting: string = "Hello"): string {
  return \`\${greeting}, \${name}!\`;
}

function calculateArea(width: number, height: number): number {
  return width * height;
}

// Arrow function
const greetArrow = (name: string, greeting: string = "Hello"): string => {
  return \`\${greeting}, \${name}!\`;
};

console.log(greet("John"));`
      },
      {
        topic: 'Classes and Interfaces',
        description: 'Object-oriented programming with types',
        sourceCode: `class Person {
  private $name;
  private $age;
  
  public function __construct($name, $age) {
    $this->name = $name;
    $this->age = $age;
  }
  
  public function greet() {
    return "Hi, I'm " . $this->name;
  }
  
  public function getName() {
    return $this->name;
  }
}

$person = new Person("John", 30);`,
        targetCode: `interface IGreetable {
  greet(): string;
}

class Person implements IGreetable {
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
}

const person: Person = new Person("John", 30);`
      },
      {
        topic: 'Generics and Advanced Types',
        description: 'TypeScript-specific type features',
        sourceCode: `// PHP doesn't have generics, but here's similar functionality
class Container {
  private $value;
  
  public function __construct($value) {
    $this->value = $value;
  }
  
  public function getValue() {
    return $this->value;
  }
}

$stringContainer = new Container("hello");
$numberContainer = new Container(42);`,
        targetCode: `// Generic class
class Container<T> {
  private value: T;
  
  constructor(value: T) {
    this.value = value;
  }
  
  getValue(): T {
    return this.value;
  }
}

const stringContainer = new Container<string>("hello");
const numberContainer = new Container<number>(42);

// Union types
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42; // Both are valid (let is correct here since value changes)

// Optional properties
interface User {
  name: string;
  email?: string; // Optional
  age: number;
}`
      },
      {
        topic: 'Async Programming',
        description: 'Asynchronous operations with types',
        sourceCode: `// PHP async (using ReactPHP or similar)
function fetchData($url) {
  // Simulate async operation
  return file_get_contents($url);
}

$data = fetchData("https://api.example.com/data");`,
        targetCode: `// Modern async/await with error handling
async function fetchData(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return await response.text();
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
}

// Multiple async operations with Promise.all
async function fetchMultipleUrls(urls: string[]): Promise<string[]> {
  try {
    const responses = await Promise.all(
      urls.map(url => fetchData(url))
    );
    return responses;
  } catch (error) {
    console.error('One or more requests failed:', error);
    throw error;
  }
}

// Usage
async function main() {
  try {
    const data = await fetchData("https://api.example.com/data");
    console.log(data);
    
    // Fetch multiple endpoints
    const multiple = await fetchMultipleUrls([
      "https://api.example.com/users",
      "https://api.example.com/posts"
    ]);
    console.log(multiple);
  } catch (error) {
    console.error('Application error:', error);
  }
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Type Annotations vs No Types',
        description: 'TypeScript benefits from explicit typing',
        sourceExample: `$data = getData(); // Unknown return type
$result = $data->process();`,
        targetExample: `let data = getData(); // any type - not ideal
let result = data.process(); // No type safety

// Better:
let data: UserData = getData();
let result: ProcessedData = data.process();`,
        correctApproach: 'Use explicit type annotations to get full TypeScript benefits'
      },
      {
        title: 'Null vs Undefined',
        description: 'TypeScript has both null and undefined',
        sourceExample: `$value = null;
if ($value === null) {
  // Handle null
}`,
        targetExample: `let value: string | null = null;
let uninitialized: string | undefined = undefined;

// Better: use optional chaining
value?.toLowerCase();`,
        correctApproach: 'Understand the difference between null and undefined, use optional chaining'
      },
      {
        title: 'Array Type Declarations',
        description: 'Multiple ways to declare array types',
        sourceExample: `$numbers = [1, 2, 3];
$strings = ["a", "b", "c"];`,
        targetExample: `let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Mixed types need union
let mixed: (string | number)[] = [1, "a", 2];`,
        correctApproach: 'Be explicit about array types, use unions for mixed arrays'
      },
      {
        title: 'Interface vs Type',
        description: 'Different ways to define object shapes',
        sourceExample: `// PHP doesn't distinguish between these concepts
class UserData {
  public $name;
  public $age;
}`,
        targetExample: `// Interface (preferred for objects)
interface User {
  name: string;
  age: number;
}

// Type alias
type UserType = {
  name: string;
  age: number;
};

// Use interface for extensible object shapes`,
        correctApproach: 'Use interfaces for object shapes, types for unions and computed types'
      },
      {
        title: 'Function Overloads',
        description: 'TypeScript supports function overloading',
        sourceExample: `function process($input) {
  if (is_string($input)) {
    return strtoupper($input);
  } else {
    return $input * 2;
  }
}`,
        targetExample: `// Function overloads
function process(input: string): string;
function process(input: number): number;
function process(input: string | number): string | number {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}`,
        correctApproach: 'Use function overloads to provide type safety for different parameter types'
      }
    ],
    keyDifferences: [
      {
        topic: 'Type System',
        description: 'Compile-time vs runtime typing',
        sourceApproach: 'PHP has runtime type checking with optional type hints',
        targetApproach: 'TypeScript has compile-time type checking, compiles to JavaScript'
      },
      {
        topic: 'Compilation',
        description: 'Code transformation process',
        sourceApproach: 'PHP is interpreted directly, no compilation needed',
        targetApproach: 'TypeScript compiles to JavaScript, catching errors at build time'
      },
      {
        topic: 'Modern Language Features',
        description: 'Advanced programming constructs',
        sourceApproach: 'PHP has basic OOP features, limited generic programming',
        targetApproach: 'TypeScript has advanced features: generics, decorators, union types'
      },
      {
        topic: 'Execution Environment',
        description: 'Where code runs',
        sourceApproach: 'PHP runs on servers, primarily backend development',
        targetApproach: 'TypeScript compiles to JavaScript, runs in browsers and Node.js'
      },
      {
        topic: 'Asynchronous Programming',
        description: 'Handling async operations',
        sourceApproach: 'PHP is traditionally synchronous, async libraries available',
        targetApproach: 'TypeScript/JavaScript is async-first with Promises and async/await'
      },
      {
        topic: 'Ecosystem',
        description: 'Package management and tooling',
        sourceApproach: 'PHP uses Composer, focused on web development packages',
        targetApproach: 'TypeScript uses npm/yarn, vast JavaScript ecosystem available'
      }
    ]
};