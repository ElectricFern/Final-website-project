import React from 'react';
import image from './assets/CloakandSwagger_logo.svg';
import styled from 'styled-components';
import Collapsible from './components/Collapsible';

const Styles = styled.div`
    body {
        padding: 50px 0;
    }
    h1 {
        text-align: center;
        margin-bottom: 18px;
    }
    header {
        margin-bottom: 20px;
        text-align: center;
        img {
            max-width: 120px;
        }
    }
    .content {
        background-color: #fff;
        padding: 20px;
        border-radius: 3px;
        box-shadow: 1px 1px 4px rgba(0,0,0,0.5);
        max-width: 700px;
        margin: 0 auto;
        .table {
            margin-bottom: 0;
            td,th {
                vertical-align: middle
            }
            .mRight {
                margin-right: 20px;
            }
        }
    }
    .message {
        text-align: center;
        &:only-child {
            margin: 0;
        }
    }
    .btn-sm {
        margin-right: 8px;
    }
    .form-inline {
        margin: 10px auto;
        width: 235px;
        .btn-default {
            margin-left: 5px;
        }
    }
    .credits {
        text-align: center;
        padding: 70px;
        opacity: .5;
        transition: opacity 0.3s linear;
        &:hover {
            opacity: 1;
        }
        a {
            color: #4b4668;
        }
    }
    .panel {
        .panel-heading {
            cursor: pointer;
        }
        .panel-collapse {
            overflow: hidden;
            transition: height 0.4s ease-out;  
        }
        .panel-body {
            border: none !important;
        }
        h2 {
            margin-top: 5px !important;
            text-align: center !important;
        }
        p {
            text-align: center !important;
        }
    }
`;

export function Home() {
    return (
        <Styles>
            <div>
                <header>
                    <img src={image} />
                    <h1>Nau Mai, Welcome</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
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
        </Styles>
    )
}