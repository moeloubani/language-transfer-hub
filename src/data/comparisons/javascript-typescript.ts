import type { LanguageComparison } from '../../types/language';

export const javascriptTypescriptComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'TypeScript',
    syntaxExamples: [
      {
        topic: 'Variables with Types',
        description: 'Adding type annotations to JavaScript variables',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;
let user = {
  id: 1,
  email: "john@example.com"
};`,
        targetCode: `const name: string = "John";
const age: number = 25;
const isActive: boolean = true;
const user: {id: number, email: string} = {
  id: 1,
  email: "john@example.com"
};

// Or with interface
interface User {
  id: number;
  email: string;
}
const typedUser: User = {
  id: 1,
  email: "john@example.com"
};`
      },
      {
        topic: 'Functions with Type Safety',
        description: 'Adding type annotations to functions',
        sourceCode: `function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

function processUser(user) {
  return {
    ...user,
    isProcessed: true
  };
}

const add = (a, b) => a + b;`,
        targetCode: `function greet(name: string, greeting: string = "Hello"): string {
  return \`\${greeting}, \${name}!\`;
}

interface User {
  id: number;
  name: string;
}

function processUser(user: User): User & {isProcessed: boolean} {
  return {
    ...user,
    isProcessed: true
  };
}

const add = (a: number, b: number): number => a + b;`
      },
      {
        topic: 'Arrays and Objects',
        description: 'Type-safe collections',
        sourceCode: `let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true];
let users = [
  {name: "John", age: 30},
  {name: "Jane", age: 25}
];

function getFirstItem(arr) {
  return arr[0];
}`,
        targetCode: `const numbers: number[] = [1, 2, 3, 4, 5];
const mixed: (number | string | boolean)[] = [1, "hello", true];
const users: Array<{name: string, age: number}> = [
  {name: "John", age: 30},
  {name: "Jane", age: 25}
];

function getFirstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}`
      },
      {
        topic: 'Classes with Interfaces',
        description: 'Enhanced OOP with type safety',
        sourceCode: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
  
  getInfo() {
    return {
      name: this.name,
      age: this.age
    };
  }
}`,
        targetCode: `interface IGreetable {
  greet(): string;
}

interface PersonInfo {
  name: string;
  age: number;
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
  
  getInfo(): PersonInfo {
    return {
      name: this.name,
      age: this.age
    };
  }
}`
      },
      {
        topic: 'Advanced Types',
        description: 'TypeScript-specific type features',
        sourceCode: `// JavaScript doesn't have these type features
function handleResponse(response) {
  if (response.success) {
    return response.data;
  } else {
    throw new Error(response.error);
  }
}

function updateUser(user, updates) {
  return {...user, ...updates};
}`,
        targetCode: `// Union types
type ApiResponse<T> = 
  | {success: true, data: T}
  | {success: false, error: string};

function handleResponse<T>(response: ApiResponse<T>): T {
  if (response.success) {
    return response.data;
  } else {
    throw new Error(response.error);
  }
}

// Partial types
interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(user: User, updates: Partial<User>): User {
  return {...user, ...updates};
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Any Type Usage',
        description: 'Overusing any defeats TypeScript\'s purpose',
        sourceExample: `let data = getData(); // Inferred as any`,
        targetExample: `let data: any = getData(); // Bad!
let data = getData() as UserData; // Better
let data: UserData = getData(); // Best`,
        correctApproach: 'Always specify types explicitly or use proper type assertions'
      },
      {
        title: 'Optional vs Undefined',
        description: 'Understanding optional properties',
        sourceExample: `function greet(name) {
  return "Hello " + (name || "stranger");
}`,
        targetExample: `function greet(name?: string): string {
  return "Hello " + (name ?? "stranger");
}`,
        correctApproach: 'Use optional parameters (?) and nullish coalescing (??)'
      },
      {
        title: 'Type Guards',
        description: 'Proper type checking at runtime',
        sourceExample: `function processValue(value) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value * 2;
}`,
        targetExample: `function processValue(value: string | number): string | number {
  if (typeof value === "string") {
    return value.toUpperCase(); // TS knows it's string here
  }
  return value * 2; // TS knows it's number here
}`,
        correctApproach: 'Use type guards to narrow union types safely'
      }
    ],
    keyDifferences: [
      {
        topic: 'Type System',
        description: 'Static vs dynamic typing',
        sourceApproach: 'JavaScript is dynamically typed, errors found at runtime',
        targetApproach: 'TypeScript adds static typing, errors caught at compile time'
      },
      {
        topic: 'Development Experience',
        description: 'Tooling and IDE support',
        sourceApproach: 'JavaScript has basic autocomplete and limited refactoring',
        targetApproach: 'TypeScript provides rich IntelliSense, refactoring, and navigation'
      },
      {
        topic: 'Build Process',
        description: 'Compilation requirements',
        sourceApproach: 'JavaScript runs directly in browsers and Node.js',
        targetApproach: 'TypeScript needs compilation to JavaScript before execution'
      },
      {
        topic: 'Learning Curve',
        description: 'Complexity and adoption',
        sourceApproach: 'JavaScript is easier to start with, more forgiving',
        targetApproach: 'TypeScript has steeper learning curve but prevents many bugs'
      }
    ]
};