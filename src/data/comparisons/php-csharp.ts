import type { LanguageComparison } from '../../types/language';

export const phpCsharpComparison: LanguageComparison = {
    sourceLanguage: 'PHP',
    targetLanguage: 'C#',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Strongly typed variable declarations',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;`,
        targetCode: `string name = "John";
int age = 25;
bool isActive = true;

// Type inference
var inferredName = "John";`
      },
      {
        topic: 'Arrays and Collections',
        description: 'Working with typed collections',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape";`,
        targetCode: `string[] fruits = {"apple", "banana", "orange"};
string first = fruits[0];

// Dynamic collections
List<string> fruitsList = new List<string> {"apple", "banana", "orange"};
fruitsList.Add("grape");`
      },
      {
        topic: 'Methods and Properties',
        description: 'Object-oriented programming',
        sourceCode: `class Person {
  private $name;
  
  public function __construct($name) {
    $this->name = $name;
  }
  
  public function getName() {
    return $this->name;
  }
  
  public function greet() {
    return "Hi, I'm " . $this->name;
  }
}`,
        targetCode: `public class Person {
    private string name;
    
    public Person(string name) {
        this.name = name;
    }
    
    public string Name {
        get { return this.name; }
        set { this.name = value; }
    }
    
    public string Greet() {
        return $"Hi, I'm {this.name}";
    }
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Static Typing',
        description: 'C# requires explicit types',
        sourceExample: `$data = getData();`,
        targetExample: `var data = GetData(); // or
UserData data = GetData();`,
        correctApproach: 'Declare types explicitly or use var for type inference'
      },
      {
        title: 'Naming Conventions',
        description: 'C# uses PascalCase for methods',
        sourceExample: `function getUserData() { }`,
        targetExample: `public UserData GetUserData() { }`,
        correctApproach: 'Use PascalCase for public methods and properties'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform',
        description: 'Runtime environment',
        sourceApproach: 'PHP runs on web servers',
        targetApproach: 'C# runs on .NET runtime, cross-platform'
      },
      {
        topic: 'Type Safety',
        description: 'Compile-time checking',
        sourceApproach: 'PHP has runtime type checking',
        targetApproach: 'C# has compile-time type checking'
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
use App\\Http\\Controllers\\UserController;

Route::resource('users', UserController::class);

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
        return view('users.index', compact('users'));
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'Name' => 'required|string|max:255',
            'Email' => 'required|string|email|unique:users',
        ]);
        
        User::create($validated);
        return redirect()->route('users.index');
    }
}

// app/Models/User.php
<?php
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    protected $fillable = ['Name', 'Email'];
}`,
          strengths: [
            'Full-featured MVC framework',
            'Eloquent ORM built-in',
            'Artisan CLI tools',
            'Rich ecosystem',
            'Excellent documentation'
          ],
          ecosystem: ['Composer', 'Eloquent ORM', 'Blade Templates', 'Artisan CLI', 'Laravel Mix']
        },
        targetFramework: {
          name: 'ASP.NET Core MVC',
          setupCode: `# Install .NET SDK first
# Create new ASP.NET Core MVC project
dotnet new mvc -n MyApp
cd MyApp

# Add Entity Framework Core
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools

# Restore packages
dotnet restore

# Run the application
dotnet run`,
          basicExample: `// Controllers/UserController.cs
using Microsoft.AspNetCore.Mvc;
using MyApp.Models;
using MyApp.Data;

namespace MyApp.Controllers
{
    public class UserController : Controller
    {
        private readonly ApplicationDbContext _context;
        
        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        public IActionResult Index()
        {
            var users = _context.Users.ToList();
            return View(users);
        }
        
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }
        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(User user)
        {
            if (ModelState.IsValid)
            {
                _context.Users.Add(user);
                _context.SaveChanges();
                return RedirectToAction(nameof(Index));
            }
            return View(user);
        }
        
        public IActionResult Details(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }
    }
}

// Models/User.cs
using System.ComponentModel.DataAnnotations;

namespace MyApp.Models
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
        
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}

// Data/ApplicationDbContext.cs
using Microsoft.EntityFrameworkCore;
using MyApp.Models;

namespace MyApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<User> Users { get; set; }
    }
}`,
          strengths: [
            'High-performance framework',
            'Strong typing and IntelliSense',
            'Built-in dependency injection',
            'Cross-platform',
            'Rich middleware pipeline'
          ],
          ecosystem: ['NuGet', 'Entity Framework Core', 'Razor Views', '.NET CLI', 'Visual Studio']
        },
        migrationTips: [
          'ASP.NET Core MVC follows similar pattern as Laravel MVC',
          'Entity Framework Core is comparable to Eloquent ORM',
          'Dependency injection is built into ASP.NET Core',
          'Razor views replace Blade templates',
          'NuGet replaces Composer for package management'
        ],
        commonPitfalls: [
          'C# requires explicit type declarations vs PHP dynamic typing',
          'Different naming conventions (PascalCase vs camelCase)',
          'Strong typing requires more careful data model design',
          'Different attribute system vs Laravel annotations',
          'Async/await patterns more prominent in C#'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'Laravel API',
          setupCode: `# Create Laravel project with API focus
laravel new api-project
cd api-project

# Install Laravel Sanctum for API authentication
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\\Sanctum\\SanctumServiceProvider"
php artisan migrate

# Generate API controller
php artisan make:controller Api/UserController --api --resource`,
          basicExample: `<?php
// routes/api.php
use App\\Http\\Controllers\\Api\\UserController;

Route::apiResource('users', UserController::class);

// app/Http/Controllers/Api/UserController.php
<?php
namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Models\\User;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\JsonResponse;

class UserController extends Controller
{
    public function index(): JsonResponse
    {
        $users = User::all();
        return response()->json($users);
    }
    
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
        ]);
        
        $user = User::create($validated);
        return response()->json($user, 201);
    }
    
    public function show(User $user): JsonResponse
    {
        return response()->json($user);
    }
}`,
          strengths: [
            'Built-in API resource routing',
            'Request validation',
            'Eloquent API resources',
            'Laravel Sanctum for auth',
            'Rate limiting built-in'
          ],
          ecosystem: ['Laravel Sanctum', 'API Resources', 'Request Validation', 'Rate Limiting', 'CORS']
        },
        targetFramework: {
          name: 'ASP.NET Core Web API',
          setupCode: `# Create new Web API project
dotnet new webapi -n ApiProject
cd ApiProject

# Add Entity Framework Core
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.InMemory
dotnet add package Microsoft.EntityFrameworkCore.Tools

# Run the application
dotnet run`,
          basicExample: `// Controllers/UsersController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiProject.Models;
using ApiProject.Data;
using System.ComponentModel.DataAnnotations;

namespace ApiProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        
        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            
            if (user == null)
            {
                return NotFound();
            }
            
            return user;
        }
        
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(CreateUserRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var user = new User
            {
                Name = request.Name,
                Email = request.Email
            };
            
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UpdateUserRequest request)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            
            user.Name = request.Name;
            user.Email = request.Email;
            
            await _context.SaveChangesAsync();
            
            return NoContent();
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            
            return NoContent();
        }
    }
}

// Models/User.cs
namespace ApiProject.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}

// Models/Requests.cs
using System.ComponentModel.DataAnnotations;

namespace ApiProject.Models
{
    public class CreateUserRequest
    {
        [Required]
        [StringLength(255)]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
    
    public class UpdateUserRequest
    {
        [Required]
        [StringLength(255)]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}`,
          strengths: [
            'Built for async operations',
            'Strong typing for APIs',
            'Built-in model validation',
            'OpenAPI/Swagger integration',
            'High performance'
          ],
          ecosystem: ['Swagger/OpenAPI', 'Entity Framework Core', 'Data Annotations', 'JWT Authentication', 'CORS']
        },
        migrationTips: [
          '[ApiController] attribute provides automatic model validation',
          'Data annotations replace Laravel validation rules',
          'Async/await pattern is standard in ASP.NET Core',
          'ActionResult<T> provides type-safe responses',
          'Built-in dependency injection replaces Laravel container'
        ],
        commonPitfalls: [
          'C# async/await vs PHP synchronous operations',
          'Different HTTP status code handling',
          'Strong typing requires more detailed request/response models',
          'Different middleware pipeline configuration',
          'Entity Framework migrations vs Laravel migrations'
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
            ['', false]
        ];
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
          name: 'xUnit.net',
          setupCode: `# Create test project
dotnet new xunit -n MyApp.Tests
cd MyApp.Tests

# Add reference to main project
dotnet add reference ../MyApp/MyApp.csproj

# Add testing packages
dotnet add package Microsoft.AspNetCore.Mvc.Testing
dotnet add package Moq

# Run tests
dotnet test`,
          basicExample: `// UserTest.cs
using Xunit;
using MyApp.Models;

namespace MyApp.Tests
{
    public class UserTest
    {
        private readonly User _user;
        
        public UserTest()
        {
            _user = new User { Name = "John", Email = "john@example.com" };
        }
        
        [Fact]
        public void User_Creation_ShouldSetProperties()
        {
            // Arrange & Act
            var user = new User { Name = "John", Email = "john@example.com" };
            
            // Assert
            Assert.Equal("John", user.Name);
            Assert.Equal("john@example.com", user.Email);
        }
        
        [Fact]
        public void User_ValidEmail_ShouldReturnTrue()
        {
            // Arrange
            var validEmail = "test@example.com";
            
            // Act
            var isValid = _user.IsValidEmail(validEmail);
            
            // Assert
            Assert.True(isValid);
        }
        
        [Fact]
        public void User_InvalidEmail_ShouldReturnFalse()
        {
            // Arrange
            var invalidEmail = "invalid-email";
            
            // Act
            var isValid = _user.IsValidEmail(invalidEmail);
            
            // Assert
            Assert.False(isValid);
        }
        
        [Theory]
        [InlineData("John", true)]
        [InlineData("", false)]
        [InlineData("A", false)]
        [InlineData("VeryLongNameThatExceedsTheLimit", false)]
        public void User_NameValidation_ShouldReturnExpectedResult(string name, bool expected)
        {
            // Arrange
            var user = new User { Name = name, Email = "test@example.com" };
            
            // Act
            var isValid = user.IsValidName();
            
            // Assert
            Assert.Equal(expected, isValid);
        }
        
        [Fact]
        public void User_EmptyEmail_ShouldThrowException()
        {
            // Arrange & Act & Assert
            var exception = Assert.Throws<ArgumentException>(() => 
                new User { Name = "John", Email = "" }.ValidateEmail());
                
            Assert.Equal("Email cannot be empty", exception.Message);
        }
    }
}

// Integration test example
// UsersControllerIntegrationTest.cs
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using Xunit;

namespace MyApp.Tests.Integration
{
    public class UsersControllerIntegrationTest : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;
        
        public UsersControllerIntegrationTest(WebApplicationFactory<Program> factory)
        {
            _client = factory.CreateClient();
        }
        
        [Fact]
        public async Task GetUsers_ShouldReturnSuccessStatusCode()
        {
            // Act
            var response = await _client.GetAsync("/api/users");
            
            // Assert
            response.EnsureSuccessStatusCode();
        }
        
        [Fact]
        public async Task CreateUser_WithValidData_ShouldReturnCreated()
        {
            // Arrange
            var user = new { Name = "John Doe", Email = "john@example.com" };
            var json = JsonSerializer.Serialize(user);
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            
            // Act
            var response = await _client.PostAsync("/api/users", content);
            
            // Assert
            Assert.Equal(System.Net.HttpStatusCode.Created, response.StatusCode);
        }
    }
}`,
          strengths: [
            'Modern .NET testing framework',
            'Theory tests with InlineData',
            'Excellent async support',
            'Strong IDE integration',
            'Parallel test execution'
          ],
          ecosystem: ['NuGet', 'Moq', 'FluentAssertions', 'AutoFixture', 'Coverlet']
        },
        migrationTips: [
          '[Fact] replaces PHPUnit test methods',
          '[Theory] and [InlineData] replace PHPUnit data providers',
          'Constructor injection replaces setUp() method',
          'Assert.Throws<T>() replaces expectException()',
          'Moq replaces PHPUnit mock objects'
        ],
        commonPitfalls: [
          'Different naming conventions (PascalCase vs snake_case)',
          'C# attributes vs PHPUnit docblock annotations',
          'Different assertion method names and signatures',
          'async/await testing patterns in C#',
          'Dependency injection testing setup differences'
        ]
      },
      {
        category: 'build',
        sourceFramework: {
          name: 'Composer',
          setupCode: `# Initialize composer.json
composer init

# Install dependencies
composer require guzzlehttp/guzzle
composer require --dev phpunit/phpunit

# Install dependencies from composer.json
composer install

# Update dependencies
composer update`,
          basicExample: `{
    "name": "example/myapp",
    "description": "My PHP application",
    "type": "project",
    "require": {
        "php": "^8.1",
        "guzzlehttp/guzzle": "^7.5",
        "monolog/monolog": "^3.0"
    },
    "require-dev": {
        "phpunit/phpunit": "^10.0",
        "squizlabs/php_codesniffer": "^3.7"
    },
    "autoload": {
        "psr-4": {
            "App\\\\": "src/"
        }
    },
    "scripts": {
        "test": "phpunit",
        "lint": "phpcs --standard=PSR12 src/"
    }
}`,
          strengths: [
            'PHP ecosystem standard',
            'PSR-4 autoloading',
            'Semantic versioning',
            'Lock file for reproducible builds',
            'Rich package repository'
          ],
          ecosystem: ['Packagist', 'PSR standards', 'Autoloading', 'Lock files', 'Scripts']
        },
        targetFramework: {
          name: 'NuGet/.NET CLI',
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

# Publish for deployment
dotnet publish -c Release`,
          basicExample: `<!-- MyApp.csproj -->
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />
    <PackageReference Include="Serilog" Version="3.0.1" />
    <PackageReference Include="Serilog.Sinks.Console" Version="4.1.0" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.7.1" />
    <PackageReference Include="xunit" Version="2.4.2" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.4.5" />
  </ItemGroup>

</Project>

<!-- Directory.Build.props (for solution-wide settings) -->
<Project>
  <PropertyGroup>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
    <WarningsAsErrors />
    <WarningsNotAsErrors>NU1701</WarningsNotAsErrors>
  </PropertyGroup>
</Project>

# Common .NET CLI commands:
# dotnet new sln -n MySolution
# dotnet sln add MyApp/MyApp.csproj
# dotnet add package Microsoft.EntityFrameworkCore
# dotnet remove package Newtonsoft.Json
# dotnet list package
# dotnet restore
# dotnet build --configuration Release
# dotnet test --verbosity normal
# dotnet publish --configuration Release --output ./publish`,
          strengths: [
            'Integrated with .NET ecosystem',
            'Strong package versioning',
            'Multi-targeting support',
            'Built-in dependency resolution',
            'Cross-platform tooling'
          ],
          ecosystem: ['NuGet.org', 'MSBuild', 'dotnet CLI', 'Package validation', 'Symbol packages']
        },
        migrationTips: [
          '.csproj files replace composer.json for dependency management',
          'PackageReference replaces require sections',
          'dotnet CLI replaces composer commands',
          'NuGet.org replaces Packagist as package repository',
          'MSBuild targets replace Composer scripts'
        ],
        commonPitfalls: [
          'XML project files vs JSON configuration',
          'Different package versioning schemes',
          'Strong-named assemblies vs simple PHP includes',
          'Different build output structure',
          'Global vs local tool installation differences'
        ]
      }
    ]
};