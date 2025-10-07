import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ docs, onResultClick }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchResults = [];
    const lowerQuery = query.toLowerCase();

    Object.entries(docs).forEach(([id, doc]) => {
      const content = doc.content.toLowerCase();
      const title = doc.title.toLowerCase();

      if (title.includes(lowerQuery) || content.includes(lowerQuery)) {
        // Find context around the match
        const index = content.indexOf(lowerQuery);
        const start = Math.max(0, index - 50);
        const end = Math.min(content.length, index + 100);
        const context = content.substring(start, end);

        searchResults.push({
          id,
          title: doc.title,
          icon: doc.icon,
          context: '...' + context + '...',
          relevance: title.includes(lowerQuery) ? 2 : 1
        });
      }
    });

    // Sort by relevance
    searchResults.sort((a, b) => b.relevance - a.relevance);
    setResults(searchResults.slice(0, 10));
    setIsOpen(true);
  }, [query, docs]);

  const handleResultClick = (docId) => {
    onResultClick(docId);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari dokumentasi..."
          className="w-full pl-10 pr-10 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {results.map((result) => (
            <button
              key={result.id}
              onClick={() => handleResultClick(result.id)}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <div className="flex items-center space-x-2 mb-1">
                <span>{result.icon}</span>
                <span className="font-semibold text-gray-900 dark:text-white">{result.title}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {result.context}
              </p>
            </button>
          ))}
        </div>
      )}

      {isOpen && results.length === 0 && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50">
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Tidak ada hasil untuk "{query}"
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;