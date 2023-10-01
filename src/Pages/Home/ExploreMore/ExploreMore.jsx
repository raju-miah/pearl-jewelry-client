import exploreImg1 from '../../../assets/images-6.jpg';
import exploreImg2 from '../../../assets/images-7.jpg';
import exploreImg3 from '../../../assets/images-8.jpg';
import exploreVideoImg from '../../../assets/images-9.jpg';

const ExploreMore = () => {
    return (
        <section className="pt-12 pb-12">
            <div className='ml-[16px]'>
                <h2 className="text-[60px] text-[#153462] italic text-left">Explore More</h2>
                <p className="text-[24px] text-[#153462] italic text-left">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>

            <div className='pt-12'>
                <div className='flex justify-center items-center gap-12'>
                    <img 
                    className='h-[500px] w-[400px] rounded-[40px]' 
                    src={exploreImg1} alt="" />
                    <img 
                    className='h-[500px] w-[400px] rounded-[40px]' 
                    src={exploreImg2} alt="" />
                    <img 
                    className='h-[500px] w-[400px] rounded-[40px]' 
                    src={exploreImg3} alt="" />
                </div>

                <div className='pt-12 mx-auto'>
                    <h3 className='text-[40px] text-[#153462] italic text-center'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    </h3>

                    <p className='text-[20px] text-[#153462] italic text-center mt-[21px] mb-[110px] mx-[80px]'>
                    we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best
                    </p>
                </div>

                <div className='p-[15px]'>
                    <img 
                    className='rounded-[40px]'
                    src={exploreVideoImg} alt="" />
                </div>

                {/* have to add video on img */}
            </div>
        </section>
    );
};

export default ExploreMore;