import type { LanguageComparison } from '../../types/language';

export const pythonRustComparison: LanguageComparison = {
    sourceLanguage: 'Python',
    targetLanguage: 'Rust',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Dynamic vs static typing with ownership',
        sourceCode: `name = "John"
age = 25
is_active = True
score = 95.5

# Dynamic typing
value = 42
value = "now a string"  # This is fine

# Mutable variables
counter = 0
counter += 1`,
        targetCode: `let name = "John";        // &str - immutable
let age = 25;            // i32 - immutable
let is_active = true;    // bool
let score = 95.5;        // f64

// Static typing - cannot change types
let value = 42;          // i32
// value = "now a string"; // Compilation error!

// Mutable variables must be explicit
let mut counter = 0;
counter += 1;            // OK with mut`
      },
      {
        topic: 'Memory Management',
        description: 'Garbage collection vs ownership system',
        sourceCode: `# Python handles memory automatically
data = [1, 2, 3, 4, 5]
copy = data  # Reference to same list
copy[0] = 100  # Modifies original

# Deep copy if needed
import copy
deep_copy = copy.deepcopy(data)

# No manual memory management
large_list = [i for i in range(1000000)]
# Garbage collected when out of scope`,
        targetCode: `// Rust ownership system
let data = vec![1, 2, 3, 4, 5];
let moved = data;  // Ownership moved
// println!("{:?}", data); // Error: value moved

// Clone if needed
let data = vec![1, 2, 3, 4, 5];
let cloned = data.clone();  // Deep copy

// Borrowing
let data = vec![1, 2, 3, 4, 5];
let borrowed = &data;  // Immutable borrow
println!("{:?}", data);  // OK

// Automatic memory cleanup
{
    let large_vec: Vec<i32> = (0..1000000).collect();
    // Deallocated when out of scope
}`
      },
      {
        topic: 'Collections',
        description: 'Lists and dictionaries vs vectors and hashmaps',
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
evens = [x for x in range(20) if x % 2 == 0]

# Set
unique_numbers = {1, 2, 3, 4, 5}`,
        targetCode: `// Vector
let mut fruits = vec!["apple", "banana", "orange"];
fruits.push("grape");
let first = fruits[0];  // or fruits.get(0)

// HashMap
use std::collections::HashMap;
let mut person = HashMap::new();
person.insert("name", "John");
person.insert("age", "30");
person.insert("city", "New York");

// Iterator methods (similar to comprehensions)
let squares: Vec<i32> = (0..10).map(|x| x * x).collect();
let evens: Vec<i32> = (0..20).filter(|x| x % 2 == 0).collect();

// HashSet
use std::collections::HashSet;
let unique_numbers: HashSet<i32> = [1, 2, 3, 4, 5].iter().cloned().collect();`
      },
      {
        topic: 'Functions',
        description: 'Function definitions and closures',
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

# Higher-order function
def apply_twice(func, value):
    return func(func(value))

result = apply_twice(lambda x: x * 2, 5)  # 20`,
        targetCode: `fn greet(name: &str, greeting: Option<&str>) -> String {
    let greeting = greeting.unwrap_or("Hello");
    format!("{}, {}!", greeting, name)
}

fn calculate_area(width: f64, height: f64) -> f64 {
    width * height
}

// Closure
let add = |x: i32, y: i32| -> i32 { x + y };

// Function with multiple return values (tuple)
fn get_user_data() -> (&'static str, i32, &'static str) {
    ("John", 30, "john@example.com")
}

let (name, age, email) = get_user_data();

// Higher-order function
fn apply_twice<F>(func: F, value: i32) -> i32 
where
    F: Fn(i32) -> i32
{
    func(func(value))
}

let result = apply_twice(|x| x * 2, 5);  // 20`
      },
      {
        topic: 'Error Handling',
        description: 'Exceptions vs Result type',
        sourceCode: `# Exception handling
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

try:
    result = divide(10, 0)
except ValueError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
finally:
    print("Cleanup")

# Optional values
def find_user(id):
    users = {1: "John", 2: "Jane"}
    return users.get(id)  # Returns None if not found

user = find_user(3)
if user:
    print(f"Found: {user}")
else:
    print("User not found")`,
        targetCode: `// Result type
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("Cannot divide by zero".to_string())
    } else {
        Ok(a / b)
    }
}

// Pattern matching on Result
match divide(10.0, 0.0) {
    Ok(result) => println!("Result: {}", result),
    Err(e) => println!("Error: {}", e),
}

// Using ? operator
fn calculate() -> Result<f64, String> {
    let result = divide(10.0, 2.0)?;  // Propagates error
    Ok(result * 2.0)
}

// Option type
fn find_user(id: u32) -> Option<&'static str> {
    match id {
        1 => Some("John"),
        2 => Some("Jane"),
        _ => None,
    }
}

if let Some(user) = find_user(3) {
    println!("Found: {}", user);
} else {
    println!("User not found");
}`
      },
      {
        topic: 'Classes and Structs',
        description: 'Classes vs structs with implementations',
        sourceCode: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self._id = self._generate_id()
    
    def greet(self):
        return f"Hello, I'm {self.name}"
    
    def have_birthday(self):
        self.age += 1
    
    @property
    def info(self):
        return f"{self.name} is {self.age} years old"
    
    @staticmethod
    def species():
        return "Homo sapiens"
    
    def _generate_id(self):
        return hash(f"{self.name}{self.age}")

# Inheritance
class Employee(Person):
    def __init__(self, name, age, company):
        super().__init__(name, age)
        self.company = company
    
    def greet(self):
        return f"{super().greet()}, I work at {self.company}"`,
        targetCode: `struct Person {
    name: String,
    age: u32,
    id: u64,
}

impl Person {
    // Constructor (associated function)
    fn new(name: String, age: u32) -> Self {
        let id = Self::generate_id(&name, age);
        Person { name, age, id }
    }
    
    // Method
    fn greet(&self) -> String {
        format!("Hello, I'm {}", self.name)
    }
    
    // Mutable method
    fn have_birthday(&mut self) {
        self.age += 1;
    }
    
    // Getter-like method
    fn info(&self) -> String {
        format!("{} is {} years old", self.name, self.age)
    }
    
    // Associated function (like static method)
    fn species() -> &'static str {
        "Homo sapiens"
    }
    
    // Private function
    fn generate_id(name: &str, age: u32) -> u64 {
        use std::collections::hash_map::DefaultHasher;
        use std::hash::{Hash, Hasher};
        
        let mut hasher = DefaultHasher::new();
        format!("{}{}", name, age).hash(&mut hasher);
        hasher.finish()
    }
}

