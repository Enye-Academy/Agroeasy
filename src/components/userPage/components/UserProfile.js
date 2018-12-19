import React from 'react';
import { Layout, Menu, Icon } from 'antd';

import Profile from './Profile';

const { Content, Sider } = Layout;

export default class UserProfile extends React.Component {
    render() {
        return(
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <Layout style={{ background: '#fff',  padding: '24px 0' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >   
                                <Menu.Item><span><Icon type="info-circle" />Account Info</span></Menu.Item>
                                <Menu.Item key="5"><span><Icon type="message" />Messages</span></Menu.Item>                        
                                <Menu.Item><span><Icon type="notification" />Notifications</span></Menu.Item>             
                                <Menu.Item><span><Icon type="shopping" />Purchases</span></Menu.Item>          
                                <Menu.Item><span><Icon type="folder" />Saved Items</span></Menu.Item>
                                <Menu.Item><span><Icon type="setting" />Settings</span></Menu.Item>
                                <Menu.Item><span><Icon type="solution" />Help</span></Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{ minHeight: 280, padding: '0 24px' }}>
                            <Profile />
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        );
    }
}
