import type { LanguageComparison } from '../../types/language';

export const javaPythonComparison: LanguageComparison = {
    sourceLanguage: 'Java',
    targetLanguage: 'Python',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Static vs dynamic typing',
        sourceCode: `String name = "John";
int age = 25;
boolean isActive = true;
List<String> items = new ArrayList<>();`,
        targetCode: `name = "John"
age = 25
is_active = True
items = []`
      },
      {
        topic: 'Methods vs Functions',
        description: 'Function definition approaches',
        sourceCode: `public class MathUtils {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }
}

int result = MathUtils.add(5, 3);`,
        targetCode: `def add(a, b):
    return a + b

def calculate_area(radius):
    import math
    return math.pi * radius * radius

result = add(5, 3)`
      },
      {
        topic: 'Classes',
        description: 'Object-oriented programming',
        sourceCode: `public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
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
        return f"Person(name='{self._name}', age={self._age})"`
      },
      {
        topic: 'Collections',
        description: 'Arrays vs Lists',
        sourceCode: `// Java Arrays and Lists
String[] fruits = {"apple", "banana", "orange"};
List<String> fruitsList = Arrays.asList(fruits);
fruitsList.add("grape"); // Error! Arrays.asList returns fixed-size list

// Mutable list
List<String> mutableList = new ArrayList<>(Arrays.asList(fruits));
mutableList.add("grape");

// Iteration
for (String fruit : mutableList) {
    System.out.println(fruit.toUpperCase());
}`,
        targetCode: `# Python Lists
fruits = ["apple", "banana", "orange"]
fruits.append("grape")  # Always mutable

# List comprehension
upper_fruits = [fruit.upper() for fruit in fruits]

# Iteration
for fruit in fruits:
    print(fruit.upper())`
      },
      {
        topic: 'Error Handling',
        description: 'Exception handling approaches',
        sourceCode: `public void readFile(String filename) throws IOException {
    try {
        FileReader file = new FileReader(filename);
        // Read file content
        file.close();
    } catch (FileNotFoundException e) {
        System.err.println("File not found: " + e.getMessage());
    } catch (IOException e) {
        System.err.println("IO Error: " + e.getMessage());
    } finally {
        System.out.println("Cleanup completed");
    }
}`,
        targetCode: `def read_file(filename):
    try:
        with open(filename, 'r') as file:
            # Read file content
            content = file.read()
            # File automatically closed by 'with'
    except FileNotFoundError as e:
        print(f"File not found: {e}")
    except IOError as e:
        print(f"IO Error: {e}")
    finally:
        print("Cleanup completed")`
      }
    ],
    commonPitfalls: [
      {
        title: 'Indentation vs Braces',
        description: 'Code block structure',
        sourceExample: `if (condition) {
    doSomething();
    doAnotherThing();
}`,
        targetExample: `if condition:
    do_something()
    do_another_thing()`,
        correctApproach: 'Use consistent 4-space indentation in Python'
      },
      {
        title: 'Static vs Dynamic Typing',
        description: 'Variable type handling',
        sourceExample: `String name = "John";
name = 123; // Compilation error`,
        targetExample: `name = "John"
name = 123  # Perfectly fine`,
        correctApproach: 'Embrace Python\'s dynamic nature but use type hints for clarity'
      },
      {
        title: 'Method Naming Conventions',
        description: 'Different naming styles',
        sourceExample: `public void getUserData() { }
public boolean isUserActive() { }`,
        targetExample: `def get_user_data():
    pass

def is_user_active():
    return True`,
        correctApproach: 'Use snake_case for functions and variables in Python'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design principles',
        sourceApproach: 'Java emphasizes "write once, run anywhere" with strong typing',
        targetApproach: 'Python emphasizes readability and simplicity ("batteries included")'
      },
      {
        topic: 'Performance',
        description: 'Runtime characteristics',
        sourceApproach: 'Java is compiled to bytecode, optimized by JIT compiler',
        targetApproach: 'Python is interpreted, generally slower but more flexible'
      },
      {
        topic: 'Memory Management',
        description: 'Automatic memory handling',
        sourceApproach: 'Java has sophisticated garbage collection with tuning options',
        targetApproach: 'Python has simpler garbage collection with reference counting'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
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
./mvnw spring-boot:run`,
          basicExample: `// User.java
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
    
    // Getters and setters...
}

// UserController.java
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    
    @PostMapping
    public User createUser(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }
}`,
          strengths: [
            'Enterprise-grade framework',
            'Powerful dependency injection',
            'Extensive ecosystem',
            'Production-ready features',
            'Strong type safety'
          ],
          ecosystem: ['Maven/Gradle', 'Spring Data JPA', 'Spring Security', 'Spring Cloud', 'Hibernate']
        },
        targetFramework: {
          name: 'Django',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install Django
pip install django

# Create Django project
django-admin startproject myproject
cd myproject

# Create app and migrate
python manage.py startapp myapp
python manage.py migrate
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
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# urls.py
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', UserViewSet)
urlpatterns = router.urls`,
          strengths: [
            'Batteries included framework',
            'Powerful admin interface',
            'Built-in ORM with migrations',
            'Excellent security features',
            'Rapid development'
          ],
          ecosystem: ['pip', 'Django ORM', 'Django Admin', 'Django REST Framework', 'Celery']
        },
        migrationTips: [
          'Django uses decorators where Spring uses annotations',
          'Django models are simpler than JPA entities',
          'Django admin replaces custom admin interfaces',
          'Django templates use different syntax than JSP/Thymeleaf',
          'URL routing is more explicit in Django'
        ],
        commonPitfalls: [
          'Python lacks compile-time type checking',
          'Different project structure conventions',
          'Django ORM syntax differs from JPA/JPQL',
          'No interfaces or abstract classes in Python',
          'Different dependency injection patterns'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'Spring WebFlux',
          setupCode: `# Using Spring Initializr
curl https://start.spring.io/starter.zip \
  -d dependencies=webflux,data-r2dbc,h2 \
  -d name=reactive-api \
  -o reactive-api.zip

unzip reactive-api.zip
cd reactive-api

./mvnw spring-boot:run`,
          basicExample: `// Reactive REST API
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<User> streamUsers() {
        return userRepository.findAll()
            .delayElements(Duration.ofSeconds(1));
    }
    
    @PostMapping
    public Mono<User> createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
}

// Reactive Repository
public interface UserRepository 
    extends ReactiveCrudRepository<User, Long> {
    Flux<User> findByEmail(String email);
}`,
          strengths: [
            'Reactive programming support',
            'Non-blocking I/O',
            'Excellent performance',
            'Backpressure handling',
            'Integration with reactive streams'
          ],
          ecosystem: ['Project Reactor', 'R2DBC', 'WebClient', 'RSocket', 'Spring Cloud Gateway']
        },
        targetFramework: {
          name: 'FastAPI',
          setupCode: `# Install FastAPI
pip install fastapi uvicorn[standard] sqlalchemy

# Create main.py
touch main.py

# Run development server
uvicorn main:app --reload --port 8000`,
          basicExample: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List
import asyncio

app = FastAPI()

class UserCreate(BaseModel):
    name: str
    email: EmailStr

class User(UserCreate):
    id: int

# In-memory storage for demo
users_db = []

@app.get("/api/users", response_model=List[User])
async def get_users():
    # Simulate async operation
    await asyncio.sleep(0.1)
    return users_db

@app.post("/api/users", response_model=User)
async def create_user(user: UserCreate):
    new_user = User(id=len(users_db) + 1, **user.dict())
    users_db.append(new_user)
    return new_user

@app.get("/api/stream")
async def stream_data():
    async def generate():
        for i in range(10):
            await asyncio.sleep(1)
            yield f"data: Event {i}\\n\\n"
    
    return StreamingResponse(generate(), 
        media_type="text/event-stream")`,
          strengths: [
            'Modern async/await support',
            'Automatic API documentation',
            'Type hints and validation',
            'High performance',
            'Easy to learn and use'
          ],
          ecosystem: ['pip', 'SQLAlchemy', 'Alembic', 'Pydantic', 'Starlette']
        },
        migrationTips: [
          'FastAPI uses Python type hints like Java generics',
          'Pydantic models replace Java DTOs',
          'Async/await replaces reactive streams',
          'Dependency injection is function-based',
          'OpenAPI docs generated automatically'
        ],
        commonPitfalls: [
          'Different async programming models',
          'No built-in reactive streams support',
          'Less enterprise features out of the box',
          'Different error handling patterns',
          'Simpler but less powerful DI system'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'JUnit + Mockito',
          setupCode: `<!-- pom.xml -->
<dependencies>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.9.0</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.mockito</groupId>
        <artifactId>mockito-core</artifactId>
        <version>4.8.0</version>
        <scope>test</scope>
    </dependency>
</dependencies>`,
          basicExample: `// UserServiceTest.java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock
    private UserRepository userRepository;
    
    @InjectMocks
    private UserService userService;
    
    @Test
    void testCreateUser() {
        // Given
        User user = new User("John", "john@example.com");
        when(userRepository.save(any(User.class)))
            .thenReturn(user);
        
        // When
        User result = userService.createUser("John", "john@example.com");
        
        // Then
        assertNotNull(result);
        assertEquals("John", result.getName());
        verify(userRepository).save(any(User.class));
    }
    
    @ParameterizedTest
    @ValueSource(strings = {"", " ", "invalid-email"})
    void testInvalidEmail(String email) {
        assertThrows(ValidationException.class, 
            () -> userService.createUser("John", email));
    }
}`,
          strengths: [
            'Extensive assertion library',
            'Powerful mocking capabilities',
            'Parameterized tests',
            'Integration with IDEs',
            'Parallel test execution'
          ],
          ecosystem: ['JUnit 5', 'Mockito', 'AssertJ', 'TestContainers', 'REST Assured']
        },
        targetFramework: {
          name: 'pytest',
          setupCode: `# Install pytest and plugins
