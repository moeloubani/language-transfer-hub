import type { LanguageComparison } from '../../types/language';

export const pythonPhpComparison: LanguageComparison = {
    sourceLanguage: 'Python',
    targetLanguage: 'PHP',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Variable declaration differences',
        sourceCode: `name = "John"
age = 25
is_active = True
score = 95.5

# Dynamic typing
value = 42
value = "now a string"  # This is fine`,
        targetCode: `$name = "John";
$age = 25;
$isActive = true;
$score = 95.5;

// Dynamic typing with $ prefix
$value = 42;
$value = "now a string"; // This is also fine`
      },
      {
        topic: 'Lists and Dictionaries',
        description: 'Collections and associative arrays',
        sourceCode: `# List
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
first = fruits[0]

# Dictionary
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]`,
        targetCode: `// Array (indexed)
$fruits = ["apple", "banana", "orange"];
$fruits[] = "grape"; // or array_push($fruits, "grape")
$first = $fruits[0];

// Associative array
$person = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];

// Array map/filter (no direct comprehension)
$squares = array_map(function($x) { return $x ** 2; }, range(0, 9));
$evens = array_filter(range(0, 19), function($x) { return $x % 2 == 0; });`
      },
      {
        topic: 'Functions',
        description: 'Function definitions and calls',
        sourceCode: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

def calculate_area(width, height):
    return width * height

# Lambda function
add = lambda x, y: x + y

# Multiple return values
def get_user_data():
    return "John", 30, "john@example.com"

name, age, email = get_user_data()`,
        targetCode: `function greet($name, $greeting = "Hello") {
    return "$greeting, $name!";
}

function calculateArea($width, $height) {
    return $width * $height;
}

// Anonymous function
$add = function($x, $y) {
    return $x + $y;
};

// Multiple return values using array
function getUserData() {
    return ["John", 30, "john@example.com"];
}

list($name, $age, $email) = getUserData();
// Or in PHP 7.1+: [$name, $age, $email] = getUserData();`
      },
      {
        topic: 'Classes and Objects',
        description: 'Object-oriented programming',
        sourceCode: `class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        self._name = value
    
    def greet(self):
        return f"Hi, I'm {self._name}"
    
    def __str__(self):
        return f"Person(name='{self._name}', age={self._age})"

# Inheritance
class Employee(Person):
    def __init__(self, name, age, employee_id):
        super().__init__(name, age)
        self.employee_id = employee_id

person = Person("John", 30)
print(person.greet())`,
        targetCode: `class Person {
    private $name;
    private $age;
    
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
    
    // Getter
    public function getName() {
        return $this->name;
    }
    
    // Setter
    public function setName($value) {
        $this->name = $value;
    }
    
    public function greet() {
        return "Hi, I'm " . $this->name;
    }
    
    public function __toString() {
        return "Person(name='{$this->name}', age={$this->age})";
    }
}

// Inheritance
class Employee extends Person {
    private $employeeId;
    
    public function __construct($name, $age, $employeeId) {
        parent::__construct($name, $age);
        $this->employeeId = $employeeId;
    }
}

$person = new Person("John", 30);
echo $person->greet();`
      },
      {
        topic: 'Error Handling',
        description: 'Exception handling',
        sourceCode: `def divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Cannot divide by zero!")
        return None
    except Exception as e:
        print(f"An error occurred: {e}")
        raise
    finally:
        print("Division operation completed")

# Custom exception
class ValidationError(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)

try:
    if age < 0:
        raise ValidationError("Age cannot be negative")
except ValidationError as e:
    print(f"Validation failed: {e.message}")`,
        targetCode: `function divide($a, $b) {
    try {
        $result = $a / $b;
        return $result;
    } catch (DivisionByZeroError $e) {
        echo "Cannot divide by zero!";
        return null;
    } catch (Exception $e) {
        echo "An error occurred: " . $e->getMessage();
        throw $e;
    } finally {
        echo "Division operation completed";
    }
}

// Custom exception
class ValidationException extends Exception {
    public function __construct($message, $code = 0, Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }
}

try {
    if ($age < 0) {
        throw new ValidationException("Age cannot be negative");
    }
} catch (ValidationException $e) {
    echo "Validation failed: " . $e->getMessage();
}`
      },
      {
        topic: 'File Operations',
        description: 'Reading and writing files',
        sourceCode: `# Reading a file
with open('data.txt', 'r') as file:
    content = file.read()
    # File automatically closed

# Reading lines
with open('data.txt', 'r') as file:
    lines = file.readlines()

# Writing to file
with open('output.txt', 'w') as file:
    file.write("Hello, World!")

# Appending to file
with open('log.txt', 'a') as file:
    file.write("New log entry\\n")`,
        targetCode: `// Reading a file
$content = file_get_contents('data.txt');

// Reading lines
$lines = file('data.txt', FILE_IGNORE_NEW_LINES);

// Writing to file
file_put_contents('output.txt', "Hello, World!");

// Appending to file
file_put_contents('log.txt', "New log entry\\n", FILE_APPEND);

// Using file handles (similar to Python's with statement)
$file = fopen('data.txt', 'r');
if ($file) {
    $content = fread($file, filesize('data.txt'));
    fclose($file);
}

// More Pythonic approach with try-finally
$file = fopen('output.txt', 'w');
try {
    fwrite($file, "Hello, World!");
} finally {
    fclose($file);
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Variable Syntax',
        description: 'PHP requires $ prefix for variables',
        sourceExample: `name = "John"
age = 25`,
        targetExample: `$name = "John";
$age = 25;`,
        correctApproach: 'Always use $ prefix for PHP variables and end statements with semicolons'
      },
      {
        title: 'Boolean Values',
        description: 'Different boolean representations',
        sourceExample: `is_valid = True
is_empty = False`,
        targetExample: `$isValid = true;  // lowercase
$isEmpty = false;  // lowercase`,
        correctApproach: 'Use lowercase true/false in PHP, not capitalized'
      },
      {
        title: 'String Concatenation',
        description: 'Different operators for joining strings',
        sourceExample: `message = "Hello " + name + "!"
# Better: f-string
message = f"Hello {name}!"`,
        targetExample: `$message = "Hello " . $name . "!";
// String interpolation
$message = "Hello $name!";
// Or complex interpolation
$message = "Hello {$name}!";`,
        correctApproach: 'Use . for concatenation or variable interpolation in double quotes'
      },
      {
        title: 'Indentation vs Braces',
        description: 'PHP uses braces for code blocks',
        sourceExample: `if condition:
    do_something()
    do_another_thing()`,
        targetExample: `if ($condition) {
    doSomething();
    doAnotherThing();
}`,
        correctApproach: 'Use braces {} for code blocks and proper semicolons'
      },
      {
        title: 'None vs null',
        description: 'Different null value representations',
        sourceExample: `value = None
if value is None:
    print("Value is None")`,
        targetExample: `$value = null;
if ($value === null) {
    echo "Value is null";
}`,
        correctApproach: 'Use null (lowercase) and === for strict comparison'
      }
    ],
    keyDifferences: [
      {
        topic: 'Execution Model',
        description: 'How code is executed',
        sourceApproach: 'Python runs as scripts or long-running processes',
        targetApproach: 'PHP typically runs per-request in web context'
      },
      {
        topic: 'Syntax Style',
        description: 'Code structure approach',
        sourceApproach: 'Python uses indentation and minimal punctuation',
        targetApproach: 'PHP uses C-style syntax with braces and semicolons'
      },
      {
        topic: 'Type System',
        description: 'Type checking approach',
        sourceApproach: 'Python has optional type hints (Python 3.5+)',
        targetApproach: 'PHP has optional type declarations (PHP 7+)'
      },
      {
        topic: 'Standard Library',
        description: 'Built-in functionality',
        sourceApproach: 'Python has extensive "batteries included" standard library',
        targetApproach: 'PHP has web-focused standard library with many built-in functions'
      },
      {
        topic: 'Package Management',
        description: 'Dependency management',
        sourceApproach: 'Python uses pip and virtual environments',
        targetApproach: 'PHP uses Composer for modern dependency management'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'Django',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install Django
pip install django

# Create project
django-admin startproject myproject
cd myproject

# Create app
python manage.py startapp myapp

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver`,
          basicExample: `# models.py
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

# views.py
from django.shortcuts import render, redirect
from django.views import View
from .models import User
from .forms import UserForm

class UserListView(View):
    def get(self, request):
        users = User.objects.all()
        return render(request, 'users/list.html', {'users': users})

class UserCreateView(View):
    def get(self, request):
        form = UserForm()
        return render(request, 'users/create.html', {'form': form})
    
    def post(self, request):
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('user-list')
        return render(request, 'users/create.html', {'form': form})

# urls.py
from django.urls import path
from .views import UserListView, UserCreateView

urlpatterns = [
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/create/', UserCreateView.as_view(), name='user-create'),
]

# forms.py
from django import forms
from .models import User

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['name', 'email']`,
          strengths: [
            'Batteries included framework',
            'Powerful admin interface',
            'Built-in ORM with migrations',
            'Excellent security features',
            'Large ecosystem'
          ],
          ecosystem: ['pip', 'Django ORM', 'Django Admin', 'Django REST Framework', 'Celery']
        },
        targetFramework: {
          name: 'Laravel',
          setupCode: `# Install Laravel
composer global require laravel/installer

# Create new project
laravel new myproject
cd myproject

# Configure database in .env

# Generate application key
php artisan key:generate

# Run migrations
php artisan migrate

# Create controller
php artisan make:controller UserController --resource

# Start server
php artisan serve`,
          basicExample: `<?php
// app/Models/User.php
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    protected $fillable = ['name', 'email'];
}

// app/Http/Controllers/UserController.php
namespace App\\Http\\Controllers;

use App\\Models\\User;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', compact('users'));
    }
    
    public function create()
    {
        return view('users.create');
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
        ]);
        
        User::create($validated);
        return redirect()->route('users.index');
    }
}

