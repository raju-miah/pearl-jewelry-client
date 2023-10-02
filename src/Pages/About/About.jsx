import NewsLetter from "../Shared/NewsLetter/NewsLetter";


const About = () => {
    return (
        <section className="pt-12 pb-12 px-[15px]">
            <div className="flex items-center bg-[#CDADAD] rounded-[40px] px-[90px] py-[100px]">
                <div className="w-full">
                    <div>
                        <h2 className="text-[90px]">About Pearl</h2>
                    </div>
                </div>

                <div className="max-w-[500px] w-full">
                    <p className="text-[18px] pb-[15px]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    </p>

                    <p className="text-[18px] pb-[15px]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <p className="text-[18px] pb-[15px]">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    </p>

                    <p className="text-[18px] pb-[15px]">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus
                    </p>
                </div>
            </div>

            <div className="flex gap-x-[50px]">
                <div className="mt-[-334px] pl-[65px]">
                    <div className="overflow-hidden">
                        <img
                        className="object-cover max-w-[600px] rounded-[40px] top-0 left-0"
                        src="https://i.ibb.co/k1f5KhR/images-3.jpg" alt="" />
                    </div>
                </div>

                <div className="w-full">
                    <h3 className="max-w-[537px] text-[42px] my-[75px] mr-0 ml-[50px]">
                    We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue
                    </h3>
                </div>
            </div>

            <div className="flex gap-x-[50px]">
                <div className="mt-[-200px] w-full">
                    <p className="max-w-[523px] text-[18px] pb-[15px] mt-0 mb-auto mr-[62px] ml-auto">
                        We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures
                    </p>

                    <p className="max-w-[523px] text-[18px] pb-[15px] mt-0 mb-auto mr-[62px] ml-auto">
                        These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.
                    </p>

                    <p className="max-w-[523px] text-[18px] pb-[15px] mt-0 mb-auto mr-[62px] ml-auto">
                        These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.
                    </p>
                </div>

                <div className="w-full">
                    <div className="overflow-hidden">
                        <img
                        className="object-cover w-full h-[450px] rounded-[40px]"
                        src="https://i.ibb.co/yPQKJ6Y/images-20.jpg" alt="" />
                    </div>  
                </div>
            </div>

            <div className="max-w-[1147px] my-0 mx-auto pb-12">
                <h3 className="text-[42px] mb-[15px]">
                     1998 The Evolution
                </h3>

                <p className="text-[18px] mb-[15px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p className="text-[18px] mb-[15px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                </p>

                <p className="text-[18px] mb-[15px]">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                </p>
            </div>

            <NewsLetter></NewsLetter>

        </section>
    );
};

export default About;