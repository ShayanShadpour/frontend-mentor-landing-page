import Header from './components/Header'
import Showcase from './components/Showcase'
import Interactive from './components/Interactive'
import Creations from './components/Creations'
import CreationsDesktop from './components/CreationsDesktop'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <Header/>
        <Showcase/>
        <Interactive/>
        <Creations/>
        <CreationsDesktop/>
        <Footer/>
    </div>
  );
}

export default App;
