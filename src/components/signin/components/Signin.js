import React from 'react';

import SigninForm from './SigninForm';
import { SIGNIN_STRINGS } from './constants';

const { PRIMARY, TITLE } = SIGNIN_STRINGS;

export default class Signin extends React.Component {
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
        form.validateFields(err => {
            if (err) {
                return err;
            }
  
            form.resetFields();
            this.setState({ visible: false });
        });
    }
  
    saveFormRef = formRef => {
        this.formRef = formRef;
    }
   
    render() {
        return (
            <div>
                <span type={PRIMARY} onClick={this.showModal}>{TITLE}</span>
                <SigninForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}
