import React from "react";
import { Row, Col } from "antd";
import { useContext } from "react";
import ChangeUIContext from '../Share/context'

const ContentComponent = () => {
    const {color} = useContext(ChangeUIContext)
    return (
        <Row>
            <Col>
                <p className={color}>
                In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                </p>
                <p className={color}>
                Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                </p>
            </Col>
        </Row>
    )
}
export default React.memo(ContentComponent)