import type { LanguageComparison } from '../../types/language';

export const javascriptPythonComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Python',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Basic syntax differences',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;
let items = [];

// Semicolons required
console.log("Hello World");`,
        targetCode: `name = "John"
age = 25
is_active = True  # Note: True/False capitalized
items = []

# No semicolons needed
print("Hello World")`
      },
      {
        topic: 'Functions',
        description: 'Function definition syntax',
        sourceCode: `function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

const add = (a, b) => a + b;

// Calling functions
console.log(greet("John"));
console.log(add(5, 3));`,
        targetCode: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Python doesn't have arrow functions
def add(a, b):
    return a + b

# Calling functions
print(greet("John"))
print(add(5, 3))`
      },
      {
        topic: 'Arrays vs Lists',
        description: 'Working with collections',
        sourceCode: `let fruits = ["apple", "banana", "orange"];
let first = fruits[0];
fruits.push("grape");
let length = fruits.length;

// Array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(x => x * 2);
let evens = numbers.filter(x => x % 2 === 0);`,
        targetCode: `fruits = ["apple", "banana", "orange"]
first = fruits[0]
fruits.append("grape")
length = len(fruits)

# List comprehensions (more Pythonic)
numbers = [1, 2, 3, 4, 5]
doubled = [x * 2 for x in numbers]
evens = [x for x in numbers if x % 2 == 0]`
      },
      {
        topic: 'Objects vs Dictionaries',
        description: 'Key-value data structures',
        sourceCode: `let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name);
console.log(person["age"]);
person.email = "john@example.com";

// Object destructuring
const {name, age} = person;`,
        targetCode: `person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

print(person["name"])
print(person["age"])
person["email"] = "john@example.com"

# Dictionary unpacking
name = person["name"]
age = person["age"]`
      },
      {
        topic: 'Classes',
        description: 'Object-oriented programming',
        sourceCode: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
  
  get info() {
    return \`\${this.name} is \${this.age} years old\`;
  }
}

let person = new Person("John", 30);`,
        targetCode: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hi, I'm {self.name}"
    
    @property
    def info(self):
        return f"{self.name} is {self.age} years old"

person = Person("John", 30)`
      },
      {
        topic: 'Async Programming',
        description: 'Handling asynchronous operations',
        sourceCode: `// Modern async/await with Promise.all
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

// Fetch multiple endpoints concurrently
async function fetchMultiple(urls) {
  try {
    const results = await Promise.all(
      urls.map(url => fetchData(url))
    );
    return results;
  } catch (error) {
    console.error("Multiple fetch error:", error);
    throw error;
  }
}

// Usage with proper error handling
async function main() {
  try {
    const data = await fetchData("https://api.example.com/data");
    console.log(data);
    
    const multiple = await fetchMultiple([
      "https://api.example.com/users",
      "https://api.example.com/posts"
    ]);
    console.log(multiple);
  } catch (error) {
    console.error("Application error:", error);
  }
}`,
        targetCode: `import asyncio
import aiohttp

async def fetch_data(url):
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response:
                data = await response.json()
                return data
    except Exception as error:
        print(f"Error: {error}")

# Using the function
async def main():
    data = await fetch_data("https://api.example.com/data")
    print(data)

asyncio.run(main())`
      }
    ],
    commonPitfalls: [
      {
        title: 'Indentation vs Braces',
        description: 'Python uses indentation for code blocks',
        sourceExample: `if (condition) {
  doSomething();
  doAnotherThing();
}`,
        targetExample: `if condition:
    do_something()
    do_another_thing()`,
        correctApproach: 'Use consistent indentation (4 spaces) instead of braces'
      },
      {
        title: 'Variable Naming',
        description: 'Different naming conventions',
        sourceExample: `let firstName = "John";
let isUserActive = true;
function getUserData() { }`,
        targetExample: `first_name = "John"
is_user_active = True
def get_user_data():
    pass`,
        correctApproach: 'Use snake_case for variables and functions in Python'
      },
      {
        title: 'Truthiness',
        description: 'Different falsy values',
        sourceExample: `if ([]) {
  // This executes - empty array is truthy
}
if ({}) {
  // This executes - empty object is truthy
}`,
        targetExample: `if []:
    # This does NOT execute - empty list is falsy
    pass
if {}:
    # This does NOT execute - empty dict is falsy
    pass`,
        correctApproach: 'Check length explicitly: if len(items) > 0:'
      },
      {
        title: 'String Formatting',
        description: 'Different approaches to string interpolation',
        sourceExample: `let name = "John";
let age = 30;
let message = \`Hello \${name}, you are \${age} years old\`;`,
        targetExample: `name = "John"
age = 30
message = f"Hello {name}, you are {age} years old"`,
        correctApproach: 'Use f-strings (Python 3.6+) for string formatting'
      }
    ],
    keyDifferences: [
      {
        topic: 'Execution Environment',
        description: 'Where code runs',
        sourceApproach: 'JavaScript runs in browsers and Node.js',
        targetApproach: 'Python runs on servers, desktops, and embedded systems'
      },
      {
        topic: 'Syntax Philosophy',
        description: 'Code structure approach',
        sourceApproach: 'JavaScript uses braces and semicolons (C-style syntax)',
        targetApproach: 'Python emphasizes readability with indentation and minimal punctuation'
      },
      {
        topic: 'Standard Library',
        description: 'Built-in functionality',
        sourceApproach: 'JavaScript has minimal standard library, relies on npm packages',
        targetApproach: 'Python has extensive standard library ("batteries included")'
      },
      {
        topic: 'Asynchronous Programming',
        description: 'Concurrency models',
        sourceApproach: 'JavaScript is async-first with event loop',
        targetApproach: 'Python added async support later, still primarily synchronous'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'Express.js',
          setupCode: `# Initialize Node.js project
npm init -y

# Install Express
npm install express body-parser cors
npm install -D nodemon

# Create server.js
touch server.js

# Add to package.json scripts:
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}`,
          basicExample: `// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage
let users = [];

// Routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
    createdAt: new Date()
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});`,
          strengths: [
            'Minimal and flexible',
            'Large middleware ecosystem',
            'Easy to learn',
            'Great for REST APIs',
            'Excellent performance'
          ],
          ecosystem: ['npm', 'Passport.js', 'Mongoose', 'Socket.io', 'Morgan']
        },
        targetFramework: {
          name: 'Flask',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install Flask
pip install flask flask-cors

# Create app.py
touch app.py

# Run the application
python app.py
# Or with Flask CLI
export FLASK_APP=app.py
flask run`,
          basicExample: `# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

# In-memory storage
users = []

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = {
        'id': len(users) + 1,
        'name': data['name'],
        'email': data['email'],
        'createdAt': datetime.now().isoformat()
    }
    users.append(new_user)
    return jsonify(new_user), 201

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    return jsonify(user)

if __name__ == '__main__':
    app.run(debug=True, port=3000)`,
          strengths: [
            'Minimal and flexible',
            'Easy to learn',
            'Pythonic design',
            'Great for small to medium apps',
            'Extensive documentation'
          ],
          ecosystem: ['pip', 'Flask-SQLAlchemy', 'Flask-Login', 'Flask-WTF', 'Flask-RESTful']
        },
        migrationTips: [
          'Flask decorators replace Express middleware',
          'Flask uses route decorators instead of app.get/post',
          'Request/response objects have similar but different APIs',
          'Flask has built-in template engine (Jinja2)',
          'Both support similar REST patterns'
        ],
        commonPitfalls: [
          'Different middleware/decorator patterns',
          'Flask requires explicit JSON parsing/serialization',
          'Different error handling approaches',
          'No built-in body parsing in Flask',
          'Different async support models'
        ]
      },
      {
        category: 'fullstack',
        sourceFramework: {
          name: 'Next.js',
          setupCode: `# Create Next.js app
npx create-next-app@latest myapp --typescript --tailwind --app

cd myapp

# Install additional dependencies
npm install axios prisma @prisma/client

# Run development server
npm run dev`,
          basicExample: `// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
    </main>
  );
}

