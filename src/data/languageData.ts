import type { LanguageComparison } from '../types/language';

export const languageData: Record<string, LanguageComparison> = {
  'php-javascript': {
    sourceLanguage: 'PHP',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration and assignment',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;`,
        targetCode: `const name = "John";
const age = 25;
const isActive = true;`
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
  },
  'python-javascript': {
    sourceLanguage: 'Python',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration',
        sourceCode: `name = "John"
age = 25
is_active = True`,
        targetCode: `const name = "John";
const age = 25;
const isActive = true;`
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
        sourceCode: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("John"))
print(greet("Jane", "Hi"))`,
        targetCode: `// Traditional function
function greet(name, greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
}

// Arrow function (shorter)
const greetArrow = (name, greeting = "Hello") => \`\${greeting}, \${name}!\`;

console.log(greet("John"));
console.log(greetArrow("Jane", "Hi"));`
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
  },
  'java-javascript': {
    sourceLanguage: 'Java',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration with types',
        sourceCode: `String name = "John";
int age = 25;
boolean isActive = true;
final double PI = 3.14159;`,
        targetCode: `const name = "John";
const age = 25;
const isActive = true;
const PI = 3.14159;`
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
  },
  'php-python': {
    sourceLanguage: 'PHP',
    targetLanguage: 'Python',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration and assignment',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;`,
        targetCode: `name = "John"
age = 25
is_active = True`
      },
      {
        topic: 'Arrays / Lists',
        description: 'Creating and accessing arrays/lists',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape"; // Add to end
$count = count($fruits);`,
        targetCode: `fruits = ["apple", "banana", "orange"]
first = fruits[0]
fruits.append("grape")  # Add to end
count = len(fruits)`
      },
      {
        topic: 'Associative Arrays / Dictionaries',
        description: 'Key-value data structures',
        sourceCode: `$person = [
  "name" => "John",
  "age" => 30,
  "city" => "New York"
];
echo $person["name"];
$hasAge = isset($person["age"]);`,
        targetCode: `person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
print(person["name"])
has_age = "age" in person`
      },
      {
        topic: 'Functions',
        description: 'Function definition and calling',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}

echo greet("John");
echo greet("Jane", "Hi");`,
        targetCode: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("John"))
print(greet("Jane", "Hi"))`
      },
      {
        topic: 'Loops',
        description: 'For and foreach loops',
        sourceCode: `// For loop
for ($i = 0; $i < 5; $i++) {
  echo $i;
}

// Foreach loop
$colors = ["red", "green", "blue"];
foreach ($colors as $color) {
  echo $color;
}

// Foreach with key
foreach ($colors as $index => $color) {
  echo "$index: $color";
}`,
        targetCode: `# For loop
for i in range(5):
    print(i)

# For loop over list
colors = ["red", "green", "blue"]
for color in colors:
    print(color)

# For loop with index
for index, color in enumerate(colors):
    print(f"{index}: {color}")`
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
  
  public function getName() {
    return $this->name;
  }
}

$person = new Person("John", 30);
echo $person->greet();`,
        targetCode: `class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    def greet(self):
        return f"Hi, I'm {self._name}"
    
    @property
    def name(self):
        return self._name

person = Person("John", 30)
print(person.greet())`
      },
      {
        topic: 'String Operations',
        description: 'String manipulation and formatting',
        sourceCode: `$name = "John";
$age = 30;

// Concatenation
$message = "Hello " . $name . "!";

// String interpolation
$info = "Name: $name, Age: $age";

// String functions
$upper = strtoupper($name);
$lower = strtolower($name);
$length = strlen($name);`,
        targetCode: `name = "John"
age = 30

# Concatenation
message = "Hello " + name + "!"

# String formatting
info = f"Name: {name}, Age: {age}"

# String methods
upper = name.upper()
lower = name.lower()
length = len(name)`
      }
    ],
    commonPitfalls: [
      {
        title: 'Variable Naming Conventions',
        description: 'PHP uses $ prefix and camelCase, Python uses snake_case',
        sourceExample: `$firstName = "John";
$isActive = true;`,
        targetExample: `first_name = "John"
is_active = True`,
        correctApproach: 'Follow Python naming conventions: use snake_case for variables and functions'
      },
      {
        title: 'Boolean Values',
        description: 'Different boolean representations',
        sourceExample: `$isValid = true;
$isEmpty = false;`,
        targetExample: `is_valid = True
is_empty = False`,
        correctApproach: 'Python booleans are capitalized: True and False (not true/false)'
      },
      {
        title: 'Array vs List Methods',
        description: 'Different methods for array/list operations',
        sourceExample: `array_push($arr, $item);
array_pop($arr);
count($arr);
in_array($item, $arr);`,
        targetExample: `arr.append(item)
arr.pop()
len(arr)
item in arr`,
        correctApproach: 'Python lists have built-in methods and operators, not standalone functions'
      },
      {
        title: 'String Concatenation',
        description: 'Different concatenation operators',
        sourceExample: `$message = "Hello " . $name . "!";`,
        targetExample: `message = "Hello " + name + "!"
# Better: use f-strings
message = f"Hello {name}!"`,
        correctApproach: 'Use f-strings for string formatting in Python - more readable and efficient'
      },
      {
        title: 'Null vs None',
        description: 'Different null value representations',
        sourceExample: `$value = null;
if ($value === null) {
  // Handle null
}`,
        targetExample: `value = None
if value is None:
    # Handle None`,
        correctApproach: 'Use "is None" for None comparisons, not "== None"'
      }
    ],
    keyDifferences: [
      {
        topic: 'Syntax Structure',
        description: 'Code block definition',
        sourceApproach: 'PHP uses curly braces {} to define code blocks',
        targetApproach: 'Python uses indentation to define code blocks (no braces)'
      },
      {
        topic: 'Variable Declaration',
        description: 'How variables are declared',
        sourceApproach: 'PHP requires $ prefix for all variables',
        targetApproach: 'Python variables need no prefix or declaration keywords'
      },
      {
        topic: 'Type System',
        description: 'Static vs dynamic typing features',
        sourceApproach: 'PHP 7+ supports type declarations and strict typing',
        targetApproach: 'Python is dynamically typed with optional type hints (Python 3.5+)'
      },
      {
        topic: 'Error Handling',
        description: 'Exception handling approaches',
        sourceApproach: 'PHP uses try/catch with Exception classes',
        targetApproach: 'Python uses try/except with exception classes'
      },
      {
        topic: 'Package Management',
        description: 'Dependency management systems',
        sourceApproach: 'PHP uses Composer for package management',
        targetApproach: 'Python uses pip with requirements.txt or poetry/pipenv'
      },
      {
        topic: 'Execution Model',
        description: 'How code is executed',
        sourceApproach: 'PHP is typically request-based, executed by web server',
        targetApproach: 'Python can run as scripts, web apps, or long-running processes'
      }
    ]
  },
  'php-java': {
    sourceLanguage: 'PHP',
    targetLanguage: 'Java',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Variable declaration with type safety',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;
$score = 95.5;`,
        targetCode: `String name = "John";
int age = 25;
boolean isActive = true;
double score = 95.5;`
      },
      {
        topic: 'Arrays and Collections',
        description: 'Working with arrays and lists',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape";
$count = count($fruits);

// Associative array
$person = ["name" => "John", "age" => 30];`,
        targetCode: `// Array (fixed size)
String[] fruits = {"apple", "banana", "orange"};
String first = fruits[0];
// Arrays have fixed size in Java

// ArrayList (dynamic)
ArrayList<String> fruitsList = new ArrayList<>();
fruitsList.add("apple");
fruitsList.add("banana");
fruitsList.add("grape");
int count = fruitsList.size();

// HashMap for key-value pairs
HashMap<String, Object> person = new HashMap<>();
person.put("name", "John");
person.put("age", 30);`
      },
      {
        topic: 'Functions and Methods',
        description: 'Method definition in classes',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}

