import { User, X } from 'lucide-react'

export default function Sidebar({ isMobile, onClose }) {
  return (
   <aside className='flex flex-col justify-between h-screen sticky top-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors'>
      <div>
        <div className='flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-6 py-8'>
          <h2 className='font-bold text-xl tracking-tight uppercase text-amber-600'>Dashboard</h2>
          {isMobile && (
            <button onClick={onClose} className="lg:hidden text-slate-500">
              <X size={24} />
            </button>
          )}
        </div>

        <nav className='mt-6 px-4'>
          <ul className='space-y-4 text-lg font-medium'>
            <li className='px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-600 rounded-lg cursor-pointer transition-all'>Home</li>
            <li className='px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-600 rounded-lg cursor-pointer transition-all'>Cards</li>
            <li className='px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-600 rounded-lg cursor-pointer transition-all'>Settings</li>
          </ul>
        </nav>
      </div>

      {/* Profile Section */}
      <div className='p-6 border-t border-slate-100 dark:border-slate-800 flex justify-center'>
        <button className='p-3 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 hover:ring-2 ring-amber-500 transition-all shadow-sm'>
          <User size={24} />
        </button>
      </div>

    </aside>
  )
}
