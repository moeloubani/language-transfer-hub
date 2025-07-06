import type { LanguageComparison } from '../../types/language';

export const javascriptRubyComparison: LanguageComparison = {
    sourceLanguage: 'JavaScript',
    targetLanguage: 'Ruby',
    syntaxExamples: [
      {
        topic: 'Variables and Syntax',
        description: 'Clean, minimal syntax',
        sourceCode: `let name = "John";
let age = 25;
let isActive = true;
console.log("Hello World");`,
        targetCode: `name = "John"
age = 25
is_active = true
puts "Hello World"`
      },
      {
        topic: 'Functions vs Methods',
        description: 'Method definition',
        sourceCode: `function greet(name, greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

const add = (a, b) => a + b;`,
        targetCode: `def greet(name, greeting = "Hello")
  "#{greeting}, #{name}!"
end

def add(a, b)
  a + b
end`
      },
      {
        topic: 'Arrays and Hashes',
        description: 'Ruby collections',
        sourceCode: `let fruits = ["apple", "banana"];
fruits.push("orange");

let person = {
  name: "John",
  age: 30
};`,
        targetCode: `fruits = ["apple", "banana"]
fruits << "orange"

person = {
  name: "John",
  age: 30
}
# Or with symbols
person = {name: "John", age: 30}`
      }
    ],
    commonPitfalls: [
      {
        title: 'String Interpolation',
        description: 'Different syntax for templates',
        sourceExample: `let message = \`Hello \${name}!\`;`,
        targetExample: `message = "Hello #{name}!"`,
        correctApproach: 'Use #{} for interpolation in Ruby'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design goals',
        sourceApproach: 'JavaScript aims for flexibility and ubiquity',
        targetApproach: 'Ruby prioritizes developer happiness and expressiveness'
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
npm install -D nodemon

# Create server file
touch server.js

# Add to package.json scripts
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}`,
          basicExample: `// server.js
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/users', async (req, res) => {
    const users = await db.users.findAll();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    const user = await db.users.create({ name, email });
    res.status(201).json(user);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});`,
          strengths: [
            'Minimal and flexible',
            'Huge ecosystem',
            'High performance',
            'Easy to customize',
            'Great for microservices'
          ],
          ecosystem: ['npm', 'Passport.js', 'Sequelize/Prisma', 'Socket.io', 'PM2']
        },
        targetFramework: {
          name: 'Ruby on Rails',
          setupCode: `# Install Rails
gem install rails

# Create new Rails app
rails new myapp
cd myapp

# Generate resources
rails generate scaffold User name:string email:string
rails db:migrate

# Start server
rails server`,
          basicExample: `# config/routes.rb
Rails.application.routes.draw do
  root 'home#index'
  resources :users
end

# app/controllers/users_controller.rb
class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  
  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json { render json: @users }
    end
  end
  
  def create
    @user = User.new(user_params)
    
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
  
  private
  
  def set_user
    @user = User.find(params[:id])
  end
  
  def user_params
    params.require(:user).permit(:name, :email)
  end
end

# app/models/user.rb
class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end`,
          strengths: [
            'Convention over configuration',
            'Built-in ORM (ActiveRecord)',
            'Integrated testing framework',
            'Scaffolding and generators',
            'Mature ecosystem'
          ],
          ecosystem: ['gem', 'ActiveRecord', 'ActionCable', 'Sidekiq', 'Devise']
        },
        migrationTips: [
          'Rails provides many features Express requires plugins for',
          'ActiveRecord is more feature-rich than most JS ORMs',
          'Rails conventions reduce boilerplate significantly',
          'Built-in asset pipeline vs separate build tools',
          'Different routing syntax but similar concepts'
        ],
        commonPitfalls: [
          'Rails "magic" can be confusing at first',
          'More opinionated structure than Express',
          'Different middleware approach',
          'Asset compilation works differently',
          'Database migrations are built-in'
        ]
      },
      {
        category: 'fullstack',
        sourceFramework: {
          name: 'Next.js',
          setupCode: `# Create Next.js app
npx create-next-app@latest myapp --typescript
cd myapp

# Install additional dependencies
npm install @prisma/client prisma
npm install axios swr

# Initialize Prisma
npx prisma init`,
          basicExample: `// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  const user = await prisma.user.create({ data });
  return NextResponse.json(user, { status: 201 });
}

// app/users/page.tsx
'use client';

import { useState, useEffect } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);
  
  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}`,
          strengths: [
            'Full-stack React framework',
            'Server-side rendering',
            'API routes built-in',
            'Excellent performance',
            'TypeScript support'
          ],
          ecosystem: ['npm', 'React', 'Prisma', 'NextAuth.js', 'Vercel']
        },
        targetFramework: {
          name: 'Rails + Hotwire',
          setupCode: `# Create Rails app with Hotwire
