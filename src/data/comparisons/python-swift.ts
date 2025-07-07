import type { LanguageComparison } from '../../types/language';

export const pythonSwiftComparison: LanguageComparison = {
    sourceLanguage: 'Python',
    targetLanguage: 'Swift',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Dynamic vs static typing with type inference',
        sourceCode: `name = "John"
age = 25
is_active = True
score = 95.5

# Dynamic typing
value = 42
value = "now a string"  # This is fine

# Type hints (optional)
from typing import Optional
maybe_name: Optional[str] = None
maybe_name = "John"`,
        targetCode: `var name = "John"        // String
var age = 25             // Int
var isActive = true      // Bool
var score = 95.5         // Double

// Static typing - cannot change types
var value = 42           // Int
// value = "now a string" // Compilation error!

// Optional types
var maybeName: String? = nil
maybeName = "John"

// Explicit type annotation
let explicitDouble: Double = 70
let explicitInt: Int = 70`
      },
      {
        topic: 'Collections',
        description: 'Lists and dictionaries vs arrays and dictionaries',
        sourceCode: `# List
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
first = fruits[0]
last = fruits[-1]

# Dictionary
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]

# Set
unique_numbers = {1, 2, 3, 4, 5}

# Tuple (immutable)
coordinates = (10.5, 20.3)`,
        targetCode: `// Array
var fruits = ["apple", "banana", "orange"]
fruits.append("grape")
let first = fruits[0]
let last = fruits[fruits.count - 1]

// Dictionary
var person = [
    "name": "John",
    "age": "30",
    "city": "New York"
]

// Better with typed dictionary
var typedPerson: [String: Any] = [
    "name": "John",
    "age": 30,
    "city": "New York"
]

// Array methods (similar to comprehensions)
let squares = (0..<10).map { $0 * $0 }
let evens = (0..<20).filter { $0 % 2 == 0 }

// Set
let uniqueNumbers: Set = [1, 2, 3, 4, 5]

// Tuple
let coordinates = (10.5, 20.3)
let (x, y) = coordinates`
      },
      {
        topic: 'Functions',
        description: 'Function definitions and closures',
        sourceCode: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

def calculate_area(width, height):
    return width * height

# Lambda function
add = lambda x, y: x + y

# Function with multiple return values
def get_user_data():
    return "John", 30, "john@example.com"

name, age, email = get_user_data()

# Function as parameter
def apply_operation(x, y, operation):
    return operation(x, y)

result = apply_operation(5, 3, add)

# Variadic parameters
def sum_all(*numbers):
    return sum(numbers)

total = sum_all(1, 2, 3, 4, 5)`,
        targetCode: `func greet(name: String, greeting: String = "Hello") -> String {
    return "\\(greeting), \\(name)!"
}

func calculateArea(width: Double, height: Double) -> Double {
    return width * height
}

// Closure
let add = { (x: Int, y: Int) -> Int in
    return x + y
}

// Shorter closure syntax
let multiply: (Int, Int) -> Int = { $0 * $1 }

// Function with multiple return values (tuple)
func getUserData() -> (String, Int, String) {
    return ("John", 30, "john@example.com")
}

let (name, age, email) = getUserData()

// Function as parameter
func applyOperation(_ x: Int, _ y: Int, operation: (Int, Int) -> Int) -> Int {
    return operation(x, y)
}

let result = applyOperation(5, 3, operation: add)

// Variadic parameters
func sumAll(_ numbers: Int...) -> Int {
    return numbers.reduce(0, +)
}

let total = sumAll(1, 2, 3, 4, 5)`
      },
      {
        topic: 'Classes and Objects',
        description: 'Class definitions and inheritance',
        sourceCode: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self._id = self._generate_id()
    
    def greet(self):
        return f"Hello, I'm {self.name}"
    
    def have_birthday(self):
        self.age += 1
    
    @property
    def info(self):
        return f"{self.name} is {self.age} years old"
    
    @staticmethod
    def species():
        return "Homo sapiens"
    
    def _generate_id(self):
        return hash(f"{self.name}{self.age}")

# Inheritance
class Employee(Person):
    def __init__(self, name, age, company):
        super().__init__(name, age)
        self.company = company
    
    def greet(self):
        return f"{super().greet()}, I work at {self.company}"

# Usage
person = Person("John", 30)
print(person.greet())
print(person.info)`,
        targetCode: `class Person {
    var name: String
    var age: Int
    private var id: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
        self.id = Self.generateId(name: name, age: age)
    }
    
    func greet() -> String {
        return "Hello, I'm \\(name)"
    }
    
    func haveBirthday() {
        age += 1
    }
    
    // Computed property
    var info: String {
        return "\\(name) is \\(age) years old"
    }
    
    // Static method
    static func species() -> String {
        return "Homo sapiens"
    }
    
    private static func generateId(name: String, age: Int) -> Int {
        return "\\(name)\\(age)".hashValue
    }
}

// Inheritance
class Employee: Person {
    var company: String
    
    init(name: String, age: Int, company: String) {
        self.company = company
        super.init(name: name, age: age)
    }
    
    override func greet() -> String {
        return "\\(super.greet()), I work at \\(company)"
    }
}

// Usage
let person = Person(name: "John", age: 30)
print(person.greet())
print(person.info)`
      },
      {
        topic: 'Error Handling',
        description: 'Exceptions vs error handling with optionals',
        sourceCode: `# Exception handling
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

try:
    result = divide(10, 0)
except ValueError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
finally:
    print("Cleanup")

# Multiple exceptions
def process_data(data):
    if not data:
        raise ValueError("Empty data")
    if not isinstance(data, list):
        raise TypeError("Data must be a list")
    return len(data)

# Custom exception
class ValidationError(Exception):
    def __init__(self, message, code=None):
        super().__init__(message)
        self.code = code`,
        targetCode: `// Error handling with throwing functions
enum DivisionError: Error {
    case divisionByZero
}

func divide(_ a: Double, by b: Double) throws -> Double {
    guard b != 0 else {
        throw DivisionError.divisionByZero
    }
    return a / b
}

// Try-catch
do {
    let result = try divide(10, by: 0)
    print(result)
} catch DivisionError.divisionByZero {
    print("Error: Cannot divide by zero")
} catch {
    print("Unexpected error: \\(error)")
}

// Optional try
let result = try? divide(10, by: 2)  // Returns nil on error

// Force try (crashes on error)
let forceResult = try! divide(10, by: 2)

// Custom errors
enum ValidationError: Error {
    case emptyData
    case wrongType(expected: String)
    case custom(message: String, code: Int?)
}

func processData(_ data: [Any]?) throws -> Int {
    guard let data = data, !data.isEmpty else {
        throw ValidationError.emptyData
    }
    return data.count
}

// Defer (like finally)
func performOperation() throws {
    print("Starting")
    defer {
        print("Cleanup")  // Always executed
    }
    
    try riskyOperation()
    print("Success")
}`
      },
      {
        topic: 'Protocols and Interfaces',
        description: 'Duck typing vs protocols',
        sourceCode: `from abc import ABC, abstractmethod
from typing import Protocol

# Abstract base class
class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass
    
    @abstractmethod
    def move(self):
        pass

# Protocol (structural typing)
class Drawable(Protocol):
    def draw(self) -> None: ...
    def get_bounds(self) -> tuple: ...

# Implementation
class Dog(Animal):
    def make_sound(self):
        return "Woof!"
    
    def move(self):
        return "Running"

class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    def draw(self):
        print(f"Drawing circle with radius {self.radius}")
    
    def get_bounds(self):
        return (0, 0, self.radius * 2, self.radius * 2)

# Duck typing
def make_it_speak(animal):
    # Works with any object that has make_sound
    return animal.make_sound()

# Type checking with Protocol
def render_shape(shape: Drawable):
    shape.draw()
    bounds = shape.get_bounds()`,
        targetCode: `// Protocol definition
protocol Animal {
    func makeSound() -> String
    func move() -> String
}

protocol Drawable {
    func draw()
    func getBounds() -> (x: Double, y: Double, width: Double, height: Double)
}

// Implementation
class Dog: Animal {
    func makeSound() -> String {
        return "Woof!"
    }
    
    func move() -> String {
        return "Running"
    }
}

struct Circle: Drawable {
    let radius: Double
    
    func draw() {
        print("Drawing circle with radius \\(radius)")
    }
    
    func getBounds() -> (x: Double, y: Double, width: Double, height: Double) {
        return (0, 0, radius * 2, radius * 2)
    }
}

// Protocol with default implementation
extension Animal {
    func describe() -> String {
        return "\\(makeSound()) while \\(move())"
    }
}

// Generic constraint with protocol
func makeItSpeak<T: Animal>(_ animal: T) -> String {
    return animal.makeSound()
}

// Multiple protocol conformance
protocol Named {
    var name: String { get }
}

class Pet: Animal, Named {
    let name: String
    
    init(name: String) {
        self.name = name
    }
    
    func makeSound() -> String { "Pet sound" }
    func move() -> String { "Pet movement" }
}`
      },
      {
        topic: 'Async Programming',
        description: 'asyncio vs async/await',
        sourceCode: `import asyncio
import aiohttp

# Async function
async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

# Multiple async operations
async def fetch_multiple(urls):
    tasks = [fetch_data(url) for url in urls]
    results = await asyncio.gather(*tasks)
    return results

# Async generator
async def count_async(limit):
    for i in range(limit):
        await asyncio.sleep(0.1)
        yield i

# Using async generator
async def process_numbers():
    async for num in count_async(5):
        print(f"Processing {num}")

# Async context manager
class AsyncResource:
    async def __aenter__(self):
        print("Acquiring resource")
        await asyncio.sleep(0.1)
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print("Releasing resource")
        await asyncio.sleep(0.1)

# Running async code
async def main():
    data = await fetch_data("https://api.example.com")
    print(data)

asyncio.run(main())`,
        targetCode: `import Foundation

// Async function
func fetchData(from url: URL) async throws -> String {
    let (data, _) = try await URLSession.shared.data(from: url)
    return String(data: data, encoding: .utf8) ?? ""
}

// Multiple async operations
func fetchMultiple(urls: [URL]) async throws -> [String] {
    // Concurrent execution with TaskGroup
    try await withThrowingTaskGroup(of: String.self) { group in
        for url in urls {
            group.addTask {
                try await fetchData(from: url)
            }
        }
        
        var results: [String] = []
        for try await result in group {
            results.append(result)
        }
        return results
    }
}

// Async sequence
struct AsyncCounter: AsyncSequence {
    typealias Element = Int
    let limit: Int
    
    struct AsyncIterator: AsyncIteratorProtocol {
        var current = 0
        let limit: Int
        
        mutating func next() async -> Int? {
            guard current < limit else { return nil }
            
            try? await Task.sleep(nanoseconds: 100_000_000) // 0.1 seconds
            defer { current += 1 }
            return current
        }
    }
    
    func makeAsyncIterator() -> AsyncIterator {
        AsyncIterator(limit: limit)
    }
}

// Using async sequence
func processNumbers() async {
    for await num in AsyncCounter(limit: 5) {
        print("Processing \\(num)")
    }
}

// Actor (async-safe class)
actor DataManager {
    private var cache: [String: String] = [:]
    
    func getData(for key: String) async -> String? {
        if let cached = cache[key] {
            return cached
        }
        
        // Simulate async fetch
        try? await Task.sleep(nanoseconds: 100_000_000)
        let value = "Data for \\(key)"
        cache[key] = value
        return value
    }
}

// Main async function
@main
struct AsyncApp {
    static func main() async throws {
        let url = URL(string: "https://api.example.com")!
        let data = try await fetchData(from: url)
        print(data)
    }
}`
      },
      {
        topic: 'String Manipulation',
        description: 'String formatting and manipulation',
        sourceCode: `# String creation and formatting
name = "John"
age = 30

# f-strings (Python 3.6+)
greeting = f"Hello, {name}! You are {age} years old."

# format method
template = "Hello, {}! You are {} years old."
greeting2 = template.format(name, age)

# String methods
text = "  Python Programming  "
print(text.strip())        # Remove whitespace
print(text.lower())        # Lowercase
print(text.upper())        # Uppercase
print(text.replace("Python", "Swift"))

# String splitting and joining
words = "apple,banana,orange".split(",")
joined = " - ".join(words)

# Multiline strings
multi = """
This is a
multiline string
with multiple lines
"""

# String slicing
text = "Hello, World!"
print(text[0:5])    # "Hello"
print(text[7:])     # "World!"
print(text[-6:])    # "World!"

# String checking
if "World" in text:
    print("Found!")`,
        targetCode: `// String creation and interpolation
let name = "John"
let age = 30

// String interpolation
let greeting = "Hello, \\(name)! You are \\(age) years old."

// String methods
let text = "  Swift Programming  "
print(text.trimmingCharacters(in: .whitespaces))  // Remove whitespace
print(text.lowercased())                          // Lowercase
print(text.uppercased())                          // Uppercase
print(text.replacingOccurrences(of: "Swift", with: "Python"))

// String splitting and joining
let words = "apple,banana,orange".split(separator: ",")
let joined = words.joined(separator: " - ")

// Multiline strings
let multi = """
This is a
multiline string
with multiple lines
"""

// String slicing (more complex in Swift)
let text2 = "Hello, World!"
let start = text2.startIndex
let end = text2.index(start, offsetBy: 5)
print(String(text2[start..<end]))  // "Hello"

// Substring from index
let worldStart = text2.index(start, offsetBy: 7)
print(String(text2[worldStart...]))  // "World!"

// String checking
if text2.contains("World") {
    print("Found!")
}

// String building
var builder = ""
for i in 1...5 {
    builder += "Item \\(i)\\n"
}`
      }
    ],
    keyDifferences: [
      {
        topic: 'Type System',
        description: 'Dynamic vs static typing',
        sourceApproach: 'Python is dynamically typed with optional type hints',
        targetApproach: 'Swift is statically typed with strong type inference'
      },
      {
        topic: 'Syntax Structure',
        description: 'Code block delimiters',
        sourceApproach: 'Python uses indentation to define code blocks',
        targetApproach: 'Swift uses curly braces for code blocks'
      },
      {
        topic: 'Interface Definition',
        description: 'Duck typing vs protocols',
        sourceApproach: 'Python uses duck typing - if it acts like a duck, it is a duck',
        targetApproach: 'Swift uses protocols for formal interface definition'
      },
      {
        topic: 'Error Handling',
        description: 'Exceptions vs optionals',
        sourceApproach: 'Python uses exceptions with try/except blocks',
        targetApproach: 'Swift uses optionals and error throwing with do/try/catch'
      },
      {
        topic: 'Concurrency',
        description: 'GIL vs true parallelism',
        sourceApproach: 'Python has GIL limiting true parallelism to one thread',
        targetApproach: 'Swift has true parallelism with actors and async/await'
      },
      {
        topic: 'Execution Model',
        description: 'Interpreted vs compiled',
        sourceApproach: 'Python is interpreted at runtime',
        targetApproach: 'Swift is compiled to native machine code'
      },
      {
        topic: 'Design Philosophy',
        description: 'Simplicity vs safety',
        sourceApproach: 'Python prioritizes simplicity and readability',
        targetApproach: 'Swift prioritizes safety and performance'
      },
      {
        topic: 'Memory Management',
        description: 'GC vs ARC',
        sourceApproach: 'Python uses garbage collection for automatic memory management',
        targetApproach: 'Swift uses automatic reference counting (ARC)'
      }
    ],
    commonPitfalls: [
      {
        title: 'Optional Unwrapping',
        description: 'Must unwrap optionals before use',
        sourceExample: `value = None
if value:
    print(value)`,
        targetExample: `var value: String? = nil
if let unwrapped = value {
    print(unwrapped)
}`,
        correctApproach: 'Use guard let, if let, or nil coalescing operator (??)'
      },
      {
        title: 'String Manipulation',
        description: 'String indexing is more complex in Swift',
        sourceExample: `text = "Hello"
first = text[0]
slice = text[1:4]`,
        targetExample: `let text = "Hello"
let first = text[text.startIndex]
let slice = String(text[text.index(after: text.startIndex)..<text.index(text.startIndex, offsetBy: 4)])`,
        correctApproach: 'Use String methods like prefix, suffix, or convert to Array'
      },
      {
        title: 'Value vs Reference Types',
        description: 'Swift arrays/dicts are value types',
        sourceExample: `list1 = [1, 2, 3]
list2 = list1
list2.append(4)  # list1 also changes`,
        targetExample: `var array1 = [1, 2, 3]
var array2 = array1
array2.append(4)  // array1 unchanged`,
        correctApproach: 'Understand value semantics and use classes for reference behavior'
      },
      {
        title: 'Initializer Parameters',
        description: 'No default parameters in init',
        sourceExample: `class Person:
    def __init__(self, name, age=0):
        self.name = name
        self.age = age`,
        targetExample: `class Person {
    let name: String
    let age: Int
    
    init(name: String, age: Int = 0) {
        self.name = name
        self.age = age
    }
}`,
        correctApproach: 'Use convenience initializers or default property values'
      },
      {
        title: 'Type Conversions',
        description: 'Must explicitly convert types',
        sourceExample: `x = 5
y = 2.5
result = x + y  # Works fine`,
        targetExample: `let x = 5
let y = 2.5
// let result = x + y  // Error!
let result = Double(x) + y`,
        correctApproach: 'Always explicitly convert numeric types before operations'
      },
      {
        title: 'Memory Cycles',
        description: 'Watch for retain cycles with closures',
        sourceExample: `class Timer:
    def __init__(self):
        self.callback = lambda: self.fire()
    
    def fire(self):
        print("Timer fired")`,
        targetExample: `class Timer {
    var callback: (() -> Void)?
    
    init() {
        callback = { [weak self] in
            self?.fire()
        }
    }
    
    func fire() {
        print("Timer fired")
    }
}`,
        correctApproach: 'Use [weak self] or [unowned self] in closures'
      },
      {
        title: 'Protocol Conformance',
        description: 'Must explicitly declare protocol conformance',
        sourceExample: `# Duck typing - no explicit declaration
class Dog:
    def make_sound(self):
        return "Woof"`,
        targetExample: `protocol Animal {
    func makeSound() -> String
}

class Dog: Animal {  // Must declare conformance
    func makeSound() -> String {
        return "Woof"
    }
}`,
        correctApproach: 'Always explicitly declare protocol conformance in class/struct definition'
      },
      {
        title: 'REPL Workflow',
        description: 'Limited interactive development',
        sourceExample: `# Python REPL
>>> x = 5
>>> x * 2
10`,
        targetExample: `// Swift Playgrounds or swift repl
// Less integrated than Python`,
        correctApproach: 'Use Xcode Playgrounds for interactive development'
      }
    ],
    frameworkComparisons: [
      {
        category: 'mobile',
        sourceFramework: {
          name: 'Kivy',
          setupCode: `# Install Kivy
pip install kivy

# Create main.py file
# Run with: python main.py`,
          basicExample: `from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.button import Button
from kivy.uix.textinput import TextInput
from kivy.uix.label import Label

class TodoApp(App):
    def build(self):
        self.todos = []
        
        # Main layout
        main_layout = BoxLayout(orientation='vertical', padding=10, spacing=10)
        
        # Input section
        input_layout = BoxLayout(size_hint_y=None, height=50)
        self.text_input = TextInput(
            multiline=False,
            hint_text='Enter a todo item'
        )
        add_button = Button(
            text='Add',
            size_hint_x=None,
            width=100
        )
        add_button.bind(on_press=self.add_todo)
        
        input_layout.add_widget(self.text_input)
        input_layout.add_widget(add_button)
        
        # Todo list
        self.todo_list = BoxLayout(
            orientation='vertical',
            spacing=5
        )
        
        main_layout.add_widget(input_layout)
        main_layout.add_widget(self.todo_list)
        
        return main_layout
    
    def add_todo(self, instance):
        if self.text_input.text:
            # Create todo item
            todo_layout = BoxLayout(size_hint_y=None, height=40)
            
            label = Label(
                text=self.text_input.text,
                size_hint_x=0.8
            )
            
            delete_btn = Button(
                text='Delete',
                size_hint_x=0.2
            )
            delete_btn.bind(
                on_press=lambda x: self.delete_todo(todo_layout)
            )
            
            todo_layout.add_widget(label)
            todo_layout.add_widget(delete_btn)
            
            self.todo_list.add_widget(todo_layout)
            self.todos.append(self.text_input.text)
            self.text_input.text = ''
    
    def delete_todo(self, todo_layout):
        self.todo_list.remove_widget(todo_layout)

if __name__ == '__main__':
    TodoApp().run()`,
          strengths: [
            'Cross-platform support',
            'Rich UI components',
            'Touch and gesture support',
            'GPU acceleration',
            'Open source and free'
          ],
          ecosystem: ['KivyMD', 'Buildozer', 'Plyer', 'Kivy Garden', 'python-for-android']
        },
        targetFramework: {
          name: 'SwiftUI',
          setupCode: `# Create new Xcode project
# Select iOS App template
# Choose SwiftUI for interface

# Or use Swift Package Manager:
swift package init --type executable`,
          basicExample: `import SwiftUI

struct TodoItem: Identifiable {
    let id = UUID()
    var text: String
    var isCompleted: Bool = false
}

struct TodoApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

struct ContentView: View {
    @State private var todos: [TodoItem] = []
    @State private var newTodoText = ""
    
    var body: some View {
        NavigationView {
            VStack {
                // Input section
                HStack {
                    TextField("Enter a todo item", text: $newTodoText)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .onSubmit {
                            addTodo()
                        }
                    
                    Button("Add") {
                        addTodo()
                    }
                    .disabled(newTodoText.isEmpty)
                }
                .padding()
                
                // Todo list
                List {
                    ForEach(todos) { todo in
                        HStack {
                            Image(systemName: todo.isCompleted ? "checkmark.circle.fill" : "circle")
                                .foregroundColor(todo.isCompleted ? .green : .gray)
                                .onTapGesture {
                                    toggleTodo(todo)
                                }
                            
                            Text(todo.text)
                                .strikethrough(todo.isCompleted)
                            
                            Spacer()
                        }
                    }
                    .onDelete(perform: deleteTodos)
                }
                .listStyle(PlainListStyle())
            }
            .navigationTitle("Todo List")
        }
    }
    
    private func addTodo() {
        guard !newTodoText.isEmpty else { return }
        
        let newTodo = TodoItem(text: newTodoText)
        todos.append(newTodo)
        newTodoText = ""
    }
    
    private func toggleTodo(_ todo: TodoItem) {
        if let index = todos.firstIndex(where: { $0.id == todo.id }) {
            todos[index].isCompleted.toggle()
        }
    }
    
    private func deleteTodos(at offsets: IndexSet) {
        todos.remove(atOffsets: offsets)
    }
}

// Preview
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}`,
          strengths: [
            'Native iOS/macOS performance',
            'Declarative syntax',
            'Live preview in Xcode',
            'Automatic state management',
            'Deep Apple platform integration'
          ],
          ecosystem: ['Combine', 'Core Data', 'CloudKit', 'WidgetKit', 'SwiftUI Charts']
        },
        migrationTips: [
          'SwiftUI uses declarative syntax instead of imperative widget creation',
          'State management with @State, @Binding, @ObservedObject replaces direct property access',
          'Views are structs in SwiftUI, not classes like Kivy widgets',
          'Layout is handled through stacks (HStack, VStack, ZStack) instead of BoxLayout',
          'SwiftUI has built-in data binding, Kivy requires manual event binding',
          'Navigation is declarative with NavigationView/NavigationLink'
        ],
        commonPitfalls: [
          'SwiftUI views are immutable - use @State for mutable data',
          'No direct access to UI elements - everything goes through state',
          'Preview functionality requires additional setup',
          'Platform-specific code (iOS vs macOS) needs conditional compilation',
          'Performance considerations with complex view hierarchies'
        ]
      },
      {
        category: 'web',
        sourceFramework: {
          name: 'Django',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install Django
pip install django djangorestframework

# Create project
django-admin startproject myproject
cd myproject`,
          basicExample: `# models.py
from django.db import models
from django.contrib.auth.models import User

class TodoList(models.Model):
    name = models.CharField(max_length=200)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

class TodoItem(models.Model):
    list = models.ForeignKey(TodoList, on_delete=models.CASCADE)
    text = models.CharField(max_length=500)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']

# views.py
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .models import TodoList, TodoItem
from .forms import TodoItemForm

@login_required
def todo_list_view(request, list_id):
    todo_list = get_object_or_404(TodoList, id=list_id, owner=request.user)
    
    if request.method == 'POST':
        form = TodoItemForm(request.POST)
        if form.is_valid():
            item = form.save(commit=False)
            item.list = todo_list
            item.save()
            return redirect('todo_list', list_id=list_id)
    else:
        form = TodoItemForm()
    
    items = todo_list.todoitem_set.all()
    return render(request, 'todos/list.html', {
        'todo_list': todo_list,
        'items': items,
        'form': form
    })

@login_required
def toggle_todo(request, item_id):
    if request.method == 'POST':
        item = get_object_or_404(TodoItem, id=item_id, list__owner=request.user)
        item.is_completed = not item.is_completed
        item.save()
        return JsonResponse({'completed': item.is_completed})
    return JsonResponse({'error': 'Invalid method'}, status=400)`,
          strengths: [
            'Batteries included framework',
            'Excellent ORM',
            'Built-in admin interface',
            'Large ecosystem',
            'Great documentation'
          ],
          ecosystem: ['Django REST Framework', 'Celery', 'django-channels', 'django-allauth', 'django-crispy-forms']
        },
        targetFramework: {
          name: 'Vapor',
          setupCode: `# Install Vapor
brew install vapor

# Create new project
vapor new TodoApp
cd TodoApp

# Open in Xcode
vapor xcode`,
          basicExample: `import Vapor
import Fluent

// Models
final class TodoList: Model, Content {
    static let schema = "todo_lists"
    
    @ID(key: .id)
    var id: UUID?
    
    @Field(key: "name")
    var name: String
    
    @Parent(key: "user_id")
    var owner: User
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    @Children(for: \\.$list)
    var items: [TodoItem]
    
    init() { }
    
    init(id: UUID? = nil, name: String, ownerID: User.IDValue) {
        self.id = id
        self.name = name
        self.$owner.id = ownerID
    }
}

final class TodoItem: Model, Content {
    static let schema = "todo_items"
    
    @ID(key: .id)
    var id: UUID?
    
    @Field(key: "text")
    var text: String
    
    @Field(key: "is_completed")
    var isCompleted: Bool
    
    @Parent(key: "list_id")
    var list: TodoList
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    init() { }
    
    init(id: UUID? = nil, text: String, listID: TodoList.IDValue) {
        self.id = id
        self.text = text
        self.isCompleted = false
        self.$list.id = listID
    }
}

// Controllers
struct TodoController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let todos = routes.grouped("api", "todos")
        let authenticated = todos.grouped(User.authenticator())
        
        authenticated.get("lists", ":listID", use: getTodoList)
        authenticated.post("lists", ":listID", "items", use: createTodoItem)
        authenticated.post("items", ":itemID", "toggle", use: toggleTodo)
    }
    
    func getTodoList(req: Request) async throws -> TodoList {
        let user = try req.auth.require(User.self)
        guard let listID = req.parameters.get("listID", as: UUID.self) else {
            throw Abort(.badRequest)
        }
        
        guard let list = try await TodoList.query(on: req.db)
            .filter(\\.$id == listID)
            .filter(\\.$owner.$id == user.id!)
            .with(\\.$items)
            .first() else {
            throw Abort(.notFound)
        }
        
        return list
    }
    
    func createTodoItem(req: Request) async throws -> TodoItem {
        let user = try req.auth.require(User.self)
        guard let listID = req.parameters.get("listID", as: UUID.self) else {
            throw Abort(.badRequest)
        }
        
        // Verify ownership
        guard let _ = try await TodoList.query(on: req.db)
            .filter(\\.$id == listID)
            .filter(\\.$owner.$id == user.id!)
            .first() else {
            throw Abort(.notFound)
        }
        
        struct CreateTodoRequest: Content {
            let text: String
        }
        
        let input = try req.content.decode(CreateTodoRequest.self)
        let item = TodoItem(text: input.text, listID: listID)
        
        try await item.save(on: req.db)
        return item
    }
    
    func toggleTodo(req: Request) async throws -> TodoItem {
        let user = try req.auth.require(User.self)
        guard let itemID = req.parameters.get("itemID", as: UUID.self) else {
            throw Abort(.badRequest)
        }
        
        guard let item = try await TodoItem.query(on: req.db)
            .join(TodoList.self, on: \\TodoItem.$list.$id == \\TodoList.$id)
            .filter(TodoList.self, \\.$owner.$id == user.id!)
            .filter(\\.$id == itemID)
            .first() else {
            throw Abort(.notFound)
        }
        
        item.isCompleted.toggle()
        try await item.save(on: req.db)
        
        return item
    }
}`,
          strengths: [
            'Type-safe at compile time',
            'High performance',
            'Swift on the server',
            'Async/await support',
            'Cross-platform'
          ],
          ecosystem: ['Fluent ORM', 'Leaf templates', 'JWT', 'Queues', 'WebSockets']
        },
        migrationTips: [
          'Vapor uses async/await throughout, similar to Django\'s async views',
          'Fluent ORM is similar to Django ORM but with Swift\'s type safety',
          'Routing is defined in code rather than separate urls.py files',
          'Middleware system is similar but configured differently',
          'No built-in admin interface - you\'ll need to build admin functionality',
          'Template rendering uses Leaf instead of Django templates'
        ],
        commonPitfalls: [
          'No automatic database migrations generation - must write manually',
          'Authentication/authorization requires more setup than Django',
          'No built-in forms framework - validation is manual',
          'Static file serving needs explicit configuration',
          'Less third-party packages available compared to Django ecosystem'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'pytest',
          setupCode: `# Install pytest
pip install pytest pytest-asyncio pytest-mock

# Create test file
# test_todo.py`,
          basicExample: `import pytest
from unittest.mock import Mock, patch
from myapp.models import User, TodoItem
from myapp.services import TodoService

# Fixtures
@pytest.fixture
def user():
    return User(name="Test User", email="test@example.com")

@pytest.fixture
def todo_service():
    return TodoService()

@pytest.fixture
def mock_database():
    with patch('myapp.database.get_connection') as mock:
        yield mock

# Basic test
def test_user_creation(user):
    assert user.name == "Test User"
    assert user.email == "test@example.com"
    assert user.id is None  # Not saved yet

# Parametrized test
@pytest.mark.parametrize("text,expected_valid", [
    ("Buy groceries", True),
    ("", False),
    ("A" * 501, False),  # Too long
    ("Valid todo", True),
])
def test_todo_validation(text, expected_valid):
    todo = TodoItem(text=text)
    assert todo.is_valid() == expected_valid

# Async test
@pytest.mark.asyncio
async def test_async_todo_creation(todo_service, user):
    todo = await todo_service.create_todo(
        user_id=user.id,
        text="Async todo"
    )
    assert todo.text == "Async todo"
    assert todo.user_id == user.id

# Mocking
def test_todo_service_with_mock(todo_service, mock_database):
    mock_database.return_value.fetch_one.return_value = {
        'id': 1,
        'text': 'Mocked todo',
        'completed': False
    }
    
    todo = todo_service.get_todo(1)
    assert todo.text == 'Mocked todo'
    mock_database.return_value.fetch_one.assert_called_once_with(
        "SELECT * FROM todos WHERE id = ?", (1,)
    )

# Exception testing
def test_todo_not_found(todo_service):
    with pytest.raises(TodoNotFoundError) as exc_info:
        todo_service.get_todo(999)
    
    assert "Todo with id 999 not found" in str(exc_info.value)

# Test class
class TestTodoOperations:
    def test_mark_complete(self, todo_service, user):
        todo = todo_service.create_todo(user.id, "Test todo")
        assert not todo.is_completed
        
        todo_service.mark_complete(todo.id)
        assert todo.is_completed
    
    def test_delete_todo(self, todo_service, user):
        todo = todo_service.create_todo(user.id, "To delete")
        assert todo_service.get_todo(todo.id) is not None
        
        todo_service.delete_todo(todo.id)
        with pytest.raises(TodoNotFoundError):
            todo_service.get_todo(todo.id)`,
          strengths: [
            'Simple and powerful',
            'Excellent fixtures',
            'Rich plugin ecosystem',
            'Great error messages',
            'Easy parametrization'
          ],
          ecosystem: ['pytest-cov', 'pytest-mock', 'pytest-xdist', 'pytest-benchmark', 'hypothesis']
        },
        targetFramework: {
          name: 'XCTest',
          setupCode: `# XCTest comes with Xcode
# Create new test target in Xcode
# Or add to Package.swift:

# .testTarget(
#     name: "MyAppTests",
#     dependencies: ["MyApp"]
# )`,
          basicExample: `import XCTest
@testable import MyApp

// Test case class
class TodoTests: XCTestCase {
    var user: User!
    var todoService: TodoService!
    
    // Setup and teardown
    override func setUp() {
        super.setUp()
        user = User(name: "Test User", email: "test@example.com")
        todoService = TodoService()
    }
    
    override func tearDown() {
        user = nil
        todoService = nil
        super.tearDown()
    }
    
    // Basic test
    func testUserCreation() {
        XCTAssertEqual(user.name, "Test User")
        XCTAssertEqual(user.email, "test@example.com")
        XCTAssertNil(user.id)  // Not saved yet
    }
    
    // Parameterized-like test
    func testTodoValidation() {
        let testCases: [(text: String, isValid: Bool)] = [
            ("Buy groceries", true),
            ("", false),
            (String(repeating: "A", count: 501), false),  // Too long
            ("Valid todo", true)
        ]
        
        for testCase in testCases {
            let todo = TodoItem(text: testCase.text)
            XCTAssertEqual(todo.isValid(), testCase.isValid,
                          "Failed for text: \\(testCase.text)")
        }
    }
    
    // Async test
    func testAsyncTodoCreation() async throws {
        let todo = try await todoService.createTodo(
            userId: user.id,
            text: "Async todo"
        )
        
        XCTAssertEqual(todo.text, "Async todo")
        XCTAssertEqual(todo.userId, user.id)
    }
    
    // Mocking with protocols
    func testTodoServiceWithMock() {
        class MockDatabase: DatabaseProtocol {
            var fetchOneCalled = false
            var fetchOneResult: [String: Any]?
            
            func fetchOne(query: String, params: [Any]) -> [String: Any]? {
                fetchOneCalled = true
                return fetchOneResult
            }
        }
        
        let mockDB = MockDatabase()
        mockDB.fetchOneResult = [
            "id": 1,
            "text": "Mocked todo",
            "completed": false
        ]
        
        let service = TodoService(database: mockDB)
        let todo = try? service.getTodo(id: 1)
        
        XCTAssertTrue(mockDB.fetchOneCalled)
        XCTAssertEqual(todo?.text, "Mocked todo")
    }
    
    // Exception testing
    func testTodoNotFound() {
        XCTAssertThrowsError(try todoService.getTodo(id: 999)) { error in
            guard let todoError = error as? TodoError,
                  case .notFound(let id) = todoError else {
                XCTFail("Wrong error type")
                return
            }
            XCTAssertEqual(id, 999)
        }
    }
    
    // Performance test
    func testTodoCreationPerformance() {
        measure {
            for i in 0..<100 {
                _ = TodoItem(text: "Todo \\(i)")
            }
        }
    }
    
    // UI test example
    func testTodoListUI() throws {
        let app = XCUIApplication()
        app.launch()
        
        // Add new todo
        let addButton = app.buttons["Add Todo"]
        let textField = app.textFields["Todo Text"]
        
        textField.tap()
        textField.typeText("New UI Test Todo")
        addButton.tap()
        
        // Verify todo appears
        XCTAssertTrue(app.staticTexts["New UI Test Todo"].exists)
    }
}

// Test expectations
class AsyncTodoTests: XCTestCase {
    func testAsyncOperation() {
        let expectation = expectation(description: "Async operation completes")
        
        TodoService.shared.fetchTodos { todos in
            XCTAssertGreaterThan(todos.count, 0)
            expectation.fulfill()
        }
        
        waitForExpectations(timeout: 5.0) { error in
            XCTAssertNil(error)
        }
    }
}`,
          strengths: [
            'Integrated with Xcode',
            'UI testing support',
            'Performance testing',
            'Code coverage',
            'Async testing support'
          ],
          ecosystem: ['Quick/Nimble', 'SwiftLint', 'Sourcery', 'SwiftFormat', 'XCTestExpectation']
        },
        migrationTips: [
          'XCTest uses setUp/tearDown instead of fixtures',
          'No built-in parametrized tests - use loops or data-driven approaches',
          'Async tests use async/await or expectations',
          'Mocking typically uses protocols and manual mocks',
          'Test discovery is automatic based on test method names',
          'UI testing is integrated with XCUITest'
        ],
        commonPitfalls: [
          'No automatic test discovery outside of XCTest methods',
          'Limited mocking support - often need to create manual mocks',
          'No built-in fixtures system like pytest',
          'Test isolation requires manual cleanup',
          'Performance tests require special handling with measure blocks'
        ]
      },
      {
        category: 'build',
        sourceFramework: {
          name: 'pip/Poetry',
          setupCode: `# Using pip (comes with Python)
pip install -r requirements.txt

# Or using Poetry
curl -sSL https://install.python-poetry.org | python3 -
poetry new myproject
cd myproject`,
          basicExample: `# requirements.txt (pip)
django>=4.2,<5.0
djangorestframework==3.14.0
celery[redis]==5.3.0
psycopg2-binary==2.9.7
gunicorn==21.2.0
pytest==7.4.0
black==23.7.0

# pyproject.toml (Poetry)
[tool.poetry]
name = "myproject"
version = "0.1.0"
description = "A Python web application"
authors = ["Your Name <you@example.com>"]
readme = "README.md"

[tool.poetry.dependencies]
python = "^3.11"
django = "^4.2"
djangorestframework = "^3.14.0"
celery = {extras = ["redis"], version = "^5.3.0"}
psycopg2-binary = "^2.9.7"
gunicorn = "^21.2.0"

[tool.poetry.group.dev.dependencies]
pytest = "^7.4.0"
pytest-django = "^4.5.2"
black = "^23.7.0"
flake8 = "^6.1.0"
mypy = "^1.5.0"
pre-commit = "^3.3.3"

[tool.poetry.scripts]
manage = "manage:main"
start-worker = "myproject.celery:start_worker"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"

# Commands
# pip install -r requirements.txt
# pip freeze > requirements.txt
# 
# poetry new myproject
# poetry add django
# poetry add --group dev pytest
# poetry install
# poetry run python manage.py runserver
# poetry build
# poetry publish`,
          strengths: [
            'Simple and universal',
            'Huge package repository',
            'Virtual environments',
            'Requirements files',
            'Poetry for modern workflows'
          ],
          ecosystem: ['PyPI', 'pip-tools', 'pipenv', 'conda', 'virtualenv']
        },
        targetFramework: {
          name: 'Swift Package Manager',
          setupCode: `# SPM comes with Swift
# Create Package.swift in project root

swift package init --type library
# or
swift package init --type executable`,
          basicExample: `// Package.swift
// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "MyProject",
    platforms: [
        .macOS(.v13),
        .iOS(.v16)
    ],
    products: [
        .library(
            name: "MyProjectCore",
            targets: ["MyProjectCore"]
        ),
        .executable(
            name: "MyProjectCLI",
            targets: ["MyProjectCLI"]
        )
    ],
    dependencies: [
        .package(url: "https://github.com/vapor/vapor.git", from: "4.83.0"),
        .package(url: "https://github.com/vapor/fluent.git", from: "4.8.0"),
        .package(url: "https://github.com/vapor/fluent-postgres-driver.git", from: "2.7.0"),
        .package(url: "https://github.com/swift-server/async-http-client.git", from: "1.19.0"),
        .package(url: "https://github.com/apple/swift-argument-parser.git", from: "1.2.0")
    ],
    targets: [
        .target(
            name: "MyProjectCore",
            dependencies: [
                .product(name: "Vapor", package: "vapor"),
                .product(name: "Fluent", package: "fluent"),
                .product(name: "FluentPostgresDriver", package: "fluent-postgres-driver")
            ],
            resources: [
                .copy("Resources/Views"),
                .process("Resources/Public")
            ]
        ),
        .executableTarget(
            name: "MyProjectCLI",
            dependencies: [
                "MyProjectCore",
                .product(name: "ArgumentParser", package: "swift-argument-parser")
            ]
        ),
        .testTarget(
            name: "MyProjectTests",
            dependencies: [
                "MyProjectCore",
                .product(name: "XCTVapor", package: "vapor")
            ]
        )
    ]
)

// .swift-version (for specific Swift version)
5.9

// Commands
// swift package init --type library
// swift package init --type executable
// swift build
// swift test
// swift run MyProjectCLI
// swift package generate-xcodeproj  // For Xcode
// swift package update
// swift package resolve
// swift package clean

// Build configurations
// swift build -c release
// swift build --arch arm64 --arch x86_64  // Universal binary`,
          strengths: [
            'Integrated with Swift',
            'Declarative syntax',
            'Version resolution',
            'Multi-platform support',
            'Xcode integration'
          ],
          ecosystem: ['SwiftPM Plugins', 'xcframework', 'CocoaPods', 'Carthage', 'Swift Package Index']
        },
        migrationTips: [
          'SPM uses Package.swift instead of requirements.txt/pyproject.toml',
          'Dependencies are specified with URLs and version requirements',
          'No virtual environment - SPM manages dependencies per project',
          'Products define what your package exports (libraries/executables)',
          'Targets are similar to Python modules but more explicit',
          'Resources must be explicitly declared for inclusion'
        ],
        commonPitfalls: [
          'Version syntax is different (from: "1.0.0" vs ^1.0.0)',
          'No global package installation - all dependencies are per-project',
          'Must explicitly define platform requirements',
          'Resource handling requires special declarations',
          'Binary dependencies need XCFramework format'
        ]
      }
    ]
  };