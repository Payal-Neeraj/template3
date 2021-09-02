import React from 'react'
import styled from 'styled-components';
import handswithpen from '../images/handswithpen.jpg';
import readingbook from '../images/readingbook.jpg'
import laptop1 from '../images/laptopoffice (1).jpg'
import laptop2 from '../images/laptopoffice (2).jpg'
import india from '../images/india.png'
import english from '../images/english.png'
import spain from '../images/spain.png'
import germany from '../images/germany.png'
import france from '../images/france.png'
import russia from '../images/russia.png'
import Button from './Button';
import SlickSlider from './SlickSlider';

const Middle = styled.div `
 background-color: #660066;
 height: 35rem;
 width: 100%;
`; 

const ImageSection = styled.div `
background-color: #660066;
margin-right: 4.1rem;
margin-left: 4.1rem;
height: 40rem;

img{
    max-width: 100%;
    width: 100%;
    height: 40rem;

    justify-content: center;
    align-items: center;
    object-fit: cover;
    
    
}
p{
    margin-top: -10rem;
    margin-left: -34rem;
}
h1{
    margin-top: -5rem;
}
`;

const ImageHead = styled.div `
width: 30rem;

h1{
    margin-top: -29rem;
    margin-left: 8rem;
    color: #660066;
    font-weight: bolder;
}
`;

 const LanguageSection = styled.div `
    padding-top: 10rem;
    padding-bottom: 5rem;
    background-color: #f0f5f5;  /* background color */

    @media screen and (max-width: 768px){
        .firstbox{
            margin-bottom: 10px;
        }
    }
    p{
        color: #ff6699;
        padding-bottom: -4px;
    }
    h1{
        color: #660066;
    }
    

`;

const BoxNumber = styled.div `
    height: 5rem;
    width: 13rem;
    background-color: white;
    padding: 15px;
    display: inline-block;

    h6{
        margin-left: 63px;
        margin-top: -37px;
    }
    
`; 

const BoxRank = styled.div `
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 8px;
    background: #ff9900;  /* circle button color */
    color: #fff;
    text-align: center;
    font: 22px Nunito , sans-serif;
    font-weight: bold;
`;

const EducationBox = styled.div `

`;
const UpperBox = styled.div `
    background: linear-gradient(to top,  #660066 50%, #f0f5f5 50%); 
`;



const MainEducationBox = styled.div `
    background-color: #fff;
    padding: 3.5rem;
    margin-left: 15rem;
    /* position: absolute; */

    .innercol{
        margin-top: 2rem;
    }

    @media screen and (max-width:768px){
        margin-left: 0;
    }

    .innercolp{
        color: #ff6699;
    }
    h1{
        color: #660066;
        
    }
    .button{
        padding: 1rem;
        background-color: #ff6699; 
        margin-bottom: 1.5rem;
    }
`;

const ImageColumn = styled.div `
img{
    max-width: 100%;
    height: auto;
    width: 30rem;  
    object-fit: cover;
    display: block;
}
`;

const InnerImageColumn = styled.div `
    img{
        height: auto;
        max-width: 100%;
        width: 13.4rem;
        object-fit: cover;
        display: block;
        margin-left: -1rem;
    }
`; 

const ImageSection1 = styled.div `
    img{
        height: auto;
        width: 27rem;
        max-width: 100%;
        object-fit: cover;
        display: block;
    }
`;



const FeaturedCoursesBox = styled.div `

    background-color: #660066;
    padding: 3.5rem;


`;

const FeaturedTags = styled.div `
    background-color: #660066;
    display:flex;
    justify-content: center;
    align-items: center;
    color: #fff;

/*     .countrybutton{
        padding: 1rem;
        background-color: #660066;
        box-shadow: 11px 11px 11px 11px rgba(0, 0, 0, 0.1); 
        width: 7rem;
        display:flex;
        justify-content: center;
        align-items: center;

    }

    .buttonclass{
        display:flex;
        justify-content: center;
        align-items: center;
    } */
`; 

 const CountryBox = styled.div `
    background-color: #660066;
    width: 7rem;
    height: 3rem;
    box-shadow: 11px 11px 11px 11px rgba(0, 0, 0, 0.1);
    padding: 1rem; 
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    display: inline-block;
 `;


