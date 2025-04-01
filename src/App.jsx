
import HelloWord from './components/HelloWorld'
import './App.css'

function App() {
  const name = 'Luis Daniel'
  const url = 'https://joov.com.br/images/10-beneficios-do-abacate-que-voce-provavelmente-nao-sabia-image.jpg'
  return (
    <>
      <div className='App'>
      <h1>Meu APP</h1>
      <p>Beleza {name}</p>
      <img src={url} alt= "imagem de abacate"/>
      <HelloWord/>
      </div>
    </>
  )
}

export default App
