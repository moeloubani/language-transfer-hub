import type { LanguageComparison } from '../../types/language';

export const javaPythonComparison: LanguageComparison = {
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
};