// Composition over inheritance
struct Employee {
    person: Person,
    company: String,
}

impl Employee {
    fn new(name: String, age: u32, company: String) -> Self {
        Employee {
            person: Person::new(name, age),
            company,
        }
    }
    
    fn greet(&self) -> String {
        format!("{}, I work at {}", self.person.greet(), self.company)
    }
}`
      },
      {
        topic: 'Async Programming',
        description: 'asyncio vs async/await with tokio',
        sourceCode: `import asyncio
import aiohttp

# Async function
async def fetch_data(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

# Multiple async operations
async def fetch_multiple():
    urls = [
        "https://api.example.com/data1",
        "https://api.example.com/data2",
        "https://api.example.com/data3"
    ]
    
    tasks = [fetch_data(url) for url in urls]
    results = await asyncio.gather(*tasks)
    return results

# Running async code
async def main():
    data = await fetch_data("https://api.example.com")
    print(data)
    
    # With timeout
    try:
        result = await asyncio.wait_for(
            fetch_data("https://slow-api.com"),
            timeout=5.0
        )
    except asyncio.TimeoutError:
        print("Request timed out")

# Run the event loop
asyncio.run(main())`,
        targetCode: `use tokio;
use reqwest;

// Async function
async fn fetch_data(url: &str) -> Result<String, reqwest::Error> {
    let response = reqwest::get(url).await?;
    let body = response.text().await?;
    Ok(body)
}

// Multiple async operations
async fn fetch_multiple() -> Vec<Result<String, reqwest::Error>> {
    let urls = vec![
        "https://api.example.com/data1",
        "https://api.example.com/data2",
        "https://api.example.com/data3",
    ];
    
    let futures: Vec<_> = urls
        .into_iter()
        .map(|url| fetch_data(url))
        .collect();
    
    futures::future::join_all(futures).await
}

// Main async function
#[tokio::main]
async fn main() {
    // Simple fetch
    match fetch_data("https://api.example.com").await {
        Ok(data) => println!("{}", data),
        Err(e) => eprintln!("Error: {}", e),
    }
    
    // With timeout
    use tokio::time::{timeout, Duration};
    
    match timeout(
        Duration::from_secs(5),
        fetch_data("https://slow-api.com")
    ).await {
        Ok(Ok(result)) => println!("Got result: {}", result),
        Ok(Err(e)) => eprintln!("Request error: {}", e),
        Err(_) => eprintln!("Request timed out"),
    }
}`
      },
      {
        topic: 'Pattern Matching',
        description: 'if/elif vs match expressions',
        sourceCode: `# Basic conditionals
def describe_number(n):
    if n == 0:
        return "zero"
    elif n == 1:
        return "one"
    elif n < 0:
        return "negative"
    elif n % 2 == 0:
        return "even"
    else:
        return "odd"

# Match statement (Python 3.10+)
def process_value(value):
    match value:
        case 0:
            return "zero"
        case int(n) if n > 0:
            return f"positive: {n}"
        case int(n) if n < 0:
            return f"negative: {n}"
        case str(s):
            return f"string: {s}"
        case [x, y]:
            return f"pair: {x}, {y}"
        case _:
            return "unknown"

# Type checking
def handle_input(value):
    if isinstance(value, int):
        return value * 2
    elif isinstance(value, str):
        return value.upper()
    elif isinstance(value, list):
        return len(value)
    else:
        return None`,
        targetCode: `// Match expressions
fn describe_number(n: i32) -> &'static str {
    match n {
        0 => "zero",
        1 => "one",
        n if n < 0 => "negative",
        n if n % 2 == 0 => "even",
        _ => "odd",
    }
}

