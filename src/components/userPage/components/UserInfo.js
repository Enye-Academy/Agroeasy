import React from 'react';
import { Avatar, Col, Divider, Layout, List, Row } from 'antd';


import { FAKE_USER } from './constants';

const { Content } = Layout;
const { address, city, country, email, firstName, gender, lastName, phoneNumber } = FAKE_USER;

export default class UserInfo extends React.Component {
    render() { 
        const data = [
            {
                BasicInfo: 'Firstname',  description: firstName,
            },
            {
                BasicInfo: 'Lastname',  description: lastName,
            },
            {
                BasicInfo: 'Gender',   description: gender,
            },
        ];
        const contact = [
            {
                contact: "Address", description: address,
            },
            {
                contact: "Email",   description: email,
            },
            {
                contact: "PnoneNumber", description: phoneNumber,
            },
        ];

        const location = [
            {
                description: "Lagos", title: city,
            },
            {
                description: "Nigeria", title: country,
            },
        ];
        return(
            <Layout className="user-info-layout">
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="avatar" style={{  }}>
                        <Avatar
                            size={150} shape="circle"
                            src="./images/josh.jpg"
                        />
                    </div>
                    <Row className="user-info-row" type="flex" justify="center">
                        <Col span={6} style={{ marginRight: "100px" }}>
                            <Divider orientation="left">Basic Info</Divider>   
                            <List divider="disabled"
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            className="profile-info"
                                            title={item.BasicInfo}
                                            description={item.description}
                                        /> 
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={6} style={{ marginRight: "10px" }}>
                            <Divider orientation="left">Contact Info</Divider>
                            <List 
                                itemLayout="horizontal"
                                dataSource={contact}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            className="profile-info"
                                            title={item.contact}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={6} style={{ marginLeft: '60px' }}>
                            <Divider orientation="left">Location</Divider>
                            <List 
                                itemLayout="horizontal"
                                dataSource={location}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            className="profile-info"
                                            title={item.title}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}
