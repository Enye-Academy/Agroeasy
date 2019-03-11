import React from 'react';
import { Card, Divider } from 'antd';
import PropTypes from 'prop-types';
import { USER_PAGE } from '../constants';
import { connect } from 'react-redux';

import { getUserData } from '../selectors';

const { Meta } = Card;
const {
    CLASSNAMES: { CARD_META, DATA_TITLE, HEADER_TITLE, INFO_CARD },
    STRINGS: { EMAIL, ADDRESS, CITY, COUNTRY, PHONE },
    TEXTS: { CONTACT_INFO_TEXT,  LOCATION_INFO_TEXT },
} = USER_PAGE;

class UserInfo extends React.Component {

    render() {
        
        const { user } = this.props.userData.data;
        const { address, city, country, email, phoneNumber } = user;

        const CONTACT = [
            { description: email, title: EMAIL },
            { description: phoneNumber, title: PHONE },
        ];
        const LOCATION= [
            { description: city, title: CITY },
            { description: country, title: COUNTRY },
            { description: address, title: ADDRESS },
        ];
        return (
            <Card
                className={INFO_CARD}
                bordered={false}
            >
                <Meta
                    title={<h4 className={HEADER_TITLE}>{CONTACT_INFO_TEXT}</h4>}
                    description={
                        CONTACT.map(contact => (
                            <div key={contact.title} className={DATA_TITLE}>
                                <h4>{contact.title}</h4>
                                <div>
                                    {contact.description}
                                </div>
                            </div>
                        ))
                    }
                />
                <Divider />
                <Meta
                    className={CARD_META}
                    title={<h4 className={HEADER_TITLE}>{LOCATION_INFO_TEXT}</h4>}
                    description={
                        LOCATION.map(location => (
                            <div key={location.title} className={DATA_TITLE}>
                                <h4>{location.title}</h4>
                                <div>
                                    {location.description}
                                </div>
                            </div>
                        ))
                    }
                />
            </Card>
        );
    }
}

UserInfo.propTypes = {
    userData: PropTypes.object,
};

const mapStateToProps = state => ({
    userData: getUserData(state),
});

export default connect(mapStateToProps)(UserInfo);
