import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
         <div className="p-4 space-y-3 flex flex-col"><h2 className="text-3xl w-full">Login With </h2>
         <button className="btn btn-outline">
         <FaGoogle />
  Google
</button>

         <button className="btn btn-outline">
         <FaGithub  />
  Github
</button>
</div>
<div className="p-4 space-y-3 flex flex-col"><h2 className="text-3xl w-full">Find Us On </h2>
<a className="p-4 flex text-lg items-center border rounded-b-lg " href="">
<FaFacebook />
<span>Facebook</span>
</a>
<a className="p-4 flex text-lg items-center border ronded " href="">
<FaXTwitter />
<span>Twitter</span>
</a>
<a className="p-4 flex text-lg items-center border ronded " href="">
<BsInstagram />
<span>Instagram</span>
</a>
</div>
<div className="p-4 space-y-3 mb-6">
  <h2 className="text-3xl">Q Zone</h2>
  <img src={qzone1} alt="" />
  <img src={qzone2} alt="" />
  <img src={qzone3} alt="" />
</div>
        </div>
    );
};

export default RightSideNav;