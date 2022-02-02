import {useRoutes} from "react-router-dom";
import 'antd/dist/antd.min.css';
import CompleteProfile from './CompleteProfile.js/CompleteProfile';
import SystemSettings from './Settings/System-Settings/System';
import GeneralSettings from './Settings/General-Settings/GeneralSettings';
import PersonalSettings from './Settings/PersonalSettings';


const MiniRoutes = () => {
  
  const routes = useRoutes([
    { path: "/",  element: <CompleteProfile/>},
    { path: "/settings/system",  element: <SystemSettings/>},
    { path: "/settings/general",  element: <GeneralSettings/>},
    { path: "settings/general/personal-settings",  element: <PersonalSettings/>},
  ]);

  return routes
};

 


export default MiniRoutes;



