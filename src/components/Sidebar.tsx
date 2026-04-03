import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, Settings as SettingsIcon } from 'lucide-react';

interface SidebarProps {
  darkMode: boolean;
}

export default function Sidebar({ darkMode }: SidebarProps) {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Settings', path: '/settings', icon: SettingsIcon },
  ];

  return (
    <aside className={`w-64 border-r-2 h-screen sticky top-0 transition-colors duration-300 ${darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'} shadow-lg hidden md:block`}>
      <div className="p-6">
        <h2 className={`text-xl font-bold mb-8 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Navigation</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  isActive
                    ? darkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-700'
                    : darkMode ? 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
