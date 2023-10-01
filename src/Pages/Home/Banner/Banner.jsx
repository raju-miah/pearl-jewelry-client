import bannerImg from '../../../assets/banner.png';

const Banner = () => {
    return (
        <section className="pb-12">
            <div className='flex justify-evenly items-center flex-wrap  px-2 w-full m-auto'>
                <div className='text-center md:text-left md:basis-[50%] basis-[100%] mb-6 md:mb-0'>
                    <h1 className='text-[48px] md:text-[72px] text-[#153462]'>Golden Fleece 2024 Collection</h1>
                    <h2 className='text-[18px] md:text-[24px] text-[#153462]'>Jewelry Store</h2>
                </div>

                <div className='md:basis-[50%] basis-[100%]'>
                    <img src={bannerImg} alt="" className='w-[800px] rounded-[50%]' />
                </div>
            </div>

            {/* <div className="jewelry-banner bg-cover bg-center h-96 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Exquisite Jewelry Collection</h1>
                    <p className="text-lg mb-8">Discover the Beauty of Elegance</p>
                    <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-300">Explore Now</button>
                </div>
            </div> */}
        </section>
    );
};

export default Banner;