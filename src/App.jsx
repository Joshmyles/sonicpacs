import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Headline from './components/Headline';
import HeroImage from './components/HeroImage';
import KeyFeatures from './components/KeyFeatures';
import Specifications from './components/Specifications';
import Advantages from './components/Advantages';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen overflow-y-auto overflow-x-hidden">
        <Routes>
          <Route index path="/home" id="header" element={<Header />}></Route>
          <Route path="/" element={<Header />}></Route>
          <Route path="/headline" id="headline" element={<Headline />}></Route>
        </Routes>
        <Headline />
        <HeroImage />
        <Specifications />
        <Advantages />
        <KeyFeatures />
        <CallToAction />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default App;
