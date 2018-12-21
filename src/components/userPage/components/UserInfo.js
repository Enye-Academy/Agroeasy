import React from 'react';
import { Card, Divider } from 'antd';

import { CONTACT, LOCATION, USER_PAGE } from './constants';

const { Meta } = Card;
const { CLASSNAMES: { DATA_TITLE, HEADER_TITLE },
    TEXTS: { CONTACT_INFO_TEXT, LOCATION_INFO_TEXT } } = USER_PAGE;

export default class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <Card  style={{ float: 'right', width: "100%" }}
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
        );
    }
}
