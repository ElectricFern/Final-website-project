import React from 'react';
import image from './assets/CloakandSwagger_logo.svg';
import Collapsible from './components/GlobalComponents/Collapsible';
import { MDBAnimation } from "mdbreact";
import './Home.scss';

export function Home() {
    return (
        <div>
            <header>
                <title>The renegade Seamsmith</title>
                <MDBAnimation type="slideInRight" count={1}>
                    <img src={image} alt="a cloaked figure with a bundle of swag and a cat following behind."/>
                </MDBAnimation>
                <h2>Welcome to a place of Cloaks and Capes</h2>
            </header>
            <div className="content">
                <div className="panel-group">
                    <div className="intro">
                        <p>The Renegade Seamsmith is a small business which designs and creates premium quality bespoke Cloaks and Capes. </p>
                    </div>
                    <Collapsible title="What we do">
                        <p>We take basic requirements for a custom cloak or cape, the artist designs it, and makes it adding their own artistic flair. The requirements are gathered using the app on the design page. The artist sketches some images, sources appropirate material, then sews using a heavy-duty sewing machine from their studio.</p>
                    </Collapsible>
                    <Collapsible title="Who we are">
                        <p>The Renegade Seamsmith is an artist who designs and makes custom cloaks and capes. They also carry out minor clothing repairs, and create other clothing types. Check out the gallery page to see additional garments availble from their facebook.</p>
                    </Collapsible>
                    <Collapsible title="Why us?">
                    <p>DIY cloaks and capes are difficult to make save the time and stress and get us to make it for you. The price is fair as it pays a living wage and by not undercutting it supports other artists to not fold to commercial brand price pressure. By having an artist to to do the final product they can add additional flair to the basic requirements given. We also have a cool app which makes requesting a cloak or cape easier.</p>
                    </Collapsible>
                </div>
            </div>
        </div>
    )
}