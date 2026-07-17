import { Bell, Search, UserCircle, Menu } from "lucide-react"

export function TopNavbar({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-neutral-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button 
        type="button" 
        className="-m-2.5 p-2.5 text-neutral-700 md:hidden"
        onClick={onMenuClick}
      >
        <span className="sr-only">Buka sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
      
      {/* Separator for mobile */}
      <div className="h-6 w-px bg-neutral-200 md:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Pencarian
          </label>
          <Search
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-neutral-400"
            aria-hidden="true"
          />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-neutral-900 placeholder:text-neutral-400 focus:ring-0 sm:text-sm bg-transparent outline-none"
            placeholder="Cari data siswa, nilai, jadwal..."
            type="search"
            name="search"
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button type="button" className="-m-2.5 p-2.5 text-neutral-400 hover:text-neutral-500 transition-colors">
            <span className="sr-only">Notifikasi</span>
            <Bell className="size-5" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-neutral-200" aria-hidden="true" />

          {/* Profile Badge */}
          <div className="flex items-center gap-x-4">
            <span className="inline-flex items-center rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-medium text-brand-hover ring-1 ring-inset ring-brand/20">
              Admin
            </span>
            <button type="button" className="-m-1.5 flex items-center p-1.5 text-neutral-400 hover:text-neutral-600 transition-colors">
              <span className="sr-only">Menu User</span>
              <UserCircle className="size-7" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
