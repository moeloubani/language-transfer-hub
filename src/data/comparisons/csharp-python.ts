import type { LanguageComparison } from '../../types/language';

export const csharpPythonComparison: LanguageComparison = {
    sourceLanguage: 'C#',
    targetLanguage: 'Python',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Static typing to dynamic typing',
        sourceCode: `string name = "John";
int age = 25;
bool isActive = true;
List<string> items = new List<string>();`,
        targetCode: `name = "John"
age = 25
is_active = True
items = []`
      },
      {
        topic: 'Classes and Properties',
        description: 'OOP with different syntax',
        sourceCode: `public class Person {
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
    
    public override string ToString() {
        return $"Person(Name={name}, Age={age})";
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
        return f"Person(name={self._name}, age={self._age})"`
      }
    ],
    commonPitfalls: [
      {
        title: 'Indentation vs Braces',
        description: 'Code block structure',
        sourceExample: `if (condition) {
    DoSomething();
    DoAnotherThing();
}`,
        targetExample: `if condition:
    do_something()
    do_another_thing()`,
        correctApproach: 'Use consistent indentation in Python'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design goals',
        sourceApproach: 'C# emphasizes type safety and enterprise development',
        targetApproach: 'Python emphasizes simplicity and readability'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'ASP.NET Core',
          setupCode: `# Create new Web API project
dotnet new webapi -n MyApi
cd MyApi

# Add packages
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools

# Run the application
dotnet run

# Or with hot reload
dotnet watch run`,
          basicExample: `// Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseAuthorization();
app.MapControllers();
app.Run();

// Models/User.cs
public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

// Controllers/UsersController.cs
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private static List<User> users = new();
    
    [HttpGet]
    public ActionResult<IEnumerable<User>> GetUsers()
    {
        return Ok(users);
    }
    
    [HttpPost]
    public ActionResult<User> CreateUser(User user)
    {
        user.Id = users.Count + 1;
        users.Add(user);
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }
    
    [HttpGet("{id}")]
    public ActionResult<User> GetUser(int id)
    {
        var user = users.FirstOrDefault(u => u.Id == id);
        if (user == null) return NotFound();
        return Ok(user);
    }
}`,
          strengths: [
            'High performance',
            'Strong typing',
            'Built-in dependency injection',
            'Excellent tooling',
            'Cross-platform'
          ],
          ecosystem: ['NuGet', 'Entity Framework Core', 'SignalR', 'Blazor', 'gRPC']
        },
        targetFramework: {
          name: 'Django',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate

# Install Django
pip install django djangorestframework django-cors-headers

# Create project
django-admin startproject myproject
cd myproject
python manage.py startapp api

# Migrate and run
python manage.py migrate
python manage.py runserver`,
          basicExample: `# api/models.py
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

# api/serializers.py
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'created_at']

# api/views.py
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# myproject/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

# settings.py additions
INSTALLED_APPS = [
    # ... default apps
    'rest_framework',
    'corsheaders',
    'api',
]

MIDDLEWARE = [
    # ... other middleware
    'corsheaders.middleware.CorsMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True  # For development only`,
          strengths: [
            'Batteries included',
            'Powerful ORM',
            'Admin interface',
            'Excellent documentation',
            'Rapid development'
          ],
          ecosystem: ['pip', 'Django REST Framework', 'Celery', 'Django Channels', 'pytest-django']
        },
        migrationTips: [
          'Django uses decorators instead of attributes',
          'URLs are configured separately from views',
          'Django ORM replaces Entity Framework',
          'Django admin provides built-in CRUD interface',
          'Migrations work similarly but with different commands'
        ],
        commonPitfalls: [
          'No compile-time type checking in Python',
          'Different project structure conventions',
          'Django settings.py replaces appsettings.json',
          'No built-in dependency injection container',
          'Different async/await patterns'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'ASP.NET Core Minimal APIs',
          setupCode: `# Create minimal API project
dotnet new webapi -minimal -n MinimalApi
cd MinimalApi

# Add packages
dotnet add package FluentValidation.AspNetCore

# Run with hot reload
dotnet watch run`,
          basicExample: `// Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// In-memory storage
var users = new List<User>();

// Define endpoints
app.MapGet("/api/users", () => users)
    .WithName("GetUsers")
    .WithOpenApi();

app.MapPost("/api/users", (User user) =>
{
    user.Id = users.Count + 1;
    user.CreatedAt = DateTime.UtcNow;
    users.Add(user);
    return Results.Created($"/api/users/{user.Id}", user);
})
.WithName("CreateUser")
.WithOpenApi();

app.MapGet("/api/users/{id}", (int id) =>
{
    var user = users.FirstOrDefault(u => u.Id == id);
    return user is not null ? Results.Ok(user) : Results.NotFound();
})
.WithName("GetUser")
.WithOpenApi();

app.Run();

// Models
public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}`,
          strengths: [
            'Minimal boilerplate',
            'High performance',
            'Easy to learn',
            'Built-in OpenAPI support',
            'Lambda-style endpoints'
          ],
          ecosystem: ['NuGet', 'FluentValidation', 'MediatR', 'Dapper', 'Serilog']
        },
        targetFramework: {
          name: 'FastAPI',
          setupCode: `# Install FastAPI
pip install fastapi uvicorn[standard] python-multipart

# Create main.py
touch main.py

# Run the application
uvicorn main:app --reload

# View API docs at http://localhost:8000/docs`,
          basicExample: `# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import List, Optional

app = FastAPI(
    title="User API",
    description="A simple user management API",
    version="1.0.0"
)

# Models
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

# In-memory storage
users = []

# Endpoints
@app.get("/api/users", response_model=List[User], tags=["users"])
async def get_users():
    """Get all users"""
    return users

@app.post("/api/users", response_model=User, status_code=201, tags=["users"])
async def create_user(user: UserCreate):
    """Create a new user"""
    new_user = User(
        id=len(users) + 1,
        name=user.name,
        email=user.email,
        created_at=datetime.utcnow()
    )
    users.append(new_user.dict())
    return new_user

@app.get("/api/users/{user_id}", response_model=User, tags=["users"])
async def get_user(user_id: int):
    """Get a specific user by ID"""
    user = next((u for u in users if u["id"] == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Health check
@app.get("/health")
async def health_check():
    return {"status": "healthy"}`,
          strengths: [
            'Automatic API documentation',
            'Type validation with Pydantic',
            'High performance',
            'Modern Python features',
            'Async/await support'
          ],
          ecosystem: ['pip', 'Pydantic', 'SQLAlchemy', 'Alembic', 'Celery']
        },
        migrationTips: [
          'Both have automatic OpenAPI/Swagger documentation',
          'Pydantic models replace C# DTOs/records',
          'Decorators replace MapGet/MapPost methods',
          'Type hints provide similar validation',
          'Both support dependency injection patterns'
        ],
        commonPitfalls: [
          'Python type hints are not enforced at runtime',
          'Different async patterns (async/await syntax differs)',
          'No built-in authentication like ASP.NET Core Identity',
          'Import system vs namespace differences',
          'Different error handling patterns'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'xUnit + Moq',
          setupCode: `# Create test project
dotnet new xunit -n MyApi.Tests
cd MyApi.Tests

# Add packages
dotnet add package Moq
dotnet add package FluentAssertions
dotnet add package Microsoft.AspNetCore.Mvc.Testing

# Reference main project
dotnet add reference ../MyApi/MyApi.csproj

# Run tests
dotnet test`,
          basicExample: `// UserServiceTests.cs
using Xunit;
using Moq;
using FluentAssertions;

public class UserServiceTests
{
    private readonly Mock<IUserRepository> _mockRepository;
    private readonly UserService _userService;
    
    public UserServiceTests()
    {
        _mockRepository = new Mock<IUserRepository>();
        _userService = new UserService(_mockRepository.Object);
    }
    
    [Fact]
    public async Task CreateUser_ValidUser_ReturnsCreatedUser()
    {
        // Arrange
        var userDto = new UserDto { Name = "John", Email = "john@example.com" };
        var expectedUser = new User { Id = 1, Name = "John", Email = "john@example.com" };
        
        _mockRepository.Setup(x => x.CreateAsync(It.IsAny<User>()))
            .ReturnsAsync(expectedUser);
        
        // Act
        var result = await _userService.CreateUserAsync(userDto);
        
        // Assert
        result.Should().NotBeNull();
        result.Name.Should().Be("John");
        _mockRepository.Verify(x => x.CreateAsync(It.IsAny<User>()), Times.Once);
    }
    
    [Theory]
    [InlineData("")]
    [InlineData(" ")]
    [InlineData("invalid-email")]
    public async Task CreateUser_InvalidEmail_ThrowsValidationException(string email)
    {
        // Arrange
        var userDto = new UserDto { Name = "John", Email = email };
        
        // Act & Assert
        await Assert.ThrowsAsync<ValidationException>(
            () => _userService.CreateUserAsync(userDto)
        );
    }
}

// Integration Tests
public class UsersControllerIntegrationTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;
    private readonly HttpClient _client;
    
    public UsersControllerIntegrationTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
        _client = _factory.CreateClient();
    }
    
    [Fact]
    public async Task GetUsers_ReturnsSuccessAndCorrectContentType()
    {
        // Act
        var response = await _client.GetAsync("/api/users");
        
        // Assert
        response.EnsureSuccessStatusCode();
        response.Content.Headers.ContentType.ToString()
            .Should().Be("application/json; charset=utf-8");
    }
}`,
          strengths: [
            'Strongly typed mocking',
            'Rich assertion libraries',
            'Parallel test execution',
            'Theory/data-driven tests',
            'Excellent IDE integration'
          ],
          ecosystem: ['xUnit', 'NUnit', 'MSTest', 'Moq', 'FluentAssertions']
        },
        targetFramework: {
          name: 'pytest',
          setupCode: `# Install testing packages
pip install pytest pytest-asyncio pytest-mock pytest-cov httpx

# Create test file
touch test_user_service.py

# Run tests
pytest
pytest -v --cov=app
pytest -k "test_create"  # Run specific tests`,
          basicExample: `# test_user_service.py
import pytest
from unittest.mock import Mock, AsyncMock
from datetime import datetime
from app.services import UserService
from app.models import User, UserCreate

class TestUserService:
    @pytest.fixture
    def mock_repository(self):
        return Mock()
    
    @pytest.fixture
    def user_service(self, mock_repository):
        return UserService(mock_repository)
    
    @pytest.mark.asyncio
    async def test_create_user_valid_user_returns_created_user(
        self, user_service, mock_repository
    ):
        # Arrange
        user_data = UserCreate(name="John", email="john@example.com")
        expected_user = User(
            id=1, 
            name="John", 
            email="john@example.com",
            created_at=datetime.utcnow()
        )
        
        mock_repository.create = AsyncMock(return_value=expected_user)
        
        # Act
        result = await user_service.create_user(user_data)
        
        # Assert
        assert result is not None
        assert result.name == "John"
        mock_repository.create.assert_called_once()
    
    @pytest.mark.parametrize("email", ["", " ", "invalid-email"])
    @pytest.mark.asyncio
    async def test_create_user_invalid_email_raises_validation_error(
        self, user_service, email
    ):
        # Arrange
        user_data = {"name": "John", "email": email}
        
        # Act & Assert
        with pytest.raises(ValueError, match="Invalid email"):
            await user_service.create_user(user_data)

# Integration tests with FastAPI
from fastapi.testclient import TestClient
from app.main import app

class TestUsersAPI:
    @pytest.fixture
    def client(self):
        return TestClient(app)
    
    def test_get_users_returns_success(self, client):
        # Act
        response = client.get("/api/users")
        
        # Assert
        assert response.status_code == 200
        assert response.headers["content-type"] == "application/json"
    
    def test_create_user_returns_created_user(self, client):
        # Arrange
        user_data = {"name": "John", "email": "john@example.com"}
        
        # Act
        response = client.post("/api/users", json=user_data)
        
        # Assert
        assert response.status_code == 201
        data = response.json()
        assert data["name"] == "John"
        assert data["email"] == "john@example.com"
        assert "id" in data

# Async integration tests
import httpx
import pytest_asyncio

@pytest_asyncio.fixture
async def async_client():
    async with httpx.AsyncClient(app=app, base_url="http://test") as client:
        yield client

@pytest.mark.asyncio
async def test_async_endpoint(async_client):
    response = await async_client.get("/api/users")
    assert response.status_code == 200`,
          strengths: [
            'Simple and pythonic syntax',
            'Powerful fixtures system',
            'Easy parameterization',
            'Great async support',
            'Rich plugin ecosystem'
          ],
          ecosystem: ['pytest-django', 'pytest-asyncio', 'pytest-mock', 'hypothesis', 'pytest-benchmark']
        },
        migrationTips: [
          'pytest fixtures replace constructor setup',
          'assert statements replace assertion methods',
          '@pytest.mark.parametrize replaces [Theory] and [InlineData]',
          'Mock from unittest.mock replaces Moq',
          'TestClient replaces WebApplicationFactory'
        ],
        commonPitfalls: [
          'No compile-time type checking for mocks',
          'Different test discovery (test_ prefix required)',
          'Import paths can be tricky',
          'No built-in assertion fluency like FluentAssertions',
          'Async testing requires explicit markers'
        ]
      },
      {
        category: 'build',
        sourceFramework: {
          name: '.NET CLI/MSBuild',
          setupCode: `# Create solution
dotnet new sln -n MySolution

# Create projects
dotnet new webapi -n MyApi
dotnet new xunit -n MyApi.Tests

# Add projects to solution
dotnet sln add MyApi/MyApi.csproj
dotnet sln add MyApi.Tests/MyApi.Tests.csproj

# Build
dotnet build

# Run tests
dotnet test

# Publish
dotnet publish -c Release -o ./publish`,
          basicExample: `<!-- MyApi.csproj -->
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net7.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.OpenApi" Version="7.0.0" />
    <PackageReference Include="Swashbuckle.AspNetCore" Version="6.4.0" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="7.0.0" />
  </ItemGroup>
</Project>

// global.json (SDK version)
{
  "sdk": {
    "version": "7.0.100"
  }
}

// Directory.Build.props (shared properties)
<Project>
  <PropertyGroup>
    <AnalysisLevel>latest</AnalysisLevel>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
  </PropertyGroup>
</Project>

# .NET CLI commands
dotnet new                    # Create new project
dotnet restore               # Restore packages
dotnet build                 # Build project
dotnet test                  # Run tests
dotnet run                   # Run application
dotnet publish              # Publish for deployment
dotnet pack                 # Create NuGet package`,
          strengths: [
            'Integrated build system',
            'Package management (NuGet)',
            'Multi-platform support',
            'Solution/project organization',
            'Strong versioning'
          ],
          ecosystem: ['NuGet', 'Azure DevOps', 'GitHub Actions', 'Cake', 'NUKE']
        },
        targetFramework: {
          name: 'pip/setuptools',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate

# Create project structure
mkdir myproject
cd myproject
touch setup.py setup.cfg pyproject.toml
touch requirements.txt requirements-dev.txt

# Install in development mode
pip install -e .

# Install dev dependencies
pip install -r requirements-dev.txt`,
          basicExample: `# pyproject.toml (modern approach)
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "myproject"
version = "1.0.0"
description = "A sample Python project"
readme = "README.md"
authors = [
    {name = "Your Name", email = "your.email@example.com"}
]
requires-python = ">=3.8"
dependencies = [
    "fastapi>=0.95.0",
    "uvicorn[standard]>=0.21.0",
    "sqlalchemy>=2.0.0",
    "pydantic>=1.10.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0.0",
    "pytest-asyncio>=0.21.0",
    "black>=23.0.0",
    "mypy>=1.0.0",
    "ruff>=0.0.261",
]

[project.scripts]
myproject = "myproject.cli:main"

[tool.setuptools.packages.find]
where = ["src"]

# setup.cfg (alternative configuration)
[metadata]
name = myproject
version = 1.0.0
author = Your Name
author_email = your.email@example.com

[options]
packages = find:
python_requires = >=3.8
install_requires =
    fastapi>=0.95.0
    uvicorn[standard]>=0.21.0

[options.extras_require]
dev =
    pytest>=7.0.0
    black>=23.0.0

# requirements.txt
fastapi>=0.95.0
uvicorn[standard]>=0.21.0
sqlalchemy>=2.0.0
pydantic>=1.10.0

# requirements-dev.txt
-r requirements.txt
pytest>=7.0.0
pytest-asyncio>=0.21.0
black>=23.0.0
mypy>=1.0.0
ruff>=0.0.261

# Makefile (optional, for convenience)
.PHONY: install test lint format

install:
\tpip install -e .[dev]

test:
\tpytest

lint:
\truff check .
\tmypy src/

format:
\tblack src/ tests/`,
          strengths: [
            'Simple dependency management',
            'Virtual environments',
            'Easy PyPI publishing',
            'Flexible configuration',
            'Standard Python tooling'
          ],
          ecosystem: ['PyPI', 'pip', 'poetry', 'pipenv', 'hatch']
        },
        migrationTips: [
          'requirements.txt is similar to PackageReference entries',
          'Virtual environments provide isolation like .NET project isolation',
          'pyproject.toml replaces .csproj for project metadata',
          'pip install replaces dotnet restore',
          'No built-in solution files - use workspace/monorepo tools'
        ],
        commonPitfalls: [
          'Must activate virtual environment before work',
          'No built-in project templates like dotnet new',
          'Different dependency resolution strategies',
          'No integrated build system like MSBuild',
          'Package naming uses hyphens, imports use underscores'
        ]
      }
    ]
};