import type { LanguageComparison } from '../../types/language';

export const phpJavaComparison: LanguageComparison = {
    sourceLanguage: 'PHP',
    targetLanguage: 'Java',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Variable declaration with type safety',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;
$score = 95.5;`,
        targetCode: `String name = "John";
int age = 25;
boolean isActive = true;
double score = 95.5;`
      },
      {
        topic: 'Arrays and Collections',
        description: 'Working with arrays and lists',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape";
$count = count($fruits);

// Associative array
$person = ["name" => "John", "age" => 30];`,
        targetCode: `// Array (fixed size)
String[] fruits = {"apple", "banana", "orange"};
String first = fruits[0];
// Arrays have fixed size in Java

// ArrayList (dynamic)
ArrayList<String> fruitsList = new ArrayList<>();
fruitsList.add("apple");
fruitsList.add("banana");
fruitsList.add("grape");
int count = fruitsList.size();

// HashMap for key-value pairs
HashMap<String, Object> person = new HashMap<>();
person.put("name", "John");
person.put("age", 30);`
      },
      {
        topic: 'Functions and Methods',
        description: 'Method definition in classes',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}

function calculateArea($width, $height) {
  return $width * $height;
}

echo greet("John");`,
        targetCode: `public class Utils {
    public static String greet(String name, String greeting) {
        return greeting + ", " + name + "!";
    }
    
    // Method overloading for default parameter
    public static String greet(String name) {
        return greet(name, "Hello");
    }
    
    public static int calculateArea(int width, int height) {
        return width * height;
    }
}

System.out.println(Utils.greet("John"));`
      },
      {
        topic: 'Classes and Objects',
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
  
  public function setName($name) {
    $this->name = $name;
  }
}

$person = new Person("John", 30);
echo $person->greet();`,
        targetCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String greet() {
        return "Hi, I'm " + this.name;
    }
    
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}

Person person = new Person("John", 30);
System.out.println(person.greet());`
      },
      {
        topic: 'Loops and Iteration',
        description: 'Different loop types',
        sourceCode: `// For loop
for ($i = 0; $i < 5; $i++) {
  echo $i;
}

// Foreach loop
$colors = ["red", "green", "blue"];
foreach ($colors as $color) {
  echo $color;
}

// Foreach with index
foreach ($colors as $index => $color) {
  echo "$index: $color";
}`,
        targetCode: `// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Enhanced for loop (for-each)
String[] colors = {"red", "green", "blue"};
for (String color : colors) {
    System.out.println(color);
}

// Traditional for loop with index
for (int index = 0; index < colors.length; index++) {
    System.out.println(index + ": " + colors[index]);
}`
      },
      {
        topic: 'Error Handling',
        description: 'Exception handling',
        sourceCode: `try {
  $file = fopen("data.txt", "r");
  $content = fread($file, filesize("data.txt"));
  fclose($file);
} catch (Exception $e) {
  echo "Error: " . $e->getMessage();
} finally {
  echo "Cleanup code";
}`,
        targetCode: `try {
    FileReader file = new FileReader("data.txt");
    // Read content
    file.close();
} catch (FileNotFoundException e) {
    System.out.println("Error: " + e.getMessage());
} catch (IOException e) {
    System.out.println("IO Error: " + e.getMessage());
} finally {
    System.out.println("Cleanup code");
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Static Typing vs Dynamic Typing',
        description: 'Java requires explicit type declarations',
        sourceExample: `$name = "John";
$name = 42; // This works in PHP`,
        targetExample: `String name = "John";
name = 42; // Compilation error in Java`,
        correctApproach: 'Declare variables with specific types in Java and stick to those types'
      },
      {
        title: 'Method Overloading vs Default Parameters',
        description: 'Java does not support default parameters',
        sourceExample: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name";
}`,
        targetExample: `// Need method overloading in Java
public static String greet(String name) {
    return greet(name, "Hello");
}

public static String greet(String name, String greeting) {
    return greeting + ", " + name;
}`,
        correctApproach: 'Use method overloading to simulate default parameters in Java'
      },
      {
        title: 'Array Operations',
        description: 'Different array handling approaches',
        sourceExample: `$arr = [];
$arr[] = "item"; // Dynamic addition
$count = count($arr);`,
        targetExample: `// Arrays have fixed size
String[] arr = new String[10];
arr[0] = "item";
int count = arr.length;

