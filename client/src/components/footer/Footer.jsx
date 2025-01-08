import logo from "../../images/Icon.svg"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import union from "../../images/Western-union.svg"
import masterCard from "../../images/Group 19.svg"
import paypal from "../../images/Paypal.svg"
import visa from "../../images/Shape 327-1.svg"
const Footer = () => {
  return (
    <footer className="bg-[#BCDDFE] mt-[300px] pt-[150px]">
     <div className="container">
          <div className="flex justify-between">
               <ul className="w-[221px] flex flex-col gap-[16px]">

                    <li className="flex items-center gap-[7px]">
                         <img src={logo} alt="logo cite" />
                         <h4 className="text-[18px] text-[#22262A] font-[700] leading-[27px] title">E-Comm</h4>
                    </li>
                    <li className="text-[12px] font-[400] text leading-[15px] text-[#22262A]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever.Since the 1500s, when an unknown printer.
                    </li>
               </ul>
               
               <ul className="w-[200px] flex flex-col gap-[19px]">
                    <li className="text-[18px] font-[500] title leading-[27px]">
                         Follow Us
                    </li>
                    <li className="text-[12px] font-[400] text leading-[15px] text-[#22262A]">
                    Since the 1500s, when an unknown printer took a galley of type and scrambled.
                    </li>
                    <li className="flex items-center gap-[40px]">
                         <a href="#">
                              <img src={facebook} alt="facebook" />
                         </a>
                         <a href="#">
                              <img src={twitter} alt="facebook" />
                         </a>
                    </li>
               </ul>
               
               <ul className="w-[200px] flex flex-col gap-[19px]">
                    <li className="text-[18px] font-[500] title leading-[27px]">
                         Contact Us
                    </li>
                    <li className="text-[12px] font-[400] text leading-[15px] text-[#22262A]">
                    E-Comm , 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR
                    </li>
               </ul>
          </div>

          <div className="mt-[290px] pb-[55px]">
               <div className="h-[2px] bg-white"></div>

               <div className="flex justify-end mt-[30px] gap-[20px]">
                    <img src={union} alt="union pay" />
                    <img src={masterCard} alt="master card" />
                    <img src={paypal} alt="paypal" />
                    <img src={visa} alt="visa" />
               </div>
          </div>
     </div>
    </footer>
  )
}

export default Footer