import React from 'react';
import styles from './InputSenha.module.css';

function InputSenha({ label, id, onChange, value, placeholder}) {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        type="password"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputSenha;
