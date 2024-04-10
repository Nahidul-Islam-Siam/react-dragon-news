import { useEffect, useState} from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCateories] = useState([])
    
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCateories(data))
    },[])
    
    return (
        <div className="space-y-6">
        <h2>All Categories</h2>
        {
            categories.map(category => <Link
            className="block ml-4 text-xl font-semibold "
                 key={category.id}
                 to={`/catagory/${category.id}`}
                 >{category.name}</Link>)
        }
            
        </div>
    );
};

export default LeftSideNav;