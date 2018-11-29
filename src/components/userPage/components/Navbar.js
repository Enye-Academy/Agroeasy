import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { NAVBAR } from './constants';

const { LINKS: { HOME } } = NAVBAY;
const { Header } = Layout;

export default class Navbar extends React.Component {
    render() {
        return (
            <Layout>
                <Header>
                    <div><Link to={HOME}><img src={SOURCE} width={WIDTH} /></Link>
                        <Menu theme="dark" mode="horizontal" style={{ float: "right" }} >
                            <Menu.Item>
                                <Link to={HOME}>{HOME_TEXT}</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link>Categorieses</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={SUPPORT} className={NAV_LINK}>{SUPPORT_TEXT}</Link>
                            </Menu.Item>
                            <Menu.Item className={NAV_LINK}><ContactUs /></Menu.Item>
                        </Menu>
                    </div>
                </Header>
            </Layout>
        );
    }
} 