// routes/web.php
use App\\Http\\Controllers\\UserController;

Route::resource('users', UserController::class);

// resources/views/users/create.blade.php
@extends('layouts.app')

@section('content')
<form method="POST" action="{{ route('users.store') }}">
    @csrf
    <input type="text" name="name" placeholder="Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <button type="submit">Create User</button>
</form>
@endsection`,
          strengths: [
            'Full-featured MVC framework',
            'Eloquent ORM',
            'Artisan CLI',
            'Blade templating',
            'Rich ecosystem'
          ],
          ecosystem: ['Composer', 'Eloquent ORM', 'Blade Templates', 'Artisan CLI', 'Laravel Mix']
        },
        migrationTips: [
          'Both follow MVC/MVT patterns',
          'Eloquent ORM similar to Django ORM',
          'Blade templates vs Django templates',
          'Artisan commands similar to manage.py',
          'Both have built-in authentication'
        ],
        commonPitfalls: [
          'Different template syntax',
          'PHP array syntax vs Python lists/dicts',
          'Different ORM query syntax',
          'URL routing syntax differences',
          'Middleware implementation differs'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'FastAPI',
          setupCode: `# Install FastAPI
pip install fastapi uvicorn[standard]

# Create main.py
touch main.py

# Run development server
uvicorn main:app --reload`,
          basicExample: `# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime

