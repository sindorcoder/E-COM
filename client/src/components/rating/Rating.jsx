import { useFetch } from "../../hooks/useFetch"
import { useState } from "react"
import { Rate } from 'antd';
import Empty from "../../images/empty.png";
import { Link } from "react-router-dom";
const Rating = () => {

     const [data, loading] = useFetch("/products")
     const [current, setCurrent] = useState(3)
     

     const ratingCard = data.filter((item) => item.rating >= 3.5)
  
   return (
     <section>
          <h1 className="uppercase text-[35px] font-[600] title text-center" >MOST TOP RATED PRODUCTS</h1>
          <div className="container">
               
    <div className="grid grid-cols-3 place-items-center gap-[35px] mt-[82px]">
     {
          loading ?
          <h1>Loading...</h1> : 
          
          ratingCard.slice(0, current).map((product) => {
            return (
              <>
               <div data-aos="fade-up" className="max-w-[300px] rounded-[5px] overflow-hidden" key={product.id}>
               <Link className="w[100%] h-[276px]" to={`/product/${product.id}`}>
                   <div  className="w[100%] h-[276px] bg-[#EAEAEA] rounded-[5px] overflow-hidden p-[20px]">
                        { !product.image ? <img className="w-[100%] h-[100%] object-contain" src={Empty} alt="product image" />  : <img className="w-[100%] h-[100%] object-contain" src={product.image} alt="product image" />  } 
                   </div>
                   </Link>
                   <div className="pt-[10px] border-x-[3px] flex flex-col items-center gap-[10px] border-b-[3px] border-solid border-[#EAEAEA] px-[40px]">
                         <h3 className="font-[700] text-[18px] leading-[27px] text-center tracking-[0.5px] ">{product.brand}</h3> 
                         <Rate allowHalf defaultValue={product.rating} />
                         <div className="flex gap-[14px] items-center">
                              <strong className="text-[#40BFFF] tracking-[0.5px] text-[18px] font-[700] leading-[32.4px] text">${product.price}</strong>
                              <s className="text-[#9098B1] tracking-[0.5px] text-[14px] font-[400] leading-[21px] text">$400.23</s>
                              <strong className="text-[14px] font-[700] leading-[21px] tracking-wider text-[#FB7181]">24% Off</strong>
                         </div>
                   </div> 
               </div>
              </>
            )   
          })
     }
    </div>
    <div className="flex items-center justify-center mt-[60px]">
     <button onClick={() => setCurrent(current + 3)} className="uppercase text-[#40BFFF] border-b-[3px] border-solid border-[#40BFFF] font-[700] text-[18px] leading-[27px] tracking-[0.5px]">Load More</button>
    </div>
     </div>
     </section>
  )
}

export default Rating