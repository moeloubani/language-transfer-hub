import type { LanguageComparison } from '../../types/language';

export const csharpJavascriptComparison: LanguageComparison = {
    sourceLanguage: 'C#',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static typing to dynamic typing',
        sourceCode: `// C# requires explicit types (or var)
string name = "John";
int age = 25;
bool isActive = true;
const double PI = 3.14159; // compile-time constant
readonly int maxSize = 100; // runtime constant

// Type inference with var
var inferredName = "John";
var inferredAge = 25;

// Nullable types
string? nullableName = null;
int? nullableAge = null;`,
        targetCode: `// var: function-scoped, hoisted, redeclarable
var globalConfig = "old way";
var globalConfig = "redeclared"; // OK

// let: block-scoped, mutable, modern
let age = 25;
age = 26; // OK - can reassign
{ let age = 30; } // OK - different scope

// const: block-scoped, immutable binding (preferred)
const name = "John";
// name = "Jane"; // Error: can't reassign
const PI = 3.14159; // Like C#'s const

// const with mutable objects
const user = { name: "John" };
user.name = "Jane"; // OK - object is mutable
user.age = 25; // OK - can add properties

// No built-in nullable types (use null/undefined)
let nullableName = null;
let nullableAge = undefined;`
      },
      {
        topic: 'Classes and Objects',
        description: 'OOP with different approaches',
        sourceCode: `public class Person {
    private string name;
    private int age;
    
    public Person(string name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public string Name {
        get { return this.name; }
        set { this.name = value; }
    }
    
    public string Greet() {
        return $"Hi, I'm {this.name}";
    }
}

Person person = new Person("John", 30);`,
        targetCode: `class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    
    get name() {
        return this._name;
    }
    
    set name(value) {
        this._name = value;
    }
    
    greet() {
        return \`Hi, I'm \${this._name}\`;
    }
}

const person = new Person("John", 30);`
      },
      {
        topic: 'Methods and Functions',
        description: 'Function definition approaches',
        sourceCode: `public class MathUtils {
    // Static method
    public static int Add(int a, int b) {
        return a + b;
    }
    
    // Expression-bodied method (C# 6+)
    public static double CalculateArea(double radius) => Math.PI * radius * radius;
    
    // Method overloading
    public static string Greet(string name) {
        return $"Hello, {name}";
    }
    
    public static string Greet(string name, string greeting) {
        return $"{greeting}, {name}";
    }
    
    // Optional parameters
    public static void Log(string message, LogLevel level = LogLevel.Info) {
        Console.WriteLine($"[{level}] {message}");
    }
    
    // Generic method
    public static T Max<T>(T a, T b) where T : IComparable<T> {
        return a.CompareTo(b) > 0 ? a : b;
    }
    
    // Async method
    public static async Task<string> FetchDataAsync(string url) {
        using var client = new HttpClient();
        return await client.GetStringAsync(url);
    }
    
    // Lambda expression
    public static readonly Func<int, int> Square = x => x * x;
}`,
        targetCode: `// Standalone functions (no class needed)
function add(a, b) {
    return a + b;
}

// Arrow function (concise syntax)
const calculateArea = (radius) => Math.PI * radius * radius;

// Function expression
const multiply = function(a, b) {
    return a * b;
};

// Single-expression arrow function (implicit return)
const square = x => x * x;

// Function overloading - use default params or rest params
function greet(name, greeting = "Hello") {
    return \`\${greeting}, \${name}\`;
}

// Alternative: check argument count
function greetFlexible(...args) {
    if (args.length === 1) {
        return \`Hello, \${args[0]}\`;
    }
    return \`\${args[1]}, \${args[0]}\`;
}

// Optional parameters with defaults
function log(message, level = "INFO") {
    console.log(\`[\${level}] \${message}\`);
}

// Generic-like behavior (JS is dynamically typed)
function max(a, b) {
    return a > b ? a : b;
}

// Async function
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        return await response.text();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

// Higher-order functions and closures
const createCounter = (initial = 0) => {
    let count = initial;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
};

// Function composition
const compose = (f, g) => x => f(g(x));
const addOne = x => x + 1;
const double = x => x * 2;
const addOneThenDouble = compose(double, addOne);

// Usage examples
console.log(add(5, 3)); // 8
console.log(square(4)); // 16
console.log(addOneThenDouble(3)); // 8
const counter = createCounter();
console.log(counter.increment()); // 1`
      },
      {
        topic: 'Collections and Arrays',
        description: 'Working with data structures',
        sourceCode: `// C# Arrays and Collections
string[] fruits = {"apple", "banana", "orange"};
List<string> fruitsList = new List<string>(fruits);
fruitsList.Add("grape");

Dictionary<string, int> ages = new Dictionary<string, int> {
    {"John", 30},
    {"Jane", 25}
};

// LINQ operations
var upperFruits = fruitsList.Select(f => f.ToUpper()).ToList();
var adults = ages.Where(kvp => kvp.Value >= 18).ToList();`,
        targetCode: `// JavaScript Arrays
const fruits = ["apple", "banana", "orange"];
const fruitsList = [...fruits];
fruitsList.push("grape");

const ages = new Map([
    ["John", 30],
    ["Jane", 25]
]);

// Array methods
const upperFruits = fruitsList.map(f => f.toUpperCase());
const adults = Array.from(ages).filter(([name, age]) => age >= 18);`
      },
      {
        topic: 'Async Programming',
        description: 'Asynchronous operations',
        sourceCode: `// C# async/await
public async Task<string> FetchDataAsync(string url) {
    try {
        using (HttpClient client = new HttpClient()) {
            HttpResponseMessage response = await client.GetAsync(url);
            return await response.Content.ReadAsStringAsync();
        }
    } catch (Exception ex) {
        Console.WriteLine($"Error: {ex.Message}");
        return null;
    }
}

// Usage
string data = await FetchDataAsync("https://api.example.com/data");`,
        targetCode: `// Modern JavaScript async/await with enhanced error handling
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
        }
        return await response.text();
    } catch (error) {
        console.error(\`Error fetching \${url}:\`, error.message);
        throw error; // Re-throw for caller to handle
    }
}

// Multiple concurrent requests (like C# Task.WhenAll)
async function fetchMultiple(urls) {
    try {
        const results = await Promise.all(
            urls.map(url => fetchData(url))
        );
        return results;
    } catch (error) {
        console.error('One or more requests failed:', error);
        throw error;
    }
}

// Usage with proper error handling
async function main() {
    try {
        // Single request
        const data = await fetchData("https://api.example.com/data");
        console.log(data);
        
        // Multiple requests
        const multiple = await fetchMultiple([
            "https://api.example.com/users",
            "https://api.example.com/posts"
        ]);
        console.log(multiple);
    } catch (error) {
        console.error('Application error:', error);
    }
}`
      },
      {
        topic: 'Error Handling',
        description: 'Exception handling approaches',
        sourceCode: `try {
    string content = File.ReadAllText("data.txt");
    int number = int.Parse(content);
    Console.WriteLine(number);
} catch (FileNotFoundException ex) {
    Console.WriteLine($"File not found: {ex.Message}");
} catch (FormatException ex) {
    Console.WriteLine($"Invalid format: {ex.Message}");
} catch (Exception ex) {
    Console.WriteLine($"General error: {ex.Message}");
} finally {
    Console.WriteLine("Cleanup completed");
}`,
        targetCode: `// Modern error handling with validation
function readAndParseFile(filename) {
    try {
        const content = require('fs').readFileSync(filename, 'utf8');
        
        // Input validation
        if (!content.trim()) {
            throw new Error('File is empty');
        }
        
        const number = parseInt(content.trim());
        
        // Validation with meaningful errors
        if (isNaN(number)) {
            throw new Error(\`Invalid number format: "\${content.trim()}"\`);
        }
        
        return { success: true, data: number };
    } catch (error) {
        // Error type checking and handling
        if (error.code === 'ENOENT') {
            console.error(\`File not found: \${filename}\`);
            return { success: false, error: 'FILE_NOT_FOUND' };
        } else if (error.code === 'EACCES') {
            console.error(\`Permission denied: \${filename}\`);
            return { success: false, error: 'PERMISSION_DENIED' };
        } else {
            console.error(\`Parse error: \${error.message}\`);
            return { success: false, error: 'PARSE_ERROR' };
        }
    } finally {
        console.log("File operation completed");
    }
}

// Usage with result pattern
const result = readAndParseFile('data.txt');
if (result.success) {
    console.log(\`Number: \${result.data}\`);
} else {
    console.log(\`Failed: \${result.error}\`);
}`
      },
      {
        topic: 'Modern Language Features',
        description: 'Destructuring, spread, and modern patterns',
        sourceCode: `// C# Tuples and Deconstruction
var (name, age) = GetPerson();
(string firstName, string lastName) = GetFullName();

// Pattern matching (C# 8+)
string GetDescription(object obj) => obj switch {
    int n when n > 0 => "Positive number",
    string s => $"String: {s}",
    null => "Null value",
    _ => "Unknown"
};

// Record types (C# 9+)
public record Person(string Name, int Age);
var person = new Person("John", 30);
var updatedPerson = person with { Age = 31 };

// Collection expressions (C# 12+)
int[] numbers = [1, 2, 3, 4, 5];
int[] moreNumbers = [..numbers, 6, 7, 8];

// Object initializers
var user = new User {
    Name = "John",
    Age = 30,
    Tags = new List<string> { "admin", "user" }
};

// LINQ for data transformation
var adults = people
    .Where(p => p.Age >= 18)
    .Select(p => new { p.Name, p.Age })
    .OrderBy(p => p.Name);`,
        targetCode: `// Array and Object Destructuring
const [name, age] = getPerson();
const [firstName, lastName] = getFullName();

// Object destructuring with renaming
const { name: userName, age: userAge } = user;

// Nested destructuring
const { address: { city, street } } = person;

// Default values in destructuring
const { theme = 'light', lang = 'en' } = settings;

// Pattern-like behavior with conditionals
const getDescription = (obj) => {
    if (typeof obj === 'number' && obj > 0) return "Positive number";
    if (typeof obj === 'string') return \`String: \${obj}\`;
    if (obj === null) return "Null value";
    return "Unknown";
};

// Object spread for immutable updates
const person = { name: "John", age: 30 };
const updatedPerson = { ...person, age: 31 };

// Array spread
const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [...numbers, 6, 7, 8];

// Rest parameters in destructuring
const { name, ...otherProps } = person;
const [first, ...rest] = numbers;

// Object property shorthand
const createUser = (name, age) => ({ name, age });

// Array methods for data transformation
const adults = people
    .filter(p => p.age >= 18)
    .map(p => ({ name: p.name, age: p.age }))
    .sort((a, b) => a.name.localeCompare(b.name));

// Optional chaining and nullish coalescing
const city = person?.address?.city ?? 'Unknown';
const port = config.port ?? 3000;

// Dynamic property names
const prop = 'status';
const obj = {
    [prop]: 'active',
    [\`is\${prop.charAt(0).toUpperCase() + prop.slice(1)}\`]: true
};

// Template literal tags
const sql = (strings, ...values) => {
    // SQL template tag implementation
    return { query: strings.join('?'), values };
};

const query = sql\`SELECT * FROM users WHERE id = \${userId}\`;`
      }
    ],
    commonPitfalls: [
      {
        title: 'Naming Conventions',
        description: 'PascalCase vs camelCase',
        sourceExample: `public void GetUserData() { }
public string UserName { get; set; }`,
        targetExample: `function getUserData() { }
const userName = "john";`,
        correctApproach: 'Use camelCase for variables and functions in JavaScript'
      },
      {
        title: 'Type Safety',
        description: 'Static vs dynamic typing',
        sourceExample: `string name = "John";
name = 123; // Compilation error`,
        targetExample: `let name = "John";
name = 123; // Perfectly fine`,
        correctApproach: 'Be careful with type changes in JavaScript, consider TypeScript for type safety'
      },
      {
        title: 'Null vs Undefined',
        description: 'Different null concepts',
        sourceExample: `string value = null;
if (value == null) {
    // Handle null
}`,
        targetExample: `const value = null;
if (value === null || value === undefined) {
    // Handle both cases
}`,

        correctApproach: 'Understand JavaScript has both null and undefined'
      },
      {
        title: 'Collections vs Arrays',
        description: 'Different data structure approaches',
        sourceExample: `List<string> items = new List<string>();
items.Add("item");
int count = items.Count;`,
        targetExample: `const items = [];
items.push("item");
const count = items.length;`,
        correctApproach: 'JavaScript arrays are more flexible but less type-safe'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform and Runtime',
        description: 'Execution environment',
        sourceApproach: 'C# runs on .NET runtime, primarily desktop and server applications',
        targetApproach: 'JavaScript runs in browsers and Node.js, web-focused'
      },
      {
        topic: 'Type System',
        description: 'Compile-time vs runtime typing',
        sourceApproach: 'C# has strong static typing with compile-time checking',
        targetApproach: 'JavaScript is dynamically typed with runtime type checking'
      },
      {
        topic: 'Memory Management',
        description: 'Automatic memory handling',
        sourceApproach: 'C# has sophisticated garbage collection with generations',
        targetApproach: 'JavaScript has simpler garbage collection optimized for short-lived objects'
      },
      {
        topic: 'Development Ecosystem',
        description: 'Tooling and frameworks',
        sourceApproach: 'C# has Visual Studio, NuGet, enterprise-focused frameworks',
        targetApproach: 'JavaScript has diverse tooling, npm ecosystem, web-focused frameworks'
      },
      {
        topic: 'Concurrency Model',
        description: 'Handling concurrent operations',
        sourceApproach: 'C# uses threads, Tasks, and async/await with thread pool',
        targetApproach: 'JavaScript uses event loop with single-threaded execution'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'ASP.NET Core',
          setupCode: `# Install .NET SDK from https://dotnet.microsoft.com

# Create new Web API project
dotnet new webapi -n MyApi
cd MyApi

# Add Entity Framework packages
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Design

# Run the application
dotnet run`,
          basicExample: `// Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));
builder.Services.AddScoped<IUserService, UserService>();

var app = builder.Build();

app.UseHttpsRedirection();
app.MapControllers();
app.Run();

// UserController.cs
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;
    
    public UsersController(IUserService userService)
    {
        _userService = userService;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
    {
        var users = await _userService.GetAllUsersAsync();
        return Ok(users);
    }
    
    [HttpPost]
    public async Task<ActionResult<UserDto>> CreateUser(CreateUserDto dto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
            
        var user = await _userService.CreateUserAsync(dto);
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<UserDto>> GetUser(int id)
    {
        var user = await _userService.GetUserByIdAsync(id);
        if (user == null)
            return NotFound();
            
        return Ok(user);
    }
}

// Models/User.cs
public class User
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required, EmailAddress]
    public string Email { get; set; }
    public DateTime CreatedAt { get; set; }
}`,
          strengths: [
            'Enterprise-grade framework',
            'Built-in dependency injection',
            'Excellent performance',
            'Strong typing and tooling',
            'Built-in authentication/authorization',
            'Cross-platform (Windows, Linux, macOS)'
          ],
          ecosystem: ['NuGet', 'Entity Framework Core', 'Identity', 'SignalR', 'Blazor']
        },
        targetFramework: {
          name: 'Express.js + TypeScript',
          setupCode: `# Initialize project
npm init -y
npm install express cors helmet compression
npm install -D typescript @types/express @types/node nodemon ts-node

# TypeScript configuration
npx tsc --init

# Install validation and ORM
npm install class-validator class-transformer
npm install @prisma/client prisma

# package.json scripts
"scripts": {
  "dev": "nodemon src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}`,
          basicExample: `// server.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { PrismaClient } from '@prisma/client';
import { validate } from 'class-validator';

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// DTOs with validation
class CreateUserDto {
  @IsNotEmpty()
  name: string;
  
  @IsEmail()
  email: string;
}

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/users', async (req, res) => {
  const dto = Object.assign(new CreateUserDto(), req.body);
  const errors = await validate(dto);
  
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  
  try {
    const user = await prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email
      }
    });
    
    res.status(201).json(user);
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(409).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.get('/api/users/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
  
  const user = await prisma.user.findUnique({
    where: { id }
  });
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
          strengths: [
            'Lightweight and flexible',
            'Huge ecosystem of middleware',
            'TypeScript adds type safety',
            'Fast development cycle',
            'Easy to deploy anywhere',
            'Great for microservices'
          ],
          ecosystem: ['npm', 'TypeScript', 'Prisma/TypeORM', 'Passport.js', 'Socket.io']
        },
        migrationTips: [
          'Use TypeScript to maintain type safety like C#',
          'Prisma or TypeORM provide similar ORM experience to Entity Framework',
          'class-validator replaces C# model validation attributes',
          'Use middleware pattern similar to ASP.NET Core pipeline',
          'Consider NestJS for a more ASP.NET-like architecture'
        ],
        commonPitfalls: [
          'No built-in dependency injection container (use TypeDI or InversifyJS)',
          'Manual configuration required for many features ASP.NET includes',
          'Different project structure and conventions',
          'Authentication/authorization needs additional setup',
          'No built-in model binding and validation'
        ]
      },
      {
        category: 'fullstack',
        sourceFramework: {
          name: 'Blazor',
          setupCode: `# Create Blazor WebAssembly app
dotnet new blazorwasm -n MyBlazorApp
cd MyBlazorApp

# Add HttpClient for API calls
dotnet add package Microsoft.Extensions.Http

# Run the application
dotnet run`,
          basicExample: `// Pages/Users.razor
@page "/users"
@inject HttpClient Http

<h3>Users</h3>

@if (users == null)
{
    <p>Loading...</p>
}
else
{
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach (var user in users)
            {
                <tr>
                    <td>@user.Name</td>
                    <td>@user.Email</td>
                    <td>
                        <button @onclick="() => EditUser(user.Id)">Edit</button>
                    </td>
                </tr>
            }
        </tbody>
    </table>
}

<h4>Add User</h4>
<EditForm Model="@newUser" OnValidSubmit="@CreateUser">
    <DataAnnotationsValidator />
    <ValidationSummary />
    
    <div>
        <label>Name:</label>
        <InputText @bind-Value="newUser.Name" />
    </div>
    
    <div>
        <label>Email:</label>
        <InputText @bind-Value="newUser.Email" />
    </div>
    
    <button type="submit">Create</button>
</EditForm>

@code {
    private List<User>? users;
    private User newUser = new User();
    
    protected override async Task OnInitializedAsync()
    {
        users = await Http.GetFromJsonAsync<List<User>>("api/users");
    }
    
    private async Task CreateUser()
    {
        var response = await Http.PostAsJsonAsync("api/users", newUser);
        if (response.IsSuccessStatusCode)
        {
            var created = await response.Content.ReadFromJsonAsync<User>();
            users?.Add(created);
            newUser = new User();
        }
    }
    
    private void EditUser(int id)
    {
        // Navigation logic
    }
}

// Models/User.cs
public class User
{
    public int Id { get; set; }
    
    [Required]
    public string Name { get; set; } = "";
    
    [Required, EmailAddress]
    public string Email { get; set; } = "";
}`,
          strengths: [
            'Full-stack C# development',
            'Strong typing throughout',
            'Component-based architecture',
            'No JavaScript required',
            'Shared code between client and server',
            'Built-in form validation'
          ],
          ecosystem: ['.NET', 'Razor Components', 'SignalR', 'Entity Framework', 'Identity']
        },
        targetFramework: {
          name: 'React + TypeScript',
          setupCode: `# Create React app with TypeScript
npx create-react-app my-app --template typescript
cd my-app

# Install additional dependencies
npm install axios react-query react-hook-form
npm install react-router-dom @types/react-router-dom

# Start development server
npm start`,
          basicExample: `// components/Users.tsx
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

interface CreateUserDto {
  name: string;
  email: string;
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const Users: React.FC = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateUserDto>();
  
  // Fetch users
  const { data: users, isLoading, error } = useQuery<User[]>(
    'users',
    async () => {
      const response = await axios.get(\`\${API_URL}/api/users\`);
      return response.data;
    }
  );
  
  // Create user mutation
  const createUser = useMutation(
    async (data: CreateUserDto) => {
      const response = await axios.post(\`\${API_URL}/api/users\`, data);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
        reset();
      }
    }
  );
  
  const onSubmit = (data: CreateUserDto) => {
    createUser.mutate(data);
  };
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;
  
  return (
    <div>
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => editUser(user.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h4>Add User</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input 
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        
        <div>
          <label>Email:</label>
          <input 
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        
        <button type="submit" disabled={createUser.isLoading}>
          {createUser.isLoading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

// App.tsx
import { QueryClient, QueryClientProvider } from 'react-query';
import { Users } from './components/Users';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}`,
          strengths: [
            'Component-based architecture',
            'Large ecosystem and community',
            'TypeScript support',
            'Virtual DOM for performance',
            'Flexible state management',
            'Server-side rendering with Next.js'
          ],
          ecosystem: ['npm', 'React Router', 'Redux/Zustand', 'Material-UI', 'Next.js']
        },
        migrationTips: [
          'React components are similar to Blazor components',
          'useState/useReducer replaces Blazor\'s state management',
          'react-hook-form provides form validation like Blazor EditForm',
          'react-query handles data fetching and caching',
          'TypeScript provides type safety similar to C#'
        ],
        commonPitfalls: [
          'JavaScript ecosystem has more complexity than Blazor',
          'Need to handle CORS for API calls',
          'State management requires additional libraries',
          'Form validation is more manual',
          'Build configuration can be complex'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'xUnit / NUnit',
          setupCode: `# Add xUnit to project
dotnet add package xunit
dotnet add package xunit.runner.visualstudio
dotnet add package Moq
dotnet add package FluentAssertions

# Or for NUnit
dotnet add package NUnit
dotnet add package NUnit3TestAdapter

# Run tests
dotnet test`,
          basicExample: `// UserServiceTests.cs
public class UserServiceTests
{
    private readonly Mock<IUserRepository> _mockRepository;
    private readonly UserService _service;
    
    public UserServiceTests()
    {
        _mockRepository = new Mock<IUserRepository>();
        _service = new UserService(_mockRepository.Object);
    }
    
    [Fact]
    public async Task GetAllUsers_ReturnsAllUsers()
    {
        // Arrange
        var expectedUsers = new List<User>
        {
            new User { Id = 1, Name = "John", Email = "john@example.com" },
            new User { Id = 2, Name = "Jane", Email = "jane@example.com" }
        };
        _mockRepository.Setup(x => x.GetAllAsync())
            .ReturnsAsync(expectedUsers);
        
        // Act
        var result = await _service.GetAllUsersAsync();
        
        // Assert
        result.Should().BeEquivalentTo(expectedUsers);
        _mockRepository.Verify(x => x.GetAllAsync(), Times.Once);
    }
    
    [Theory]
    [InlineData("", "test@test.com")]
    [InlineData("Test", "")]
    [InlineData("Test", "invalid-email")]
    public async Task CreateUser_WithInvalidData_ThrowsValidationException(
        string name, string email)
    {
        // Arrange
        var dto = new CreateUserDto { Name = name, Email = email };
        
        // Act & Assert
        await Assert.ThrowsAsync<ValidationException>(
            () => _service.CreateUserAsync(dto)
        );
    }
    
    [Fact]
    public async Task CreateUser_WithValidData_ReturnsCreatedUser()
    {
        // Arrange
        var dto = new CreateUserDto 
        { 
            Name = "John", 
            Email = "john@example.com" 
        };
        var expectedUser = new User 
        { 
            Id = 1, 
            Name = dto.Name, 
            Email = dto.Email 
        };
        
        _mockRepository.Setup(x => x.CreateAsync(It.IsAny<User>()))
            .ReturnsAsync(expectedUser);
        
        // Act
        var result = await _service.CreateUserAsync(dto);
        
        // Assert
        result.Should().BeEquivalentTo(expectedUser);
    }
}

// Integration Tests
public class UserControllerIntegrationTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;
    
    public UserControllerIntegrationTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
    }
    
    [Fact]
    public async Task GetUsers_ReturnsSuccessAndCorrectContentType()
    {
        // Arrange
        var client = _factory.CreateClient();
        
        // Act
        var response = await client.GetAsync("/api/users");
        
        // Assert
        response.EnsureSuccessStatusCode();
        response.Content.Headers.ContentType.ToString()
            .Should().StartWith("application/json");
    }
}`,
          strengths: [
            'Excellent IDE integration',
            'Strong typing throughout tests',
            'Built-in test runners',
            'Good mocking frameworks',
            'Parallel test execution',
            'Data-driven tests with Theory/TestCase'
          ],
          ecosystem: ['xUnit/NUnit', 'Moq', 'FluentAssertions', 'AutoFixture', 'SpecFlow']
        },
        targetFramework: {
          name: 'Jest + React Testing Library',
          setupCode: `# Jest is included with Create React App
# For custom setup:
npm install --save-dev jest @types/jest ts-jest
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev @testing-library/user-event

# For API testing
npm install --save-dev supertest @types/supertest
npm install --save-dev msw

# jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
};`,
          basicExample: `// UserService.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { useUsers, useCreateUser } from './useUsers';

// Mock server
const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([
      { id: 1, name: 'John', email: 'john@example.com' },
      { id: 2, name: 'Jane', email: 'jane@example.com' }
    ]));
  }),
  
  rest.post('/api/users', async (req, res, ctx) => {
    const body = await req.json();
    return res(ctx.status(201), ctx.json({
      id: 3,
      ...body
    }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UserService', () => {
  let queryClient: QueryClient;
  
  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false }
      }
    });
  });
  
  test('useUsers fetches users successfully', async () => {
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
    
    const { result } = renderHook(() => useUsers(), { wrapper });
    
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    
    expect(result.current.data).toHaveLength(2);
    expect(result.current.data[0].name).toBe('John');
  });
  
  test('useCreateUser creates user successfully', async () => {
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
    
    const { result } = renderHook(() => useCreateUser(), { wrapper });
    
    await act(async () => {
      result.current.mutate({
        name: 'New User',
        email: 'new@example.com'
      });
    });
    
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    
    expect(result.current.data).toMatchObject({
      id: 3,
      name: 'New User',
      email: 'new@example.com'
    });
  });
});

// Component Tests
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Users } from './Users';

describe('Users Component', () => {
  test('renders user list', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Users />
      </QueryClientProvider>
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText('John')).toBeInTheDocument();
      expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    });
  });
  
  test('creates new user', async () => {
    const user = userEvent.setup();
    
    render(
      <QueryClientProvider client={queryClient}>
        <Users />
      </QueryClientProvider>
    );
    
    await waitFor(() => {
      expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    });
    
    await user.type(screen.getByLabelText('Name:'), 'New User');
    await user.type(screen.getByLabelText('Email:'), 'new@example.com');
    await user.click(screen.getByText('Create'));
    
    await waitFor(() => {
      expect(screen.getByText('New User')).toBeInTheDocument();
    });
  });
  
  test.each([
    ['', 'test@test.com', 'Name is required'],
    ['Test', '', 'Email is required'],
    ['Test', 'invalid', 'Invalid email address'],
  ])('validates input: name=%s, email=%s', async (name, email, errorMsg) => {
    const user = userEvent.setup();
    
    render(
      <QueryClientProvider client={queryClient}>
        <Users />
      </QueryClientProvider>
    );
    
    if (name) await user.type(screen.getByLabelText('Name:'), name);
    if (email) await user.type(screen.getByLabelText('Email:'), email);
    await user.click(screen.getByText('Create'));
    
    expect(await screen.findByText(errorMsg)).toBeInTheDocument();
  });
});`,
          strengths: [
            'Fast test execution',
            'Component testing with Testing Library',
            'Mock Service Worker for API mocking',
            'Snapshot testing',
            'Great async testing support',
            'Watch mode for TDD'
          ],
          ecosystem: ['Jest', 'Testing Library', 'MSW', 'Cypress', 'Playwright']
        },
        migrationTips: [
          'describe/test blocks similar to test classes/methods',
          'beforeEach/afterEach replace constructor/dispose patterns',
          'MSW provides API mocking similar to WebApplicationFactory',
          'test.each replaces Theory/TestCase attributes',
          'React Testing Library focuses on user behavior over implementation'
        ],
        commonPitfalls: [
          'Async testing requires different patterns',
          'Mocking is more manual than Moq',
          'No built-in dependency injection for tests',
          'Component testing philosophy is different',
          'TypeScript configuration adds complexity'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'ASP.NET Core Web API',
          setupCode: `# Create minimal API
dotnet new webapi -n MyApi --use-minimal-apis
cd MyApi

# Or create with controllers
dotnet new webapi -n MyApi
cd MyApi

# Add Swagger
dotnet add package Swashbuckle.AspNetCore

# Run with hot reload
dotnet watch run`,
          basicExample: `// Minimal API - Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>(opt => 
    opt.UseInMemoryDatabase("TodoList"));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// User endpoints
app.MapGet("/api/users", async (AppDbContext db) =>
    await db.Users.ToListAsync());

app.MapGet("/api/users/{id}", async (int id, AppDbContext db) =>
    await db.Users.FindAsync(id) is User user
        ? Results.Ok(user)
        : Results.NotFound());

app.MapPost("/api/users", async (User user, AppDbContext db) =>
{
    db.Users.Add(user);
    await db.SaveChangesAsync();
    return Results.Created($"/api/users/{user.Id}", user);
});

app.MapPut("/api/users/{id}", async (int id, User inputUser, AppDbContext db) =>
{
    var user = await db.Users.FindAsync(id);
    if (user is null) return Results.NotFound();
    
    user.Name = inputUser.Name;
    user.Email = inputUser.Email;
    await db.SaveChangesAsync();
    
    return Results.NoContent();
});

app.MapDelete("/api/users/{id}", async (int id, AppDbContext db) =>
{
    if (await db.Users.FindAsync(id) is User user)
    {
        db.Users.Remove(user);
        await db.SaveChangesAsync();
        return Results.NoContent();
    }
    
    return Results.NotFound();
});

app.Run();

// Models
public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }
        
    public DbSet<User> Users => Set<User>();
}`,
          strengths: [
            'High performance',
            'Built-in OpenAPI/Swagger',
            'Minimal API for simplicity',
            'Great tooling and debugging',
            'Built-in dependency injection',
            'Cross-platform'
          ],
          ecosystem: ['.NET', 'Entity Framework Core', 'Swagger/OpenAPI', 'FluentValidation', 'MediatR']
        },
        targetFramework: {
          name: 'Fastify',
          setupCode: `# Initialize project
npm init -y
npm install fastify @fastify/swagger @fastify/swagger-ui
npm install @fastify/cors @fastify/helmet
npm install @prisma/client prisma

# TypeScript setup
npm install -D typescript @types/node
npx tsc --init

# Initialize Prisma
npx prisma init`,
          basicExample: `// server.ts
import Fastify from 'fastify';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import { PrismaClient } from '@prisma/client';

const fastify = Fastify({ logger: true });
const prisma = new PrismaClient();

// Register plugins
await fastify.register(cors);
await fastify.register(swagger, {
  openapi: {
    info: {
      title: 'User API',
      description: 'User management API',
      version: '1.0.0'
    }
  }
});
await fastify.register(swaggerUI, {
  routePrefix: '/documentation'
});

// Schemas
const userSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
    email: { type: 'string', format: 'email' },
    createdAt: { type: 'string', format: 'date-time' }
  }
};

const createUserSchema = {
  type: 'object',
  required: ['name', 'email'],
  properties: {
    name: { type: 'string', minLength: 1 },
    email: { type: 'string', format: 'email' }
  }
};

// Routes
fastify.get('/api/users', {
  schema: {
    response: {
      200: {
        type: 'array',
        items: userSchema
      }
    }
  }
}, async () => {
  return await prisma.user.findMany();
});

fastify.get<{ Params: { id: string } }>('/api/users/:id', {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: { type: 'string' }
      }
    },
    response: {
      200: userSchema,
      404: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    }
  }
}, async (request, reply) => {
  const id = parseInt(request.params.id);
  const user = await prisma.user.findUnique({ where: { id } });
  
  if (!user) {
    reply.code(404);
    return { message: 'User not found' };
  }
  
  return user;
});

fastify.post<{ Body: { name: string; email: string } }>('/api/users', {
  schema: {
    body: createUserSchema,
    response: {
      201: userSchema
    }
  }
}, async (request, reply) => {
  const user = await prisma.user.create({
    data: request.body
  });
  
  reply.code(201);
  return user;
});

fastify.put<{ 
  Params: { id: string },
  Body: { name: string; email: string }
}>('/api/users/:id', {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: { type: 'string' }
      }
    },
    body: createUserSchema,
    response: {
      204: { type: 'null' },
      404: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    }
  }
}, async (request, reply) => {
  const id = parseInt(request.params.id);
  
  try {
    await prisma.user.update({
      where: { id },
      data: request.body
    });
    reply.code(204);
  } catch (error) {
    reply.code(404);
    return { message: 'User not found' };
  }
});

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();`,
          strengths: [
            'Very high performance',
            'Schema-based validation',
            'Auto-generated documentation',
            'TypeScript support',
            'Plugin ecosystem',
            'JSON Schema validation'
          ],
          ecosystem: ['npm', 'Fastify plugins', 'Prisma', 'TypeBox', 'Ajv']
        },
        migrationTips: [
          'Fastify schemas provide validation like C# model attributes',
          'Plugin system similar to ASP.NET Core middleware',
          'Built-in Swagger support like ASP.NET Core',
          'Use TypeScript for type safety',
          'Prisma provides ORM functionality like Entity Framework'
        ],
        commonPitfalls: [
          'Schema definition is more verbose than C# attributes',
          'No built-in dependency injection container',
          'Different routing syntax',
          'Error handling patterns differ',
          'Less convention-based than ASP.NET Core'
        ]
      }
    ]
};