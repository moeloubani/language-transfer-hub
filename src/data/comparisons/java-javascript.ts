import type { LanguageComparison } from '../../types/language';

export const javaJavascriptComparison: LanguageComparison = {
    sourceLanguage: 'Java',
    targetLanguage: 'JavaScript',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration with types',
        sourceCode: `// Java requires type declarations
String name = "John";
int age = 25;
boolean isActive = true;
final double PI = 3.14159;

// Java 10+ has var for type inference
var message = "Hello"; // String inferred
var count = 42;        // int inferred`,
        targetCode: `// var: function-scoped, legacy
var message = "Hello";
var message = "Hi"; // OK - can redeclare

// let: block-scoped, modern
let age = 25;
age = 26; // OK - can reassign
{ 
  let age = 30; // OK - different scope
}

// const: block-scoped, preferred
const name = "John";
// name = "Jane"; // Error: can't reassign
const PI = 3.14159; // Like Java's final

// Type inference (no explicit types needed)
const inferred = "Hello"; // String type inferred
let count = 42;           // Number type inferred`
      },
      {
        topic: 'Arrays',
        description: 'Array creation and manipulation',
        sourceCode: `// Fixed size array
int[] numbers = new int[5];
numbers[0] = 10;

// Array with values
String[] fruits = {"apple", "banana", "orange"};

// Dynamic array
ArrayList<String> list = new ArrayList<>();
list.add("item");`,
        targetCode: `// Dynamic arrays by default
const numbers = new Array(5);
numbers[0] = 10;

// Array with values
const fruits = ["apple", "banana", "orange"];

// All arrays are dynamic
const list = [];
list.push("item");`
      },
      {
        topic: 'Methods/Functions',
        description: 'Method definition',
        sourceCode: `public class Utils {
    // Static method
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Instance method
    public String greet(String name) {
        return "Hello, " + name;
    }
    
    // Method overloading
    public int multiply(int a, int b) {
        return a * b;
    }
    
    public double multiply(double a, double b) {
        return a * b;
    }
    
    // Varargs
    public int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) {
            total += n;
        }
        return total;
    }
    
    // Generic method
    public <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.println(element);
        }
    }
}`,
        targetCode: `// Standalone function declaration
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// Function expression
const multiply = function(a, b) {
    return a * b;
};

// Method in class
class Utils {
    // Instance method
    greet(name) {
        return \`Hello, \${name}\`;
    }
    
    // Static method
    static add(a, b) {
        return a + b;
    }
}

// No method overloading - use default params or check types
function multiplyFlexible(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    throw new Error('Both arguments must be numbers');
}

// Rest parameters (like varargs)
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

// Arrow function with rest params
const sumArrow = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);

// Generic-like behavior (dynamic typing)
function printArray(array) {
    array.forEach(element => console.log(element));
}

// Higher-order function example
const createMultiplier = (factor) => (number) => number * factor;
const double = createMultiplier(2);
const triple = createMultiplier(3);

// Usage
console.log(add(5, 3));
console.log(Utils.add(5, 3));
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(double(5)); // 10`
      },
      {
        topic: 'Classes and Objects',
        description: 'Object-oriented programming',
        sourceCode: `public class Person {
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
}

Person person = new Person("John", 30);`,
        targetCode: `class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    
    get name() {
        return this._name;
    }
    
    set name(value) {
        this._name = value;
    }
}

const person = new Person("John", 30);`
      },
      {
        topic: 'Loops',
        description: 'Different loop types',
        sourceCode: `// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Enhanced for loop
int[] nums = {1, 2, 3, 4, 5};
for (int num : nums) {
    System.out.println(num);
}

// While loop
int j = 0;
while (j < 5) {
    System.out.println(j);
    j++;
}`,
        targetCode: `// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For-of loop
let nums = [1, 2, 3, 4, 5];
for (let num of nums) {
    console.log(num);
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}`
      },
      {
        topic: 'Async Programming',
        description: 'Asynchronous operations and concurrency',
        sourceCode: `import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class AsyncExample {
    // CompletableFuture for async operations
    public static CompletableFuture<String> fetchDataAsync(String url) {
        return CompletableFuture.supplyAsync(() -> {
            // Simulate HTTP request
            try {
                Thread.sleep(1000);
                return "Data from " + url;
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        });
    }
    
    // Combining multiple async operations
    public static void main(String[] args) {
        CompletableFuture<String> future1 = fetchDataAsync("api1.com");
        CompletableFuture<String> future2 = fetchDataAsync("api2.com");
        
        // Wait for both to complete
        CompletableFuture<Void> combinedFuture = CompletableFuture.allOf(future1, future2);
        
        combinedFuture.thenRun(() -> {
            try {
                String result1 = future1.get();
                String result2 = future2.get();
                System.out.println(result1 + ", " + result2);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        
        // Chaining operations
        fetchDataAsync("api.com")
            .thenApply(data -> data.toUpperCase())
            .thenAccept(System.out::println)
            .exceptionally(ex -> {
                System.err.println("Error: " + ex.getMessage());
                return null;
            });
    }
}`,
        targetCode: `// Async/await for asynchronous operations
async function fetchDataAsync(url) {
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

// Promise-based approach
function fetchDataPromise(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            return response.text();
        });
}

// Combining multiple async operations
async function main() {
    try {
        // Parallel execution with Promise.all
        const [result1, result2] = await Promise.all([
            fetchDataAsync("https://api1.com"),
            fetchDataAsync("https://api2.com")
        ]);
        console.log(result1, result2);
        
        // Sequential execution
        const data1 = await fetchDataAsync("https://api.com");
        const data2 = await fetchDataAsync("https://api2.com");
        console.log(data1, data2);
        
        // Promise.allSettled for handling mixed results
        const results = await Promise.allSettled([
            fetchDataAsync("https://api1.com"),
            fetchDataAsync("https://api2.com"),
            fetchDataAsync("https://api3.com")
        ]);
        
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(\`Request \${index + 1} succeeded: \${result.value}\`);
            } else {
                console.log(\`Request \${index + 1} failed: \${result.reason}\`);
            }
        });
    } catch (error) {
        console.error("Main error:", error);
    }
}

// Chaining operations
fetchDataAsync("https://api.com")
    .then(data => data.toUpperCase())
    .then(uppercased => console.log(uppercased))
    .catch(error => console.error("Error:", error));

// Creating custom promises
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Using async/await with delay
async function delayedOperation() {
    console.log("Starting...");
    await delay(2000);
    console.log("Finished after 2 seconds");
}

// Run async function
main();
delayedOperation();`
      }
    ],
    commonPitfalls: [
      {
        title: 'Type Safety',
        description: 'Java is strongly typed, JavaScript is not',
        sourceExample: `int number = 5;
number = "text"; // Compilation error`,
        targetExample: `let number = 5;
number = "text"; // No error!`,
        correctApproach: 'Be careful with type changes in JavaScript, consider using TypeScript for type safety'
      },
      {
        title: 'Null vs Undefined',
        description: 'JavaScript has both null and undefined',
        sourceExample: `String text = null;
if (text == null) {
    // Handle null
}`,
        targetExample: `let text;
if (text === null || text === undefined) {
    // Handle both cases
}
// Or use: if (text == null) for both`,
        correctApproach: 'Understand the difference between null and undefined in JavaScript'
      },
      {
        title: 'Method Overloading',
        description: 'Java supports overloading, JavaScript does not',
        sourceExample: `public void print(String s) { }
public void print(int i) { }
public void print(String s, int i) { }`,
        targetExample: `function print(...args) {
    if (typeof args[0] === 'string') {
        // Handle string
    } else if (typeof args[0] === 'number') {
        // Handle number
    }
}`,
        correctApproach: 'Use default parameters, rest parameters, or type checking in JavaScript'
      }
    ],
    keyDifferences: [
      {
        topic: 'Compilation',
        description: 'Compiled vs Interpreted',
        sourceApproach: 'Java is compiled to bytecode, runs on JVM',
        targetApproach: 'JavaScript is interpreted (JIT compiled at runtime)'
      },
      {
        topic: 'Threading',
        description: 'Concurrency models',
        sourceApproach: 'Java has true multi-threading with Thread class and concurrent utilities',
        targetApproach: 'JavaScript is single-threaded with event loop, uses Web Workers for parallelism'
      },
      {
        topic: 'Access Modifiers',
        description: 'Encapsulation approaches',
        sourceApproach: 'Java has public, private, protected, and package-private',
        targetApproach: 'JavaScript has public by default, # for private fields (ES2022)'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'Spring Boot',
          setupCode: `# Using Spring Initializr
# Visit https://start.spring.io or use CLI:
curl https://start.spring.io/starter.zip \\
  -d dependencies=web,jpa,h2 \\
  -d name=myapp \\
  -d packageName=com.example \\
  -o myapp.zip

unzip myapp.zip
cd myapp

# Run with Maven
./mvnw spring-boot:run

# Or with Gradle
./gradlew bootRun`,
          basicExample: `// UserController.java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User saved = userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return userRepository.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}

// User.java (Entity)
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
    
    // Getters, setters, constructors
}

// UserRepository.java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}`,
          strengths: [
            'Enterprise-grade framework',
            'Excellent dependency injection',
            'Built-in security (Spring Security)',
            'Comprehensive data access (Spring Data)',
            'Production-ready features (metrics, health checks)',
            'Strong typing and compile-time safety'
          ],
          ecosystem: ['Maven/Gradle', 'Spring Data JPA', 'Spring Security', 'Spring Cloud', 'Hibernate']
        },
        targetFramework: {
          name: 'Express.js + TypeScript',
          setupCode: `# Initialize TypeScript project
npm init -y
npm install express cors helmet morgan
npm install -D typescript @types/express @types/node nodemon ts-node

# TypeScript config
npx tsc --init

# Create source directory
mkdir src
touch src/server.ts

# package.json scripts
"scripts": {
  "dev": "nodemon src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}`,
          basicExample: `// server.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// User interface
interface CreateUserDto {
  name: string;
  email: string;
}

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const { name, email }: CreateUserDto = req.body;
    
    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email required' });
    }
    
    const user = await prisma.user.create({
      data: { name, email }
    });
    
    res.status(201).json(user);
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(409).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.get('/api/users/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  const user = await prisma.user.findUnique({
    where: { id }
  });
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
          strengths: [
            'Lightweight and flexible',
            'TypeScript adds type safety',
            'Fast development cycle',
            'Large ecosystem',
            'Easy to understand and customize',
            'Great for microservices'
          ],
          ecosystem: ['npm', 'TypeScript', 'Prisma', 'class-validator', 'Winston']
        },
        migrationTips: [
          'Use TypeScript for type safety similar to Java',
          'Prisma or TypeORM can provide similar ORM experience to JPA',
          'Use class-validator for DTO validation like Spring\'s @Valid',
          'Dependency injection available via InversifyJS or TypeDI',
          'Structure project with controllers, services, and repositories pattern'
        ],
        commonPitfalls: [
          'No built-in dependency injection container',
          'Manual setup required for many features Spring Boot includes',
          'Different approach to configuration (env vars vs application.properties)',
          'No built-in transaction management',
          'Security features need to be added manually'
        ]
      },
      {
        category: 'fullstack',
        sourceFramework: {
          name: 'Spring Boot + Angular',
          setupCode: `# Backend: Spring Boot
spring init --dependencies=web,jpa,security myapp-backend

# Frontend: Angular
npm install -g @angular/cli
ng new myapp-frontend --routing --style=scss
cd myapp-frontend
ng serve`,
          basicExample: `// Backend: UserController.java
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping
    public ResponseEntity<List<UserDto>> getUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody CreateUserDto dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(userService.createUser(dto));
    }
}

