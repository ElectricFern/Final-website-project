import React from 'react'
import ContactForm from './components/ContactForm';
import styled from 'styled-components';

const Styles = styled.div`
    h4 {
        text-align: center;
        display: flex;
        width: 100%;
    }
`;


export function Contact() {
    return (
        <div>
            <Styles>
                <h4>To enquire about a custom piece, feedback, or any other enquieries send us an email using the form below.</h4>
            </Styles>
            <ContactForm></ContactForm>
        </div>
    )
}