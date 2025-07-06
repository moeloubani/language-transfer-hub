import type { LanguageComparison } from '../../types/language';

export const phpJavascriptComparison: LanguageComparison = {
    sourceLanguage: 'PHP',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration and assignment',
        sourceCode: `// PHP variables always start with $
$name = "John";
$age = 25;
$isActive = true;

// Variables are dynamically typed
$value = 42;        // integer
$value = "hello";   // now string
$value = 3.14;      // now float`,
        targetCode: `// var: function-scoped, can be redeclared
var oldWay = "legacy";
var oldWay = "redeclared"; // OK

// let: block-scoped, mutable
let age = 25;
age = 26; // OK
// let age = 27; // Error: already declared

// const: block-scoped, immutable binding
const name = "John";
// name = "Jane"; // Error: can't reassign

// const with objects/arrays - contents mutable
const person = { name: "John" };
person.name = "Jane"; // OK
person.age = 30; // OK`
      },
      {
        topic: 'Arrays',
        description: 'Creating and accessing arrays',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape"; // Add to end`,
        targetCode: `const fruits = ["apple", "banana", "orange"];
const first = fruits[0];
fruits.push("grape"); // Add to end

// Modern destructuring and spread
const [firstFruit, secondFruit, ...restFruits] = fruits;
const newFruits = [...fruits, "kiwi", "mango"];
console.log(firstFruit, newFruits);`
      },
      {
        topic: 'Associative Arrays / Objects',
        description: 'Key-value pairs',
        sourceCode: `$person = [
  "name" => "John",
  "age" => 30,
  "city" => "New York"
];
echo $person["name"];`,
        targetCode: `const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Traditional access
console.log(person.name);

// Modern destructuring
const { name, age, city } = person;
console.log(name, age, city);`
      },
      {
        topic: 'Functions',
        description: 'Function declaration and calling',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}

echo greet("John");
echo greet("Jane", "Hi");`,
        targetCode: `// Traditional function
function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

// Modern arrow function
const greetArrow = (name, greeting = "Hello") => \`\${greeting}, \${name}!\`;

// Usage
console.log(greet("John"));
console.log(greetArrow("Jane", "Hi"));`
      },
      {
        topic: 'Loops',
        description: 'For and foreach/for-of loops',
        sourceCode: `// For loop
for ($i = 0; $i < 5; $i++) {
  echo $i;
}

// Foreach loop
$colors = ["red", "green", "blue"];
foreach ($colors as $color) {
  echo $color;
}`,
        targetCode: `// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For-of loop
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}`
      },
      {
        topic: 'Conditional Statements',
        description: 'If-else conditions',
        sourceCode: `$age = 18;

if ($age >= 18) {
  echo "Adult";
} elseif ($age >= 13) {
  echo "Teenager";
} else {
  echo "Child";
}`,
        targetCode: `const age = 18;

if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}`
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
}

