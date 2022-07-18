import React, { memo,useState } from 'react'

import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import {LoginForm} from './cpns/form'
import { LoginWrapper } from './style';
import loginLeft from "@/assets/img/login_left.png";
import logo from "@/assets/img/logo.png";
const Login = memo(() => {
    const navigate = useNavigate();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [register,setregister]=useState(false)
    const onFinish = async ({username,password}) => {
		try {
			setLoading(true);
			loginForm.password = md5(loginForm.password);
			const { data } = await loginApi(loginForm);
			props.setToken(data?.access_token);
			props.setTabsList([]);
			message.success("登录成功！");
			navigate(HOME_URL);
		} finally {
			setLoading(false);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
  return (
    <LoginWrapper>
			<div className="login-box">
				<div className="login-left">
					<img src={loginLeft} alt="login" />
				</div>
				<div className="login-form">
					<div className="ml-96 text-2xl cursor-pointer font-bold col-span-5" onClick={()=>setregister(!register)}>{register?"注册":"登录"}</div>
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<span className="logo-text">Medical-Admin</span>
					</div>
					<LoginForm loginstate={register} />
				</div>
			</div>
	</LoginWrapper>
  )
})

export default Login