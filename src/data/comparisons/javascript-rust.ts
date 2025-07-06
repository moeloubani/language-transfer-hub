import type { LanguageComparison } from '../../types/language';

export const javascriptRustComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Rust',
    syntaxExamples: [
      {
        topic: 'Variables and Ownership',
        description: 'Memory safety with ownership',
        sourceCode: `let name = "John";
let age = 25;
let items = ["a", "b", "c"];`,
        targetCode: `let name = "John";
let age = 25;
let items = vec!["a", "b", "c"];

// Mutable variables
let mut count = 0;
count += 1;`
      }
    ],
    commonPitfalls: [
      {
        title: 'Ownership and Borrowing',
        description: 'Rust\'s unique memory model',
        sourceExample: `let data = getData();
processData(data);
useData(data); // Fine in JS`,
        targetExample: `let data = get_data();
process_data(data); // data moved!
use_data(data); // ERROR`,
        correctApproach: 'Use references (&) or clone when needed'
      }
    ],
    keyDifferences: [
      {
        topic: 'Memory Management',
        description: 'GC vs ownership',
        sourceApproach: 'JavaScript has garbage collection',
        targetApproach: 'Rust uses ownership for zero-cost memory safety'
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
npm install express cors helmet body-parser
npm install -D nodemon @types/express

# Create server file
touch server.js`,
          basicExample: `// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// In-memory storage
let users = [
    { id: 1, name: 'John', email: 'john@example.com' }
];

// Routes
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email required' });
    }
    
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});`,
          strengths: [
            'Simple and flexible',
            'Huge ecosystem',
            'Quick prototyping',
            'Easy middleware',
            'Well documented'
          ],
          ecosystem: ['npm', 'Passport.js', 'Mongoose', 'Socket.io', 'Express-validator']
        },
        targetFramework: {
          name: 'Actix-web',
          setupCode: `# Create new Rust project
cargo new myapp
cd myapp

# Add dependencies to Cargo.toml
[dependencies]
actix-web = "4"
actix-cors = "0.6"
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
tokio = { version = "1", features = ["full"] }`,
          basicExample: `// src/main.rs
use actix_web::{web, App, HttpResponse, HttpServer, Result, middleware};
use actix_cors::Cors;
use serde::{Deserialize, Serialize};
use std::sync::Mutex;

#[derive(Debug, Clone, Serialize, Deserialize)]
struct User {
    id: u32,
    name: String,
    email: String,
}

#[derive(Debug, Deserialize)]
struct CreateUser {
    name: String,
    email: String,
}

struct AppState {
    users: Mutex<Vec<User>>,
}

async fn get_users(data: web::Data<AppState>) -> Result<HttpResponse> {
    let users = data.users.lock().unwrap();
    Ok(HttpResponse::Ok().json(&*users))
}

async fn create_user(
    user: web::Json<CreateUser>,
    data: web::Data<AppState>,
) -> Result<HttpResponse> {
    let mut users = data.users.lock().unwrap();
    
    let new_user = User {
        id: users.len() as u32 + 1,
        name: user.name.clone(),
        email: user.email.clone(),
    };
    
    users.push(new_user.clone());
    Ok(HttpResponse::Created().json(new_user))
}

