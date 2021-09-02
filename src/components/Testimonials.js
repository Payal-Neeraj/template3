import React, { useEffect } from 'react'
import man from '../images/man.jpg'
import woman from '../images/woman.jpg'
import styled from 'styled-components'
import Aos from 'aos';
import 'aos/dist/aos.css';




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
    @media screen and (max-width: 768px){
        .clientname{
            order: 1;
        }
        .clientdesc{
            order: 2;
        }
    }
    margin-bottom: 4rem;
`;

const Testimonial1 = styled.div `

img{
    max-width: 100%;
    height: 15rem;
    width: 25rem;  
    object-fit: cover;
    display: block;
}
    
`;

const TestimonialDesc1 = styled.div `
    background-color: #f0f5f5;
    padding: 2rem;
    
`;



const Testimonials = () => {
    
    useEffect(() =>{
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
        <Heading data-aos="fade-left">
          <div className="container py-5">
                            <div className="row ">
                                <div className="col-md-6 mx-auto d-flex justify-content-center">
                                    <h6>Testimonials</h6>
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-md-6 mx-auto d-flex justify-content-center">
                                    <h1>What Students Say</h1>
                                </div>
                            </div>
                </div>
                </Heading>
                <MainContent >

                    {/* Testimonial1 */}
                    <div className="container">
                        <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-3">
                                <Testimonial1>
                                    <img src={woman} alt={woman} />
                                </Testimonial1>
                                
                            </div>
                            <div className="col-md-5" data-aos="fade-right">
                                <TestimonialDesc1>
                                    <h5>Lexi Sandoval</h5>
                                    <p>(The course) has helped me understand my students better and helped me 
                                        to see how I can structure their course in order to make learning fun 
                                        and fruitful. Thank you, I have enjoyed these units greatly.</p>
                                </TestimonialDesc1>

                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>

                    </div>

                    {/* Testimonial2 */}
                    <div className="container my-3">
                        <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-5 clientdesc" data-aos="fade-right">
                                <TestimonialDesc1>
                                    
                                    <h5>Jim Rosewood</h5>
                                    <p >I feel that over the duration of the course I gained a lot of knowledge
                                         and practical strategies that will be beneficial to me, and those I 
                                         deal with personally and professionally. The course exceeded my 
                                         expectations significantly.</p>
                                </TestimonialDesc1>

                            </div>
                        <div className="col-md-3 clientname">
                                <Testimonial1>
                                    <img src={man} alt={man} />
                                </Testimonial1>
                                
                            </div>
                            
                            <div className="col-md-1">

                            </div>
                        </div>

                    </div>
                </MainContent>
        </>
    )
}

export default Testimonials
