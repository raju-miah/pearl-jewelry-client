import { Link } from "react-router-dom";
import aboutImgHome from '../../../assets/images-3.jpg';
import arrowSvg from '../../../assets/arrow.svg';

const HomeAbout = () => {
    return (
        <section className="pt-12 pb-12">

            <div className='ml-[16px]'>
                <h2 className="text-[60px] text-[#153462] italic text-left">About Pearl</h2>
                <p className="text-[24px] text-[#153462] italic text-left">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>


            <div className="flex justify-center max-w-[1252px] mx-auto items-center gap-[120px] p-[15px] pt-12">
                <div className="text-[#153462]">
                    <h1 className="text-[50px]">Pearl the store</h1>
                    <p className="text-[22px] py-[48px] px-0 text-[16px] italic">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Nam libero tempore, cum soluta nobis est eligendi.</p>
                    <Link to='/about' className="flex items-center gap-4 text-[24px]">
                    <span>Read More</span>
                    <span>
                        <img src={arrowSvg} alt="" />
                    </span>
                    </Link>
                </div>
                <div className="w-[100%]">
                    <img className="h-[500px] w-[400px] rounded-[40px]" src={aboutImgHome} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;