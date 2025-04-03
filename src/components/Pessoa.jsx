
function Pessoa({ nome, idade, profissao, foto, imgWidth, imgHeight }) {
    return (
      <div>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        <img 
          src={foto} 
          alt="Foto de perfil" 
          style={{ 
            width: imgWidth || '200px',
            height: imgHeight || 'auto' 
          }}
        />
      </div>
    );
  }
export default Pessoa