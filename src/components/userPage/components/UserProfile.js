import React from 'react';
import { Layout } from 'antd';

import ProfileContent from './ProfileContent';
import Navibar from '../../home/components/Navibar';
import { USER_PAGE } from './constants';
import SideMenu from './SideMenu';
import Practice from './Practice';

const { Content, Sider } = Layout;
const { CLASSNAMES: { BIG_CONTENT, BIG_LAYOUT, SIDER, SM_CONTENT },
} = USER_PAGE;

export default class UserProfile extends React.Component {
    render() {
        return(
            <Layout>
                <Navibar />
                <Content className={BIG_CONTENT}>
                    <Layout className={BIG_LAYOUT}>
                        <Sider width={200} className={SIDER}>
                            <SideMenu />
                        </Sider>
                        <Content className={SM_CONTENT}>
                            <ProfileContent />
                            <Practice />
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        );
    }
}