app = FastAPI(title="User API")

# In-memory storage
users_db = []
user_id_counter = 1

# Pydantic models
class UserBase(BaseModel):
    name: str
    email: EmailStr

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    created_at: datetime
    
    class Config:
        orm_mode = True

@app.get("/users", response_model=List[User])
def get_users(skip: int = 0, limit: int = 100):
    return users_db[skip : skip + limit]

@app.post("/users", response_model=User, status_code=201)
def create_user(user: UserCreate):
    global user_id_counter
    
    # Check if email exists
    if any(u.email == user.email for u in users_db):
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Create new user
    db_user = User(
        id=user_id_counter,
        name=user.name,
        email=user.email,
        created_at=datetime.now()
    )
    
    users_db.append(db_user)
    user_id_counter += 1
    
    return db_user

@app.get("/users/{user_id}", response_model=User)
def get_user(user_id: int):
    user = next((u for u in users_db if u.id == user_id), None)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user`,
          strengths: [
            'Modern async framework',
            'Automatic API documentation',
            'Type hints and validation',
            'High performance',
            'Easy to learn'
          ],
          ecosystem: ['pip', 'Pydantic', 'SQLAlchemy', 'Alembic', 'pytest']
        },
        targetFramework: {
          name: 'Slim Framework',
          setupCode: `# Install Slim via Composer
