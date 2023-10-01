import { Link } from 'react-router-dom';
import blogImg1 from '../../../assets/images-6.jpg';
import arrowBtnImg from '../../../assets/arrow.svg';

const HomeBlog = () => {
    return (
        <section className='pt-12 pb-12'>
            <div className='ml-[16px]'>
                <h2 className="text-[60px] text-[#153462] italic text-left">Blogs</h2>
                <p className="text-[24px] text-[#153462] italic text-left">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>

            <div className='flex justify-center items-center gap-6 p-[15px] pt-12'>
                <div className='h-[377px] flex bg-[#153462] rounded-[20px] gap-2'>
                    <div>
                        <img
                        className='w-[345px] rounded-[20px]'
                         src={blogImg1} alt="" />
                    </div>

                    <div className='flex flex-col w-[210px] py-[35px] px-[20px]'>
                        <p className='text-[16px] text-white mb-[9px]'>Sep,8 2022</p>
                        <h5 className='text-[21px] text-white italic mb-[32px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum</h5>
                        <Link className='flex justify-center items-center gap-[11px]'>
                        <span className='text-[18px] text-white'>Read More</span>
                        <span>
                            <img 
                            className='max-w-[30px] invert-[200%] contrast-[667%]'
                            src={arrowBtnImg} alt="" />
                        </span>
                        </Link>
                    </div>
                </div>


                <div className='h-[377px] flex bg-[#153462] rounded-[20px] gap-2'>
                    <div>
                        <img
                        className='w-[345px] rounded-[20px]'
                         src={blogImg1} alt="" />
                    </div>

                    <div className='flex flex-col w-[210px] py-[35px] px-[20px]'>
                        <p className='text-[16px] text-white mb-[9px]'>Sep,8 2022</p>
                        <h5 className='text-[21px] text-white italic mb-[32px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum</h5>
                        <Link className='flex justify-center items-center gap-[11px]'>
                        <span className='text-[18px] text-white'>Read More</span>
                        <span>
                            <img 
                            className='max-w-[30px] invert-[200%] contrast-[667%]'
                            src={arrowBtnImg} alt="" />
                        </span>
                        </Link>
                    </div>
                </div>


                <div className='h-[377px] flex bg-[#153462] rounded-[20px] gap-2'>
                    <div>
                        <img
                        className='w-[345px] rounded-[20px]'
                         src={blogImg1} alt="" />
                    </div>

                    <div className='flex flex-col w-[210px] py-[35px] px-[20px]'>
                        <p className='text-[16px] text-white mb-[9px]'>Sep,8 2022</p>
                        <h5 className='text-[21px] text-white italic mb-[32px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum</h5>
                        <Link className='flex justify-center items-center gap-[11px]'>
                        <span className='text-[18px] text-white'>Read More</span>
                        <span>
                            <img 
                            className='max-w-[30px] invert-[200%] contrast-[667%]'
                            src={arrowBtnImg} alt="" />
                        </span>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HomeBlog;