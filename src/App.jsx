// Imports | React router
// __________________________________________________
import { Route, Routes } from 'react-router-dom';

// CSS | My
// __________________________________________________
import './styles/App.scss';

// Imports | Pages, Layout
// __________________________________________________
import { HomePage } from './pages';
import Layout from './layout/Layout';

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