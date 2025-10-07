import { X, ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const Sidebar = ({ groupedDocs, currentDoc, onDocChange, isOpen, onClose }) => {
  const [expandedCategories, setExpandedCategories] = useState(
    Object.keys(groupedDocs).reduce((acc, category) => {
      acc[category] = true; // All categories expanded by default
      return acc;
    }, {})
  );

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const categoryOrder = [
    'Getting Started',
    'Core Documentation',
    'Advanced Features',
    'Examples & Tutorials'
  ];

  const sortedCategories = categoryOrder.filter(cat => groupedDocs[cat]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 bottom-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4">
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X size={20} />
          </button>

          <nav className="space-y-6">
            {sortedCategories.map((category) => (
              <div key={category}>
                <button
                  onClick={() => toggleCategory(category)}
                  className="flex items-center justify-between w-full text-left mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <span>{category}</span>
                  {expandedCategories[category] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>

                {expandedCategories[category] && (
                  <div className="space-y-1 ml-2">
                    {groupedDocs[category].map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => onDocChange(doc.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                          currentDoc === doc.id
                            ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-medium'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <span className="text-lg">{doc.icon}</span>
                        <span className="text-sm">{doc.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Stats */}
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              📊 Statistik
            </h3>
            <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
              <p>✅ {Object.keys(groupedDocs).reduce((acc, cat) => acc + groupedDocs[cat].length, 0)} Halaman Dokumentasi</p>
              <p>🚀 {sortedCategories.length} Kategori</p>
              <p>📚 99+ Contoh Kode</p>
              <p>🔧 184+ Built-in Functions</p>
            </div>
          </div>

          {/* Version Info */}
          <div className="mt-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg">🎉</span>
              <h3 className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                Latest Version
              </h3>
            </div>
            <p className="text-xs text-primary-600 dark:text-primary-400">
              Dokumentasi lengkap untuk RenzmcLang versi terbaru dengan HTTP Client, JIT Compiler, dan Type System!
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar