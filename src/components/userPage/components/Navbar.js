import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Layout, Menu } from 'antd';

import { LOGO, NAVBAR } from './constants';
import Categories from './Categories';

const { SOURCE, WIDTH } = LOGO;
const { LINKS: { HOME, SUPPORT }, 
    STINGS: { FAQS, HI_USER_ICON, HI_USER_TEXT, HOME_TEXT, SUPPORT_TEXT } } = NAVBAR;
const { Header } = Layout;

export default class Navbar extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ background: "white" }}>
                    <div className="main-nav-div">
                        <Link to={HOME}><img src={SOURCE} width={WIDTH} />
                        </Link>
                        <Menu theme="dark" mode="horizontal" className="navbar-menu" >
                            <Menu.Item>
                                <Link to={HOME} className="nav-items">
                                    {HOME_TEXT}
                                </Link>
                            </Menu.Item>
                            <Menu.Item className="nav-items">
                                <Categories />
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={SUPPORT} className="nav-items">
                                    {SUPPORT_TEXT}
                                </Link>
                            </Menu.Item>
                            <Menu.Item className="nav-items">
                                {FAQS}
                            </Menu.Item>
                            <Menu.Item className="hi-user">
                                {HI_USER_TEXT} &nbsp;
                                <Icon type="gift" className={HI_USER_ICON} />
                            </Menu.Item>
                        </Menu>
                    </div>
                </Header>
            </Layout>
        );
    }
} 
