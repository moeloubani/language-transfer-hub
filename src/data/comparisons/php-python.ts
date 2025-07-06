import type { LanguageComparison } from '../../types/language';

export const phpPythonComparison: LanguageComparison = {
    sourceLanguage: 'PHP',
    targetLanguage: 'Python',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration and assignment',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;`,
        targetCode: `name = "John"
age = 25
is_active = True`
      },
      {
        topic: 'Arrays / Lists',
        description: 'Creating and accessing arrays/lists',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape"; // Add to end
$count = count($fruits);`,
        targetCode: `fruits = ["apple", "banana", "orange"]
first = fruits[0]
fruits.append("grape")  # Add to end
count = len(fruits)`
      },
      {
        topic: 'Associative Arrays / Dictionaries',
        description: 'Key-value data structures',
        sourceCode: `$person = [
  "name" => "John",
  "age" => 30,
  "city" => "New York"
];
echo $person["name"];
$hasAge = isset($person["age"]);`,
        targetCode: `person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
print(person["name"])
has_age = "age" in person`
      },
      {
        topic: 'Functions',
        description: 'Function definition and calling',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}

echo greet("John");
echo greet("Jane", "Hi");`,
        targetCode: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("John"))
print(greet("Jane", "Hi"))`
      },
      {
        topic: 'Loops',
        description: 'For and foreach loops',
        sourceCode: `// For loop
for ($i = 0; $i < 5; $i++) {
  echo $i;
}

// Foreach loop
$colors = ["red", "green", "blue"];
foreach ($colors as $color) {
  echo $color;
}

// Foreach with key
foreach ($colors as $index => $color) {
  echo "$index: $color";
}`,
        targetCode: `# For loop
for i in range(5):
    print(i)

# For loop over list
colors = ["red", "green", "blue"]
for color in colors:
    print(color)

