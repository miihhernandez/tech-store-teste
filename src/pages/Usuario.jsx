import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from '../components/Button/ButtonPrimary';
import useAuth from '../context/useAuth';
import styles from './Usuario.module.css'

const Usuario = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();
  
    return (
        <div className={styles.container}>
          <h2 className="usuario-title">Página de usuario.</h2>
          <ButtonPrimary text='Sair' onClick={() => [signout(), navigate("/")]}/>
      </div>
    );
  };
  
  export default Usuario;