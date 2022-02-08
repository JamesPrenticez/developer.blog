

function Banner() {
  return (
  <div className="flex justify-center items-center bg-yellow-400 border-y border-black py-10 lg:py-10">
    <div className="px-10 space-y-5">
      <h1 className="text-6xl max-w-xl font-serif">
        <span className="underline">Medium</span>{" "}
        is a place to read, write and connect</h1>
      <h2>It's easy and free to post your thinking on any topic and connect with millions of readers</h2>
    </div>
    <img 
      className="hidden md:inline-flex h-32 lg:h-full"
      src="/banner.png"
      alt="" />
  </div>
  )
}

export default Banner;
