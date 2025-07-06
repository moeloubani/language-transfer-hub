import type { LanguageComparison } from '../../types/language';

export const phpJavascriptComparison: LanguageComparison = {
    sourceLanguage: 'PHP',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration and assignment',
        sourceCode: `// PHP variables always start with $
$name = "John";
$age = 25;
$isActive = true;

// Variables are dynamically typed
$value = 42;        // integer
$value = "hello";   // now string
$value = 3.14;      // now float`,
        targetCode: `// var: function-scoped, can be redeclared
var oldWay = "legacy";
var oldWay = "redeclared"; // OK

// let: block-scoped, mutable
let age = 25;
age = 26; // OK
// let age = 27; // Error: already declared

// const: block-scoped, immutable binding
const name = "John";
// name = "Jane"; // Error: can't reassign

// const with objects/arrays - contents mutable
const person = { name: "John" };
person.name = "Jane"; // OK
person.age = 30; // OK`
      },
      {
        topic: 'Arrays',
        description: 'Creating and accessing arrays',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape"; // Add to end`,
        targetCode: `const fruits = ["apple", "banana", "orange"];
const first = fruits[0];
fruits.push("grape"); // Add to end

// Modern destructuring and spread
const [firstFruit, secondFruit, ...restFruits] = fruits;
const newFruits = [...fruits, "kiwi", "mango"];
console.log(firstFruit, newFruits);`
      },
      {
        topic: 'Associative Arrays / Objects',
        description: 'Key-value pairs',
        sourceCode: `$person = [
  "name" => "John",
  "age" => 30,
  "city" => "New York"
];
echo $person["name"];`,
        targetCode: `const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Traditional access
console.log(person.name);

// Modern destructuring
const { name, age, city } = person;
console.log(name, age, city);`
      },
      {
        topic: 'Functions',
        description: 'Function declaration and calling',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}

echo greet("John");
echo greet("Jane", "Hi");`,
        targetCode: `// Traditional function
function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

// Modern arrow function
const greetArrow = (name, greeting = "Hello") => \`\${greeting}, \${name}!\`;

// Usage
console.log(greet("John"));
console.log(greetArrow("Jane", "Hi"));`
      },
      {
        topic: 'Loops',
        description: 'For and foreach/for-of loops',
        sourceCode: `// For loop
for ($i = 0; $i < 5; $i++) {
  echo $i;
}

// Foreach loop
$colors = ["red", "green", "blue"];
foreach ($colors as $color) {
  echo $color;
}`,
        targetCode: `// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For-of loop
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}`
      },
      {
        topic: 'Conditional Statements',
        description: 'If-else conditions',
        sourceCode: `$age = 18;

if ($age >= 18) {
  echo "Adult";
} elseif ($age >= 13) {
  echo "Teenager";
} else {
  echo "Child";
}`,
        targetCode: `const age = 18;

if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}`
      },
      {
        topic: 'Classes',
        description: 'Object-oriented programming',
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
}

$person = new Person("John", 30);
echo $person->greet();`,
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
      }
    ],
    commonPitfalls: [
      {
        title: 'String Concatenation',
        description: 'PHP uses . for concatenation, JavaScript uses +',
        sourceExample: `$message = "Hello " . $name . "!";`,
        targetExample: `const message = "Hello " + name + "!";

// Modern template literals (preferred)
const betterMessage = \`Hello \${name}!\`;

// With optional chaining for nested properties
const greeting = \`Hello \${user?.profile?.name ?? 'Guest'}!\`;`,
        correctApproach: 'Use template literals (\`\`) for cleaner string interpolation and optional chaining (?.) for safe property access'
      },
      {
        title: 'Variable Scope',
        description: 'JavaScript has block scope with let/const, PHP has function scope',
        sourceExample: `if (true) {
  $x = 10;
}
echo $x; // Works in PHP`,
        targetExample: `if (true) {
  let x = 10;
}
console.log(x); // Error in JavaScript`,
        correctApproach: 'Declare variables in the appropriate scope or use var for function scope (not recommended)'
      },
      {
        title: 'Array Methods',
        description: 'PHP array functions vs JavaScript array methods',
        sourceExample: `array_push($arr, $item);
count($arr);
in_array($item, $arr);`,
        targetExample: `arr.push(item);
arr.length;
arr.includes(item);`,
        correctApproach: 'JavaScript arrays have built-in methods, not standalone functions'
      }
    ],
    keyDifferences: [
      {
        topic: 'Type System',
        description: 'PHP is dynamically typed with type hints, JavaScript is dynamically typed',
        sourceApproach: 'PHP 7+ supports type declarations for parameters and return types',
        targetApproach: 'JavaScript is dynamically typed; use TypeScript for static typing'
      },
      {
        topic: 'Execution Environment',
        description: 'Where the code runs',
        sourceApproach: 'PHP runs on the server-side, requires a web server',
        targetApproach: 'JavaScript runs in browsers and Node.js (server-side)'
      },
      {
        topic: 'Asynchronous Programming',
        description: 'Handling async operations',
        sourceApproach: 'PHP is primarily synchronous, though supports async with libraries',
        targetApproach: 'JavaScript is async-first with callbacks, promises, and async/await'
      }
    ]
};