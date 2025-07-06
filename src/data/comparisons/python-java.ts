import type { LanguageComparison } from '../../types/language';

export const pythonJavaComparison: LanguageComparison = {
    sourceLanguage: 'Python',
    targetLanguage: 'Java',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Dynamic vs static typing',
        sourceCode: `name = "John"
age = 25
is_active = True
score = 95.5

# Dynamic typing - can change types
value = 42
value = "now a string"`,
        targetCode: `String name = "John";
int age = 25;
boolean isActive = true;
double score = 95.5;

// Static typing - cannot change types
int value = 42;
// value = "now a string"; // Compilation error!

// Type inference with var (Java 10+)
var inferredName = "John"; // String`
      },
      {
        topic: 'Collections',
        description: 'Lists and dictionaries vs collections',
        sourceCode: `# List
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
first = fruits[0]
count = len(fruits)

# Dictionary
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
name = person["name"]

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]`,
        targetCode: `// ArrayList
List<String> fruits = new ArrayList<>();
fruits.add("apple");
fruits.add("banana");
fruits.add("orange");
fruits.add("grape");
String first = fruits.get(0);
int count = fruits.size();

// HashMap
Map<String, Object> person = new HashMap<>();
person.put("name", "John");
person.put("age", 30);
person.put("city", "New York");
String name = (String) person.get("name");

// Stream API (similar to comprehensions)
List<Integer> squares = IntStream.range(0, 10)
    .map(x -> x * x)
    .boxed()
    .collect(Collectors.toList());

List<Integer> evens = IntStream.range(0, 20)
    .filter(x -> x % 2 == 0)
    .boxed()
    .collect(Collectors.toList());`
      },
      {
        topic: 'Functions and Methods',
        description: 'Function definitions and lambda expressions',
        sourceCode: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

def calculate_area(width, height):
    return width * height

# Lambda function
add = lambda x, y: x + y

# Function with multiple return values
def get_user_data():
    return "John", 30, "john@example.com"

name, age, email = get_user_data()

print(greet("John"))
print(add(5, 3))`,
        targetCode: `public class Utils {
    public static String greet(String name, String greeting) {
        return greeting + ", " + name + "!";
    }
    
    // Overload for default parameter
    public static String greet(String name) {
        return greet(name, "Hello");
    }
    
    public static int calculateArea(int width, int height) {
        return width * height;
    }
}

// Lambda expression (Java 8+)
BinaryOperator<Integer> add = (x, y) -> x + y;

// Record for multiple return values (Java 14+)
record UserData(String name, int age, String email) {}

public static UserData getUserData() {
    return new UserData("John", 30, "john@example.com");
}

// Usage
System.out.println(Utils.greet("John"));
System.out.println(add.apply(5, 3));

UserData data = getUserData();
String name = data.name();
int age = data.age();`
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
    
    def work(self):
        return f"{self._name} is working"

person = Person("John", 30)
print(person.greet())`,
        targetCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String greet() {
        return "Hi, I'm " + name;
    }
    
    @Override
    public String toString() {
        return String.format("Person(name='%s', age=%d)", name, age);
    }
}

// Inheritance
public class Employee extends Person {
    private String employeeId;
    
    public Employee(String name, int age, String employeeId) {
        super(name, age);
        this.employeeId = employeeId;
    }
    
    public String work() {
        return getName() + " is working";
    }
}

Person person = new Person("John", 30);
System.out.println(person.greet());`
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

def validate_age(age):
    if age < 0:
        raise ValidationError("Age cannot be negative")
    return True

try:
    validate_age(-5)
except ValidationError as e:
    print(f"Validation failed: {e.message}")`,
        targetCode: `public class MathUtils {
    public static Double divide(double a, double b) {
        try {
            double result = a / b;
            return result;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero!");
            return null;
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
            throw e;
        } finally {
            System.out.println("Division operation completed");
        }
    }
}

// Custom exception
public class ValidationException extends Exception {
    public ValidationException(String message) {
        super(message);
    }
}

public static boolean validateAge(int age) throws ValidationException {
    if (age < 0) {
        throw new ValidationException("Age cannot be negative");
    }
    return true;
}

// Usage
try {
    validateAge(-5);
} catch (ValidationException e) {
    System.out.println("Validation failed: " + e.getMessage());
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Static Typing',
        description: 'Java requires explicit type declarations',
        sourceExample: `data = get_data()  # Type inferred at runtime