function calculateArea($width, $height) {
  return $width * $height;
}

echo greet("John");`,
        targetCode: `public class Utils {
    public static String greet(String name, String greeting) {
        return greeting + ", " + name + "!";
    }
    
    // Method overloading for default parameter
    public static String greet(String name) {
        return greet(name, "Hello");
    }
    
    public static int calculateArea(int width, int height) {
        return width * height;
    }
}

System.out.println(Utils.greet("John"));`
      },
      {
        topic: 'Classes and Objects',
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
  
  public function getName() {
    return $this->name;
  }
  
  public function setName($name) {
    $this->name = $name;
  }
}

$person = new Person("John", 30);
echo $person->greet();`,
        targetCode: `public class Person {
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
    
    public void setName(String name) {
        this.name = name;
    }
}

Person person = new Person("John", 30);
System.out.println(person.greet());`
      },
      {
        topic: 'Loops and Iteration',
        description: 'Different loop types',
        sourceCode: `// For loop
for ($i = 0; $i < 5; $i++) {
  echo $i;
}

// Foreach loop
$colors = ["red", "green", "blue"];
foreach ($colors as $color) {
  echo $color;
}

// Foreach with index
foreach ($colors as $index => $color) {
  echo "$index: $color";
}`,
        targetCode: `// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Enhanced for loop (for-each)
String[] colors = {"red", "green", "blue"};
for (String color : colors) {
    System.out.println(color);
}

// Traditional for loop with index
for (int index = 0; index < colors.length; index++) {
    System.out.println(index + ": " + colors[index]);
}`
      },
      {
        topic: 'Error Handling',
        description: 'Exception handling',
        sourceCode: `try {
  $file = fopen("data.txt", "r");
  $content = fread($file, filesize("data.txt"));
  fclose($file);
} catch (Exception $e) {
  echo "Error: " . $e->getMessage();
} finally {
  echo "Cleanup code";
}`,
        targetCode: `try {
    FileReader file = new FileReader("data.txt");
    // Read content
    file.close();
} catch (FileNotFoundException e) {
    System.out.println("Error: " + e.getMessage());
} catch (IOException e) {
    System.out.println("IO Error: " + e.getMessage());
} finally {
    System.out.println("Cleanup code");
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Static Typing vs Dynamic Typing',
        description: 'Java requires explicit type declarations',
        sourceExample: `$name = "John";
$name = 42; // This works in PHP`,
        targetExample: `String name = "John";
name = 42; // Compilation error in Java`,
        correctApproach: 'Declare variables with specific types in Java and stick to those types'
      },
      {
        title: 'Method Overloading vs Default Parameters',
        description: 'Java does not support default parameters',
        sourceExample: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name";
}`,
        targetExample: `// Need method overloading in Java
public static String greet(String name) {
    return greet(name, "Hello");
}

public static String greet(String name, String greeting) {
    return greeting + ", " + name;
}`,
        correctApproach: 'Use method overloading to simulate default parameters in Java'
      },
      {
        title: 'Array Operations',
        description: 'Different array handling approaches',
        sourceExample: `$arr = [];
$arr[] = "item"; // Dynamic addition
$count = count($arr);`,
        targetExample: `// Arrays have fixed size
String[] arr = new String[10];
arr[0] = "item";
int count = arr.length;

// Use ArrayList for dynamic arrays
ArrayList<String> list = new ArrayList<>();
list.add("item");
int count = list.size();`,
        correctApproach: 'Use ArrayList for dynamic arrays, regular arrays for fixed-size collections'
      },
      {
        title: 'String Concatenation',
        description: 'Performance implications of string operations',
        sourceExample: `$result = "";
for ($i = 0; $i < 1000; $i++) {
  $result .= "item" . $i;
}`,
        targetExample: `String result = "";
for (int i = 0; i < 1000; i++) {
    result += "item" + i; // Inefficient!
}

// Better approach:
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append("item").append(i);
}
String result = sb.toString();`,
        correctApproach: 'Use StringBuilder for multiple string concatenations in Java'
      },
      {
        title: 'Null Handling',
        description: 'Java is stricter about null values',
        sourceExample: `$value = null;
