import React, { useEffect } from 'react';
import styled from 'styled-components';
import  PricingData  from '../data/PricingData';
import Button from './Button';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Pricing = styled.div `
    background-color: #f0f5f5;
`;

const Heading = styled.div `
    h6{
        color: #ff6699;
        font-size: 1rem;
    }
    h1{
        color: #660066;
    }
`;

const MainContent = styled.div `
    width: 25rem; 
    width: 100%;
    height: auto;
    
    background-color: #fff;
    display: inline-block;
    padding: 3.5rem;
    text-align: center;
    margin-bottom: 2rem;

    &:hover{
        border-style: solid ;
        border-color: #000;
        border-width: 2px; 
    }

    h2{
        color: #ff6699;
    }

    h4{ 
        color: #660066;
    }

    .programbtn{    
        border-radius: 0px;
        color: #fff;    
        text-align: center;
    }
    @media screen and (max-width: 768px){
        margin-bottom: 2rem;
    }

    .start{
        background-color: #ff6699;
    }
    .advanced{
        background-color: #660066;
    }
    .individual{
        background-color: #ff9900;
    }


`;

const InnerContent = styled.div `
        display: flex;
    justify-content: center;
    align-items: center;

`;

const SelectingButton = styled. div `
   
    /* display: inline-block;
    padding-top: 1.5rem;
    .btn{
        padding: 0.8rem;
        width: 25rem;
        margin-left: 5rem;
        color: #fff;
        border-radius: 0px;
    }
    .start{
        background-color: #ff6699;
    }
    .advanced{
        background-color: #660066;
    }
    .individual{
        background-color: #ff9900;
    }

    @media screen and (max-width: 1440px){
        .start, .advanced, .individual{
            display: none;
        }
    } */
`;


const PricingPlan = () => {


    useEffect(() =>{
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
          <Pricing>
              <Heading data-aos="fade-left">
              <div className="container py-5">
                            <div className="row ">
                                <div className="col-md-6 mx-auto d-flex justify-content-center">
                                    <h6>Choose a Plan</h6>
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-md-6 mx-auto d-flex justify-content-center">
                                    <h1>Pricing Plans</h1>
                                </div>
                            </div>
                </div>
              </Heading>
              
             <InnerContent>
             <div className="container-fluid ">
                            <div className="row ">
                                <div className="col-md-1"></div>
                                <div className="col-md-3">
                                    <MainContent data-aos="fade-down">
                                        <h4>Easy Education</h4><br/>
                                        <h2>Rs. 4,000</h2><br/>
                                        <p>This course is perfect for someone who wants to start early language learning.</p>
                                        <button className="btn programbtn start" primary="false">
                                            CHOOSE THE PROGRAM
                                            </button>
                                    </MainContent> 

                                </div>

                                <div className="col-md-3">
                                    <MainContent data-aos="fade-down">
                                        <h4>Advanced Program</h4><br/>
                                        <h2>Rs. 9,000</h2><br/>
                                        <p>Get all the benefits from our courses. Advanced books, teacher notes and many more.</p>
                                        <button className="btn programbtn advanced" primary="false">
                                            CHOOSE THE PROGRAM
                                            </button>
                                    </MainContent> 
                                </div>

                                <div className="col-md-3">
                                    <MainContent data-aos="fade-down">
                                        <h4>Individual Program</h4><br/>
                                        <h2>Rs. 5,000</h2><br/>
                                        <p>Moreover our professional courses, books and skill amusement for individual.</p>
                                        <button className="btn programbtn individual" primary="false">
                                            CHOOSE THE PROGRAM
                                            </button>
                                    </MainContent> 
                                </div>
                     <div className="col-md-1"></div>
                     </div>

                    </div>
                   
                </InnerContent>
          </Pricing>

        </>
    )
}

export default PricingPlan
