import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

export default function Layout({ children, darkMode, setDarkMode }) {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      {/* Sidebar: Hidden on mobile, fixed width on desktop */}
      <div className="hidden lg:block w-64 shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Content Area */}
        <main className="p-6 lg:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
