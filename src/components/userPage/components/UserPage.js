import React from 'react';
import { Col, Row, Layout } from 'antd';

import Navibar from '../../home/components/Navibar';
import Options from './Sider';

const { Content, Header, Sider } = Layout;

//this is the userpage component
class UserPage extends React.Component {
    render() {
        return(
            <div>
                <Navibar />
                <Navibar />
                <Layout className="main-layout">
                    <Header className="nav-header"><Navibar /></Header>
                    <Layout>
                        <Sider className="sider"><Options /></Sider>
                        <Content className="content">Content</Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default UserPage;