$person = new Person("John", 30);
echo $person->greet();`,
        targetCode: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
}

const person = new Person("John", 30);
console.log(person.greet());`
      }
    ],
    commonPitfalls: [
      {
        title: 'String Concatenation',
        description: 'PHP uses . for concatenation, JavaScript uses +',
        sourceExample: `$message = "Hello " . $name . "!";`,
        targetExample: `const message = "Hello " + name + "!";

// Modern template literals (preferred)
const betterMessage = \`Hello \${name}!\`;

// With optional chaining for nested properties
const greeting = \`Hello \${user?.profile?.name ?? 'Guest'}!\`;`,
        correctApproach: 'Use template literals (\`\`) for cleaner string interpolation and optional chaining (?.) for safe property access'
      },
      {
        title: 'Variable Scope',
        description: 'JavaScript has block scope with let/const, PHP has function scope',
        sourceExample: `if (true) {
  $x = 10;
}
echo $x; // Works in PHP`,
        targetExample: `if (true) {
  let x = 10;
}
console.log(x); // Error in JavaScript`,
        correctApproach: 'Declare variables in the appropriate scope or use var for function scope (not recommended)'
      },
      {
        title: 'Array Methods',
        description: 'PHP array functions vs JavaScript array methods',
        sourceExample: `array_push($arr, $item);
count($arr);
in_array($item, $arr);`,
        targetExample: `arr.push(item);
arr.length;
arr.includes(item);`,
        correctApproach: 'JavaScript arrays have built-in methods, not standalone functions'
      }
    ],
    keyDifferences: [
      {
        topic: 'Type System',
        description: 'PHP is dynamically typed with type hints, JavaScript is dynamically typed',
        sourceApproach: 'PHP 7+ supports type declarations for parameters and return types',
        targetApproach: 'JavaScript is dynamically typed; use TypeScript for static typing'
      },
      {
        topic: 'Execution Environment',
        description: 'Where the code runs',
        sourceApproach: 'PHP runs on the server-side, requires a web server',
        targetApproach: 'JavaScript runs in browsers and Node.js (server-side)'
      },
      {
        topic: 'Asynchronous Programming',
        description: 'Handling async operations',
        sourceApproach: 'PHP is primarily synchronous, though supports async with libraries',
        targetApproach: 'JavaScript is async-first with callbacks, promises, and async/await'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'Laravel',
          setupCode: `# Install Laravel via Composer
composer create-project laravel/laravel myapp
cd myapp

# Start development server
php artisan serve`,
          basicExample: `// routes/web.php
Route::get('/users', [UserController::class, 'index']);

// app/Http/Controllers/UserController.php
class UserController extends Controller {
    public function index() {
        $users = User::all();
        return view('users.index', ['users' => $users]);
    }
}

// resources/views/users/index.blade.php
@foreach ($users as $user)
    <p>{{ $user->name }}</p>
@endforeach`,
          strengths: [
            'Full-featured MVC framework',
            'Eloquent ORM for database',
            'Built-in authentication',
            'Artisan CLI tool',
            'Blade templating engine'
          ],
          ecosystem: ['Composer', 'Artisan', 'Eloquent', 'Blade', 'PHPUnit']
        },
        targetFramework: {
          name: 'Express.js',
          setupCode: `# Initialize Node.js project
npm init -y

# Install Express
npm install express

# For development
npm install -D nodemon`,
          basicExample: `// server.js
const express = require('express');
const app = express();

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// With ES6 modules
import express from 'express';
const app = express();`,
          strengths: [
            'Minimal and flexible',
            'Large middleware ecosystem',
            'Easy to get started',
            'Great for APIs',
            'JavaScript everywhere'
          ],
          ecosystem: ['npm', 'Middleware', 'Passport', 'Mongoose', 'Jest']
        },
        migrationTips: [
          'Express is more minimal - you\'ll need to add middleware for features Laravel includes by default',
          'Use middleware like body-parser, cors, helmet for common functionality',
          'Consider using an ORM like Sequelize or Prisma for database operations',
          'Use template engines like EJS or Pug, or build a separate frontend with React/Vue'
        ],
        commonPitfalls: [
          'Express doesn\'t include an ORM - you need to choose and configure one',
          'No built-in authentication - use Passport.js or similar',
          'File structure is not enforced - establish conventions early',
          'Async error handling requires middleware or try/catch blocks'
        ]
      },
      {
        category: 'fullstack',
        sourceFramework: {
          name: 'Laravel + Vue',
          setupCode: `# Install Laravel with Vue scaffolding
composer create-project laravel/laravel myapp
cd myapp
composer require laravel/ui
php artisan ui vue --auth
npm install && npm run dev`,
          basicExample: `// resources/js/components/UserList.vue
<template>
    <div>
        <h2>Users</h2>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return { users: [] };
    },
    mounted() {
        axios.get('/api/users')
            .then(response => {
                this.users = response.data;
            });
    }
}
</script>`,
          strengths: [
            'Integrated full-stack solution',
            'Shared validation rules',
            'Built-in API routes',
            'Laravel Mix for asset compilation',
            'Server-side rendering option with Inertia.js'
          ],
          ecosystem: ['Composer', 'npm', 'Laravel Mix', 'Axios', 'Vue Router']
        },
        targetFramework: {
          name: 'Next.js',
          setupCode: `# Create Next.js app
npx create-next-app@latest myapp
cd myapp

# Choose TypeScript, ESLint, Tailwind CSS options

# Start development server
npm run dev`,
          basicExample: `// app/users/page.tsx
export default async function UsersPage() {
    const users = await getUsers();
    
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

// API Route: app/api/users/route.ts
export async function GET() {
    const users = await db.user.findMany();
    return Response.json(users);
}`,
          strengths: [
            'Full-stack React framework',
            'Server-side rendering built-in',
            'API routes in the same project',
            'Automatic code splitting',
            'TypeScript support out of the box'
          ],
          ecosystem: ['npm', 'React', 'TypeScript', 'Tailwind', 'Prisma']
        },
        migrationTips: [
          'Next.js uses file-based routing vs Laravel\'s explicit routes',
          'API routes in Next.js are simpler but less featured than Laravel controllers',
          'Consider Prisma as an ORM alternative to Eloquent',
          'Authentication needs third-party solutions like NextAuth.js',
          'CSS-in-JS or Tailwind CSS instead of Laravel Mix'
        ],
        commonPitfalls: [
          'No built-in ORM or database layer in Next.js',
          'Authentication is not included - use NextAuth.js',
          'Different mental model for routing (file-based vs configuration)',
          'State management between client and server components can be tricky'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'PHPUnit',
          setupCode: `# Install PHPUnit (usually included with Laravel)
composer require --dev phpunit/phpunit

# Run tests
./vendor/bin/phpunit

# Or with Laravel
php artisan test`,
          basicExample: `<?php
use PHPUnit\\Framework\\TestCase;

class UserTest extends TestCase {
    public function testUserCreation() {
        $user = new User([
            'name' => 'John Doe',
            'email' => 'john@example.com'
        ]);
        
        $this->assertEquals('John Doe', $user->name);
        $this->assertEquals('john@example.com', $user->email);
    }
    
    public function testApiEndpoint() {
        $response = $this->get('/api/users');
        $response->assertStatus(200);
        $response->assertJsonStructure(['data' => []]);
    }
}`,
          strengths: [
            'Industry standard for PHP',
            'Extensive assertion library',
            'Mock and stub support',
            'Code coverage reports',
            'Database testing helpers'
          ],
          ecosystem: ['Composer', 'Mockery', 'Faker', 'Laravel Dusk', 'Pest PHP']
        },
        targetFramework: {
          name: 'Jest',
          setupCode: `# Install Jest
npm install --save-dev jest @types/jest

# For React testing
npm install --save-dev @testing-library/react

# Add to package.json
"scripts": {
  "test": "jest"
}`,
          basicExample: `// user.test.js
const User = require('./User');

describe('User', () => {
    test('creates user with name and email', () => {
        const user = new User({
            name: 'John Doe',
            email: 'john@example.com'
        });
        
        expect(user.name).toBe('John Doe');
        expect(user.email).toBe('john@example.com');
    });
});

// API testing with supertest
const request = require('supertest');
const app = require('./app');

describe('GET /api/users', () => {
    test('responds with json', async () => {
        const response = await request(app)
            .get('/api/users')
            .expect('Content-Type', /json/)
            .expect(200);
            
        expect(response.body).toHaveProperty('data');
    });
});`,
          strengths: [
            'Fast test execution',
            'Snapshot testing',
            'Built-in mocking',
            'Watch mode for development',
            'Great IDE integration'
          ],
          ecosystem: ['npm', 'React Testing Library', 'Supertest', 'MSW', 'Cypress']
        },
        migrationTips: [
          'Jest syntax is similar to PHPUnit but uses different assertion names',
          'Use describe() blocks instead of class-based organization',
          'Mocking is more flexible but requires different patterns',
          'Consider supertest for API endpoint testing',
          'Jest runs tests in parallel by default for speed'
        ],
        commonPitfalls: [
          'Async tests need different handling (async/await or done callback)',
          'Mocking modules works differently than PHP class mocking',
          'Database testing requires more setup (no built-in transactions)',
          'Configuration can be complex for different environments'
        ]
      }
    ]
};