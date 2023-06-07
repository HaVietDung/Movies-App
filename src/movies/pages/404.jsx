import React from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col, Result, Button } from "antd";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
    return(
        <LayoutMovies
                level1 = "Trang chu"
                level2 = "Danh sach"
                level3 = "Khong tim thay trang"
        >
            <Row>
                <Col span={24}>
                    <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={
                            <Link>
                                <Button type="primary">Back Home</Button>
                            </Link>
                        }
                    />
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(NotFoundPage);