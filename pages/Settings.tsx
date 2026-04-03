import { useOutletContext } from 'react-router-dom';
import { Bell, Sliders } from 'lucide-react';

export default function Settings() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Settings</h1>

      <div className={`rounded-xl p-8 border-2 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
      }`}>
        <h2 className={`flex items-center gap-3 text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <Bell className="w-5 h-5" />
          Notifications
        </h2>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500" defaultChecked />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Email alerts for critical errors</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500" defaultChecked />
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Daily summary report</span>
          </label>
        </div>
      </div>

      <div className={`rounded-xl p-8 border-2 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
      }`}>
        <h2 className={`flex items-center gap-3 text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <Sliders className="w-5 h-5" />
          Preferences
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Language</span>
            <select className={`rounded p-2 outline-none border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Timezone</span>
            <select className={`rounded p-2 outline-none border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}>
              <option>UTC (GMT+0)</option>
              <option>EST (GMT-5)</option>
              <option>PST (GMT-8)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
