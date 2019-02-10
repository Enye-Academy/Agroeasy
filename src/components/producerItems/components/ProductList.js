import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Icon, List } from 'antd';

import { PRODUCER_PAGE } from '../constants';

const { EDIT, LARGE, LOGO, PRODUCT_ITEM, VERTICAL } = PRODUCER_PAGE;

/**
 * React component used to render the product list
 */
export default class ProductList extends React.Component {
    onPageChange = page => ({ page })

    render() {
        const { list, openModal } = this.props;

        return (
            <List
                bordered={true}
                className={PRODUCT_ITEM}
                itemLayout={VERTICAL}
                size={LARGE}
                pagination={{
                    onChange: this.onPageChange,
                    pageSize: 10,
                }}
                dataSource={list}
                renderItem={item => {
                    const { avatar, description, id } = item;
                    const actions = [
                        <Icon key={EDIT} onClick={() => openModal(id)} type={EDIT} />,
                    ];

                    return (
                        <List.Item
                            actions={actions}
                            key={id}
                            extra={<img width={200} alt={LOGO} src={avatar} />}
                        >
                            <List.Item.Meta
                                {...item}
                                avatar={<Avatar src={avatar} />}
                                description={item.cost}
                            />
                            {description}
                        </List.Item>
                    );
                }}
            />
        );
    }
}

ProductList.propTypes = {
    list: PropTypes.array,
    openModal: PropTypes.func,
};
