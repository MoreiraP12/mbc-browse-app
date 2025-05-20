import React, { useEffect, useState } from 'react';
import { Github, BarChart3, BookOpen, Cpu, Search, Users, Sun, Moon } from 'lucide-react';
import './App.css';
import MedBrowseCompHops from './MedBrowseCompHops';
import MedBrowseCompAbstract from './MedBrowseCompAbstract';
import MedBrowseCompIntroduction from './MedBrowseCompIntroduction';
import MedBrowseCompDetails from './MedBrowseCompDetails';
import MedBrowseCompResults from './MedBrowseCompResults';
import MedBrowseCompAuthors from './MedBrowseCompAuthors';

function App() {
  const githubLink = "https://github.com/shan23chen/MedBrowseComp";
  const datasetLink = "https://huggingface.co/datasets/AIM-Harvard/MedBrowseComp";
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <header className="bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 dark:from-emerald-700 dark:via-cyan-700 dark:to-sky-700 text-white py-12 shadow-xl rounded-b-xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">MedBrowseComp</h1>
              <p className="text-lg md:text-xl text-indigo-100 text-center md:text-left mt-1">
                Evaluating AI Agents in Complex Medical Information Retrieval
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0 items-center">
              <a
                href={datasetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white text-sky-700 hover:bg-sky-100 transition-colors px-4 py-2 rounded-md shadow-md font-semibold"
              >
                <BookOpen size={20} className="mr-2" /> Dataset
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white text-gray-700 hover:bg-gray-100 transition-colors px-4 py-2 rounded-md shadow-md font-semibold"
              >
                <Github size={20} className="mr-2" /> GitHub
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center bg-white text-gray-700 hover:bg-gray-100 transition-colors px-3 py-2 rounded-md shadow-md font-semibold dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                {darkMode ? <Sun size={18} className="mr-2" /> : <Moon size={18} className="mr-2" />}
                {darkMode ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-100 py-3 sticky top-0 z-50 shadow-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-center items-center space-x-4 md:space-x-6">
          <a href="#abstract" className="flex items-center hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-sky-500 dark:hover:border-sky-400">
            <BookOpen size={18} className="mr-1.5" /> Abstract
          </a>
          <a href="#introduction" className="flex items-center hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-sky-500 dark:hover:border-sky-400">
            <Cpu size={18} className="mr-1.5" /> Introduction
          </a>
          <a href="#benchmark-details" className="flex items-center hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-sky-500 dark:hover:border-sky-400">
            <BookOpen size={18} className="mr-1.5" /> Benchmark Details
          </a>
          <a href="#results" className="flex items-center hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-sky-500 dark:hover:border-sky-400">
            <BarChart3 size={18} className="mr-1.5" /> Results
          </a>
          <a href="#research-questions" className="flex items-center hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-sky-500 dark:hover:border-sky-400">
            <Search size={18} className="mr-1.5" /> Research Questions
          </a>
          <a href="#authors" className="flex items-center hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-sky-500 dark:hover:border-sky-400">
            <Users size={18} className="mr-1.5" /> Authors
          </a>
        </div>
      </nav>

      <main className="flex-grow">
        <MedBrowseCompAbstract />
        <MedBrowseCompIntroduction />
        <MedBrowseCompDetails />
        <MedBrowseCompResults />
        <section id="research-questions" className="py-10 md:py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <MedBrowseCompHops />
          </div>
        </section>
        <MedBrowseCompAuthors />
      </main>

      <footer className="bg-gray-800 dark:bg-gray-900 text-gray-400 py-10 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} MedBrowseComp Team. All rights reserved.</p>
          <p className="mt-1 text-xs">
            Please cite MedBrowseComp if you use the dataset or benchmark in your research.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