# For loop with index
for index, color in enumerate(colors):
    print(f"{index}: {color}")`
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
  
  public function getName() {
    return $this->name;
  }
}

$person = new Person("John", 30);
echo $person->greet();`,
        targetCode: `class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    def greet(self):
        return f"Hi, I'm {self._name}"
    
    @property
    def name(self):
        return self._name

person = Person("John", 30)
print(person.greet())`
      },
      {
        topic: 'String Operations',
        description: 'String manipulation and formatting',
        sourceCode: `$name = "John";
$age = 30;

// Concatenation
$message = "Hello " . $name . "!";

// String interpolation
$info = "Name: $name, Age: $age";

// String functions
$upper = strtoupper($name);
$lower = strtolower($name);
$length = strlen($name);`,
        targetCode: `name = "John"
age = 30

# Concatenation
message = "Hello " + name + "!"

# String formatting
info = f"Name: {name}, Age: {age}"

# String methods
upper = name.upper()
lower = name.lower()
length = len(name)`
      }
    ],
    commonPitfalls: [
      {
        title: 'Variable Naming Conventions',
        description: 'PHP uses $ prefix and camelCase, Python uses snake_case',
        sourceExample: `$firstName = "John";
$isActive = true;`,
        targetExample: `first_name = "John"
is_active = True`,
        correctApproach: 'Follow Python naming conventions: use snake_case for variables and functions'
      },
      {
        title: 'Boolean Values',
        description: 'Different boolean representations',
        sourceExample: `$isValid = true;
$isEmpty = false;`,
        targetExample: `is_valid = True
is_empty = False`,
        correctApproach: 'Python booleans are capitalized: True and False (not true/false)'
      },
      {
        title: 'Array vs List Methods',
        description: 'Different methods for array/list operations',
        sourceExample: `array_push($arr, $item);
array_pop($arr);
count($arr);
in_array($item, $arr);`,
        targetExample: `arr.append(item)
arr.pop()
len(arr)
item in arr`,
        correctApproach: 'Python lists have built-in methods and operators, not standalone functions'
      },
      {
        title: 'String Concatenation',
        description: 'Different concatenation operators',
        sourceExample: `$message = "Hello " . $name . "!";`,
        targetExample: `message = "Hello " + name + "!"
# Better: use f-strings
message = f"Hello {name}!"`,
        correctApproach: 'Use f-strings for string formatting in Python - more readable and efficient'
      },
      {
        title: 'Null vs None',
        description: 'Different null value representations',
        sourceExample: `$value = null;
if ($value === null) {
  // Handle null
}`,
        targetExample: `value = None
if value is None:
    # Handle None`,
        correctApproach: 'Use "is None" for None comparisons, not "== None"'
      }
    ],
    keyDifferences: [
      {
        topic: 'Syntax Structure',
        description: 'Code block definition',
        sourceApproach: 'PHP uses curly braces {} to define code blocks',
        targetApproach: 'Python uses indentation to define code blocks (no braces)'
      },
      {
        topic: 'Variable Declaration',
        description: 'How variables are declared',
        sourceApproach: 'PHP requires $ prefix for all variables',
        targetApproach: 'Python variables need no prefix or declaration keywords'
      },
      {
        topic: 'Type System',
        description: 'Static vs dynamic typing features',
        sourceApproach: 'PHP 7+ supports type declarations and strict typing',
        targetApproach: 'Python is dynamically typed with optional type hints (Python 3.5+)'
      },
      {
        topic: 'Error Handling',
        description: 'Exception handling approaches',
        sourceApproach: 'PHP uses try/catch with Exception classes',
        targetApproach: 'Python uses try/except with exception classes'
      },
      {
        topic: 'Package Management',
        description: 'Dependency management systems',
        sourceApproach: 'PHP uses Composer for package management',
        targetApproach: 'Python uses pip with requirements.txt or poetry/pipenv'
      },
      {
        topic: 'Execution Model',
        description: 'How code is executed',
        sourceApproach: 'PHP is typically request-based, executed by web server',
        targetApproach: 'Python can run as scripts, web apps, or long-running processes'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'Laravel',
          setupCode: `# Install Laravel via Composer
composer global require laravel/installer

# Create new Laravel project
laravel new myapp
cd myapp

# Install dependencies
composer install

# Generate application key
php artisan key:generate

# Start development server
php artisan serve`,
          basicExample: `<?php
// routes/web.php
use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\UserController;

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{user}', [UserController::class, 'show']);

// app/Http/Controllers/UserController.php
<?php
namespace App\\Http\\Controllers;

use App\\Models\\User;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
        ]);
        
        $user = User::create($validated);
        return response()->json($user, 201);
    }
    
    public function show(User $user)
    {
        return response()->json($user);
    }
}

// app/Models/User.php
<?php
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    protected $fillable = ['name', 'email'];
    protected $hidden = ['password'];
}`,
          strengths: [
            'Full-featured MVC framework',
            'Eloquent ORM built-in',
            'Artisan CLI tools',
            'Rich ecosystem (Forge, Nova, etc.)',
            'Excellent documentation'
          ],
          ecosystem: ['Composer', 'Eloquent ORM', 'Blade Templates', 'Artisan CLI', 'Laravel Mix']
        },
        targetFramework: {
          name: 'Django',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install Django
pip install django djangorestframework

# Create Django project
django-admin startproject myapp
cd myapp

# Create app
python manage.py startapp users

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver`,
          basicExample: `# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users.views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]

# users/views.py
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# users/models.py
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

# users/serializers.py
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'created_at']`,
          strengths: [
            'Batteries included framework',
            'Powerful admin interface',
            'Strong ORM with migrations',
            'Excellent security features',
            'Great for complex applications'
          ],
          ecosystem: ['pip', 'Django ORM', 'Django Admin', 'Django REST Framework', 'Celery']
        },
        migrationTips: [
          'Django follows similar MVC pattern as Laravel but with different naming',
          'Django ORM is comparable to Eloquent but with different syntax',
          'Django admin provides similar functionality to Laravel Nova',
          'Use Django REST Framework for API development like Laravel API routes',
          'Django migrations are similar to Laravel migrations'
        ],
        commonPitfalls: [
          'Django uses snake_case instead of camelCase for method names',
          'Different template syntax (Django templates vs Blade)',
          'URL routing works differently (regex patterns vs simple routes)',
          'Django apps structure vs Laravel controllers organization',
          'Different approach to middleware and request handling'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'Slim Framework',
          setupCode: `# Install Slim via Composer
composer require slim/slim:"4.*"
composer require slim/psr7
composer require slim/http

# Create index.php
touch public/index.php

# Install PSR-7 implementation
composer require nyholm/psr7`,
          basicExample: `<?php
// public/index.php
use Psr\\Http\\Message\\ResponseInterface as Response;
use Psr\\Http\\Message\\ServerRequestInterface as Request;
use Slim\\Factory\\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

// Add middleware
$app->addBodyParsingMiddleware();
$app->addRoutingMiddleware();
$app->addErrorMiddleware(true, true, true);

// In-memory data store
$users = [
    ['id' => 1, 'name' => 'John', 'email' => 'john@example.com']
];

// Routes
$app->get('/api/users', function (Request $request, Response $response) use ($users) {
    $response->getBody()->write(json_encode($users));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->post('/api/users', function (Request $request, Response $response) use (&$users) {
    $data = $request->getParsedBody();
    
    if (empty($data['name']) || empty($data['email'])) {
        $error = ['error' => 'Name and email are required'];
        $response->getBody()->write(json_encode($error));
        return $response->withStatus(400)->withHeader('Content-Type', 'application/json');
    }
    
    $newUser = [
        'id' => count($users) + 1,
        'name' => $data['name'],
        'email' => $data['email']
    ];
    
    $users[] = $newUser;
    
    $response->getBody()->write(json_encode($newUser));
    return $response->withStatus(201)->withHeader('Content-Type', 'application/json');
});

$app->get('/api/users/{id}', function (Request $request, Response $response, $args) use ($users) {
    $id = (int)$args['id'];
    $user = array_filter($users, fn($u) => $u['id'] === $id);
    
    if (empty($user)) {
        $error = ['error' => 'User not found'];
        $response->getBody()->write(json_encode($error));
        return $response->withStatus(404)->withHeader('Content-Type', 'application/json');
    }
    
    $response->getBody()->write(json_encode(array_values($user)[0]));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();`,
          strengths: [
            'Lightweight and fast',
            'PSR-7 compliant',
            'Flexible routing',
            'Middleware support',
            'Great for microservices'
          ],
          ecosystem: ['Composer', 'PSR-7', 'Twig', 'Monolog', 'Doctrine']
        },
        targetFramework: {
          name: 'Flask',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install Flask
pip install flask flask-cors

# Create app.py
touch app.py`,
          basicExample: `# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory data store
users = [
    {'id': 1, 'name': 'John', 'email': 'john@example.com'}
]

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    
    if not data or not data.get('name') or not data.get('email'):
        return jsonify({'error': 'Name and email are required'}), 400
    
    new_user = {
        'id': len(users) + 1,
        'name': data['name'],
        'email': data['email']
    }
    
    users.append(new_user)
    return jsonify(new_user), 201

@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    return jsonify(user)

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)`,
          strengths: [
            'Simple and minimal',
            'Easy to learn',
            'Flexible and unopinionated',
            'Great for small APIs',
            'Extensive ecosystem'
          ],
          ecosystem: ['pip', 'Jinja2', 'Werkzeug', 'SQLAlchemy', 'Flask-RESTful']
        },
        migrationTips: [
          'Flask decorators are similar to Slim route definitions',
          'Both frameworks are lightweight and minimal by design',
          'Flask request/response handling is simpler than Slim PSR-7',
          'Python function-based routing vs PHP class-based routing',
          'Flask has built-in development server unlike Slim'
        ],
        commonPitfalls: [
          'Different error handling patterns',
          'Flask uses decorators while Slim uses method chaining',
          'Python naming conventions vs PHP conventions',
          'Different middleware implementation approaches',
          'Flask blueprints vs Slim route groups'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'PHPUnit',
          setupCode: `# Install PHPUnit via Composer
composer require --dev phpunit/phpunit

# Create phpunit.xml configuration
<?xml version="1.0"?>
<phpunit bootstrap="vendor/autoload.php">
    <testsuites>
        <testsuite name="Test Suite">
            <directory>tests</directory>
        </testsuite>
    </testsuites>
</phpunit>

# Create tests directory
mkdir tests

# Run tests
./vendor/bin/phpunit`,
          basicExample: `<?php
// tests/UserTest.php
use PHPUnit\\Framework\\TestCase;

class UserTest extends TestCase
{
    private $user;
    
    protected function setUp(): void
    {
        $this->user = new User('John', 'john@example.com');
    }
    
    public function testUserCreation()
    {
        $this->assertEquals('John', $this->user->getName());
        $this->assertEquals('john@example.com', $this->user->getEmail());
        $this->assertNotNull($this->user->getId());
    }
    
    public function testUserValidation()
    {
        $this->assertTrue($this->user->isValidEmail('test@example.com'));
        $this->assertFalse($this->user->isValidEmail('invalid-email'));
    }
    
    public function testUserToArray()
    {
        $expected = [
            'id' => $this->user->getId(),
            'name' => 'John',
            'email' => 'john@example.com'
        ];
        
        $this->assertEquals($expected, $this->user->toArray());
    }
    
    /**
     * @dataProvider nameProvider
     */
    public function testNameValidation($name, $expected)
    {
        $user = new User($name, 'test@example.com');
        $this->assertEquals($expected, $user->isValidName());
    }
    
    public function nameProvider()
    {
        return [
            ['John', true],
            ['', false],
            ['A', false],
            ['Very Long Name That Exceeds Limits', false]
        ];
    }
    
    public function testExceptionThrown()
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Email cannot be empty');
        
        new User('John', '');
    }
}`,
          strengths: [
            'De facto standard for PHP',
            'Rich assertion library',
            'Data providers',
            'Mock objects',
            'Code coverage reports'
          ],
          ecosystem: ['Composer', 'Mockery', 'Faker', 'Codeception', 'Pest']
        },
        targetFramework: {
          name: 'pytest',
          setupCode: `# Install pytest
pip install pytest pytest-cov pytest-mock

# Create tests directory
mkdir tests
touch tests/__init__.py

# Create pytest.ini configuration
[pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*

# Run tests
pytest

# Run with coverage
pytest --cov=src`,
          basicExample: `# tests/test_user.py
import pytest
from src.user import User

class TestUser:
    def setup_method(self):
        self.user = User('John', 'john@example.com')
    
    def test_user_creation(self):
        assert self.user.name == 'John'
        assert self.user.email == 'john@example.com'
        assert self.user.id is not None
    
    def test_user_validation(self):
        assert self.user.is_valid_email('test@example.com') == True
        assert self.user.is_valid_email('invalid-email') == False
    
    def test_user_to_dict(self):
        expected = {
            'id': self.user.id,
            'name': 'John',
            'email': 'john@example.com'
        }
        
        assert self.user.to_dict() == expected
    
    @pytest.mark.parametrize("name,expected", [
        ('John', True),
        ('', False),
        ('A', False),
        ('Very Long Name That Exceeds Limits', False)
    ])
    def test_name_validation(self, name, expected):
        user = User(name, 'test@example.com')
        assert user.is_valid_name() == expected
    
    def test_exception_raised(self):
        with pytest.raises(ValueError, match="Email cannot be empty"):
            User('John', '')
    
    def test_user_age_property(self):
        user = User('John', 'john@example.com', age=30)
        assert user.age == 30
        
        user.age = 31
        assert user.age == 31
    
    def test_user_str_representation(self):
        expected = "User(name='John', email='john@example.com')"
        assert str(self.user) == expected

# tests/test_user_integration.py
import pytest
from unittest.mock import Mock, patch

def test_user_save_to_database():
    user = User('John', 'john@example.com')
    
    with patch('src.database.save') as mock_save:
        mock_save.return_value = True
        result = user.save()
        
        assert result == True
        mock_save.assert_called_once_with(user)

@pytest.fixture
def sample_users():
    return [
        User('John', 'john@example.com'),
        User('Jane', 'jane@example.com'),
        User('Bob', 'bob@example.com')
    ]

def test_multiple_users(sample_users):
    assert len(sample_users) == 3
    names = [user.name for user in sample_users]
    assert 'John' in names
    assert 'Jane' in names`,
          strengths: [
            'Simple and powerful',
            'Excellent fixtures system',
            'Parametrized testing',
            'Great plugin ecosystem',
            'Descriptive failure output'
          ],
          ecosystem: ['pip', 'pytest-django', 'pytest-asyncio', 'pytest-mock', 'tox']
        },
        migrationTips: [
          'pytest uses functions instead of PHPUnit classes by default',
          'Fixtures replace PHPUnit setUp/tearDown methods',
          'pytest.mark.parametrize replaces PHPUnit data providers',
          'with pytest.raises() replaces expectException()',
          'assert statements instead of $this->assert* methods'
        ],
        commonPitfalls: [
          'Different naming conventions (snake_case vs camelCase)',
          'Python assert statements vs PHPUnit assertion methods',
          'Fixture scope differences from PHPUnit setUp methods',
          'Different mocking approach (unittest.mock vs PHPUnit mocks)',
          'Test discovery works differently'
        ]
      },
      {
        category: 'fullstack',
        sourceFramework: {
          name: 'Laravel + Vue.js',
          setupCode: `# Create Laravel project
composer create-project laravel/laravel myapp
cd myapp

# Install Laravel Breeze with Vue
composer require laravel/breeze --dev
php artisan breeze:install vue

# Install dependencies and compile assets
npm install
npm run dev

# Run migrations
php artisan migrate

# Start servers
php artisan serve  # Backend on :8000
npm run dev       # Frontend with hot reload`,
          basicExample: `<!-- Backend: routes/api.php -->
<?php
use App\\Http\\Controllers\\UserController;

Route::apiResource('users', UserController::class);

// Backend: app/Http/Controllers/UserController.php
<?php
namespace App\\Http\\Controllers;

use App\\Models\\User;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
        ]);
        
        return User::create($validated);
    }
}

<!-- Frontend: resources/js/Components/UserList.vue -->
<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-6">Users</h1>
        
        <form @submit.prevent="createUser" class="mb-6 space-y-4">
            <input 
                v-model="form.name" 
                type="text" 
                placeholder="Name" 
                class="w-full p-2 border rounded"
                required
            />
            <input 
                v-model="form.email" 
                type="email" 
                placeholder="Email" 
                class="w-full p-2 border rounded"
                required
            />
            <button 
                type="submit" 
                :disabled="loading"
                class="w-full p-2 bg-blue-500 text-white rounded"
            >
                {{ loading ? 'Adding...' : 'Add User' }}
            </button>
        </form>
        
        <div v-if="users.length" class="space-y-2">
            <div 
                v-for="user in users" 
                :key="user.id"
                class="p-4 border rounded"
            >
                <div class="font-bold">{{ user.name }}</div>
                <div class="text-gray-600">{{ user.email }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const loading = ref(false)
const form = ref({
    name: '',
    email: ''
})

const fetchUsers = async () => {
    try {
        const response = await axios.get('/api/users')
        users.value = response.data
    } catch (error) {
        console.error('Error fetching users:', error)
    }
}

const createUser = async () => {
    loading.value = true
    try {
        await axios.post('/api/users', form.value)
        form.value = { name: '', email: '' }
        await fetchUsers()
    } catch (error) {
        console.error('Error creating user:', error)
    } finally {
        loading.value = false
    }
}

onMounted(fetchUsers)
</script>`,
          strengths: [
            'Integrated backend and frontend',
            'Laravel API + Vue SPA',
            'Shared authentication',
            'Hot module replacement',
            'Rich ecosystem'
          ],
          ecosystem: ['Composer', 'npm', 'Laravel Mix', 'Vue Router', 'Pinia']
        },
        targetFramework: {
          name: 'Django + React',
          setupCode: `# Backend setup
django-admin startproject backend
cd backend
pip install django djangorestframework django-cors-headers

# Add to settings.py
INSTALLED_APPS = [
    'corsheaders',
    'rest_framework',
]
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

# Frontend setup (separate directory)
npx create-react-app frontend
cd frontend
npm install axios`,
          basicExample: `# Backend: users/views.py
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Backend: users/serializers.py
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'created_at']

# Frontend: src/components/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users/');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const createUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await axios.post('http://localhost:8000/api/users/', form);
            setForm({ name: '', email: '' });
            await fetchUsers();
        } catch (error) {
            console.error('Error creating user:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Users</h1>
            
            <form onSubmit={createUser} className="mb-6 space-y-4">
                <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-2 bg-blue-500 text-white rounded"
                >
                    {loading ? 'Adding...' : 'Add User'}
                </button>
            </form>
            
            <div className="space-y-2">
                {users.map(user => (
                    <div key={user.id} className="p-4 border rounded">
                        <div className="font-bold">{user.name}</div>
                        <div className="text-gray-600">{user.email}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;`,
          strengths: [
            'Separate frontend and backend',
            'API-first architecture',
            'React ecosystem',
            'Django admin interface',
            'Scalable deployment'
          ],
          ecosystem: ['pip', 'npm', 'Django REST Framework', 'React Router', 'Redux']
        },
        migrationTips: [
          'Django + React separates concerns more than Laravel + Vue integration',
          'CORS configuration needed for separate frontend/backend',
          'Django serializers similar to Laravel API resources',
          'React hooks pattern vs Vue Composition API',
          'Different state management approaches'
        ],
        commonPitfalls: [
          'CORS issues during development',
          'Different authentication approaches',
          'Separate deployment processes',
          'API versioning considerations',
          'Different error handling patterns'
        ]
      }
    ]
};