import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check, ExternalLink } from 'lucide-react'
import TableOfContents from './TableOfContents'

const Content = ({ content, title }) => {
  const [copiedCode, setCopiedCode] = useState(null)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if dark mode is enabled
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(index)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                const codeString = String(children).replace(/\n$/, '')
                const codeIndex = `${codeString.substring(0, 20)}-${Math.random()}`

                if (!inline && match) {
                  return (
                    <div className="relative group my-6">
                      <div className="absolute right-2 top-2 z-10">
                        <button
                          onClick={() => copyToClipboard(codeString, codeIndex)}
                          className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Copy code"
                        >
                          {copiedCode === codeIndex ? (
                            <Check size={16} />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                      <SyntaxHighlighter
                        style={isDark ? vscDarkPlus : vs}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-lg"
                        showLineNumbers={codeString.split('\n').length > 5}
                        {...props}
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    </div>
                  )
                }

                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-primary-500 pb-4">
                  {children}
                </h1>
              ),
              h2: ({ children }) => {
                const id = String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
                return (
                  <h2 id={id} className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white scroll-mt-20">
                    {children}
                  </h2>
                )
              },
              h3: ({ children }) => {
                const id = String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
                return (
                  <h3 id={id} className="text-2xl font-semibold mt-8 mb-3 text-gray-800 dark:text-gray-100 scroll-mt-20">
                    {children}
                  </h3>
                )
              },
              h4: ({ children }) => {
                const id = String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
                return (
                  <h4 id={id} className="text-xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-100 scroll-mt-20">
                    {children}
                  </h4>
                )
              },
              a: ({ href, children }) => (
                <a
                  href={href}
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline inline-flex items-center gap-1"
                >
                  {children}
                  {href?.startsWith('http') && <ExternalLink size={14} />}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 bg-primary-50 dark:bg-primary-900/20 rounded-r-lg">
                  {children}
                </blockquote>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-100 dark:bg-gray-800">
                  {children}
                </thead>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                  {children}
                </td>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="ml-4">
                  {children}
                </li>
              ),
              p: ({ children }) => (
                <p className="my-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {children}
                </p>
              ),
              hr: () => (
                <hr className="my-8 border-gray-300 dark:border-gray-700" />
              ),
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt}
                  className="rounded-lg shadow-lg my-6 max-w-full h-auto"
                  loading="lazy"
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        {/* Navigation buttons */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/RenzMc/RenzmcLang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <span>📖</span>
              <span>Lihat di GitHub</span>
            </a>
            <a
              href="https://pypi.org/project/renzmc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              <span>📦</span>
              <span>Install via PyPI</span>
            </a>
          </div>
        </div>
      </div>

      {/* Table of Contents - Fixed on right side */}
      <TableOfContents content={content} />
    </div>
  )
}

export default Content