import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, message } from 'antd';

import contactus from '../../contactUs';
import Footer from './Footer';
import Navbar from './Navbar';
import { getLoginStatus, getUserData, getSignUpMessage, getSignUpStatus } from '../selectors';
import { SIGNIN_SUCCESS } from '../constants';

const { ContactUs } = contactus.components;
const { Content } = Layout;

class App extends React.Component {

    componentDidUpdate() {
        const { isLoggedIn, user, signupMessage, signupStatus } = this.props;    

        if (isLoggedIn) {
            message.success(`${user.firstName} ${SIGNIN_SUCCESS}`, 3);
        }

        signupStatus ==="success" && message.success(signupMessage.title, 3);
        signupStatus ==="fail" && message.error(signupMessage.title, 3);
    }

    render() {
        const { children } = this.props;

        return (
            <Layout>
                <Navbar />
                <Content>{children}</Content>
                <Footer />
                <ContactUs />
            </Layout>
        );
    }
}

App.propTypes = {
    actions: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    isLoggedIn: PropTypes.bool, 
    links: PropTypes.arrayOf(PropTypes.node),
    match: PropTypes.object,
    signupMessage: PropTypes.object,
    signupStatus: PropTypes.string,
    user: PropTypes.object,
};

const mapStateToProps = state => ({
    isLoggedIn: getLoginStatus(state),
    signupMessage: getSignUpMessage(state),
    signupStatus: getSignUpStatus(state),
    user: getUserData(state),
});

export default connect(mapStateToProps, null)(App);
