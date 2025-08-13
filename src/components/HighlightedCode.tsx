import React from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-swift';
import 'prismjs/themes/prism-tomorrow.css';

interface Props {
  code: string;
  language: string; // prism language key
  colorClass?: string; // tailwind text color classes
}

export const HighlightedCode: React.FC<Props> = ({ code, language, colorClass }) => {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [code, language]);

  return (
    <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm border border-gray-700 shadow-lg">
      <code ref={ref} className={`language-${language} ${colorClass || ''}`}>
        {code}
      </code>
    </pre>
  );
};

export default HighlightedCode;

