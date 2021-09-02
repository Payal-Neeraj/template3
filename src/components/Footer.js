import React from 'react';
import styled from 'styled-components';
import youtube from '../images/youtube (2).png'
import linkedin from '../images/linkedin (2).png'
import pinterest from '../images/pinterest.png';
import facebook from '../images/facebook (3).png'
import bright1 from '../images/bright1.png'

function Footer(){
    return(
        <>
        <FooterContainer className="main-footer"> 
        <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* column1 */}
                        <div className="col-md-3 col-sm-6">
                            <h1 >Let's make success your life</h1>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            {/* <h4>Let's find your dream home</h4> */}
                        </div>

                        {/* column2 */}
                        <div className="col-md-3 col-sm-6">
                            <h5>Community</h5>
                            <ul className="list-unstyled">
                                <li>Our Forums</li>
                                <li>We're Hiring</li>
                                <li>Our Team</li>
                                <li>Company Info</li>
                            </ul>
                        </div>

                        {/* column3 */}
                        <div className="col-md-3 col-sm-6">
                            <h5>Get To Know Us</h5>
                            <ul className="list-unstyled">
                                <li>About</li>
                                <li>Poicies</li>
                                <li>Contacts</li>
                                <li>Prices</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <img className="m-2 img-size" src={linkedin} alt="youtube"></img>
                            <img className="m-2 img-size" src={facebook} alt="youtube"></img>
                            <img className="m-2 img-size" src={pinterest} alt="youtube"></img>
                            <img className="m-2 img-size" src={youtube} alt="youtube"></img>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center d-flex justify-content-center">
                            &copy;{new Date().getFullYear()} City Guide App - All Rights
                        </p>
                        <p className="text-xs-center d-flex justify-content-center ">
                            Designed and Developed by
                            
                        </p>
                        <p className="text-xs-center d-flex justify-content-center">
                        <img className="company-icon" src={bright1} alt={bright1} />
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    </>
    );
}

export default Footer;

const FooterContainer = styled.footer  `
    .footer-middle{
        background: #660066;
        padding-top: 3rem;
        color: var(--mainWhite);
        color: white;
    }

    .footer-bottom{
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    ul li{
        font-size: 15px;
    }

    h1{
        font-italic: true;
    }

    
`;
