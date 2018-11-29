import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Layout, Menu } from 'antd';

import { LOGO, NAVBAR } from './constants';

const { SOURCE, WIDTH } = LOGO;
const { LINKS: { HOME, SUPPORT }, STINGS: { CATEGORIES, FAQS, HOME_TEXT, SUPPORT_TEXT } } = NAVBAR;
const { Header } = Layout;

export default class Navbar extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ background: "white" }}>
                    <div className="main-nav-div"><Link to={HOME}><img src={SOURCE} width={WIDTH} /></Link>
                        <Menu theme="dark" mode="horizontal" className="navbar-menu" >
                            <Menu.Item>
                                <Link to={HOME} className="nav-items">{HOME_TEXT}</Link>
                            </Menu.Item>
                            <Menu.Item className="nav-items">{CATEGORIES}</Menu.Item>
                            <Menu.Item>
                                <Link to={SUPPORT} className="nav-items">{SUPPORT_TEXT}</Link>
                            </Menu.Item>
                            <Menu.Item className="nav-items">{FAQS}</Menu.Item>
                            <Menu.Item className="hi-user">
                                Hi user! &nbsp;
                                <Icon type="gift"
                                    style={{ backgroundColor: 'ash', color: 'orange', fontSize: '22px' }}
                                />
                            </Menu.Item>
                        </Menu>
                    </div>
                </Header>
            </Layout>
        );
    }
} 
