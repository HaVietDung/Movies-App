import { useState ,useEffect} from "react";
import React  from "react";
import ModalVideo from 'react-modal-video'
import LayoutMovies from "../components/Layout";
import { Row, Col, Image, Skeleton, Button, Carousel  } from "antd";
import { useParams } from "react-router-dom";
import {api} from "../services/Api";
import { helpers } from "../helper";
// import 'react-modal-video/css/modal-video.min.css';
import YouTube from 'react-youtube';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const DetailMovies = () => {
    const { slug, id } = useParams(); // get params
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);
    // const [isOpen, setOpen] = useState(false);\

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const onPlayerReady = (event) => {
        event.target.pauseVideo();
    }

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await api.getDataMoviesID(id);
            if(helpers.isEmptyObject(data)){
                // ko co du lieu theo id
                setError({
                    cod: 404,
                    mess: "Not found data"
                });
            } else {
                // co du lieu theo id
                setMovie(data);
                setError(null);
            }
            setLoading(false); // hoan thanh
        }
        getData();
    }, [id]); // id ma thay doi thi useEffect tu dong chay lai

    if(loading){
        return (
            <LayoutMovies
                level1="Trang chu"
                level2="Chi tiet"
                level3={slug}
            >
                <Row style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.backdrop_path})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize: 'cover'
                    
                    }}>
                    <Col span={24}>
                        <Skeleton active />
                    </Col>
                </Row>
            </LayoutMovies>
        )
    }
    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Chi tiet"
            level3={slug}
        >
            <Row>
                <Col span={24}>
                    <h4> Chi  tiet bo phim </h4>
                    <Row>
                        <Col span={5}>
                            <div style={{ padding: '10px' }}>
                                <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                                <p>{movie.original_title}</p>
                            </div>
                        </Col>
                        <Col span={14}>
                            <div style={{ padding: '10px' , textAlign: 'center'}}>
                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>
                                {
                                    movie['videos']['results'].map((item,index)=>(
                                        <div key={index} style={{marginBottom: '5px'}}>
                                            <YouTube 
                                                videoId={item.key}  
                                                opts={opts} 
                                                onReady={onPlayerReady} />;
                                        </div>
                                    )
                                    )
                                }

                            </div>
                        </Col>
                        <Col span={5}>
                            <h5>Movies Image</h5>
                            <Carousel autoplay>
                            {
                                movie['images']['backdrops'].map((item, index) => (
                                    <div key={index} style={{marginBottom:'5px'}}>
                                        <Image src={`https://image.tmdb.org/t/p/w300${item.file_path}`}/>
                                    </div>
                                ))
                            }
                            </Carousel>
                          
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(DetailMovies);
