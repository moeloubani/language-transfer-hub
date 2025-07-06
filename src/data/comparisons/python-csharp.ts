import type { LanguageComparison } from '../../types/language';

export const pythonCsharpComparison: LanguageComparison = {
    sourceLanguage: 'Python',
    targetLanguage: 'C#',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Dynamic vs static typing',
        sourceCode: `name = "John"
age = 25
is_active = True
score = 95.5

# Dynamic typing
value = 42
value = "now a string"  # This is fine in Python`,
        targetCode: `string name = "John";
int age = 25;
bool isActive = true;
double score = 95.5;

// Static typing - cannot change types
int value = 42;
// value = "now a string"; // Compilation error!

// Type inference with var
var inferredName = "John"; // Compiler infers string type`
      },
      {
        topic: 'Collections',
        description: 'Lists and dictionaries vs strongly typed collections',
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
        targetCode: `// List<T>
List<string> fruits = new List<string> {"apple", "banana", "orange"};
fruits.Add("grape");
string first = fruits[0];

// Dictionary<TKey, TValue>
Dictionary<string, object> person = new Dictionary<string, object>
{
    {"name", "John"},
    {"age", 30},
    {"city", "New York"}
};

// LINQ (similar to comprehensions)
var squares = Enumerable.Range(0, 10).Select(x => x * x).ToList();
var evens = Enumerable.Range(0, 20).Where(x => x % 2 == 0).ToList();`
      },
      {
        topic: 'Functions and Methods',
        description: 'Function definitions with different syntax',
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
        targetCode: `// Method with optional parameter
public string Greet(string name, string greeting = "Hello")
{
    return $"{greeting}, {name}!";
}

public int CalculateArea(int width, int height)
{
    return width * height;
}

// Lambda expression
Func<int, int, int> add = (x, y) => x + y;

// Multiple return values using tuples
public (string name, int age, string email) GetUserData()
{
    return ("John", 30, "john@example.com");
}

var (name, age, email) = GetUserData();`
      },
      {
        topic: 'Classes and Objects',
        description: 'Object-oriented programming with different syntax',
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
        targetCode: `public class Person
{
    private string _name;
    private int _age;
    
    public Person(string name, int age)
    {
        _name = name;
        _age = age;
    }
    
    public string Name
    {
        get => _name;
        set => _name = value;
    }
    
    public string Greet()
    {
        return $"Hi, I'm {_name}";
    }
    
    public override string ToString()
    {
        return $"Person(name='{_name}', age={_age})";
    }
}

// Inheritance
public class Employee : Person
{
    public string EmployeeId { get; set; }
    
    public Employee(string name, int age, string employeeId) 
        : base(name, age)
    {
        EmployeeId = employeeId;
    }
}

var person = new Person("John", 30);
Console.WriteLine(person.Greet());`
      },
      {
        topic: 'Async Programming',
        description: 'Asynchronous operations',
        sourceCode: `import asyncio
import aiohttp

async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def fetch_multiple(urls):
    tasks = [fetch_data(url) for url in urls]
    return await asyncio.gather(*tasks)

# Running async code
async def main():
    data = await fetch_data("https://api.example.com/data")
    print(data)
    
    results = await fetch_multiple([
        "https://api.example.com/users",
        "https://api.example.com/posts"
    ])
    print(results)

# Python 3.7+
asyncio.run(main())`,
        targetCode: `using System.Net.Http;
using System.Threading.Tasks;

public async Task<string> FetchData(string url)
{
    using (var client = new HttpClient())
    {
        return await client.GetStringAsync(url);
    }
}

public async Task<string[]> FetchMultiple(string[] urls)
{
    var tasks = urls.Select(url => FetchData(url));
    return await Task.WhenAll(tasks);
}

// Using async methods
public async Task Main()
{
    var data = await FetchData("https://api.example.com/data");
    Console.WriteLine(data);
    
    var results = await FetchMultiple(new[] {
        "https://api.example.com/users",
        "https://api.example.com/posts"
    });
    Console.WriteLine(string.Join(", ", results));
}

// Entry point for console app
public static async Task Main(string[] args)
{
    await new Program().Main();
}`
      },
      {
        topic: 'Error Handling',
        description: 'Exception handling patterns',
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

# Context manager for resource handling
with open('file.txt', 'r') as f:
    content = f.read()
    # File automatically closed`,
        targetCode: `public double? Divide(double a, double b)
{
    try
    {
        double result = a / b;
        return result;
    }
    catch (DivideByZeroException)
    {
        Console.WriteLine("Cannot divide by zero!");
        return null;
    }
    catch (Exception e)
    {
        Console.WriteLine($"An error occurred: {e.Message}");
        throw;
    }
    finally
    {
        Console.WriteLine("Division operation completed");
    }
}

// Custom exception
public class ValidationException : Exception
{
    public ValidationException(string message) : base(message)
    {
    }
}

// Using statement for resource handling (IDisposable)
using (var reader = new StreamReader("file.txt"))
{
    string content = reader.ReadToEnd();
    // File automatically closed
}

// Modern using declaration (C# 8.0+)
using var reader = new StreamReader("file.txt");
string content = reader.ReadToEnd();
// Disposed at end of scope`
      }
    ],
    commonPitfalls: [
      {
        title: 'Static Typing',
        description: 'C# requires explicit type declarations',
        sourceExample: `data = get_data()  # Type inferred at runtime
result = process(data)`,
        targetExample: `// Must declare types
UserData data = GetData();
ProcessedResult result = Process(data);

// Or use var for type inference
var data = GetData();  // Type still checked at compile time`,
        correctApproach: 'Always provide type information, either explicitly or through inference'
      },
      {
        title: 'Indentation vs Braces',
        description: 'C# uses braces for code blocks',
        sourceExample: `if condition:
    do_something()
    do_another_thing()`,
        targetExample: `if (condition)
{
    DoSomething();
    DoAnotherThing();
}`,
        correctApproach: 'Use braces {} and semicolons; for C# code structure'
      },
      {
        title: 'Naming Conventions',
        description: 'Different casing conventions',
        sourceExample: `def get_user_name():
    return user_name

class my_class:
    pass`,
        targetExample: `public string GetUserName()
{
    return userName;
}

public class MyClass
{
}`,
        correctApproach: 'Use PascalCase for methods and classes, camelCase for variables'
      },
      {
        title: 'None vs null',
        description: 'Different null representations',
        sourceExample: `value = None
if value is None:
    print("Value is None")`,
        targetExample: `object value = null;
if (value == null)
{
    Console.WriteLine("Value is null");
}

// Null-conditional operator
string result = value?.ToString();`,
        correctApproach: 'Use null (lowercase) and consider null-conditional operators'
      },
      {
        title: 'Boolean Values',
        description: 'Different boolean representations',
        sourceExample: `is_valid = True
is_empty = False`,
        targetExample: `bool isValid = true;  // lowercase
bool isEmpty = false;  // lowercase`,
        correctApproach: 'Use lowercase true/false in C#'
      }
    ],
    keyDifferences: [
      {
        topic: 'Type System',
        description: 'Static vs dynamic typing',
        sourceApproach: 'Python is dynamically typed with optional type hints',
        targetApproach: 'C# is statically typed with strong compile-time checking'
      },
      {
        topic: 'Compilation',
        description: 'Interpreted vs compiled',
        sourceApproach: 'Python is interpreted, runs directly from source',
        targetApproach: 'C# compiles to IL bytecode, runs on .NET runtime'
      },
      {
        topic: 'Memory Management',
        description: 'Garbage collection approaches',
        sourceApproach: 'Python uses reference counting + cycle detection',
        targetApproach: 'C# uses generational garbage collection on .NET'
      },
      {
        topic: 'Platform',
        description: 'Runtime environments',
        sourceApproach: 'Python runs on various platforms with CPython interpreter',
        targetApproach: 'C# runs on .NET runtime (cross-platform with .NET Core)'
      },
      {
        topic: 'Performance',
        description: 'Execution characteristics',
        sourceApproach: 'Python prioritizes developer productivity over raw performance',
        targetApproach: 'C# offers near-native performance with JIT compilation'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'Django',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate

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
from django.views.generic import ListView, CreateView
from .models import User
from .forms import UserForm

class UserListView(ListView):
    model = User
    template_name = 'users/list.html'
    context_object_name = 'users'

class UserCreateView(CreateView):
    model = User
    form_class = UserForm
    template_name = 'users/create.html'
    success_url = '/users/'

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
        fields = ['name', 'email']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
        }`,
          strengths: [
            'Batteries included framework',
            'Powerful admin interface',
            'Built-in ORM with migrations',
            'Excellent security features',
            'Class-based and function views'
          ],
          ecosystem: ['pip', 'Django ORM', 'Django Admin', 'Django REST Framework', 'Celery']
        },
        targetFramework: {
          name: 'ASP.NET Core MVC',
          setupCode: `# Create new MVC project
dotnet new mvc -n MyProject
cd MyProject

# Add Entity Framework Core
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools

# Create initial migration
dotnet ef migrations add InitialCreate
dotnet ef database update

# Run the application
dotnet run

# Or use Visual Studio to create and run`,
          basicExample: `// Models/User.cs
using System.ComponentModel.DataAnnotations;

namespace MyProject.Models
{
    public class User
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(255)]
        public string Name { get; set; }
        
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}

// Controllers/UsersController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyProject.Data;
using MyProject.Models;

namespace MyProject.Controllers
{
    public class UsersController : Controller
    {
        private readonly ApplicationDbContext _context;
        
        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        public async Task<IActionResult> Index()
        {
            var users = await _context.Users.ToListAsync();
            return View(users);
        }
        
        public IActionResult Create()
        {
            return View();
        }
        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(User user)
        {
            if (ModelState.IsValid)
            {
                _context.Add(user);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }
    }
}

// Data/ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;
using MyProject.Models;

namespace MyProject.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<User> Users { get; set; }
    }
}

// Program.cs (minimal hosting model)
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();`,
          strengths: [
            'High-performance framework',
            'Strong typing and IntelliSense',
            'Built-in dependency injection',
            'Cross-platform',
            'Excellent tooling'
          ],
          ecosystem: ['NuGet', 'Entity Framework Core', 'Razor Views', 'Identity', 'SignalR']
        },
        migrationTips: [
          'Both follow MVC pattern with similar concepts',
          'Entity Framework Core similar to Django ORM',
          'Razor views replace Django templates',
          'Dependency injection is built-in like Django apps',
          'Migrations work similarly in both frameworks'
        ],
        commonPitfalls: [
          'C# requires explicit type declarations',
          'Different template syntax (Razor vs Django)',
          'Async/await is more prevalent in ASP.NET Core',
          'URL routing syntax differs',
          'Static files handling is different'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'FastAPI',
          setupCode: `# Install FastAPI
pip install fastapi uvicorn[standard] sqlalchemy

# Create main.py
touch main.py

# Run development server
uvicorn main:app --reload

# Generate OpenAPI docs automatically at /docs`,
          basicExample: `# main.py
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime
from sqlalchemy.orm import Session

app = FastAPI(title="User API", version="1.0.0")

# Pydantic models for validation
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

# In-memory storage for demo
users_db = []
user_id_counter = 1

@app.get("/users", response_model=List[User])
async def get_users(skip: int = 0, limit: int = 100):
    return users_db[skip : skip + limit]

@app.post("/users", response_model=User, status_code=201)
async def create_user(user: UserCreate):
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
async def get_user(user_id: int):
    user = next((u for u in users_db if u.id == user_id), None)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now()}`,
          strengths: [
            'Modern async framework',
            'Automatic API documentation',
            'Type hints and validation',
            'High performance',
            'Built on standards (OpenAPI, JSON Schema)'
          ],
          ecosystem: ['pip', 'Pydantic', 'SQLAlchemy', 'Alembic', 'pytest']
        },
        targetFramework: {
          name: 'ASP.NET Core Minimal APIs',
          setupCode: `# Create new Web API project
dotnet new webapi -n ApiProject --use-minimal-apis
cd ApiProject

# Add packages
dotnet add package Microsoft.EntityFrameworkCore.InMemory
dotnet add package FluentValidation.AspNetCore

# Run the application
dotnet run

# Swagger UI available at /swagger`,
          basicExample: `// Program.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "User API", Version = "v1.0.0" });
});

// In-memory database for demo
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("UsersDb"));

var app = builder.Build();

// Configure pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// API endpoints
app.MapGet("/users", async (AppDbContext db, [FromQuery] int skip = 0, [FromQuery] int limit = 100) =>
{
    var users = await db.Users
        .Skip(skip)
        .Take(limit)
        .ToListAsync();
    
    return Results.Ok(users);
})
.WithName("GetUsers")
.WithOpenApi();

app.MapPost("/users", async (UserCreateRequest request, AppDbContext db) =>
{
    // Validate
    if (!MiniValidator.TryValidate(request, out var errors))
    {
        return Results.ValidationProblem(errors);
    }
    
    // Check if email exists
    if (await db.Users.AnyAsync(u => u.Email == request.Email))
    {
        return Results.BadRequest(new { error = "Email already registered" });
    }
    
    // Create user
    var user = new User
    {
        Name = request.Name,
        Email = request.Email,
        CreatedAt = DateTime.UtcNow
    };
    
    db.Users.Add(user);
    await db.SaveChangesAsync();
    
    return Results.Created($"/users/{user.Id}", user);
})
.WithName("CreateUser")
.WithOpenApi();

app.MapGet("/users/{id:int}", async (int id, AppDbContext db) =>
{
    var user = await db.Users.FindAsync(id);
    
    return user is not null 
        ? Results.Ok(user) 
        : Results.NotFound(new { error = "User not found" });
})
.WithName("GetUser")
.WithOpenApi();

app.MapGet("/health", () => new 
{ 
    status = "healthy", 
    timestamp = DateTime.UtcNow 
})
.WithName("HealthCheck")
.WithOpenApi();

app.Run();

// Models
public class User
{
    public int Id { get; set; }
    
    [Required]
    [StringLength(255)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;
    
    public DateTime CreatedAt { get; set; }
}

public class UserCreateRequest
{
    [Required]
    [StringLength(255)]
    public string Name { get; set; } = string.Empty;
    
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;
}

// Database context
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    
    public DbSet<User> Users { get; set; }
}`,
          strengths: [
            'Minimal boilerplate',
            'High performance',
            'Built-in OpenAPI support',
            'Native AOT compilation support',
            'Simple and clean syntax'
          ],
          ecosystem: ['NuGet', 'Entity Framework Core', 'FluentValidation', 'Serilog', 'MediatR']
        },
        migrationTips: [
          'Both use decorator/attribute-based routing',
          'Pydantic models similar to C# DTOs with validation',
          'Both generate OpenAPI documentation automatically',
          'async/await patterns are similar',
          'Dependency injection works similarly'
        ],
        commonPitfalls: [
          'C# requires explicit type declarations',
          'Different validation approaches',
          'Entity Framework vs SQLAlchemy differences',
          'Null handling is different',
          'Exception handling patterns differ'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'pytest',
          setupCode: `# Install pytest
pip install pytest pytest-cov pytest-mock pytest-asyncio

# Create test file
touch test_user.py

# Run tests
pytest

# Run with coverage
pytest --cov=src

# Run specific test
pytest test_user.py::test_user_creation`,
          basicExample: `# test_user.py
import pytest
from user import User, UserService, UserRepository
from datetime import datetime

class TestUser:
    def setup_method(self):
        """Setup for each test method"""
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
        ("Very Long Name That Exceeds Limit", False)
    ])
    def test_name_validation(self, name, expected):
        user = User(name=name, email="test@example.com")
        assert user.is_valid_name() == expected
    
    def test_exception_raised(self):
        with pytest.raises(ValueError, match="Email cannot be empty"):
            User(name="John", email="")
    
    @pytest.fixture
    def mock_repository(self, mocker):
        """Fixture for mocked repository"""
        repo = mocker.Mock(spec=UserRepository)
        repo.save.return_value = self.user
        repo.find_by_id.return_value = self.user
        return repo
    
    def test_user_service_save(self, mock_repository):
        service = UserService(mock_repository)
        result = service.save_user(self.user)
        
        assert result == self.user
        mock_repository.save.assert_called_once_with(self.user)
    
    @pytest.mark.asyncio
    async def test_async_operation(self):
        """Test async functionality"""
        result = await self.user.async_validate()
        assert result is True

# conftest.py for shared fixtures
import pytest

@pytest.fixture(scope="session")
def test_db():
    """Database fixture"""
    db = create_test_database()
    yield db
    db.cleanup()

@pytest.fixture
def sample_users():
    """Sample user data"""
    return [
        User("John", "john@example.com"),
        User("Jane", "jane@example.com"),
        User("Bob", "bob@example.com")
    ]`,
          strengths: [
            'Simple and powerful',
            'Excellent fixtures system',
            'Parametrized testing',
            'Great plugin ecosystem',
            'Clear test output'
          ],
          ecosystem: ['pip', 'pytest-django', 'pytest-asyncio', 'pytest-mock', 'tox']
        },
        targetFramework: {
          name: 'xUnit + Moq',
          setupCode: `# Create test project
dotnet new xunit -n MyProject.Tests
cd MyProject.Tests

# Add reference to main project
dotnet add reference ../MyProject/MyProject.csproj

# Add testing packages
dotnet add package Moq
dotnet add package FluentAssertions
dotnet add package Microsoft.AspNetCore.Mvc.Testing

# Run tests
dotnet test

# Run with coverage
dotnet test --collect:"XPlat Code Coverage"`,
          basicExample: `// UserTests.cs
using Xunit;
using Moq;
using FluentAssertions;
using MyProject.Models;
using MyProject.Services;
using System;

public class UserTests
{
    private readonly User _user;
    
    public UserTests()
    {
        _user = new User { Name = "John", Email = "john@example.com" };
    }
    
    [Fact]
    public void User_Creation_ShouldSetProperties()
    {
        // Arrange & Act
        var user = new User { Name = "John", Email = "john@example.com" };
        
        // Assert
        user.Name.Should().Be("John");
        user.Email.Should().Be("john@example.com");
        user.Id.Should().NotBe(0);
    }
    
    [Fact]
    public void User_ValidEmail_ShouldReturnTrue()
    {
        // Act
        var result = _user.IsValidEmail("test@example.com");
        
        // Assert
        result.Should().BeTrue();
    }
    
    [Theory]
    [InlineData("John", true)]
    [InlineData("", false)]
    [InlineData("A", false)]
    [InlineData("Very Long Name That Exceeds Limit", false)]
    public void User_NameValidation_ShouldReturnExpectedResult(string name, bool expected)
    {
        // Arrange
        var user = new User { Name = name, Email = "test@example.com" };
        
        // Act
        var result = user.IsValidName();
        
        // Assert
        result.Should().Be(expected);
    }
    
    [Fact]
    public void User_EmptyEmail_ShouldThrowException()
    {
        // Arrange
        Action act = () => new User { Name = "John", Email = "" }.Validate();
        
        // Assert
        act.Should().Throw<ArgumentException>()
           .WithMessage("Email cannot be empty");
    }
    
    [Fact]
    public void UserService_Save_ShouldCallRepository()
    {
        // Arrange
        var mockRepository = new Mock<IUserRepository>();
        mockRepository.Setup(r => r.Save(It.IsAny<User>())).Returns(_user);
        
        var service = new UserService(mockRepository.Object);
        
        // Act
        var result = service.SaveUser(_user);
        
        // Assert
        result.Should().Be(_user);
        mockRepository.Verify(r => r.Save(_user), Times.Once);
    }
    
    [Fact]
    public async Task User_AsyncValidation_ShouldReturnTrue()
    {
        // Act
        var result = await _user.ValidateAsync();
        
        // Assert
        result.Should().BeTrue();
    }
}

// Integration test example
public class UserApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;
    private readonly HttpClient _client;
    
    public UserApiTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
        _client = _factory.CreateClient();
    }
    
    [Fact]
    public async Task GetUsers_ShouldReturnSuccessStatusCode()
    {
        // Act
        var response = await _client.GetAsync("/users");
        
        // Assert
        response.Should().BeSuccessful();
    }
    
    [Fact]
    public async Task CreateUser_WithValidData_ShouldReturnCreated()
    {
        // Arrange
        var user = new { Name = "John Doe", Email = "john@example.com" };
        
        // Act
        var response = await _client.PostAsJsonAsync("/users", user);
        
        // Assert
        response.StatusCode.Should().Be(HttpStatusCode.Created);
    }
}`,
          strengths: [
            'Modern .NET testing framework',
            'Theory tests for parameterized testing',
            'Excellent async support',
            'Strong IDE integration',
            'FluentAssertions for readable tests'
          ],
          ecosystem: ['NuGet', 'Moq', 'FluentAssertions', 'AutoFixture', 'Bogus']
        },
        migrationTips: [
          '[Fact] replaces test_ methods',
          '[Theory] with [InlineData] replaces @pytest.mark.parametrize',
          'Constructor replaces setup_method',
          'Moq replaces pytest-mock',
          'FluentAssertions provides readable assertions'
        ],
        commonPitfalls: [
          'Different naming conventions',
          'Class-based vs function-based tests',
          'Mock setup syntax differs',
          'Async test patterns differ',
          'Fixture scoping works differently'
        ]
      },
      {
        category: 'build',
        sourceFramework: {
          name: 'pip/setuptools',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate

# Install dependencies
pip install requests pandas numpy

# Save dependencies
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt

# Create setup.py for package
touch setup.py

# Build package
python setup.py sdist bdist_wheel

# Install package in dev mode
pip install -e .`,
          basicExample: `# setup.py
from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="mypackage",
    version="1.0.0",
    author="John Doe",
    author_email="john@example.com",
    description="A sample Python package",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/username/mypackage",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
    ],
    python_requires=">=3.8",
    install_requires=[
        "requests>=2.28.0",
        "pandas>=1.5.0",
        "numpy>=1.23.0",
    ],
    extras_require={
        "dev": [
            "pytest>=7.0",
            "black>=22.0",
            "flake8>=5.0",
        ],
    },
)

