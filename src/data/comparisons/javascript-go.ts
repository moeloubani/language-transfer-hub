import type { LanguageComparison } from '../../types/language';

export const javascriptGoComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Go',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Static typing with inference',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;`,
        targetCode: `var name string = "John"
var age int = 25
var isActive bool = true

// Or with inference
name := "John"
age := 25`
      },
      {
        topic: 'Functions',
        description: 'Explicit return types',
        sourceCode: `function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}`,
        targetCode: `func greet(name string, greeting string) string {
    if greeting == "" {
        greeting = "Hello"
    }
    return greeting + ", " + name + "!"
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Error Handling',
        description: 'No exceptions in Go',
        sourceExample: `try {
  let data = riskyOperation();
} catch (error) {
  console.error(error);
}`,
        targetExample: `data, err := riskyOperation()
if err != nil {
    fmt.Printf("Error: %v", err)
    return
}`,
        correctApproach: 'Always check error returns explicitly'
      }
    ],
    keyDifferences: [
      {
        topic: 'Concurrency',
        description: 'Built-in vs callback-based',
        sourceApproach: 'JavaScript uses callbacks, promises, async/await',
        targetApproach: 'Go has built-in goroutines and channels'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'Express.js',
          setupCode: `# Initialize project
npm init -y

# Install Express
npm install express cors helmet morgan
npm install -D nodemon @types/express

# Create server file
touch server.js`,
          basicExample: `// server.js
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.get('/api/users', async (req, res) => {
    try {
        const users = await db.users.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const user = await db.users.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await db.users.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});`,
          strengths: [
            'Simple and flexible',
            'Huge ecosystem',
            'Extensive middleware',
            'Easy to learn',
            'Great for rapid prototyping'
          ],
          ecosystem: ['npm', 'Passport.js', 'Mongoose', 'Socket.io', 'Express-validator']
        },
        targetFramework: {
          name: 'Gin',
          setupCode: `# Initialize Go module
go mod init myapp

# Install Gin
go get -u github.com/gin-gonic/gin

# Create main.go
touch main.go

# Run the server
go run main.go`,
          basicExample: `// main.go
package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
)

type User struct {
    ID    uint   \`json:"id"\`
    Name  string \`json:"name" binding:"required"\`
    Email string \`json:"email" binding:"required,email"\`
}

var users = []User{
    {ID: 1, Name: "John", Email: "john@example.com"},
}

func main() {
    r := gin.Default()
    
    // Middleware
    r.Use(cors.Default())
    
    // Routes
    api := r.Group("/api")
    {
        api.GET("/users", getUsers)
        api.POST("/users", createUser)
        api.GET("/users/:id", getUser)
        api.PUT("/users/:id", updateUser)
        api.DELETE("/users/:id", deleteUser)
    }
    
    r.Run(":3000") // localhost:3000
}

func getUsers(c *gin.Context) {
    c.JSON(http.StatusOK, users)
}

func createUser(c *gin.Context) {
    var newUser User
    
    if err := c.ShouldBindJSON(&newUser); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    
    newUser.ID = uint(len(users) + 1)
    users = append(users, newUser)
    
    c.JSON(http.StatusCreated, newUser)
}

func getUser(c *gin.Context) {
    id := c.Param("id")
    
    for _, user := range users {
        if fmt.Sprint(user.ID) == id {
            c.JSON(http.StatusOK, user)
            return
        }
    }
    
    c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
}`,
          strengths: [
            'High performance',
            'Built-in validation',
            'Middleware support',
            'JSON binding',
            'Production-ready'
          ],
          ecosystem: ['go mod', 'GORM', 'Gin middleware', 'Go-Redis', 'Viper']
        },
        migrationTips: [
          'Gin has similar routing to Express but with type safety',
          'Built-in request validation replaces express-validator',
          'Error handling is explicit with Go\'s error returns',
          'Middleware concept is similar but implementation differs',
          'Static typing catches errors at compile time'
        ],
        commonPitfalls: [
          'No global error handling like Express error middleware',
          'Must handle errors explicitly at each step',
          'JSON binding is strict by default',
          'Different approach to async operations',
          'Package management uses go mod instead of npm'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'Fastify',
          setupCode: `# Initialize project
npm init -y

# Install Fastify
npm install fastify @fastify/cors
npm install -D nodemon`,
          basicExample: `// server.js
const fastify = require('fastify')({ logger: true });

// Register plugins
fastify.register(require('@fastify/cors'));

// Schema definitions
const userSchema = {
    type: 'object',
    required: ['name', 'email'],
    properties: {
        name: { type: 'string', minLength: 1 },
        email: { type: 'string', format: 'email' }
    }
};

// Routes with schema validation
fastify.get('/users', async (request, reply) => {
    return await db.users.findAll();
});

fastify.post('/users', {
    schema: {
        body: userSchema,
        response: {
            201: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    name: { type: 'string' },
                    email: { type: 'string' }
                }
            }
        }
    }
}, async (request, reply) => {
    const user = await db.users.create(request.body);
    reply.code(201).send(user);
});

// Error handling
fastify.setErrorHandler((error, request, reply) => {
    reply.status(500).send({ error: error.message });
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
            'Extremely fast',
            'Schema validation',
            'TypeScript support',
            'Plugin ecosystem',
            'Automatic serialization'
          ],
          ecosystem: ['npm', 'Fastify plugins', 'Ajv', 'Pino logger', 'Mercurius']
        },
        targetFramework: {
          name: 'Echo',
          setupCode: `# Initialize Go module
go mod init myapp

# Install Echo
go get github.com/labstack/echo/v4
go get github.com/labstack/echo/v4/middleware

# Create main.go
touch main.go`,
          basicExample: `// main.go
package main

import (
    "net/http"
    "strconv"
    
    "github.com/labstack/echo/v4"
    "github.com/labstack/echo/v4/middleware"
    "github.com/go-playground/validator/v10"
)

type User struct {
    ID    int    \`json:"id"\`
    Name  string \`json:"name" validate:"required"\`
    Email string \`json:"email" validate:"required,email"\`
}

type CustomValidator struct {
    validator *validator.Validate
}

func (cv *CustomValidator) Validate(i interface{}) error {
    return cv.validator.Struct(i)
}

var users = []User{}

func main() {
    e := echo.New()
    
    // Validator
    e.Validator = &CustomValidator{validator: validator.New()}
    
    // Middleware
    e.Use(middleware.Logger())
    e.Use(middleware.Recover())
    e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
        AllowOrigins: []string{"*"},
    }))
    
    // Routes
    e.GET("/users", getUsers)
    e.POST("/users", createUser)
    e.GET("/users/:id", getUser)
    e.PUT("/users/:id", updateUser)
    e.DELETE("/users/:id", deleteUser)
    
    // Custom error handler
    e.HTTPErrorHandler = customHTTPErrorHandler
    
    e.Logger.Fatal(e.Start(":3000"))
}

func getUsers(c echo.Context) error {
    return c.JSON(http.StatusOK, users)
}

func createUser(c echo.Context) error {
    u := new(User)
    
    if err := c.Bind(u); err != nil {
        return echo.NewHTTPError(http.StatusBadRequest, err.Error())
    }
    
    if err := c.Validate(u); err != nil {
        return echo.NewHTTPError(http.StatusBadRequest, err.Error())
    }
    
    u.ID = len(users) + 1
    users = append(users, *u)
    
    return c.JSON(http.StatusCreated, u)
}

func getUser(c echo.Context) error {
    id, err := strconv.Atoi(c.Param("id"))
    if err != nil {
        return echo.NewHTTPError(http.StatusBadRequest, "Invalid ID")
    }
    
    for _, u := range users {
        if u.ID == id {
            return c.JSON(http.StatusOK, u)
        }
    }
    
    return echo.NewHTTPError(http.StatusNotFound, "User not found")
}

func customHTTPErrorHandler(err error, c echo.Context) {
    code := http.StatusInternalServerError
    message := "Internal server error"
    
    if he, ok := err.(*echo.HTTPError); ok {
        code = he.Code
        message = he.Message.(string)
    }
    
    c.JSON(code, map[string]string{"error": message})
}`,
          strengths: [
            'High performance',
            'Extensible middleware',
            'Clean API',
            'Good documentation',
            'WebSocket support'
          ],
          ecosystem: ['go mod', 'Echo middleware', 'JWT middleware', 'Validator', 'Swagger']
        },
        migrationTips: [
          'Echo middleware chain is similar to Fastify plugins',
          'Both focus on high performance',
          'Schema validation requires external validator in Echo',
          'Error handling is more explicit in Go',
          'Route parameters use :param syntax like Express'
        ],
        commonPitfalls: [
          'Validation is not built-in like Fastify schemas',
          'Error types are different (error interface vs exceptions)',
          'No automatic serialization of responses',
          'Static typing requires more boilerplate',
          'Async handling is different with goroutines'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'Jest + Supertest',
          setupCode: `# Install testing dependencies
npm install --save-dev jest supertest
npm install --save-dev @types/jest @types/supertest

# Add to package.json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}`,
          basicExample: `// app.test.js
const request = require('supertest');
const app = require('./app');

describe('User API', () => {
    describe('GET /users', () => {
        test('should return all users', async () => {
            const response = await request(app)
                .get('/users')
                .expect('Content-Type', /json/)
                .expect(200);
            
            expect(response.body).toBeInstanceOf(Array);
        });
    });
    
    describe('POST /users', () => {
        test('should create a new user', async () => {
            const newUser = {
                name: 'John Doe',
                email: 'john@example.com'
            };
            
            const response = await request(app)
                .post('/users')
                .send(newUser)
                .expect(201);
            
            expect(response.body).toMatchObject(newUser);
            expect(response.body).toHaveProperty('id');
        });
        
        test('should validate required fields', async () => {
            const response = await request(app)
                .post('/users')
                .send({ name: 'John' }) // missing email
                .expect(400);
            
            expect(response.body).toHaveProperty('error');
        });
    });
    
    // Mocking example
    describe('with mocked database', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });
        
        test('handles database errors', async () => {
            const mockDB = require('./db');
            mockDB.users.create = jest.fn()
                .mockRejectedValue(new Error('DB Error'));
            
            const response = await request(app)
                .post('/users')
                .send({ name: 'John', email: 'john@test.com' })
                .expect(500);
            
            expect(response.body.error).toBe('Internal server error');
        });
    });
});`,
          strengths: [
            'Fast test execution',
            'Great mocking',
            'Supertest for HTTP',
            'Watch mode',
            'Coverage reports'
          ],
          ecosystem: ['npm', 'Supertest', 'MSW', 'Jest mocks', 'Testing Library']
        },
        targetFramework: {
          name: 'Go Testing + Testify',
          setupCode: `# Install testify (optional but recommended)
go get github.com/stretchr/testify

# Run tests
go test ./...

# Run with coverage
go test -cover ./...

# Run with verbose output
go test -v ./...`,
          basicExample: `// main_test.go
package main

import (
    "bytes"
    "encoding/json"
    "net/http"
    "net/http/httptest"
    "testing"
    
    "github.com/gin-gonic/gin"
    "github.com/stretchr/testify/assert"
    "github.com/stretchr/testify/suite"
)

// Basic test
func TestGetUsers(t *testing.T) {
    // Setup
    gin.SetMode(gin.TestMode)
    router := setupRouter()
    
    // Create request
    w := httptest.NewRecorder()
    req, _ := http.NewRequest("GET", "/api/users", nil)
    
    // Perform request
    router.ServeHTTP(w, req)
    
    // Assertions
    assert.Equal(t, http.StatusOK, w.Code)
    
    var users []User
    err := json.Unmarshal(w.Body.Bytes(), &users)
    assert.NoError(t, err)
    assert.NotEmpty(t, users)
}

func TestCreateUser(t *testing.T) {
    router := setupRouter()
    
    user := User{
        Name:  "John Doe",
        Email: "john@example.com",
    }
    
    jsonValue, _ := json.Marshal(user)
    
    w := httptest.NewRecorder()
    req, _ := http.NewRequest("POST", "/api/users", bytes.NewBuffer(jsonValue))
    req.Header.Set("Content-Type", "application/json")
    
    router.ServeHTTP(w, req)
    
    assert.Equal(t, http.StatusCreated, w.Code)
    
    var createdUser User
    err := json.Unmarshal(w.Body.Bytes(), &createdUser)
    assert.NoError(t, err)
    assert.Equal(t, user.Name, createdUser.Name)
    assert.Equal(t, user.Email, createdUser.Email)
    assert.NotZero(t, createdUser.ID)
}

// Table-driven tests
func TestUserValidation(t *testing.T) {
    tests := []struct {
        name       string
        user       User
        wantStatus int
    }{
        {
            name:       "valid user",
            user:       User{Name: "John", Email: "john@example.com"},
            wantStatus: http.StatusCreated,
        },
        {
            name:       "missing name",
            user:       User{Email: "john@example.com"},
            wantStatus: http.StatusBadRequest,
        },
        {
            name:       "invalid email",
            user:       User{Name: "John", Email: "invalid-email"},
            wantStatus: http.StatusBadRequest,
        },
    }
    
    router := setupRouter()
    
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            jsonValue, _ := json.Marshal(tt.user)
            
            w := httptest.NewRecorder()
            req, _ := http.NewRequest("POST", "/api/users", bytes.NewBuffer(jsonValue))
            req.Header.Set("Content-Type", "application/json")
            
            router.ServeHTTP(w, req)
            
            assert.Equal(t, tt.wantStatus, w.Code)
        })
    }
}

// Test suite example
type UserTestSuite struct {
    suite.Suite
    router *gin.Engine
    users  []User
}

func (suite *UserTestSuite) SetupTest() {
    suite.router = setupRouter()
    suite.users = []User{
        {ID: 1, Name: "Test User", Email: "test@example.com"},
    }
}

func (suite *UserTestSuite) TestGetAllUsers() {
    w := httptest.NewRecorder()
    req, _ := http.NewRequest("GET", "/api/users", nil)
    
    suite.router.ServeHTTP(w, req)
    
    suite.Equal(http.StatusOK, w.Code)
}

func TestUserSuite(t *testing.T) {
    suite.Run(t, new(UserTestSuite))
}`,
          strengths: [
            'Built into Go',
            'Fast execution',
            'Table-driven tests',
            'Benchmarking support',
            'Race detection'
          ],
          ecosystem: ['go test', 'Testify', 'Gomock', 'Ginkgo', 'GoConvey']
        },
        migrationTips: [
          'httptest package provides similar functionality to Supertest',
          'Table-driven tests replace Jest\'s test.each',
          'assert package (testify) provides Jest-like assertions',
          'No built-in mocking, use interfaces or gomock',
          'Coverage is built into go test'
        ],
        commonPitfalls: [
          'Less convenient mocking than Jest',
          'No watch mode by default (use external tools)',
          'Setup/teardown is more manual',
          'Parallel tests need explicit t.Parallel()',
          'No snapshot testing built-in'
        ]
      },
      {
        category: 'fullstack',
        sourceFramework: {
          name: 'Next.js',
          setupCode: `# Create Next.js app with TypeScript
npx create-next-app@latest myapp --typescript
cd myapp

# Install additional dependencies
npm install axios swr
npm install @prisma/client prisma

# Initialize Prisma
npx prisma init`,
          basicExample: `// pages/api/users/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      const users = await prisma.user.findMany();
      res.status(200).json(users);
      break;
      
    case 'POST':
      try {
        const user = await prisma.user.create({
          data: req.body
        });
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
      
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(\`Method \${req.method} Not Allowed\`);
  }
}

// pages/users.tsx
import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function UsersPage() {
  const { data: users, error, mutate } = useSWR('/api/users', fetcher);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    
    if (response.ok) {
      mutate(); // Refresh the data
      setName('');
      setEmail('');
    }
  };
  
  if (error) return <div>Failed to load users</div>;
  if (!users) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>Users</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Add User</button>
      </form>
      
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}`,
          strengths: [
            'Full-stack React',
            'File-based routing',
            'API routes',
            'SSR/SSG support',
            'Great DX'
          ],
          ecosystem: ['npm', 'React', 'Vercel', 'Prisma', 'NextAuth.js']
        },
        targetFramework: {
          name: 'Go + React (Separate)',
          setupCode: `# Backend setup
mkdir myapp-backend && cd myapp-backend
go mod init myapp

# Install dependencies
go get github.com/gin-gonic/gin
go get github.com/gin-contrib/cors

# Frontend setup (separate directory)
npx create-react-app myapp-frontend --typescript
cd myapp-frontend
npm install axios`,
          basicExample: `// Backend: main.go
package main

import (
    "github.com/gin-gonic/gin"
    "github.com/gin-contrib/cors"
)

type User struct {
    ID    uint   \`json:"id" gorm:"primaryKey"\`
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}

func main() {
    r := gin.Default()
    
    // CORS for React frontend
    config := cors.DefaultConfig()
    config.AllowOrigins = []string{"http://localhost:3000"}
    r.Use(cors.New(config))
    
    // Routes
    r.GET("/api/users", getUsers)
    r.POST("/api/users", createUser)
    
    r.Run(":8080")
}

// Frontend: App.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get(\`\${API_URL}/users\`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await axios.post(\`\${API_URL}/users\`, { name, email });
      fetchUsers(); // Refresh the list
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  
  return (
    <div className="App">
      <h1>Users</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Add User</button>
      </form>
      
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;`,
          strengths: [
            'Clear separation of concerns',
            'Go performance for API',
            'React flexibility for UI',
            'Can deploy separately',
            'Type safety on both ends'
          ],
          ecosystem: ['go mod', 'npm', 'Gin/Echo', 'React', 'Docker']
        },
        migrationTips: [
          'Next.js combines frontend and backend, Go separates them',
          'API routes in Next.js vs separate Go server',
          'CORS configuration needed for separate deployments',
          'Different deployment strategies (Vercel vs containers)',
          'Session handling differs significantly'
        ],
        commonPitfalls: [
          'CORS issues during development',
          'Managing two separate codebases',
          'Different build and deployment processes',
          'API versioning considerations',
          'Authentication complexity across services'
        ]
      }
    ]
};