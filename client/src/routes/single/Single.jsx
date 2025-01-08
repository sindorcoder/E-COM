import { CgFacebook } from "react-icons/cg"; 
 import { AiOutlineHeart, AiOutlineTwitter, AiOutlineShoppingCart , AiOutlinePlus , AiOutlineMinus } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Rating from "../../components/rating/Rating";
import { Rate } from "antd";
import { useContext, useState } from "react";
import AppContext from "../../context/store/Reducer"
const Single = () => {
  const id = useParams();
  const [data] = useFetch(`/products/${id.id}`);
  const [count, setCount] = useState(1)
  

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(AppContext)

  const handleCart = (product) => {
    dispatch({type: "ADD_TO_CART", product})
  }

  return (
    <>
      <Nav />

      <div className="mt-[120px] mb-[147px]">
        <div className="container">
          <div className="w-[100%] max-w-[1195px] my-0 mx-auto ">
          <div className="flex justify-center gap-[30px]">

            <div className="max-w-[526px] w-[100%] min-h-[550px] flex items-center justify-center bg-[#F6F7F8] rounded-[30px] px-[10px]">
              <img src={data.image} className="w-[100%]  rounded-[16px]" alt="" />
            </div>
            <div className="max-w-[650px] w-[100%]">
              <h1 className="text-[24px] text-[#22262A] font-[500] leading-[36px] title">
                {data.brand}
              </h1>
              <div className="flex items-center gap-[23px] my-[25px]">
                <Rate allowHalf defaultValue={data.rating} />
                <span className="text-[16px] text-[#C1C8CE] leading-[20px] font-[400] text">
                  0 reviews
                </span>
                <a href="#">Submit a review</a>
              </div>
              <div className="w-[100%] h-[3px] bg-[#F6F7F8]"></div>
              <div className="flex gap-[14px] items-center">
                <strong className="text-[#40BFFF] tracking-[0.5px] text-[18px] font-[700] leading-[32.4px] text">
                  ${data.price}
                </strong>
                <s className="text-[#9098B1] tracking-[0.5px] text-[14px] font-[400] leading-[21px] text">
                  $400.23
                </s>
                <strong className="text-[14px] font-[700] leading-[21px] tracking-wider text-[#FB7181]">
                  24% Off
                </strong>
              </div>
              <div className="flex items-start gap-[90px] my-[22px]">
                <div className="flex flex-col gap-[15px]">
                  <p className="text-[14px] leading-[21px] title font-[400]">Availability:</p>
                  <p className="text-[14px] leading-[21px] title font-[400]">Category:</p>
                  <p className="text-[14px] leading-[21px] title font-[400]">Free shipping</p>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <p className="text-[14px] leading-[21px] title font-[400]">In stock: {data.countInStock}</p>
                  <p className="text-[14px] leading-[21px] title font-[400]">Accessories</p>
                </div>
              </div>
              <div className="w-[100%] h-[3px] bg-[#F6F7F8] mb-[130px]"></div>
              <div className="w-[100%] h-[3px] bg-[#F6F7F8]"></div>
            <div className="mt-[20px] mb-[44px] flex justify-between">
            <div className="flex gap-[40px] p-[24px] rounded-[5px] bg-[#F6F7F8] max-w-[160px]">
              <button onClick={() => setCount(count-1)} disabled={count == 1}><AiOutlineMinus className="text-[#33A0FF] text-[18px]" /></button> 
                      <p className='text font-[400] text-[16px] leading-[20px] text-[#262626]'>{count}</p> 
              <button onClick={() => setCount(count+1)}><AiOutlinePlus className="text-[#33A0FF] text-[18px]" /></button>
              </div>

              <div className="flex gap-[22px]">
                  <button onClick={() => handleCart(data)} className="flex items-center rounded-[5px] gap-[20px] text-[16px] text-[#33A0FF] py-[15px] px-[28px] bg-[#33a0ff42]">
                    <AiOutlineShoppingCart className="text-[#33A0FF] text-[24px]" />
                    Add To Cart
                  </button>
                  <button className="py-[17px] px-[20px] bg-[#33a0ff42] rounded-[5px]">
                    <AiOutlineHeart className="text-[#33A0FF] text-[24px]" />
                  </button>
              </div>
            </div>

            <div className="flex items-center gap-[14px]">
              <button className="py-[16px] w-[315px] rounded-[5px] flex items-center gap-[16px] text-[16px] font-[500] title leading-[24px] text-white  px-[45px] bg-[#385C8E]">
                <CgFacebook className="text-white" />
                Share on Facebook
              </button>
              <button className="py-[16px] w-[315px] flex items-center rounded-[5px] gap-[16px] text-[16px] font-[500] title leading-[24px] text-white  px-[45px] bg-[#03A9F4]">
                <AiOutlineTwitter />
                Share on Twitter
              </button>
            </div>

            </div>
          </div>

          <div className="mt-[84px]">
            <h2 className="text-[18px] text-[#2E90E5]">Product Infomation</h2>
            <div className="w-[195px] h-[4px] bg-[#2E90E5] mt-[30px]"></div>
            <div className="w-[100%] max-w-[980px] my-[21px]">
            <p className="font-[400] title text-[12px] text-[#9098B1] leading-[21px] translate-[0.5px]">{data.description}</p>
            <p className="font-[400] title text-[12px] text-[#9098B1] leading-[21px] mt-[37px] translate-[0.5px]">{data.richDescription}</p>

            </div>
          </div>
          </div>
        </div>
      </div>

      <Rating />
      <Footer />
    </>
  );
};

export default Single;
