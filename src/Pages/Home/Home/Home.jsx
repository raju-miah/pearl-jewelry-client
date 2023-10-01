import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
import Banner from "../Banner/Banner";
import Collection from "../Collection/Collection";
import ExploreMore from "../ExploreMore/ExploreMore";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeBlog from "../HomeBlog/HomeBlog";
import ProductHome from "../ProductHome/ProductHome";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductHome></ProductHome>
            <Collection></Collection>
            <ExploreMore></ExploreMore>
            <HomeBlog></HomeBlog>
            <HomeAbout></HomeAbout>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;