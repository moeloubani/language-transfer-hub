import type { LanguageComparison } from '../types/language';

import { phpJavascriptComparison } from './comparisons/php-javascript';
import { pythonJavascriptComparison } from './comparisons/python-javascript';
import { javaJavascriptComparison } from './comparisons/java-javascript';
import { phpPythonComparison } from './comparisons/php-python';
import { phpJavaComparison } from './comparisons/php-java';
import { phpTypescriptComparison } from './comparisons/php-typescript';
import { phpRubyComparison } from './comparisons/php-ruby';
import { phpGoComparison } from './comparisons/php-go';
import { phpRustComparison } from './comparisons/php-rust';
import { phpCsharpComparison } from './comparisons/php-csharp';
import { phpSwiftComparison } from './comparisons/php-swift';
import { javascriptTypescriptComparison } from './comparisons/javascript-typescript';
import { javascriptPythonComparison } from './comparisons/javascript-python';
import { javascriptJavaComparison } from './comparisons/javascript-java';
import { javascriptRubyComparison } from './comparisons/javascript-ruby';
import { javascriptGoComparison } from './comparisons/javascript-go';
import { javascriptRustComparison } from './comparisons/javascript-rust';
import { javascriptCsharpComparison } from './comparisons/javascript-csharp';
import { javascriptSwiftComparison } from './comparisons/javascript-swift';
import { javaTypescriptComparison } from './comparisons/java-typescript';
import { javaPythonComparison } from './comparisons/java-python';
import { javaRubyComparison } from './comparisons/java-ruby';
import { javaGoComparison } from './comparisons/java-go';
import { javaRustComparison } from './comparisons/java-rust';
import { javaCsharpComparison } from './comparisons/java-csharp';
import { javaSwiftComparison } from './comparisons/java-swift';
import { csharpJavascriptComparison } from './comparisons/csharp-javascript';
import { csharpTypescriptComparison } from './comparisons/csharp-typescript';
import { csharpPythonComparison } from './comparisons/csharp-python';
import { csharpJavaComparison } from './comparisons/csharp-java';
import { csharpPhpComparison } from './comparisons/csharp-php';
import { csharpRubyComparison } from './comparisons/csharp-ruby';
import { csharpGoComparison } from './comparisons/csharp-go';
import { csharpRustComparison } from './comparisons/csharp-rust';
import { csharpSwiftComparison } from './comparisons/csharp-swift';

export const languageData: Record<string, LanguageComparison> = {
  'php-javascript': phpJavascriptComparison,
  'python-javascript': pythonJavascriptComparison,
  'java-javascript': javaJavascriptComparison,
  'php-python': phpPythonComparison,
  'php-java': phpJavaComparison,
  'php-typescript': phpTypescriptComparison,
  'php-ruby': phpRubyComparison,
  'php-go': phpGoComparison,
  'php-rust': phpRustComparison,
  'php-csharp': phpCsharpComparison,
  'php-swift': phpSwiftComparison,
  'javascript-typescript': javascriptTypescriptComparison,
  'javascript-python': javascriptPythonComparison,
  'javascript-java': javascriptJavaComparison,
  'javascript-ruby': javascriptRubyComparison,
  'javascript-go': javascriptGoComparison,
  'javascript-rust': javascriptRustComparison,
  'javascript-csharp': javascriptCsharpComparison,
  'javascript-swift': javascriptSwiftComparison,
  'java-typescript': javaTypescriptComparison,
  'java-python': javaPythonComparison,
  'java-ruby': javaRubyComparison,
  'java-go': javaGoComparison,
  'java-rust': javaRustComparison,
  'java-csharp': javaCsharpComparison,
  'java-swift': javaSwiftComparison,
  'csharp-javascript': csharpJavascriptComparison,
  'csharp-typescript': csharpTypescriptComparison,
  'csharp-python': csharpPythonComparison,
  'csharp-java': csharpJavaComparison,
  'csharp-php': csharpPhpComparison,
  'csharp-ruby': csharpRubyComparison,
  'csharp-go': csharpGoComparison,
  'csharp-rust': csharpRustComparison,
  'csharp-swift': csharpSwiftComparison,
};