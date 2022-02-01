import React,{createElement} from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
  SettingOutlined,
} from '@ant-design/icons';
import { useState } from 'react/cjs/react.development';
import SubMenu from 'antd/lib/menu/SubMenu';
import '../app.css';
import { CgMenuRight } from 'react-icons/cg'
import { MdPermIdentity } from 'react-icons/md'


const { Header, Sider, Content } = Layout;

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
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <div className="logo">
            <img src="/assets/images/pms-lg.png" className='logo-img' alt="" srcset="" />
          </div>
          <Menu mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<MdPermIdentity className='person-icon' />}>
              nav 1
            </Menu.Item>
            <SubMenu key="sub1" icon={<SettingOutlined />} title="Navigation Three">
                <Menu.Item key="system">System Settings</Menu.Item>
                <Menu.Item key="general">General Settings</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background-header" style={{ padding: 0 }}>
            {createElement(state.collapsed ? CgMenuRight : CgMenuRight, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 280,
            }}
          >
              <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>content</Breadcrumb.Item>
            </Breadcrumb>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
  export default Dashboard;