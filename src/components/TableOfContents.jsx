import { useEffect, useState } from 'react';
import { List } from 'lucide-react';

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const matches = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].replace(/[^\w\s-]/g, '');
      const id = text.toLowerCase().replace(/\s+/g, '-');
      
      matches.push({
        level,
        text,
        id
      });
    }

    setHeadings(matches);
  }, [content]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block fixed right-8 top-24 w-64 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center space-x-2 mb-3 text-gray-700 dark:text-gray-300">
          <List size={18} />
          <h3 className="font-semibold text-sm">Daftar Isi</h3>
        </div>
        <nav>
          <ul className="space-y-2">
            {headings.map((heading, index) => (
              <li
                key={index}
                style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
              >
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`text-left text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                    activeId === heading.id
                      ? 'text-primary-600 dark:text-primary-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;