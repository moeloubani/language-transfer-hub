import type { LanguageComparison } from '../../types/language';

export const phpRustComparison: LanguageComparison = {
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
        targetExample: `// Pattern 1: Using match for comprehensive handling
match risky_operation() {
    Ok(result) => println!("Success: {}", result),
    Err(error) => eprintln!("Error: {}", error),
}

// Pattern 2: Using ? operator for propagation
fn process_data() -> Result<String, std::io::Error> {
    let data = risky_operation()?; // Auto-propagates error
    Ok(format!("Processed: {}", data))
}

// Pattern 3: Null safety with Option
let maybe_value: Option<i32> = Some(42);
match maybe_value {
    Some(value) => println!("Got: {}", value),
    None => println!("No value"),
}

// Pattern 4: Safe unwrapping with defaults
let safe_value = maybe_value.unwrap_or(0);`,
        correctApproach: 'Use Result<T, E> for errors and Option<T> for null safety. Prefer match or ? operator over unwrap()'
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
};