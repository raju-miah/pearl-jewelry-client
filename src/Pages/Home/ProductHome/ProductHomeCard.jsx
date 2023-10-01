import { Link } from "react-router-dom";


const ProductHomeCard = ({product}) => {

    const {name, image, price} = product;

    return (
         <div className="w-[320px] rounded-[40px] overflow-hidden mr-[30px]">
            <img src={image} alt='' className="w-full h-[280px] object-cover" />
                <div className="px-[34px] py-[22px] bg-white flex justify-between items-center">
                     <Link>
                       <h3 className="text-[28px] italic mb-2">{name}</h3>
                    </Link>
                     <p className="text-[22px]">$ {price}</p>
               </div>
         </div>
    );
};

export default ProductHomeCard;