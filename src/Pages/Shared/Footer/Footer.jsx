import footerLogo from '../../../assets/footer_logo.png';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter} from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='p-[15px]'>
                <div className='flex items-baseline justify-between gap-[30px]'>
                    <div>
                        <img src={footerLogo} alt="" />
                    </div>
                    <div>
                        <ul className='flex items-center gap-[50px] text-[22px] text-[#153462] mb-[75px]'>
                            <li>
                                <Link>Collection</Link>
                            </li>
                            <li>
                                <Link>About</Link>
                            </li>
                            <li>
                                <Link>Blog</Link>
                            </li>
                            <li>
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <p className='text-[22px] text-[#153462]'>&copy;{(new Date().getFullYear())} Pearl Jewelry</p>

                    <p className='text-[22px] text-[#153462]'>Developed By Raju Miah</p>
                    <div>
                        <ul className='flex items-center gap-[20px] text-[22px] text-[#153462]'>
                            <li>
                                <Link>
                                   <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                   <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FaSquareTwitter />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;