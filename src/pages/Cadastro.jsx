import React from 'react';
import { useState } from 'react';
import ButtonPrimary from '../components/Button/ButtonPrimary';
import Input from '../components/Form/Input';
import styles from './Cadastro.module.css'

function Cadastro() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailConf, setEmailConf] = useState("");

    return (
        <div className={styles.container}>
        <div className={styles.container.cadastro}>
        <form className="cadastro-form">
        <h2 className="cadastro-form-title">Faça o seu cadastro.</h2>
        <h5>Preencha os campos abaixo com os seus dados.</h5>
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
              <Input
              label="Senha:"
               type="password"
               placeholder=""
               value={password}
               onChange={(e) => [setPassword(e.target.value), setError("")]}
              />
            </div>
            
            <div className="container-login-form-btn">
              <ButtonPrimary text='Entrar'/>
            </div>
            

            <div className="text-center">
              <span className="txt1">Já possui conta? </span>
              <a className="txt2" href="login">
                Fazer login
              </a>
            </div>
            </form>
            </div>
            </div>
   
    )
};

export default Cadastro;
