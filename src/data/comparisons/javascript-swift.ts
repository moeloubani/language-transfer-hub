import type { LanguageComparison } from '../../types/language';

export const javascriptSwiftComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Swift',
    syntaxExamples: [
      {
        topic: 'Variables and Optionals',
        description: 'Type safety with optionals',
        sourceCode: `let name = "John";
let age = 25;
let email = null;`,
        targetCode: `let name = "John"
let age = 25
var email: String? = nil

// Optional binding
if let email = email {
    print("Email: \\(email)")
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Null vs Optional',
        description: 'Swift\'s safe approach to nil',
        sourceExample: `let value = null;
console.log(value); // prints null`,
        targetExample: `var value: String? = nil
print(value!) // CRASH if nil!`,
        correctApproach: 'Use optional binding: if let value = value { ... }'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform Focus',
        description: 'Target platforms',
        sourceApproach: 'JavaScript is web-focused, universal',
        targetApproach: 'Swift is Apple ecosystem focused'
      }
    ],
    frameworkComparisons: [
      {
        category: 'mobile',
        sourceFramework: {
          name: 'React Native',
          setupCode: `# Install React Native CLI
npm install -g react-native-cli

# Create new project
npx react-native init MyApp --template react-native-template-typescript

# For iOS development
cd ios && pod install && cd ..

# Run on iOS
npx react-native run-ios

# Run on Android
npx react-native run-android`,
          basicExample: `// App.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from 'react-native';

interface User {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John', email: 'john@example.com' }
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addUser = () => {
    if (!name || !email) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const newUser: User = {
      id: users.length + 1,
      name,
      email,
    };

    setUsers([...users, newUser]);
    setName('');
    setEmail('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>User Management</Text>
        
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.button} onPress={addUser}>
            <Text style={styles.buttonText}>Add User</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userList}>
          {users.map(user => (
            <View key={user.id} style={styles.userItem}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  form: {
    padding: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userList: {
    padding: 20,
  },
  userItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
});

export default App;`,
          strengths: [
            'Cross-platform (iOS & Android)',
            'JavaScript/TypeScript',
            'Hot reloading',
            'Large ecosystem',
            'Web developer friendly'
          ],
          ecosystem: ['npm', 'React Navigation', 'Redux/MobX', 'React Native Paper', 'Expo']
        },
        targetFramework: {
          name: 'SwiftUI',
          setupCode: `# Create new iOS app in Xcode
1. Open Xcode
2. Create a new project
3. Choose iOS > App
4. Product Name: MyApp
5. Interface: SwiftUI
6. Language: Swift

# For package management
// Create Package.swift or use Xcode's SPM integration

# Run the app
Command + R in Xcode`,
          basicExample: `// ContentView.swift
import SwiftUI

struct User: Identifiable {
    let id = UUID()
    var name: String
    var email: String
}

struct ContentView: View {
    @State private var users = [
        User(name: "John", email: "john@example.com")
    ]
    @State private var name = ""
    @State private var email = ""
    @State private var showingAlert = false
    
    var body: some View {
        NavigationView {
            VStack {
                Form {
                    Section("Add User") {
                        TextField("Name", text: $name)
                        TextField("Email", text: $email)
                            .keyboardType(.emailAddress)
                            .autocapitalization(.none)
                        
                        Button("Add User") {
                            addUser()
                        }
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .cornerRadius(8)
                        .disabled(name.isEmpty || email.isEmpty)
                    }
                }
                
                List {
                    Section("Users") {
                        ForEach(users) { user in
                            VStack(alignment: .leading) {
                                Text(user.name)
                                    .font(.headline)
                                Text(user.email)
                                    .font(.subheadline)
                                    .foregroundColor(.secondary)
                            }
                            .padding(.vertical, 4)
                        }
                        .onDelete(perform: deleteUsers)
                    }
                }
            }
            .navigationTitle("User Management")
            .alert("Error", isPresented: $showingAlert) {
                Button("OK", role: .cancel) { }
            } message: {
                Text("Please fill in all fields")
            }
        }
    }
    
    func addUser() {
        guard !name.isEmpty && !email.isEmpty else {
            showingAlert = true
            return
        }
        
        let newUser = User(name: name, email: email)
        users.append(newUser)
        
        // Clear form
        name = ""
        email = ""
    }
    
    func deleteUsers(at offsets: IndexSet) {
        users.remove(atOffsets: offsets)
    }
}

// Preview
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

// App entry point
@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}`,
          strengths: [
            'Native iOS performance',
            'Declarative UI',
            'Type safety',
            'Deep Apple integration',
            'Preview canvas'
          ],
          ecosystem: ['Swift Package Manager', 'Combine', 'Core Data', 'CloudKit', 'WidgetKit']
        },
        migrationTips: [
          'SwiftUI is declarative like React but more concise',
          'State management uses @State, @StateObject similar to useState',
          'Native performance vs JavaScript bridge overhead',
          'Platform-specific features easier in Swift',
          'Different styling approach (modifiers vs StyleSheet)'
        ],
        commonPitfalls: [
          'iOS only (no Android support)',
          'Steeper learning curve for web developers',
          'Xcode required for development',
          'Less third-party libraries',
          'Different navigation patterns'
        ]
      },
      {
        category: 'web',
        sourceFramework: {
          name: 'Express.js',
          setupCode: `# Initialize project
npm init -y

# Install Express
npm install express cors helmet
npm install -D nodemon @types/express

# Create server
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

// In-memory data
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
        return res.status(400).json({ 
            error: 'Name and email are required' 
        });
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
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    
    if (!user) {
        return res.status(404).json({ 
            error: 'User not found' 
        });
    }
    
    res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    
    if (index === -1) {
        return res.status(404).json({ 
            error: 'User not found' 
        });
    }
    
    users.splice(index, 1);
    res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});`,
          strengths: [
            'Simple and flexible',
            'Large ecosystem',
            'Quick to prototype',
            'Middleware system',
            'Wide deployment options'
          ],
          ecosystem: ['npm', 'Passport.js', 'Mongoose', 'Socket.io', 'PM2']
        },
        targetFramework: {
          name: 'Vapor',
          setupCode: `# Install Vapor
brew install vapor

# Create new project
vapor new MyApp
cd MyApp

# Open in Xcode
open Package.swift

# Run the server
vapor run
# or in Xcode: Command + R`,
          basicExample: `// Sources/App/Models/User.swift
import Fluent
import Vapor

final class User: Model, Content {
    static let schema = "users"
    
    @ID(key: .id)
    var id: UUID?
    
    @Field(key: "name")
    var name: String
    
    @Field(key: "email")
    var email: String
    
    init() { }
    
    init(id: UUID? = nil, name: String, email: String) {
        self.id = id
        self.name = name
        self.email = email
    }
}

// Sources/App/Controllers/UserController.swift
import Fluent
import Vapor

struct UserController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let users = routes.grouped("api", "users")
        users.get(use: index)
        users.post(use: create)
        users.group(":userID") { user in
            user.get(use: show)
            user.delete(use: delete)
        }
    }
    
    func index(req: Request) async throws -> [User] {
        try await User.query(on: req.db).all()
    }
    
    func create(req: Request) async throws -> User {
        let user = try req.content.decode(User.self)
        try await user.save(on: req.db)
        return user
    }
    
    func show(req: Request) async throws -> User {
        guard let user = try await User.find(
            req.parameters.get("userID"), 
            on: req.db
        ) else {
            throw Abort(.notFound)
        }
        return user
    }
    
    func delete(req: Request) async throws -> HTTPStatus {
        guard let user = try await User.find(
            req.parameters.get("userID"), 
            on: req.db
        ) else {
            throw Abort(.notFound)
        }
        try await user.delete(on: req.db)
        return .noContent
    }
}

// Sources/App/configure.swift
import Fluent
import FluentSQLiteDriver
import Vapor

public func configure(_ app: Application) throws {
    // Database
    app.databases.use(.sqlite(.memory), as: .sqlite)
    
    // Migrations
    app.migrations.add(CreateUser())
    
    // Middleware
    app.middleware.use(CORSMiddleware())
    
    // Routes
    try routes(app)
}

// Sources/App/routes.swift
import Vapor

func routes(_ app: Application) throws {
    try app.register(collection: UserController())
}

// Sources/App/Migrations/CreateUser.swift
import Fluent

struct CreateUser: AsyncMigration {
    func prepare(on database: Database) async throws {
        try await database.schema("users")
            .id()
            .field("name", .string, .required)
            .field("email", .string, .required)
            .create()
    }
    
    func revert(on database: Database) async throws {
        try await database.schema("users").delete()
    }
}`,
          strengths: [
            'Type-safe Swift',
            'Built on SwiftNIO',
            'Async/await support',
            'ORM included (Fluent)',
            'WebSocket support'
          ],
          ecosystem: ['Swift Package Manager', 'Fluent ORM', 'Leaf templates', 'JWT', 'Queues']
        },
        migrationTips: [
          'Vapor uses similar concepts to Express but with type safety',
          'Fluent ORM vs manual database queries or Mongoose',
          'Async/await is native in Swift',
          'Middleware works similarly but with different syntax',
          'Can deploy to Linux servers like Node.js apps'
        ],
        commonPitfalls: [
          'Smaller ecosystem than Node.js',
          'Less third-party packages',
          'Different deployment considerations',
          'Learning curve for Swift concurrency',
          'Database drivers more limited'
        ]
      },
      {
        category: 'testing',
        sourceFramework: {
          name: 'Jest',
          setupCode: `# Install Jest
npm install --save-dev jest @types/jest

# For React Native
npm install --save-dev @testing-library/react-native

# Configure package.json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}`,
          basicExample: `// __tests__/math.test.js
describe('Math functions', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });
    
    test('multiplies 3 * 4 to equal 12', () => {
        expect(3 * 4).toBe(12);
    });
});

// __tests__/user.test.js
const { createUser, validateEmail } = require('../user');

describe('User functions', () => {
    test('creates user with valid data', () => {
        const user = createUser('John', 'john@example.com');
        expect(user).toEqual({
            name: 'John',
            email: 'john@example.com',
            id: expect.any(String)
        });
    });
    
    test('validates email correctly', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('invalid-email')).toBe(false);
    });
});

// __tests__/UserList.test.js (React Native)
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserList from '../UserList';

describe('UserList', () => {
    test('renders correctly', () => {
        const { getByText } = render(<UserList />);
        expect(getByText('Users')).toBeTruthy();
    });
    
    test('adds user when form is submitted', () => {
        const { getByPlaceholderText, getByText } = render(<UserList />);
        
        const nameInput = getByPlaceholderText('Name');
        const emailInput = getByPlaceholderText('Email');
        const addButton = getByText('Add User');
        
        fireEvent.changeText(nameInput, 'John Doe');
        fireEvent.changeText(emailInput, 'john@example.com');
        fireEvent.press(addButton);
        
        expect(getByText('John Doe')).toBeTruthy();
    });
});`,
          strengths: [
            'Zero configuration',
            'Fast execution',
            'Mocking support',
            'Snapshot testing',
            'Great ecosystem'
          ],
          ecosystem: ['npm', 'Testing Library', 'Enzyme', 'Detox', 'Cypress']
        },
        targetFramework: {
          name: 'XCTest',
          setupCode: `# XCTest is built into Xcode
# Create test files in the Tests folder

# Run tests in Xcode
Command + U

# Run tests from command line
xcodebuild test -scheme MyApp`,
          basicExample: `// UserTests.swift
import XCTest
@testable import MyApp

class UserTests: XCTestCase {
    
    func testUserCreation() {
        let user = User(name: "John", email: "john@example.com")
        
        XCTAssertEqual(user.name, "John")
        XCTAssertEqual(user.email, "john@example.com")
        XCTAssertNotNil(user.id)
    }
    
    func testEmailValidation() {
        XCTAssertTrue(User.isValidEmail("test@example.com"))
        XCTAssertFalse(User.isValidEmail("invalid-email"))
        XCTAssertFalse(User.isValidEmail(""))
    }
    
    func testUserEquality() {
        let user1 = User(name: "John", email: "john@example.com")
        let user2 = User(name: "John", email: "john@example.com")
        let user3 = User(name: "Jane", email: "jane@example.com")
        
        XCTAssertEqual(user1, user1) // Same instance
        XCTAssertNotEqual(user1, user2) // Different IDs
        XCTAssertNotEqual(user1, user3) // Different data
    }
}

// UI Tests
import XCTest

class MyAppUITests: XCTestCase {
    var app: XCUIApplication!
    
    override func setUp() {
        super.setUp()
        
        continueAfterFailure = false
        app = XCUIApplication()
        app.launch()
    }
    
    func testAddUser() {
        // Find elements
        let nameField = app.textFields["Name"]
        let emailField = app.textFields["Email"]
        let addButton = app.buttons["Add User"]
        
        // Enter data
        nameField.tap()
        nameField.typeText("John Doe")
        
        emailField.tap()
        emailField.typeText("john@example.com")
        
        // Submit
        addButton.tap()
        
        // Verify
        XCTAssertTrue(app.staticTexts["John Doe"].exists)
        XCTAssertTrue(app.staticTexts["john@example.com"].exists)
    }
    
    func testEmptyFormValidation() {
        let addButton = app.buttons["Add User"]
        addButton.tap()
        
        // Should show alert
        XCTAssertTrue(app.alerts["Error"].exists)
    }
}

// Async Testing (iOS 15+)
class AsyncUserTests: XCTestCase {
    
    func testFetchUsers() async throws {
        let service = UserService()
        let users = try await service.fetchUsers()
        
        XCTAssertGreaterThan(users.count, 0)
        XCTAssertEqual(users.first?.name, "John")
    }
    
    func testCreateUser() async throws {
        let service = UserService()
        let user = User(name: "Test", email: "test@example.com")
        
        let created = try await service.createUser(user)
        
        XCTAssertNotNil(created.id)
        XCTAssertEqual(created.name, user.name)
    }
}

// Performance Testing
class PerformanceTests: XCTestCase {
    
    func testUserCreationPerformance() {
        measure {
            for i in 0..<1000 {
                _ = User(name: "User \\(i)", email: "user\\(i)@example.com")
            }
        }
    }
}`,
          strengths: [
            'Built into Xcode',
            'UI testing support',
            'Performance testing',
            'Async testing',
            'Code coverage'
          ],
          ecosystem: ['XCTest', 'Quick/Nimble', 'XCUITest', 'Snapshot testing', 'Instruments']
        },
        migrationTips: [
          'XCTAssert vs expect() syntax',
          'UI tests are more integrated in Xcode',
          'Built-in performance testing',
          'No separate test runner needed',
          'Different mocking approach (protocols)'
        ],
        commonPitfalls: [
          'Less mocking flexibility',
          'Setup/teardown is different',
          'No built-in snapshot testing',
          'Test discovery is automatic',
          'Async testing requires iOS 15+'
        ]
      },
      {
        category: 'fullstack',
        sourceFramework: {
          name: 'Next.js',
          setupCode: `# Create Next.js app
npx create-next-app@latest myapp --typescript
cd myapp

# Install additional packages
npm install axios swr

# Run development server
npm run dev`,
          basicExample: `// pages/api/users/index.ts
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
      const { name, email } = req.body;
      
      if (!name || !email) {
        res.status(400).json({ error: 'Missing fields' });
        break;
      }
      
      const newUser = {
        id: users.length + 1,
        name,
        email
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
import { useState } from 'react';
import useSWR from 'swr';
import Head from 'next/head';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Home() {
  const { data: users, error, mutate } = useSWR('/api/users', fetcher);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });

      if (response.ok) {
        setName('');
        setEmail('');
        mutate();
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (error) return <div>Failed to load</div>;
  if (!users) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>User Management</title>
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">User Management</h1>

        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            {loading ? 'Adding...' : 'Add User'}
          </button>
        </form>

        <div className="space-y-2">
          {users.map((user: any) => (
            <div key={user.id} className="p-4 border rounded">
              <div className="font-bold">{user.name}</div>
              <div className="text-gray-600">{user.email}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}`,
          strengths: [
            'Full-stack React',
            'API routes',
            'SSR/SSG/ISR',
            'TypeScript support',
            'Fast refresh'
          ],
          ecosystem: ['npm', 'React', 'Tailwind CSS', 'Prisma', 'NextAuth.js']
        },
        targetFramework: {
          name: 'Swift + Vapor + iOS',
          setupCode: `# Backend - Create Vapor API
vapor new backend
cd backend
open Package.swift

# iOS App - Create in Xcode
1. New Project > iOS > App
2. Use SwiftUI
3. Add networking code

# Shared Models Package
swift package init --type library --name SharedModels`,
          basicExample: `// Shared Models (SharedModels/Sources/SharedModels/User.swift)
import Foundation

public struct User: Codable, Identifiable {
    public let id: UUID
    public let name: String
    public let email: String
    
    public init(id: UUID = UUID(), name: String, email: String) {
        self.id = id
        self.name = name
        self.email = email
    }
}

// Backend Vapor API (same as earlier Vapor example)
// ...

// iOS App - Models/APIService.swift
import Foundation
import Combine

class APIService: ObservableObject {
    private let baseURL = "http://localhost:8080/api"
    
    func fetchUsers() async throws -> [User] {
        guard let url = URL(string: "\\(baseURL)/users") else {
            throw URLError(.badURL)
        }
        
        let (data, _) = try await URLSession.shared.data(from: url)
        return try JSONDecoder().decode([User].self, from: data)
    }
    
    func createUser(_ user: User) async throws -> User {
        guard let url = URL(string: "\\(baseURL)/users") else {
            throw URLError(.badURL)
        }
        
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = try JSONEncoder().encode(user)
        
        let (data, _) = try await URLSession.shared.data(for: request)
        return try JSONDecoder().decode(User.self, from: data)
    }
}

// iOS App - Views/ContentView.swift
import SwiftUI

struct ContentView: View {
    @StateObject private var api = APIService()
    @State private var users: [User] = []
    @State private var name = ""
    @State private var email = ""
    @State private var isLoading = false
    @State private var errorMessage = ""
    
    var body: some View {
        NavigationView {
            VStack {
                Form {
                    Section("Add User") {
                        TextField("Name", text: $name)
                        TextField("Email", text: $email)
                            .keyboardType(.emailAddress)
                            .autocapitalization(.none)
                        
                        Button(action: addUser) {
                            if isLoading {
                                ProgressView()
                                    .progressViewStyle(CircularProgressViewStyle())
                            } else {
                                Text("Add User")
                            }
                        }
                        .disabled(name.isEmpty || email.isEmpty || isLoading)
                    }
                    
                    if !errorMessage.isEmpty {
                        Section {
                            Text(errorMessage)
                                .foregroundColor(.red)
                        }
                    }
                }
                
                List(users) { user in
                    VStack(alignment: .leading) {
                        Text(user.name)
                            .font(.headline)
                        Text(user.email)
                            .font(.subheadline)
                            .foregroundColor(.secondary)
                    }
                }
                .refreshable {
                    await loadUsers()
                }
            }
            .navigationTitle("Users")
            .task {
                await loadUsers()
            }
        }
    }
    
    func loadUsers() async {
        do {
            users = try await api.fetchUsers()
            errorMessage = ""
        } catch {
            errorMessage = "Failed to load users: \\(error.localizedDescription)"
        }
    }
    
    func addUser() {
        Task {
            isLoading = true
            defer { isLoading = false }
            
            do {
                let newUser = User(name: name, email: email)
                _ = try await api.createUser(newUser)
                
                name = ""
                email = ""
                
                await loadUsers()
            } catch {
                errorMessage = "Failed to add user: \\(error.localizedDescription)"
            }
        }
    }
}`,
          strengths: [
            'Native iOS performance',
            'Type-safe API',
            'Shared models',
            'SwiftUI for UI',
            'Server-side Swift'
          ],
          ecosystem: ['SPM', 'Vapor', 'SwiftUI', 'Combine', 'Core Data']
        },
        migrationTips: [
          'Separate frontend/backend vs unified Next.js',
          'Native UI vs web-based UI',
          'Different state management (ObservableObject vs React state)',
          'API calls use URLSession vs fetch',
          'Can share Swift models between client and server'
        ],
        commonPitfalls: [
          'More complex architecture',
          'Need to handle CORS',
          'Different deployment strategies',
          'iOS only (no web version)',
          'Requires Mac for development'
        ]
      }
    ]
};