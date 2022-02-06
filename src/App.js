import './App.css';
import {Navigate, useRoutes} from "react-router-dom";
import 'antd/dist/antd.min.css';
import Login from './views/auth-views/authentication/Login/Login';
import Register from './views/auth-views/authentication/Register/Register';
import AuthSuccess from './views/auth-views/authentication/AuthSuccess/AuthSuccess';
import Dashboard from './views/app-views/Dashboard/Dashboard';


const App = () => {
  const user =localStorage.getItem('c-access-com')

  const routes = useRoutes([
    { path: "/login",  element: <Login/>},
    { path: "/register",  element: <Register/>},
    { path: "/auth-success",  element: user? <AuthSuccess/>: <Navigate to="/login"/>},
    { path: '*', element: user ? <Dashboard />: <Navigate to="/login"/> }
  ]);

  return [routes]
  
};

 


export default App;



