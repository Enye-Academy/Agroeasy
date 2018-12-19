import React from 'react';
import { Layout, Menu, Icon } from 'antd';

import Profile from './Profile';
import { USER_PAGE } from './constants';

const { Content, Sider } = Layout;
const { CLASSNAMES: { BIG_CONTENT, BIG_LAYOUT, MENU, SIDER, SM_CONTENT },
    STRINGS: { FOLDER, INFO_CIRCLE, INLINE, MESSAGE, NOTIFICATION, SETTING, SHOPPING, SOLUTION },
    TEXTS: { ACCOUNT_INFO, MESSAGES, HELP, NOTIFICATIONS, PURCHASES, SAVED_ITEMS, SETTINGS },
} = USER_PAGE;

export default class UserProfile extends React.Component {
    render() {
        return(
            <Layout>
                <Content className={BIG_CONTENT}>
                    <Layout className={BIG_LAYOUT}>
                        <Sider width={200} className={SIDER}>
                            <Menu
                                className={MENU}
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
                        </Sider>
                        <Content className={SM_CONTENT}>
                            <Profile />
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        );
    }
}
