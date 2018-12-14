import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import UserInfo from './UserInfo';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class SideMenu extends React.Component {
    render() {
        return(
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ background: '#fff',  padding: '24px 0' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="info-circle" />Account Info</span>}>
                                    <Menu.Item key="1">option1</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="5"><span><Icon type="message" />Messages</span></Menu.Item>
                                <SubMenu key="sub3" title={<span><Icon type="notification" />Notification</span>}>
                                    <Menu.Item key="9">New Uploads</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="shopping" />Purchases</span>}>
                                    <Menu.Item key="9">Purchased Items</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="folder" />Saved Items</span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="setting" />Settings</span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                </SubMenu>
                                <Menu.Item><span><Icon type="solution" />Help</span></Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{ minHeight: 280, padding: '0 24px' }}>
                            <UserInfo />
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        );
    }
}
