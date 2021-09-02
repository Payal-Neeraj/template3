import React from 'react';
import styled from 'styled-components';


const SubscribeSection = styled.div `
    background-color: #660066;
    color: #fff;

    .programbtn{
        background-color: #ff6699;
        color: white;
        display: inline-block;
        margin-top: 4.9rem;
    }

    h5{
        color: #ff9900;
    }
`;

const EmailSection = styled.div `
    display:  flex;
    justify-content: center;
    align-items: center;
    .form-control{
        border: 0;
        margin-top: 5rem;
        margin-left: 15rem;
        width: 15rem;
        border-radius: 0px;
        display: inline-block;
    }

    
`;

const Subscribe = () => {
    return (
        <>
        <SubscribeSection>
          <div className="container-fluid ">
            <div className="row py-5">
                <div className="col-md-2"></div>  
                <div className="col-md-4">
                    <h5>Subscribe Now!</h5>
                    <h1>Subscribe School's NewsLetters!</h1>
                    <p>Want to get all our latest news, events and promotions?</p>
                </div> 
                <div className="col-md-4">
                    <EmailSection>
                        <input type="email" className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" placeholder="Enter Email" />


                    </EmailSection>
                    
                </div> 
                <div className="col-md-2">
                <button className="btn programbtn">
                        SUBSCRIBE NOW
                    </button> 
                </div> 
            </div>      
        </div> 
        </SubscribeSection> 
        </>
    )
}

export default Subscribe
