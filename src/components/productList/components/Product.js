import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Card, Icon, Tag } from 'antd';

import ProductModal from './ProductModal';

// cover={<img src={image} />}
const { Meta } = Card;

class Product extends React.Component {
    state = {
        visible: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible } = this.state;
        const { cost, image, name } = this.props.data;
        const description = tag => (
            <div>
                <Tag color="gold">{tag}</Tag>
                {"This is the product description"}
            </div>
        );
        const actions = [
            <Icon key='shopping' type='shopping' />,
            <Icon key='info-circle' type='info-circle' onClick={this.showModal} />,
        ];
        return (
            <div>
                <Card
                    actions={actions}
                    hoverable
                    key={name}
                >
                    <Meta
                        avatar={<Avatar src={image} />}
                        title={name}
                        description={description(cost)}
                    />
                </Card>
                <ProductModal
                    data={this.props.data}
                    handleCancel={this.handleCancel}
                    visible={visible}
                />
            </div>
        );
    }
}

Product.propTypes = {
    data: PropTypes.object,
};

export default Product;