// app/api/users/route.ts
import { NextResponse } from 'next/server';

let users = [];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newUser = {
    id: users.length + 1,
    ...data,
    createdAt: new Date()
  };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

// app/users/page.tsx
'use client';

import { useState, useEffect } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}`,
          strengths: [
            'Full-stack React framework',
            'Server-side rendering',
            'API routes built-in',
            'Excellent performance',
            'Great developer experience'
          ],
          ecosystem: ['npm', 'React', 'Tailwind CSS', 'Prisma', 'NextAuth.js']
        },
        targetFramework: {
          name: 'Django',
          setupCode: `# Create Django project
python -m venv venv
source venv/bin/activate

pip install django djangorestframework django-cors-headers

django-admin startproject myapp
cd myapp
python manage.py startapp core

# Add to settings.py:
# 'rest_framework',
# 'corsheaders',
# 'core',

python manage.py migrate
python manage.py runserver`,
          basicExample: `# core/models.py
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

# core/serializers.py
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# core/views.py
from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

def home(request):
    return render(request, 'home.html')

def users_page(request):
    users = User.objects.all()
    return render(request, 'users.html', {'users': users})

# core/templates/home.html
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to Django</title>
</head>
<body>
    <h1>Welcome to Django</h1>
    <a href="/users/">View Users</a>
