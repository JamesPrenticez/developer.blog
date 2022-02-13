import Link from "next/Link"
import { signIn, signOut, useSession } from 'next-auth/react';

function Header() {
  const {data: session} = useSession();
  return (
    <header className="py-4 shadow-sm bg-white mb-10">
      <div className="flex justify-between max-w-7xl mx-auto px-5">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <h1 className="hover:cursor-pointer border-b border-white hover:text-green-600 mt-2">Developer.Blog</h1>
            {/* <img
            className="w-44 object-contain cursor-pointer"
            src="/logo.png"
            alt="" /> */}
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5">
            <Link href="/">
              <h3 className="hover:cursor-pointer border-b border-white hover:border-b hover:border-green-600 mt-2">About</h3>
            </Link>
            <Link href="/">
              <h3 className="hover:cursor-pointer border-b border-white hover:border-b hover:border-green-600 mt-2">Contact Us</h3>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          { session ? 
          <>
            <Link href="/post/create">
              <h3 className="hover:cursor-pointer border-b border-white hover:border-b hover:border-green-600 mt-2">Create Post</h3>
            </Link>
            <Link href="/post/draft">
              <h3 className="hover:cursor-pointer border-b border-white hover:border-b hover:border-green-600 mt-2">Drafts</h3>
            </Link>
            <Link href={`/account/${session?.user.email}`}>
              <h3 className="text-green-600 py-1 mt-2 hover:cursor-pointer">{session?.user.email}</h3>
            </Link>
            <div className="tooltip">
              <img 
                className='h-12 w-12 rounded-full hover:cursor-pointer'
                src={session?.user.image}
                onClick={signOut}
                />
              <span class="tooltiptext">Sign Out</span>
            </div>
          </> 
          :
          <>
            <button 
              className="hover:cursor-pointer border border-green-600  hover:text-white hover:bg-green-600 px-4 py-1 rounded-full mt-2"
              onClick={signIn}
            >
                Sign In
            </button>
          </>} 
        </div>
    </div>
    </header>
  )
}

export default Header;