async fn get_user(
    path: web::Path<u32>,
    data: web::Data<AppState>,
) -> Result<HttpResponse> {
    let users = data.users.lock().unwrap();
    let user_id = path.into_inner();
    
    match users.iter().find(|u| u.id == user_id) {
        Some(user) => Ok(HttpResponse::Ok().json(user)),
        None => Ok(HttpResponse::NotFound().json(serde_json::json!({
            "error": "User not found"
        }))),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let app_state = web::Data::new(AppState {
        users: Mutex::new(vec![
            User {
                id: 1,
                name: "John".to_string(),
                email: "john@example.com".to_string(),
            },
        ]),
    });

    HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone())
            .wrap(
                Cors::default()
                    .allow_any_origin()
                    .allow_any_method()
                    .allow_any_header(),
            )
            .wrap(middleware::Logger::default())
            .service(
                web::scope("/api")
                    .route("/users", web::get().to(get_users))
                    .route("/users", web::post().to(create_user))
                    .route("/users/{id}", web::get().to(get_user)),
            )
    })
    .bind("127.0.0.1:3000")?
    .run()
    .await
}`,
          strengths: [
            'Extremely fast performance',
            'Type safety',
            'Actor model',
            'Memory safety',
            'Great for high-load APIs'
          ],
          ecosystem: ['cargo', 'Diesel/SQLx', 'Serde', 'Tokio', 'Tower']
        },
        migrationTips: [
          'Actix uses actors and async/await by default',
          'Type safety requires defining structs for requests/responses',
          'Error handling is explicit with Result type',
          'Shared state requires Arc<Mutex<>> or actors',
          'Compile-time guarantees vs runtime validation'
        ],
        commonPitfalls: [
          'Steeper learning curve due to ownership',
          'More boilerplate for type definitions',
          'Async traits can be complex',
          'JSON parsing must be explicit',
          'Different middleware approach'
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
const fastify = require('fastify')({ 
    logger: true 
});

// Plugins
fastify.register(require('@fastify/cors'));

// Schemas
const userSchema = {
    type: 'object',
    required: ['name', 'email'],
    properties: {
        name: { type: 'string' },
        email: { type: 'string', format: 'email' }
    }
};

const getUserSchema = {
    type: 'object',
    properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        email: { type: 'string' }
    }
};

// Routes
fastify.get('/users', {
    schema: {
        response: {
            200: {
                type: 'array',
                items: getUserSchema
            }
        }
    }
}, async (request, reply) => {
    return users;
});

fastify.post('/users', {
    schema: {
        body: userSchema,
        response: {
            201: getUserSchema
        }
    }
}, async (request, reply) => {
    const newUser = {
        id: users.length + 1,
        ...request.body
    };
    users.push(newUser);
    reply.code(201).send(newUser);
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
            'Very fast performance',
            'Schema validation',
            'TypeScript friendly',
            'Plugin system',
            'JSON Schema support'
          ],
          ecosystem: ['npm', 'Fastify plugins', 'Ajv', 'Pino', 'Mercurius']
        },
        targetFramework: {
          name: 'Rocket',
          setupCode: `# Create new Rust project
cargo new myapp --name rocket_app
cd myapp

# Add to Cargo.toml
[dependencies]
rocket = { version = "0.5", features = ["json"] }
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"

# Install nightly Rust (required for Rocket)
rustup override set nightly`,
          basicExample: `// src/main.rs
#[macro_use] extern crate rocket;

use rocket::serde::{Deserialize, Serialize, json::Json};
use rocket::{State, response::status};
use std::sync::Mutex;

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(crate = "rocket::serde")]
struct User {
    id: u32,
    name: String,
    email: String,
}

#[derive(Debug, Deserialize)]
#[serde(crate = "rocket::serde")]
struct NewUser {
    name: String,
    email: String,
}

type UserList = Mutex<Vec<User>>;

#[get("/users")]
fn get_users(users: &State<UserList>) -> Json<Vec<User>> {
    let users = users.lock().unwrap();
    Json(users.clone())
}

#[post("/users", data = "<new_user>")]
fn create_user(
    new_user: Json<NewUser>, 
    users: &State<UserList>
) -> status::Created<Json<User>> {
    let mut users = users.lock().unwrap();
    
    let user = User {
        id: users.len() as u32 + 1,
        name: new_user.name.clone(),
        email: new_user.email.clone(),
    };
    
    users.push(user.clone());
    
    let location = format!("/users/{}", user.id);
    status::Created::new(location).body(Json(user))
}

#[get("/users/<id>")]
fn get_user(id: u32, users: &State<UserList>) -> Option<Json<User>> {
    let users = users.lock().unwrap();
    users.iter()
        .find(|u| u.id == id)
        .map(|u| Json(u.clone()))
}

#[catch(404)]
fn not_found() -> Json<serde_json::Value> {
    Json(serde_json::json!({
        "error": "Resource not found"
    }))
}

#[catch(422)]
fn unprocessable_entity() -> Json<serde_json::Value> {
    Json(serde_json::json!({
        "error": "Invalid request data"
    }))
}

#[launch]
fn rocket() -> _ {
    let users = vec![
        User {
            id: 1,
            name: "John".to_string(),
            email: "john@example.com".to_string(),
        },
    ];

    rocket::build()
        .mount("/api", routes![get_users, create_user, get_user])
        .register("/", catchers![not_found, unprocessable_entity])
        .manage(UserList::new(users))
}`,
          strengths: [
            'Type-safe routing',
            'Automatic request guards',
            'Clean syntax with macros',
            'Built-in JSON support',
            'Request validation'
          ],
          ecosystem: ['cargo', 'Diesel', 'SeaORM', 'rocket_cors', 'rocket_db_pools']
        },
        migrationTips: [
          'Rocket uses macros for cleaner route definitions',
          'Request guards provide automatic validation',
          'Type safety throughout the stack',
          'Fairings are similar to middleware',
          'Compile-time route checking'
        ],
        commonPitfalls: [
          'Requires nightly Rust compiler',
          'Macro magic can be confusing',
          'Different approach to middleware (fairings)',
          'State management requires explicit types',
          'Limited async support compared to Actix'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'Jest',
          setupCode: `# Install Jest
