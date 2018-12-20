import React from 'react';
import { Avatar, Card, Divider } from 'antd';

import { CONTACT, DATA, LOCATION, USER_PAGE } from './constants';

const { Meta } = Card;
const { CLASSNAMES: { BASIC_INFO, DATA_TITLE, HEADER_TITLE, INNER_CARD },
    TEXTS: { CONTACT_INFO_TEXT, LOCATION_INFO_TEXT },
    STRINGS: { SQUARE },
} = USER_PAGE;

export default class ProfileContent extends React.Component {
    render() {
        return (
            <div style={{ border: 40, marginTop: '30px' }}>
                <div /*className={INNER_CARD}*/>
                    <Card  bordered={false} > 
                        <Meta title={<Avatar src="./images/josh.jpg"
                            size={170} shape={SQUARE}
                        />}
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
                <div>  
                    <Card  style={{ float: 'right' }}
                        bordered={false}
                    >
                        <Meta
                            title={<h4 className={HEADER_TITLE}>{CONTACT_INFO_TEXT}</h4>}
                            description={
                                CONTACT.map(contact => (
                                    <div key={contact.title} className={DATA_TITLE}>
                                        <b>{contact.title}</b>                                       
                                        <div>
                                            {contact.description}
                                        </div>
                                    </div>
                                ))  
                            }
                        />
                        <Divider />
                        <Meta  
                            style={{ marginTop: 35 }}
                            title={<h4 className={HEADER_TITLE}>{LOCATION_INFO_TEXT}</h4>}
                            description={
                                LOCATION.map(location => (
                                    <div key={location.title} className={DATA_TITLE}>
                                        <b>{location.title}</b>                                       
                                        <div>
                                            {location.description}
                                        </div>
                                    </div>
                                ))  
                            }
                        />
                    </Card>
                </div>
            </div>
        );
    }
}

