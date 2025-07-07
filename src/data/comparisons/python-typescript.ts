import type { LanguageComparison } from '../../types/language';

export const pythonTypescriptComparison: LanguageComparison = {
    sourceLanguage: 'Python',
    targetLanguage: 'TypeScript',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Type annotations in both languages',
        sourceCode: `# Basic types
name: str = "John"
age: int = 25
is_active: bool = True
score: float = 95.5

# Type inference
inferred_name = "John"  # Type: str

# Union types
from typing import Union
value: Union[str, int] = 42
value = "now a string"

# Optional types
from typing import Optional
maybe_name: Optional[str] = None
maybe_name = "John"`,
        targetCode: `// Basic types
const name: string = "John";
const age: number = 25;
const isActive: boolean = true;
const score: number = 95.5;

// Type inference
const inferredName = "John"; // Type: string

// Union types
let value: string | number = 42;
value = "now a string";

// Optional types
let maybeName: string | null = null;
maybeName = "John";

// Using undefined
let maybeAge: number | undefined = undefined;`
      },
      {
        topic: 'Collections and Generics',
        description: 'Lists/Arrays and Dictionaries/Objects with types',
        sourceCode: `from typing import List, Dict, Tuple, Set

# List with type
numbers: List[int] = [1, 2, 3, 4, 5]
names: List[str] = ["Alice", "Bob"]

# Dictionary with types
person: Dict[str, Union[str, int]] = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Tuple
coordinates: Tuple[float, float] = (10.5, 20.3)

# Set
unique_ids: Set[int] = {1, 2, 3, 4}

# Generic type
from typing import TypeVar, Generic

T = TypeVar('T')

class Container(Generic[T]):
    def __init__(self, value: T):
        self.value = value
    
    def get(self) -> T:
        return self.value

string_container = Container[str]("Hello")
number_container = Container[int](42)`,
        targetCode: `// Array with type
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Alice", "Bob"];

// Object with types
const person: { name: string; age: number; city: string } = {
    name: "John",
    age: 30,
    city: "New York"
};

// Better with interface
interface Person {
    name: string;
    age: number;
    city: string;
}

const person2: Person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Tuple
const coordinates: [number, number] = [10.5, 20.3];

// Set
const uniqueIds: Set<number> = new Set([1, 2, 3, 4]);

// Generic type
class Container<T> {
    constructor(private value: T) {}
    
    get(): T {
        return this.value;
    }
}

const stringContainer = new Container<string>("Hello");
const numberContainer = new Container<number>(42);`
      },
      {
        topic: 'Functions with Types',
        description: 'Function type annotations',
        sourceCode: `from typing import List, Optional, Callable, overload

def greet(name: str, greeting: str = "Hello") -> str:
    return f"{greeting}, {name}!"

def calculate_area(width: float, height: float) -> float:
    return width * height

# Function with multiple return types
def get_user_data() -> Tuple[str, int, str]:
    return "John", 30, "john@example.com"

# Function as parameter
def apply_operation(
    x: int, 
    y: int, 
    operation: Callable[[int, int], int]
) -> int:
    return operation(x, y)

# Lambda with types
add: Callable[[int, int], int] = lambda x, y: x + y

# Overloaded function
@overload
def process(x: int) -> int: ...

@overload
def process(x: str) -> str: ...

def process(x: Union[int, str]) -> Union[int, str]:
    if isinstance(x, int):
        return x * 2
    else:
        return x.upper()`,
        targetCode: `function greet(name: string, greeting: string = "Hello"): string {
    return \`\${greeting}, \${name}!\`;
}

function calculateArea(width: number, height: number): number {
    return width * height;
}

// Function with multiple return types (tuple)
function getUserData(): [string, number, string] {
    return ["John", 30, "john@example.com"];
}

// Function as parameter
function applyOperation(
    x: number, 
    y: number, 
    operation: (a: number, b: number) => number
): number {
    return operation(x, y);
}

// Arrow function with types
const add: (x: number, y: number) => number = (x, y) => x + y;

// Function type alias
type MathOperation = (x: number, y: number) => number;
const multiply: MathOperation = (x, y) => x * y;

// Overloaded function
function process(x: number): number;
function process(x: string): string;
function process(x: number | string): number | string {
    if (typeof x === 'number') {
        return x * 2;
    } else {
        return x.toUpperCase();
    }
}`
      },
      {
        topic: 'Classes and Interfaces',
        description: 'Object-oriented programming with types',
        sourceCode: `from typing import Protocol, runtime_checkable
from abc import ABC, abstractmethod

# Protocol (like interface)
@runtime_checkable
class Greetable(Protocol):
    name: str
    
    def greet(self) -> str: ...

# Abstract base class
class Animal(ABC):
    def __init__(self, name: str):
        self.name = name
    
    @abstractmethod
    def make_sound(self) -> str:
        pass

# Concrete class
class Person:
    def __init__(self, name: str, age: int):
        self._name = name
        self._age = age
    
    @property
    def name(self) -> str:
        return self._name
    
    @name.setter
    def name(self, value: str) -> None:
        self._name = value
    
    def greet(self) -> str:
        return f"Hi, I'm {self._name}"
    
    def __str__(self) -> str:
        return f"Person(name='{self._name}', age={self._age})"

# Inheritance
class Employee(Person):
    def __init__(self, name: str, age: int, employee_id: str):
        super().__init__(name, age)
        self.employee_id = employee_id
    
    def work(self) -> str:
        return f"{self._name} is working"

# Type checking
def greet_someone(entity: Greetable) -> None:
    print(entity.greet())

person = Person("John", 30)
if isinstance(person, Greetable):
    greet_someone(person)`,
        targetCode: `// Interface
interface Greetable {
    name: string;
    greet(): string;
}

// Abstract class
abstract class Animal {
    constructor(protected name: string) {}
    
    abstract makeSound(): string;
}

// Concrete class
class Person implements Greetable {
    private _name: string;
    private _age: number;
    
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    
    get name(): string {
        return this._name;
    }
    
    set name(value: string) {
        this._name = value;
    }
    
    greet(): string {
        return \`Hi, I'm \${this._name}\`;
    }
    
    toString(): string {
        return \`Person(name='\${this._name}', age=\${this._age})\`;
    }
}

// Inheritance
class Employee extends Person {
    constructor(name: string, age: number, public employeeId: string) {
        super(name, age);
    }
    
    work(): string {
        return \`\${this.name} is working\`;
    }
}

// Type checking
function greetSomeone(entity: Greetable): void {
    console.log(entity.greet());
}

const person = new Person("John", 30);
greetSomeone(person); // Works because Person implements Greetable`
      },
      {
        topic: 'Advanced Types',
        description: 'Advanced type system features',
        sourceCode: `from typing import TypedDict, Literal, Union, TypeAlias
from enum import Enum

# Type alias
UserId: TypeAlias = int
Username: TypeAlias = str

# Literal types
Direction = Literal["north", "south", "east", "west"]

def move(direction: Direction) -> None:
    print(f"Moving {direction}")

# Enum
class Status(Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"

# TypedDict
class UserDict(TypedDict):
    id: int
    name: str
    email: str
    age: int
    active: bool

user_data: UserDict = {
    "id": 1,
    "name": "John",
    "email": "john@example.com",
    "age": 30,
    "active": True
}

# Discriminated unions
from typing import Union

class SuccessResponse(TypedDict):
    status: Literal["success"]
    data: str

class ErrorResponse(TypedDict):
    status: Literal["error"]
    message: str

Response = Union[SuccessResponse, ErrorResponse]

def handle_response(response: Response) -> None:
    if response["status"] == "success":
        print(f"Data: {response['data']}")
    else:
        print(f"Error: {response['message']}")`,
        targetCode: `// Type alias
type UserId = number;
type Username = string;

// Literal types
type Direction = "north" | "south" | "east" | "west";

function move(direction: Direction): void {
    console.log(\`Moving \${direction}\`);
}

// Enum
enum Status {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected"
}

// Interface (like TypedDict)
interface UserDict {
    id: number;
    name: string;
    email: string;
    age: number;
    active: boolean;
}

const userData: UserDict = {
    id: 1,
    name: "John",
    email: "john@example.com",
    age: 30,
    active: true
};

// Discriminated unions
type SuccessResponse = {
    status: "success";
    data: string;
};

type ErrorResponse = {
    status: "error";
    message: string;
};

type Response = SuccessResponse | ErrorResponse;

function handleResponse(response: Response): void {
    if (response.status === "success") {
        console.log(\`Data: \${response.data}\`);
    } else {
        console.log(\`Error: \${response.message}\`);
    }
}

// Utility types
type PartialUser = Partial<UserDict>; // All properties optional
type ReadonlyUser = Readonly<UserDict>; // All properties readonly
type UserKeys = keyof UserDict; // "id" | "name" | "email" | "age" | "active"

// Mapped types
type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};

type NullableUser = Nullable<UserDict>;`
      },
      {
        topic: 'Async Programming',
        description: 'Asynchronous code with types',
        sourceCode: `import asyncio
from typing import List, Optional
import aiohttp

async def fetch_data(url: str) -> str:
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def fetch_user(user_id: int) -> Optional[Dict[str, Any]]:
    try:
        data = await fetch_data(f"https://api.example.com/users/{user_id}")
        return json.loads(data)
    except Exception as e:
        print(f"Error fetching user: {e}")
        return None

async def fetch_multiple_users(user_ids: List[int]) -> List[Optional[Dict[str, Any]]]:
    tasks = [fetch_user(uid) for uid in user_ids]
    return await asyncio.gather(*tasks)

# Async generator
async def stream_data() -> AsyncGenerator[str, None]:
    for i in range(10):
        await asyncio.sleep(1)
        yield f"Data chunk {i}"

# Using async context manager
class AsyncResource:
    async def __aenter__(self) -> 'AsyncResource':
        print("Acquiring resource")
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb) -> None:
        print("Releasing resource")
    
    async def process(self) -> str:
        return "Processed"

async def main() -> None:
    # Fetch single user
    user = await fetch_user(1)
    
    # Fetch multiple users
    users = await fetch_multiple_users([1, 2, 3])
    
    # Stream data
    async for chunk in stream_data():
        print(chunk)
    
    # Context manager
    async with AsyncResource() as resource:
        result = await resource.process()

asyncio.run(main())`,
        targetCode: `// Async functions return Promises
async function fetchData(url: string): Promise<string> {
    const response = await fetch(url);
    return await response.text();
}

async function fetchUser(userId: number): Promise<User | null> {
    try {
        const data = await fetchData(\`https://api.example.com/users/\${userId}\`);
        return JSON.parse(data) as User;
    } catch (error) {
        console.error(\`Error fetching user: \${error}\`);
        return null;
    }
}

async function fetchMultipleUsers(userIds: number[]): Promise<(User | null)[]> {
    const promises = userIds.map(uid => fetchUser(uid));
    return await Promise.all(promises);
}

// Async generator
async function* streamData(): AsyncGenerator<string, void, unknown> {
    for (let i = 0; i < 10; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield \`Data chunk \${i}\`;
    }
}

// Using async disposable (Stage 3 proposal)
class AsyncResource {
    async acquire(): Promise<void> {
        console.log("Acquiring resource");
    }
    
    async release(): Promise<void> {
        console.log("Releasing resource");
    }
    
    async process(): Promise<string> {
        return "Processed";
    }
}

// Helper for async resource management
async function withAsyncResource<T>(
    resource: AsyncResource,
    callback: (resource: AsyncResource) => Promise<T>
): Promise<T> {
    try {
        await resource.acquire();
        return await callback(resource);
    } finally {
        await resource.release();
    }
}

async function main(): Promise<void> {
    // Fetch single user
    const user = await fetchUser(1);
    
    // Fetch multiple users
    const users = await fetchMultipleUsers([1, 2, 3]);
    
    // Stream data
    for await (const chunk of streamData()) {
        console.log(chunk);
    }
    
    // Resource management
    const resource = new AsyncResource();
    const result = await withAsyncResource(resource, async (res) => {
        return await res.process();
    });
}

main().catch(console.error);`
      }
    ],
    commonPitfalls: [
      {
        title: 'Type Syntax',
        description: 'Different type annotation syntax',
        sourceExample: `# Python uses : for type hints
name: str = "John"
def greet(name: str) -> str:
    return f"Hello {name}"`,
        targetExample: `// TypeScript uses : after variable/parameter
const name: string = "John";
function greet(name: string): string {
    return \`Hello \${name}\`;
}`,
        correctApproach: 'Remember TypeScript type annotations come after the identifier'
      },
      {
        title: 'None vs null/undefined',
        description: 'Different null-like values',
        sourceExample: `value: Optional[str] = None
if value is None:
    print("Value is None")`,
        targetExample: `let value: string | null = null;
if (value === null) {
    console.log("Value is null");
}

// Also undefined
let value2: string | undefined = undefined;
if (value2 === undefined) {
    console.log("Value is undefined");
}`,
        correctApproach: 'Understand the difference between null and undefined in TypeScript'
      },
      {
        title: 'Boolean Values',
        description: 'Different boolean representations',
        sourceExample: `is_valid: bool = True
is_empty: bool = False`,
        targetExample: `const isValid: boolean = true;  // lowercase
const isEmpty: boolean = false;  // lowercase`,
        correctApproach: 'Use lowercase true/false in TypeScript'
      },
      {
        title: 'Import Syntax',
        description: 'Different module import patterns',
        sourceExample: `from typing import List, Dict, Optional
from mymodule import MyClass, my_function
import os`,
        targetExample: `import { MyClass, myFunction } from './mymodule';
import * as os from 'os';
import type { User } from './types';  // Type-only import`,
        correctApproach: 'Use ES6 import syntax and understand type-only imports'
      },
      {
        title: 'Type Guards',
        description: 'Runtime type checking differences',
        sourceExample: `if isinstance(value, str):
    print(value.upper())
elif isinstance(value, int):
    print(value * 2)`,
        targetExample: `if (typeof value === 'string') {
    console.log(value.toUpperCase());
} else if (typeof value === 'number') {
    console.log(value * 2);
}

// Custom type guard
function isUser(obj: any): obj is User {
    return obj && typeof obj.name === 'string';
}`,
        correctApproach: 'Use typeof for primitives and custom type guards for objects'
      }
    ],
    keyDifferences: [
      {
        topic: 'Type System',
        description: 'Static vs gradual typing',
        sourceApproach: 'Python has optional type hints checked by external tools',
        targetApproach: 'TypeScript has mandatory compile-time type checking'
      },
      {
        topic: 'Compilation',
        description: 'Interpreted vs compiled to JavaScript',
        sourceApproach: 'Python runs directly, type hints are ignored at runtime',
        targetApproach: 'TypeScript compiles to JavaScript, types are removed'
      },
      {
        topic: 'Runtime vs Compile Time',
        description: 'When type errors are caught',
        sourceApproach: 'Type errors found by mypy/pylint before runtime',
        targetApproach: 'Type errors prevent compilation'
      },
      {
        topic: 'Type Inference',
        description: 'How types are inferred',
        sourceApproach: 'Limited type inference, explicit annotations recommended',
        targetApproach: 'Powerful type inference, many types can be inferred'
      },
      {
        topic: 'Ecosystem Integration',
        description: 'Type definitions for libraries',
        sourceApproach: 'Type stubs (`.pyi` files) for third-party libraries',
        targetApproach: 'DefinitelyTyped (`@types/*`) packages for JavaScript libraries'
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
pip install django djangorestframework

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
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title

# serializers.py
from rest_framework import serializers
from .models import User, Post

class UserSerializer(serializers.ModelSerializer):
    posts_count = serializers.IntegerField(source='posts.count', read_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'bio', 'avatar', 'posts_count']

class PostSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.username', read_only=True)
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'author_name', 'created_at', 'updated_at']

# views.py
from rest_framework import viewsets, permissions
from .models import User, Post
from .serializers import UserSerializer, PostSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)`,
          strengths: [
            'Full-featured framework',
            'Built-in admin interface',
            'ORM with migrations',
            'REST framework integration',
            'Large ecosystem'
          ],
          ecosystem: ['pip', 'Django ORM', 'Django Admin', 'Django REST Framework', 'Celery']
        },
        targetFramework: {
          name: 'Next.js + Prisma',
          setupCode: `# Create Next.js app with TypeScript