echo $value; // Works, prints nothing`,
        targetExample: `String value = null;
System.out.println(value); // Prints "null"
int length = value.length(); // NullPointerException!`,
        correctApproach: 'Always check for null before calling methods on objects in Java'
      }
    ],
    keyDifferences: [
      {
        topic: 'Compilation',
        description: 'Code execution model',
        sourceApproach: 'PHP is interpreted at runtime, no compilation step needed',
        targetApproach: 'Java is compiled to bytecode, then run on JVM'
      },
      {
        topic: 'Type System',
        description: 'Variable typing approach',
        sourceApproach: 'PHP is dynamically typed with optional type hints',
        targetApproach: 'Java is statically typed, all variables must have declared types'
      },
      {
        topic: 'Memory Management',
        description: 'How memory is handled',
        sourceApproach: 'PHP has automatic garbage collection, simpler memory model',
        targetApproach: 'Java has sophisticated garbage collection with different strategies'
      },
      {
        topic: 'Platform Independence',
        description: 'Cross-platform capabilities',
        sourceApproach: 'PHP runs on web servers, primarily for web development',
        targetApproach: 'Java runs on JVM, "write once, run anywhere" philosophy'
      },
      {
        topic: 'Object-Oriented Features',
        description: 'OOP implementation differences',
        sourceApproach: 'PHP supports OOP but also procedural programming',
        targetApproach: 'Java is purely object-oriented, everything must be in a class'
      },
      {
        topic: 'Performance',
        description: 'Runtime performance characteristics',
        sourceApproach: 'PHP is optimized for web requests, shorter execution times',
        targetApproach: 'Java is optimized for long-running applications with JIT compilation'
      }
    ]
  },
  'php-typescript': {
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
  },
  'php-ruby': {
    sourceLanguage: 'PHP',
    targetLanguage: 'Ruby',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration and naming',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;`,
        targetCode: `name = "John"
age = 25
is_active = true`
      },
      {
        topic: 'Arrays and Hashes',
        description: 'Collections and key-value pairs',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape";

$person = ["name" => "John", "age" => 30];`,
        targetCode: `fruits = ["apple", "banana", "orange"]
first = fruits[0]
fruits << "grape"

person = {"name" => "John", "age" => 30}
# Or using symbols
person = {name: "John", age: 30}`
      },
      {
        topic: 'Functions and Methods',
        description: 'Function definition',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}

echo greet("John");`,
        targetCode: `def greet(name, greeting = "Hello")
  "#{greeting}, #{name}!"
end

puts greet("John")`
      },
      {
        topic: 'Classes',
        description: 'Object-oriented programming',
        sourceCode: `class Person {
  private $name;
  
  public function __construct($name) {
    $this->name = $name;
  }
  
  public function greet() {
    return "Hi, I'm " . $this->name;
  }
}

$person = new Person("John");`,
        targetCode: `class Person
  def initialize(name)
    @name = name
  end
  
  def greet
    "Hi, I'm #{@name}"
  end
end

person = Person.new("John")`
      }
    ],
    commonPitfalls: [
      {
        title: 'Variable Naming',
        description: 'Different naming conventions',
        sourceExample: `$firstName = "John";`,
        targetExample: `first_name = "John"`,
        correctApproach: 'Ruby uses snake_case for variables and methods'
      },
      {
        title: 'String Interpolation',
        description: 'Different interpolation syntax',
        sourceExample: `$message = "Hello $name!";`,
        targetExample: `message = "Hello #{name}!"`,
        correctApproach: 'Ruby uses #{} for string interpolation'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design principles',
        sourceApproach: 'PHP is pragmatic, web-focused',
        targetApproach: 'Ruby prioritizes developer happiness and expressiveness'
      },
      {
        topic: 'Syntax',
        description: 'Code structure requirements',
        sourceApproach: 'PHP requires $ for variables, semicolons, braces',
        targetApproach: 'Ruby is more minimal - no $, optional semicolons, end keywords'
      }
    ]
  },
  'php-go': {
    sourceLanguage: 'PHP',
    targetLanguage: 'Go',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Variable declaration with static typing',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;`,
        targetCode: `var name string = "John"
var age int = 25
var isActive bool = true

// Short declaration
name := "John"
age := 25`
      },
      {
        topic: 'Arrays and Slices',
        description: 'Working with collections',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape";`,
        targetCode: `fruits := []string{"apple", "banana", "orange"}
first := fruits[0]
fruits = append(fruits, "grape")`
      },
      {
        topic: 'Functions',
        description: 'Function definition with return types',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}`,
        targetCode: `func greet(name string, greeting string) string {
    if greeting == "" {
        greeting = "Hello"
    }
    return greeting + ", " + name + "!"
}`
      },
      {
        topic: 'Structs and Methods',
        description: 'Go\'s approach to OOP',
        sourceCode: `class Person {
  private $name;
  
  public function __construct($name) {
    $this->name = $name;
  }
  
  public function greet() {
    return "Hi, I'm " . $this->name;
  }
}`,
        targetCode: `type Person struct {
    name string
}

func (p Person) greet() string {
    return "Hi, I'm " + p.name
}

