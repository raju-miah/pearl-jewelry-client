import { Link } from "react-router-dom";
import arrowBtnImgBlog from '../../assets/arrow.svg';


const BlogCard = ({blogs, specialClass}) => {

    const {date, image, topic} = blogs;

    return (
        <div className={`flex items-center ${specialClass} gap-[60px] p-[15px]`}>
                <div className="w-[623px] rounded-[40px] overflow-hidden">
                        <img
                        className='w-full h-[450px] object-cover'
                         src={image} alt="" />
                </div>

                <div className='flex flex-col py-[35px] px-[20px]'>
                        <p className='text-[28px] text-[#153462] mb-[20px]'>{date}</p>
                        <h5 className='text-[42px] max-w-[398px] text-[#153462] mb-[60px]'>{topic}</h5>
                        <Link className='flex items-center gap-[20px]'>
                        <span className='text-[32px] text-[#153462]'>Read More</span>
                        <span>
                            <img
                            src={arrowBtnImgBlog} alt="" />
                        </span>
                        </Link>
                </div>
         </div>
    );
};

export default BlogCard;