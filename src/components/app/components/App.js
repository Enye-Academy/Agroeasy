import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Layout, message } from 'antd';

import contactus from '../../contactUs';
import Footer from './Footer';
import Navbar from './Navbar';
import { getLoginStatus, getUserData } from '../selectors';
import { resetSigninState } from '../actions';
import { SIGNIN_SUCCESS, VALID_SIGNOUT } from '../constants';

const { ContactUs } = contactus.components;
const { Content } = Layout;

class App extends React.Component {
    componentDidUpdate() {
        const { isLoggedIn, user } = this.props;
        const { resetSigninState } = this.props.actions;

        if (isLoggedIn) {
            message.success(`${SIGNIN_SUCCESS} ${user.firstName}!`, 5);
        }
        else if (isLoggedIn === false) {
            message.info(VALID_SIGNOUT, 5);
        }
        else {
            resetSigninState();
            message.error(user.data.title, 5);
        }
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
    user: PropTypes.object,
};

const mapStateToProps = state => ({
    isLoggedIn: getLoginStatus(state),
    user: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ resetSigninState }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
