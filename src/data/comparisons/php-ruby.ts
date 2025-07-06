import type { LanguageComparison } from '../../types/language';

export const phpRubyComparison: LanguageComparison = {
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
};