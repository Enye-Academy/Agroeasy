import React from 'react';
import { Menu, Icon } from 'antd';

import { USER_PAGE } from './constants';

const { 
    CLASSNAMES: { MENU },
    STRINGS: { DARK, FOLDER, INFO_CIRCLE, INLINE, MESSAGE, 
        NOTIFICATION, SETTING, SHOPPING, SOLUTION },
    TEXTS: { ACCOUNT_INFO, MESSAGES, HELP, NOTIFICATIONS, 
        PURCHASES, SAVED_ITEMS, SETTINGS },
} = USER_PAGE;

export default class SideMenu extends React.Component {
    render() {
        return(
            <Menu
                className={MENU}
                theme={DARK}
                mode={INLINE}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
            >   
                <Menu.Item>
                    <span><Icon type={INFO_CIRCLE} />{ACCOUNT_INFO}</span>
                </Menu.Item>
                <Menu.Item>
                    <span><Icon type={MESSAGE} />{MESSAGES}</span>
                </Menu.Item>                        
                <Menu.Item>
                    <span><Icon type={NOTIFICATION} />{NOTIFICATIONS}</span>
                </Menu.Item>             
                <Menu.Item>
                    <span><Icon type={SHOPPING} />{PURCHASES}</span>
                </Menu.Item>          
                <Menu.Item>
                    <span><Icon type={FOLDER} />{SAVED_ITEMS}</span>
                </Menu.Item>
                <Menu.Item>
                    <span><Icon type={SETTING} />{SETTINGS}</span>
                </Menu.Item>
                <Menu.Item>
                    <span><Icon type={SOLUTION} />{HELP}</span>
                </Menu.Item>
            </Menu>
        );
    }
}
