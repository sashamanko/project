// CSS | My
// __________________________________________________
import Buttons from './components/ui/Buttons/Buttons.ui';
import './styles/App.scss';
import Header from './components/Header/Header';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.page';

const App = () => {

  return (
    <Routes>
      <Route path='' element={<Layout/>}>
        <Route path='' element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;