import PropTypes from 'prop-types';
import React from 'react';
import { Form, Input, Modal, Radio, Select } from 'antd';

import { formItemLayout, INPUTS, PRODUCTS, SIGNUP_STRINGS } from '../constants';

const FormItem = Form.Item;
const Option = Select.Option;
const {
    CATEGORIES,
    CLASSNAME_ITTEM1,
    CLASSNAME_RADIOBUTTONS,
    CLASSNAME_SCROLLBAR,
    MESSAGE,
    MODE,
    NO,
    PRODUCER,
    PRODUCT_TYPE,
    SMALL,
    SOLID,
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

function handleChange(value) {
    return value;
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
        const createCategories = PRODUCTS.map(({ category, value }) =>
            <Option key={value} >{category}</Option> 
        );

        return (
            <Modal
                visible={visible}
                title={TITLE}
                okText={TITLE}
                onCancel={onCancel}
                onOk={onCreate}
                className={CLASSNAME_SCROLLBAR}
            >
                <Form>
                    <FormItem className={CLASSNAME_ITTEM1}>
                        {PRODUCER}
                        <Radio.Group 
                            defaultValue={false}
                            buttonStyle={SOLID}
                            onChange={this.toggleIsProducer}
                            size={SMALL}
                            className={CLASSNAME_RADIOBUTTONS}
                        >
                            <Radio.Button value={true}>{YES}</Radio.Button>
                            <Radio.Button value={false}>{NO}</Radio.Button>
                        </Radio.Group>
                    </FormItem>
                    {isProducer &&
                    <FormItem
                        {...formItemLayout}
                        label={PRODUCT_TYPE}
                    >
                        {
                            getFieldDecorator('productType', {
                                rules:
                                [{ message: { MESSAGE }, required: true }],
                            })(
                                <Select
                                    showSearch
                                    mode={MODE}
                                    placeholder={CATEGORIES}
                                    onChange={handleChange}
                                    filterOption=
                                        {
                                            (input, option) => 
                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                >
                                    {createCategories}
                                </Select>
                            )
                        }
                    </FormItem>
                    }
                    {generateSignupInputs(getFieldDecorator)}
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

