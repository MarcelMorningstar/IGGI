// Import styles
import './styles/App.scss'

// Import components 
import Navbar from './components/Navbar'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './components/About'
import Gallery from './components/Gallery'
import Slogan from './components/Slogan'
import Frame from './components/Frame'
import Image from './components/Image'
import Footer from './components/Footer'

// Import images
import img1 from './images/background-2.jpg'
import img2 from './images/background-3.jpg'
import img3 from './images/background-4.jpg'
import img4 from './images/background-5.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Frame id="Menu"><Menu title="Menu"/></Frame>
      <Image imgUrl={img1} />
      <Frame id="About"><About /></Frame>
      <Image imgUrl={img2} />
      <Frame id="Gallery"><Gallery title="Gallery" /></Frame>
      <Image imgUrl={img3} />
      <Frame id="Slogan"><Slogan title="IGGI" subtitle="BAR & CHOPS" paragraph="A Unique Experience In Our Restaurant & Bar." /></Frame>
      <Image imgUrl={img4} />
      <Footer copyright="• © IGGI 2021 •" text="We invite you to visit us" />
    </div>
  )
}

export default App
