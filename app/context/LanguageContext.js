'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage = 'en' }) => {
  const [language, setLanguage] = useState(initialLanguage);

  // Update html lang attribute on both initial mount and language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]); // Add language to dependency array

  // Handle language change
  const changeLanguage = (lang) => {
    // Update cookie
    Cookies.set('oda-roba-language', lang, { 
      expires: 365,
      path: '/',
      sameSite: 'Lax',
      secure: process.env.NODE_ENV === 'production' // Add security in production
    });
    
    // Update state
    setLanguage(lang);
    
    // Note: Removed direct DOM update here since it's handled by useEffect
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};