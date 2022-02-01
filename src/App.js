import './App.css';
import {useRoutes} from "react-router-dom";
import 'antd/dist/antd.min.css';
import Login from './views/auth-views/authentication/Login/Login';
import Register from './views/auth-views/authentication/Register/Register';
import AuthSuccess from './views/auth-views/authentication/AuthSuccess/AuthSuccess';
import Dashboard from './views/app-views/Dashboard/Dashboard';


const App = () => {
  const routes = useRoutes([
    { path: "/login",  element: <Login/>},
    { path: "/register",  element: <Register/>},
    { path: "/auth-success",  element: <AuthSuccess/>},
    { path: "/dashboard",  element: <Dashboard/>},
  ]);


  return routes
};

 


export default App;



