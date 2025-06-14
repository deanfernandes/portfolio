import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import SettingsBar from './components/SettingsBar'

function App() {
  return (
    <>
      <SettingsBar/>
      <Header/>
      <Main/>
      <Footer name={'Dean Fernandes'}/>
    </>
  )
}

export default App
