import React from 'react'
import Slider from './components/GalleryComponents/Slider';
import GalleryGrid from './components/GalleryComponents/GalleryGrid';
import Collapsible from './components/GlobalComponents/Collapsible';
import { MDBContainer } from "mdbreact";
import { Helmet } from 'react-helmet';
import './Gallery.scss';

export function Gallery() {
    return (
        <MDBContainer>
            <div className="gallery-seo">
                <Helmet>
                    <title>The Gallery</title>
                    <meta name="description" content="a gallery to view other peoples custom orders"/>
                    <meta name="keywords" content="gallery image custom cloak cape design sewing Wellington Zealand"/>
                </Helmet>
            </div>
            <Slider></Slider>
            <br></br>
            <div className="content-gallery">
                <div className="panel-group-gallery">
                    <Collapsible title="All Images">
                        <GalleryGrid></GalleryGrid>
                    </Collapsible>
                </div>
            </div>
        </MDBContainer>
    )
}