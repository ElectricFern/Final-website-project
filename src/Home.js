import React from 'react';
import image from './assets/expand-vertical-4.svg';
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
        border-radius: 7px;
        box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
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
            transition: height 0.3s ease-out;  
        }
        .panel-body {
            border: none !important;
        }
        h2 {margin-top: 5px !important;}
    }
`;

export function Home() {
    return (
        <Styles>
            <div>
                <header>
                    <img src={image} />
                    <h1>Welcome</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                        <Collapsible title="What we do">
                            <p>We take custom orders for making bespoke cloaks and capes. You give the basic requirments and the designer does the rest!</p>
                        </Collapsible>
                        <Collapsible title="Who we are">
                            <p>The Renegade Seamsmith is an artist who designs and makes custom cloaks and capes.</p>
                        </Collapsible>
                        <Collapsible title="How we do it">
                            <ul>
                                <li>
                                    1. Send a request and requirements using the app or contact form.
                                </li>
                                <li>
                                    2. The artist creates it according to requirements.
                                </li>
                                <li>
                                    3. Pictures of the finshed garment are sent to the customer.
                                </li>
                            </ul>
                        </Collapsible>
                    </div>
                </div>
            </div>
        </Styles>
    )
}