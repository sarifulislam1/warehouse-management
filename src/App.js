import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import ManageInventories from './components/ManageInventories/ManageInventories';
import MyItems from './components/MyItems/MyItems';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import UpdateItem from './components/UpdateItem/UpdateItem';

// https://stackoverflow.com/questions/72055776/how-to-show-firebase-auth-error-messages-different-in-ui

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/manage-inventories' element={
          <PrivateRoute>
            <ManageInventories></ManageInventories>
          </PrivateRoute>
        }></Route>
        <Route path='/my-items' element={
          <PrivateRoute>
            <MyItems></MyItems>
          </PrivateRoute>
        }></Route>
        <Route path='/update-item' element={<PrivateRoute>
          <UpdateItem></UpdateItem>
        </PrivateRoute>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