# pyproject.toml (modern approach)
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "mypackage"
version = "1.0.0"
authors = [{name = "John Doe", email = "john@example.com"}]
description = "A sample Python package"
readme = "README.md"
requires-python = ">=3.8"
dependencies = [
    "requests>=2.28.0",
    "pandas>=1.5.0",
    "numpy>=1.23.0",
]

[project.optional-dependencies]
dev = ["pytest", "black", "flake8"]`,
          strengths: [
            'Simple package management',
            'Virtual environments',
            'Easy dependency tracking',
            'PyPI integration',
            'Wide ecosystem'
          ],
          ecosystem: ['PyPI', 'virtualenv', 'pip-tools', 'poetry', 'pipenv']
        },
        targetFramework: {
          name: '.NET CLI/MSBuild',
          setupCode: `# Create new project
dotnet new console -n MyApp
cd MyApp

# Add package references
dotnet add package Newtonsoft.Json
dotnet add package Serilog

# Restore packages
dotnet restore

# Build project
dotnet build

# Run project
dotnet run

# Create solution file
dotnet new sln -n MySolution
dotnet sln add MyApp/MyApp.csproj

# Pack as NuGet package
dotnet pack -c Release

# Publish application
dotnet publish -c Release -o ./publish`,
          basicExample: `<!-- MyApp.csproj -->
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <LangVersion>latest</LangVersion>
    
    <!-- Package properties -->
    <PackageId>MyApp</PackageId>
    <Version>1.0.0</Version>
    <Authors>John Doe</Authors>
    <Company>MyCompany</Company>
    <Description>A sample .NET application</Description>
    <PackageProjectUrl>https://github.com/username/myapp</PackageProjectUrl>
    <RepositoryUrl>https://github.com/username/myapp</RepositoryUrl>
    <PackageTags>sample;demo</PackageTags>
    <GeneratePackageOnBuild>true</GeneratePackageOnBuild>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />
    <PackageReference Include="Serilog" Version="3.1.1" />
    <PackageReference Include="Serilog.Sinks.Console" Version="5.0.1" />
  </ItemGroup>

  <!-- Conditional references -->
  <ItemGroup Condition="'$(Configuration)' == 'Debug'">
    <PackageReference Include="Microsoft.Extensions.Logging.Debug" Version="8.0.0" />
  </ItemGroup>

</Project>

<!-- Directory.Build.props (shared properties) -->
<Project>
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <LangVersion>latest</LangVersion>
    <Nullable>enable</Nullable>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.SourceLink.GitHub" Version="8.0.0" PrivateAssets="All"/>
  </ItemGroup>
</Project>

<!-- NuGet.Config -->
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
    <add key="myget" value="https://www.myget.org/F/mycompany/api/v3/index.json" />
  </packageSources>
</configuration>`,
          strengths: [
            'Integrated build system',
            'Strong package versioning',
            'Multi-targeting support',
            'Solution management',
            'Cross-platform tooling'
          ],
          ecosystem: ['NuGet', 'MSBuild', 'dotnet CLI', 'Azure DevOps', 'GitHub Actions']
        },
        migrationTips: [
          '.csproj files replace setup.py',
          'PackageReference replaces requirements.txt',
          'dotnet CLI commands replace pip commands',
          'NuGet packages vs PyPI packages',
          'Solution files can group multiple projects'
        ],
        commonPitfalls: [
          'XML configuration vs Python/TOML',
          'Different versioning schemes',
          'Package restore vs pip install',
          'Build configurations (Debug/Release)',
          'Global tool installation differs'
        ]
      }
    ]
};