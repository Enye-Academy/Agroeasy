import React from 'react';
import { Dropdown, Icon, Menu } from 'antd';

import { NAVBAR } from './constants';

const { STINGS: { CATEGORIES } } = NAVBAR;

class Categories extends React.Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item>1st item on category</Menu.Item>
                <Menu.Item>2nd item on category</Menu.Item>
                <Menu.Item>3rd item on category</Menu.Item>
            </Menu>
        );
           
        return (
            <Dropdown overlay={menu}>
                <div className="ant-dropdown-link">
                    {CATEGORIES}
                    <Icon type="down" />
                </div>
            </Dropdown>

        );
    }
}

export default Categories;
