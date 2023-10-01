import earingsImg from '../../../assets/images-2.jpg';
import necklessImg from '../../../assets/images-5.jpg';
import ringsImg from '../../../assets/images-10.jpg';
import bracelateImg from '../../../assets/images-11.jpg';

const Collection = () => {
    return (
        <section className="pt-12 pb-12">
            <div className='ml-[16px]'>
                <h2 className="text-[60px] text-[#153462] italic text-left">See Our Collection</h2>
                <p className="text-[24px] text-[#153462] italic text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illum, <br /> vel officiis incidunt id reprehenderit? Veniam accusamus ratione distinctio aliquam.</p>
            </div>

            <div className='pt-12'>
                <div className='flex justify-center items-center gap-12'>
                    <img 
                    className='h-[500px] w-[400px] rounded-[40px]' 
                    src={earingsImg} alt="" />

                    <img
                    className='h-[500px] w-[600px] rounded-[40px]'
                    src={necklessImg} alt="" />
                </div>

                <div className='flex justify-center items-center gap-12 pt-12'>
                    <img
                    className='h-[500px] w-[620px] rounded-[40px]'
                    src={bracelateImg} alt="" />

                    <img
                    className='h-[500px] w-[400px] rounded-[40px]'
                    src={ringsImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Collection;