npx create-next-app@latest myproject --typescript --tailwind --app
cd myproject

# Install Prisma and other dependencies
npm install prisma @prisma/client
npm install -D @types/node

# Initialize Prisma
npx prisma init

# Install additional packages
npm install next-auth bcryptjs
npm install -D @types/bcryptjs

# Run development server
npm run dev`,
          basicExample: `// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  username  String   @unique
  password  String
  bio       String?
  avatar    String?
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        bio: true,
        avatar: true,
        _count: {
          select: { posts: true }
        }
      }
    });
    
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, email, password, bio } = body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        bio
      }
    });
    
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            username: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    const { title, content } = body;
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: user.id
      },
      include: {
        author: {
          select: {
            id: true,
            username: true
          }
        }
      }
    });
    
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

// Types
export interface User {
  id: string;
  username: string;
  email: string;
  bio?: string;
  avatar?: string;
  _count?: {
    posts: number;
  };
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: {
    id: string;
    username: string;
  };
  createdAt: Date;
  updatedAt: Date;
}`,
          strengths: [
            'Full-stack React framework',
            'Type-safe database with Prisma',
            'Server components',
            'API routes built-in',
            'Excellent DX'
          ],
          ecosystem: ['npm', 'Prisma ORM', 'NextAuth', 'React Query', 'Tailwind CSS']
        },
        migrationTips: [
          'Next.js App Router similar to Django URL patterns',
          'Prisma schema similar to Django models',
          'API routes replace Django views',
          'NextAuth similar to Django auth',
          'Both support server-side rendering'
        ],
        commonPitfalls: [
          'Different ORM syntax (Prisma vs Django ORM)',
          'Client/server component boundaries',
          'TypeScript compilation required',
          'Different deployment approaches',
          'Session handling differences'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'FastAPI',
          setupCode: `# Install FastAPI
