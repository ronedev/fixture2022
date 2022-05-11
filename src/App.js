import Countdown from 'components/countdown/Countdown';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Navbar from 'components/navbar/Navbar';
import Use from 'components/use/Use';
import './sass/App.scss'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Countdown />
      <Use />
      <Footer />
    </>
  );
}

export default App;
