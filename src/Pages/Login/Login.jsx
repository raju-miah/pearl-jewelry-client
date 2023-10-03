import { Link } from 'react-router-dom';
import arrowBtnImgLogin from '../../assets/arrow.svg';
import Divider from '../../components/Divider/Divider';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';

const Login = () => {
  return (
    <section className='pt-12 pb-12'>
      <div>
        <h2 className="text-[60px] text-[#153462] italic text-center">Log in</h2>
      </div>

      <div>
        <div 
          className="max-w-[737px] flex flex-col mx-auto rounded-[40px]">

          <form className="py-[30px] px-[125px]">
              <input
                className="w-full text-[#153462] text-[22px] bg-transparent border-0 border-b-[1px] border-[#153462] outline-none py-[15px]"
                type="email" name="email" placeholder="Email"/>

              <input
               className="w-full text-[#153462] text-[22px] bg-transparent border-0 border-b-[1px] border-[#153462] outline-none py-[15px]"
               type="password" name="password" placeholder="Password"/>

                <div className='flex justify-between items-center my-[30px] gap-[30px]'>
                  <label 
                  className='flex items-center gap-[10px] text-[22px] cursor-pointer text-[#153462]'>
                    <input type="checkbox" name="check" />
                    <span>Remember me</span>
                  </label>

                  <Link className='text-[22px] text-[#153462]'>Forgot Password?</Link>
                </div>

                <div className='flex items-center gap-[20px] my-[30px]'>
                  <input 
                   className='text-[32px] text-[#153462] cursor-pointer'
                   type="submit" value="Log in" />

                   <span className='cursor-pointer'>
                      <img
                       src={arrowBtnImgLogin} alt="" />
                   </span>
               </div>

               <p className='text-[22px] text-[#153462] pb-[15px]'>Don’t have an account?  
                <Link className='underline pl-[5px]'>
                Register Now
                </Link>
                </p>

                <Divider></Divider>

                <div className='flex justify-center items-center gap-[20px]'>
                  <button 
                  className='flex items-center gap-[10px] text-[22px] border-[1px] cursor-pointer text-[#153462] border-solid border-[#153462] px-[50px] py-4 mt-4 hover:bg-[#153462] hover:text-white ease-in-out duration-500'>
                    <span className='text-[22px] text-center'><BsGoogle /></span>
                   Google</button>

                  <button 
                  className='flex items-center gap-[10px] text-[22px] border-[1px] cursor-pointer text-[#153462] border-solid border-[#153462] px-[50px] py-4 mt-4 hover:bg-[#153462] hover:text-white ease-in-out duration-500'>
                    <span className='text-[22px] text-center'><FaFacebook /></span>
                   Facebook</button>
                </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;