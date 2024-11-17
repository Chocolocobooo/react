import './App.css'
import Brands from './components/Brands'
import Carousel from './components/Carousel'
import ClientTest from './components/ClientTest'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Sub from './components/Sub'
import Tips from './components/Tips'

function App() {


  return (
    <div className='wrapper'>
      <Header />
      <main id="main">
        <Hero />
        <Brands />
        <Features />
        <Carousel />
        <Tips />
        <ClientTest />
        <FAQ />
        <Sub />
        <Footer />
      </main>
    </div>
    
  )
}

export default App
