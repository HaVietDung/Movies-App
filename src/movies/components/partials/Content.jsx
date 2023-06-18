import React from "react";
import { Layout } from 'antd';
import BreadcrumbMovies from "./Breadcrumb";
const { Content } = Layout

const ContentMovies = ({ children, level1, level2, level3}) => {
    // console.log(children)
    
    return(
        <Content
            style={{
            padding: '0 50px',
            minHeight: "100vh",
            padding: "15px",
            }}
        >
            <BreadcrumbMovies
                level1 = {level1}
                level2 = {level2}
                level3 = {level3}
            />
            <div
                className="site-layout-content"
                style={{
                    background: '#ffffff',
                }}
            >
                {children}
            </div>
      </Content>
    )
}
export default React.memo(ContentMovies);