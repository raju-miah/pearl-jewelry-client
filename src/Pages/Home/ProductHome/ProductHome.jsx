import { useEffect, useState } from 'react';
import ProductHomeCard from './ProductHomeCard';

const ProductHome = () => {

    const [homeProduct, setHomeProduct] = useState();

    useEffect(() =>{
        fetch('HomeProduct.json')
        .then(res => res.json())
        .then(data => setHomeProduct(data))
    },[])

    return (
        <section className='pt-12 pb-12'>

            <div className='ml-[16px] pb-12'>
                <h2 className="text-[60px] text-[#153462] italic text-left">Shop Stores</h2>
                <p className="text-[24px] text-[#153462] italic text-left">Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus</p>
            </div>


            <div className='flex justify-center items-center pl-[30px]'>

                {
                    homeProduct?.map(product =>
                    <ProductHomeCard
                    key={product.price}
                    product={product}
                    ></ProductHomeCard>
                    )
                }

            </div>

            <div className='flex justify-center items-center'>
                <button className='border-[1px] uppercase cursor-pointer text-[#153462] border-solid border-[#a749ff] px-[90px] py-4 mt-[50px] hover:bg-[#a749ff] hover:text-white ease-in-out duration-500'>Shop More</button>
            </div>

        </section>
    );
};

export default ProductHome;