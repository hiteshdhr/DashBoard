import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import { cn } from '../lib/utils';

interface SidebarLayoutProps {
  children: ReactNode;
  darkMode?: boolean;
}

export default function SidebarLayout({ children, darkMode = false }: SidebarLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn('flex min-h-screen', darkMode ? 'dark' : '')}>
      <Sidebar darkMode={darkMode} collapsed={collapsed} onCollapsedChange={setCollapsed} />

      <div
        className={cn(
          'flex-1 transition-all duration-300',
          collapsed ? 'lg:ml-[80px]' : 'lg:ml-[280px]'
        )}
      >
        <div className="lg:hidden h-[72px]" />
        {children}
      </div>
    </div>
  );
}
