import React from "react";
import { Row, Col } from "antd";

const FooterComponent = () => {
    return (
        <Row>
            <Col span={24}>
                <p> This is footer</p>
            </Col>
        </Row>
    )
}
export default React.memo(FooterComponent)