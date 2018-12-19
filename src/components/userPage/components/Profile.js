import React from 'react';
import { Avatar, Card, Col, Row, Divider } from 'antd';

import { CONTACT, DATA, LOCATION } from './constants';

const { Meta } = Card;

export default class Profile extends React.Component {
    render() {
        return (
            <Card 
                title={<h4>User Profile</h4>} 
                style={{ backgroundColor: 'MidnightBlue', width: 1000  }}
            >
                <div style={{  padding: '10px' }}>
                    <Row>
                        <Col span={7}>
                            <Card  bordered={false} > 
                                <Meta style={{ marginLeft: 18 }}
                                    title={<Avatar src="./images/josh.jpg"
                                        size={170} shape="square"
                                    />
                                    }
                                   
                                    description={
                                        DATA.map(data => (
                                            <div key={data.title} style={{ marginTop: 15, paddingTop: 12 }}>
                                                <b>{data.title}</b>
                                                <div style={{ float: 'right' }}>{data.description}</div>
                                            </div>
                                        ))
                                    }
                                />
                            </Card>
                        </Col>
                        <Col span={17} style={{ marginRight: -20 }}>
                            <div >
                                <Card  
                                    bordered={false}
                                >
                                    <Meta
                                        style={{ marginBottom: 35 }}
                                        title={<h4>Contact Info</h4>}
                                        description={
                                            CONTACT.map(contact => (
                                                <div key={contact.title} style={{ marginTop: 15 }}>
                                                    <b>{contact.title}</b>                                       
                                                    <div style={{ float: "right" }}>
                                                        {contact.description}
                                                    </div>
                                                </div>
                                            ))  
                                        }
                                    />
                                    <Divider />
                                    <Meta  
                                        style={{ marginTop: 35 }}
                                        title={<h4>Location</h4>}
                                        description={
                                            // <Table columns={columns} dataSource={data} 
                                            //   size="small" bordered={false} pagination={false} row={false}
                                            // />
                                            LOCATION.map(location => (
                                                <div key={location.title} style={{ marginTop: 15 }}>
                                                    <b>{location.title}</b>                                       
                                                    <div style={{ float: "right", paddingLeft: 20 }}>
                                                        {location.description}
                                                    </div>
                                                </div>
                                            ))  
                                        }
                                    />
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Card>
        );
    }
}

