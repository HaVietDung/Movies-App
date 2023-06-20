import { Row, Col } from "antd";
import React from "react";
import SearchWeather from './components/search'
import ListData from "./components/ListData";
import WeatherProvider from "./provider";

export default React.memo(function AppWeather(){
    return(
        <Row>
            <Col span={24}>
                <WeatherProvider>
                    <SearchWeather/>
                    <ListData/>
                </WeatherProvider>
            </Col>
        </Row>
    )
    
})