import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 drop-shadow-md sticky top-0 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>Homepage</a>
                            </li>
                            <li>
                                <a>Calculator List</a>
                            </li>
                            <li>
                                <a>Feedback</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link href={route('index')} className="btn btn-ghost normal-case text-xl">
                        Simple Calculator
                    </Link>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </>
    );
};

export default Navbar;
