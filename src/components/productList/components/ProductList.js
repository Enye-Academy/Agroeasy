import React from 'react';
import { List } from 'antd';

import Product from './Product';
import { EXAMPLE_PRODUCTS } from './constants';

//contains components SearchItems, ProductsLocation and Rows
class ProductList extends React.Component {
    render() {
        return(
            <List
                bordered
                className='product-list'
                dataSource={EXAMPLE_PRODUCTS}
                grid={{ gutter: 12, lg: 4, md: 4, sm: 2, xl: 6, xs: 1, xxl: 3 }}
                renderItem={item => (
                    <List.Item>
                        <Product data={item} />
                    </List.Item>
                )}
            />
        );
    }
}

export default ProductList;
