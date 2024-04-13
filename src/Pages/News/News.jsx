import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";


const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 border">
<div className="col-span-3">
<h2 className="text-5xl">News Detail</h2>
<p>{id}</p>
</div>
<div className="">
<RightSideNav></RightSideNav>
</div>
            </div>
            <h2>News Detail</h2>
        </div>
    );
};

export default News;