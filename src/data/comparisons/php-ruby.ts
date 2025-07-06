import type { LanguageComparison } from '../../types/language';

export const phpRubyComparison: LanguageComparison = {
    sourceLanguage: 'PHP',
    targetLanguage: 'Ruby',
    syntaxExamples: [
      {
        topic: 'Variables',
        description: 'Variable declaration and naming',
        sourceCode: `$name = "John";
$age = 25;
$isActive = true;`,
        targetCode: `name = "John"
age = 25
is_active = true`
      },
      {
        topic: 'Arrays and Hashes',
        description: 'Collections and key-value pairs',
        sourceCode: `$fruits = ["apple", "banana", "orange"];
$first = $fruits[0];
$fruits[] = "grape";

$person = ["name" => "John", "age" => 30];`,
        targetCode: `fruits = ["apple", "banana", "orange"]
first = fruits[0]
fruits << "grape"

person = {"name" => "John", "age" => 30}
# Or using symbols
person = {name: "John", age: 30}`
      },
      {
        topic: 'Functions and Methods',
        description: 'Function definition',
        sourceCode: `function greet($name, $greeting = "Hello") {
  return "$greeting, $name!";
}

echo greet("John");`,
        targetCode: `def greet(name, greeting = "Hello")
  "#{greeting}, #{name}!"
end

puts greet("John")`
      },
      {
        topic: 'Classes',
        description: 'Object-oriented programming',
        sourceCode: `class Person {
  private $name;
  
  public function __construct($name) {
    $this->name = $name;
  }
  
  public function greet() {
    return "Hi, I'm " . $this->name;
  }
}

$person = new Person("John");`,
        targetCode: `class Person
  def initialize(name)
    @name = name
  end
  
  def greet
    "Hi, I'm #{@name}"
  end
end

person = Person.new("John")`
      }
    ],
    commonPitfalls: [
      {
        title: 'Variable Naming',
        description: 'Different naming conventions',
        sourceExample: `$firstName = "John";`,
        targetExample: `first_name = "John"`,
        correctApproach: 'Ruby uses snake_case for variables and methods'
      },
      {
        title: 'String Interpolation',
        description: 'Different interpolation syntax',
        sourceExample: `$message = "Hello $name!";`,
        targetExample: `message = "Hello #{name}!"`,
        correctApproach: 'Ruby uses #{} for string interpolation'
      }
    ],
    keyDifferences: [
      {
        topic: 'Philosophy',
        description: 'Language design principles',
        sourceApproach: 'PHP is pragmatic, web-focused',
        targetApproach: 'Ruby prioritizes developer happiness and expressiveness'
      },
      {
        topic: 'Syntax',
        description: 'Code structure requirements',
        sourceApproach: 'PHP requires $ for variables, semicolons, braces',
        targetApproach: 'Ruby is more minimal - no $, optional semicolons, end keywords'
      }
    ],
    frameworkComparisons: [
      {
        category: 'web',
        sourceFramework: {
          name: 'Laravel',
          setupCode: `# Install Laravel via Composer
composer global require laravel/installer

# Create new Laravel project
laravel new myapp
cd myapp

# Install dependencies
composer install

# Generate application key
php artisan key:generate

# Start development server
php artisan serve`,
          basicExample: `<?php
// routes/web.php
use App\\Http\\Controllers\\UserController;

Route::resource('users', UserController::class);

// app/Http/Controllers/UserController.php
<?php
namespace App\\Http\\Controllers;

use App\\Models\\User;
use Illuminate\\Http\\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', compact('users'));
    }
    
    public function create()
    {
        return view('users.create');
    }
    
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
        ]);
        
        User::create($validated);
        return redirect()->route('users.index');
    }
    
    public function show(User $user)
    {
        return view('users.show', compact('user'));
    }
}

// app/Models/User.php
<?php
namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;

class User extends Model
{
    protected $fillable = ['name', 'email'];
}`,
          strengths: [
            'Full-featured MVC framework',
            'Eloquent ORM built-in',
            'Artisan CLI tools',
            'Rich ecosystem',
            'Excellent documentation'
          ],
          ecosystem: ['Composer', 'Eloquent ORM', 'Blade Templates', 'Artisan CLI', 'Laravel Mix']
        },
        targetFramework: {
          name: 'Ruby on Rails',
          setupCode: `# Install Rails gem
gem install rails

# Create new Rails application
rails new myapp
cd myapp

# Generate scaffold
rails generate scaffold User name:string email:string

# Run database migrations
rails db:migrate

# Start development server
rails server`,
          basicExample: `# config/routes.rb
Rails.application.routes.draw do
  resources :users
  root 'users#index'
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
    redirect_to users_url, notice: 'User was successfully deleted.'
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
            'ActiveRecord ORM built-in',
            'Rails generators',
            'Mature ecosystem',
            'Strong community'
          ],
          ecosystem: ['gem', 'ActiveRecord', 'ActionView', 'Rails generators', 'Bundler']
        },
        migrationTips: [
          'Rails follows similar MVC pattern as Laravel',
          'ActiveRecord is similar to Eloquent ORM',
          'Rails generators replace Laravel Artisan commands',
          'ERB templates replace Blade templates',
          'Bundler (Gemfile) replaces Composer (composer.json)'
        ],
        commonPitfalls: [
          'Ruby naming conventions (snake_case vs camelCase)',
          'Different template syntax (ERB vs Blade)',
          'Rails autoloading vs PHP explicit requires',
          'Different migration syntax',
          'Strong parameters vs request validation'
        ]
      }
    ]
};