func NewPerson(name string) Person {
    return Person{name: name}
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Error Handling',
        description: 'Go uses explicit error returns',
        sourceExample: `try {
  $data = file_get_contents("file.txt");
} catch (Exception $e) {
  echo "Error: " . $e->getMessage();
}`,
        targetExample: `data, err := ioutil.ReadFile("file.txt")
if err != nil {
    fmt.Printf("Error: %v", err)
    return
}`,
        correctApproach: 'Always check error returns in Go - no exceptions'
      },
      {
        title: 'No Classes',
        description: 'Go uses structs and methods instead of classes',
        sourceExample: `class User {
  public function getName() { ... }
}`,
        targetExample: `type User struct { ... }
func (u User) getName() string { ... }`,
        correctApproach: 'Use structs with methods attached to them'
      }
    ],
    keyDifferences: [
      {
        topic: 'Type System',
        description: 'Static vs dynamic typing',
        sourceApproach: 'PHP is dynamically typed',
        targetApproach: 'Go is statically typed with type inference'
      },
      {
        topic: 'Concurrency',
        description: 'Handling concurrent operations',
        sourceApproach: 'PHP is primarily single-threaded',
        targetApproach: 'Go has built-in goroutines and channels for concurrency'
      }
    ]
  },
  'php-rust': {
    sourceLanguage: 'PHP',
    targetLanguage: 'Rust',
    syntaxExamples: [
      {
        topic: 'Variables and Ownership',
        description: 'Memory-safe variable declarations',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;`,
        targetCode: `let name = "John";
let age = 25;
let is_active = true;

// Mutable variables
let mut count = 0;
count += 1;`
      },
      {
        topic: 'Vectors and Collections',
        description: 'Working with dynamic arrays',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape";`,
        targetCode: `let mut fruits = vec!["apple", "banana", "orange"];
let first = &fruits[0];
fruits.push("grape");`
      },
      {
        topic: 'Functions',
        description: 'Function definition with type safety',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}`,
        targetCode: `fn greet(name: &str, greeting: Option<&str>) -> String {
    let greeting = greeting.unwrap_or("Hello");
    format!("{}, {}!", greeting, name)
}`
      },
      {
        topic: 'Structs and Implementation',
        description: 'Rust\'s approach to data and methods',
        sourceCode: `class Person {
  private $name;
  
  public function __construct($name) {
    $this->name = $name;
  }
  
  public function greet() {
    return "Hi, I'm " . $this->name;
  }
}`,
        targetCode: `struct Person {
    name: String,
}

impl Person {
    fn new(name: String) -> Person {
        Person { name }
    }
    
    fn greet(&self) -> String {
        format!("Hi, I'm {}", self.name)
    }
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Ownership and Borrowing',
        description: 'Rust\'s unique memory management',
        sourceExample: `$data = getData();
processData($data);
useData($data); // Works fine`,
        targetExample: `let data = get_data();
process_data(data); // data moved
use_data(data); // ERROR: value used after move`,
        correctApproach: 'Use references (&) or clone data when needed'
      },
      {
        title: 'Error Handling',
        description: 'Result types instead of exceptions',
        sourceExample: `try {
  $result = riskyOperation();
} catch (Exception $e) {
  // Handle error
}`,
        targetExample: `match risky_operation() {
    Ok(result) => // Handle success,
    Err(error) => // Handle error,
}`,
        correctApproach: 'Use Result<T, E> and match or ? operator for error handling'
      }
    ],
    keyDifferences: [
      {
        topic: 'Memory Management',
        description: 'How memory is handled',
        sourceApproach: 'PHP has garbage collection',
        targetApproach: 'Rust uses ownership system for memory safety without GC'
      },
      {
        topic: 'Performance',
        description: 'Runtime characteristics',
        sourceApproach: 'PHP is interpreted, optimized for development speed',
        targetApproach: 'Rust compiles to machine code, optimized for runtime performance'
      }
    ]
  },
  'php-csharp': {
    sourceLanguage: 'PHP',
    targetLanguage: 'C#',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Strongly typed variable declarations',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;`,
        targetCode: `string name = "John";
int age = 25;
bool isActive = true;

// Type inference
var inferredName = "John";`
      },
      {
        topic: 'Arrays and Collections',
        description: 'Working with typed collections',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape";`,
        targetCode: `string[] fruits = {"apple", "banana", "orange"};
string first = fruits[0];

// Dynamic collections
List<string> fruitsList = new List<string> {"apple", "banana", "orange"};
fruitsList.Add("grape");`
      },
      {
        topic: 'Methods and Properties',
        description: 'Object-oriented programming',
        sourceCode: `class Person {
  private $name;
  
  public function __construct($name) {
    $this->name = $name;
  }
  
  public function getName() {
    return $this->name;
  }
  
  public function greet() {
    return "Hi, I'm " . $this->name;
  }
}`,
        targetCode: `public class Person {
    private string name;
    
    public Person(string name) {
        this.name = name;
    }
    
    public string Name {
        get { return this.name; }
        set { this.name = value; }
    }
    
    public string Greet() {
        return $"Hi, I'm {this.name}";
    }
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Static Typing',
        description: 'C# requires explicit types',
        sourceExample: `$data = getData();`,
        targetExample: `var data = GetData(); // or
UserData data = GetData();`,
        correctApproach: 'Declare types explicitly or use var for type inference'
      },
      {
        title: 'Naming Conventions',
        description: 'C# uses PascalCase for methods',
        sourceExample: `function getUserData() { }`,
        targetExample: `public UserData GetUserData() { }`,
        correctApproach: 'Use PascalCase for public methods and properties'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform',
        description: 'Runtime environment',
        sourceApproach: 'PHP runs on web servers',
        targetApproach: 'C# runs on .NET runtime, cross-platform'
      },
      {
        topic: 'Type Safety',
        description: 'Compile-time checking',
        sourceApproach: 'PHP has runtime type checking',
        targetApproach: 'C# has compile-time type checking'
      }
    ]
  },
  'php-swift': {
    sourceLanguage: 'PHP',
    targetLanguage: 'Swift',
    syntaxExamples: [
      {
        topic: 'Variables and Optionals',
        description: 'Safe variable declarations',
        sourceCode: `$name = "John";
$age = 25;
$email = null;`,
        targetCode: `let name = "John"
let age = 25
var email: String? = nil

// Type inference
let inferredName = "John" // String
let inferredAge = 25 // Int`
      },
      {
        topic: 'Arrays and Dictionaries',
        description: 'Type-safe collections',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$person = ["name" => "John", "age" => 30];`,
        targetCode: `let fruits = ["apple", "banana", "orange"]
var mutableFruits = ["apple", "banana"]
mutableFruits.append("orange")

let person = ["name": "John", "age": 30]`
      },
      {
        topic: 'Functions and Closures',
        description: 'Function definition with type safety',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}`,
        targetCode: `func greet(name: String, greeting: String = "Hello") -> String {
    return "\(greeting), \(name)!"
}

// Closure
let greetClosure = { (name: String) -> String in
    return "Hello, \(name)!"
}`
      },
      {
        topic: 'Classes and Structures',
        description: 'Swift\'s approach to OOP',
        sourceCode: `class Person {
  private $name;
  
  public function __construct($name) {
    $this->name = $name;
  }
  
  public function greet() {
    return "Hi, I'm " . $this->name;
  }
}`,
        targetCode: `class Person {
    private var name: String
    
    init(name: String) {
        self.name = name
    }
    
    func greet() -> String {
        return "Hi, I'm \(name)"
    }
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Optionals vs Null',
        description: 'Swift\'s safe approach to nil values',
        sourceExample: `$value = null;
echo $value; // Works`,
        targetExample: `var value: String? = nil
print(value) // Optional(nil)
print(value!) // Crash if nil!`,
        correctApproach: 'Use optional binding: if let value = value { print(value) }'
      },
      {
        title: 'Value vs Reference Types',
        description: 'Structs vs Classes behavior',
        sourceExample: `// PHP objects are references
$obj1 = new MyClass();
$obj2 = $obj1; // Same object`,
        targetExample: `// Swift structs are values
var struct1 = MyStruct()
var struct2 = struct1 // Copy!`,
        correctApproach: 'Understand when to use struct vs class in Swift'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform',
        description: 'Target environment',
        sourceApproach: 'PHP is server-side web development',
        targetApproach: 'Swift is primarily for iOS/macOS app development'
      },
      {
        topic: 'Memory Safety',
        description: 'Handling memory and nil values',
        sourceApproach: 'PHP has garbage collection, null values allowed',
        targetApproach: 'Swift has ARC and optionals for memory safety'
      }
    ]
  },
  'javascript-typescript': {
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
  },
  'javascript-python': {
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
  },
  'javascript-java': {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Java',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static typing and variable declarations',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;
let items = [];`,
        targetCode: `String name = "John";
int age = 25;
boolean isActive = true;
ArrayList<String> items = new ArrayList<>();`
      },
      {
        topic: 'Functions vs Methods',
        description: 'Java requires everything in classes',
        sourceCode: `function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

const add = (a, b) => a + b;`,
        targetCode: `public class Utils {
    public static String greet(String name, String greeting) {
        return greeting + ", " + name + "!";
    }
    
    public static String greet(String name) {
        return greet(name, "Hello");
    }
    
    public static int add(int a, int b) {
        return a + b;
    }
}`
      },
      {
        topic: 'Classes and Objects',
        description: 'OOP with strong typing',
        sourceCode: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
}

let person = new Person("John", 30);`,
        targetCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String greet() {
        return "Hi, I'm " + this.name;
    }
}

