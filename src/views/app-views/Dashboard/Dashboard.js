import React,{createElement} from 'react';
import { Layout, Menu } from 'antd';
import {
  SettingOutlined,
} from '@ant-design/icons';
import { useState } from 'react/cjs/react.development';
import SubMenu from 'antd/lib/menu/SubMenu';
import '../../../css/app-view.css';
import { CgMenuRight } from 'react-icons/cg'
import { MdPermIdentity } from 'react-icons/md'
import MiniRoutes from '../miniRoute';
import { Link } from 'react-router-dom';
import { FaBell,FaSistrix, FaUserAlt } from "react-icons/fa";

const { Header, Sider } = Layout;

const Dashboard = () =>  {
    const [state, setState] = useState({
        collapsed: false,
    })
 
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

    return (
      <Layout className='layout'>
        <Sider trigger={null} collapsible collapsed={state.collapsed} className='sider-menu'>
          <div className="logo">
            <img src="/assets/images/pms-lg.png" className='logo-img' alt="" srcset="" />
          </div>
          <Menu mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<MdPermIdentity className='person-icon' />}>
              <Link to='/'>Dashboard</Link>  
            </Menu.Item>
            <SubMenu key="sub1" icon={<SettingOutlined  className='settings-icon'/>} title="Setings" className='settings'>
                <Menu.Item key="system"> <Link to='/settings/system'>System Settings</Link></Menu.Item>
                <Menu.Item key="general"><Link to='/settings/general'>General Settings</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background-header">
            
            {createElement(state.collapsed ? CgMenuRight : CgMenuRight, {
              className: 'trigger',
              onClick: toggle,
            })}
            <div className="layout-header-mini-container">
              <div className="search-button-container">
               <FaSistrix className='notify-user-icon search-icon'/>
               <input type="search" className='search' id="search" placeholder='Search' name="search"></input>
              </div>
              <div className="notification-user-container">
                <div className="notification"><FaBell className='notify-user-icon' notification-icon/></div>
                <div className="user-notification"><FaUserAlt className='notify-user-icon user-icon-one'/></div>
              </div>
            </div>
           
          </Header>
          <MiniRoutes/>
        </Layout>
      </Layout>
    );
  }
  export default Dashboard;