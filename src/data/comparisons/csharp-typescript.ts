import type { LanguageComparison } from '../../types/language';

export const csharpTypescriptComparison: LanguageComparison = {
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
};