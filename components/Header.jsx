import Link from "next/Link"

function Header() {
  return (
    <header className="flex justify-between p-5 mx-auto bg-gray-50 h-20">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
           className="w-44 object-contain cursor-pointer"
           src="/logo.png"
           alt="" />
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

      <div className="flex items-center space-x-5 text-green-600">
          <Link href="/post/create">
            <h3 className="hover:cursor-pointer border-b border-white hover:border-b hover:border-green-600 mt-2">Create Post</h3>
          </Link>
          <Link href="/post/draft">
            <h3 className="hover:cursor-pointer border-b border-white hover:border-b hover:border-green-600 mt-2">Drafts</h3>
          </Link>
        <h3 className="hover:cursor-pointer border border-green-600  hover:text-white hover:bg-green-600 px-4 py-1 rounded-full mt-2">Sign In</h3>
      </div>

    </header>
  )
}

export default Header;