Person person = new Person("John", 30);`
      }
    ],
    commonPitfalls: [
      {
        title: 'Dynamic vs Static Typing',
        description: 'Java requires explicit types everywhere',
        sourceExample: `let data = fetchData();
data = "string"; // Works in JS`,
        targetExample: `Object data = fetchData(); // Not ideal
String data = fetchData(); // Better - be specific`,
        correctApproach: 'Always declare specific types in Java'
      }
    ],
    keyDifferences: [
      {
        topic: 'Type System',
        description: 'Static vs dynamic typing',
        sourceApproach: 'JavaScript is dynamically typed',
        targetApproach: 'Java is statically typed with compile-time checking'
      },
      {
        topic: 'Execution Model',
        description: 'Compilation and runtime',
        sourceApproach: 'JavaScript is interpreted/JIT compiled',
        targetApproach: 'Java compiles to bytecode, runs on JVM'
      }
    ]
  },
  'javascript-ruby': {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Ruby',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Clean, minimal syntax',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;
console.log("Hello World");`,
        targetCode: `name = "John"
age = 25
is_active = true
puts "Hello World"`
      },
      {
        topic: 'Functions vs Methods',
        description: 'Method definition',
        sourceCode: `function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

const add = (a, b) => a + b;`,
        targetCode: `def greet(name, greeting = "Hello")
  "#{greeting}, #{name}!"
end

def add(a, b)
  a + b
end`
      },
      {
        topic: 'Arrays and Hashes',
        description: 'Ruby collections',
        sourceCode: `let fruits = ["apple", "banana"];
fruits.push("orange");

let person = {
  name: "John",
  age: 30
};`,
        targetCode: `fruits = ["apple", "banana"]
fruits << "orange"

person = {
  name: "John",
  age: 30
}
# Or with symbols
person = {name: "John", age: 30}`
      }
    ],
    commonPitfalls: [
      {
        title: 'String Interpolation',
        description: 'Different syntax for templates',
        sourceExample: `let message = \`Hello \${name}!\`;`,
        targetExample: `message = "Hello #{name}!"`,
        correctApproach: 'Use #{} for interpolation in Ruby'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design goals',
        sourceApproach: 'JavaScript aims for flexibility and ubiquity',
        targetApproach: 'Ruby prioritizes developer happiness and expressiveness'
      }
    ]
  },
  'javascript-go': {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Go',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static typing with inference',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;`,
        targetCode: `var name string = "John"
var age int = 25
var isActive bool = true

// Or with inference
name := "John"
age := 25`
      },
      {
        topic: 'Functions',
        description: 'Explicit return types',
        sourceCode: `function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}`,
        targetCode: `func greet(name string, greeting string) string {
    if greeting == "" {
        greeting = "Hello"
    }
    return greeting + ", " + name + "!"
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Error Handling',
        description: 'No exceptions in Go',
        sourceExample: `try {
  let data = riskyOperation();
} catch (error) {
  console.error(error);
}`,
        targetExample: `data, err := riskyOperation()
if err != nil {
    fmt.Printf("Error: %v", err)
    return
}`,
        correctApproach: 'Always check error returns explicitly'
      }
    ],
    keyDifferences: [
      {
        topic: 'Concurrency',
        description: 'Built-in vs callback-based',
        sourceApproach: 'JavaScript uses callbacks, promises, async/await',
        targetApproach: 'Go has built-in goroutines and channels'
      }
    ]
  },
  'javascript-rust': {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Rust',
    syntaxExamples: [
      {
        topic: 'Variables and Ownership',
        description: 'Memory safety with ownership',
        sourceCode: `let name = "John";
let age = 25;
let items = ["a", "b", "c"];`,
        targetCode: `let name = "John";
let age = 25;
let items = vec!["a", "b", "c"];

// Mutable variables
let mut count = 0;
count += 1;`
      }
    ],
    commonPitfalls: [
      {
        title: 'Ownership and Borrowing',
        description: 'Rust\'s unique memory model',
        sourceExample: `let data = getData();
processData(data);
useData(data); // Fine in JS`,
        targetExample: `let data = get_data();
process_data(data); // data moved!
use_data(data); // ERROR`,
        correctApproach: 'Use references (&) or clone when needed'
      }
    ],
    keyDifferences: [
      {
        topic: 'Memory Management',
        description: 'GC vs ownership',
        sourceApproach: 'JavaScript has garbage collection',
        targetApproach: 'Rust uses ownership for zero-cost memory safety'
      }
    ]
  },
  'javascript-csharp': {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'C#',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Strong typing with inference',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;`,
        targetCode: `string name = "John";
int age = 25;
bool isActive = true;

// Or with var inference
var inferredName = "John";`
      }
    ],
    commonPitfalls: [
      {
        title: 'Naming Conventions',
        description: 'PascalCase vs camelCase',
        sourceExample: `function getUserData() { }
let userName = "john";`,
        targetExample: `public UserData GetUserData() { }
string UserName = "john";`,
        correctApproach: 'Use PascalCase for methods and properties in C#'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform',
        description: 'Runtime environment',
        sourceApproach: 'JavaScript runs in browsers and Node.js',
        targetApproach: 'C# runs on .NET runtime, cross-platform'
      }
    ]
  },
  'javascript-swift': {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Swift',
    syntaxExamples: [
      {
        topic: 'Variables and Optionals',
        description: 'Type safety with optionals',
        sourceCode: `let name = "John";
let age = 25;
let email = null;`,
        targetCode: `let name = "John"
let age = 25
var email: String? = nil

// Optional binding
if let email = email {
    print("Email: \(email)")
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Null vs Optional',
        description: 'Swift\'s safe approach to nil',
        sourceExample: `let value = null;
console.log(value); // prints null`,
        targetExample: `var value: String? = nil
print(value!) // CRASH if nil!`,
        correctApproach: 'Use optional binding: if let value = value { ... }'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform Focus',
        description: 'Target platforms',
        sourceApproach: 'JavaScript is web-focused, universal',
        targetApproach: 'Swift is Apple ecosystem focused'
      }
    ]
  },
  'java-typescript': {
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
  },
  'java-python': {
    sourceLanguage: 'Java',
    targetLanguage: 'Python',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Static vs dynamic typing',
        sourceCode: `String name = "John";
int age = 25;
boolean isActive = true;
List<String> items = new ArrayList<>();`,
        targetCode: `name = "John"
age = 25
is_active = True
items = []`
      },
      {
        topic: 'Methods vs Functions',
        description: 'Function definition approaches',
        sourceCode: `public class MathUtils {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }
}

int result = MathUtils.add(5, 3);`,
        targetCode: `def add(a, b):
    return a + b

def calculate_area(radius):
    import math
    return math.pi * radius * radius

result = add(5, 3)`
      },
      {
        topic: 'Classes',
        description: 'Object-oriented programming',
        sourceCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}`,
        targetCode: `class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        self._name = value
    
    def __str__(self):
        return f"Person(name='{self._name}', age={self._age})"`
      },
      {
        topic: 'Collections',
        description: 'Arrays vs Lists',
        sourceCode: `// Java Arrays and Lists
