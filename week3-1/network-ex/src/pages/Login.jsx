import { useState } from 'react';
import axios from 'axios';
import TextComponent from '../shared/components/TextComponent';
import simpleHttpRequest from '../shared/network/request';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        access_token: ""
    });
    
    const handleIdInputChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            email: e.target.value
        });
    }

    const handlePasswordInputChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            access_token: e.target.value
        });
    }

    const handleClickLoginButton = async () => {
        const res = await simpleHttpRequest('GET', 'users/0');
        
        if (res.status === 200) {
            localStorage.setItem(res.data.email, res.data.access_token);
        }

        console.log(res);

        setLoginInfo({
            email: "",
            access_token: ""
        });
    }

    const handleClickSaveButton = () => {
        localStorage.setItem("email", loginInfo.email);
    }
    
    const handleClickClearButton = () => {
        localStorage.clear();
    }

    return (
        <div>
            <h1>로그인</h1>
            <form className='login-form'>
                <label>
                    이메일
                    <TextComponent inputType={"text"} text={loginInfo.email} changeTextFn={handleIdInputChange}/>
                </label>
                <label>
                    비밀번호
                    <TextComponent inputType={"password"} text={loginInfo.access_token} changeTextFn={handlePasswordInputChange}/>
                </label>
                <button type="button" onClick={handleClickLoginButton}>로그인</button>
                <button type="button" onClick={handleClickSaveButton}>이메일 저장하기</button>
                <button type="button" onClick={handleClickClearButton}>모두 지우기</button>
            </form>
        </div>
    );
}

export default Login;