import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { Layout, message } from 'antd';
import { connect } from 'react-redux';

import contactus from '../../contactUs';
import Footer from './Footer';
import Navbar from './Navbar';
import * as siginActions  from '../actions';
import { getSignupData, getSignupStatus, getSiginStatus, getSiginData } from '../selectors';

const { ContactUs } = contactus.components;
const { Content } = Layout;

class App extends React.Component {

    componentDidUpdate() {
        const { resetSignState } = this.props.actions;
        const { signinStatus, signupStatus, signupData, siginData } = this.props;

        if(signinStatus !== null){
            signinStatus === 'success' ?
                message.success(`${siginData.user.firstName}  ${"sign sucess message"}`, 5):
                message.error(siginData.title, 5);
            resetSignState();
        }

        if(signupStatus !== null){
            signupStatus ==='success' ? message.success(signupData.title, 5) :
                message.error(signupData.title, 5);
            resetSignState();
        } 

    }

    render() {
        const { children } = this.props;

        return (
            <Layout>
                <Navbar />
                <Content>{children}</Content>
                <ContactUs />
                <Footer />
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
    links: PropTypes.arrayOf(PropTypes.node),
    siginData: PropTypes.object,
    signinStatus: PropTypes.string,
    signupData: PropTypes.object,
    signupStatus: PropTypes.string,
};

const mapStateToProps = state => ({
    siginData: getSiginData(state),
    signinStatus: getSiginStatus(state),
    signupData: getSignupData(state),
    signupStatus: getSignupStatus(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(siginActions, dispatch),
});  

export default connect(mapStateToProps, mapDispatchToProps)(App);