pip install pytest pytest-asyncio pytest-mock pytest-cov

# Create test file
touch test_user_service.py

# Run tests
pytest -v

# With coverage
pytest --cov=myapp --cov-report=html`,
          basicExample: `# test_user_service.py
import pytest
from unittest.mock import Mock, patch
from myapp.services import UserService
from myapp.models import User

@pytest.fixture
def user_service():
    return UserService()

@pytest.fixture
def mock_repository():
    return Mock()

def test_create_user(user_service, mock_repository):
    # Given
    user_service.repository = mock_repository
    mock_repository.save.return_value = User("John", "john@example.com")
    
    # When
    result = user_service.create_user("John", "john@example.com")
    
    # Then
    assert result is not None
    assert result.name == "John"
    mock_repository.save.assert_called_once()

@pytest.mark.parametrize("email", ["", " ", "invalid-email"])
def test_invalid_email(user_service, email):
    with pytest.raises(ValidationError):
        user_service.create_user("John", email)

@pytest.mark.asyncio
async def test_async_operation(user_service):
    result = await user_service.async_operation()
    assert result == "expected_value"`,
          strengths: [
            'Simple and pythonic',
            'Powerful fixtures system',
            'Easy parameterization',
            'Rich plugin ecosystem',
            'Excellent error reporting'
          ],
          ecosystem: ['pytest', 'pytest-mock', 'pytest-asyncio', 'pytest-cov', 'tox']
        },
        migrationTips: [
          'pytest fixtures replace @Before/@After annotations',
          'Simple assert statements replace assertion methods',
          'Decorators replace annotations for test configuration',
          'Mock/patch replace Mockito functionality',
          'pytest.mark replaces JUnit categories/tags'
        ],
        commonPitfalls: [
          'Different mocking syntax and patterns',
          'No built-in test suites like JUnit',
          'Import and path issues in Python',
          'Different test discovery mechanisms',
          'Less IDE integration than JUnit'
        ]
      },
      {
        category: 'build',
        sourceFramework: {
          name: 'Maven/Gradle',
          setupCode: `# Maven