// Frontend: user.service.ts
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';
  
  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  
  createUser(user: CreateUserDto): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}

// user-list.component.ts
@Component({
  selector: 'app-user-list',
  template: \`
    <div *ngIf="loading">Loading...</div>
    <ul *ngIf="!loading">
      <li *ngFor="let user of users">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  \`
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading = true;
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading users:', error);
        this.loading = false;
      }
    });
  }
}`,
          strengths: [
            'Enterprise-ready full-stack solution',
            'Strong typing throughout',
            'Excellent tooling and IDE support',
            'Built-in security features',
            'Mature ecosystem'
          ],
          ecosystem: ['Maven/Gradle', 'npm', 'Angular Material', 'RxJS', 'NgRx']
        },
        targetFramework: {
          name: 'Next.js + tRPC',
          setupCode: `# Create Next.js app with TypeScript
npx create-next-app@latest myapp --typescript --tailwind --app
cd myapp

# Install tRPC and dependencies
npm install @trpc/server @trpc/client @trpc/react-query
npm install @tanstack/react-query zod
npm install @prisma/client prisma

# Initialize Prisma
npx prisma init`,
          basicExample: `// Backend: server/trpc/routers/user.ts
import { z } from 'zod';
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  
  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      email: z.string().email(),
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.user.create({
        data: input,
      });
    }),
    
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input.id },
      });
      
      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        });
      }
      
      return user;
    }),
});

// Frontend: app/users/page.tsx
'use client';

import { api } from '@/trpc/react';

export default function UsersPage() {
  const { data: users, isLoading, error } = api.user.getAll.useQuery();
  
  const createUser = api.user.create.useMutation({
    onSuccess: () => {
      // Invalidate and refetch
      utils.user.getAll.invalidate();
    },
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => 
          createUser.mutate({ 
            name: 'New User', 
            email: 'new@example.com' 
          })
        }
      >
        Add User
      </button>
    </div>
  );
}`,
          strengths: [
            'End-to-end type safety',
            'No API contract mismatch',
            'Automatic client generation',
            'Built-in data fetching and caching',
            'Server-side rendering support',
            'Modern React patterns'
          ],
          ecosystem: ['npm', 'Prisma', 'NextAuth.js', 'React Query', 'Tailwind CSS']
        },
        migrationTips: [
          'tRPC provides type-safe APIs similar to Spring\'s strong typing',
          'Prisma offers similar functionality to JPA/Hibernate',
          'Next.js App Router provides structure like Spring MVC',
          'Zod validation replaces Bean Validation annotations',
          'React Query handles state management like Spring\'s caching'
        ],
        commonPitfalls: [
          'Different mental model for routing (file-based vs annotation-based)',
          'No built-in dependency injection',
          'Authentication/authorization needs manual setup',
          'Different deployment model than traditional Java apps',
          'Learning curve for React ecosystem if coming from Angular'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'JUnit + Mockito',
          setupCode: `<!-- Maven dependencies -->
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
    void testGetAllUsers() {
        // Given
        List<User> expectedUsers = Arrays.asList(
            new User(1L, "John", "john@example.com"),
            new User(2L, "Jane", "jane@example.com")
        );
        when(userRepository.findAll()).thenReturn(expectedUsers);
        
        // When
        List<User> actualUsers = userService.getAllUsers();
        
        // Then
        assertEquals(expectedUsers, actualUsers);
        verify(userRepository, times(1)).findAll();
    }
    
    @Test
    void testCreateUser() {
        // Given
        CreateUserDto dto = new CreateUserDto("John", "john@example.com");
        User savedUser = new User(1L, "John", "john@example.com");
        when(userRepository.save(any(User.class))).thenReturn(savedUser);
        
        // When
        User result = userService.createUser(dto);
        
        // Then
        assertNotNull(result);
        assertEquals("John", result.getName());
        verify(userRepository).save(argThat(user -> 
            user.getName().equals("John") && 
            user.getEmail().equals("john@example.com")
        ));
    }
    
    @ParameterizedTest
    @ValueSource(strings = {"", " ", "invalid-email"})
    void testInvalidEmail(String email) {
        CreateUserDto dto = new CreateUserDto("John", email);
        
        assertThrows(ValidationException.class, () -> {
            userService.createUser(dto);
        });
    }
}

// Integration test
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerIntegrationTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Test
    void testCreateUserEndpoint() throws Exception {
        String userJson = "{\"name\":\"John\",\"email\":\"john@example.com\"}";
        
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userJson))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("John"))
                .andExpect(jsonPath("$.email").value("john@example.com"));
    }
}`,
          strengths: [
            'Mature testing framework',
            'Excellent mocking capabilities',
            'Parameterized tests',
            'Spring Boot test support',
            'Good IDE integration'
          ],
          ecosystem: ['Maven/Gradle', 'Mockito', 'AssertJ', 'REST Assured', 'Testcontainers']
        },
        targetFramework: {
          name: 'Jest',
          setupCode: `# Install Jest and testing utilities
npm install --save-dev jest @types/jest ts-jest
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev supertest @types/supertest

# Create Jest config
npx ts-jest config:init

# package.json scripts
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}`,
          basicExample: `// userService.test.ts
import { UserService } from './userService';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

describe('UserService', () => {
  let userService: UserService;
  let prisma: DeepMockProxy<PrismaClient>;
  
  beforeEach(() => {
    prisma = mockDeep<PrismaClient>();
    userService = new UserService(prisma);
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('getAllUsers returns all users', async () => {
    // Given
    const expectedUsers = [
      { id: 1, name: 'John', email: 'john@example.com' },
      { id: 2, name: 'Jane', email: 'jane@example.com' }
    ];
    prisma.user.findMany.mockResolvedValue(expectedUsers);
    
    // When
    const actualUsers = await userService.getAllUsers();
    
    // Then
    expect(actualUsers).toEqual(expectedUsers);
    expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
  });
  
  test('createUser creates and returns user', async () => {
    // Given
    const createDto = { name: 'John', email: 'john@example.com' };
    const savedUser = { id: 1, ...createDto, createdAt: new Date() };
    prisma.user.create.mockResolvedValue(savedUser);
    
    // When
    const result = await userService.createUser(createDto);
    
    // Then
    expect(result).toEqual(savedUser);
    expect(prisma.user.create).toHaveBeenCalledWith({
      data: createDto
    });
  });
  
  // Parameterized tests
  test.each([
    ['', 'test@test.com', 'Name is required'],
    ['Test', '', 'Email is required'],
    ['Test', 'invalid-email', 'Invalid email format'],
  ])('validates user input: name=%s, email=%s', async (name, email, expectedError) => {
    const createDto = { name, email };
    
    await expect(userService.createUser(createDto))
      .rejects
      .toThrow(expectedError);
  });
});

// Integration test with supertest
import request from 'supertest';
import { app } from './app';

describe('User API Integration Tests', () => {
  test('POST /api/users creates a new user', async () => {
    const userData = {
      name: 'John',
      email: 'john@example.com'
    };
    
    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect('Content-Type', /json/)
      .expect(201);
      
    expect(response.body).toMatchObject({
      name: 'John',
      email: 'john@example.com',
      id: expect.any(Number)
    });
  });
  
  test('GET /api/users returns user list', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
      
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toMatchSnapshot();
  });
});`,
          strengths: [
            'Fast test execution',
            'Excellent mocking with jest.mock',
            'Snapshot testing',
            'Great TypeScript support',
            'Watch mode for TDD',
            'Built-in code coverage'
          ],
          ecosystem: ['npm', 'ts-jest', 'Supertest', 'Testing Library', 'MSW']
        },
        migrationTips: [
          'Jest\'s describe/test structure is similar to JUnit\'s @Nested/@Test',
          'beforeEach/afterEach replace @BeforeEach/@AfterEach',
          'jest.mock() provides similar functionality to @Mock',
          'Supertest replaces MockMvc for API testing',
          'test.each() replaces @ParameterizedTest'
        ],
        commonPitfalls: [
          'Mock setup is more manual than Mockito\'s annotations',
          'No built-in dependency injection for tests',
          'Async tests require different patterns',
          'TypeScript configuration can be complex',
          'Database testing requires more setup than @DataJpaTest'
        ]
      },
      {
        category: 'build',
        sourceFramework: {
          name: 'Maven / Gradle',
          setupCode: `# Maven project structure
myapp/
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/
│   │   └── resources/
│   └── test/
│       └── java/

# Gradle project structure  
myapp/
├── build.gradle
├── settings.gradle
└── src/
    ├── main/
    └── test/`,
          basicExample: `<!-- pom.xml -->
<project>
  <groupId>com.example</groupId>
  <artifactId>myapp</artifactId>
  <version>1.0.0</version>
  <packaging>jar</packaging>
  
  <properties>
    <java.version>11</java.version>
    <spring.boot.version>2.7.0</spring.boot.version>
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

// build.gradle
plugins {
    id 'java'
    id 'org.springframework.boot' version '2.7.0'
}

group = 'com.example'
version = '1.0.0'
sourceCompatibility = '11'

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

tasks.named('test') {
    useJUnitPlatform()
}`,
          strengths: [
            'Dependency management',
            'Build lifecycle management',
            'Multi-module project support',
            'Plugin ecosystem',
            'IDE integration'
          ],
          ecosystem: ['Maven Central', 'Gradle Plugins', 'Spring Boot Plugin', 'JUnit', 'JAR/WAR packaging']
        },
        targetFramework: {
          name: 'npm / Yarn',
          setupCode: `# Initialize npm project
npm init -y

# Or with Yarn
yarn init -y

# Install dependencies
npm install express typescript
npm install --save-dev @types/node @types/express

# Scripts in package.json
"scripts": {
  "start": "node dist/index.js",
  "dev": "nodemon src/index.ts",
  "build": "tsc",
  "test": "jest",
  "lint": "eslint src/**/*.ts"
}`,
          basicExample: `// package.json
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "My Node.js app",
  "main": "dist/index.js",
  "scripts": {
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "test": "jest",
    "lint": "eslint src/**/*.ts",
    "prebuild": "npm run lint",
    "postbuild": "npm run test"
  },
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5",
    "helmet": "^5.1.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^18.0.0",
    "typescript": "^4.7.0",
    "nodemon": "^2.0.0",
    "jest": "^28.0.0",
    "eslint": "^8.0.0"
  },
  "engines": {
    "node": ">=16.0.0",
    "npm": ">=8.0.0"
  }
}

// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`,
          strengths: [
            'Simple dependency management',
            'Large package ecosystem (npm)',
            'Fast installation with lockfiles',
            'Script running capabilities',
            'Version management with nvm'
          ],
          ecosystem: ['npm registry', 'ESLint', 'Prettier', 'TypeScript', 'Webpack/Vite']
        },
        migrationTips: [
          'package.json is similar to pom.xml/build.gradle',
          'npm scripts replace Maven goals/Gradle tasks',
          'Use workspaces for multi-module projects',
          'npm audit replaces dependency vulnerability scanning',
          'Consider pnpm or yarn for better performance'
        ],
        commonPitfalls: [
          'No built-in lifecycle phases like Maven',
          'Dependency conflicts can be harder to resolve',
          'No transitive dependency management',
          'Security vulnerabilities in dependencies need attention',
          'Different versioning strategies (semver)'
        ]
      }
    ]
};