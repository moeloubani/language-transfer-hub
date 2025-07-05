# Language Transfer Hub

A comprehensive web application that helps developers quickly transfer their programming knowledge from one language to another.

## Features

- **Side-by-side Syntax Comparison**: See equivalent syntax between any two programming languages
- **Common Pitfalls**: Learn about common mistakes when transitioning between languages
- **Key Differences**: Understand fundamental differences in language design and philosophy
- **Syntax Highlighting**: Beautiful code highlighting with Prism.js
- **Dark Mode Support**: Built-in dark mode for comfortable viewing

## Currently Supported Language Pairs

### PHP Comparisons
- PHP ↔ JavaScript, TypeScript, Python, Java, Ruby, Go, Rust, C#, Swift

### JavaScript Comparisons  
- JavaScript ↔ PHP, TypeScript, Python, Java, Ruby, Go, Rust, C#, Swift

### Java Comparisons
- Java ↔ PHP, JavaScript, TypeScript, Python, Ruby, Go, Rust, C#, Swift

### C# Comparisons
- C# ↔ PHP, JavaScript, TypeScript, Python, Java, Ruby, Go, Rust, Swift

**Total**: 48+ language comparison pairs with bidirectional support

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

## Usage

1. Select your source language (the language you know) from the first dropdown
2. Select your target language (the language you want to learn) from the second dropdown
3. Browse through the three tabs:
   - **Syntax Comparison**: See how common programming constructs translate between languages
   - **Common Pitfalls**: Avoid common mistakes when switching languages
   - **Key Differences**: Understand fundamental differences between the languages

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- React with TypeScript
- Tailwind CSS for styling
- Prism.js for syntax highlighting
- Vite for fast development and building