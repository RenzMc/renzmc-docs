import { Github, Mail, Book } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-screen border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mt-auto">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-center space-x-3">
              <img src="/icon.png" alt="RenzmcLang" className="h-10 w-10" />
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="font-bold text-base text-gray-900 dark:text-white">RenzmcLang</p>
                <p className="text-xs">Bahasa Pemrograman Berbasis Bahasa Indonesia</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left max-w-md">
              Bahasa pemrograman modern yang memudahkan pembelajaran dan pengembangan dengan sintaks Bahasa Indonesia yang natural.
            </p>
          </div>
          
          {/* Links Section */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm">
              <a
                href="https://github.com/RenzMc/RenzmcLang"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://pypi.org/project/renzmc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Book size={16} />
                <span>PyPI</span>
              </a>
              <a
                href="mailto:renzaja11@gmail.com"
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail size={16} />
                <span>Contact</span>
              </a>
            </div>
            <div className="text-center md:text-right text-xs text-gray-500 dark:text-gray-400">
              <p>Made with ❤️ for Indonesian developers</p>
              <p className="mt-1">© 2025 RenzMc. MIT License.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
