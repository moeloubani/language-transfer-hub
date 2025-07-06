import type { LanguageComparison } from '../../types/language';

export const pythonJavascriptComparison: LanguageComparison = {
    sourceLanguage: 'Python',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration',
        sourceCode: `# Python variables - no declaration keyword
name = "John"
age = 25
is_active = True

# Dynamic typing
value = 42          # integer
value = "hello"     # now string
value = [1, 2, 3]   # now list

# Convention: UPPER_CASE for constants
PI = 3.14159
MAX_SIZE = 100`,
        targetCode: `// var: function-scoped, hoisted
var count = 0;
var count = 1; // OK to redeclare

// let: block-scoped, not hoisted
let age = 25;
age = 26; // OK to reassign
// let age = 30; // Error: already declared

// const: block-scoped, immutable binding
const name = "John";
// name = "Jane"; // Error: can't reassign

// const with mutable contents
const config = { debug: true };
config.debug = false; // OK - object is mutable
config.mode = "production"; // OK - can add properties

// Use const by default, let when needed
const PI = 3.14159; // True constant
let counter = 0; // Will be incremented`
      },
      {
        topic: 'Lists / Arrays',
        description: 'Creating and manipulating lists',
        sourceCode: `fruits = ["apple", "banana", "orange"]
first = fruits[0]
fruits.append("grape")
length = len(fruits)`,
        targetCode: `const fruits = ["apple", "banana", "orange"];
const first = fruits[0];
fruits.push("grape");
const length = fruits.length;

// Modern destructuring and spread
const [firstFruit, secondFruit, ...others] = fruits;
const moreFruits = [...fruits, "kiwi", "mango"];
console.log({ firstFruit, moreFruits });`
      },
      {
        topic: 'Dictionaries / Objects',
        description: 'Key-value data structures',
        sourceCode: `person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
print(person["name"])
print(person.get("age", 0))`,
        targetCode: `const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Traditional access
console.log(person.name);
console.log(person.age || 0);

// Modern destructuring with default values
const { name, age = 0, email = "unknown" } = person;
console.log({ name, age, email });

// Object spread and merging
const updatedPerson = { ...person, age: 31, country: "USA" };
console.log(updatedPerson);`
      },
      {
        topic: 'Functions',
        description: 'Function definition',
        sourceCode: `# Regular function
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Lambda function
square = lambda x: x ** 2

# Functions as first-class objects
def apply_twice(func, arg):
    return func(func(arg))

# Keyword arguments
def create_user(name, age, **kwargs):
    user = {"name": name, "age": age}
    user.update(kwargs)
    return user

# Usage
print(greet("John"))
print(square(5))
print(apply_twice(square, 2))  # 16
print(create_user("Alice", 25, city="NYC", role="admin"))`,
        targetCode: `// Traditional function declaration
function greet(name, greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
}

// Arrow function expression
const greetArrow = (name, greeting = "Hello") => \`\${greeting}, \${name}!\`;

// Single-expression arrow function (implicit return)
const square = x => x ** 2;

// Function expression
const multiply = function(a, b) {
    return a * b;
};

// Higher-order function
const applyTwice = (func, arg) => func(func(arg));

// Rest parameters (like Python's **kwargs)
function createUser(name, age, ...extras) {
    const user = { name, age };
    if (extras.length > 0) {
        const [city, role] = extras;
        if (city) user.city = city;
        if (role) user.role = role;
    }
    return user;
}

// Destructuring parameters
const createUserDestructured = ({ name, age, city = "Unknown", role = "user" }) => ({
    name,
    age,
    city,
    role
});

// Usage
console.log(greet("John"));
console.log(square(5));
console.log(applyTwice(square, 2)); // 16
console.log(createUser("Alice", 25, "NYC", "admin"));
console.log(createUserDestructured({ name: "Bob", age: 30, role: "admin" }));`
      },
      {
        topic: 'List Comprehension / Array Methods',
        description: 'Transforming lists/arrays',
        sourceCode: `numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
evens = [x for x in numbers if x % 2 == 0]`,
        targetCode: `const numbers = [1, 2, 3, 4, 5];

// Array methods (modern functional approach)
const squared = numbers.map(x => x**2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, x) => acc + x, 0);

// Chaining methods
const evenSquares = numbers
  .filter(x => x % 2 === 0)
  .map(x => x**2);

console.log({ squared, evens, sum, evenSquares });`
      },
      {
        topic: 'Classes',
        description: 'Object-oriented programming',
        sourceCode: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hi, I'm {self.name}"

person = Person("John", 30)
print(person.greet())`,
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
      },
      {
        topic: 'Async Programming',
        description: 'Asynchronous operations and promises',
        sourceCode: `import asyncio
import aiohttp

# Async function definition
async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

# Multiple concurrent requests
async def fetch_multiple(urls):
    tasks = [fetch_data(url) for url in urls]
    results = await asyncio.gather(*tasks)
    return results

# Running async code
async def main():
    data = await fetch_data("https://api.example.com")
    print(data)
    
    # Concurrent requests
    urls = ["https://api1.com", "https://api2.com"]
    results = await fetch_multiple(urls)
    print(results)

# Python 3.7+
asyncio.run(main())`,
        targetCode: `// Async function with async/await
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

// Multiple concurrent requests with Promise.all
async function fetchMultiple(urls) {
    try {
        const promises = urls.map(url => fetchData(url));
        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error("Error in parallel fetch:", error);
        throw error;
    }
}

// Using async functions
async function main() {
    try {
        // Single request
        const data = await fetchData("https://api.example.com");
        console.log(data);
        
        // Concurrent requests
        const urls = ["https://api1.com", "https://api2.com"];
        const results = await fetchMultiple(urls);
        console.log(results);
    } catch (error) {
        console.error("Main error:", error);
    }
}

// Run the async function
main();

// Alternative: using .then() and .catch()
fetchData("https://api.example.com")
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Creating and handling promises
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Async generator function
async function* asyncGenerator() {
    for (let i = 0; i < 3; i++) {
        await delay(1000);
        yield i;
    }
}

// Using async generator
(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
})();`
      }
    ],
    commonPitfalls: [
      {
        title: 'Indentation vs Braces',
        description: 'Python uses indentation, JavaScript uses braces',
        sourceExample: `if condition:
    do_something()
    do_another_thing()`,
        targetExample: `if (condition) {
    doSomething();
    doAnotherThing();
}`,
        correctApproach: 'Always use braces in JavaScript, even for single statements'
      },
      {
        title: 'Truthy/Falsy Values',
        description: 'Different falsy values between languages',
        sourceExample: `# Python falsy: False, None, 0, "", [], {}
