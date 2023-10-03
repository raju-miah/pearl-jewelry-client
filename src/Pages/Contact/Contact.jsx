import { Link } from 'react-router-dom';
import arrowBtnImgContact from '../../assets/arrow.svg';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Contact = () => {
    return (
        <section className='pt-12 pb-12'>
            <div>
                <h2 className="text-[60px] text-[#153462] italic text-center">Contact Us</h2>
                <p className="text-[24px] text-[#153462] italic text-center">Autem quibusdam et aut officiis debitis aut rerum necessitatibus</p>
            </div>

            <div className="max-w-[737px] flex flex-col mx-auto my-[60px] rounded-[40px] bg-[#153462]">
                    <form className="py-[55px] px-[125px]">
                        <input
                        className="w-full text-white text-[22px] bg-transparent border-0 border-b-[1px] border-white outline-none py-[15px]"
                        type="name" name="name" placeholder="Name"/>

                        <input
                        className="w-full text-white text-[22px] bg-transparent border-0 border-b-[1px] border-white outline-none py-[15px]"
                        type="phone" name="phone" placeholder="Phone"/>

                        <input
                        className="w-full text-white text-[22px] bg-transparent border-0 border-b-[1px] border-white outline-none py-[15px]"
                        type="email" name="email" placeholder="Email"/>

                        <textarea
                        className="w-full text-white text-[22px] bg-transparent border-0 border-b-[1px] border-white outline-none py-[15px]"
                        name="message" placeholder="Message"></textarea>

                        <div className='flex items-center gap-[20px] mt-[48px]'>
                            <input 
                            className='text-[32px] text-white'
                            type="submit" value="Submit" />

                            <span>
                            <img
                            className='invert-[200%] contrast-[667%]'
                            src={arrowBtnImgContact} alt="" />
                            </span>
                        </div>
                    </form>
            </div>

            <div className='flex justify-center items-start gap-[96px]'>
                <div className='max-w-[300px] text-center'>
                    <div className='w-[45px] h-[45px] bg-[#153462] rounded-[10px] flex justify-center items-center text-white mx-auto mt-0 mb-[30px]'>
                        <span>
                            <FaLocationDot />
                        </span>
                    </div>
                    <p className='text-[22px]'>
                        <Link>
                            32 Dawnbrook Drive, New York <br /> 19804  United States
                        </Link>
                    </p>
                </div>
                <div className='max-w-[300px] text-center'>
                    <div className='w-[45px] h-[45px] bg-[#153462] rounded-[10px] flex justify-center items-center text-white mx-auto mt-0 mb-[30px]'>
                        <span>
                            <FaPhoneAlt />
                        </span>
                    </div>
                    <p className='text-[22px]'>
                        <Link>
                            +1 (101) 9090 900
                        </Link>
                    </p>
                </div>
                <div className='max-w-[300px] text-center'>
                    <div className='w-[45px] h-[45px] bg-[#153462] rounded-[10px] flex justify-center items-center text-white mx-auto mt-0 mb-[30px]'>
                        <span>
                            <GrMail />
                        </span>
                    </div>
                    <p className='text-[22px]'>
                        <Link>
                            pearl@jawellery.com
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;