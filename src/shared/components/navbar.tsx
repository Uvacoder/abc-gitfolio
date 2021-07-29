import { useState } from "react";
import Logo from "../../assets/images/logo-gitfolio.svg";
export default function Navbar() {
  const [onPhoneNav, setOnPhoneNav] = useState(false);
  return (
    <nav className="bg-white flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={Logo} alt="" className="mr-3 w-10" />
        <span className="gradient-text font-bold text-2xl tracking-tight">
          GitFolio
        </span>
      </div>
      <div className="block sm:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => setOnPhoneNav(!onPhoneNav)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow sm:flex sm:items-center sm:w-auto justify-end
        ${onPhoneNav ? "block" : "hidden"}
        `}
      >
        <a
          href="https://github.com"
          className="inline-block text-sm font-medium px-4 py-3 leading-none border rounded border-secondary text-secondary mt-4 lg:mt-0"
        >
          Explore More
        </a>
      </div>
    </nav>
  );
}
