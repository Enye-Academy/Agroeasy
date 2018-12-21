import React from 'react';
import { Avatar, Card } from 'antd';

import { DATA, USER_PAGE } from './constants';

const { Meta } = Card;
const { CLASSNAMES: { BASIC_INFO,HEADER_TITLE }, 
    STRINGS: { SQUARE },
    TEXTS: { CONTACT_INFO_TEXT } } = USER_PAGE;

class UserAvatar extends React.Component {
    render() {
        return(
            <div>
                <Avatar src="./images/josh.jpg" size={170} shape={SQUARE} />
                <Card  bordered={false} > 
                    <Meta 
                        title={<h4 className={HEADER_TITLE}>{CONTACT_INFO_TEXT}</h4>}
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

