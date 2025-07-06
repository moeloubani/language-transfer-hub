import type { LanguageComparison } from '../../types/language';

export const phpGoComparison: LanguageComparison = {
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
};