npm install --save-dev jest @types/jest

# Configure package.json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}`,
          basicExample: `// math.test.js
const { add, multiply, divide } = require('./math');

describe('Math functions', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });
    
    test('multiplies 3 * 4 to equal 12', () => {
        expect(multiply(3, 4)).toBe(12);
    });
    
    test('divides 10 / 2 to equal 5', () => {
        expect(divide(10, 2)).toBe(5);
    });
    
    test('throws error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Division by zero');
    });
    
    // Async testing
    test('fetches user data', async () => {
        const data = await fetchUser(1);
        expect(data.name).toBe('John');
    });
    
    // Mocking
    test('calls callback after timer', () => {
        const callback = jest.fn();
        
        jest.useFakeTimers();
        setTimeout(callback, 1000);
        
        expect(callback).not.toBeCalled();
        
        jest.runAllTimers();
        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1);
    });
});

// Snapshot testing
test('renders correctly', () => {
    const tree = renderer
        .create(<Link page="http://www.example.com">Example</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});`,
          strengths: [
            'Zero config',
            'Fast execution',
            'Great mocking',
            'Snapshot testing',
            'Watch mode'
          ],
          ecosystem: ['npm', 'React Testing Library', 'Enzyme', 'Puppeteer', 'Cypress']
        },
        targetFramework: {
          name: 'Rust Testing',
          setupCode: `# Tests are built into Rust
# Create a tests directory for integration tests
mkdir tests

# Run tests
cargo test

# Run with output
cargo test -- --nocapture

# Run specific test
cargo test test_name`,
          basicExample: `// src/lib.rs
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

pub fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("Division by zero".to_string())
    } else {
        Ok(a / b)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn test_add() {
        assert_eq!(add(1, 2), 3);
        assert_eq!(add(-1, 1), 0);
    }
    
    #[test]
    fn test_divide() {
        assert_eq!(divide(10.0, 2.0), Ok(5.0));
        assert_eq!(divide(10.0, 0.0), Err("Division by zero".to_string()));
    }
    
    #[test]
    #[should_panic(expected = "assertion failed")]
    fn test_panic() {
        assert_eq!(1, 2);
    }
    
    // Async testing
    #[tokio::test]
    async fn test_async_function() {
        let result = fetch_data().await;
        assert_eq!(result, "data");
    }
}

// Integration tests in tests/integration_test.rs
#[test]
fn test_integration() {
    let result = myapp::process_data("input");
    assert_eq!(result, "processed");
}

// Property-based testing with proptest
#[cfg(test)]
mod property_tests {
    use proptest::prelude::*;
    
    proptest! {
        #[test]
        fn test_add_commutative(a: i32, b: i32) {
            assert_eq!(add(a, b), add(b, a));
        }
        
        #[test]
        fn test_divide_multiply(a: f64, b in 0.1f64..100.0) {
            let divided = divide(a, b).unwrap();
            let multiplied = divided * b;
            assert!((multiplied - a).abs() < 0.0001);
        }
    }
}

// Benchmarking
#[cfg(test)]
mod benches {
    use test::Bencher;
    
    #[bench]
    fn bench_add(b: &mut Bencher) {
        b.iter(|| add(2, 2));
    }
}`,
          strengths: [
            'Built into the language',
            'Compile-time test discovery',
            'Property-based testing',
            'Benchmarking support',
            'Parallel test execution'
          ],
          ecosystem: ['cargo test', 'proptest', 'quickcheck', 'criterion', 'mockall']
        },
        migrationTips: [
          'Tests live alongside code with #[cfg(test)]',
          'assert! macros instead of expect functions',
          'Property testing for better coverage',
          'No need for test runners',
          'Benchmarks are separate from tests'
        ],
        commonPitfalls: [
          'No built-in mocking (use mockall)',
          'Test organization is different',
          'No snapshot testing by default',
          'Setup/teardown is more manual',
          'Async tests need runtime annotation'
        ]
      },
      {
        category: 'fullstack',
        sourceFramework: {
          name: 'Next.js',
          setupCode: `# Create Next.js app
npx create-next-app@latest myapp --typescript
cd myapp

# Install dependencies
npm install swr axios`,
          basicExample: `// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';

let users = [
    { id: 1, name: 'John', email: 'john@example.com' }
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case 'GET':
            res.status(200).json(users);
            break;
            
        case 'POST':
            const newUser = {
                id: users.length + 1,
                ...req.body
            };
            users.push(newUser);
            res.status(201).json(newUser);
            break;
            
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(\`Method \${req.method} Not Allowed\`);
    }
}

// pages/index.tsx
import useSWR from 'swr';
import { useState } from 'react';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Home() {
    const { data: users, error, mutate } = useSWR('/api/users', fetcher);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });
        
        mutate();
        setName('');
        setEmail('');
    };
    
    if (error) return <div>Failed to load</div>;
    if (!users) return <div>Loading...</div>;
    
    return (
        <div>
            <h1>Users</h1>
            <form onSubmit={handleSubmit}>
                <input
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
            'API routes included',
            'SSR/SSG/ISR',
            'File-based routing',
            'Vercel deployment'
          ],
          ecosystem: ['npm', 'React', 'Vercel', 'Prisma', 'NextAuth.js']
        },
        targetFramework: {
          name: 'Rust + Yew',
          setupCode: `# Backend - Create Actix server
cargo new backend
cd backend

# Add to Cargo.toml
[dependencies]
actix-web = "4"
actix-cors = "0.6"
serde = { version = "1.0", features = ["derive"] }

# Frontend - Create Yew app
cargo new frontend --name yew_app
cd frontend

# Add to Cargo.toml
[dependencies]
yew = { version = "0.21", features = ["csr"] }
wasm-bindgen = "0.2"
web-sys = "0.3"
gloo-net = "0.5"
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"

# Install trunk for building
cargo install trunk`,
          basicExample: `// Backend: src/main.rs
use actix_web::{web, App, HttpServer};
use actix_cors::Cors;
// ... (same as earlier Actix example)

// Frontend: src/main.rs
use yew::prelude::*;
use gloo_net::http::Request;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
struct User {
    id: u32,
    name: String,
    email: String,
}

#[function_component(App)]
fn app() -> Html {
    let users = use_state(Vec::<User>::new);
    let name = use_state(String::new);
    let email = use_state(String::new);
    
    // Fetch users on mount
    {
        let users = users.clone();
        use_effect_with((), move |_| {
            let users = users.clone();
            wasm_bindgen_futures::spawn_local(async move {
                let fetched_users: Vec<User> = Request::get("http://localhost:8080/api/users")
                    .send()
                    .await
                    .unwrap()
                    .json()
                    .await
                    .unwrap();
                users.set(fetched_users);
            });
        });
    }
    
    let on_submit = {
        let users = users.clone();
        let name = name.clone();
        let email = email.clone();
        
        Callback::from(move |e: SubmitEvent| {
            e.prevent_default();
            
            let users = users.clone();
            let new_user = User {
                id: 0, // Will be set by server
                name: (*name).clone(),
                email: (*email).clone(),
            };
            
            wasm_bindgen_futures::spawn_local(async move {
                let _response = Request::post("http://localhost:8080/api/users")
                    .json(&new_user)
                    .unwrap()
                    .send()
                    .await;
                    
                // Refresh users
                let fetched_users: Vec<User> = Request::get("http://localhost:8080/api/users")
                    .send()
                    .await
                    .unwrap()
                    .json()
                    .await
                    .unwrap();
                users.set(fetched_users);
            });
            
            name.set(String::new());
            email.set(String::new());
        })
    };
    
    html! {
        <div>
            <h1>{"Users"}</h1>
            
            <form onsubmit={on_submit}>
                <input
                    type="text"
                    value={(*name).clone()}
                    oninput={move |e: InputEvent| {
                        name.set(e.target_unchecked_into::<web_sys::HtmlInputElement>().value())
                    }}
                    placeholder="Name"
                    required=true
                />
                <input
                    type="email"
                    value={(*email).clone()}
                    oninput={move |e: InputEvent| {
                        email.set(e.target_unchecked_into::<web_sys::HtmlInputElement>().value())
                    }}
                    placeholder="Email"
                    required=true
                />
                <button type="submit">{"Add User"}</button>
            </form>
            
            <ul>
                {(*users).iter().map(|user| {
                    html! {
                        <li key={user.id}>
                            {&user.name} {" - "} {&user.email}
                        </li>
                    }
                }).collect::<Html>()}
            </ul>
        </div>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}

// index.html (in project root)
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Yew App</title>
</head>
<body></body>
</html>`,
          strengths: [
            'Full-stack Rust',
            'Type safety everywhere',
            'WASM performance',
            'No JavaScript required',
            'Shared types frontend/backend'
          ],
          ecosystem: ['cargo', 'Yew', 'Trunk', 'wasm-bindgen', 'web-sys']
        },
        migrationTips: [
          'Yew uses React-like concepts but in Rust',
          'WASM requires different build process',
          'State management uses Rust ownership',
          'Can share types between frontend and backend',
          'Different deployment (WASM files)'
        ],
        commonPitfalls: [
          'Larger bundle sizes than JS frameworks',
          'Limited ecosystem compared to React',
          'WASM debugging can be challenging',
          'Build times are longer',
          'Browser compatibility considerations'
        ]
      }
    ]
};