import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  LifeBuoy,
  BarChart3,
  FolderKanban,
  Users,
  FileText,
  FileBarChart,
  MessageSquare,
  MoreHorizontal,
  Settings,
  HelpCircle,
  Search,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  Building2,
} from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '../lib/utils';

interface SidebarProps {
  darkMode?: boolean;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  active?: boolean;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

export default function Sidebar({
  darkMode = false,
  collapsed: externalCollapsed,
  onCollapsedChange
}: SidebarProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const collapsed = externalCollapsed !== undefined ? externalCollapsed : internalCollapsed;

  const handleToggle = () => {
    const newValue = !collapsed;
    if (onCollapsedChange) {
      onCollapsedChange(newValue);
    } else {
      setInternalCollapsed(newValue);
    }
  };

  const mainNavItems: NavItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '#', active: true },
    { icon: LifeBuoy, label: 'Lifecycle', href: '#' },
    { icon: BarChart3, label: 'Analytics', href: '#' },
    { icon: FolderKanban, label: 'Projects', href: '#' },
    { icon: Users, label: 'Team', href: '#' },
  ];

  const documentItems: NavItem[] = [
    { icon: FileText, label: 'Data Library', href: '#' },
    { icon: FileBarChart, label: 'Reports', href: '#' },
    { icon: MessageSquare, label: 'Word Assistant', href: '#' },
    { icon: MoreHorizontal, label: 'More', href: '#' },
  ];

  const bottomItems: NavItem[] = [
    { icon: Settings, label: 'Settings', href: '#' },
    { icon: HelpCircle, label: 'Get Help', href: '#' },
    { icon: Search, label: 'Search', href: '#' },
  ];

  const NavItemComponent = ({ item, collapsed }: { item: NavItem; collapsed: boolean }) => {
    const Icon = item.icon;
    return (
      <motion.a
        href={item.href}
        whileHover={{ x: collapsed ? 0 : 4 }}
        className={cn(
          'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
          item.active
            ? darkMode
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-900'
            : darkMode
            ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50',
          collapsed && 'justify-center'
        )}
      >
        <Icon className={cn('shrink-0', collapsed ? 'h-5 w-5' : 'h-4 w-4')} />
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium whitespace-nowrap overflow-hidden"
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    );
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className={cn('flex items-center gap-3 p-4', collapsed && 'justify-center')}>
        <div
          className={cn(
            'flex items-center justify-center rounded-lg',
            darkMode ? 'bg-blue-600' : 'bg-blue-600',
            collapsed ? 'h-10 w-10' : 'h-10 w-10'
          )}
        >
          <Building2 className="h-6 w-6 text-white" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <h2 className={cn('text-lg font-bold', darkMode ? 'text-white' : 'text-gray-900')}>
                ALGO PLIME LTD.
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-3 mb-4">
        <Button
          variant="success"
          className={cn(
            'w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg',
            collapsed && 'px-0'
          )}
        >
          <PlusCircle className={cn(collapsed ? 'h-5 w-5' : 'h-4 w-4')} />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden whitespace-nowrap"
              >
                Quick Create
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>

      <nav className="flex-1 px-3 space-y-6 overflow-y-auto">
        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <NavItemComponent key={item.label} item={item} collapsed={collapsed} />
          ))}
        </div>

        <div className="space-y-1">
          <AnimatePresence>
            {!collapsed && (
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn(
                  'px-3 mb-2 text-xs font-semibold uppercase tracking-wider',
                  darkMode ? 'text-gray-500' : 'text-gray-500'
                )}
              >
                Documents
              </motion.h3>
            )}
          </AnimatePresence>
          {documentItems.map((item) => (
            <NavItemComponent key={item.label} item={item} collapsed={collapsed} />
          ))}
        </div>
      </nav>

      <div className="mt-auto border-t border-gray-700 p-3 space-y-1">
        {bottomItems.map((item) => (
          <NavItemComponent key={item.label} item={item} collapsed={collapsed} />
        ))}
      </div>

      <div
        className={cn(
          'p-3 border-t border-gray-700',
          darkMode ? 'bg-gray-900' : 'bg-gray-50'
        )}
      >
        <div
          className={cn(
            'flex items-center gap-3 p-2 rounded-lg',
            darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
            'cursor-pointer transition-colors',
            collapsed && 'justify-center'
          )}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="User" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-1 overflow-hidden"
              >
                <p className={cn('text-sm font-medium', darkMode ? 'text-white' : 'text-gray-900')}>
                  Admin User
                </p>
                <p className={cn('text-xs', darkMode ? 'text-gray-400' : 'text-gray-500')}>
                  admin@algoplime.com
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <motion.aside
        animate={{ width: collapsed ? 80 : 280 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'hidden lg:flex flex-col fixed left-0 top-0 h-screen border-r',
          darkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200',
          'z-40'
        )}
      >
        <SidebarContent />
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggle}
          className={cn(
            'absolute -right-3 top-8 h-6 w-6 rounded-full border shadow-md',
            darkMode
              ? 'bg-gray-900 border-gray-700 hover:bg-gray-800'
              : 'bg-white border-gray-300 hover:bg-gray-50'
          )}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </motion.aside>

      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between bg-gray-950 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-lg font-bold text-white">ALGO PLIME LTD.</h2>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white"
        >
          {mobileOpen ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
        </Button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={cn(
                'lg:hidden fixed left-0 top-0 h-screen w-[280px] border-r z-50',
                darkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'
              )}
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