if not []:
    print("Empty list is falsy")`,
        targetExample: `// JS falsy: false, null, undefined, 0, "", NaN
if (![]) {
    // This won't execute! [] is truthy in JS
}`,
        correctApproach: 'Check array length explicitly: if (arr.length === 0)'
      },
      {
        title: 'String Methods',
        description: 'Different naming conventions',
        sourceExample: `text = "Hello World"
text.lower()
text.upper()
text.split()`,
        targetExample: `let text = "Hello World";
text.toLowerCase();
text.toUpperCase();
text.split(" ");`,
        correctApproach: 'JavaScript uses camelCase for methods, Python uses snake_case'
      }
    ],
    keyDifferences: [
      {
        topic: 'Import System',
        description: 'Module importing syntax',
        sourceApproach: 'Python uses import and from...import statements',
        targetApproach: 'JavaScript uses import/export with ES6 modules or require() with CommonJS'
      },
      {
        topic: 'Type System',
        description: 'Static vs dynamic typing',
        sourceApproach: 'Python is dynamically typed with optional type hints (Python 3.5+)',
        targetApproach: 'JavaScript is dynamically typed; TypeScript adds static typing'
      },
      {
        topic: 'Standard Library',
        description: 'Built-in functionality',
        sourceApproach: 'Python has a comprehensive standard library ("batteries included")',
        targetApproach: 'JavaScript has a smaller standard library, relies more on npm packages'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'Django',
          setupCode: `# Create virtual environment
