import Countdown from 'components/countdown/Countdown';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Navbar from 'components/navbar/Navbar';
import Use from 'components/use/Use';
import './sass/App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GroupStage from 'components/group-stage/GroupStage';
import NavbarPrediction from 'components/navbar/NavbarPrediction';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Home */}
          <Route path='/' element={
            <>
              <Navbar />
              <Header />
              <Countdown />
              <Use />
              <Footer />
            </>
          } />

          <Route path='/prediction/group-stage' element={
            <>
              <NavbarPrediction path={'/prediction/group-stage'}/>
              <GroupStage />
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
