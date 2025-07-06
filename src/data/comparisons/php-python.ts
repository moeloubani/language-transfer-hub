import type { LanguageComparison } from '../../types/language';

export const phpPythonComparison: LanguageComparison = {
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
};