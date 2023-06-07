import React, { useEffect, useState } from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col, DatePicker, Skeleton, Carousel } from "antd";
import { helpers } from "../helper";
import moment from 'moment';
import { api } from "../services/Api";
import ListMovies from "../components/ListMovies";
import PaginationMovies from "../components/Pagination";

const { RangePicker } = DatePicker;
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
let starDate, endDate;

const UpComing = () => {
    const [loading,setLoading] = useState(false);
    const [dataMovies, setDataMovies] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)
    const [totalResult, setTotalResult] = useState(0);
    const [sDate, setStartDate] = useState(null);
    const [eDate, setEndDate] = useState(null);

    const changePageMovies = (p) => {
        if(p >= 1 && p <= totalPage){
            //p la so trang nguoi dung nhap tren giao dien
            setPage(p)
            const stringDate = [sDate,eDate]
            changeDate(null, stringDate)
        }
    }

    const changeDate = async (date, dateString) => {
        setLoading(true)
        const [starDate, endDate] = dateString;
        setStartDate(starDate);
        setEndDate(endDate);
        const data = await api.getDataMoviesByDate(starDate, endDate, page);
        if(!helpers.isEmptyObject(data)){
            //co data
            setDataMovies(data['results'])
            if(page === 1){
                setTotalPage(data['total_pages']);
                setTotalResult(data['total_results']);
            }
            setError(null)
        } else {
            setError({
                cod: '404',
                mess:'not found data'
            })
        }
        setLoading(false)
    }
    if(loading){
        return(
            <LayoutMovies
                level1 = "Trang chu"
                level2 = "Danh sach"
                level3 = "Phim sap ra rap"
            >
                <Row>
                    <Col span={24}>
                        <Skeleton active/>
                    </Col>
                </Row>
            </LayoutMovies>
        )
    }
    if(error !== null){
        return(
            <LayoutMovies
                level1 = "Trang chu"
                level2 = "Danh sach"
                level3 = "Phim sap ra rap"
            >
                <Row>
                    <Col span={24}>
                        <h4>{error.mess}</h4>
                    </Col>
                </Row>
            </LayoutMovies>
        )
    }
    return(
        <LayoutMovies
                level1 = "Trang chu"
                level2 = "Danh sach"
                level3 = "Phim sap ra rap"
        >
            <Row>
                <Col span={24}>
                    <h4>Phim sap chieu</h4>
                    <Row>
                        <Col span={24}>
                            <RangePicker
                                    defaultValue={moment()}
                                    format={"YYYY-MM-DD"}
                                    disabledDate={current => {
                                    return current && current < moment().endOf('day');
                                    }}
                                    onChange={(d, dt) => changeDate(d, dt)}
                            />
                            <ListMovies
                                movies={dataMovies}
                            />
                            {
                                dataMovies.length > 0 
                                &&  
                                <PaginationMovies
                                    current={page}
                                    total={totalResult}
                                    changePage={changePageMovies}
                                />
                            }
                        </Col>
                    </Row>  
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(UpComing);