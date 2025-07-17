import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex items-center justify-between w-full h-16 md:h-20">
      {/* logo */}
      <div className="flex items-center gap-4 font-bold">
        <img src="/logo.png" alt="" className="w-8 h-8" />
        <span>lamalog</span>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <div className="cursor-pointer text-4xl" onClick={() => setOpen(pre => !pre)}>
          {open ? '✕' : '☰'}
        </div>
          <div
              className={`w-full h-screen flex flex-col items-center justify-center gap-8 text-lg  absolute top-16 transition-transform duration-300 ease-in-out ${open ? '-right-0' : '-right-[100%]'}`}>
              <a href="/">Home</a>
              <a href="/">Trending</a>
              <a href="/">Popular</a>
              <a href="/">About</a>
              <a href="/">
                  <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👌</button>
              </a>
          </div>
      </div>
        {/* desktop menu */}
        <div className="hidden md:flex justify-between items-center gap-8 xl:gap-12 font-medium">
            <a href="/">Home</a>
            <a href="/">Trending</a>
            <a href="/">Popular</a>
            <a href="/">About</a>
          <a href="/">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👌</button>
          </a>
      </div>
    </div>
  )
}

export default Navbar