String[] fruits = {"apple", "banana", "orange"};
List<String> fruitsList = Arrays.asList(fruits);
fruitsList.add("grape"); // Error! Arrays.asList returns fixed-size list

// Mutable list
List<String> mutableList = new ArrayList<>(Arrays.asList(fruits));
mutableList.add("grape");

// Iteration
for (String fruit : mutableList) {
    System.out.println(fruit.toUpperCase());
}`,
        targetCode: `# Python Lists
fruits = ["apple", "banana", "orange"]
fruits.append("grape")  # Always mutable

# List comprehension
upper_fruits = [fruit.upper() for fruit in fruits]

# Iteration
for fruit in fruits:
    print(fruit.upper())`
      },
      {
        topic: 'Error Handling',
        description: 'Exception handling approaches',
        sourceCode: `public void readFile(String filename) throws IOException {
    try {
        FileReader file = new FileReader(filename);
        // Read file content
        file.close();
    } catch (FileNotFoundException e) {
        System.err.println("File not found: " + e.getMessage());
    } catch (IOException e) {
        System.err.println("IO Error: " + e.getMessage());
    } finally {
        System.out.println("Cleanup completed");
    }
}`,
        targetCode: `def read_file(filename):
    try:
        with open(filename, 'r') as file:
            # Read file content
            content = file.read()
            # File automatically closed by 'with'
    except FileNotFoundError as e:
        print(f"File not found: {e}")
    except IOError as e:
        print(f"IO Error: {e}")
    finally:
        print("Cleanup completed")`
      }
    ],
    commonPitfalls: [
      {
        title: 'Indentation vs Braces',
        description: 'Code block structure',
        sourceExample: `if (condition) {
    doSomething();
    doAnotherThing();
}`,
        targetExample: `if condition:
    do_something()
    do_another_thing()`,
        correctApproach: 'Use consistent 4-space indentation in Python'
      },
      {
        title: 'Static vs Dynamic Typing',
        description: 'Variable type handling',
        sourceExample: `String name = "John";
name = 123; // Compilation error`,
        targetExample: `name = "John"
name = 123  # Perfectly fine`,
        correctApproach: 'Embrace Python\'s dynamic nature but use type hints for clarity'
      },
      {
        title: 'Method Naming Conventions',
        description: 'Different naming styles',
        sourceExample: `public void getUserData() { }
public boolean isUserActive() { }`,
        targetExample: `def get_user_data():
    pass

def is_user_active():
    return True`,
        correctApproach: 'Use snake_case for functions and variables in Python'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design principles',
        sourceApproach: 'Java emphasizes "write once, run anywhere" with strong typing',
        targetApproach: 'Python emphasizes readability and simplicity ("batteries included")'
      },
      {
        topic: 'Performance',
        description: 'Runtime characteristics',
        sourceApproach: 'Java is compiled to bytecode, optimized by JIT compiler',
        targetApproach: 'Python is interpreted, generally slower but more flexible'
      },
      {
        topic: 'Memory Management',
        description: 'Automatic memory handling',
        sourceApproach: 'Java has sophisticated garbage collection with tuning options',
        targetApproach: 'Python has simpler garbage collection with reference counting'
      }
    ]
  },
  'java-ruby': {
    sourceLanguage: 'Java',
    targetLanguage: 'Ruby',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Verbose vs minimal syntax',
        sourceCode: `String name = "John";
int age = 25;
boolean isActive = true;
System.out.println("Hello " + name);`,
        targetCode: `name = "John"
age = 25
is_active = true
puts "Hello #{name}"`
      },
      {
        topic: 'Classes',
        description: 'OOP with different philosophies',
        sourceCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}`,
        targetCode: `class Person
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  attr_accessor :name
  attr_reader :age
end`
      }
    ],
    commonPitfalls: [
      {
        title: 'Explicit vs Implicit',
        description: 'Ruby favors implicit returns and minimal syntax',
        sourceExample: `public String greet() {
    return "Hello";
}`,
        targetExample: `def greet
  "Hello"  # Implicit return
end`,
        correctApproach: 'Embrace Ruby\'s implicit returns and minimal syntax'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design goals',
        sourceApproach: 'Java prioritizes safety, performance, and enterprise features',
        targetApproach: 'Ruby prioritizes developer happiness and expressiveness'
      }
    ]
  },
  'java-go': {
    sourceLanguage: 'Java',
    targetLanguage: 'Go',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static typing approaches',
        sourceCode: `String name = "John";
int age = 25;
boolean isActive = true;
List<String> items = new ArrayList<>();`,
        targetCode: `var name string = "John"
var age int = 25
var isActive bool = true
var items []string

// Short declaration
name := "John"
age := 25`
      },
      {
        topic: 'Classes vs Structs',
        description: 'Different OOP approaches',
        sourceCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String greet() {
        return "Hi, I'm " + this.name;
    }
}`,
        targetCode: `type Person struct {
    name string
    age  int
}

func NewPerson(name string, age int) Person {
    return Person{name: name, age: age}
}

func (p Person) greet() string {
    return "Hi, I'm " + p.name
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Error Handling',
        description: 'Exceptions vs explicit error returns',
        sourceExample: `public void readFile() throws IOException {
    // Code that might throw
}`,
        targetExample: `func readFile() ([]byte, error) {
    data, err := ioutil.ReadFile("file.txt")
    if err != nil {
        return nil, err
    }
    return data, nil
}`,
        correctApproach: 'Always check and handle error returns in Go'
      }
    ],
    keyDifferences: [
      {
        topic: 'Concurrency',
        description: 'Threading models',
        sourceApproach: 'Java uses threads and concurrent utilities',
        targetApproach: 'Go uses lightweight goroutines and channels'
      }
    ]
  },
  'java-rust': {
    sourceLanguage: 'Java',
    targetLanguage: 'Rust',
    syntaxExamples: [
      {
        topic: 'Memory Management',
        description: 'GC vs ownership',
        sourceCode: `String name = "John";
