import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SigninForm from './SigninForm';
import { SIGNIN_STRINGS } from '../constants';
import * as signinActions from '../actions';
import { getIsLoading, getSigninfailureMessage, getSigninStatus } from '../selectors';
import { message } from 'antd';
const { PRIMARY, TITLE } = SIGNIN_STRINGS;

class Signin extends React.Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        const { signinRequest } = this.props.actions;
        form.validateFields((error, { email, password }) => {
            if (error) {
                return error;
            }
            form.resetFields();
            const payload = {
                email,
                password,
            };
            signinRequest(payload);
        });
    }

    saveFormRef = formRef => {
        this.formRef = formRef;
    }

    componentDidUpdate(){
        const { 
            isSuccessful, 
            actions: { resetSignState }, 
            signinfailureMessage, 
            signinStatus,
        } = this.props;
        const { visible } = this.state;
    
        if (visible && isSuccessful) {
            this.setState({ visible: false });
            resetSignState();
        }
        if( signinStatus === "fail"){
            message.error(signinfailureMessage,3);
            resetSignState();
        }
        
    }

    render() {
        const { isLoading } = this.props;
        return (
            <div>
                <div type={PRIMARY} onClick={this.showModal}>{TITLE}</div>
                <SigninForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    isLoading={isLoading}
                />
            </div>
        );
    }
}

Signin.propTypes = {
    actions: PropTypes.object,
    isLoading: PropTypes.bool,
    isSuccessful:PropTypes.bool,
    siginData: PropTypes.object,
    signinStatus: PropTypes.string,
    signinfailureMessage: PropTypes.string,
};

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    isSuccessful: state.signin.isSuccessful,
    signinStatus: getSigninStatus(state),
    signinfailureMessage: getSigninfailureMessage(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(signinActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