// Enum matching
enum Value {
    Zero,
    Integer(i32),
    Text(String),
    Pair(i32, i32),
}

fn process_value(value: Value) -> String {
    match value {
        Value::Zero => "zero".to_string(),
        Value::Integer(n) if n > 0 => format!("positive: {}", n),
        Value::Integer(n) if n < 0 => format!("negative: {}", n),
        Value::Text(s) => format!("string: {}", s),
        Value::Pair(x, y) => format!("pair: {}, {}", x, y),
        _ => "unknown".to_string(),
    }
}

// Option/Result matching
fn handle_option(value: Option<i32>) -> i32 {
    match value {
        Some(n) => n * 2,
        None => 0,
    }
}

// if let for single pattern
fn check_some(value: Option<&str>) {
    if let Some(s) = value {
        println!("Got: {}", s);
    } else {
        println!("Got nothing");
    }
}`
      }
    ],
    keyDifferences: [
      {
        topic: 'Memory Management',
        description: 'Automatic vs manual memory management',
        sourceApproach: 'Python has automatic memory management with garbage collection',
        targetApproach: 'Rust has an ownership system with compile-time memory safety and no garbage collector'
      },
      {
        topic: 'Type System',
        description: 'Dynamic vs static typing',
        sourceApproach: 'Python is dynamically typed with optional type hints',
        targetApproach: 'Rust is statically typed with a powerful type system and type inference'
      },
      {
        topic: 'Error Handling',
        description: 'Exceptions vs Result types',
        sourceApproach: 'Python uses exceptions for error handling with try/except blocks',
        targetApproach: 'Rust uses Result<T, E> and Option<T> types with pattern matching'
      },
      {
        topic: 'Object-Oriented Programming',
        description: 'Classes vs structs and traits',
        sourceApproach: 'Python has classes with inheritance and dynamic dispatch',
        targetApproach: 'Rust has structs with traits, prefers composition over inheritance'
      },
      {
        topic: 'Null Safety',
        description: 'Nullable references vs Option type',
        sourceApproach: 'Python allows None anywhere, checked at runtime',
        targetApproach: 'Rust encodes nullability in the type system with Option<T>'
      },
      {
        topic: 'Concurrency',
        description: 'GIL vs fearless concurrency',
        sourceApproach: 'Python has GIL limiting true parallelism, uses async/await for I/O',
        targetApproach: 'Rust has fearless concurrency with compile-time guarantees and no data races'
      },
      {
        topic: 'Performance',
        description: 'Interpreted vs compiled',
        sourceApproach: 'Python is interpreted, prioritizes developer productivity',
        targetApproach: 'Rust compiles to native code, prioritizes zero-cost abstractions'
      },
      {
        topic: 'Polymorphism',
        description: 'Runtime vs compile-time',
        sourceApproach: 'Python has runtime polymorphism with duck typing',
        targetApproach: 'Rust has compile-time polymorphism with generics and traits'
      }
    ],
    commonPitfalls: [
      {
        title: 'Ownership and Borrowing',
        description: 'Variables cannot be used after ownership transfer',
        sourceExample: `data = [1, 2, 3]
