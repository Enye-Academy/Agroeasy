import React from 'react';
import { Avatar, Col, Divider, Layout, List, Row } from 'antd';

import { CONTACT, DATA, LOCATION, USER_PAGE } from './constants';

const { Content } = Layout;
const { CLASSNAMES: { BASIC_INFO, CONTACT_INFO, LOCATION_INFO, PROFILE_INFO, INFO_ROW, INFO_LAYOUT,
    USER_INFO_CONTENT },
STRINGS: { CENTER, FLEX, ITEM_LAYOUT, ORIENTATION },
TEXTS: { BASIC_INFO_TEXT, CONTACT_INFO_TEXT, LOCATION_INFO_TEXT } } = USER_PAGE;

export default class UserInfo extends React.Component {
    render() { 
        return(
            <Layout className={INFO_LAYOUT}>
                <Content className={USER_INFO_CONTENT}>
                    <div className="avatar">
                        <Avatar
                            size={150} shape="circle"
                            src="./images/josh.jpg"
                        />
                    </div>
                    <Row className={INFO_ROW} type={FLEX} justify={CENTER}>
                        <Col span={6} className={BASIC_INFO}>
                            <Divider orientation={ORIENTATION}>{BASIC_INFO_TEXT}</Divider>   
                            <List
                                itemLayout={ITEM_LAYOUT}
                                dataSource={DATA}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            className={PROFILE_INFO}
                                            title={item.BasicInfo}
                                            description={item.description}
                                        /> 
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={6} className={CONTACT_INFO}>
                            <Divider orientation={ORIENTATION}>{CONTACT_INFO_TEXT}</Divider>
                            <List 
                                itemLayout={ITEM_LAYOUT}
                                dataSource={CONTACT}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            className={PROFILE_INFO}
                                            title={item.contact}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={6} className={LOCATION_INFO}>
                            <Divider orientation={ORIENTATION}>{LOCATION_INFO_TEXT}</Divider>
                            <List 
                                itemLayout={ITEM_LAYOUT}
                                dataSource={LOCATION}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            className={PROFILE_INFO}
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
