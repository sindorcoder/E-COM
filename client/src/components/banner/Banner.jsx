import banner from "../../images/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png"

const Banner = () => {
  return (
    <section className="bg-[#40BFFF]">
          <div className="container">
               <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                         <h1 className="text-[55px] font-[500] leading-[82.5px] title text-white">Adidas Men Running
                         Sneakers</h1>
                         <p className="text-[24px] mt-[24px] mb-[12px] font-[400] leading-[36px] title text-white">Performance and design. Taken right to the edge.</p>
                         <a href="#" className="text-[20px] text-white font-[600] title">SHOP NOW</a>
                         <div className="w-[75px] h-[3px] bg-white"></div>
                    </div>
                    <div>
                         <img src={banner} alt="shoes" />
                    </div>
               </div>
          </div>
    </section>
  )
}

export default Banner