copy = data  # Reference to same list
print(data)  # Still works`,
        targetExample: `let data = vec![1, 2, 3];
let moved = data;  // Ownership moved
println!("{:?}", data); // Error!`,
        correctApproach: 'Use borrowing (&) or clone() to keep access to the original'
      },
      {
        title: 'Mutability',
        description: 'Variables are immutable by default in Rust',
        sourceExample: `x = 5
x = 10  # Fine in Python`,
        targetExample: `let x = 5;
x = 10;  // Error: cannot assign twice`,
        correctApproach: 'Use `let mut x = 5;` for mutable variables'
      },
      {
        title: 'Error Handling',
        description: 'Must handle Result and Option types explicitly',
        sourceExample: `result = divide(10, 0)  # Raises exception`,
        targetExample: `let result = divide(10, 0);  // Returns Result<f64, String>`,
        correctApproach: 'Use match, if let, or ? operator to handle Results'
      },
      {
        title: 'Null Values',
        description: 'No null/None without Option<T>',
        sourceExample: `value = None
if value is not None:
    print(value)`,
        targetExample: `let value: Option<i32> = None;
if let Some(v) = value {
    println!("{}", v);
}`,
        correctApproach: 'Always use Option<T> for nullable values'
      },
      {
        title: 'String Types',
        description: 'Multiple string types in Rust',
        sourceExample: `text = "Hello"
text += " World"`,
        targetExample: `let text = "Hello";  // &str
let mut owned = String::from(text);
owned.push_str(" World");`,
        correctApproach: 'Understand the difference between &str and String'
      },
      {
        title: 'Lifetime Annotations',
        description: 'Rust requires explicit lifetimes in some cases',
        sourceExample: `def get_first(items):
    return items[0] if items else None`,
        targetExample: `fn get_first<\'a>(items: &\'a [i32]) -> Option<&\'a i32> {
    items.first()
}`,
        correctApproach: 'Learn lifetime elision rules and when to annotate'
      },
      {
        title: 'Trait vs Inheritance',
        description: 'No class inheritance in Rust',
        sourceExample: `class Dog(Animal):
    def speak(self):
        return "Woof!"`,
        targetExample: `struct Dog;
impl Animal for Dog {
    fn speak(&self) -> &str {
        "Woof!"
    }
}`,
        correctApproach: 'Use traits for shared behavior, composition for data'
      },
      {
        title: 'Memory Management',
        description: 'No garbage collector in Rust',
        sourceExample: `# Python handles cleanup automatically
large_data = [i for i in range(1000000)]`,
        targetExample: `// Rust deallocates when out of scope
{
    let large_data: Vec<i32> = (0..1000000).collect();
} // Deallocated here`,
        correctApproach: 'Understand RAII and the drop trait'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'Django',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install Django
pip install django djangorestframework

# Create project
django-admin startproject myproject
cd myproject

# Create app
python manage.py startapp myapp`,
          basicExample: `# Django views.py
from django.shortcuts import render
from django.http import JsonResponse
from .models import Product

def product_list(request):
    products = Product.objects.all()
    return render(request, 'products/list.html', {'products': products})

def api_products(request):
    products = Product.objects.values('id', 'name', 'price')
    return JsonResponse(list(products), safe=False)

# models.py
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.product_list, name='product_list'),
    path('api/products/', views.api_products, name='api_products'),
]`,
          strengths: [
            'Batteries included framework',
            'Excellent ORM with migrations',
            'Built-in admin interface',
            'Strong security features',
            'Large ecosystem of packages'
          ],
          ecosystem: ['Django REST Framework', 'Celery', 'django-channels', 'pytest-django', 'django-debug-toolbar']
        },
        targetFramework: {
          name: 'Actix-Web',
          setupCode: `# Create new Rust project
