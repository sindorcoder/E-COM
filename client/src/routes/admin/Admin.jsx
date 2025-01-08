/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import { Drawer, Button, Form, Input } from 'antd';

import Nav from "../../components/nav/Nav"
import { Fragment} from "react"
import { useFetch } from "../../hooks/useFetch"
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Admin = () => {

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [userId , setUserId] = useState()

  const showLoading = async (values) => {
    console.log(values)

    try{
      const response = await axios.post(`https://back-commerce-production.up.railway.app/api/v1/products`, values, {
        headers: {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
      console.log(response)
    }
    catch(error) {
      console.log(error)
    }
  };
  const showSidebar = (id) => {
    setUserId(id)
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  const onFinish = async (values) => {
    try{
      const response = await axios.put(`https://back-commerce-production.up.railway.app/api/v1/products/${userId}`, values, {
        headers: {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
      console.log(response)

    }
    catch(error) {
      console.log(error)
    }
  };

  const handleUpdate = async (values) => {
    setUserId(values)

    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }

  const [data] = useFetch("/products")

  const handleDelete = async (id) => {
    try{
      const response = await axios.delete(`https://back-commerce-production.up.railway.app/api/v1/products/${id}`, {
        headers: {
          "Content-Type" : "application/json",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
      console.log(response)
    }
    catch(error) {
      console.log(error)
    }    

  }
  
  return (
    
    <div className="relative overflow-hidden">
    <Nav/>
    <div>
          <h1 className="text-[18px] text-[#262626] my-[35px] text text-center leading-[22px] "><span className="text-[#33A0FF]">Home / Hot Deal / </span>Nike Airmax 270 React</h1>

          <div className="container">

        <button onClick={showSidebar} type='submit' className="py-[14px] px-[30px] bg-blue-400 text-white text-[16px] rounded-[5px]">ADD TO CARD</button>
    
        <Drawer

        closable
        destroyOnClose
        title={<p>Loading Drawer</p>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
         <Form 
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    onFinish={showLoading}
    style={{
      maxWidth: 600,
    }}
  >
    
    <Form.Item
      name='name'
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name='image'
      label="Image"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      name='isFeatured'
      label="isFeatrued"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name='brand'
      label="brand"
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      name='countInStock'
      label="countInStock"
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      name='price'
      label="price"
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      name='rating'
      label="rating"
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      name='numReviews'
      label="numReviews"
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      name='dateCreated'
      label="dateCreated"
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      name='description'
      label="description"
    >
      <Input.TextArea />
    </Form.Item>
    
    <Form.Item
      name='richDescription'
      label="richDescription"
    >
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
      style={{
        marginTop: "30px",
        width: "100%"
      }}
    >
      <Button type="primary" className='w-[100%]' htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

      </Drawer>


            <div className="flex justify-between items-center mt-[80px] mb-[23px]">
              <h2 className="w-[240px] text-[20px] font-[500] title leading-[30px]">PRODUCT</h2>
              <h2 className="w-[200px] text-[20px] font-[500] title leading-[30px]">BRAND</h2>
              <h2 className="w-[200px] text-[20px] font-[500] title leading-[30px]">PRICE</h2>
              <h2 className="w-[200px] text-[20px] font-[500] title leading-[30px]">QTY</h2>
              <h2 className=" w-[300px] text-[20px] uppercase  font-[500] title leading-[30px]">dateCreated</h2>
              <h2 className=" w-[80px] text-[20px] uppercase  font-[500] title leading-[30px]">Action</h2>
            </div>
            <div className="w-[100%] h-[2px] bg-[#F6F7F8]"></div>
            {
              data.map((item) => {


               return (
                <Fragment key={item.id}>
                
                <div className="flex items-center justify-between py-[60px] border-b-[4px] border-[#F6F7F8]">
                <AiOutlineDelete onClick={() => handleDelete(item.id)} className="text-[25px]" />
                  <img src={item.image} className="ml-[55px] w-[94px] object-contain h-[137px] mr-[28px]" alt="image" />
                  <h2 className="text-[18px] font-[400] title leading-[27px] text-[#262626] mr-[180px]">{item.brand}</h2>
                  <strong className="text-[18px] font-[400] title leading-[27px] mr-[20px]">${item.price}</strong>
                <strong className="text-[18px] font-[400] title leading-[27px] ml-[120px]">{item.countInStock}</strong>
                <strong className="text-[18px] font-[400] title leading-[27px] ml-[180px]">{item.dateCreated.slice(0, 10)}</strong>
                <div>
                  <button onClick={() => handleUpdate(item.id)} className="ml-[190px] py-[5px] text-[18px] text-white leading-[26px] text px-[20px] bg-[gold]">Update</button>  
                </div>      
                </div>
                </Fragment>
               )
              })
            }
          
          </div>
        </div>
    </div>
  )
}

export default Admin