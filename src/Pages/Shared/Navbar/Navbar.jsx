import { FaRegUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import logo from '../../../assets/logo.png';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [navbarColor, setNavbarColor] = useState('bg-transparent');

    const handleScroll = () => {
        if (window.scrollY > 100) {
        setNavbarColor('bg-white');
        } else {
        setNavbarColor('bg-transparent');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className={`sticky top-0 w-full ${navbarColor}`}>
            <div className='flex justify-between items-center px-2 py-6'>
                <div>
                    <img src={logo} alt="logo" />
                </div>

                <div>
                    <ul className='flex justify-center items-center gap-6 text-[24px] text-[#153462]'>
                        <Link to='/'>
                           <li>Home</li>
                        </Link>

                        <Link to='/products'>
                           <li>Shop</li>
                        </Link>

                        <Link to='/blog'>
                            <li>Blog</li>
                        </Link>

                        <Link to='/about'>
                            <li>About</li>
                        </Link>

                        <Link to='/contact'>
                            <li>Contact</li>
                        </Link>
                        
                    </ul>
                </div>

                <div>
                    <ul className='flex justify-center items-center gap-6 text-[24px] text-[#153462]'>
                        <Link to='/blog-details'>
                            <li>
                                Blog Details
                            </li>
                        </Link>
                        <li>
                            <FaSearch />
                        </li>
                        <Link to='/login'>
                            <li>
                                <FaRegUser />
                            </li>
                        </Link>
                        <li>
                            <FaCartShopping />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;