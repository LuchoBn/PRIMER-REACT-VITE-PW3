import PropTypes from 'prop-types';


function Item({ nome, categoria, preco, avaliacao, disponibilidade, anoLancamento }) {
    return (
      <div>
        <ul>
          <li>{nome} - {categoria} - {preco} - {avaliacao} - {disponibilidade} - {anoLancamento}</li>
        </ul>
      </div>
    );
  }
  Item.propTypes = {
    nome: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired,
    avaliacao: PropTypes.string.isRequired,
    disponibilidade: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
  }
export default Item