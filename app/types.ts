// app/types.ts
export type Language = 'en' | 'am' | 'om';

export interface SectionProps {
  isDarkMode: boolean;
  language: Language;
}