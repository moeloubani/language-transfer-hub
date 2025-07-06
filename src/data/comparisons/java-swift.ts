import type { LanguageComparison } from '../../types/language';

export const javaSwiftComparison: LanguageComparison = {
    sourceLanguage: 'Java',
    targetLanguage: 'Swift',
    syntaxExamples: [
      {
        topic: 'Optional Types',
        description: 'Null safety approaches',
        sourceCode: `String name = null;
if (name != null) {
    System.out.println(name.length());
}`,
        targetCode: `var name: String? = nil
if let name = name {
    print(name.count)
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Optionals vs Null',
        description: 'Swift\'s safer approach to nil values',
        sourceExample: `String value = null;
value.length(); // NullPointerException`,
        targetExample: `var value: String? = nil
value!.count // Crash if nil!`,
        correctApproach: 'Use optional binding or nil coalescing in Swift'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform Focus',
        description: 'Target ecosystems',
        sourceApproach: 'Java targets enterprise and server applications',
        targetApproach: 'Swift targets Apple ecosystem (iOS, macOS)'
      }
    ]
};