import React from 'react';
import { Layout } from 'antd';

import Navbar from './Navbar';
import Options from './Sider';

const { Content, Header, Sider } = Layout;

//this is the userpage component
class UserPage extends React.Component {
    render() {
        return(
            <div className="sm-heading">
                <Navbar />
                <Header className="sm-heading">
                    <div style={{ marginTop: "20px" }}>My AgroEasy</div>
                </Header>
                <Layout className="main-layout">
                    <Sider className="sider"><Options /></Sider>
                    <Content className="content">Content</Content>
                </Layout>
            </div>
        );
    }
}

export default UserPage;
