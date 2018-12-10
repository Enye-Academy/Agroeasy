import React from "react";
import { Col, Row } from 'antd';

import { MY_OPTIONS } from './constants';

export default class Options extends React.Component {
    render() {
        const MY_OPTION = MY_OPTIONS.map(myOption => (
            <li key={myOption} className="sider-li">
                {myOption}
            </li>
        ));
           
        return (
            <Row type="flex" justify="center">
                <Col>
                    <div>
                        <ul className="sider-ul">
                            {MY_OPTION}
                        </ul>
                    </div>
                </Col>
            </Row>
        );
    }
}
