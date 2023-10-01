import { useEffect, useState } from "react";
import AllProductCard from "./AllProductCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const AllProduct = () => {

    const [allProduct, setAllProduct] = useState();

    useEffect(() =>{
        fetch('AllProduct.json')
        .then(res => res.json())
        .then(data => setAllProduct(data))
    },[])

    return (
        <section className='pt-12 pb-12'>
            <div className='ml-[16px] pb-12'>
                <h2 className="text-[60px] text-[#153462] italic text-center">Shop Stores</h2>
                <p className="text-[24px] text-[#153462] italic text-center">Ut enim ad minima veniam, quis nostrum exercitationem ullam <br /> corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur</p>
            </div>

            <div className="grid grid-cols-3 gap-y-[40px] gap-x-[30px] justify-center items-center mt-[60px] mb-[120px] px-[15px]">
                {
                    allProduct?.map((productAll, i) =>
                    <AllProductCard
                    key={i}
                    productAll={productAll}
                    ></AllProductCard>
                    )
                }
            </div>

            <div className="flex justify-center my-8">
              <ul className="flex justify-center items-center gap-3 list-none">
                    <li>
                        <button
                        className='text-[18px] flex justify-center items-center
                        w-[40px] h-[40px] rounded-[100%]
                        border-[1px] border-solid border-[#153462] hover:bg-[#153462]
                        hover:text-white'
                        >
                            <IoIosArrowBack />
                        </button>
                    </li>
                    <li>
                        <button
                        className='text-[18px]
                        w-[40px] h-[40px] rounded-[100%]
                        border-[1px] border-solid border-[#153462] hover:bg-[#153462]
                        hover:text-white'
                        >
                            1
                        </button>
                    </li>
                    <li>
                        <button
                        className='text-[18px]
                        w-[40px] h-[40px] rounded-[100%]
                        border-[1px] border-solid border-[#153462] hover:bg-[#153462]
                        hover:text-white'
                        >
                            2
                        </button>
                    </li>

                    <li>
                        <button
                        className='text-[18px]
                        w-[40px] h-[40px] rounded-[100%]
                        border-[1px] border-solid border-[#153462] hover:bg-[#153462]
                        hover:text-white'
                        >
                            3
                        </button>
                    </li>

                    <li>
                        <button
                        className='text-[18px] flex justify-center items-center
                        w-[40px] h-[40px] rounded-[100%]
                        border-[1px] border-solid border-[#153462] hover:bg-[#153462]
                        hover:text-white'
                        >
                            <IoIosArrowForward />
                        </button>
                    </li>
                </ul>
            </div>
    </section>
    );
};

export default AllProduct;