import React, { useEffect, useState } from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col, Skeleton } from "antd";
import { api } from "../services/Api";
import { helpers } from "../helper";
import ListMovies from "../components/ListMovies";
import PaginationMovies from "../components/Pagination";

const HomeMovies = () => {
    const [loading, setLoading] = useState(true);
    const [popularMovies, setPopularMovies] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)
    const [totalResult, setTotalResult] = useState(0);
    useEffect(() => {
        //call 1 lan sau khi render
        let checking = false
        setLoading(true)
        const getData = async () => {
            const dataMovies = await api.getDataPopularMovies(page);
            if(helpers.isEmptyObject(dataMovies)){
                //ko co data
                setError({cod: 404, mess: 'not found data'});
            } else {
                //co data
                setPopularMovies(dataMovies['results']);
                if(page === 1 && checking === false){
                    setTotalPage(dataMovies['total_pages']);
                    setTotalResult(dataMovies['total_results']);
                }
                setError(null);
            }
            setLoading(false); //hoan thanh
        }
        getData();
        //clear up
        return() => {
            checking = true
        }
    },[page]); //khi page thay doi useEffect tu chay lai

    const changePageMovies = (p) => {
        if(p >= 1 && p <= totalPage){
            //p la so trang nguoi dung nhap tren giao dien
            setPage(p)
        }
    }

    if(loading){
        return(
            <LayoutMovies
                level1 = "Trang chu"
                level2 = "Danh sach"
                level3 = "Phim xem nhieu"
            >
                <Row>
                    <Col span={24}>
                        <Skeleton active/>
                    </Col>
                </Row>
            </LayoutMovies>
        )
    }
    return(
        <LayoutMovies
                level1 = "Trang chu"
                level2 = "Danh sach"
                level3 = "Phim xem nhieu"
        >
            <Row>
                <Col span={24}>
                    <ListMovies
                        movies={popularMovies}
                    />
                        {
                        popularMovies.length > 0 
                        &&  
                        <PaginationMovies
                            current={page}
                            total={totalResult}
                            changePage={changePageMovies}
                        />
                    }
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(HomeMovies);