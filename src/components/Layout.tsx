import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Factory, Activity } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';
import Sidebar from './Sidebar';

export default function Layout() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100'
    }`}>
      <Sidebar darkMode={darkMode} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <header className={`sticky top-0 z-50 backdrop-blur-md border-b-2 transition-colors duration-300 ${
          darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'
        } shadow-sm`}>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                  <Factory className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Plime Agro Industries Ltd.
                  </h1>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Management Portal
                  </p>
                </div>
              </motion.div>

              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleDarkMode}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet context={{ darkMode }} />
        </main>

        <footer className={`mt-auto border-t-2 transition-colors duration-300 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className="px-6 py-4">
            <p className={`text-center text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Plime Agro Industries Ltd. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
