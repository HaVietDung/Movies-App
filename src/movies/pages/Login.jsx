import React from "react";
import { Row, Col, Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const Login = () => {
    const {loading, login, error} = useAuth();
    
    console.log(useAuth())
    const onFinish = async (values) => {
        login(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <Row>
            <Col span={12} offset={6}>
                {error !== null && <p>{error.mess}</p>}
                <Form
                    name="basic"
                    labelCol={{
                    span: 8,
                    }}
                    wrapperCol={{
                    span: 16,
                    }}
                    style={{
                    
                    maxWidth: 600,
                    }}
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password />
                    </Form.Item>

                    <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <Button loading={loading} type="primary" htmlType="submit">
                        Login
                    </Button>
                    <Link to={"/"}>Quay ve trang chu</Link>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}
export default React.memo(Login)