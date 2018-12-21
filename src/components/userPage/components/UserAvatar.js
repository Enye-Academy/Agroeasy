import React from 'react';
import { Avatar, Card } from 'antd';

import { DATA, USER_PAGE } from './constants';

const { Meta } = Card;
const { CLASSNAMES: { BASIC_INFO,HEADER_TITLE }, 
    STRINGS: { SQUARE },
    TEXTS: { BASIC_INFO_TEXT } } = USER_PAGE;

class UserAvatar extends React.Component {
    render() {
        return(
            <div>
                <Avatar src="./images/josh.jpg" size={170} shape={SQUARE} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                <Card bordered={false}   style={{ margin: -25, paddingTop: 24 }}> 
                    <Meta 
                        title={<h4 className={HEADER_TITLE}>{BASIC_INFO_TEXT}</h4>}
                        description={
                            DATA.map(data => (
                                <div key={data.title} className={BASIC_INFO}>
                                    <b>{data.title}</b>
                                    <div>{data.description}</div>
                                </div>
                            ))
                        }
                    />
                </Card>
            </div>
        );
    }
}
export default UserAvatar;