mvn archetype:generate \
  -DgroupId=com.example \
  -DartifactId=myapp \
  -DarchetypeArtifactId=maven-archetype-quickstart

# Gradle
gradle init --type java-application`,
          basicExample: `<!-- pom.xml -->
<project>
    <groupId>com.example</groupId>
    <artifactId>myapp</artifactId>
    <version>1.0.0</version>
    
    <properties>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>
    
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>

# Build commands
mvn clean install
mvn test
mvn package`,
          strengths: [
            'Dependency management',
            'Build lifecycle management',
            'Multi-module projects',
            'Plugin ecosystem',
            'IDE integration'
          ],
          ecosystem: ['Maven Central', 'Gradle Plugins', 'Nexus', 'Artifactory', 'Jenkins']
        },
        targetFramework: {
          name: 'pip/setuptools',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install build tools
pip install setuptools wheel twine

# Create setup.py
touch setup.py`,
          basicExample: `# setup.py
from setuptools import setup, find_packages

setup(
    name="myapp",
    version="1.0.0",
    author="Your Name",
    author_email="your.email@example.com",
    description="A sample Python package",
    packages=find_packages(),
    install_requires=[
        "django>=3.2",
        "requests>=2.25.0",
        "pandas>=1.2.0",
    ],
    extras_require={
        "dev": [
            "pytest>=6.0",
            "black>=21.0",
            "flake8>=3.9",
        ]
    },
    python_requires=">=3.7",
)

# requirements.txt
django>=3.2
requests>=2.25.0
pandas>=1.2.0

# Install dependencies
pip install -r requirements.txt
pip install -e .[dev]  # Install with dev dependencies`,
          strengths: [
            'Simple dependency management',
            'Virtual environments',
            'Easy package publishing',
            'Requirements files',
            'Editable installs'
          ],
          ecosystem: ['PyPI', 'pip', 'virtualenv', 'poetry', 'pipenv']
        },
        migrationTips: [
          'requirements.txt replaces pom.xml/build.gradle',
          'Virtual environments replace Java classpath',
          'pip replaces Maven/Gradle for dependencies',
          'setup.py defines package metadata',
          'No built-in build lifecycle like Maven'
        ],
        commonPitfalls: [
          'No transitive dependency resolution like Maven',
          'Virtual environment activation required',
          'Different versioning schemes',
          'No built-in repository management',
          'Less standardized project structure'
        ]
      }
    ]
};