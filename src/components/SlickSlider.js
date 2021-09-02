import React, { Component } from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import slider1 from '../images/slider1.jpg' 
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '..//images/slider4.jpg'
import slider5 from '../images/slider5.jpg'
import slider6 from '../images/slider6.jpg'
import slider7 from '../images/slider7.jpg'
import slider8 from '../images/slider8.jpg'
import calendar from '../images/calendar_month.png'
import '../css/middleSection.css'


const ImageSection = styled.div `
img{
    max-width: 100%;
    height: 10rem;
    width: 15.5rem;  
    object-fit: cover;
    display: block;
    /* margin-left: 2rem; */
}
`;

const Description = styled.div `
    background-color: #660066;
    box-shadow: 11px 11px 11px 11px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    padding: 1rem;
    width: 15.5rem; 
`;

const MonthImage = styled.div `
    
    img{
        float: left;
        width: 2rem;
        height: 2rem;
        margin-top: -0.3rem;
    }
    p{
        margin-left: 3rem;
    }

`;

 export default class SlickSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container-fluid my-3">
        <div className="row">
            <div className="col-md-10 mx-auto">
        
        <Slider {...settings}>
          <ImageSection>
              <img src={slider1} alt={slider1} />
              <Description>
                <h5>General English</h5>
                <p>You can learn in small groups in 15 hours per week.</p>
                <hr/>
                <MonthImage>
                    <img src={calendar} alt={calendar} />
                    <p>10 weeks</p>
                </MonthImage>
                <p>Start in a month</p>
            </Description>
            </ImageSection>
            
          <div>
          <ImageSection>
              <img src={slider2} alt={slider1} />
              <Description>
                <h5>Business English</h5>
                <p>Mini group courses is comprised of small groups.</p>
                <hr/>
                <MonthImage>
                    <img src={calendar} alt={calendar} />
                    <p>12 weeks</p>
                </MonthImage>
                <p>Start in a week</p>
            </Description>
            </ImageSection>
          </div>
          <div>
          <ImageSection>
              <img src={slider3} alt={slider1} />
              <Description>
                <h5>Work Placements</h5>
                <p>Small classes with focus on the business conversational.</p>
                <hr/>
                <MonthImage>
                    <img src={calendar} alt={calendar} />
                    <p>15 weeks</p>
                </MonthImage>
                <p>Start in a month</p>
            </Description>
            </ImageSection>
          </div>
          <div>
          <ImageSection>
              <img src={slider4} alt={slider1} />
              <Description>
                <h5>Exam Preparation</h5>
                <p>This course is available for all your different exams.</p>
                <hr/>
                <MonthImage>
                    <img src={calendar} alt={calendar} />
                    <p>11 weeks</p>
                </MonthImage>
                <p>Start in a week</p>
            </Description>
            </ImageSection>
          </div>
          <ImageSection>
              <img src={slider5} alt={slider1} />
              
              <Description>
                <h5>General English</h5>
                <p>You can learn in small groups in 15 hours per week.</p>
                <hr/>
                <MonthImage>
                    <img src={calendar} alt={calendar} />
                    <p>10 weeks</p>
                </MonthImage>
                <p>Start in a month</p>
            </Description>
            </ImageSection>
            
          <div>
          <ImageSection>
              <img src={slider6} alt={slider1} />
              <Description>
                <h5>Business English</h5>
                <p>Mini group courses is comprised of small groups.</p>
                <hr/>
                <MonthImage>
                    <img src={calendar} alt={calendar} />
                    <p>12 weeks</p>
                </MonthImage>
                
                <p>Start in a week</p>
            </Description>
            </ImageSection>
          </div>
          <div>
          <ImageSection>
              <img src={slider7} alt={slider1} />
              <Description>
                <h5>Work Placements</h5>
                <p>Small classes with focus on the business conversational.</p>
                <hr/>
                <MonthImage>
                    <img src={calendar} alt={calendar} />
                    <p>15 weeks</p>
                </MonthImage>
                <p>Start in a month</p>
            </Description>
            </ImageSection>
          </div>
          <div>
          <ImageSection>
              <img src={slider8} alt={slider1} />
              <Description>
                <h5>Exam Preparation</h5>
                <p>This course is available for all your different exams.</p>
                <hr/>
                <MonthImage>
                    <img src={calendar} alt={calendar} />
                    <p>11 weeks</p>
                </MonthImage>
                <p>Start in a week</p>
            </Description>
            </ImageSection>
          </div>
        </Slider>
        </div>
      </div>
      </div>
    );
  }
}
