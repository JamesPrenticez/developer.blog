import { getProviders, signIn, getSession } from "next-auth/react"
import Link from 'next/link'

export default function SignIn({ providers }) {
  return (
    <>
      <div className="h-screen flex w-full items-center justify-center bg-gray-50">
        <div className="w-2/12 min-w-[330px] rounded border p-4 bg-white shadow-md">

          <div className="flex flex-wrap space-y-8 w-full items-center justify-center pb-8">
            <Link href='/' passHref>
              <div className="full-rounded bg-green-600 rounded-full">
                <img
                  src={'/brackets.png'}
                  className="rounded-full h-48 w-full cursor-pointer"
                  alt="Return Home"
                />
             </div>  
            </Link>
            <h1 className="text-4xl">Developer.Blog</h1>
            <p>A place to read, write and connect</p>
          </div>

          <div className="flex w-full flex-wrap justify-center p-2 space-y-4">
              <button
                className="inline-flex items-center justify-center space-x-2 w-full border rounded-full p-2 text-lg border-black text-black hover:bg-black hover:text-white"
                onClick={() => signIn('github')}>
                <p>Sign in with Github</p>
                <svg className='h-5 w-5 hover:cursor-pointer ' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </button>

             <div className="flex items-center w-full">
                <div className="h-px flex-1 bg-green-600"></div>
                <p className="pl-2 pr-2">or</p>
                <div className="h-px flex-1 bg-green-600"></div>
              </div>

              <button
                className="w-full border rounded-full p-2 text-lg border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                onClick={() => signIn('credentials')}>
                Demo Account
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ req, res}) {
  const session = await getSession({ req });
  const providers = await getProviders()

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: { providers },
  };
}