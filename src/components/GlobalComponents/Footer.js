import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Styles = styled.div`
    footer {
        padding-top: 20px;
    }
    .p-footer {
        color: #999;
        line-height: 25px;
        text-align: left;
    }
    .footer-h2 {
        color: #fff;
        font-size: 18px;
    }
    a {
        color: grey;
        &:hover {
            color: white;
        }
    }
    .footer-top {
        background: #111;
        padding: 30px;
        box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.5);
    }
    .second-divider ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .second-divider ul li {
       border-bottom: 1px solid rgba(255,255,255,0.3); 
       line-height: 30px;
    }
    .social-footer-links {
        display: flex;
        justify-content: center;
    }
    i {
        padding: 5px 5px 5px 5px;
    }
    .footer-button {
        border-radius: 10px;
    }
`

export const Footer = () => (

    <Styles>
        <footer>
            <div className="footer-top">
                <div className="footer-container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12 first-divider">
                            <h2 className="footer-h2">The Renegade Seamsmith</h2>
                            <p className="p-footer">This site was built using - react-bootstrap, fabric.js, react-router-dom, and mdbreact, thank you to all those who contributed to those libraries and frameworks.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 second-divider">
                            <h2 className="footer-h2">Usefull links</h2>
                            <ul>
                                <li><a href="/privacy">Privacy policy</a></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/design">Design</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>                           
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 third-divider">
                            <h2 className="footer-h2">Follow Us</h2>
                            <p className="p-footer">Follow us for up to date news and releases</p>
                            <div className="social-footer-links">
                                <Button variant="link" size="lg" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size='4x'/></Button>
                                <Button variant="link" size="lg" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size='4x'/></Button>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 fourth-divider">
                            <h2 className="footer-h2">Site Code</h2>
                            <p className="p-footer">This link is for the project presentation only</p>
                            <Button className="footer-button" variant="dark" href="https://github.com/ElectricFern/Final-website-project" size="small"></Button>
                        </div>
                    </div>
                </div>         
            </div>        
        </footer>
    </Styles>
)