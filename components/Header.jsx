import Link from "next/link"
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
  const {data: session} = useSession();
  return (
    <header className="py-4 shadow-sm bg-black text-white">
      <div className="flex justify-between mx-auto px-10">
        <div className="flex items-center space-x-5">
          <Link href="/" passHref>
            <h1 className="hover:cursor-pointer hover:text-slate-300 mt-2">Developer.Blog</h1>
          </Link>
        </div>

        <div className="flex items-center space-x-5">
          { session ? 
          <>
            <Link href={`/user/${session?.user.email}/drafts/create`} passHref>
              <h3 className="hover:cursor-pointer border-b border-transparent hover:border-b hover:border-green-500 mt-2">Create Post</h3>
            </Link>
            <Link href={`/user/${session?.user.email}/drafts/view-all`} passHref>
              <h3 className="hover:cursor-pointer border-b border-transparent hover:border-b hover:border-green-500 mt-2">Drafts</h3>
            </Link>
            <Link href={`/user/${session?.user.email}/settings`} passHref>
              <h3 className="text-green-500 py-1 mt-2 hover:cursor-pointer">{session?.user.email}</h3>
            </Link>
            <div className="tooltip">
              <img 
                className='h-12 w-12 rounded-full object-cover hover:cursor-pointer'
                src={session?.user.image}
                onClick={signOut}
                alt=''
                />
              <span className="tooltiptext">Sign Out</span>
            </div>
          </> 
          :
          <>
            <button 
              className="hover:cursor-pointer border border-green-500  hover:text-white hover:bg-green-500 px-4 py-1 rounded-full mt-2"
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