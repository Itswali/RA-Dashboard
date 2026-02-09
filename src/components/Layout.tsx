// Layout.jsx
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children, darkMode, setDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">

        {/* DESKTOP SIDEBAR (Always visible on lg screens) */}
        <aside className="hidden lg:block w-64 shrink-0">
          <Sidebar />
        </aside>

        {/* MOBILE SIDEBAR (Drawer) */}
        {/* We use a fixed overlay that slides in based on state */}
        <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "visible" : "invisible"}`}>
            {/* Backdrop shadow */}
            <div
              className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar Content */}
            <div className={`absolute inset-y-0 left-0 w-72 bg-white dark:bg-slate-900 shadow-xl transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
               <Sidebar isMobile onClose={() => setIsMobileMenuOpen(false)} />
            </div>
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          {/* Pass the toggle function to Navbar */}
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            onMenuClick={() => setIsMobileMenuOpen(true)}
          />

          <main className="p-6 lg:p-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
