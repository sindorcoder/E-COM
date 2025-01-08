import imageOne from "../../images/refund.svg"
import imageTwo from "../../images/shipping.svg"
import imageThree from "../../images/support.svg"
const Info = () => {
  return (
    <section className="mt-[242px] mb-[334px]">
     <div className="container">
          <div className="flex justify-around items-center">
               <div className="flex flex-col items-center text-center">
                    <div className="h-[70px]">
                            <img className="h-[]" src={imageTwo} alt="speed to report" />
                    </div>
                    <h2 className="text-[27px] font-[500] title mt-[53px] min-h-[50px] mb-[12px] text-[#22262A] leading-[40.5px]">FREE SHIPPING</h2>
                    <p className="text-center w-[197px] text-[18px] leading-[22px] text-[#22262A] text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               </div>
               
               <div className="flex flex-col items-center text-center">
                    <div className="h-[70px]">
                           <img className="h-[]" src={imageOne} alt="100% Refund" />
                    </div>
                    <h2 className="text-[27px] font-[500] title mt-[53px] min-h-[50px] mb-[12px] text-[#22262A] leading-[40.5px]">100% REFUND</h2>
                    <p className="text-center w-[197px] text-[18px] leading-[22px] text-[#22262A] text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               </div>
               
               <div className="flex flex-col items-center text-center ">
                    <div className="h-[70px]">
                          <img className="h-[]" src={imageThree} alt="speed to report" />
                    </div>
                    <h2 className="text-[27px] font-[500] title mt-[53px] min-h-[50px] mb-[12px] text-[#22262A] leading-[40.5px]">SUPPORT 24/7</h2>
                    <p className="text-center w-[197px] text-[18px] leading-[22px] text-[#22262A] text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               </div>
          </div>
     </div>
    </section>
  )
}

export default Info