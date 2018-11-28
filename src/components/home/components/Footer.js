import React from 'react';
import { Col, Layout, Row } from 'antd';

import { FOOTER_STRINGS } from './constants';
import { components } from '../../productsAvailable';
import { components as UserPageComponent } from '../../userPage';

const { UserPage } = UserPageComponent;
const { ProductsAvailable } = components;
const { Content, Footer } = Layout;
const { CENTER, FLEX, FOOTER, FOOTER_CONTENT, FOOTER_TEXT, LOWER_FOOTER } = FOOTER_STRINGS;

//This contains the productsavailable component
class  AppFoot extends React.Component {
    render () {
        return (
            <Layout>
                <Content className={FOOTER} >
                    <ProductsAvailable />
                </Content>
                <Footer className={LOWER_FOOTER}>
                    <Row type={FLEX} justify={CENTER}>
                        <Col span={8}>
                            <h6 className={FOOTER_CONTENT}>
                                {FOOTER_TEXT}
                            </h6>
                        </Col>
                    </Row>
                </Footer>
                <UserPage />
            </Layout>
        );
    }
}

export default AppFoot;