const MiddleSection = () => {
    return (

        <>
            <Middle>
                <ImageSection>
                    <img src={ handswithpen } alt="laptopwork" />
                    <ImageHead>
                    <h1>Any Language You Want!</h1>
                    </ImageHead>
                    
                </ImageSection>
            </Middle>
                     <LanguageSection>
                 <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        
                        <div className="col-md-4 ms-2">
                        <p>Start Now!</p>
                        <h1>Learn a new Language!</h1>
                        <p></p>
                        </div>

                        <div className="col-md-6"> 
                        <div className="row">
                            <div className="col-md-6  firstbox">
                            <BoxNumber>
                                <BoxRank>
                                    1
                                </BoxRank>
                                <h6>An Easy Study Approach</h6>        
                            </BoxNumber>
                            </div>
                            <div className="col-md-6 ">
                            <BoxNumber>
                            <BoxRank>
                                    2
                                </BoxRank>
                                <h6>Free Teaching Material</h6>        
                            </BoxNumber>
                            </div>
                            
                        </div>    

                        <div className="row mt-4">
                            <div className="col-md-6 firstbox">
                            <BoxNumber>
                                <BoxRank>
                                    3
                                </BoxRank>
                                  <h6>A Free Mobile Application</h6>      
                            </BoxNumber>
                            </div>
                            <div className="col-md-6 ">
                            <BoxNumber>
                            <BoxRank>
                                    4
                                </BoxRank>
                                <h6>An Accredit School</h6>        
                             </BoxNumber>
                            </div>
                            
                        </div>               
                        </div>
                       
                    </div>

                </div>  
                </LanguageSection> 

                <EducationBox>
                    <UpperBox>
                        
                    <MainEducationBox>
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-md-7">
                                    <ImageColumn>
                                        <img src={ readingbook } alt={readingbook } />
                                    </ImageColumn>
                                    <div className="row innercol">
                    
                                        <div className="col-md-5">
                                            <h4>Watch Intro Video About Schools</h4>
                                            <p>Are you Introvicing in our schools and classes?</p>
                                        </div>
                                        <div className="col-md-7">
                                            <InnerImageColumn>
                                                <img src={ laptop1 } alt={laptop1} />
                                            </InnerImageColumn>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <p className="innercolp">High Quality !</p>
                                    <h1>Let's Start An Education !</h1>
                                    <p className="my-4">Our teaching team and courses are recognised as being one of the highest
                                     standards . We have a strong international reputation for providing high
                                     quality language courses</p>
                                    <Button className="button" to="/appointment" primary="false">
                                        Make an Appointment</Button>
                                        <ImageSection1>
                                            <img src={laptop2} alt={laptop2} />
                                        </ImageSection1>
                                    
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>


                    </MainEducationBox>

                    </UpperBox>
                    </EducationBox>
                    
                     <FeaturedCoursesBox>
                        
                        <FeaturedTags>
                        <div className="container ">
                            <div className="row ">
                                <div className="col-md-6 mx-auto d-flex justify-content-center">
                                    <h6>Find a Course</h6>
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-md-6 mx-auto d-flex justify-content-center">
                                    <h1>Featured Courses</h1>
                                </div>
                                </div>

                                {/*Courses  Slider*/}
                                <SlickSlider />
                            
                            {/* <div className="row my-5">
                                <div className="col-md-3"></div>
                                <div className="col-md-1">
                                <CountryBox>
                                <img src={india} alt={india} />&nbsp;
                                    Hindi
                                </CountryBox>
                                </div>

                                <div className="col-md-1">
                                <CountryBox>
                                <img src={english} alt={english} />&nbsp;
                                    English
                                </CountryBox>
                                
                                </div>

                                <div className="col-md-1">
                                <CountryBox>
                                <img src={germany} alt={germany} />&nbsp;
                                    Germany
                                </CountryBox>
                                </div>

                                <div className="col-md-1">
                                <CountryBox>
                                <img src={spain} alt={spain} />&nbsp;
                                    Spanish
                                </CountryBox>
                                </div>

                                <div className="col-md-1">
                                <CountryBox>
                                <img src={france} alt={france} />&nbsp;
                                    French
                                </CountryBox>
                                </div>

                                <div className="col-md-1">
                                <CountryBox>
                                <img src={russia} alt={russia} />&nbsp;
                                    Russia
                                </CountryBox>
                                </div>
                                <div className="col-md-3"></div>
                            </div> */}
                        </div>
                        
                        </FeaturedTags>
                        
                        
                    </FeaturedCoursesBox> 
                

               
        </>
    )
}

export default MiddleSection
