import BackToTop from 'src/components/BackToTop';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Router from 'src/Router/';

const App = () => {
  return (
    <div className="overflow-hidden">
      <BackToTop />
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
