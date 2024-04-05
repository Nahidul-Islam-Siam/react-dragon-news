import Header from "./shared/Header/Header";
import Navbar from "./shared/Navbar/Navbar";
import LeftSideNav from "./shared/LeftSideNav/LeftSideNav.jsx"
import RightSideNav from "./shared/RightSideNav/RightSideNav"

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <h1 className="text-3xl font-poppins font-bold">This is Home</h1> 
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border">
            <LeftSideNav></LeftSideNav>
              
            </div>
            <div className="md:col-span-2 border">
                <h2 className="text-4xl">News coming soon...</h2>
            </div>
            <div className="border">
            <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default Home;