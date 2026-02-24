import { Navigate, Route, Routes } from 'react-router-dom';
import Conduct from 'src/Pages/Conduct';
import FAQ from 'src/Pages/FAQ';
import Home from 'src/Pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conduct" element={<Conduct />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
