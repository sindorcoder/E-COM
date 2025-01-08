import navProfile from "../../images/profile_close_2.svg"
import logo from "../../images/Icon.svg"
import { Badge} from 'antd';
import { Link } from "react-router-dom"
import cart from "../../images/Cart.svg"
const Nav = () => {
  const token = localStorage.getItem("token")
  return (
    <nav>
     <div className="container">
          <div className="flex items-center justify-between p-[20px]">
              <Link to={
                !token ?  "/auth" : "/admin"
              } className="flex gap-[7px]">
               <img src={navProfile} alt="My Profile" />
               <span className="text-[20px] leading-[24.36px] text">My profile</span>
              </Link>
              <a href="/" className="flex items-center gap-[7px]">
               <img src={logo} alt="logo cite"/>
               <h3 className="text-[18px] font-[700] title">E-Comm</h3>
              </a>
              <div>
                <Link to={"/dashboard"}>
                    <Badge count={2} size="small">
                      <img src={cart} alt="cart" />
                    </Badge>
                </Link>
              </div> 
          </div>
     </div>
    </nav>
  )
}

export default Nav