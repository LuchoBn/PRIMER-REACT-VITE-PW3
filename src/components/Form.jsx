import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const cadastrarUsuario = (event) => {
    event.preventDefault();
    console.log(`Usuário ${name} cadastrado com a senha: ${password}`);
  };

  
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f8f8f8",
      fontFamily: "system-ui, -apple-system, sans-serif"
    },
    form: {
      width: "320px",
      padding: "32px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)"
    },
    title: {
      textAlign: "center",
      color: "#222",
      marginBottom: "24px",
      fontSize: "20px",
      fontWeight: "500"
    },
    inputGroup: {
      marginBottom: "16px"
    },
    label: {
      display: "block",
      marginBottom: "6px",
      color: "#444",
      fontSize: "14px"
    },
    input: {
      width: "100%",
      padding: "8px 12px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      boxSizing: "border-box"
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={cadastrarUsuario} style={styles.form}>
        <h1 style={styles.title}>Meu Cadastro</h1>
        
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Form;