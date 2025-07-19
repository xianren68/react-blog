import { useState } from "react"
import Image from "./Image"
import { Link } from 'react-router-dom'
import { SignedOut, SignedIn, UserButton } from "@clerk/clerk-react"
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex items-center justify-between w-full h-16 md:h-20">
      {/* logo */}
      <Link to="/" className="flex items-center gap-4 font-bold">
        <Image src="logo.png" alt="lamalog" w={32} h={32}></Image>
        <span>lamalog</span>
      </Link>
      {/* mobile menu */}
      <div className="md:hidden">
        <div className="cursor-pointer text-4xl" onClick={() => setOpen(pre => !pre)}>
          {open ? '✕' : '☰'}
        </div>
          <div
              className={`w-full h-screen flex flex-col items-center justify-center gap-8 text-lg  absolute top-16 transition-transform duration-300 ease-in-out ${open ? '-right-0' : '-right-[100%]'} bg-[#e6e6ff]`}>
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
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Popular</Link>
            <Link to="/">About</Link>
            <SignedOut>
                <Link to="/login">
                    <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👌</button>
                </Link>
            </SignedOut>
            <SignedIn>
                <UserButton></UserButton>
            </SignedIn>
      </div>
    </div>
  )
}

export default Navbar
