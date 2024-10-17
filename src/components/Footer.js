import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-b-2 px-2 sm:px-4 border-gray-200 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
        <div className="w-full mx-auto max-w-screen-4xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="https://flowbite.com/" className="hover:underline">CINEMATE™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
            </li>
            <li>
                <a href="#" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
            </li>
            <li>
                <a href="#" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Youtube</a>
            </li>
            <li>
                <a href="#" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
            </li>
        </ul>
        </div>
    </footer>

  )
}
