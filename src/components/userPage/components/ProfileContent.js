import React from 'react';
import { Col, Row } from 'antd';

import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

class ProfileContent extends React.Component {
    render() {
        return(
            <div style={{ padding: 60 }}>
                <Row type="flex" justify="start" gutter={3}>
                    <Col span={6}><UserAvatar /></Col>
                    <Col span={14} style={{ textAlign: 'left' }} end="xs"><UserInfo /></Col>
                </Row>
            </div>
        )
    }
}

export default ProfileContent;
