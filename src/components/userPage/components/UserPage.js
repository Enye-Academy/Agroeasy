import React from 'react';
import { Avatar, Divider, Layout, List } from 'antd';

import Navbar from './Navbar';
import Options from './Options';
import  { FAKE_USER } from './constants';
import SiderDemo from './Sider';

const { Content, Header, Sider } = Layout;
const { address, city, country, email, firstName, gender, lastName, phoneNumber } = FAKE_USER;

//this is the userpage component
class UserPage extends React.Component {
    render() {   
        const DATA = [
            {
                description: firstName, title: 'Firstname:',
            },
            {
                description: lastName, title: 'Lastname:',
            },
            {
                description: email, title: 'Email:',
            },
            {
                description: gender, title: 'Gender:',
            },
            {
                description: address, title: 'Address:',
            },
            {
                description: city, title: 'City:',
            },
            {
                description: country, title: 'Country',
            },
            {
                description: phoneNumber, title: 'Phone:', 
            },
        ];
        return(
            <Layout className="sm-header">
                <Navbar />
                <Header className="sm-header">
                   
                    <span className="sm-header-div">My AgroEasy</span>
                </Header>
                <Layout className='big-box'>
                    <Sider className="left-sider"><SiderDemo /></Sider>
                    <Content>
                        <div className="right-sider">
                            <div className="profile-pix">
                                <Avatar
                                    size={210} shape="circle"
                                    src="./images/josh.jpg" 
                                />
                            </div>
                         
                            <div className="user-profile">
                                <Divider orientation="left">Basic Info</Divider>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={DATA}
                                    size="small"
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={item.title} 
                                                description={item.description}
                                                style={{ margin: "-5px" }}
                                            />
                                        </List.Item>
                                    )}
                                /><Divider orientation="left">Basic Info</Divider>
                            </div>
                        </div> 
                    </Content>
                </Layout>
                <SiderDemo />
            </Layout>
        );
    }
}

export default UserPage;