python -m venv myenv
source myenv/bin/activate  # On Windows: myenv\\Scripts\\activate

# Install Django
pip install django

# Create project
django-admin startproject myproject
cd myproject

# Run development server
python manage.py runserver`,
          basicExample: `# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.user_list, name='user_list'),
]

# views.py
from django.shortcuts import render
from .models import User

def user_list(request):
    users = User.objects.all()
    return render(request, 'users/list.html', {'users': users})

# models.py
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)`,
          strengths: [
            'Batteries included framework',
            'Excellent ORM with migrations',
            'Built-in admin interface',
            'Strong security features',
            'Great for content-heavy sites'
          ],
          ecosystem: ['pip', 'Django ORM', 'Django Admin', 'Django REST Framework', 'Celery']
        },
        targetFramework: {
          name: 'Express.js',
          setupCode: `# Initialize project
npm init -y

# Install Express and common middleware
npm install express cors helmet morgan
npm install -D nodemon @types/express

# Create server file
touch server.js

# Add to package.json scripts
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}`,
          basicExample: `// server.js
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes
app.get('/users', async (req, res) => {
    try {
        const users = await db.user.findMany();
        res.json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Models (using Prisma)
// schema.prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});`,
          strengths: [
            'Minimal and flexible',
            'Huge ecosystem of middleware',
            'Great performance',
            'Easy to learn and customize',
            'Perfect for microservices and APIs'
          ],
          ecosystem: ['npm', 'Passport.js', 'Prisma/Sequelize', 'Socket.io', 'PM2']
        },
        migrationTips: [
          'Express requires manual setup of features Django includes by default',
          'Choose an ORM like Prisma or Sequelize to replace Django ORM',
          'Use passport.js for authentication instead of Django\'s built-in auth',
          'Consider express-validator for form validation',
          'Use EJS or Pug for server-side templates, or go full API with React/Vue'
        ],
        commonPitfalls: [
          'No built-in admin interface - consider AdminJS or build custom',
          'Manual security setup required (CORS, CSRF, etc.)',
          'Database migrations need separate tools',
          'More boilerplate code for common tasks',
          'File upload handling needs multer or similar'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'Flask',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install Flask
pip install flask flask-cors

# Create app
touch app.py`,
          basicExample: `# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory data store
users = []

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/api/users', methods=['POST'])
def create_user():
    user = request.get_json()
    users.append(user)
    return jsonify(user), 201

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    if user_id < len(users):
        return jsonify(users[user_id])
    return jsonify({'error': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)`,
          strengths: [
            'Lightweight and simple',
            'Perfect for small APIs',
            'Easy to learn',
            'Flexible routing',
            'Great for prototyping'
          ],
          ecosystem: ['pip', 'SQLAlchemy', 'Flask-RESTful', 'Flask-Login', 'Marshmallow']
        },
        targetFramework: {
          name: 'Fastify',
          setupCode: `# Initialize project
npm init -y

# Install Fastify
npm install fastify @fastify/cors @fastify/helmet

# Install dev dependencies
npm install -D nodemon`,
          basicExample: `// server.js
const fastify = require('fastify')({ logger: true });

// Register plugins
fastify.register(require('@fastify/cors'));
fastify.register(require('@fastify/helmet'));

// In-memory data store
let users = [];

// Routes
fastify.get('/api/users', async (request, reply) => {
    return users;
});

fastify.post('/api/users', async (request, reply) => {
    const user = request.body;
    users.push(user);
    reply.code(201).send(user);
});

fastify.get('/api/users/:id', async (request, reply) => {
    const { id } = request.params;
    const user = users[id];
    if (!user) {
        reply.code(404).send({ error: 'User not found' });
    }
    return user;
});

// Schema validation
const userSchema = {
    type: 'object',
    required: ['name', 'email'],
    properties: {
        name: { type: 'string' },
        email: { type: 'string', format: 'email' }
    }
};

fastify.post('/api/users/validated', {
    schema: { body: userSchema }
}, async (request, reply) => {
    // Automatically validated
    return request.body;
});

// Start server
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();`,
          strengths: [
            'Very high performance',
            'Built-in schema validation',
            'TypeScript support',
            'Plugin architecture',
            'Automatic serialization'
          ],
          ecosystem: ['npm', 'Fastify plugins', 'Prisma', 'TypeBox', 'Mercurius (GraphQL)']
        },
        migrationTips: [
          'Fastify has similar minimalist philosophy to Flask',
          'Built-in schema validation replaces Flask-Marshmallow',
          'Plugin system is similar to Flask extensions',
          'Async/await by default vs Flask\'s synchronous nature',
          'JSON serialization is automatic like Flask\'s jsonify'
        ],
        commonPitfalls: [
          'Different plugin registration model than Flask blueprints',
          'Schema validation syntax takes time to learn',
          'Async error handling needs careful attention',
          'Less mature ecosystem than Express'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'pytest',
          setupCode: `# Install pytest
pip install pytest pytest-cov pytest-mock

# Create test file
touch test_users.py

# Run tests
pytest
pytest --cov=myapp  # With coverage`,
          basicExample: `# test_users.py
import pytest
from app import app, db
from models import User

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
            yield client
            db.drop_all()

def test_create_user(client):
    response = client.post('/api/users', 
        json={'name': 'John', 'email': 'john@example.com'})
    assert response.status_code == 201
    assert response.json['name'] == 'John'

def test_get_users(client):
    # Create test data
    user = User(name='Jane', email='jane@example.com')
    db.session.add(user)
    db.session.commit()
    
    response = client.get('/api/users')
    assert response.status_code == 200
    assert len(response.json) == 1

@pytest.mark.parametrize("name,email,expected", [
    ("", "test@test.com", 400),
    ("Test", "invalid-email", 400),
    ("Test", "test@test.com", 201),
])
def test_user_validation(client, name, email, expected):
    response = client.post('/api/users',
        json={'name': name, 'email': email})
    assert response.status_code == expected

# Async test example
@pytest.mark.asyncio
async def test_async_operation():
    result = await fetch_user_data()
    assert result is not None`,
          strengths: [
            'Simple and pythonic syntax',
            'Powerful fixtures system',
            'Excellent plugin ecosystem',
            'Parametrized testing',
            'Great error reporting'
          ],
          ecosystem: ['pip', 'pytest-django', 'pytest-asyncio', 'pytest-mock', 'tox']
        },
        targetFramework: {
          name: 'Jest + Supertest',
          setupCode: `# Install testing dependencies
npm install --save-dev jest supertest @types/jest

# For API testing with Express/Fastify
npm install --save-dev @types/supertest

# Configure Jest in package.json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}`,
          basicExample: `// users.test.js
const request = require('supertest');
const app = require('./app');

describe('User API', () => {
    let server;
    
    beforeAll(() => {
        server = app.listen(0); // Random port
    });
    
    afterAll((done) => {
        server.close(done);
    });
    
    beforeEach(() => {
        // Reset database or mocks
    });
    
    test('POST /api/users creates a new user', async () => {
        const userData = {
            name: 'John',
            email: 'john@example.com'
        };
        
        const response = await request(server)
            .post('/api/users')
            .send(userData)
            .expect('Content-Type', /json/)
            .expect(201);
            
        expect(response.body.name).toBe('John');
        expect(response.body).toHaveProperty('id');
    });
    
    test('GET /api/users returns all users', async () => {
        const response = await request(server)
            .get('/api/users')
            .expect(200);
            
        expect(Array.isArray(response.body)).toBe(true);
    });
    
    // Parametrized tests using test.each
    test.each([
        ['', 'test@test.com', 400],
        ['Test', 'invalid-email', 400],
        ['Test', 'test@test.com', 201],
    ])('validates user with name=%s, email=%s', async (name, email, expected) => {
        const response = await request(server)
            .post('/api/users')
            .send({ name, email });
            
        expect(response.status).toBe(expected);
    });
    
    // Mocking example
    test('handles database errors', async () => {
        const mockDb = require('./db');
        mockDb.user.create = jest.fn().mockRejectedValue(new Error('DB Error'));
        
        const response = await request(server)
            .post('/api/users')
            .send({ name: 'Test', email: 'test@test.com' })
            .expect(500);
            
        expect(response.body.error).toBe('Internal server error');
    });
});`,
          strengths: [
            'Fast parallel test execution',
            'Great mocking capabilities',
            'Snapshot testing',
            'Watch mode for TDD',
            'Extensive matcher library'
          ],
          ecosystem: ['npm', 'Supertest', 'MSW', 'Testing Library', 'Cypress']
        },
        migrationTips: [
          'Jest\'s describe/test blocks are similar to pytest\'s class/function structure',
          'Use beforeEach/afterEach instead of pytest fixtures',
          'Supertest provides similar functionality to Flask/Django test clients',
          'test.each() replaces @pytest.mark.parametrize',
          'Jest mocks are more flexible but have different syntax'
        ],
        commonPitfalls: [
          'Async tests require different patterns (async/await or done callback)',
          'Database cleanup between tests needs manual handling',
          'Mock clearing/resetting is important between tests',
          'Configuration can be complex for different environments'
        ]
      },
      {
        category: 'fullstack',
        sourceFramework: {
          name: 'Django + React',
          setupCode: `# Backend setup
django-admin startproject backend
cd backend
pip install djangorestframework django-cors-headers

# Frontend setup (separate directory)
npx create-react-app frontend
cd frontend
npm install axios`,
          basicExample: `# Django REST API - serializers.py
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'created_at']

# views.py
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# React Frontend - UserList.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchUsers();
    }, []);
    
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users/');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };
    
    if (loading) return <div>Loading...</div>;
    
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}`,
          strengths: [
            'Clear separation of concerns',
            'Django REST Framework is powerful',
            'Can use different deployment strategies',
            'Best of both ecosystems',
            'Great for teams with different expertise'
          ],
          ecosystem: ['pip', 'npm', 'Django REST Framework', 'React Router', 'Redux/Context API']
        },
        targetFramework: {
          name: 'Next.js',
          setupCode: `# Create Next.js app with TypeScript
npx create-next-app@latest myapp --typescript
cd myapp

# Install additional dependencies
npm install @prisma/client prisma
npm install axios swr  # or use built-in fetch

# Initialize Prisma
npx prisma init`,
          basicExample: `// Prisma schema - prisma/schema.prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}

// API Route - app/api/users/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  const user = await prisma.user.create({ data });
  return NextResponse.json(user, { status: 201 });
}

// Frontend - app/users/page.tsx
'use client';

import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}`,
          strengths: [
            'Single codebase for frontend and backend',
            'Built-in API routes',
            'Server-side rendering',
            'Excellent TypeScript support',
            'Automatic optimization and code splitting'
          ],
          ecosystem: ['npm', 'Prisma', 'NextAuth.js', 'tRPC', 'React Query/SWR']
        },
        migrationTips: [
          'Next.js combines backend and frontend in one project',
          'API routes are simpler but less featured than Django views',
          'Use Prisma as an alternative to Django ORM',
          'Server components can replace some Django template functionality',
          'Consider NextAuth.js for authentication instead of Django auth'
        ],
        commonPitfalls: [
          'No built-in admin interface like Django',
          'Different deployment model (Vercel vs traditional hosting)',
          'Learning curve for server components vs client components',
          'Database migrations work differently with Prisma',
          'CORS is handled differently in the same-origin setup'
        ]
      }
    ]
};