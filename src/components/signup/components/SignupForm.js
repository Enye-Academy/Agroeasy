import PropTypes from 'prop-types';
import React from 'react';
import {  Checkbox, Form, Input, Modal, Radio } from 'antd';

import { formItemLayout, INPUTS, SIGNUP_STRINGS } from './constants';

const FormItem = Form.Item;
const {
    AGREEMENT,
    CLASSNAME_AGREEMENT,
    CLASSNAME_SCROLLBAR,
    NO,
    READ,
    TITLE,
    YES,
} = SIGNUP_STRINGS;

function generateSignupInputs(decorator) {
    return INPUTS.map(input => {
        const { field, inputType, label, rules } = input;

        return (
            <FormItem
                key={field}
                {...formItemLayout}
                label={label}
            >
                {
                    decorator(field, {
                        rules,
                    })(
                        <Input type={inputType} />
                    )
                }
            </FormItem>
        );
    });
}
class SignupModal extends React.Component {
    state = {
        isProducer: false,
    };

    toggleIsProducer = e => {
        this.setState ({
            isProducer: e.target.value,
        });
    }

    render() {
        const { form, onCancel, onCreate, visible } = this.props;
        const { getFieldDecorator } = form;
        const { isProducer } = this.state;

        return (
            <Modal
                visible={visible}
                title={TITLE}
                okText={TITLE}
                onCancel={onCancel}
                onOk={onCreate}
                className= {CLASSNAME_SCROLLBAR}
            >
                <Form>
                    <FormItem>
                        <Radio.Group 
                            defaultValue="no"
                            buttonStyle="solid"
                            onChange={this.toggleIsProducer}
                        >
                            <Radio.Button value={true}>{YES}</Radio.Button>
                            <Radio.Button value={false}>{NO}</Radio.Button>
                        </Radio.Group>
                    </FormItem>
                    {generateSignupInputs(getFieldDecorator)}
                    {isProducer &&
                    <FormItem
                        {...formItemLayout}
                        label="Product Type"
                    >
                        {
                            getFieldDecorator('phone', {
                                rules:
                                [{ message: 'Please input your sales category', required: true }],
                            })(
                                <Input />
                            )
                        }
                    </FormItem>
                    }
                    <FormItem
                        className={CLASSNAME_AGREEMENT}
                    >
                        {getFieldDecorator("agreement", {
                            valuePropName: "checked",
                        })(
                            <Checkbox>
                                {READ} 
                                <a href="">
                                    {AGREEMENT}
                                </a>
                            </Checkbox>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}
const SignupForm = Form.create()(SignupModal);

SignupModal.propTypes = {
    form: PropTypes.object,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    visible: PropTypes.bool,
};

export default SignupForm;
