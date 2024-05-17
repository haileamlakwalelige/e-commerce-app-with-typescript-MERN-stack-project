import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <header className="p-2 bg-slate-800 text-white ">
        <div className="flex gap-10 flex-row justify-between items-center w-screen sm:px-4 md:px-8 lg:px-16 p-2">
          <div>
            Haileopia
          </div>
          <div className="flex gap-4 justify-center items-center">
            <Link to='/cart'>
              <p>Cart</p>
            </Link>
            <Link to='/sign-in'>
              <p>Sign In</p>
            </Link>
          </div>
        </div>
      </header>
      <main className="w-screen flex flex-col justify-center items-center my-6">
        <Outlet />
      </main>
      <footer>
        <p>All right reserved!</p>
      </footer>
    </div>
  )
}