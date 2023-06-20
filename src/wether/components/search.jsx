import { Row, Col, Input } from 'antd';
import React, { useContext } from 'react';
import { contextWheather } from '../context';

const { Search } = Input
const SearchWeather = () => {
    const {loading, getDataWheather} = useContext(contextWheather)
    return(
        <>
            <Row style={{margin: '20px 0'}}>
                <Col span={12} offset={6}>
                    <Search placeholder="name's city"  
                            allowClear
                            enterButton 
                            onSearch={city => getDataWheather(city)}
                            loading={loading}
                    />
                </Col>
            </Row>
        </>
    )
}
export default React.memo(SearchWeather)