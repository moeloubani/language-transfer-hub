import type { LanguageComparison } from '../../types/language';

export const pythonRubyComparison: LanguageComparison = {
    sourceLanguage: 'Python',
    targetLanguage: 'Ruby',
    syntaxExamples: [
      {
        topic: 'Variables and Types',
        description: 'Variable declaration and dynamic typing',
        sourceCode: `name = "John"
age = 25
is_active = True
score = 95.5

# Dynamic typing
value = 42
value = "now a string"  # This is fine

# Constants (convention)
PI = 3.14159`,
        targetCode: `name = "John"
age = 25
is_active = true  # lowercase
score = 95.5

# Dynamic typing
value = 42
value = "now a string"  # This is also fine

# Constants (enforced)
PI = 3.14159  # Ruby warns if you reassign constants`
      },
      {
        topic: 'Collections',
        description: 'Lists/Arrays and Dictionaries/Hashes',
        sourceCode: `# List
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
first = fruits[0]
last = fruits[-1]

# Dictionary
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]

# Dictionary comprehension
word_lengths = {word: len(word) for word in ["apple", "banana"]}`,
        targetCode: `# Array
fruits = ["apple", "banana", "orange"]
fruits.push("grape")  # or fruits << "grape"
first = fruits[0]
last = fruits[-1]

# Hash
person = {
  "name" => "John",
  "age" => 30,
  "city" => "New York"
}

# Or with symbols
person = {
  name: "John",
  age: 30,
  city: "New York"
}

# Array methods (similar to comprehensions)
squares = (0...10).map { |x| x**2 }
evens = (0...20).select { |x| x % 2 == 0 }

# Hash comprehension-like
word_lengths = ["apple", "banana"].map { |word| [word, word.length] }.to_h`
      },
      {
        topic: 'Functions and Methods',
        description: 'Function definitions and lambdas',
        sourceCode: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

def calculate_area(width, height):
    return width * height

# Lambda function
add = lambda x, y: x + y

# Multiple return values
def get_user_data():
    return "John", 30, "john@example.com"

name, age, email = get_user_data()

# Keyword arguments
def create_user(name, age, email=None, active=True):
    return {"name": name, "age": age, "email": email, "active": active}

user = create_user("John", 30, email="john@example.com")`,
        targetCode: `def greet(name, greeting = "Hello")
  "#{greeting}, #{name}!"  # implicit return
end

def calculate_area(width, height)
  width * height
end

# Lambda/Proc
add = ->(x, y) { x + y }
# or
add = lambda { |x, y| x + y }

# Multiple return values
def get_user_data
  ["John", 30, "john@example.com"]  # return array
end

name, age, email = get_user_data

# Keyword arguments (Ruby 2.0+)
def create_user(name:, age:, email: nil, active: true)
  { name: name, age: age, email: email, active: active }
end

user = create_user(name: "John", age: 30, email: "john@example.com")`
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
    
    @classmethod
    def from_string(cls, person_str):
        name, age = person_str.split(',')
        return cls(name, int(age))
    
    @staticmethod
    def is_adult(age):
        return age >= 18

# Inheritance
class Employee(Person):
    def __init__(self, name, age, employee_id):
        super().__init__(name, age)
        self.employee_id = employee_id

person = Person("John", 30)
print(person.greet())`,
        targetCode: `class Person
  attr_reader :age  # getter only
  attr_accessor :name  # getter and setter
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def greet
    "Hi, I'm #{@name}"
  end
  
  def to_s
    "Person(name='#{@name}', age=#{@age})"
  end
  
  # Class method
  def self.from_string(person_str)
    name, age = person_str.split(',')
    new(name, age.to_i)
  end
  
  # Module for static-like methods
  def self.is_adult?(age)
    age >= 18
  end
end

# Inheritance
class Employee < Person
  attr_accessor :employee_id
  
  def initialize(name, age, employee_id)
    super(name, age)
    @employee_id = employee_id
  end
end

person = Person.new("John", 30)
puts person.greet`
      },
      {
        topic: 'Iteration and Blocks',
        description: 'Different iteration patterns',
        sourceCode: `# For loop
for i in range(5):
    print(i)

# Iterate over list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# Enumerate with index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# List operations
numbers = [1, 2, 3, 4, 5]
doubled = [x * 2 for x in numbers]
filtered = [x for x in numbers if x > 2]
sum_all = sum(numbers)`,
        targetCode: `# Times loop
5.times do |i|
  puts i
end

# Iterate over array
fruits = ["apple", "banana", "orange"]
fruits.each do |fruit|
  puts fruit
end

# With index
fruits.each_with_index do |fruit, i|
  puts "#{i}: #{fruit}"
end

# While loop
count = 0
while count < 5
  puts count
  count += 1
end

# Array operations
numbers = [1, 2, 3, 4, 5]
doubled = numbers.map { |x| x * 2 }
filtered = numbers.select { |x| x > 2 }
sum_all = numbers.sum  # or numbers.inject(:+)`
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

# Raising exceptions
def validate_age(age):
    if age < 0:
        raise ValidationError("Age cannot be negative")
    return True

# Context manager
with open('file.txt', 'r') as f:
    content = f.read()`,
        targetCode: `def divide(a, b)
  begin
    result = a / b
    result
  rescue ZeroDivisionError
    puts "Cannot divide by zero!"
    nil
  rescue => e
    puts "An error occurred: #{e.message}"
    raise
  ensure
    puts "Division operation completed"
  end
end

# Custom exception
class ValidationError < StandardError
  attr_reader :message
  
  def initialize(message)
    @message = message
    super(message)
  end
end

# Raising exceptions
def validate_age(age)
  raise ValidationError.new("Age cannot be negative") if age < 0
  true
end

# Block form for file handling
File.open('file.txt', 'r') do |f|
  content = f.read
end  # File automatically closed`
      }
    ],
    commonPitfalls: [
      {
        title: 'Boolean Values',
        description: 'Different boolean representations',
        sourceExample: `is_valid = True
is_empty = False

# Checking None
if value is None:
    print("Value is None")`,
        targetExample: `is_valid = true  # lowercase
is_empty = false  # lowercase

# Checking nil
if value.nil?
  puts "Value is nil"
end
# or
if value == nil
  puts "Value is nil"
end`,
        correctApproach: 'Use lowercase true/false in Ruby, and nil instead of None'
      },
      {
        title: 'String Interpolation',
        description: 'Different string formatting syntax',
        sourceExample: `name = "John"
age = 30
message = f"Hello {name}, you are {age} years old"

# Or older style
message = "Hello {}, you are {} years old".format(name, age)`,
        targetExample: `name = "John"
age = 30
message = "Hello #{name}, you are #{age} years old"

# Note: Must use double quotes for interpolation
# Single quotes do not interpolate:
wrong = 'Hello #{name}'  # This prints literally`,
        correctApproach: 'Use double quotes with #{} for string interpolation in Ruby'
      },
      {
        title: 'Indentation vs End Keywords',
        description: 'Different code block delimiters',
        sourceExample: `if condition:
    do_something()
    do_another_thing()
else:
    do_different_thing()`,
        targetExample: `if condition
  do_something
  do_another_thing
else
  do_different_thing
end`,
        correctApproach: 'Use "end" keywords to close blocks in Ruby, indentation is for readability only'
      },
      {
        title: 'Method Names',
        description: 'Different naming conventions',
        sourceExample: `def is_valid():
    return True

def has_items():
    return len(items) > 0`,
        targetExample: `def valid?
  true
end

def has_items?
  items.length > 0
end

# Ruby convention: 
# - Methods returning booleans end with ?
# - Dangerous methods end with !`,
        correctApproach: 'Follow Ruby conventions: use ? for boolean methods, ! for dangerous methods'
      },
      {
        title: 'Implicit Returns',
        description: 'Ruby returns last expression automatically',
        sourceExample: `def add(a, b):
    return a + b

def get_name():
    name = "John"
    return name`,
        targetExample: `def add(a, b)
  a + b  # Implicit return
end

def get_name
  name = "John"
  name  # Last expression is returned
end

# Explicit return for early exit
def check_value(x)
  return nil if x < 0
  x * 2
end`,
        correctApproach: 'Leverage implicit returns in Ruby, use explicit return only for early exits'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design principles',
        sourceApproach: 'Python emphasizes "one obvious way to do things" and readability',
        targetApproach: 'Ruby emphasizes developer happiness and expressiveness'
      },
      {
        topic: 'Syntax Style',
        description: 'Code structure approach',
        sourceApproach: 'Python uses indentation for blocks and minimal syntax',
        targetApproach: 'Ruby uses end keywords and allows multiple ways to express ideas'
      },
      {
        topic: 'Object-Oriented Design',
        description: 'Everything is an object',
        sourceApproach: 'Python mixes OOP with procedural, some things are not objects',
        targetApproach: 'Ruby is purely object-oriented, everything is an object'
      },
      {
        topic: 'Functional Features',
        description: 'Functional programming support',
        sourceApproach: 'Python has limited functional features (map, filter, lambda)',
        targetApproach: 'Ruby has rich functional features with blocks and Enumerable'
      },
      {
        topic: 'Metaprogramming',
        description: 'Runtime code modification',
        sourceApproach: 'Python supports metaprogramming but it\'s not idiomatic',
        targetApproach: 'Ruby embraces metaprogramming as a core feature'
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
pip install django

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

class UserListView(ListView):
    model = User
    template_name = 'users/list.html'
    context_object_name = 'users'

class UserCreateView(CreateView):
    model = User
    fields = ['name', 'email']
    template_name = 'users/create.html'
    success_url = '/users/'

# urls.py
from django.urls import path
from .views import UserListView, UserCreateView

urlpatterns = [
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/create/', UserCreateView.as_view(), name='user-create'),
]

# admin.py
from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'created_at']
    search_fields = ['name', 'email']`,
          strengths: [
            'Batteries included framework',
            'Powerful admin interface',
            'Built-in ORM with migrations',
            'Excellent security features',
            'Large ecosystem'
          ],
          ecosystem: ['pip', 'Django ORM', 'Django Admin', 'Django REST Framework', 'Celery']
        },
        targetFramework: {
          name: 'Ruby on Rails',
          setupCode: `# Install Rails
gem install rails

# Create new Rails app
rails new myproject
cd myproject

# Generate scaffold
rails generate scaffold User name:string email:string

# Run migrations
rails db:migrate

# Start server
rails server

# Or using bundle
bundle install
bundle exec rails server`,
          basicExample: `# app/models/user.rb
class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end

# app/controllers/users_controller.rb
class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  
  def index
    @users = User.all
  end
  
  def show
  end
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    
    if @user.save
      redirect_to @user, notice: 'User was successfully created.'
    else
      render :new
    end
  end
  
  def edit
  end
  
  def update
    if @user.update(user_params)
      redirect_to @user, notice: 'User was successfully updated.'
    else
      render :edit
    end
  end
  
  def destroy
    @user.destroy
    redirect_to users_url, notice: 'User was successfully destroyed.'
  end
  
  private
  
  def set_user
    @user = User.find(params[:id])
  end
  
  def user_params
    params.require(:user).permit(:name, :email)
  end
end

# config/routes.rb
Rails.application.routes.draw do
  resources :users
  root 'users#index'
end

# app/views/users/_form.html.erb
<%= form_with(model: user) do |form| %>
  <% if user.errors.any? %>
    <div id="error_explanation">
      <h2><%= pluralize(user.errors.count, "error") %> prohibited this user from being saved:</h2>
      <ul>
        <% user.errors.full_messages.each do |message| %>
          <li><%= message %></li>
        <% end %>
      </ul>
    </div>
  <% end %>

  <div class="field">
    <%= form.label :name %>
    <%= form.text_field :name %>
  </div>

  <div class="field">
    <%= form.label :email %>
    <%= form.email_field :email %>
  </div>

  <div class="actions">
    <%= form.submit %>
  </div>
<% end %>`,
          strengths: [
            'Convention over configuration',
            'Powerful generators',
            'ActiveRecord ORM',
            'Built-in testing',
            'Rich ecosystem of gems'
          ],
          ecosystem: ['gem/bundler', 'ActiveRecord', 'ActionView', 'Rails generators', 'RSpec']
        },
        migrationTips: [
          'Both follow MVC pattern with similar concepts',
          'ActiveRecord similar to Django ORM but more convention-based',
          'ERB templates vs Django templates',
          'Rails generators vs Django admin commands',
          'Both have strong migration systems'
        ],
        commonPitfalls: [
          'Rails magic vs Django explicitness',
          'Different template syntax',
          'Ruby blocks vs Python decorators',
          'Implicit returns in Ruby',
          'Different testing philosophies'
        ]
      },
      {
        category: 'api',
        sourceFramework: {
          name: 'FastAPI',
          setupCode: `# Install FastAPI
pip install fastapi uvicorn[standard]

# Create main.py
touch main.py

# Run development server
uvicorn main:app --reload`,
          basicExample: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime

app = FastAPI(title="User API", version="1.0.0")

# In-memory storage
users_db = []
user_id_counter = 1

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

@app.get("/users", response_model=List[User])
async def get_users(skip: int = 0, limit: int = 100):
    return users_db[skip : skip + limit]

@app.post("/users", response_model=User, status_code=201)
async def create_user(user: UserCreate):
    global user_id_counter
    
    if any(u.email == user.email for u in users_db):
        raise HTTPException(status_code=400, detail="Email already registered")
    
    db_user = User(
        id=user_id_counter,
        name=user.name,
        email=user.email,
        created_at=datetime.now()
    )
    
    users_db.append(db_user)
    user_id_counter += 1
    
    return db_user

@app.get("/users/{user_id}", response_model=User)
async def get_user(user_id: int):
    user = next((u for u in users_db if u.id == user_id), None)
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
          name: 'Grape',
          setupCode: `# Add to Gemfile
gem 'grape'
gem 'grape-entity'
gem 'grape-swagger'
gem 'grape-swagger-entity'

# Install
bundle install

# Create API file
mkdir app/api
touch app/api/user_api.rb

# Mount in config/routes.rb
mount UserAPI => '/api'`,
          basicExample: `# app/api/user_api.rb
require 'grape'

class UserAPI < Grape::API
  version 'v1', using: :path
  format :json
  prefix :api
  
  # In-memory storage
  @@users = []
  @@user_id_counter = 1
  
  # Entities (like Pydantic models)
  class UserEntity < Grape::Entity
    expose :id
    expose :name
    expose :email
    expose :created_at
  end
  
  # Helpers
  helpers do
    def find_user(id)
      @@users.find { |u| u[:id] == id.to_i }
    end
    
    def email_exists?(email)
      @@users.any? { |u| u[:email] == email }
    end
  end
  
  # Parameter validation
  params do
    requires :name, type: String, desc: 'User name'
    requires :email, type: String, regexp: /.+@.+/, desc: 'User email'
  end
  
  resource :users do
    desc 'Get all users'
    params do
      optional :skip, type: Integer, default: 0
      optional :limit, type: Integer, default: 100
    end
    get do
      users = @@users[params[:skip], params[:limit]] || []
      present users, with: UserEntity
    end
    
    desc 'Create a user'
    post do
      error!('Email already registered', 400) if email_exists?(params[:email])
      
      user = {
        id: @@user_id_counter,
        name: params[:name],
        email: params[:email],
        created_at: Time.now
      }
      
      @@users << user
      @@user_id_counter += 1
      
      present user, with: UserEntity
    end
    
    desc 'Get a user by ID'
    params do
      requires :id, type: Integer, desc: 'User ID'
    end
    route_param :id do
      get do
        user = find_user(params[:id])
        error!('User not found', 404) unless user
        present user, with: UserEntity
      end
    end
  end
  
  # Swagger documentation
  add_swagger_documentation(
    api_version: "v1",
    hide_documentation_path: true,
    info: {
      title: "User API",
      description: "A simple user management API"
    }
  )
end

# Or with Rails integration
class UserAPI < Grape::API
  format :json
  
  resource :users do
    desc 'Get all users'
    get do
      User.all
    end
    
    desc 'Create a user'
    params do
      requires :name, type: String
      requires :email, type: String
    end
    post do
      user = User.create!(
        name: params[:name],
        email: params[:email]
      )
      present user
    end
    
    desc 'Get a user'
    route_param :id do
      get do
        User.find(params[:id])
      end
    end
  end
end`,
          strengths: [
            'RESTful API DSL',
            'Built-in parameter validation',
            'Entity presentation layer',
            'Swagger integration',
            'Modular design'
          ],
          ecosystem: ['gem/bundler', 'Grape Entity', 'Grape Swagger', 'ActiveRecord', 'Rack']
        },
        migrationTips: [
          'Both use decorator/DSL for route definition',
          'Grape entities similar to Pydantic models',
          'Parameter validation works similarly',
          'Both can generate API documentation',
          'Error handling patterns are similar'
        ],
        commonPitfalls: [
          'Ruby DSL vs Python decorators',
          'No async/await in Ruby',
          'Different validation syntax',
          'Entity presentation vs Pydantic serialization',
          'Mounting APIs differently'
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
pytest test_user.py::test_user_creation`,
          basicExample: `# test_user.py
import pytest
from user import User, UserService

class TestUser:
    def setup_method(self):
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
        ("VeryLongName", False)
    ])
    def test_name_validation(self, name, expected):
        user = User(name=name, email="test@example.com")
        assert user.is_valid_name() == expected
    
    def test_exception_raised(self):
        with pytest.raises(ValueError, match="Email cannot be empty"):
            User(name="John", email="")
    
    @pytest.fixture
    def mock_repository(self, mocker):
        repo = mocker.Mock()
        repo.save.return_value = self.user
        return repo
    
    def test_user_service(self, mock_repository):
        service = UserService(mock_repository)
        result = service.save_user(self.user)
        
        assert result == self.user
        mock_repository.save.assert_called_once_with(self.user)`,
          strengths: [
            'Simple and powerful',
            'Great fixtures system',
            'Parametrized testing',
            'Excellent output',
            'Large plugin ecosystem'
          ],
          ecosystem: ['pip', 'pytest-django', 'pytest-asyncio', 'pytest-mock', 'tox']
        },
        targetFramework: {
          name: 'RSpec',
          setupCode: `# Add to Gemfile
group :test do
  gem 'rspec'
  gem 'rspec-rails'  # if using Rails
  gem 'factory_bot'
  gem 'faker'
end

# Install
bundle install

# Initialize RSpec (Rails)
rails generate rspec:install

# Initialize RSpec (non-Rails)
rspec --init

# Run tests
rspec

# Run specific test
rspec spec/user_spec.rb

# Run with documentation format
rspec --format documentation`,
          basicExample: `# spec/user_spec.rb
require 'spec_helper'
require_relative '../lib/user'

RSpec.describe User do
  let(:user) { User.new(name: "John", email: "john@example.com") }
  
  describe '#initialize' do
    it 'creates a user with name and email' do
      expect(user.name).to eq("John")
      expect(user.email).to eq("john@example.com")
      expect(user.id).not_to be_nil
    end
  end
  
  describe '#valid_email?' do
    it 'returns true for valid emails' do
      expect(user.valid_email?("test@example.com")).to be true
    end
    
    it 'returns false for invalid emails' do
      expect(user.valid_email?("invalid-email")).to be false
    end
  end
  
  describe '#valid_name?' do
    # Parametrized-like testing
    [
      ["John", true],
      ["", false],
      ["A", false],
      ["VeryLongName", false]
    ].each do |name, expected|
      it "returns #{expected} for name '#{name}'" do
        test_user = User.new(name: name, email: "test@example.com")
        expect(test_user.valid_name?).to eq(expected)
      end
    end
  end
  
  describe 'exceptions' do
    it 'raises ValueError for empty email' do
      expect {
        User.new(name: "John", email: "")
      }.to raise_error(ValueError, "Email cannot be empty")
    end
  end
  
  describe UserService do
    let(:repository) { double("UserRepository") }
    let(:service) { UserService.new(repository) }
    
    describe '#save_user' do
      it 'saves the user through repository' do
        expect(repository).to receive(:save).with(user).and_return(user)
        
        result = service.save_user(user)
        
        expect(result).to eq(user)
      end
    end
  end
  
  # Shared examples
  shared_examples "a valid user" do
    it { expect(user).to be_valid }
    it { expect(user.name).not_to be_empty }
    it { expect(user.email).to match(/@/) }
  end
  
  context 'with valid attributes' do
    it_behaves_like "a valid user"
  end
  
  # Before/after hooks
  before(:each) do
    # Setup before each test
  end
  
  after(:each) do
    # Cleanup after each test
  end
end

# spec/factories/users.rb (with FactoryBot)
FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    
    trait :admin do
      admin { true }
    end
  end
end

# Using factories in tests
RSpec.describe User do
  let(:user) { create(:user) }
  let(:admin) { create(:user, :admin) }
  
  it 'creates users with factory' do
    expect(user).to be_valid
    expect(admin).to be_admin
  end
end`,
          strengths: [
            'BDD-style syntax',
            'Excellent readability',
            'Rich matchers',
            'Shared examples',
            'Great mocking support'
          ],
          ecosystem: ['gem/bundler', 'FactoryBot', 'Faker', 'Database Cleaner', 'VCR']
        },
        migrationTips: [
          'RSpec describe/it blocks vs pytest test functions',
          'let() lazy evaluation vs pytest fixtures',
          'Shared examples vs pytest parametrize',
          'expect().to syntax vs assert statements',
          'Both support mocking but different syntax'
        ],
        commonPitfalls: [
          'RSpec DSL learning curve',
          'Different assertion syntax',
          'let vs let! confusion',
          'Context/describe nesting',
          'Mock syntax differences'
        ]
      },
      {
        category: 'build',
        sourceFramework: {
          name: 'pip/Poetry',
          setupCode: `# Using pip with venv
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Using Poetry (modern approach)
pip install poetry
poetry new myproject
cd myproject

# Add dependencies
poetry add requests pandas
poetry add --dev pytest black

# Install dependencies
poetry install

# Run in virtual env
poetry run python script.py

# Build package
poetry build`,
          basicExample: `# requirements.txt (traditional)
requests==2.28.0
pandas>=1.5.0
numpy~=1.23.0

# requirements-dev.txt
pytest>=7.0
black>=22.0

# pyproject.toml (Poetry)
[tool.poetry]
name = "myproject"
version = "1.0.0"
description = "A sample Python project"
authors = ["John Doe <john@example.com>"]
readme = "README.md"
packages = [{include = "myproject", from = "src"}]

[tool.poetry.dependencies]
python = "^3.8"
requests = "^2.28.0"
pandas = "^1.5.0"
numpy = "^1.23.0"

[tool.poetry.group.dev.dependencies]
pytest = "^7.0"
black = "^22.0"
flake8 = "^5.0"

[tool.poetry.scripts]
mycommand = "myproject.cli:main"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"

# setup.py (traditional)
from setuptools import setup, find_packages

setup(
    name="myproject",
    version="1.0.0",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    install_requires=[
        "requests>=2.28.0",
        "pandas>=1.5.0",
    ],
    entry_points={
        "console_scripts": [
            "mycommand=myproject.cli:main",
        ],
    },
)`,
          strengths: [
            'Simple package management',
            'Virtual environments',
            'Lock files with Poetry',
            'PyPI publishing',
            'Dependency resolution'
          ],
          ecosystem: ['PyPI', 'virtualenv', 'pip-tools', 'poetry', 'pipenv']
        },
        targetFramework: {
          name: 'Bundler/RubyGems',
          setupCode: `# Install bundler
gem install bundler

# Create Gemfile
bundle init

# Add gems to Gemfile
# Then install
bundle install

# Install specific gem
gem install rails

# Create new gem
bundle gem mygem
cd mygem

# Build gem
gem build mygem.gemspec

# Push to RubyGems
gem push mygem-1.0.0.gem`,
          basicExample: `# Gemfile
source 'https://rubygems.org'

ruby '3.2.0'

# Web framework
gem 'rails', '~> 7.0.0'
gem 'puma', '~> 5.0'

# Database
gem 'pg', '~> 1.1'

# Background jobs
gem 'sidekiq', '~> 7.0'
gem 'redis', '~> 5.0'

group :development, :test do
  gem 'rspec-rails', '~> 6.0'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'pry-rails'
end

group :development do
  gem 'rubocop', require: false
  gem 'rubocop-rails', require: false
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'simplecov', require: false
end

# Gemfile.lock (auto-generated, like poetry.lock)

# mygem.gemspec
Gem::Specification.new do |spec|
  spec.name = "mygem"
  spec.version = "1.0.0"
  spec.authors = ["John Doe"]
  spec.email = ["john@example.com"]
  
  spec.summary = "A sample Ruby gem"
  spec.description = "Longer description of the gem"
  spec.homepage = "https://github.com/username/mygem"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 2.6.0"
  
  spec.files = Dir["lib/**/*", "README.md", "LICENSE.txt"]
  spec.require_paths = ["lib"]
  
  spec.add_dependency "activesupport", "~> 7.0"
  spec.add_dependency "thor", "~> 1.2"
  
  spec.add_development_dependency "rspec", "~> 3.12"
  spec.add_development_dependency "rake", "~> 13.0"
  
  spec.executables = ["mygem"]
end

# Rakefile
require "bundler/gem_tasks"
require "rspec/core/rake_task"

RSpec::Core::RakeTask.new(:spec)

task default: :spec`,
          strengths: [
            'Mature package ecosystem',
            'Version locking with Bundler',
            'Easy gem creation',
            'RubyGems.org hosting',
            'Semantic versioning'
          ],
          ecosystem: ['RubyGems.org', 'Bundler', 'Rake', 'Gemfury', 'RVM/rbenv']
        },
        migrationTips: [
          'Gemfile similar to requirements.txt',
          'Gemfile.lock similar to poetry.lock',
          'bundle exec similar to poetry run',
          'gem build/push similar to poetry publish',
          'Both support dependency groups'
        ],
        commonPitfalls: [
          'Version specifier syntax differences (~> vs ^)',
          'Bundle exec required for consistency',
          'Different package structure',
          'Ruby version management separate',
          'No built-in virtual environments'
        ]
      }
    ]
};