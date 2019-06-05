import React from 'react'
import Slider from './components/GalleryComponents/Slider';
import GalleryGrid from './components/GalleryComponents/GalleryGrid';
import Collapsible from './components/GlobalComponents/Collapsible';
import { MDBContainer } from "mdbreact";
import './Gallery.scss';

export function Gallery() {
    return (
        <MDBContainer>
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