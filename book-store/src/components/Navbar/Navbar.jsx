import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import logoimg from '../../assets/Books_images/Books_stash_main.png';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    // toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false)
            }
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.addEventListener("scroll", handleScroll);
            }
        }
    }, []);

    //Navigation items

    const navItems = [
        { link: 'Home', path: "/" },
        { link: 'About', path: "/about" },
        { link: 'Shop', path: "/shop" },
        { link: 'Sell Your Book', path: "/admin/dashboard" },
        { link: 'Blogs', path: "/blogs" },
    ]

    return (
        <div className='col-12'>
            <header className='w-full fixed bg-yellow-100 top-0 left-0 right-0 trasition-all ease-in duration-300'>
                <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                    <div className='flex justify-between items-center text-base gap-8'>
                        {/*  */}
                        <img src={logoimg} alt='logoimage' width={200} />
                        {/* <Link to={"/"} className='text-2xl font-bold text-red-700 flex items-center gap-2'> <FaBlog className='inline-block' />Book Stash</Link> */}
                        {/* <img src='/Books_stash_main.png' width={150} height={100}/> */}
                        {/* <span>Books Stash</span> */}

                        {/* niv items */}
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-green-700'>{link}</Link>)
                            }
                        </ul>

                        {/* btn for lg devices */}
                        <div className='space-x-12 hidden lg:flex items-center'>
                            <button><FaBarsStaggered className="w-5 hover:text-blue-700" /></button>
                        </div>
                        {/* menu btn for mobile devices */}
                        <div className='md:hidden'>
                            <button onClick={toggleMenu} className='text-black focus:outline-none'>
                                {
                                    isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
                                }
                            </button>
                        </div>
                    </div>

                    {/* navitems for sm devices */}
                    <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"}`}>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-green-700'>{link}</Link>)
                        }
                    </div>
                </nav>
            </header>
        </div>
    )
};

export default Navbar;