pip install fastapi uvicorn[standard] sqlalchemy alembic

# Create main.py
touch main.py

# Create database models
mkdir models
touch models/__init__.py models/user.py

# Run migrations
alembic init alembic
alembic revision --autogenerate -m "Initial migration"
alembic upgrade head

# Run development server
uvicorn main:app --reload`,
          basicExample: `# main.py
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime
from sqlalchemy.orm import Session

app = FastAPI(title="User API", version="1.0.0")
security = HTTPBearer()

# Pydantic models
class UserBase(BaseModel):
    username: str
    email: EmailStr
    bio: Optional[str] = None

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    created_at: datetime
    posts_count: int = 0
    
    class Config:
        orm_mode = True

class PostBase(BaseModel):
    title: str
    content: str

class PostCreate(PostBase):
    pass

class Post(PostBase):
    id: int
    author_id: int
    author_name: str
    created_at: datetime
    updated_at: datetime
    
    class Config:
        orm_mode = True

# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Auth dependency
async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
) -> User:
    # Verify token and get user
    # This is simplified - use proper JWT validation
    user = db.query(UserModel).filter(UserModel.token == credentials.credentials).first()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid authentication")
    return user

# Endpoints
@app.get("/users", response_model=List[User])
async def get_users(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    users = db.query(UserModel).offset(skip).limit(limit).all()
    return users

@app.post("/users", response_model=User, status_code=status.HTTP_201_CREATED)
async def create_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):
    # Check if email exists
    if db.query(UserModel).filter(UserModel.email == user.email).first():
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Create user
    db_user = UserModel(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    return db_user

@app.get("/posts", response_model=List[Post])
async def get_posts(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    posts = db.query(PostModel)\
        .join(UserModel)\
        .offset(skip)\
        .limit(limit)\
        .all()
    return posts

@app.post("/posts", response_model=Post, status_code=status.HTTP_201_CREATED)
async def create_post(
    post: PostCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    db_post = PostModel(**post.dict(), author_id=current_user.id)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    
    return db_post

# Health check
@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.utcnow()}`,
          strengths: [
            'Modern async framework',
            'Automatic API documentation',
            'Type validation with Pydantic',
            'High performance',
            'Dependency injection'
          ],
          ecosystem: ['pip', 'Pydantic', 'SQLAlchemy', 'Alembic', 'pytest']
        },
        targetFramework: {
          name: 'Express + TypeORM',
          setupCode: `# Create new project
mkdir myapi && cd myapi
npm init -y

# Install dependencies
npm install express cors helmet morgan
npm install typeorm reflect-metadata pg
npm install bcryptjs jsonwebtoken
npm install -D typescript @types/node @types/express
npm install -D @types/cors @types/bcryptjs @types/jsonwebtoken
npm install -D ts-node nodemon

# Initialize TypeScript
npx tsc --init

# Create project structure
mkdir src
mkdir src/entities src/routes src/middleware

# Run development server
npm run dev`,
          basicExample: `// src/entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Post } from './Post';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  bio?: string;

  @Column({ nullable: true })
  avatar?: string;

  @OneToMany(() => Post, post => post.author)
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// src/entities/Post.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @ManyToOne(() => User, user => user.posts)
  @JoinColumn({ name: 'author_id' })
  author: User;

  @Column()
  authorId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// src/app.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { AppDataSource } from './data-source';
import userRoutes from './routes/users';
import postRoutes from './routes/posts';
import { authenticate } from './middleware/auth';

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', authenticate, postRoutes);

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// src/routes/users.ts
import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/User';
import bcrypt from 'bcryptjs';
import { validate } from 'class-validator';

const router = Router();
const userRepository = AppDataSource.getRepository(User);

// GET /api/users
router.get('/', async (req, res) => {
  try {
    const { skip = 0, limit = 100 } = req.query;
    
    const users = await userRepository.find({
      select: ['id', 'username', 'email', 'bio', 'avatar', 'createdAt'],
      relations: ['posts'],
      skip: Number(skip),
      take: Number(limit)
    });
    
    const usersWithCount = users.map(user => ({
      ...user,
      posts_count: user.posts.length,
      posts: undefined
    }));
    
    res.json(usersWithCount);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// POST /api/users
router.post('/', async (req, res) => {
  try {
    const { username, email, password, bio } = req.body;
    
    // Check if user exists
    const existingUser = await userRepository.findOne({
      where: [{ email }, { username }]
    });
    
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = userRepository.create({
      username,
      email,
      password: hashedPassword,
      bio
    });
    
    // Validate
    const errors = await validate(user);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    
    // Save
    await userRepository.save(user);
    
    // Return without password
    const { password: _, ...userWithoutPassword } = user;
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

export default router;

// Types
export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
  bio?: string;
}

export interface CreatePostDto {
  title: string;
  content: string;
}

export interface UserResponse {
  id: number;
  username: string;
  email: string;
  bio?: string;
  avatar?: string;
  posts_count?: number;
  createdAt: Date;
}`,
          strengths: [
            'Popular Node.js framework',
            'TypeORM for type-safe database',
            'Flexible middleware system',
            'Large ecosystem',
            'Easy to learn'
          ],
          ecosystem: ['npm', 'TypeORM', 'Passport.js', 'Express Validator', 'Jest']
        },
        migrationTips: [
          'Express routes similar to FastAPI endpoints',
          'TypeORM entities like SQLAlchemy models',
          'Express middleware similar to FastAPI dependencies',
          'Both support async/await',
          'Manual validation vs automatic Pydantic validation'
        ],
        commonPitfalls: [
          'Manual type validation in Express',
          'No automatic API documentation',
          'Different ORM syntax',
          'Error handling more manual',
          'TypeScript configuration complexity'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'pytest',
          setupCode: `# Install pytest with type checking
pip install pytest pytest-cov pytest-mock mypy

# Create test file
touch test_user.py

# Create pytest.ini
[pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*

# Run tests
pytest

# Run with type checking
mypy . && pytest

# Run with coverage
pytest --cov=src --cov-report=html`,
          basicExample: `# test_user.py
import pytest
from typing import List, Optional
from unittest.mock import Mock, MagicMock
from datetime import datetime

from src.models import User, Post
from src.services import UserService
from src.repositories import UserRepository

class TestUser:
    def setup_method(self) -> None:
        """Setup for each test method"""
        self.user = User(
            id=1,
            name="John",
            email="john@example.com",
            created_at=datetime.now()
        )
    
    def test_user_creation(self) -> None:
        assert self.user.name == "John"
        assert self.user.email == "john@example.com"
        assert self.user.id == 1
        assert isinstance(self.user.created_at, datetime)
    
    def test_user_validation(self) -> None:
        assert self.user.is_valid_email("test@example.com")
        assert not self.user.is_valid_email("invalid-email")
    
    @pytest.mark.parametrize("name,expected", [
        ("John", True),
        ("", False),
        ("A", False),
        ("VeryLongNameThatExceedsLimit", False)
    ])
    def test_name_validation(self, name: str, expected: bool) -> None:
        user = User(name=name, email="test@example.com")
        assert user.is_valid_name() == expected
    
    def test_exception_raised(self) -> None:
        with pytest.raises(ValueError, match="Email cannot be empty"):
            User(name="John", email="")
    
    @pytest.fixture
    def mock_repository(self) -> Mock:
        """Fixture for mocked repository"""
        repo = Mock(spec=UserRepository)
        repo.save.return_value = self.user
        repo.find_by_id.return_value = self.user
        repo.find_by_email.return_value = None
        return repo
    
    def test_user_service_save(self, mock_repository: Mock) -> None:
        service = UserService(mock_repository)
        result = service.save_user(self.user)
        
        assert result == self.user
        mock_repository.save.assert_called_once_with(self.user)
    
    @pytest.mark.asyncio
    async def test_async_user_fetch(self, mock_repository: Mock) -> None:
        """Test async functionality"""
        mock_repository.fetch_async = MagicMock(return_value=self.user)
        
        service = UserService(mock_repository)
        result = await service.fetch_user_async(1)
        
        assert result == self.user
        mock_repository.fetch_async.assert_called_once_with(1)

# Integration test with type hints
class TestUserIntegration:
    @pytest.fixture
    async def test_client(self) -> AsyncTestClient:
        """Create test client"""
        from main import app
        async with AsyncTestClient(app) as client:
            yield client
    
    async def test_create_user_endpoint(
        self, 
        test_client: AsyncTestClient
    ) -> None:
        user_data = {
            "name": "Test User",
            "email": "test@example.com",
            "password": "secure123"
        }
        
        response = await test_client.post("/users", json=user_data)
        
        assert response.status_code == 201
        data = response.json()
        assert data["name"] == user_data["name"]
        assert data["email"] == user_data["email"]
        assert "password" not in data`,
          strengths: [
            'Simple and powerful',
            'Type hints support',
            'Great fixtures system',
            'Async testing support',
            'Excellent output'
          ],
          ecosystem: ['pip', 'pytest-asyncio', 'pytest-mock', 'mypy', 'hypothesis']
        },
        targetFramework: {
          name: 'Jest',
          setupCode: `# Install Jest with TypeScript
npm install -D jest @types/jest ts-jest
npm install -D @testing-library/react @testing-library/jest-dom
npm install -D supertest @types/supertest

# Create jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/*.test.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
  ],
};

# Run tests
npm test

# Run with coverage
npm test -- --coverage

# Run in watch mode
npm test -- --watch`,
          basicExample: `// src/models/__tests__/User.test.ts
import { User } from '../User';
import { UserService } from '../../services/UserService';
import { UserRepository } from '../../repositories/UserRepository';

describe('User', () => {
  let user: User;
  
  beforeEach(() => {
    user = new User({
      id: 1,
      name: 'John',
      email: 'john@example.com',
      createdAt: new Date()
    });
  });
  
  describe('creation', () => {
    it('should create a user with correct properties', () => {
      expect(user.name).toBe('John');
      expect(user.email).toBe('john@example.com');
      expect(user.id).toBe(1);
      expect(user.createdAt).toBeInstanceOf(Date);
    });
  });
  
  describe('validation', () => {
    it('should validate email correctly', () => {
      expect(user.isValidEmail('test@example.com')).toBe(true);
      expect(user.isValidEmail('invalid-email')).toBe(false);
    });
    
    // Parametrized tests
    test.each([
      ['John', true],
      ['', false],
      ['A', false],
      ['VeryLongNameThatExceedsLimit', false]
    ])('should validate name "%s" as %s', (name: string, expected: boolean) => {
      const testUser = new User({ name, email: 'test@example.com' });
      expect(testUser.isValidName()).toBe(expected);
    });
  });
  
  describe('exceptions', () => {
    it('should throw error for empty email', () => {
      expect(() => {
        new User({ name: 'John', email: '' });
      }).toThrow('Email cannot be empty');
    });
  });
});

describe('UserService', () => {
  let service: UserService;
  let mockRepository: jest.Mocked<UserRepository>;
  
  beforeEach(() => {
    mockRepository = {
      save: jest.fn(),
      findById: jest.fn(),
      findByEmail: jest.fn(),
      delete: jest.fn()
    } as any;
    
    service = new UserService(mockRepository);
  });
  
  describe('saveUser', () => {
    it('should save user through repository', async () => {
      const user = new User({ name: 'John', email: 'john@example.com' });
      mockRepository.save.mockResolvedValue(user);
      
      const result = await service.saveUser(user);
      
      expect(result).toBe(user);
      expect(mockRepository.save).toHaveBeenCalledWith(user);
      expect(mockRepository.save).toHaveBeenCalledTimes(1);
    });
  });
  
  describe('async operations', () => {
    it('should fetch user asynchronously', async () => {
      const user = new User({ id: 1, name: 'John', email: 'john@example.com' });
      mockRepository.findById.mockResolvedValue(user);
      
      const result = await service.fetchUserAsync(1);
      
      expect(result).toBe(user);
      expect(mockRepository.findById).toHaveBeenCalledWith(1);
    });
  });
});

// Integration test
import request from 'supertest';
import { app } from '../../app';

describe('User API', () => {
  describe('POST /users', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'secure123'
      };
      
      const response = await request(app)
        .post('/users')
        .send(userData)
        .expect(201);
      
      expect(response.body).toMatchObject({
        name: userData.name,
        email: userData.email
      });
      expect(response.body).not.toHaveProperty('password');
    });
    
    it('should return 400 for invalid data', async () => {
      const response = await request(app)
        .post('/users')
        .send({ name: '', email: 'invalid' })
        .expect(400);
      
      expect(response.body).toHaveProperty('error');
    });
  });
});`,
          strengths: [
            'Popular JavaScript testing framework',
            'Built-in mocking',
            'Snapshot testing',
            'Great IDE integration',
            'Fast execution'
          ],
          ecosystem: ['npm', 'Testing Library', 'Supertest', 'Mock Service Worker', 'Cypress']
        },
        migrationTips: [
          'describe/it blocks similar to pytest classes/methods',
          'beforeEach similar to setup_method',
          'test.each similar to @pytest.mark.parametrize',
          'Jest mocks vs pytest mocks',
          'Both support async testing'
        ],
        commonPitfalls: [
          'Different assertion syntax',
          'Mock syntax differences',
          'Jest configuration complexity',
          'Module mocking differences',
          'Snapshot testing concept'
        ]
      },
      {
        category: 'build',
        sourceFramework: {
          name: 'Poetry/pip',
          setupCode: `# Using Poetry
pip install poetry
poetry new myproject
cd myproject

# Add dependencies
poetry add fastapi pydantic
poetry add --group dev pytest black mypy

# Install all dependencies
poetry install

# Build package
poetry build

# Publish to PyPI
poetry publish

# Using pip-tools
pip install pip-tools
echo "fastapi" > requirements.in
pip-compile requirements.in
pip-sync requirements.txt`,
          basicExample: `# pyproject.toml (Poetry)
[tool.poetry]
name = "myproject"
version = "1.0.0"
description = "A Python project with types"
authors = ["John Doe <john@example.com>"]
readme = "README.md"
packages = [{include = "myproject", from = "src"}]

[tool.poetry.dependencies]
python = "^3.9"
fastapi = "^0.104.0"
pydantic = "^2.4.0"
sqlalchemy = "^2.0.0"

[tool.poetry.group.dev.dependencies]
pytest = "^7.4.0"
pytest-cov = "^4.1.0"
mypy = "^1.6.0"
black = "^23.10.0"
ruff = "^0.1.0"

[tool.poetry.group.types.dependencies]
types-requests = "^2.31.0"
sqlalchemy-stubs = "^0.4"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"

[tool.mypy]
python_version = "3.9"
warn_return_any = true
warn_unused_configs = true
disallow_untyped_defs = true
disallow_incomplete_defs = true
check_untyped_defs = true
disallow_untyped_decorators = true
no_implicit_optional = true
warn_redundant_casts = true
warn_unused_ignores = true
warn_no_return = true
warn_return_any = true
warn_unreachable = true
strict_equality = true

[tool.pytest.ini_options]
testpaths = ["tests"]
python_files = ["test_*.py"]
python_classes = ["Test*"]
python_functions = ["test_*"]

[tool.black]
line-length = 88
target-version = ['py39']
include = '\\.pyi?$'

[tool.ruff]
select = ["E", "F", "I", "N", "UP", "YTT", "B", "A", "C4", "T10", "ISC", "ICN", "PIE", "PT"]
ignore = ["E501"]
line-length = 88
target-version = "py39"`,
          strengths: [
            'Modern Python packaging',
            'Lock file support',
            'Dependency groups',
            'Virtual env management',
            'PyPI publishing'
          ],
          ecosystem: ['PyPI', 'pip', 'virtualenv', 'pipenv', 'pip-tools']
        },
        targetFramework: {
          name: 'npm/pnpm',
          setupCode: `# Using npm
npm init -y
npm install typescript @types/node
npm install express @types/express
npm install -D jest @types/jest ts-jest
npm install -D eslint @typescript-eslint/eslint-plugin

# Using pnpm (faster)
npm install -g pnpm
pnpm init
pnpm add typescript @types/node
pnpm add express @types/express
pnpm add -D jest @types/jest ts-jest

# Build TypeScript
npx tsc

# Run tests
npm test

# Publish to npm
npm publish`,
          basicExample: `// package.json
{
  "name": "myproject",
  "version": "1.0.0",
  "description": "A TypeScript project",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src --ext .ts",
    "lint:fix": "eslint src --ext .ts --fix",
    "dev": "ts-node-dev --respawn src/index.ts",
    "start": "node dist/index.js",
    "typecheck": "tsc --noEmit",
    "prepublishOnly": "npm run build"
  },
  "keywords": ["typescript", "api", "express"],
  "author": "John Doe <john@example.com>",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "helmet": "^7.1.0"
  },
  "devDependencies": {
    "@types/node": "^20.8.0",
    "@types/express": "^4.17.20",
    "@types/cors": "^2.8.15",
    "@types/jest": "^29.5.6",
    "@typescript-eslint/eslint-plugin": "^6.8.0",
    "@typescript-eslint/parser": "^6.8.0",
    "eslint": "^8.51.0",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.1",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.2.2"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "files": [
    "dist",
    "README.md"
  ]
}

// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "coverage"]
}

// .eslintrc.json
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
}

// pnpm-workspace.yaml (for monorepos)
packages:
  - 'packages/*'
  - 'apps/*'`,
          strengths: [
            'Huge ecosystem',
            'Fast with pnpm',
            'Monorepo support',
            'Type definitions',
            'npm registry'
          ],
          ecosystem: ['npm registry', 'yarn', 'pnpm', 'Webpack', 'Vite']
        },
        migrationTips: [
          'package.json similar to pyproject.toml',
          'npm scripts similar to Poetry scripts',
          'node_modules similar to virtual env',
          '@types packages for type definitions',
          'npm publish similar to poetry publish'
        ],
        commonPitfalls: [
          'node_modules size vs Python venv',
          'Different versioning syntax',
          'TypeScript configuration complexity',
          'Build step required',
          'Type definition packages needed'
        ]
      }
    ]
};