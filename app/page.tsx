'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Machines from "./components/Machines";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Teams from "./components/Teams";
import { useLanguage } from "./context/LanguageContext";

// Define a type for components that accept these props
interface SectionProps {
  isDarkMode: boolean;
  language: string;
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(storedTheme === 'dark' || (!storedTheme && systemDark));
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <Header {...{ isDarkMode, language } as SectionProps} />
      <About {...{ isDarkMode, language } as SectionProps} />
      <Services {...{ isDarkMode, language } as SectionProps} />
      <Machines {...{ isDarkMode, language } as SectionProps} />
      <Doctors {...{ isDarkMode, language } as SectionProps} />
      <Teams {...{ isDarkMode, language } as SectionProps} />
      <Blogs {...{ isDarkMode, language } as SectionProps} />
      <Contact {...{ isDarkMode, language } as SectionProps} />
      <Footer {...{ isDarkMode, language } as SectionProps} />
    </>
  );
}