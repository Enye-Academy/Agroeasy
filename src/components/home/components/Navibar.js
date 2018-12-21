import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar,  Dropdown, Layout, Menu } from 'antd';

import ContactUs from './ContactUs';
import { components as SigninComponents } from '../../signin';
import { components as SignupComponents } from '../../signup/';
import { GOODS, HOME, LOGO, NAVIBAR, USERPROFILE } from './constants';

const { GOODS_TEXT, HOME_TEXT, FLOAT_NAV, MAIN_NAV, NAV_LINK, NAV_MODE,
    NAV_THEME, USER_PROFILE } = NAVIBAR;
const { SOURCE, WIDTH } = LOGO;
const { Header } = Layout;
const { Signin } = SigninComponents;
const { Signup } = SignupComponents;

/*
 * this is the the navigation bar at the top of the home page
 */

export default class Navibar extends React.Component {
    render() {
        const userMenu = (
            <Menu>
                <Menu.Item>
                    <Link to={USERPROFILE}>{USER_PROFILE}</Link>
                </Menu.Item>
                <Menu.Item>Sign out</Menu.Item>
            </Menu>
        );
        return (
            <Layout>
                <Header className={MAIN_NAV}>
                    <div>
                        <Link to={HOME}><img src={SOURCE} width={WIDTH} /></Link>
                        <Menu theme={NAV_THEME} mode={NAV_MODE} className={FLOAT_NAV} >
                            <Menu.Item>
                                <Link to={HOME} className={NAV_LINK}>{HOME_TEXT}</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={GOODS} className={NAV_LINK}>{GOODS_TEXT}</Link>
                            </Menu.Item>
                            <Menu.Item className={NAV_LINK}><Signin /></Menu.Item>
                            <Menu.Item className={NAV_LINK}><Signup /></Menu.Item>
                            <Menu.Item className={NAV_LINK}><ContactUs /></Menu.Item>
                            <Dropdown overlay={userMenu}>
                                <Avatar icon="user" className="avatar-dropdown" />
                            </Dropdown>
                        </Menu>
                    </div>
                        
                </Header>
            </Layout>
        );
    }
} 
