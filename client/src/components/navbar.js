import { NavLink } from 'react-router-dom';

function Navbar () {
    return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 regular:flex regular:justify-center">
        <div className="w-full regular:flex regular:max-w-max" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 regular:flex-row regular:space-x-8 regular:mt-0 regular:text-sm regular:font-medium regular:border-0 regular:bg-[#FFD580] dark:bg-gray-800 regular:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#1D4ED8" : "black"})} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 regular:hover:bg-transparent regular:border-0 regular:hover:text-blue-700 regular:p-0 dark:text-gray-400 regular:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white regular:dark:hover:bg-transparent" aria-current="page">Level 1</NavLink>
                </li>
                <li>
                    <NavLink to="/leveltwo" style={({ isActive }) => ({ color: isActive ? "#1D4ED8" : "black"})} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 regular:hover:bg-transparent regular:border-0 regular:hover:text-blue-700 regular:p-0 dark:text-gray-400 regular:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white regular:dark:hover:bg-transparent">Level 2</NavLink>
                </li>
                <li>
                    <NavLink to="/levelthree" style={({ isActive }) => ({ color: isActive ? "#1D4ED8" : "black"})} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 regular:hover:bg-transparent regular:border-0 regular:hover:text-blue-700 regular:p-0 dark:text-gray-400 regular:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white regular:dark:hover:bg-transparent">Level 3</NavLink>
                </li>
                <li>
                    <NavLink to="/levelfour" style={({ isActive }) => ({ color: isActive ? "#1D4ED8" : "black"})} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 regular:hover:bg-transparent regular:border-0 regular:hover:text-blue-700 regular:p-0 dark:text-gray-400 regular:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white regular:dark:hover:bg-transparent">Level 4</NavLink>
                </li>
                <li>
                    <NavLink to="/levelfive" style={({ isActive }) => ({ color: isActive ? "#1D4ED8" : "black"})} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 regular:hover:bg-transparent regular:border-0 regular:hover:text-blue-700 regular:p-0 dark:text-gray-400 regular:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white regular:dark:hover:bg-transparent">Level 5</NavLink>
                </li>
            </ul>
        </div>
    </nav>

    )
}

export default Navbar;