List<String> items = new ArrayList<>();
items.add(name);
// Garbage collector handles cleanup`,
        targetCode: `let name = String::from("John");
let mut items: Vec<String> = Vec::new();
items.push(name);
// Ownership system handles cleanup automatically`
      }
    ],
    commonPitfalls: [
      {
        title: 'Ownership and Borrowing',
        description: 'Rust\'s unique memory model',
        sourceExample: `String data = getData();
processData(data);
useData(data); // Fine in Java`,
        targetExample: `let data = get_data();
process_data(data); // data moved!
use_data(data); // ERROR: value used after move`,
        correctApproach: 'Use references (&) or clone data when needed in Rust'
      }
    ],
    keyDifferences: [
      {
        topic: 'Memory Safety',
        description: 'Different safety approaches',
        sourceApproach: 'Java prevents memory errors through garbage collection',
        targetApproach: 'Rust prevents memory errors through ownership at compile time'
      }
    ]
  },
  'java-csharp': {
    sourceLanguage: 'Java',
    targetLanguage: 'C#',
    syntaxExamples: [
      {
        topic: 'Similar Syntax',
        description: 'Very similar object-oriented approaches',
        sourceCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return this.name;
    }
}`,
        targetCode: `public class Person {
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
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Properties vs Getters/Setters',
        description: 'C# has built-in property syntax',
        sourceExample: `public String getName() { return name; }
public void setName(String name) { this.name = name; }`,
        targetExample: `public string Name { get; set; }`,
        correctApproach: 'Use C# properties instead of explicit getter/setter methods'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform',
        description: 'Runtime environments',
        sourceApproach: 'Java runs on JVM, truly cross-platform',
        targetApproach: 'C# runs on .NET, primarily Microsoft ecosystem'
      }
    ]
  },
  'java-swift': {
    sourceLanguage: 'Java',
    targetLanguage: 'Swift',
    syntaxExamples: [
      {
        topic: 'Optional Types',
        description: 'Null safety approaches',
        sourceCode: `String name = null;
if (name != null) {
    System.out.println(name.length());
}`,
        targetCode: `var name: String? = nil
if let name = name {
    print(name.count)
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Optionals vs Null',
        description: 'Swift\'s safer approach to nil values',
        sourceExample: `String value = null;
value.length(); // NullPointerException`,
        targetExample: `var value: String? = nil
value!.count // Crash if nil!`,
        correctApproach: 'Use optional binding or nil coalescing in Swift'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform Focus',
        description: 'Target ecosystems',
        sourceApproach: 'Java targets enterprise and server applications',
        targetApproach: 'Swift targets Apple ecosystem (iOS, macOS)'
      }
    ]
  },
  'csharp-javascript': {
    sourceLanguage: 'C#',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static typing to dynamic typing',
        sourceCode: `string name = "John";
int age = 25;
bool isActive = true;
List<string> items = new List<string>();

// Type inference
var inferredName = "John";
var inferredAge = 25;`,
        targetCode: `const name = "John";
const age = 25;
const isActive = true;
const items = [];

// All variables are dynamically typed
const inferredName = "John"; // string
const inferredAge = 25; // number`
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
        targetCode: `try {
    const content = require('fs').readFileSync('data.txt', 'utf8');
    const number = parseInt(content);
    console.log(number);
} catch (error) {
    if (error.code === 'ENOENT') {
        console.log(\`File not found: \${error.message}\`);
    } else if (isNaN(number)) {
        console.log(\`Invalid format: \${error.message}\`);
    } else {
        console.log(\`General error: \${error.message}\`);
    }
} finally {
    console.log("Cleanup completed");
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
  },
  'csharp-typescript': {
    sourceLanguage: 'C#',
    targetLanguage: 'TypeScript',
    syntaxExamples: [
      {
        topic: 'Static Typing',
        description: 'Both languages support strong typing',
        sourceCode: `string name = "John";
int age = 25;
bool isActive = true;
List<string> items = new List<string>();`,
        targetCode: `const name: string = "John";
const age: number = 25;
const isActive: boolean = true;
const items: string[] = [];`
      },
      {
        topic: 'Interfaces and Classes',
        description: 'Type-safe object-oriented programming',
        sourceCode: `public interface IGreetable {
    string Greet();
}

public class Person : IGreetable {
    private string name;
    private int age;
    
    public Person(string name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public string Name {
        get => name;
        set => name = value;
    }
    
    public string Greet() {
        return $"Hi, I'm {this.name}";
    }
}`,
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
    
    get Name(): string {
        return this.name;
    }
    
    set Name(value: string) {
        this.name = value;
    }
    
    greet(): string {
        return \`Hi, I'm \${this.name}\`;
    }
}`
      },
      {
        topic: 'Generics',
        description: 'Type parameterization',
        sourceCode: `public class Repository<T> where T : class {
    private List<T> items = new List<T>();
    
    public void Add(T item) {
        items.Add(item);
    }
    
    public T GetById(int id) {
        return items[id];
    }
    
    public IEnumerable<T> GetAll() {
        return items;
    }
}

Repository<Person> personRepo = new Repository<Person>();`,
        targetCode: `class Repository<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }
    
    getById(id: number): T {
        return this.items[id];
    }
    
    getAll(): T[] {
        return this.items;
    }
}

const personRepo = new Repository<Person>();`
      }
    ],
    commonPitfalls: [
      {
        title: 'Runtime vs Compile-time Types',
        description: 'TypeScript types are erased at runtime',
        sourceExample: `// C# types exist at runtime
Type type = typeof(string);
bool isString = obj is string;`,
        targetExample: `// TypeScript types don't exist at runtime
typeof obj === "string" // JavaScript check
// No direct type checking available`,
        correctApproach: 'Use JavaScript typeof or instanceof for runtime type checking'
      }
    ],
    keyDifferences: [
      {
        topic: 'Compilation Target',
        description: 'What the code compiles to',
        sourceApproach: 'C# compiles to IL (Intermediate Language) for .NET runtime',
        targetApproach: 'TypeScript compiles to JavaScript for browsers/Node.js'
      },
      {
        topic: 'Runtime Type Information',
        description: 'Type availability at runtime',
        sourceApproach: 'C# maintains type information at runtime',
        targetApproach: 'TypeScript types are completely erased at runtime'
      }
    ]
  },
  'csharp-python': {
    sourceLanguage: 'C#',
    targetLanguage: 'Python',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Static typing to dynamic typing',
        sourceCode: `string name = "John";
int age = 25;
bool isActive = true;
List<string> items = new List<string>();`,
        targetCode: `name = "John"
age = 25
is_active = True
items = []`
      },
      {
        topic: 'Classes and Properties',
        description: 'OOP with different syntax',
        sourceCode: `public class Person {
    private string name;
    private int age;
    
    public Person(string name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public string Name {
        get => name;
        set => name = value;
    }
    
    public override string ToString() {
        return $"Person(Name={name}, Age={age})";
    }
}`,
        targetCode: `class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        self._name = value
    
    def __str__(self):
        return f"Person(name={self._name}, age={self._age})"`
      }
    ],
    commonPitfalls: [
      {
        title: 'Indentation vs Braces',
        description: 'Code block structure',
        sourceExample: `if (condition) {
    DoSomething();
    DoAnotherThing();
}`,
        targetExample: `if condition:
    do_something()
    do_another_thing()`,
        correctApproach: 'Use consistent indentation in Python'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design goals',
        sourceApproach: 'C# emphasizes type safety and enterprise development',
        targetApproach: 'Python emphasizes simplicity and readability'
      }
    ]
  },
  'csharp-java': {
    sourceLanguage: 'C#',
    targetLanguage: 'Java',
    syntaxExamples: [
      {
        topic: 'Very Similar Syntax',
        description: 'Both are strongly-typed OOP languages',
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
}`,
        targetCode: `public class Person {
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
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Properties vs Getters/Setters',
        description: 'Different accessor patterns',
        sourceExample: `public string Name { get; set; }`,
        targetExample: `public String getName() { return name; }
public void setName(String name) { this.name = name; }`,
        correctApproach: 'Use explicit getter/setter methods in Java'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform',
        description: 'Runtime environments',
        sourceApproach: 'C# runs on .NET, primarily Microsoft ecosystem',
        targetApproach: 'Java runs on JVM, truly cross-platform'
      }
    ]
  },
  'csharp-php': {
    sourceLanguage: 'C#',
    targetLanguage: 'PHP',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static to dynamic typing',
        sourceCode: `string name = "John";
int age = 25;
bool isActive = true;`,
        targetCode: `$name = "John";
$age = 25;
$isActive = true;`
      }
    ],
    commonPitfalls: [
      {
        title: 'Variable Syntax',
        description: 'Different variable declaration',
        sourceExample: `string name = "John";`,
        targetExample: `$name = "John";`,
        correctApproach: 'All variables in PHP must start with $'
      }
    ],
    keyDifferences: [
      {
        topic: 'Execution Model',
        description: 'Compilation vs interpretation',
        sourceApproach: 'C# is compiled to intermediate language',
        targetApproach: 'PHP is interpreted at runtime'
      }
    ]
  },
  'csharp-ruby': {
    sourceLanguage: 'C#',
    targetLanguage: 'Ruby',
    syntaxExamples: [
      {
        topic: 'Syntax Comparison',
        description: 'Verbose vs minimal syntax',
        sourceCode: `public class Person {
    private string name;
    
    public Person(string name) {
        this.name = name;
    }
    
    public string Greet() {
        return $"Hello, {name}";
    }
}`,
        targetCode: `class Person
  def initialize(name)
    @name = name
  end
  
  def greet
    "Hello, #{@name}"
  end
end`
      }
    ],
    commonPitfalls: [
      {
        title: 'Explicit vs Implicit',
        description: 'Ruby favors implicit returns',
        sourceExample: `public string Greet() {
    return "Hello";
}`,
        targetExample: `def greet
  "Hello"  # Implicit return
end`,
        correctApproach: 'Embrace Ruby\'s implicit returns'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design approach',
        sourceApproach: 'C# emphasizes explicit syntax and type safety',
        targetApproach: 'Ruby emphasizes developer happiness and expressiveness'
      }
    ]
  },
  'csharp-go': {
    sourceLanguage: 'C#',
    targetLanguage: 'Go',
    syntaxExamples: [
      {
        topic: 'Simple Comparison',
        description: 'Different approaches to simplicity',
        sourceCode: `public class Person {
    public string Name { get; set; }
    public int Age { get; set; }
    
    public string Greet() {
        return $"Hi, I'm {Name}";
    }
}`,
        targetCode: `type Person struct {
    Name string
    Age  int
}

func (p Person) Greet() string {
    return "Hi, I'm " + p.Name
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Error Handling',
        description: 'Exceptions vs explicit errors',
        sourceExample: `public void ReadFile() {
    throw new FileNotFoundException();
}`,
        targetExample: `func readFile() ([]byte, error) {
    return nil, errors.New("file not found")
}`,
        correctApproach: 'Return errors explicitly in Go'
      }
    ],
    keyDifferences: [
      {
        topic: 'Complexity',
        description: 'Language feature sets',
        sourceApproach: 'C# has many advanced features (generics, LINQ, properties)',
        targetApproach: 'Go deliberately keeps features minimal for simplicity'
      }
    ]
  },
  'csharp-rust': {
    sourceLanguage: 'C#',
    targetLanguage: 'Rust',
    syntaxExamples: [
      {
        topic: 'Memory Management',
        description: 'GC vs ownership',
        sourceCode: `string name = "John";
List<string> items = new List<string>();
items.Add(name);
// Garbage collector handles cleanup`,
        targetCode: `let name = String::from("John");
let mut items: Vec<String> = Vec::new();
items.push(name);
// Ownership system handles cleanup`
      }
    ],
    commonPitfalls: [
      {
        title: 'Ownership and Borrowing',
        description: 'Different memory models',
        sourceExample: `string data = GetData();
ProcessData(data);
UseData(data); // Fine in C#`,
        targetExample: `let data = get_data();
process_data(data); // data moved!
use_data(data); // ERROR`,
        correctApproach: 'Understand Rust\'s ownership system'
      }
    ],
    keyDifferences: [
      {
        topic: 'Memory Safety',
        description: 'Different safety approaches',
        sourceApproach: 'C# uses garbage collection for memory safety',
        targetApproach: 'Rust uses ownership for zero-cost memory safety'
      }
    ]
  },
  'csharp-swift': {
    sourceLanguage: 'C#',
    targetLanguage: 'Swift',
    syntaxExamples: [
      {
        topic: 'Optional Types',
        description: 'Null safety approaches',
        sourceCode: `string name = null;
if (name != null) {
    Console.WriteLine(name.Length);
}`,
        targetCode: `var name: String? = nil
if let name = name {
    print(name.count)
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Null vs Optional',
        description: 'Different null handling',
        sourceExample: `string value = null;
value.Length; // NullReferenceException`,
        targetExample: `var value: String? = nil
value!.count // Crash if nil!`,
        correctApproach: 'Use optional binding in Swift'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform Focus',
        description: 'Target ecosystems',
        sourceApproach: 'C# targets enterprise and cross-platform applications',
        targetApproach: 'Swift targets Apple ecosystem primarily'
      }
    ]
  }
};