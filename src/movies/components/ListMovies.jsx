import React from "react";
import { Row, Col, Card } from "antd";
const { Meta } = Card;
import { Link } from "react-router-dom";
import slugify from 'react-slugify';

const ListMoies = ({movies}) =>{
    return(
        <Row>
            {movies.map((item, index) => (
                <Col span={6} key={index}>
                    <Link to={`/movie/${slugify(item.title)}/${item.id}`}>
                        <Card
                            hoverable
                            style={{
                                width: 250,
                                marginBottom: '30px'
                            }}
                            cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                        >
                            <Meta title={item.title} />
                        </Card>
                    </Link>
                    
                </Col>
            ))}
        </Row>
    )
}
export default React.memo(ListMoies)