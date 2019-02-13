import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
//import { message } from 'antd';

import * as signupActions from '../actions';
//import * as  signupSelectors from '../selectors';
import SignupForm from './SignupForm';
import { SIGNUP_STRINGS } from '../constants';

//const { getMessage, getStatus } = signupSelectors;
const { PRIMARY, TITLE } = SIGNUP_STRINGS;
class Signup extends React.Component {
    state = {
        visible: false,
    };

 /*    componentDidUpdate(){
        const { signupMessage, signupStatus } = this.props;
        if(signupStatus !== undefined){
            signupStatus ==='success' ? message.success(signupMessage.title, 5) :
                message.error(signupMessage.title, 5);
        }
    } */

    showModal = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        const { signupRequest } = this.props.actions;
        form.validateFields((error, values ) => {
            if (error) {
                return error;
            }
            form.resetFields();
            const user = {
                address: values.address,
                city: values.city,
                country: values.country,
                createdAt: new Date(),
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                password: values.password,
                phoneNumber: values.phoneNumber,
                state: values.state,
                typeOfProducts:values.typeOfProducts,
                username: values.username,
            };
            signupRequest(user);
            this.setState({ visible: false });
        });

    }

    saveFormRef = formRef => {
        this.formRef = formRef;
    }

    render() {
        return (
            <div>
                <div type={PRIMARY} onClick={this.showModal}>{TITLE}</div>
                <SignupForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

Signup.propTypes = {
    actions: PropTypes.object,
    form: PropTypes.object,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    visible: PropTypes.bool,
};

/* const mapStateToProps = state => ({
    signupMessage: getMessage(state),
    signupStatus: getStatus(state),
}); */

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(signupActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Signup); 
