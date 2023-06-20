import React from "react";
import LayoutComponent from "./components/Layout";
import HeaderComponent from "./components/Header";
import ContentComponent from "./components/Content";
import FooterComponent from "./components/Footer";
import ProviderContext from "./Share/provider";
import './style/App.css'

export default function AppContext(){
    return(
        <ProviderContext>
            <LayoutComponent>
                <HeaderComponent/>
                <ContentComponent/>
                <FooterComponent/>
            </LayoutComponent>
        </ProviderContext>
    )
}
