import Header from "./shared/Header/Header";
import Navbar from "./shared/Navbar/Navbar";
import LeftSideNav from "./shared/LeftSideNav/LeftSideNav.jsx"
import RightSideNav from "./shared/RightSideNav/RightSideNav"
import BreakingNews from "./BreakingNews/BreakingNews.jsx";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard.jsx";

const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (

        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           <h1 className="text-3xl font-poppins font-bold">This is Home</h1> 
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="">
            <LeftSideNav></LeftSideNav>
              
            </div>
            {/* news container */}
            <div className="md:col-span-2 ">
              {/* news */}
              {
                news.map(aNews => <NewsCard key={aNews._id}
                    news={aNews}
                ></NewsCard>)
              }
            </div>
            <div className="">
            <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default Home;