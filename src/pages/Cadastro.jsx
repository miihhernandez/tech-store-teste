import React from 'react';
import { useState } from 'react';
import ButtonPrimary from '../components/Button/ButtonPrimary';
import Input from '../components/Form/Input';
import styles from './Cadastro.module.css'
import { useNavigate } from "react-router-dom";
import useAuth from '../context/useAuth';
import InputSenha from '../components/Form/InputSenha';

function Cadastro() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { Cadastro } = useAuth();
  
    const handleCadastro = () => {
      if (!user | !email | !emailConf | !password) {
        setError("*Preencha todos os campos");
        return;
      } else if (email !== emailConf) {
        setError("*Os e-mails não são iguais");
        return;
      }
     
  
      const res = Cadastro(user, email, password);
  
      if (res) {
        setError(res);
        return;
      }
      
  
      alert("Usuário cadastrado com sucesso!");
      navigate("/login");
    };
  


    return (
        <div className={styles.container}>
        <div className={styles.container.cadastro}>
        <form className="cadastro-form">
        <h2 className="cadastro-form-title">Faça o seu cadastro.</h2>
        <div className="user-input">
              <Input
               label="Nome:"
                type="text"
                placeholder=""
                value={user}
                onChange={(e) => [setUser(e.target.value), setError("")]}
              />
            <div className="email-input">
              <Input
               label="Email:"
                type="email"
                placeholder=""
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
              />
            <div className="EmailConf-input">
              <Input
              label="Confirmar Email:"
               type="emailConf"
               placeholder=""
               value={emailConf}
               onChange={(e) => [setEmailConf(e.target.value), setError("")]}
              />
            </div>
            </div>
            <div className="password-input">
              <InputSenha
              label="Senha:"
               type="password"
               placeholder=""
               value={password}
               onChange={(e) => [setPassword(e.target.value), setError("")]}
              />
            </div>

            <div className="labelError">{error}</div>
            <div className="container-login-form-btn">
              <ButtonPrimary text='Cadastre-se' onClick={handleCadastro}/>
            </div>
            

            <div className="text-center">
              <span className="txt1">Já possui conta? </span>
              <a className="txt2" href="login">
                Fazer login
              </a>
              </div>
            </div>
            </form>
            </div>
            </div>

   
    )
};

export default Cadastro;