</body>
</html>

# core/templates/users.html
<!DOCTYPE html>
<html>
<head>
    <title>Users</title>
</head>
<body>
    <h1>Users</h1>
    <ul>
    {% for user in users %}
        <li>{{ user.name }} - {{ user.email }}</li>
    {% endfor %}
    </ul>
</body>
</html>`,
          strengths: [
            'Batteries included framework',
            'Powerful ORM',
            'Built-in admin panel',
            'Excellent security',
            'Template engine included'
          ],
          ecosystem: ['pip', 'Django REST Framework', 'Celery', 'Django Channels', 'Wagtail']
        },
        migrationTips: [
          'Django is MVC while Next.js is component-based',
          'Django templates replace React components for SSR',
          'Django ORM replaces Prisma/SQL queries',
          'URL routing is more centralized in Django',
          'Django admin provides built-in CMS features'
        ],
        commonPitfalls: [
          'Very different architecture patterns',
          'Django is synchronous by default',
          'Template syntax vs JSX',
          'Different state management approaches',
          'Server-side vs client-side routing'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'Fastify',
          setupCode: `# Initialize project
npm init -y

# Install Fastify
npm install fastify @fastify/cors @fastify/swagger @fastify/swagger-ui

# Create server.js
touch server.js

# Run server
node server.js`,
          basicExample: `// server.js
const fastify = require('fastify')({ logger: true });

// Register plugins
fastify.register(require('@fastify/cors'));
fastify.register(require('@fastify/swagger'), {
  swagger: {
    info: {
      title: 'Users API',
      description: 'API for managing users',
      version: '1.0.0'
    }
  }
});
fastify.register(require('@fastify/swagger-ui'), {
  routePrefix: '/docs'
});

// In-memory storage
let users = [];

// Schema definitions
const userSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
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
}, async (request, reply) => {
  return users;
});

