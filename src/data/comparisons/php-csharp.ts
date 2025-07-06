import type { LanguageComparison } from '../../types/language';

export const phpCsharpComparison: LanguageComparison = {
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
};