composer require slim/slim:"4.*"
composer require slim/psr7

# Create index.php
mkdir public
touch public/index.php

# Install additional packages
composer require php-di/php-di

# Run with PHP built-in server
php -S localhost:8000 -t public`,
          basicExample: `<?php
// public/index.php
use Psr\\Http\\Message\\ResponseInterface as Response;
use Psr\\Http\\Message\\ServerRequestInterface as Request;
use Slim\\Factory\\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();
$app->addBodyParsingMiddleware();
$app->addRoutingMiddleware();
$app->addErrorMiddleware(true, true, true);

// In-memory storage
$users = [];
$userIdCounter = 1;

// Get all users
$app->get('/users', function (Request $request, Response $response) use (&$users) {
    $params = $request->getQueryParams();
    $skip = $params['skip'] ?? 0;
    $limit = $params['limit'] ?? 100;
    
    $result = array_slice($users, $skip, $limit);
    
    $response->getBody()->write(json_encode($result));
    return $response->withHeader('Content-Type', 'application/json');
});

// Create user
$app->post('/users', function (Request $request, Response $response) use (&$users, &$userIdCounter) {
    $data = $request->getParsedBody();
    
    // Validate input
    if (empty($data['name']) || empty($data['email'])) {
        $error = ['error' => 'Name and email are required'];
        $response->getBody()->write(json_encode($error));
        return $response->withStatus(400)->withHeader('Content-Type', 'application/json');
    }
    
    // Check if email exists
    foreach ($users as $user) {
        if ($user['email'] === $data['email']) {
            $error = ['error' => 'Email already registered'];
            $response->getBody()->write(json_encode($error));
            return $response->withStatus(400)->withHeader('Content-Type', 'application/json');
        }
    }
    
    // Create new user
    $newUser = [
        'id' => $userIdCounter++,
        'name' => $data['name'],
        'email' => $data['email'],
        'created_at' => date('Y-m-d H:i:s')
    ];
    
    $users[] = $newUser;
    
    $response->getBody()->write(json_encode($newUser));
    return $response->withStatus(201)->withHeader('Content-Type', 'application/json');
});

// Get single user
$app->get('/users/{id}', function (Request $request, Response $response, $args) use (&$users) {
    $id = (int)$args['id'];
    
    $user = null;
    foreach ($users as $u) {
        if ($u['id'] === $id) {
            $user = $u;
            break;
        }
    }
    
    if ($user === null) {
        $error = ['error' => 'User not found'];
        $response->getBody()->write(json_encode($error));
        return $response->withStatus(404)->withHeader('Content-Type', 'application/json');
    }
    
    $response->getBody()->write(json_encode($user));
    return $response->withHeader('Content-Type', 'application/json');
});