result = process(data)`,
        targetExample: `// Must declare types
UserData data = getData();
ProcessedResult result = process(data);

// Or use var (Java 10+)
var data = getData();`,
        correctApproach: 'Always declare types explicitly in Java or use var for local variables'
      },
      {
        title: 'Indentation vs Braces',
        description: 'Java uses braces instead of indentation',
        sourceExample: `if condition:
    do_something()
    do_another_thing()`,
        targetExample: `if (condition) {
    doSomething();
    doAnotherThing();
}`,
        correctApproach: 'Use proper brace placement and semicolons in Java'
      },
      {
        title: 'Method Overloading vs Default Parameters',
        description: 'Java doesn\'t support default parameters',
        sourceExample: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}"`,
        targetExample: `public String greet(String name) {
    return greet(name, "Hello");
}

public String greet(String name, String greeting) {
    return greeting + ", " + name;
}`,
        correctApproach: 'Use method overloading to simulate default parameters'
      },
      {
        title: 'List Comprehensions',
        description: 'Java uses Stream API instead',
        sourceExample: `squares = [x**2 for x in range(10)]
filtered = [x for x in items if x > 0]`,
        targetExample: `List<Integer> squares = IntStream.range(0, 10)
    .map(x -> x * x)
    .boxed()
    .collect(Collectors.toList());

List<Integer> filtered = items.stream()
    .filter(x -> x > 0)
    .collect(Collectors.toList());`,
        correctApproach: 'Learn Stream API for functional-style operations'
      }
    ],
    keyDifferences: [
      {
        topic: 'Type System',
        description: 'Static vs dynamic typing',
        sourceApproach: 'Python is dynamically typed with optional type hints',
        targetApproach: 'Java is statically typed, all variables must have declared types'
      },
      {
        topic: 'Execution Model',
        description: 'Interpreted vs compiled',
        sourceApproach: 'Python is interpreted, runs directly from source',
        targetApproach: 'Java compiles to bytecode, runs on JVM'
      },
      {
        topic: 'Memory Management',
        description: 'Automatic memory handling',
        sourceApproach: 'Python uses reference counting and garbage collection',
        targetApproach: 'Java uses sophisticated garbage collection on JVM'
      },
      {
        topic: 'Development Philosophy',
        description: 'Language design principles',
        sourceApproach: 'Python emphasizes readability and simplicity',
        targetApproach: 'Java emphasizes type safety and enterprise features'
      },
      {
        topic: 'Standard Library',
        description: 'Built-in functionality',
        sourceApproach: 'Python has extensive "batteries included" standard library',
        targetApproach: 'Java has comprehensive standard library with enterprise focus'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'Django',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install Django
pip install django

# Create Django project
django-admin startproject myproject
cd myproject

# Create app
python manage.py startapp myapp

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start development server
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
          name: 'Spring Boot',
          setupCode: `# Using Spring Initializr
curl https://start.spring.io/starter.zip \
  -d dependencies=web,data-jpa,h2,validation \
  -d name=myproject \
  -d packageName=com.example.myproject \
  -o myproject.zip

unzip myproject.zip
cd myproject

# Build and run
./mvnw spring-boot:run

# Or using Maven directly
mvn spring-boot:run`,
          basicExample: `// User.java
package com.example.myproject.model;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    @Size(max = 255)
    private String name;
    
    @Email
    @NotBlank
    @Column(unique = true)
    private String email;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
    
    // Constructors, getters, setters
    public User() {}
    
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    // Standard getters and setters...
}

// UserController.java
package com.example.myproject.controller;

import com.example.myproject.model.User;
import com.example.myproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping
    public String listUsers(Model model) {
        model.addAttribute("users", userRepository.findAll());
        return "users/list";
    }
    
    @GetMapping("/create")
    public String showCreateForm(Model model) {
        model.addAttribute("user", new User());
        return "users/create";
    }
    
    @PostMapping("/create")
    public String createUser(@Valid @ModelAttribute User user, 
                           BindingResult result) {
        if (result.hasErrors()) {
            return "users/create";
        }
        userRepository.save(user);
        return "redirect:/users";
    }
}

// UserRepository.java
package com.example.myproject.repository;

import com.example.myproject.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}`,
          strengths: [
            'Enterprise-grade framework',
            'Powerful dependency injection',
            'Extensive ecosystem',
            'Production-ready features',
            'Strong type safety'
          ],
          ecosystem: ['Maven/Gradle', 'Spring Data JPA', 'Thymeleaf', 'Spring Security', 'Spring Cloud']
        },
        migrationTips: [
          'Spring Boot annotations replace Django decorators',
          'JPA entities are similar to Django models',
          'Spring Data repositories replace Django ORM queries',
          'Thymeleaf templates replace Django templates',
          'Both support MVC/MVT patterns'
        ],
        commonPitfalls: [
          'Java requires more boilerplate code',
          'Different template syntax (Thymeleaf vs Django)',
          'Explicit configuration vs Django conventions',
          'Compilation step required in Java',
          'Different ORM query syntax'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'FastAPI',
          setupCode: `# Install FastAPI and server
pip install fastapi uvicorn[standard] sqlalchemy

# Create main.py
touch main.py

# Run development server
uvicorn main:app --reload

# Or with custom host/port
uvicorn main:app --host 0.0.0.0 --port 8000 --reload`,
          basicExample: `# main.py
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

# Database setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Models
class UserDB(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)

Base.metadata.create_all(bind=engine)

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

# FastAPI app
app = FastAPI(title="User API", version="1.0.0")

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Routes
@app.get("/users", response_model=List[User])
def get_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = db.query(UserDB).offset(skip).limit(limit).all()
    return users

@app.post("/users", response_model=User, status_code=201)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(UserDB).filter(UserDB.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    db_user = UserDB(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/{user_id}", response_model=User)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(UserDB).filter(UserDB.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user`,
          strengths: [
            'Modern async framework',
            'Automatic API documentation',
            'Type hints and validation',
            'High performance',
            'OpenAPI/Swagger built-in'
          ],
          ecosystem: ['pip', 'Pydantic', 'SQLAlchemy', 'Alembic', 'pytest']
        },
        targetFramework: {
          name: 'Spring Boot WebFlux',
          setupCode: `# Create reactive Spring Boot project
curl https://start.spring.io/starter.zip \
  -d dependencies=webflux,data-r2dbc,h2,validation \
  -d name=api-project \
  -d packageName=com.example.api \
  -o api-project.zip

unzip api-project.zip
cd api-project

# Run the application
./mvnw spring-boot:run`,
          basicExample: `// User.java
package com.example.api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import javax.validation.constraints.*;
import java.time.LocalDateTime;

@Table("users")
public class User {
    @Id
    private Long id;
    
    @NotBlank
    @Size(max = 255)
    private String name;
    
    @Email
    @NotBlank
    private String email;
    
    private LocalDateTime createdAt = LocalDateTime.now();
    
    // Constructors, getters, setters
    public User() {}
    
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    // Standard getters and setters...
}

// UserController.java
package com.example.api.controller;

import com.example.api.model.User;
import com.example.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping
    public Flux<User> getUsers(
            @RequestParam(defaultValue = "0") int skip,
            @RequestParam(defaultValue = "100") int limit) {
        return userRepository.findAll()
                .skip(skip)
                .take(limit);
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<User> createUser(@Valid @RequestBody User user) {
        return userRepository.findByEmail(user.getEmail())
                .flatMap(existingUser -> 
                    Mono.<User>error(new IllegalArgumentException("Email already registered"))
                )
                .switchIfEmpty(userRepository.save(user));
    }
    
    @GetMapping("/{id}")
    public Mono<ResponseEntity<User>> getUser(@PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> ResponseEntity.ok(user))
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
}

// UserRepository.java
package com.example.api.repository;

import com.example.api.model.User;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Mono;

public interface UserRepository extends ReactiveCrudRepository<User, Long> {
    Mono<User> findByEmail(String email);
}

// Application.java with OpenAPI config
package com.example.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@SpringBootApplication
public class Application {
    
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("User API")
                        .version("1.0.0")
                        .description("User management API"));
    }
}`,
          strengths: [
            'Reactive programming model',
            'Non-blocking I/O',
            'High scalability',
            'Type safety',
            'Spring ecosystem'
          ],
          ecosystem: ['Maven/Gradle', 'Project Reactor', 'R2DBC', 'Spring Security', 'Spring Cloud']
        },
        migrationTips: [
          'Both support async operations (FastAPI native, Spring WebFlux reactive)',
          'Pydantic models similar to Java DTOs with validation',
          'Dependency injection in both frameworks',
          'Similar REST conventions',
          'Both generate OpenAPI documentation'
        ],
        commonPitfalls: [
          'Reactive programming in Java has steeper learning curve',
          'Different async models (Python async/await vs Reactor)',
          'More verbose Java code',
          'Type annotations optional in Python, mandatory in Java',
          'Different error handling patterns'
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

# Run specific test
pytest test_user.py::test_user_creation

# Run with verbose output
pytest -v`,
          basicExample: `# test_user.py
import pytest
from datetime import datetime
from user import User, UserService, UserRepository

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
def db_connection():
    """Database connection fixture"""
    conn = create_test_database()
    yield conn
    conn.close()

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
    <dependency>
        <groupId>org.assertj</groupId>
        <artifactId>assertj-core</artifactId>
        <version>3.24.2</version>
        <scope>test</scope>
    </dependency>
</dependencies>

# Run tests
mvn test

# Run specific test class
mvn test -Dtest=UserTest

# Run with coverage (requires JaCoCo plugin)
mvn test jacoco:report`,
          basicExample: `// UserTest.java
package com.example.test;

import com.example.model.User;
import com.example.service.UserService;
import com.example.repository.UserRepository;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.*;

@DisplayName("User Tests")
class UserTest {
    
    private User user;
    
    @Mock
    private UserRepository mockRepository;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        user = new User("John", "john@example.com");
    }
    
    @Test
    @DisplayName("Should create user with valid data")
    void testUserCreation() {
        assertThat(user.getName()).isEqualTo("John");
        assertThat(user.getEmail()).isEqualTo("john@example.com");
        assertThat(user.getId()).isNotNull();
    }
    
    @Test
    @DisplayName("Should validate email correctly")
    void testUserValidation() {
        assertThat(user.isValidEmail("test@example.com")).isTrue();
        assertThat(user.isValidEmail("invalid-email")).isFalse();
    }
    
    @ParameterizedTest
    @DisplayName("Should validate names according to rules")
    @CsvSource({
        "John, true",
        "'', false",
        "A, false",
        "Very Long Name That Exceeds Limit, false"
    })
    void testNameValidation(String name, boolean expected) {
        User testUser = new User(name, "test@example.com");
        assertThat(testUser.isValidName()).isEqualTo(expected);
    }
    
    @Test
    @DisplayName("Should throw exception for empty email")
    void testExceptionRaised() {
        assertThatThrownBy(() -> new User("John", ""))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessage("Email cannot be empty");
    }
    
    @Test
    @DisplayName("Should save user through service")
    void testUserServiceSave() {
        // Given
        when(mockRepository.save(any(User.class))).thenReturn(user);
        UserService service = new UserService(mockRepository);
        
        // When
        User result = service.saveUser(user);
        
        // Then
        assertThat(result).isEqualTo(user);
        verify(mockRepository, times(1)).save(user);
    }
    
    @Nested
    @DisplayName("Async Operations")
    class AsyncTests {
        
        @Test
        @DisplayName("Should handle async validation")
        void testAsyncOperation() {
            // Using CompletableFuture for async testing
            assertThat(user.asyncValidate())
                    .succeedsWithin(Duration.ofSeconds(1))
                    .isEqualTo(true);
        }
    }
}

// TestConfiguration.java for shared test setup
@TestConfiguration
public class TestConfig {
    
    @Bean
    @Primary
    public DataSource testDataSource() {
        return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript("schema.sql")
                .build();
    }
}`,
          strengths: [
            'Comprehensive testing features',
            'Excellent IDE integration',
            'Parameterized tests',
            'Nested test organization',
            'Rich assertion libraries'
          ],
          ecosystem: ['Maven/Gradle', 'Mockito', 'AssertJ', 'Testcontainers', 'Spring Test']
        },
        migrationTips: [
          '@Test annotation replaces pytest test functions',
          '@BeforeEach replaces setup_method',
          '@ParameterizedTest replaces pytest.mark.parametrize',
          'assertThat (AssertJ) provides fluent assertions like pytest',
          'Mockito replaces pytest-mock'
        ],
        commonPitfalls: [
          'More verbose test setup in Java',
          'Different naming conventions',
          'Annotation-based vs convention-based',
          'Static mocking more complex in Java',
          'Different fixture/setup patterns'
        ]
      },
      {
        category: 'build',
        sourceFramework: {
          name: 'pip/setuptools',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install requests pandas numpy

# Save dependencies
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt

# Create setup.py for package
touch setup.py

# Install package in development mode
pip install -e .

# Build distribution
python setup.py sdist bdist_wheel

# Upload to PyPI
pip install twine
twine upload dist/*`,
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
        "Topic :: Software Development :: Libraries",
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
            "pytest-cov>=4.0",
            "black>=22.0",
            "flake8>=5.0",
        ],
        "docs": [
            "sphinx>=5.0",
            "sphinx-rtd-theme>=1.0",
        ],
    },
    entry_points={
        "console_scripts": [
            "mycommand=mypackage.cli:main",
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
authors = [
  { name="John Doe", email="john@example.com" },
]
description = "A sample Python package"
readme = "README.md"
requires-python = ">=3.8"
classifiers = [
    "Programming Language :: Python :: 3",
    "License :: OSI Approved :: MIT License",
    "Operating System :: OS Independent",
]
dependencies = [
    "requests>=2.28.0",
    "pandas>=1.5.0",
    "numpy>=1.23.0",
]

[project.optional-dependencies]
dev = ["pytest", "pytest-cov", "black", "flake8"]
docs = ["sphinx", "sphinx-rtd-theme"]

[project.urls]
"Homepage" = "https://github.com/username/mypackage"
"Bug Tracker" = "https://github.com/username/mypackage/issues"`,
          strengths: [
            'Simple dependency management',
            'Virtual environments',
            'PyPI integration',
            'Easy to use',
            'Wide ecosystem'
          ],
          ecosystem: ['PyPI', 'virtualenv', 'pip-tools', 'poetry', 'pipenv']
        },
        targetFramework: {
          name: 'Maven',
          setupCode: `# Create new Maven project
mvn archetype:generate \
  -DgroupId=com.example \
  -DartifactId=myapp \
  -DarchetypeArtifactId=maven-archetype-quickstart \
  -DinteractiveMode=false

cd myapp

# Compile project
mvn compile

# Run tests
mvn test

# Package application
mvn package

# Install to local repository
mvn install

# Run application
mvn exec:java -Dexec.mainClass="com.example.App"

# Deploy to repository
mvn deploy`,
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
    
    <name>My Application</name>
    <description>A sample Java application</description>
    <url>https://github.com/username/myapp</url>
    
    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <spring.boot.version>3.0.5</spring.boot.version>
        <junit.version>5.9.2</junit.version>
    </properties>
    
    <dependencies>
        <!-- Spring Boot -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>\${spring.boot.version}</version>
        </dependency>
        
        <!-- Database -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
            <version>\${spring.boot.version}</version>
        </dependency>
        
        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <scope>runtime</scope>
        </dependency>
        
        <!-- Testing -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>\${junit.version}</version>
            <scope>test</scope>
        </dependency>
        
        <dependency>
            <groupId>org.mockito</groupId>
            <artifactId>mockito-core</artifactId>
            <version>5.1.1</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>\${spring.boot.version}</version>
                <configuration>
                    <mainClass>com.example.Application</mainClass>
                </configuration>
            </plugin>
            
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.0.0-M9</version>
            </plugin>
            
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>0.8.8</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>report</id>
                        <phase>test</phase>
                        <goals>
                            <goal>report</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
    
    <distributionManagement>
        <repository>
            <id>releases</id>
            <url>https://nexus.example.com/repository/maven-releases/</url>
        </repository>
        <snapshotRepository>
            <id>snapshots</id>
            <url>https://nexus.example.com/repository/maven-snapshots/</url>
        </snapshotRepository>
    </distributionManagement>
</project>`,
          strengths: [
            'Comprehensive dependency management',
            'Build lifecycle management',
            'Plugin ecosystem',
            'Multi-module support',
            'Central repository'
          ],
          ecosystem: ['Maven Central', 'Nexus', 'Artifactory', 'Maven Wrapper', 'Gradle']
        },
        migrationTips: [
          'pom.xml replaces setup.py/requirements.txt',
          'Maven coordinates (groupId:artifactId:version) vs package names',
          'Scopes (compile, test, runtime) vs extras_require',
          'Plugins provide additional build functionality',
          'Central repository vs PyPI'
        ],
        commonPitfalls: [
          'XML configuration vs Python/TOML',
          'More complex dependency resolution',
          'Different project structure conventions',
          'Build lifecycle phases vs simple commands',
          'Transitive dependency management'
        ]
      }
    ]
};