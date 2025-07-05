import React from 'react';
import { LANGUAGES } from '../utils/languageUtils';

interface LanguageSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  excludeLanguage?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  label,
  value,
  onChange,
  excludeLanguage
}) => {
  const availableLanguages = Object.entries(LANGUAGES).filter(
    ([key]) => key !== excludeLanguage
  );

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white transition-colors duration-200 shadow-sm"
      >
        <option value="">Select a language</option>
        {availableLanguages.map(([key, name]) => (
          <option key={key} value={key}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};