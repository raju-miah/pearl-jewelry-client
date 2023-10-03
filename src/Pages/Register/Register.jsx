import { Link } from "react-router-dom";
import arrowBtnImgRegister from '../../assets/arrow.svg';


const Register = () => {
    return (
        <section className='pb-12'>
        <div>
          <h2 className="text-[60px] text-[#153462] italic text-center">Register</h2>
        </div>
  
        <div>
          <div 
            className="max-w-[737px] flex flex-col mx-auto rounded-[40px]">
  
            <form className="py-[30px] px-[125px]">
                <input
                  className="w-full text-[#153462] text-[22px] bg-transparent border-0 border-b-[1px] border-[#153462] outline-none py-[15px]"
                  type="name" name="name" placeholder="Name"/>
  
                <input
                 className="w-full text-[#153462] text-[22px] bg-transparent border-0 border-b-[1px] border-[#153462] outline-none py-[15px]"
                 type="email" name="email" placeholder="Email"/>

                <input
                 className="w-full text-[#153462] text-[22px] bg-transparent border-0 border-b-[1px] border-[#153462] outline-none py-[15px]"
                 type="password" name="password" placeholder="Password"/>

                <div>
                    <label htmlFor='image' className='block my-2 text-[22px] text-[#153462]'>
                        Select Image:
                    </label>
                    <input
                        className="bg-[transparent] text-[#153462]"
                        type='file'
                        id='image'
                        name='image'
                        accept='image/*'
                        required
                    />
                </div>
  
                  <div className='flex items-center gap-[20px] my-[30px]'>
                    <input 
                     className='text-[32px] text-[#153462] cursor-pointer'
                     type="submit" value="Register" />
  
                     <span className='cursor-pointer'>
                        <img
                         src={arrowBtnImgRegister} alt="" />
                     </span>
                 </div>
  
                 <p className='text-[22px] text-[#153462] pb-[15px]'>Don’t have an account?  
                  <Link to='/register' className='underline pl-[5px]'>
                  Login Now
                  </Link>
                  </p>
  
            </form>
          </div>
        </div>
      </section>
    );
};

export default Register;