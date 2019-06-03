import React from 'react'
import OrderApp from './components/DesignComponents/OrderApp';
import './components/DesignComponents/OrderApp.css';
import styled from 'styled-components';

const Styles = styled.div`
    h2 {
        text-align: center;
    }
`;

export function Design() {
    return (
        <div>
            <Styles>
            <h2>Design you Cloak or Cape!</h2>
            </Styles>
            <p>You can download and add your design to the Contact form to request one made</p>
            <OrderApp></OrderApp>
        </div>
    )
}