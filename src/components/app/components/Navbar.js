import PropTypes from 'prop-types';
import React from 'react';
import { Avatar,  Dropdown, Layout, Menu } from 'antd';

import AppLink from './AppLink';
import home from '../../home';

import signin from '../../signin';
import signup from '../../signup';
import { LOGO, MARKET_TEXT, NAVBAR, PATHS, USER_AVATAR } from '../constants';

const { Item } = Menu;
const { Header } = Layout;
const { AVATAR, SHAPE, SIZE, SOURCE } = LOGO;
const { MAIN_NAV, NAV_MENU, NAV_MODE, NAV_THEME } = NAVBAR;
const { CONTACT, HOME, MARKET, PROFILE, SIGN_IN, SIGN_UP } = PATHS;
const { CONTAINER, ICON_TYPE, SIGN_OUT, USER_DROP_DOWN, USER_PROFILE } = USER_AVATAR;

const { ContactUs } = home.components;
const { Signin } = signin.components;
const { Signup } = signup.components;

const UserMenu = (
    <Menu>
        <Item key={USER_PROFILE}>
            <AppLink to={PROFILE} key={PROFILE}>{USER_PROFILE}</AppLink>
        </Item>
        <Item key={SIGN_OUT}>{SIGN_OUT}</Item>
    </Menu>
);

const items = [
    <AppLink key={AVATAR} to={HOME}>
        <Avatar className={AVATAR} src={SOURCE} size={SIZE} shape={SHAPE} />
    </AppLink>,
    <AppLink key={MARKET} to={MARKET}>{MARKET_TEXT}</AppLink>,
    <Signin key={SIGN_IN} />,
    <Signup key={SIGN_UP} />,
    <ContactUs key={CONTACT} />,
];

/*
 * this is the the navigation bar at the top of the home page
 */
export default class Navbar extends React.Component {
    render() {

        return (
            <Header className={MAIN_NAV}>
                <Menu
                    className={NAV_MENU}
                    mode={NAV_MODE}
                    theme={NAV_THEME}
                >
                    {
                        items.map(item => {
                            const { key } = item;
                            const className = key === AVATAR ? CONTAINER : '';

                            return (
                                <Item className={className} key={key}>{item}</Item>
                            );
                        })
                    }

                </Menu>
                <Dropdown overlay={UserMenu} className={USER_DROP_DOWN}>
                    <Avatar icon={ICON_TYPE} />
                </Dropdown>
            </Header>
        );
    }
}

Navbar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.node),
};