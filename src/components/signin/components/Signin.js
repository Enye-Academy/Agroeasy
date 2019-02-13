import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SigninForm from './SigninForm';
import { SIGNIN_STRINGS } from '../constants';
import * as signinActions from '../actions';

const {  PRIMARY,TITLE } = SIGNIN_STRINGS;

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

    render() {
        const { siginLoading } = this.props
        return (
            <div>
                <div type={PRIMARY} onClick={this.showModal}>{TITLE}</div>
                <SigninForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    isLoading={siginLoading}
                />
            </div>
        );
    }
}

Signin.propTypes = {
    actions: PropTypes.object,
    siginLoading: PropTypes.bool,
};
const mapStateToProps = state => ({
    siginLoading: state.signin.isLoading,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(signinActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
