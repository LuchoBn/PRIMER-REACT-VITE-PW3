import React, { useState } from 'react';
import './styles/Calculadora.css';
const Calculadora = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const calculateResult = () => {
        try {
            setResult(eval(input)); 
        } catch (error) {
            setResult('Error');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult(null);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Calculadora Básica</h2>
            <input
                type="text"
                value={input}
                onChange={handleInput}
                placeholder="Ingresa operación"
                style={{ width: '200px', padding: '5px' }}
            />
            <div style={{ margin: '10px' }}>
                <button onClick={calculateResult} style={{ marginRight: '5px' }}>
                    Calcular
                </button>
                <button onClick={clearInput}>Limpiar</button>
            </div>
            {result !== null && <h3>Resultado: {result}</h3>}
        </div>
    );
};

export default Calculadora;