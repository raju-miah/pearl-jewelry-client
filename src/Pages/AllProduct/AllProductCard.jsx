import { Link } from "react-router-dom";


const AllProductCard = ({productAll}) => {

    const {name, image, price} = productAll;

    return (
        <div className="w-[420px] rounded-[40px] overflow-hidden">
                <img src={image} alt='' className="w-full h-[400px] object-cover" />
                <div className="px-[34px] py-[22px] bg-white flex justify-between items-center">
                    <Link>
                        <h3 className="text-[28px] italic mb-2">{name}</h3>
                    </Link>
                        <p className="text-[22px]">$ {price}</p>
                </div>
        </div>
    );
};

export default AllProductCard;