import React from 'react'
import Slider from './components/Slider';
import GalleryGrid from './components/GalleryGrid';
import Collapsible from './components/Collapsible';
import { MDBContainer } from "mdbreact";
import './Gallery.scss';

export function Gallery() {
    return (
        <MDBContainer>
            <Slider></Slider>
            <br></br>
            <div className="content-gallert">
                <div className="panel-group-gallery">
                    <Collapsible title="All Images">
                        <GalleryGrid></GalleryGrid>
                    </Collapsible>
                </div>
            </div>
        </MDBContainer>
    )
}