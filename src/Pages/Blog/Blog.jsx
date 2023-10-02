import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";


const Blog = () => {

    const [blog, setBlog] = useState();
    useEffect(() =>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    return (
        <section className="pt-12 pb-12">
            <div className='ml-[16px] pb-2'>
                <h2 className="text-[60px] text-[#153462] italic text-left">Blogs</h2>
                <p className="text-[24px] text-[#153462] italic text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sequi qui commodi modi quos velit <br /> aliquam eveniet a officiis? Voluptas.</p>
            </div>

            <div className="grid grid-cols-1">
               {
                blog?.map((blogs, i) =>
                <BlogCard
                key={i}
                specialClass={`p-4 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}
                blogs={blogs}
                ></BlogCard>
                )
               }
            </div>
        </section>
    );
};

export default Blog;