fastify.post('/api/users', {
  schema: {
    body: {
      type: 'object',
      required: ['name', 'email'],
      properties: {
        name: { type: 'string' },
        email: { type: 'string', format: 'email' }
      }
    },
    response: {
      201: userSchema
    }
  }
}, async (request, reply) => {
  const newUser = {
    id: users.length + 1,
    ...request.body
  };
  users.push(newUser);
  reply.code(201).send(newUser);
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
            'High performance',
            'Schema validation',
            'Auto-generated docs',
            'Plugin architecture',
            'TypeScript support'
          ],
          ecosystem: ['npm', 'Fastify plugins', 'Ajv', 'Pino logger', 'Mercurius (GraphQL)']
        },
        targetFramework: {
          name: 'FastAPI',
          setupCode: `# Install FastAPI
pip install fastapi uvicorn[standard]

# Create main.py
touch main.py

# Run server
uvicorn main:app --reload

# View docs at http://localhost:8000/docs`,
          basicExample: `# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List

app = FastAPI(
    title="Users API",
    description="API for managing users",
    version="1.0.0"
)

# Pydantic models
class UserCreate(BaseModel):
    name: str
    email: EmailStr

class User(UserCreate):
    id: int

# In-memory storage
users = []

@app.get("/api/users", response_model=List[User])
async def get_users():
    return users

@app.post("/api/users", response_model=User, status_code=201)
async def create_user(user: UserCreate):
    new_user = User(
        id=len(users) + 1,
        **user.dict()
    )
    users.append(new_user)
    return new_user

@app.get("/api/users/{user_id}", response_model=User)
async def get_user(user_id: int):
    user = next((u for u in users if u.id == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user`,
          strengths: [
            'Type hints validation',
            'Auto-generated docs',
            'High performance',
            'Modern Python features',
            'Async support'
          ],
          ecosystem: ['pip', 'Pydantic', 'SQLAlchemy', 'Alembic', 'Tortoise ORM']
        },
        migrationTips: [
          'Both have automatic API documentation',
          'Pydantic models replace JSON schemas',
          'Similar decorator-based routing',
          'Both support async/await',
          'FastAPI type hints replace Fastify schemas'
        ],
        commonPitfalls: [
          'Different validation approaches',
          'Python type hints vs JavaScript schemas',
          'Different plugin/dependency systems',
          'Import system differences',
          'Different error handling patterns'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'Jest',
          setupCode: `# Install Jest
npm install -D jest @types/jest

# For React/TypeScript projects
npm install -D @testing-library/react @testing-library/jest-dom

# Add to package.json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}

# Create jest.config.js
module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.js'
  ]
};`,
          basicExample: `// userService.test.js
const UserService = require('./userService');

describe('UserService', () => {
  let userService;
  let mockRepository;

  beforeEach(() => {
    mockRepository = {
      save: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn()
    };
    userService = new UserService(mockRepository);
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userData = { name: 'John', email: 'john@example.com' };
      const savedUser = { id: 1, ...userData };
      
      mockRepository.save.mockResolvedValue(savedUser);

      const result = await userService.createUser(userData);

      expect(mockRepository.save).toHaveBeenCalledWith(userData);
      expect(result).toEqual(savedUser);
    });

    it('should throw error for invalid email', async () => {
      const userData = { name: 'John', email: 'invalid-email' };

      await expect(userService.createUser(userData))
        .rejects.toThrow('Invalid email');
    });
  });

  describe('getUsers', () => {
    it('should return all users', async () => {
      const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
      ];
      
      mockRepository.findAll.mockResolvedValue(users);

      const result = await userService.getUsers();

      expect(result).toEqual(users);
      expect(mockRepository.findAll).toHaveBeenCalled();
    });
  });
});

// React component test example
import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';

describe('UserForm', () => {
  it('should submit form with user data', () => {
    const onSubmit = jest.fn();
    
    render(<UserForm onSubmit={onSubmit} />);
    
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'John' }
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.click(screen.getByText('Submit'));

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'John',
      email: 'john@example.com'
    });
  });
});`,
          strengths: [
            'Zero configuration',
            'Snapshot testing',
            'Mocking built-in',
            'Watch mode',
            'Code coverage'
          ],
          ecosystem: ['npm', 'Testing Library', 'Enzyme', 'Puppeteer', 'Cypress']
        },
        targetFramework: {
          name: 'pytest',
          setupCode: `# Install pytest
pip install pytest pytest-asyncio pytest-mock pytest-cov

# Create test file
touch test_user_service.py

# Run tests
pytest
pytest -v  # verbose
pytest --cov=myapp  # with coverage
pytest -k "test_create"  # run specific tests`,
          basicExample: `# test_user_service.py
import pytest
from unittest.mock import Mock, AsyncMock
from user_service import UserService

class TestUserService:
    @pytest.fixture
    def mock_repository(self):
        return Mock()
    
    @pytest.fixture
    def user_service(self, mock_repository):
        return UserService(mock_repository)
    
    def test_create_user(self, user_service, mock_repository):
        # Arrange
        user_data = {'name': 'John', 'email': 'john@example.com'}
        saved_user = {'id': 1, **user_data}
        mock_repository.save.return_value = saved_user
        
        # Act
        result = user_service.create_user(user_data)
        
        # Assert
        mock_repository.save.assert_called_once_with(user_data)
        assert result == saved_user
    
    def test_invalid_email_raises_error(self, user_service):
        user_data = {'name': 'John', 'email': 'invalid-email'}
        
        with pytest.raises(ValueError, match="Invalid email"):
            user_service.create_user(user_data)
    
    def test_get_users(self, user_service, mock_repository):
        # Arrange
        users = [
            {'id': 1, 'name': 'John'},
            {'id': 2, 'name': 'Jane'}
        ]
        mock_repository.find_all.return_value = users
        
        # Act
        result = user_service.get_users()
        
        # Assert
        assert result == users
        mock_repository.find_all.assert_called_once()

# Async test example
@pytest.mark.asyncio
async def test_async_create_user(user_service, mock_repository):
    mock_repository.save = AsyncMock(return_value={'id': 1, 'name': 'John'})
    
    result = await user_service.async_create_user({'name': 'John'})
    
    assert result['id'] == 1

# Parametrized test
@pytest.mark.parametrize("email,expected", [
    ("valid@example.com", True),
    ("invalid-email", False),
    ("", False),
    ("user@", False)
])
def test_email_validation(email, expected):
    from validators import is_valid_email
    assert is_valid_email(email) == expected`,
          strengths: [
            'Simple syntax',
            'Powerful fixtures',
            'Parametrized tests',
            'Plugin ecosystem',
            'Excellent output'
          ],
          ecosystem: ['pytest-django', 'pytest-flask', 'pytest-benchmark', 'hypothesis', 'tox']
        },
        migrationTips: [
          'pytest fixtures replace beforeEach/afterEach',
          'Simple assert statements replace expect().toBe()',
          'pytest.mark decorators replace describe/it blocks',
          '@pytest.mark.parametrize replaces it.each',
          'Mock from unittest.mock replaces jest.fn()'
        ],
        commonPitfalls: [
          'Different test discovery (test_ prefix)',
          'Import paths can be tricky',
          'No built-in snapshot testing',
          'Different mocking syntax',
          'Setup/teardown patterns differ'
        ]
      },
      {
        category: 'build',
        sourceFramework: {
          name: 'npm/Webpack',
          setupCode: `# Initialize project
npm init -y

# Install webpack
npm install -D webpack webpack-cli webpack-dev-server
npm install -D babel-loader @babel/core @babel/preset-env
npm install -D html-webpack-plugin

# Create webpack.config.js
touch webpack.config.js`,
          basicExample: `// package.json
{
  "name": "myapp",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development",
    "test": "jest",
    "lint": "eslint src/"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "webpack": "^5.0.0",
    "webpack-cli": "^5.0.0",
    "babel-loader": "^9.0.0"
  }
}

// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    port: 3000,
    hot: true
  }
};`,
          strengths: [
            'Huge package ecosystem',
            'Module bundling',
            'Hot module replacement',
            'Tree shaking',
            'Code splitting'
          ],
          ecosystem: ['npm', 'yarn', 'pnpm', 'Rollup', 'Vite']
        },
        targetFramework: {
          name: 'pip/setuptools',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate

# Create setup.py and requirements.txt
touch setup.py requirements.txt

# Install in development mode
pip install -e .

# Build distribution
python setup.py sdist bdist_wheel`,
          basicExample: `# setup.py
from setuptools import setup, find_packages

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    name="myapp",
    version="1.0.0",
    author="Your Name",
    author_email="your.email@example.com",
    description="A sample Python application",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/yourusername/myapp",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.7",
    install_requires=[
        "flask>=2.0.0",
        "requests>=2.25.0",
        "sqlalchemy>=1.4.0",
    ],
    extras_require={
        "dev": [
            "pytest>=6.0",
            "black>=21.0",
            "flake8>=3.9",
            "mypy>=0.9",
        ],
        "test": [
            "pytest>=6.0",
            "pytest-cov>=2.0",
            "pytest-mock>=3.0",
        ],
    },
    entry_points={
        "console_scripts": [
            "myapp=myapp.cli:main",
        ],
    },
)

# requirements.txt
flask>=2.0.0
requests>=2.25.0
sqlalchemy>=1.4.0

# requirements-dev.txt
-r requirements.txt
pytest>=6.0
black>=21.0
flake8>=3.9
mypy>=0.9

# pyproject.toml (modern approach)
[build-system]
requires = ["setuptools>=45", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "myapp"
version = "1.0.0"
dependencies = [
    "flask>=2.0.0",
    "requests>=2.25.0",
]

[project.optional-dependencies]
dev = ["pytest", "black", "flake8"]`,
          strengths: [
            'Virtual environments',
            'Simple dependency files',
            'PyPI publishing',
            'Editable installs',
            'Platform wheels'
          ],
          ecosystem: ['PyPI', 'pip', 'poetry', 'pipenv', 'conda']
        },
        migrationTips: [
          'requirements.txt is like package.json dependencies',
          'Virtual environments isolate like node_modules',
          'pip install replaces npm install',
          'setup.py is like package.json + build config',
          'PyPI is like npm registry'
        ],
        commonPitfalls: [
          'Must activate virtual environment',
          'No automatic script commands like npm scripts',
          'Different dependency resolution',
          'No built-in watch/dev mode',
          'Package naming conventions differ'
        ]
      }
    ]
};