cargo new myapp --bin
cd myapp

# Add dependencies to Cargo.toml
# [dependencies]
# actix-web = "4"
# serde = { version = "1", features = ["derive"] }
# sqlx = { version = "0.7", features = ["runtime-tokio-rustls", "postgres"] }
# tokio = { version = "1", features = ["full"] }`,
          basicExample: `// main.rs
use actix_web::{web, App, HttpResponse, HttpServer, Result};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;

#[derive(Serialize, Deserialize)]
struct Product {
    id: i32,
    name: String,
    price: f64,
}

async fn product_list(pool: web::Data<PgPool>) -> Result<HttpResponse> {
    let products = sqlx::query_as!(
        Product,
        "SELECT id, name, price FROM products"
    )
    .fetch_all(pool.get_ref())
    .await
    .map_err(|e| actix_web::error::ErrorInternalServerError(e))?;
    
    Ok(HttpResponse::Ok().json(products))
}

async fn create_product(
    pool: web::Data<PgPool>,
    product: web::Json<Product>,
) -> Result<HttpResponse> {
    let result = sqlx::query!(
        "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING id",
        product.name,
        product.price
    )
    .fetch_one(pool.get_ref())
    .await
    .map_err(|e| actix_web::error::ErrorInternalServerError(e))?;
    
    Ok(HttpResponse::Created().json(serde_json::json!({
        "id": result.id
    })))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let pool = PgPool::connect("postgresql://localhost/myapp")
        .await
        .expect("Failed to create pool");
    
    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(pool.clone()))
            .route("/api/products", web::get().to(product_list))
            .route("/api/products", web::post().to(create_product))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}`,
          strengths: [
            'Extremely fast performance',
            'Type-safe at compile time',
            'Actor-based architecture',
            'Excellent async support',
            'Memory safe without GC'
          ],
          ecosystem: ['SQLx', 'Diesel', 'Serde', 'Tokio', 'Tower']
        },
        migrationTips: [
          'Actix-Web uses async/await throughout - similar to Django\'s async views',
          'SQLx provides compile-time checked SQL queries - more type-safe than Django ORM',
          'Routing is defined in code rather than separate urls.py files',
          'No built-in admin interface - you\'ll need to build admin functionality',
          'Middleware system is similar but configured differently',
          'Templates are handled by external crates like askama or tera'
        ],
        commonPitfalls: [
          'No automatic database migrations - use SQLx migrations or diesel',
          'Must handle database connections and pooling explicitly',
          'No built-in user authentication - use crates like actix-identity',
          'Form handling requires explicit deserialization',
          'Static files need explicit configuration'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'FastAPI',
          setupCode: `# Create virtual environment
python -m venv venv
source venv/bin/activate

# Install FastAPI
pip install fastapi uvicorn sqlalchemy asyncpg

# Create main.py`,
          basicExample: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import asyncpg

app = FastAPI()

class Product(BaseModel):
    id: Optional[int] = None
    name: str
    price: float
    description: Optional[str] = None

@app.on_event("startup")
async def startup():
    app.state.db = await asyncpg.connect('postgresql://localhost/myapp')

@app.on_event("shutdown")
async def shutdown():
    await app.state.db.close()

@app.get("/products", response_model=List[Product])
async def get_products():
    rows = await app.state.db.fetch("SELECT * FROM products")
    return [Product(**dict(row)) for row in rows]

@app.post("/products", response_model=Product)
async def create_product(product: Product):
    row = await app.state.db.fetchrow(
        "INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *",
        product.name, product.price, product.description
    )
    return Product(**dict(row))

@app.get("/products/{product_id}", response_model=Product)
async def get_product(product_id: int):
    row = await app.state.db.fetchrow(
        "SELECT * FROM products WHERE id = $1", product_id
    )
    if not row:
        raise HTTPException(status_code=404, detail="Product not found")
    return Product(**dict(row))`,
          strengths: [
            'Automatic API documentation',
            'Type hints for validation',
            'High performance with async',
            'Easy to learn and use',
            'Modern Python features'
          ],
          ecosystem: ['Pydantic', 'SQLAlchemy', 'Alembic', 'asyncpg', 'Uvicorn']
        },
        targetFramework: {
          name: 'Axum',
          setupCode: `# Create new Rust project
cargo new api_app --bin
cd api_app

# Add to Cargo.toml:
# [dependencies]
# axum = "0.7"
# tokio = { version = "1", features = ["full"] }
# serde = { version = "1", features = ["derive"] }
# sqlx = { version = "0.7", features = ["postgres", "runtime-tokio-rustls"] }`,
          basicExample: `use axum::{
    extract::{Path, State},
    http::StatusCode,
    response::IntoResponse,
    routing::{get, post},
    Json, Router,
};
use serde::{Deserialize, Serialize};
use sqlx::{PgPool, FromRow};
use std::sync::Arc;

#[derive(Serialize, Deserialize, FromRow)]
struct Product {
    id: Option<i32>,
    name: String,
    price: f64,
    description: Option<String>,
}

type AppState = Arc<PgPool>;

async fn get_products(
    State(pool): State<AppState>,
) -> Result<Json<Vec<Product>>, StatusCode> {
    let products = sqlx::query_as::<_, Product>("SELECT * FROM products")
        .fetch_all(pool.as_ref())
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    
    Ok(Json(products))
}

async fn create_product(
    State(pool): State<AppState>,
    Json(product): Json<Product>,
) -> Result<Json<Product>, StatusCode> {
    let result = sqlx::query_as::<_, Product>(
        "INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *"
    )
    .bind(&product.name)
    .bind(product.price)
    .bind(&product.description)
    .fetch_one(pool.as_ref())
    .await
    .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
    
    Ok(Json(result))
}

async fn get_product(
    State(pool): State<AppState>,
    Path(id): Path<i32>,
) -> Result<Json<Product>, StatusCode> {
    let product = sqlx::query_as::<_, Product>(
        "SELECT * FROM products WHERE id = $1"
    )
    .bind(id)
    .fetch_optional(pool.as_ref())
    .await
    .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
    .ok_or(StatusCode::NOT_FOUND)?;
    
    Ok(Json(product))
}

#[tokio::main]
async fn main() {
    let pool = PgPool::connect("postgresql://localhost/myapp")
        .await
        .expect("Failed to connect to database");
    
    let app_state = Arc::new(pool);
    
    let app = Router::new()
        .route("/products", get(get_products).post(create_product))
        .route("/products/:id", get(get_product))
        .with_state(app_state);
    
    axum::Server::bind(&"127.0.0.1:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}`,
          strengths: [
            'Built on Tower ecosystem',
            'Excellent type safety',
            'Modular and composable',
            'Great performance',
            'Clean API design'
          ],
          ecosystem: ['Tower', 'Hyper', 'Tokio', 'SQLx', 'Serde']
        },
        migrationTips: [
          'Axum uses extractors similar to FastAPI\'s dependency injection',
          'Both frameworks are async-first and have similar performance characteristics',
          'SQLx provides similar functionality to asyncpg but with compile-time checking',
          'Route definition is more centralized in Axum',
          'Error handling uses Result types instead of exceptions',
          'No automatic OpenAPI generation - use crates like utoipa'
        ],
        commonPitfalls: [
          'Must explicitly handle all errors - no automatic exception catching',
          'JSON serialization errors must be handled explicitly',
          'No automatic validation - use validator crate or custom logic',
          'Database pooling configuration is more manual',
          'No built-in background tasks - use tokio::spawn'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'pytest',
          setupCode: `# Install pytest
pip install pytest pytest-asyncio pytest-mock

# Create test file
# test_myapp.py`,
          basicExample: `import pytest
from myapp import create_app, db
from myapp.models import User, Product

@pytest.fixture
def app():
    app = create_app('testing')
    with app.app_context():
        db.create_all()
        yield app
        db.drop_all()

@pytest.fixture
def client(app):
    return app.test_client()

@pytest.fixture
def auth_headers(client):
    response = client.post('/auth/login', json={
        'username': 'testuser',
        'password': 'testpass'
    })
    token = response.json['token']
    return {'Authorization': f'Bearer {token}'}

class TestProducts:
    def test_get_products_empty(self, client):
        response = client.get('/api/products')
        assert response.status_code == 200
        assert response.json == []
    
    def test_create_product(self, client, auth_headers):
        product_data = {
            'name': 'Test Product',
            'price': 99.99
        }
        response = client.post('/api/products', 
                             json=product_data,
                             headers=auth_headers)
        assert response.status_code == 201
        assert response.json['name'] == product_data['name']
    
    @pytest.mark.parametrize("invalid_price", [None, -1, "abc"])
    def test_create_product_invalid_price(self, client, auth_headers, invalid_price):
        response = client.post('/api/products',
                             json={'name': 'Test', 'price': invalid_price},
                             headers=auth_headers)
        assert response.status_code == 400

@pytest.mark.asyncio
async def test_async_operation():
    result = await some_async_function()
    assert result == expected_value`,
          strengths: [
            'Simple and intuitive syntax',
            'Powerful fixture system',
            'Extensive plugin ecosystem',
            'Great error reporting',
            'Parallel test execution'
          ],
          ecosystem: ['pytest-asyncio', 'pytest-mock', 'pytest-cov', 'pytest-xdist', 'pytest-django']
        },
        targetFramework: {
          name: 'Rust Testing',
          setupCode: `# Tests go in src/lib.rs or tests/ directory
# Run with: cargo test

# For integration tests:
mkdir tests
# Create tests/integration_test.rs`,
          basicExample: `#[cfg(test)]
mod tests {
    use super::*;
    use actix_web::{test, web, App};
    use sqlx::{PgPool, Postgres};
    
    // Test fixture
    async fn setup_test_db() -> PgPool {
        let pool = PgPool::connect("postgresql://localhost/test_db")
            .await
            .expect("Failed to connect to test database");
        
        // Run migrations
        sqlx::migrate!("./migrations")
            .run(&pool)
            .await
            .expect("Failed to run migrations");
        
        pool
    }
    
    async fn cleanup_test_db(pool: &PgPool) {
        sqlx::query("DROP TABLE IF EXISTS products")
            .execute(pool)
            .await
            .unwrap();
    }
    
    #[actix_web::test]
    async fn test_get_products_empty() {
        let pool = setup_test_db().await;
        let app = test::init_service(
            App::new()
                .app_data(web::Data::new(pool.clone()))
                .route("/api/products", web::get().to(get_products))
        ).await;
        
        let req = test::TestRequest::get()
            .uri("/api/products")
            .to_request();
        let resp = test::call_service(&app, req).await;
        
        assert!(resp.status().is_success());
        
        let body: Vec<Product> = test::read_body_json(resp).await;
        assert_eq!(body.len(), 0);
        
        cleanup_test_db(&pool).await;
    }
    
    #[actix_web::test]
    async fn test_create_product() {
        let pool = setup_test_db().await;
        let app = test::init_service(
            App::new()
                .app_data(web::Data::new(pool.clone()))
                .route("/api/products", web::post().to(create_product))
        ).await;
        
        let product = Product {
            id: None,
            name: "Test Product".to_string(),
            price: 99.99,
        };
        
        let req = test::TestRequest::post()
            .uri("/api/products")
            .set_json(&product)
            .to_request();
        let resp = test::call_service(&app, req).await;
        
        assert_eq!(resp.status(), StatusCode::CREATED);
        
        let body: Product = test::read_body_json(resp).await;
        assert_eq!(body.name, product.name);
        assert!(body.id.is_some());
        
        cleanup_test_db(&pool).await;
    }
    
    // Property-based testing with proptest
    use proptest::prelude::*;
    
    proptest! {
        #[test]
        fn test_product_validation(
            name in "[a-zA-Z ]{1,100}",
            price in 0.01f64..10000.0
        ) {
            let product = Product {
                id: None,
                name: name.clone(),
                price,
            };
            
            assert!(product.name.len() > 0);
            assert!(product.price > 0.0);
        }
    }
    
    // Benchmark test
    #[bench]
    fn bench_product_serialization(b: &mut Bencher) {
        let product = Product {
            id: Some(1),
            name: "Test Product".to_string(),
            price: 99.99,
        };
        
        b.iter(|| {
            serde_json::to_string(&product).unwrap()
        });
    }
}`,
          strengths: [
            'Built into the language',
            'Compile-time test discovery',
            'Fast test execution',
            'Integrated benchmarking',
            'Property-based testing support'
          ],
          ecosystem: ['proptest', 'quickcheck', 'mockall', 'criterion', 'cargo-nextest']
        },
        migrationTips: [
          'Tests are integrated into cargo - run with `cargo test`',
          'Use `#[test]` attribute instead of test classes',
          'Async tests need `#[tokio::test]` or `#[actix_web::test]`',
          'Test organization uses modules instead of classes',
          'Setup/teardown is manual - no automatic fixtures',
          'Property-based testing available with proptest crate'
        ],
        commonPitfalls: [
          'Forgetting to mark async tests with appropriate attributes',
          'Test isolation requires manual database cleanup',
          'No automatic mocking - use mockall or similar crates',
          'Integration tests go in separate tests/ directory',
          'Must manually manage test database state'
        ]
      },
      {
        category: 'build',
        sourceFramework: {
          name: 'Poetry',
          setupCode: `# Install Poetry
curl -sSL https://install.python-poetry.org | python3 -

# Create new project
poetry new myproject
cd myproject

# Add dependencies
poetry add django
poetry add --group dev pytest`,
          basicExample: `# pyproject.toml
[tool.poetry]
name = "myapp"
version = "0.1.0"
description = "A sample Python application"
authors = ["Your Name <you@example.com>"]

[tool.poetry.dependencies]
python = "^3.9"
django = "^4.2"
fastapi = "^0.104.0"
psycopg2-binary = "^2.9"
redis = "^5.0"

[tool.poetry.group.dev.dependencies]
pytest = "^7.4"
pytest-asyncio = "^0.21"
black = "^23.0"
flake8 = "^6.0"
mypy = "^1.0"

[tool.poetry.scripts]
myapp = "myapp.cli:main"

# Commands
# poetry new myproject
# poetry add django
# poetry add --group dev pytest
# poetry install
# poetry run python manage.py runserver
# poetry build
# poetry publish

# Virtual environment
# poetry shell
# poetry env info

# Lock file
# poetry lock
# poetry install --no-dev`,
          strengths: [
            'Modern dependency resolution',
            'Lock file for reproducibility',
            'Virtual env management',
            'Build system integration',
            'Dependency groups support'
          ],
          ecosystem: ['pip', 'setuptools', 'wheel', 'twine', 'pre-commit']
        },
        targetFramework: {
          name: 'Cargo',
          setupCode: `# Cargo comes with Rust installation

# Create new project
cargo new myproject
cd myproject

# Add dependencies
cargo add actix-web
cargo add --dev proptest`,
          basicExample: `# Cargo.toml
[package]
name = "myapp"
version = "0.1.0"
edition = "2021"
authors = ["Your Name <you@example.com>"]

[dependencies]
actix-web = "4.4"
tokio = { version = "1.35", features = ["full"] }
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
sqlx = { version = "0.7", features = ["runtime-tokio-rustls", "postgres"] }
env_logger = "0.10"

[dev-dependencies]
actix-rt = "2.9"
proptest = "1.4"

[profile.release]
lto = true
opt-level = 3

[profile.dev]
opt-level = 0
debug = true

# Commands
# cargo new myproject
# cargo add actix-web
# cargo add --dev proptest
# cargo build
# cargo run
# cargo test
# cargo build --release
# cargo publish

# Features
[features]
default = ["postgres"]
postgres = ["sqlx/postgres"]
sqlite = ["sqlx/sqlite"]

# Workspace for multiple crates
[workspace]
members = [
    "core",
    "api",
    "cli"
]`,
          strengths: [
            'Integrated with Rust toolchain',
            'Excellent dependency resolution',
            'Built-in testing and benching',
            'Cross-compilation support',
            'Reproducible builds'
          ],
          ecosystem: ['crates.io', 'rustup', 'rustfmt', 'clippy', 'cargo-edit']
        },
        migrationTips: [
          'Cargo.toml is similar to pyproject.toml but with different syntax',
          'Dependencies are added with `cargo add` similar to `poetry add`',
          'No virtual environment needed - cargo handles isolation',
          'Build profiles control optimization and debug settings',
          'Features allow conditional compilation',
          'Workspaces support monorepo-style projects'
        ],
        commonPitfalls: [
          'Dependency versions use different syntax (e.g., "1.0" not "^1.0.0")',
          'Must specify features for dependencies explicitly',
          'No automatic script entries - use [[bin]] sections',
          'Dev dependencies only available in tests',
          'Lock file (Cargo.lock) should be committed for applications'
        ]
      }
    ]
  };