$app->run();`,
          strengths: [
            'Lightweight and fast',
            'PSR-7 compliant',
            'Flexible routing',
            'Middleware support',
            'Minimal footprint'
          ],
          ecosystem: ['Composer', 'PSR standards', 'Twig', 'Eloquent', 'PHPUnit']
        },
        migrationTips: [
          'Both are lightweight API frameworks',
          'Slim uses PSR-7 request/response vs FastAPI models',
          'FastAPI has built-in validation, Slim needs manual validation',
          'Both support middleware concepts',
          'FastAPI auto-generates docs, Slim needs OpenAPI tools'
        ],
        commonPitfalls: [
          'PHP arrays vs Python dictionaries',
          'Manual validation in Slim vs Pydantic',
          'Different async models',
          'Type hints optional in PHP',
          'JSON handling differences'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'pytest',
          setupCode: `# Install pytest
pip install pytest pytest-cov pytest-mock

# Create test file
touch test_user.py

# Run tests
pytest

# Run with coverage
pytest --cov=src

# Run verbose
pytest -v`,
          basicExample: `# test_user.py
import pytest
from user import User, UserService

class TestUser:
    def setup_method(self):
        self.user = User(name="John", email="john@example.com")
    
    def test_user_creation(self):
        assert self.user.name == "John"
        assert self.user.email == "john@example.com"
        assert self.user.id is not None
    
    def test_user_validation(self):
        assert self.user.is_valid_email("test@example.com")
        assert not self.user.is_valid_email("invalid-email")
    
    @pytest.mark.parametrize("name,expected", [
        ("John", True),
        ("", False),
        ("A", False),
        ("Very Long Name", False)
    ])
    def test_name_validation(self, name, expected):
        user = User(name=name, email="test@example.com")
        assert user.is_valid_name() == expected
    
    def test_exception_raised(self):
        with pytest.raises(ValueError, match="Email cannot be empty"):
            User(name="John", email="")
    
    @pytest.fixture
    def mock_repository(self, mocker):
        repo = mocker.Mock()
        repo.save.return_value = self.user
        return repo
    
    def test_user_service(self, mock_repository):
        service = UserService(mock_repository)
        result = service.save_user(self.user)
        
        assert result == self.user
        mock_repository.save.assert_called_once_with(self.user)`,
          strengths: [
            'Simple and powerful',
            'Great fixtures system',
            'Parametrized testing',
            'Excellent output',
            'Plugin ecosystem'
          ],
          ecosystem: ['pip', 'pytest-django', 'pytest-asyncio', 'pytest-mock', 'tox']
        },
        targetFramework: {
          name: 'PHPUnit',
          setupCode: `# Install PHPUnit
composer require --dev phpunit/phpunit

# Create phpunit.xml
<?xml version="1.0"?>
<phpunit bootstrap="vendor/autoload.php">
    <testsuites>
        <testsuite name="Test Suite">
            <directory>tests</directory>
        </testsuite>
    </testsuites>
</phpunit>

# Run tests
./vendor/bin/phpunit

# Run with coverage
./vendor/bin/phpunit --coverage-html coverage`,
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
            ['Very Long Name', false]
        ];
    }
    
    public function testExceptionThrown()
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Email cannot be empty');
        
        new User('John', '');
    }
    
    public function testUserServiceWithMock()
    {
        $mockRepository = $this->createMock(UserRepository::class);
        $mockRepository->expects($this->once())
            ->method('save')
            ->with($this->user)
            ->willReturn($this->user);
        
        $service = new UserService($mockRepository);
        $result = $service->saveUser($this->user);
        
        $this->assertEquals($this->user, $result);
    }
}`,
          strengths: [
            'Industry standard for PHP',
            'Rich assertions',
            'Data providers',
            'Mock objects',
            'Code coverage'
          ],
          ecosystem: ['Composer', 'Mockery', 'Faker', 'Codeception', 'Pest']
        },
        migrationTips: [
          'setUp() method vs setup_method()',
          'Data providers vs parametrize',
          'Assertion methods have different names',
          'Both support mocking',
          'Similar test structure'
        ],
        commonPitfalls: [
          'CamelCase vs snake_case methods',
          'Docblock annotations vs decorators',
          'Different assertion syntax',
          'Class-based vs function-based tests',
          'Mock syntax differences'
        ]
      }
    ]
};