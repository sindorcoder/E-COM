 import { AiOutlineDelete, AiOutlinePlus , AiOutlineMinus } from "react-icons/ai";
import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import { Fragment, useContext , useState } from "react"
import AppContext from "../../context/store/Reducer"


const Dashboard = () => {
  const [state , dispatch] = useContext(AppContext)
  const [count, setCount] = useState(1)

  const handleDelete = (product) => {
    dispatch({type: "DELETE_INFO", product})
  }

  console.log(state.product)
  return (
    <>
    <Nav/>
        <div>
          <h1 className="text-[18px] text-[#262626] my-[35px] text text-center leading-[22px] "><span className="text-[#33A0FF]">Home / Hot Deal / </span>Nike Airmax 270 React</h1>
          <div className="container">
            <div className="flex mt-[46px] mb-[23px]">

              <h2 className="w-[630px] text-[20px] font-[500] title leading-[30px]">PRODUCT</h2>
              <h2 className="w-[230px] text-[20px] font-[500] title leading-[30px]">PRICE</h2>
              <h2 className="w-[270px] text-[20px] font-[500] title leading-[30px]">QTY</h2>
              <h2 className=" text-[20px]  font-[500] title leading-[30px]">UNIT PRICE</h2>
            </div>
            <div className="w-[100%] h-[2px] bg-[#F6F7F8]"></div>
            {
              state.product.map((item) => {

               return (
                <Fragment key={item.id}>
                
                <div className="flex items-center py-[60px] border-b-[4px] border-[#F6F7F8]">
                <AiOutlineDelete onClick={() => handleDelete(item)} className="text-[25px]" />
                  <img src={item.image} className="ml-[55px] w-[94px] object-contain h-[137px] mr-[28px]" alt="image" />
                  <h2 className="text-[18px] font-[400] title leading-[27px] text-[#262626] mr-[410px]">{item.brand}</h2>
                  <strong className="text-[18px] font-[400] title leading-[27px] mr-[180px]">${item.price}</strong>
                  
            <div className="flex gap-[30px] p-[24px] rounded-[5px] bg-[#F6F7F8]">
              <button onClick={() => setCount(count-1)} disabled={count == 1}><AiOutlineMinus className="text-[#33A0FF] text-[18px]" /></button> 
                      <p className='text font-[400] text-[16px] leading-[20px] text-[#262626]'>{count}</p> 
              <button onClick={() => setCount(count+1)}><AiOutlinePlus className="text-[#33A0FF] text-[18px]" /></button>
              </div>
                <strong className="text-[18px] font-[400] title leading-[27px] ml-[120px]">$499.00</strong>
                </div>
                </Fragment>
               )
              })
            }
          
          <div className="w-[100%] h-[100%] flex items-end justify-end mt-[100px]">
            
          <div className="w-[100%]  max-w-[500px]">
            <div className="flex justify-between">
            <div>
                <p className="text-[18px] font-[400] title leading-[27px] text-[#262626]">Subtotal</p>
                <p className="text-[18px] font-[400] title leading-[27px] my-[23px] text-[#262626]">Shipping fee</p>
                <p className="text-[18px] font-[400] title leading-[27px] text-[#262626]">Coupon</p>
              </div>
              <div>
                <p className="text-[18px] font-[400] title leading-[27px] text-[#262626]">$118</p>
                <p className="text-[18px] font-[400] title leading-[27px] my-[23px] text-[#262626]">$20</p>
                <p className="text-[18px] font-[400] title leading-[27px] text-[#262626]">No</p>
              </div>
            </div>
            <div className="w-[100%] h-[2px] my-[30px] bg-[#F6F7F8]"></div>
              <div className="flex justify-between">
                <h4 className="text-[30px] text-[#22262A] font-[500] title leading-[45px]">TOTAL</h4>
                <p className="text-[18px] font-[400] title leading-[27px] text-[#262626]">$118</p>
              </div>
              <button className="py-[17px] bg-[#33A0FF] w-[100%] mt-[24px] text-white text-[18px] font-[500] leading-[27px] title rounded-[5px]">Check out</button>
          </div>  

          </div>
          </div>
        </div>
    <Footer/>
    </>
  )
}

export default Dashboard