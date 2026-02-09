import { Menu, Moon, Sun, User } from 'lucide-react'
import React from 'react'

export default function Navbar({darkMode, setDarkMode, onMenuClick}) {
  return (
    <nav className='flex justify-between items-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 py-4'>
          <div className='flex items-center gap-4'>
        {/* HAMBURGER BUTTON - Only visible on mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
        >
          <Menu size={24} />
        </button>

          <ul className='flex gap-6 text-slate-600 dark:text-slate-300'>
        <li className='select-none hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer font-medium'>Home</li>
        <li className='select-none hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer font-medium'>Details</li>
      </ul>
      </div>
        <div className='flex items-center gap-5'>
          <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:ring-2 ring-amber-500 transition-all"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
          <div className='flex items-center gap-3'>
          <h2 className='hidden md:block text-slate-800 dark:text-slate-100 font-semibold text-sm'>
            Welcome Admin!
          </h2>
          <div className='p-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600'>
            <User size={20} />
          </div>
        </div>
      </div>
    </nav>
  )
}
