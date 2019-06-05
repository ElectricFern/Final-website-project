import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import jumbotronimage from '../../assets/jumbotronimage.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${jumbotronimage}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 300px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    .jumbo-h1 {
        margin-top: 50px;
    }

    @media (max-width: 300px) {
        .jumbo-h1 {
            font-size: 32px !important;
        }
    }

`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <title>The Renegade Seamsmith, we sew custom cloaks and capes!</title>
                <h1 className="jumbo-h1">The Renegade Seamsmith</h1>
                <p>Bespoke cloaks and capes</p>
            </Container>
        </Jumbo>
    </Styles>
)