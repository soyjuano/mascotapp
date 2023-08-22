import './App.css';
import { BrowserRouter as Router, Route , Routes, Switch } from 'react-router-dom';
import Footer from './components/public/Footer';
import Main from './components/public/Main';
import Navbar from './components/public/Navbar';
import UserForm from './components/public/UserForm';
import Detail from './components/public/Detail';
import PageNotFound from './components/public/PageNotFound';

function App() {
  return (
    <div>
      
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />}  ></Route>
          <Route exact path="/user-form" element={<UserForm />}  ></Route>
          <Route exact path="/detail/:id" element={<Detail />}  ></Route>
          {/* definir este llamado a pagina PageNotFound */}
          <Route exact path ="PageNotFound" element={<PageNotFound/>} ></Route>  
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
