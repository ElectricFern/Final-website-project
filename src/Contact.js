import React from 'react'
import ContactForm from './components/ContactComponents/ContactForm';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

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
            <div className="contactpage-seo">
                <Helmet>
                <title>Contact The Designer</title>
                <meta name="description" content="contact form page"/>
                <meta name="keywords" content="contact request custom cloak cape design sewing Wellington Zealand"/>
                </Helmet>
            </div>
            <Styles>
                <h4>To enquire about a custom piece, feedback, or any other enquieries send us an email using the form below.</h4>
            </Styles>
            <ContactForm></ContactForm>
        </div>
    )
}