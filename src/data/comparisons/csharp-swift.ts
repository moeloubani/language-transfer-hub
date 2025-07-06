import type { LanguageComparison } from '../../types/language';

export const csharpSwiftComparison: LanguageComparison = {
    sourceLanguage: 'C#',
    targetLanguage: 'Swift',
    syntaxExamples: [
      {
        topic: 'Optional Types',
        description: 'Null safety approaches',
        sourceCode: `string name = null;
if (name != null) {
    Console.WriteLine(name.Length);
}`,
        targetCode: `var name: String? = nil
if let name = name {
    print(name.count)
}`
      }
    ],
    commonPitfalls: [
      {
        title: 'Null vs Optional',
        description: 'Different null handling',
        sourceExample: `string value = null;
value.Length; // NullReferenceException`,
        targetExample: `var value: String? = nil
value!.count // Crash if nil!`,
        correctApproach: 'Use optional binding in Swift'
      }
    ],
    keyDifferences: [
      {
        topic: 'Platform Focus',
        description: 'Target ecosystems',
        sourceApproach: 'C# targets enterprise and cross-platform applications',
        targetApproach: 'Swift targets Apple ecosystem primarily'
      }
    ]
};