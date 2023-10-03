

const NewsLetter = () => {
    return (
        <section className="pt-12 pb-12">
            <div className="px-[15px]">
                <div className="h-[550px] rounded-[40px] text-center bg-[#153462]">
                    <div className="pt-[150px]">
                        <h3 className="text-[70px] text-white italic">Want some news?</h3>

                        <div className="max-w-[478px] flex justify-center border-b-[1px] border-white mx-auto my-0 mt-[20px] p-[18px]">
                            <input
                            className="w-full text-white text-[22px] italic bg-transparent border-0 outline-none"
                            type="email" name="email" placeholder="Email"/>
                            <button className="text-white text-[22px] italic">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;