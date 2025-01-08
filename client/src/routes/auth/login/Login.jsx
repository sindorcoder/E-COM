import { Button, Form, Input, Typography } from "antd";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";

const { Title, Text } = Typography;


const Login = () => {
  const navigate = useNavigate()

     const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "https://back-commerce-production.up.railway.app/api/v1/users/login",
        values
      );
      if(response.data.token) {
        navigate("/")
        localStorage.setItem("token", JSON.stringify(response.data.token))
      }
      console.log(response.data)
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
            style={{ width: "100%", maxWidth: 420 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="auth-form"
          >
            <div className="flex w-[100%] gap-[20px]">
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

            <Form.Item style={{ width: "100%" }}>
              <Button type="primary" htmlType="submit" className="w-[100%] mt-[40px] p-[25px]">
                Register
              </Button>
            </Form.Item>
          </Form>

          <Text style={{ textAlign: 'center' }}>
            Already have an account? <Link to="/auth">Login</Link>
          </Text>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login