// Use ArrayList for dynamic arrays
ArrayList<String> list = new ArrayList<>();
list.add("item");
int count = list.size();`,
        correctApproach: 'Use ArrayList for dynamic arrays, regular arrays for fixed-size collections'
      },
      {
        title: 'String Concatenation',
        description: 'Performance implications of string operations',
        sourceExample: `$result = "";
for ($i = 0; $i < 1000; $i++) {
  $result .= "item" . $i;
}`,
        targetExample: `String result = "";
for (int i = 0; i < 1000; i++) {
    result += "item" + i; // Inefficient!
}

// Better approach:
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append("item").append(i);
}
String result = sb.toString();`,
        correctApproach: 'Use StringBuilder for multiple string concatenations in Java'
      },
      {
        title: 'Null Handling',
        description: 'Java is stricter about null values',
        sourceExample: `$value = null;
echo $value; // Works, prints nothing`,
        targetExample: `String value = null;
System.out.println(value); // Prints "null"
int length = value.length(); // NullPointerException!`,
        correctApproach: 'Always check for null before calling methods on objects in Java'
      }
    ],
    keyDifferences: [
      {
        topic: 'Compilation',
        description: 'Code execution model',
        sourceApproach: 'PHP is interpreted at runtime, no compilation step needed',
        targetApproach: 'Java is compiled to bytecode, then run on JVM'
      },
      {
        topic: 'Type System',
        description: 'Variable typing approach',
        sourceApproach: 'PHP is dynamically typed with optional type hints',
        targetApproach: 'Java is statically typed, all variables must have declared types'
      },
      {
        topic: 'Memory Management',
        description: 'How memory is handled',
        sourceApproach: 'PHP has automatic garbage collection, simpler memory model',
        targetApproach: 'Java has sophisticated garbage collection with different strategies'
      },
      {
        topic: 'Platform Independence',
        description: 'Cross-platform capabilities',
        sourceApproach: 'PHP runs on web servers, primarily for web development',
        targetApproach: 'Java runs on JVM, "write once, run anywhere" philosophy'
      },
      {
        topic: 'Object-Oriented Features',
        description: 'OOP implementation differences',
        sourceApproach: 'PHP supports OOP but also procedural programming',
        targetApproach: 'Java is purely object-oriented, everything must be in a class'
      },
      {
        topic: 'Performance',
        description: 'Runtime performance characteristics',
        sourceApproach: 'PHP is optimized for web requests, shorter execution times',
        targetApproach: 'Java is optimized for long-running applications with JIT compilation'
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
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
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
    protected $fillable = ['name', 'email'];
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
          name: 'Spring Boot',
          setupCode: `# Create Spring Boot project
curl https://start.spring.io/starter.zip \\
  -d dependencies=web,data-jpa,h2 \\
  -d name=myapp \\
  -d packageName=com.example.myapp \\
  -o myapp.zip

unzip myapp.zip
cd myapp

# Build and run
./mvnw spring-boot:run`,
          basicExample: `// src/main/java/com/example/myapp/controller/UserController.java
package com.example.myapp.controller;

import com.example.myapp.model.User;
import com.example.myapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping
    public String index(Model model) {
        model.addAttribute("users", userRepository.findAll());
        return "users/index";
    }
    
    @PostMapping
    public String store(@ModelAttribute User user) {
        userRepository.save(user);
        return "redirect:/users";
    }
    
    @GetMapping("/create")
    public String create(Model model) {
        model.addAttribute("user", new User());
        return "users/create";
    }
}

// src/main/java/com/example/myapp/model/User.java
package com.example.myapp.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    private String name;
    
    @Email
    @Column(unique = true)
    private String email;
    
    // Constructors, getters, setters
    public User() {}
    
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}

// src/main/java/com/example/myapp/repository/UserRepository.java
package com.example.myapp.repository;

import com.example.myapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}`,
          strengths: [
            'Enterprise-grade framework',
            'Powerful dependency injection',
            'Extensive Spring ecosystem',
            'Production-ready features',
            'Strong community support'
          ],
          ecosystem: ['Maven/Gradle', 'Spring Data JPA', 'Thymeleaf', 'Spring Security', 'Spring Actuator']
        },
        migrationTips: [
          'Spring Boot follows similar MVC pattern as Laravel',
          'Spring Data JPA is comparable to Eloquent ORM',
          'Annotations replace Laravel\'s configuration files',
          'Dependency injection replaces Laravel\'s service container',
          'Maven/Gradle replace Composer for dependency management'
        ],
        commonPitfalls: [
          'Java requires explicit type declarations vs PHP\'s dynamic typing',
          'Different annotation system vs Laravel\'s configuration approach',
          'Spring\'s dependency injection vs Laravel\'s service binding',
          'JPA entity relationships vs Eloquent relationships',
          'Different template engines (Thymeleaf vs Blade)'
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
    
    public function update(Request $request, User $user): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|string|email|unique:users,email,' . $user->id,
        ]);
        
        $user->update($validated);
        return response()->json($user);
    }
    
    public function destroy(User $user): JsonResponse
    {
        $user->delete();
        return response()->json(null, 204);
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
          name: 'Spring Boot REST',
          setupCode: `# Create Spring Boot project with REST dependencies
curl https://start.spring.io/starter.zip \\
  -d dependencies=web,data-jpa,validation,security \\
  -d name=api-project \\
  -d packageName=com.example.api \\
  -o api-project.zip

unzip api-project.zip
cd api-project

# Run the application
./mvnw spring-boot:run`,
          basicExample: `// src/main/java/com/example/api/controller/UserController.java
package com.example.api.controller;

import com.example.api.model.User;
import com.example.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User savedUser = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        return user.map(ResponseEntity::ok)
                  .orElse(ResponseEntity.notFound().build());
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @Valid @RequestBody User user) {
        if (!userService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        user.setId(id);
        User updatedUser = userService.save(user);
        return ResponseEntity.ok(updatedUser);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (!userService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        userService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

// src/main/java/com/example/api/service/UserService.java
package com.example.api.service;

import com.example.api.model.User;
import com.example.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> findAll() {
        return userRepository.findAll();
    }
    
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
    
    public User save(User user) {
        return userRepository.save(user);
    }
    
    public boolean existsById(Long id) {
        return userRepository.existsById(id);
    }
    
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}`,
          strengths: [
            'RESTful by design',
            'Built-in validation',
            'Spring Security integration',
            'Actuator for monitoring',
            'Comprehensive error handling'
          ],
          ecosystem: ['Spring Security', 'Spring Data', 'Bean Validation', 'Spring Actuator', 'Jackson']
        },
        migrationTips: [
          '@RestController replaces Laravel API controllers',
          'Spring validation annotations replace Laravel validation rules',
          'Service layer pattern common in Spring vs Laravel\'s controller-heavy approach',
          'ResponseEntity provides fine-grained response control',
          'Spring Security replaces Laravel Sanctum'
        ],
        commonPitfalls: [
          'Different HTTP status code handling',
          'Java annotations vs PHP attributes/docblocks',
          'Service layer architecture vs direct model access',
          'Different serialization approaches',
          'Exception handling strategies differ'
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
          name: 'JUnit 5',
          setupCode: `<!-- Add to pom.xml -->
<dependencies>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.9.2</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.mockito</groupId>
        <artifactId>mockito-core</artifactId>
        <version>5.1.1</version>
        <scope>test</scope>
    </dependency>
</dependencies>

# Run tests
mvn test

# Or with Gradle
./gradlew test`,
          basicExample: `// src/test/java/com/example/UserTest.java
package com.example;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserTest {
    
    private User user;
    
    @BeforeEach
    void setUp() {
        user = new User("John", "john@example.com");
    }
    
    @Test
    @DisplayName("Should create user with valid name and email")
    void testUserCreation() {
        assertEquals("John", user.getName());
        assertEquals("john@example.com", user.getEmail());
        assertNotNull(user.getId());
    }
    
    @Test
    @DisplayName("Should validate email addresses correctly")
    void testUserValidation() {
        assertTrue(user.isValidEmail("test@example.com"));
        assertFalse(user.isValidEmail("invalid-email"));
    }
    
    @ParameterizedTest
    @DisplayName("Should validate names according to business rules")
    @CsvSource({
        "John, true",
        "'', false",
        "A, false",
        "Very Long Name That Exceeds Limits, false"
    })
    void testNameValidation(String name, boolean expected) {
        User testUser = new User(name, "test@example.com");
        assertEquals(expected, testUser.isValidName());
    }
    
    @Test
    @DisplayName("Should throw exception for empty email")
    void testExceptionThrown() {
        IllegalArgumentException exception = assertThrows(
            IllegalArgumentException.class,
            () -> new User("John", "")
        );
        
        assertEquals("Email cannot be empty", exception.getMessage());
    }
    
    @Test
    @DisplayName("Should interact correctly with repository")
    void testUserRepository(@Mock UserRepository repository) {
        MockitoAnnotations.openMocks(this);
        
        when(repository.save(any(User.class))).thenReturn(user);
        
        UserService service = new UserService(repository);
        User savedUser = service.saveUser(user);
        
        assertNotNull(savedUser);
        verify(repository, times(1)).save(user);
    }
}`,
          strengths: [
            'Modern testing framework',
            'Parameterized tests',
            'Powerful assertions',
            'Great IDE integration',
            'Extensive ecosystem'
          ],
          ecosystem: ['Maven/Gradle', 'Mockito', 'AssertJ', 'Testcontainers', 'Spring Test']
        },
        migrationTips: [
          'JUnit 5 @Test replaces PHPUnit test methods',
          '@BeforeEach replaces PHPUnit setUp()',
          '@ParameterizedTest replaces PHPUnit data providers',
          'assertThrows() replaces expectException()',
          'Mockito replaces PHPUnit mock objects'
        ],
        commonPitfalls: [
          'Different naming conventions (camelCase vs snake_case)',
          'Java annotations vs PHPUnit docblock annotations',
          'Different assertion method names',
          'JUnit lifecycle methods vs PHPUnit setup/teardown',
          'Mock object creation and verification differences'
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
composer update

# Autoload classes
composer dump-autoload`,
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
    "autoload-dev": {
        "psr-4": {
            "App\\\\Tests\\\\": "tests/"
        }
    },
    "scripts": {
        "test": "phpunit",
        "lint": "phpcs --standard=PSR12 src/",
        "fix": "phpcbf --standard=PSR12 src/"
    },
    "config": {
        "optimize-autoloader": true,
        "sort-packages": true
    }
}

# Command examples:
# composer require doctrine/orm
# composer update guzzlehttp/guzzle
# composer run-script test
# composer show --installed`,
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
          name: 'Maven',
          setupCode: `# Create new Maven project
mvn archetype:generate \\
  -DgroupId=com.example.myapp \\
  -DartifactId=myapp \\
  -DarchetypeArtifactId=maven-archetype-quickstart \\
  -DinteractiveMode=false

cd myapp

# Compile project
mvn compile

# Run tests
mvn test

# Package application
mvn package

# Install to local repository
mvn install`,
          basicExample: `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    
    <modelVersion>4.0.0</modelVersion>
    
    <groupId>com.example</groupId>
    <artifactId>myapp</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>
    
    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    
    <dependencies>
        <dependency>
            <groupId>org.apache.httpcomponents.client5</groupId>
            <artifactId>httpclient5</artifactId>
            <version>5.2.1</version>
        </dependency>
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>1.4.5</version>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.9.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.0.0-M9</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-checkstyle-plugin</artifactId>
                <version>3.2.1</version>
                <configuration>
                    <configLocation>checkstyle.xml</configLocation>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>

# Command examples:
# mvn dependency:add -Dartifact=org.apache.commons:commons-lang3:3.12.0
# mvn dependency:tree
# mvn clean compile test package
# mvn exec:java -Dexec.mainClass="com.example.App"`,
          strengths: [
            'Enterprise build standard',
            'Powerful dependency management',
            'Plugin ecosystem',
            'Multi-module projects',
            'IDE integration'
          ],
          ecosystem: ['Maven Central', 'Plugins', 'Archetypes', 'Multi-module', 'Profiles']
        },
        migrationTips: [
          'pom.xml replaces composer.json for dependency management',
          'Maven coordinates (groupId:artifactId:version) replace Composer package names',
          'Maven lifecycle phases replace Composer scripts',
          'src/main/java replaces src/ directory structure',
          'Maven Central replaces Packagist as main repository'
        ],
        commonPitfalls: [
          'Different directory structure (Maven standard layout)',
          'XML configuration vs JSON configuration',
          'Different dependency scopes (compile, test, provided)',
          'Maven lifecycle vs Composer commands',
          'Plugin configuration vs simple scripts'
        ]
      }
    ]
};