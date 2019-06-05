import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
.privacy-main {
    box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.5);
    padding-top: 2px;
    border-radius: 2px  
    margin: auto;
    max-width: 500px;
}
.privacy-h2 {
    text-align: center;
}
.privacy-list {


}
.privacy-p {
    text-align: left;
    padding: 0 10px;
}
`


export function PrivacyPolicy() {
    return (
        <Styles>
            <div className="privacy-main">
                <h2 className="privacy-h2">Privacy Policy</h2>
                <p className="privacy-p">We collect personal information from you, including information about your: </p>
                <div className="privacy-list">
                    <ul>
                        <li>Name</li>
                        <li>Contact Information</li>
                    </ul>
                </div>
                <p className="privacy-p">We collect your personal information in order to: </p>
                <div className="privacy-list">
                    <ul>
                        <li>contact customers who have contacted us, and gather custom design requirements</li>
                    </ul>
                </div>
                <p className="privacy-p">Providing some information is optional. If you choose not to enter email address, we'll be unabel to correspond and address the issues or begin the requirments preocess for ordering a custom garment. </p>
                <p className="privacy-p">You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong. If you’d like to ask for a copy of your information, or to have it corrected, please contact us at RSSmith@fakemail.com, or +64 987654321, or 123 The Moon.</p>
            </div>
        </Styles>
    )
}