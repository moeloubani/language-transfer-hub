import type { LanguageComparison } from '../../types/language';

export const phpJavaComparison: LanguageComparison = {
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
};