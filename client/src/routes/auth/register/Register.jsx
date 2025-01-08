import { Button, Form, Input, Typography } from "antd";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const { Title, Text } = Typography;

const Register = () => {
const navigate = useNavigate()

     const onFinish = async (values) =>  {
    try {
      const response = await axios.post(
        "https://back-commerce-production.up.railway.app/api/v1/users/register",
        values
      );
      if(response.status === 200) {
          navigate("/auth/login")
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-[22px] w-[100%] mt-[70px]">
          <Title style={{ textAlign: 'center' }} level={1}>Register</Title>
          <p className="text-[16px] text-[#828282] text leading-[20px] text-center">
            Enter your credentials to access your account.
          </p>

          <Form
            layout="vertical"
            style={{ width: "100%", maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="auth-form"
          >
            <div className="flex w-[100%] gap-[20px]">
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input />
              </Form.Item>
            </div>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Please input your Password!" }]}
            >
              <Input.Password />
            </Form.Item>

            <div className="flex w-[100%] gap-[20px]">
              <Form.Item
                name="phone"
                label="Phone"
                rules={[{ required: true, message: "Please input your phone!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="isAdmin"
                label="Is Admin"
                rules={[{ required: true, message: "Please input your isAdmin!" }]}
              >
                <Input />
              </Form.Item>
            </div>

            <Form.Item
              name="street"
              label="Street"
              rules={[{ required: true, message: "Please input your street!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="apartment"
              label="Apartment"
              rules={[{ required: true, message: "Please input your apartment!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="zipCode"
              label="Zip Code"
              rules={[{ required: true, message: "Please input your zip Code!" }]}
            >
              <Input />
            </Form.Item>

            <div className="flex w-[100%] gap-[20px]">
              <Form.Item
                name="city"
                label="City"
                rules={[{ required: true, message: "Please input your city!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="country"
                label="Country"
                rules={[{ required: true, message: "Please input your Country!" }]}
              >
                <Input />
              </Form.Item>
            </div>

            <Form.Item style={{ width: "100%" }}>
              <Button type="primary" htmlType="submit" className="w-[100%] mt-[40px] p-[25px]">
                Register
              </Button>
            </Form.Item>
          </Form>

          <Text style={{ textAlign: 'center' }}>
            Already have an account? <Link to="/auth/login">Login</Link>
          </Text>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
