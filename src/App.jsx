import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Github, Mail, Book, Search as SearchIcon } from 'lucide-react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import SearchBar from './components/SearchBar'
import './App.css'

// Import all documentation
import pengenalanMd from './docs/pengenalan.md?raw'
import instalasiMd from './docs/instalasi.md?raw'
import installationMd from './docs/installation.md?raw'
import sintaksDasarMd from './docs/sintaks-dasar.md?raw'
import syntaxBasicsMd from './docs/syntax-basics.md?raw'
import fungsiBuiltinMd from './docs/fungsi-builtin.md?raw'
import builtinFunctionsMd from './docs/builtin-functions.md?raw'
import fiturLanjutanMd from './docs/fitur-lanjutan.md?raw'
import advancedFeaturesMd from './docs/advanced-features.md?raw'
import contohMd from './docs/contoh.md?raw'
import examplesMd from './docs/examples.md?raw'
import httpClientGuideMd from './docs/http-client-guide.md?raw'
import jitCompilerMd from './docs/jit-compiler.md?raw'
import pythonIntegrationMd from './docs/python-integration.md?raw'
import quickReferenceMd from './docs/quick-reference.md?raw'
import typeSystemMd from './docs/type-system.md?raw'

const docs = {
  // Getting Started
  'pengenalan': { 
    title: 'Pengenalan', 
    content: pengenalanMd, 
    icon: '🚀',
    category: 'Getting Started',
    order: 1
  },
  'instalasi': { 
    title: 'Instalasi', 
    content: instalasiMd, 
    icon: '📦',
    category: 'Getting Started',
    order: 2
  },
  'installation': { 
    title: 'Installation (EN)', 
    content: installationMd, 
    icon: '📦',
    category: 'Getting Started',
    order: 3
  },
  'quick-reference': { 
    title: 'Quick Reference', 
    content: quickReferenceMd, 
    icon: '⚡',
    category: 'Getting Started',
    order: 4
  },

  // Core Documentation
  'sintaks-dasar': { 
    title: 'Sintaks Dasar', 
    content: sintaksDasarMd, 
    icon: '📝',
    category: 'Core Documentation',
    order: 1
  },
  'syntax-basics': { 
    title: 'Syntax Basics (EN)', 
    content: syntaxBasicsMd, 
    icon: '📝',
    category: 'Core Documentation',
    order: 2
  },
  'fungsi-builtin': { 
    title: 'Fungsi Built-in', 
    content: fungsiBuiltinMd, 
    icon: '🔧',
    category: 'Core Documentation',
    order: 3
  },
  'builtin-functions': { 
    title: 'Built-in Functions (EN)', 
    content: builtinFunctionsMd, 
    icon: '🔧',
    category: 'Core Documentation',
    order: 4
  },
  'type-system': { 
    title: 'Type System', 
    content: typeSystemMd, 
    icon: '🏷️',
    category: 'Core Documentation',
    order: 5
  },

  // Advanced Features
  'fitur-lanjutan': { 
    title: 'Fitur Lanjutan', 
    content: fiturLanjutanMd, 
    icon: '🚀',
    category: 'Advanced Features',
    order: 1
  },
  'advanced-features': { 
    title: 'Advanced Features (EN)', 
    content: advancedFeaturesMd, 
    icon: '🚀',
    category: 'Advanced Features',
    order: 2
  },
  'http-client-guide': { 
    title: 'HTTP Client Guide', 
    content: httpClientGuideMd, 
    icon: '🌐',
    category: 'Advanced Features',
    order: 3
  },
  'jit-compiler': { 
    title: 'JIT Compiler', 
    content: jitCompilerMd, 
    icon: '⚡',
    category: 'Advanced Features',
    order: 4
  },
  'python-integration': { 
    title: 'Python Integration', 
    content: pythonIntegrationMd, 
    icon: '🐍',
    category: 'Advanced Features',
    order: 5
  },

  // Examples
  'contoh': { 
    title: 'Contoh Program', 
    content: contohMd, 
    icon: '📚',
    category: 'Examples & Tutorials',
    order: 1
  },
  'examples': { 
    title: 'Code Examples (EN)', 
    content: examplesMd, 
    icon: '📚',
    category: 'Examples & Tutorials',
    order: 2
  },
}

// Group docs by category
const groupedDocs = Object.entries(docs).reduce((acc, [id, doc]) => {
  const category = doc.category || 'Other';
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push({ id, ...doc });
  return acc;
}, {});

// Sort each category by order
Object.keys(groupedDocs).forEach(category => {
  groupedDocs[category].sort((a, b) => a.order - b.order);
});

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentDoc, setCurrentDoc] = useState('pengenalan')
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const handleDocChange = (docId) => {
    setCurrentDoc(docId)
    setSidebarOpen(false)
    setShowSearch(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <img src="/icon.png" alt="RenzmcLang" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  RenzmcLang
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Dokumentasi Lengkap
                </p>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <SearchBar docs={docs} onResultClick={handleDocChange} />
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Search"
              >
                <SearchIcon size={20} />
              </button>
              <a
                href="https://github.com/RenzMc/RenzmcLang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:renzaja11@gmail.com"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title={darkMode ? 'Light Mode' : 'Dark Mode'}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {showSearch && (
            <div className="md:hidden pb-4">
              <SearchBar docs={docs} onResultClick={handleDocChange} />
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        <Sidebar
          groupedDocs={groupedDocs}
          currentDoc={currentDoc}
          onDocChange={handleDocChange}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Content Area */}
        <main className="flex-1 lg:ml-64">
          <Content content={docs[currentDoc].content} title={docs[currentDoc].title} />
        </main>
      </div>

      {/* Footer */}
      <footer className="lg:ml-64 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img src="/icon.png" alt="RenzmcLang" className="h-8 w-8" />
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="font-semibold">RenzmcLang</p>
                <p>Bahasa Pemrograman Berbasis Bahasa Indonesia</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/RenzMc/RenzmcLang"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://pypi.org/project/renzmc/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                PyPI
              </a>
              <a
                href="mailto:renzaja11@gmail.com"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>Made with ❤️ for Indonesian developers</p>
            <p className="mt-1">&copy; 2025 RenzMc. MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App