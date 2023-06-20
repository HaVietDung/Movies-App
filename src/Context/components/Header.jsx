import React, { useContext } from "react";
import SwitchComponent from './Switch';
import { Row, Col } from "antd";
import ChangeUIContext from "../Share/context";

const HeaderComponent = () => {
    const { color } = useContext(ChangeUIContext)
    return (
        <>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <SwitchComponent/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <p className={color}>This is logo</p>
                        </Col>
                        <Col span={16}>
                            <h1 className={color}> This is header</h1>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default React.memo(HeaderComponent)