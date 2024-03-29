import React from 'react';
import { useState } from 'react';
import ButtonPrimary from '../components/Button/ButtonPrimary';
import InputSenha from '../components/Form/InputSenha';
import Input from '../components/Form/Input';
import styles from './Login.module.css'
import { useNavigate } from "react-router-dom";
import useAuth from '../context/useAuth';

const Login = () => {
  const { Login } = useAuth();
  const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

    const handleLogin = () => {
      if (!email | !password) {
        setError("*Preencha todos os campos");
        return;
      }
  
      const res = Login(user, email, password);
  
      if (res) {
        setError(res);
        return;
      }
  
      navigate("/login/usuario");
    };


    return (
        <div className={styles.container}>
        <div className={styles.container.login}>
        <form className="login-form">
        <h2 className="login-form-title"> Bem vindo de volta! </h2>
        <div className="user-input">
              
        <div className="email-input">
              <Input
              label="Email:"
               type="email"
               placeholder=""
               value={email}
               onChange={(e) => [setEmail(e.target.value), setError("")]}
              />
            </div>
            <div className="password-input">
              <InputSenha
                label="Senha:"
                type="password"
                placeholder=""
                onChange={(e) => [setPassword(e.target.value), setError("")]}
              />
        </div>

            <div className="labelError">{error}</div>
            <div className="container-login-form-btn">
              <ButtonPrimary text='Entrar' onClick={handleLogin}/>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="cadastro">
                Criar conta
              </a>
              </div>
            </div>
            </form>
            </div>
            </div>
    
   
    )
};

export default Login;
