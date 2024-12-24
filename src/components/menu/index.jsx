
import Link from 'next/link';

export default function Menu() {
   
  return (
    <div className="min bg-slate-500 flex items-center justify-center ">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Auth App</h1>
        <nav className="space-x-4">
          <Link href="/signup">
          Sign Up
          </Link>
          <Link href="/signin">
            Sign In
          </Link>
          <Link href="/logout">
           Logout
          </Link>


        </nav>
      </div>
    </div>
  );
}
