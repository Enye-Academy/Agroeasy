import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { List, Avatar, Icon } from 'antd';

import { requestProductList } from '../actions';
import { getProductList } from '../selectors';

import { LIST_DATA, PRODUCER_PAGE } from '../constants';

const { EDIT, LARGE, LOGO, PRODUCT_ITEM, VERTICAL } = PRODUCER_PAGE;

class AddItem extends React.Component {
    componentDidMount() {
        const { requestProductList } = this.props.actions;

        requestProductList();
    }

    render() {
        return (
            <List
                bordered={true}
                className={PRODUCT_ITEM}
                itemLayout={VERTICAL}
                size={LARGE}
                pagination={{
                    onChange: page => ({ page }),
                    pageSize: 10,
                }}
                dataSource={LIST_DATA}
                renderItem={item => (
                    <List.Item
                        actions={[<Icon key={EDIT} type={EDIT} />]}
                        key={item.title}
                        extra={<img width={200} alt={LOGO} src={item.avatar} />}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={item.title}
                            cost={item.cost}
                            location={location}
                            description={item.description}
                        />
                        {item.description}
                    </List.Item>
                )}
            />

        );
    }
}

AddItem.propTypes = {
    actions: PropTypes.shape({
        requestProductList: PropTypes.func,
    }),
    productList: PropTypes.array,
};

const mapStateToProps = state => ({
    productList: getProductList(state),
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ requestProductList }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
