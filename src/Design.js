import React from 'react'
import OrderApp from './components/DesignComponents/OrderApp';
import './components/DesignComponents/OrderApp.css';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Styles = styled.div`
    h2 {
        text-align: center;
    }
`;

export function Design() {
    return (
        <div>
            <div className="design-seo">
                <Helmet>
                    <title>Design a Cloak</title>
                    <meta name="description" content="a gallery to view other peoples custom orders"/>
                    <meta name="keywords" content="gallery image custom cloak cape design sewing Wellington Zealand"/>
                </Helmet>
            </div>
            <Styles>
            <h2>Design your Cloak!</h2>
            </Styles>
            <p>You can download and add your design to the Contact form to request one made</p>
            <OrderApp></OrderApp>
        </div>
    )
}