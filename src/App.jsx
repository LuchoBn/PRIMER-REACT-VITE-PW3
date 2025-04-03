import Header from './components/Header'
import HelloWord from './components/HelloWorld'
import Pessoa from './components/Pessoa'
import './App.css'
import imgGh from './imagems/imagem.png'
import Footer from './components/footer'
import Calculadora from './components/Calculadora'
import Beatriz from './imagems/Beatriz.png'
function App() {
   return (
    <>
      <div className='App'>
      <Header/>
      <HelloWord/>
      <Calculadora/>
    <div className='pessoas-container'>
      <Pessoa
      nome='Beatriz'
      idade='20 anos'
      profissao='estudante'
      foto={Beatriz}
      imgWidth="250px"
      imgHeight="350px"
      />
      <Pessoa
        nome='Luis Daniel'
        idade='25 anos'
        profissao='estudante'
        foto={imgGh}
        imgWidth="250px"
        imgHeight="350px"
      /></div>
      <Footer/>
      </div>
    </>
  )
}

export default App
