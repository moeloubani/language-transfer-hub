import type { LanguageComparison } from '../../types/language';

export const phpSwiftComparison: LanguageComparison = {
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

// Unsafe: Force unwrapping (avoid!)
print(value!) // Crash if nil!

// Safe patterns:
// 1. Optional binding
if let unwrappedValue = value {
    print(unwrappedValue)
} else {
    print("Value is nil")
}

// 2. Guard statement
guard let safeValue = value else {
    print("Value is nil, exiting")
    return
}
print(safeValue)

// 3. Nil coalescing
let displayValue = value ?? "Default"
print(displayValue)

// 4. Optional chaining
let length = value?.count // Returns Int? or nil`,
        correctApproach: 'Always use safe unwrapping: if let, guard let, nil coalescing (??) or optional chaining (?.)'
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
};