rails new myapp
cd myapp

# Add Hotwire (included by default in Rails 7+)
# For older versions:
bundle add hotwire-rails
rails hotwire:install

# Generate resources
rails generate scaffold User name:string email:string
rails db:migrate`,
          basicExample: `# app/controllers/users_controller.rb
class UsersController < ApplicationController
  def index
    @users = User.all
  end
  
  def create
    @user = User.new(user_params)
    
    if @user.save
      respond_to do |format|
        format.html { redirect_to @user }
        format.turbo_stream
      end
    else
      render :new, status: :unprocessable_entity
    end
  end
end

# app/views/users/create.turbo_stream.erb
<%= turbo_stream.append "users" do %>
  <%= render @user %>
<% end %>

<%= turbo_stream.replace "new_user" do %>
  <%= render "form", user: User.new %>
<% end %>

# app/views/users/index.html.erb
<h1>Users</h1>

<div id="users">
  <%= render @users %>
</div>

<%= turbo_frame_tag "new_user" do %>
  <%= render "form", user: User.new %>
<% end %>

# app/views/users/_user.html.erb
<div id="<%= dom_id(user) %>">
  <%= user.name %> - <%= user.email %>
</div>`,
          strengths: [
            'No JavaScript build step required',
            'Server-side rendering by default',
            'Real-time updates with Turbo Streams',
            'Progressive enhancement',
            'Simpler mental model'
          ],
          ecosystem: ['gem', 'Turbo', 'Stimulus', 'ActionCable', 'ViewComponent']
        },
        migrationTips: [
          'Hotwire provides SPA-like features without client-side routing',
          'Turbo Streams replace WebSocket implementations',
          'Stimulus provides lightweight JavaScript interactions',
          'Server-rendered by default vs client-rendered',
          'Different mental model but similar user experience'
        ],
        commonPitfalls: [
          'Less control over client-side state',
          'Different debugging approach',
          'SEO is simpler with server rendering',
          'Less JavaScript but more server load',
          'Different deployment considerations'
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
}

# Create Jest config
module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.js']
};`,
          basicExample: `// user.test.js
const User = require('./user');

describe('User', () => {
  let user;
  
  beforeEach(() => {
    user = new User('John', 'john@example.com');
  });
  
  test('creates user with name and email', () => {
    expect(user.name).toBe('John');
    expect(user.email).toBe('john@example.com');
  });
  
  test('validates email format', () => {
    expect(() => {
      new User('John', 'invalid-email');
    }).toThrow('Invalid email format');
  });
  
  test('generates gravatar URL', () => {
    const url = user.gravatarUrl();
    expect(url).toMatch(/gravatar.com/);
  });
  
  // Async test
  test('fetches user data', async () => {
    const data = await user.fetchDetails();
    expect(data).toHaveProperty('id');
  });
  
  // Mocking
  test('sends welcome email', async () => {
    const mockSend = jest.fn().mockResolvedValue(true);
    user.emailService = { send: mockSend };
    
    await user.sendWelcomeEmail();
    
    expect(mockSend).toHaveBeenCalledWith(
      'john@example.com',
      'Welcome!'
    );
  });
});`,
          strengths: [
            'Fast test execution',
            'Great mocking support',
            'Snapshot testing',
            'Built-in coverage',
            'Watch mode'
          ],
          ecosystem: ['npm', 'React Testing Library', 'Supertest', 'MSW', 'Cypress']
        },
        targetFramework: {
          name: 'RSpec',
          setupCode: `# Add to Gemfile
group :development, :test do
  gem 'rspec-rails'
  gem 'factory_bot_rails'
  gem 'faker'
end

# Install and initialize
bundle install
rails generate rspec:install

# Run tests
bundle exec rspec`,
          basicExample: `# spec/models/user_spec.rb
require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { User.new(name: 'John', email: 'john@example.com') }
  
  describe 'validations' do
    it 'is valid with valid attributes' do
      expect(user).to be_valid
    end
    
    it 'is invalid without a name' do
      user.name = nil
      expect(user).not_to be_valid
      expect(user.errors[:name]).to include("can't be blank")
    end
    
    it 'is invalid with duplicate email' do
      User.create!(name: 'Jane', email: 'john@example.com')
      expect(user).not_to be_valid
    end
  end
  
  describe '#gravatar_url' do
    it 'generates correct gravatar URL' do
      expect(user.gravatar_url).to include('gravatar.com')
    end
  end
  
  # Using factories
  describe 'with factory' do
    let(:user) { create(:user) }
    
    it 'creates a valid user' do
      expect(user).to be_persisted
    end
  end
  
  # Async/background jobs
  describe '#send_welcome_email' do
    it 'enqueues welcome email job' do
      expect {
        user.send_welcome_email
      }.to have_enqueued_job(WelcomeEmailJob)
    end
  end
  
  # Request specs
  describe 'API requests', type: :request do
    it 'creates a new user' do
      expect {
        post '/api/users', params: { 
          user: { name: 'John', email: 'john@test.com' } 
        }
      }.to change(User, :count).by(1)
      
      expect(response).to have_http_status(:created)
    end
  end
end`,
          strengths: [
            'Readable DSL',
            'Built-in Rails integration',
            'Powerful matchers',
            'Great for BDD',
            'Extensive ecosystem'
          ],
          ecosystem: ['gem', 'FactoryBot', 'Capybara', 'VCR', 'SimpleCov']
        },
        migrationTips: [
          'RSpec uses describe/it vs Jest describe/test',
          'let() is lazy-loaded vs beforeEach',
          'Built-in database cleaning between tests',
          'FactoryBot replaces manual object creation',
          'Different mocking syntax but similar concepts'
        ],
        commonPitfalls: [
          'RSpec DSL takes time to learn',
          'Database transactions can affect tests',
          'Slower than Jest due to Rails loading',
          'Different approach to test doubles',
          'Need to understand Rails test types'
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
npm install -D nodemon

# Create server
touch server.js`,
          basicExample: `// server.js
const fastify = require('fastify')({ 
  logger: true 
});

// Plugins
fastify.register(require('@fastify/cors'));

// Schema validation
const userSchema = {
  type: 'object',
  required: ['name', 'email'],
  properties: {
    name: { type: 'string' },
    email: { type: 'string', format: 'email' }
  }
};

// Routes
fastify.get('/users', async (request, reply) => {
  const users = await db.users.findAll();
  return users;
});

fastify.post('/users', {
  schema: { body: userSchema }
}, async (request, reply) => {
  const user = await db.users.create(request.body);
  reply.code(201).send(user);
});

// Route with params
fastify.get('/users/:id', async (request, reply) => {
  const { id } = request.params;
  const user = await db.users.findById(id);
  
  if (!user) {
    reply.code(404).send({ error: 'User not found' });
  }
  
  return user;
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
            'Very high performance',
            'Schema validation built-in',
            'TypeScript support',
            'Plugin architecture',
            'Automatic serialization'
          ],
          ecosystem: ['npm', 'Fastify plugins', 'Prisma', 'Ajv', 'Pino logger']
        },
        targetFramework: {
          name: 'Grape',
          setupCode: `# Add to Gemfile
gem 'grape'
gem 'grape-entity'
gem 'rack-cors'

# Install
bundle install

# Mount in config/routes.rb
mount API::Base => '/api'`,
          basicExample: `# app/api/base.rb
module API
  class Base < Grape::API
    format :json
    prefix :api
    
    helpers do
      def current_user
        @current_user ||= User.find(headers['User-Id'])
      end
    end
    
    mount API::V1::Users
  end
end

# app/api/v1/users.rb
module API
  module V1
    class Users < Grape::API
      version 'v1', using: :path
      
      resource :users do
        desc 'Get all users'
        get do
          users = User.all
          present users, with: API::Entities::User
        end
        
        desc 'Create a user'
        params do
          requires :name, type: String, desc: 'User name'
          requires :email, type: String, regexp: /.+@.+/
        end
        post do
          user = User.create!(declared(params))
          present user, with: API::Entities::User
        end
        
        desc 'Get a user'
        params do
          requires :id, type: Integer
        end
        get ':id' do
          user = User.find(params[:id])
          present user, with: API::Entities::User
        end
      end
    end
  end
end

# app/api/entities/user.rb
module API
  module Entities
    class User < Grape::Entity
      expose :id
      expose :name
      expose :email
      expose :created_at
    end
  end
end`,
          strengths: [
            'RESTful API DSL',
            'Built-in validation',
            'Auto-documentation',
            'Versioning support',
            'Entity/presenter pattern'
          ],
          ecosystem: ['gem', 'Grape Entity', 'Grape Swagger', 'Rack middleware', 'ActiveRecord']
        },
        migrationTips: [
          'Grape mounts inside Rails like a Rack app',
          'Built-in parameter validation like Fastify schemas',
          'Entity pattern similar to serializers',
          'Different routing syntax but RESTful concepts',
          'Can coexist with Rails controllers'
        ],
        commonPitfalls: [
          'Learning Grape DSL alongside Rails',
          'Different error handling approach',
          'Entity inheritance can be complex',
          'Testing requires different setup',
          'Documentation syntax differs'
        ]
      }
    ]
};