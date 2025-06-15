import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'
import SettingsBar from './components/SettingsBar'
import BackToTopButton from './components/BackToTopButton'

function App() {
  return (
    <>
      <SettingsBar/>
      <Header/>
      <Content/>
      <Footer name={'Dean Fernandes'}/>
      <BackToTopButton/>
    </>
  )
}

export default App
