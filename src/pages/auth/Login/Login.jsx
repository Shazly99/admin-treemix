import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Tabs, notification } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../../constants/img';
import "./login.scss";
import { showNotification } from '../../../utils/notification';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const [checked, setChecked] = useState(false);
    const [loademail, setLoadEmail] = useState(false);
    const [activeTab, setActiveTab] = useState('1');
    let { t } = useTranslation()

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            setLoadEmail(true);
            try {
                let { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, values);
                console.log(data);
                
                if (data.success == true) {
                    localStorage.setItem('username', data?.data?.name)
                    localStorage.setItem('email', data?.data?.email)
                    localStorage.setItem('token', data?.access_token)
                    showNotification('success', 'Login Successful', 'You have successfully logged in.');
                    setTimeout(() => {
                        setLoadEmail(false);
                        navigate('/');
                        window.location.reload();
                    }, 1500);
                } else { 
                    showNotification('error', 'Login Failed', data.message || 'Incorrect email or password.');
                    setLoadEmail(false);
                }
            } catch (error) {
                showNotification('error', 'Login Error', 'An error occurred while trying to log in. Please try again later.'); 
                setLoadEmail(false);
                console.log(error);

            }
        }
    });  

    return (
        <>

            <div className="app__login  mt-8">
                <div className="app__login-left    ">
                    <header className='flex mb-4  justify-content-center  h-5rem  align-items-center gap-2'>
                        <img src={img.logo} alt="" width={200}  />
                    </header> 

                    <Form
                        name="normal_login"
                        className="login-form mt-2"
                        initialValues={{ remember: true }}
                        onFinish={formik.handleSubmit}
                        dir='ltr'
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: activeTab == '1' ? 'Please enter your email!' : 'Please enter your phone number!'
                                },
                            ]}
                        >

                            <Input
                                size="large"
                                type={activeTab === '1' ? "email" : 'number'}
                                prefix={activeTab === '1' ? <UserOutlined className="site-form-item-icon" /> : <PhoneOutlined />}
                                placeholder={activeTab == "1" ? 'Email' : 'Phone number'}
                                id="email"
                                onBlur={formik.handleBlur}
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    formik.setFieldValue("email", inputValue);
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your password!',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="password"
                                size='large'
                                className='mt-2'
                                id="password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox onChange={e => {
                                    setChecked(e.checked)
                                }} checked={false} >Remember me</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <div className="w-100">
                                <Button type="primary" loading={loademail} htmlType="submit" className="login-form-button w-full" >
                                    Log in
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        </>
    )
}

export default Login;