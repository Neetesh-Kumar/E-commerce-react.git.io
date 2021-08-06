import { MDBContainer, MDBView } from 'mdbreact';
import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBMask, MDBCardTitle, MDBCardText, MDBBtn, MDBCard, MDBCardImage, MDBCardBody } from 'mdbreact';
import src1 from '../../assets/avt-1.jpg';
import src2 from '../../assets/avt-2.jpg';
import src3 from '../../assets/avt-3.png'

class About extends Component {
    render() {
        return (
        <MDBContainer className="white">
            <MDBRow>
                <MDBCol md="12" className="mb-3">
                    <MDBView waves className="about-img">
                        <img src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="img-fluid z-depth-1" alt="" />
                        <MDBMask className="flex-center" overlay="green-slight">
                            <h1 className="white-text display-3 mb-5 wow fadeInDown" data-wow-delay="0.3s">About Us</h1>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
            </MDBRow>
            <h2 class="font-weight-bold text-center h1 my-5">Our amazing team</h2>
            <MDBRow className="justify-content-center">
                <MDBCol sm="12" md="6" lg="3" className="mb-5">
                    <MDBCard>
                        <MDBCardImage className="img-fluid" src={src1} />
                        <MDBCardBody>
                            <MDBCardTitle className="text-center mb-2 font-bold">Aneel Kumar</MDBCardTitle>
                            <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">Web Developer</MDBCardTitle>
                            <MDBCardText>
                                <strong className="mb-2">About:</strong>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur quibusdam numquam laboriosam, minus, provident...
                            </MDBCardText>
                            <div className="row justify-content-center pr-1">
                                <a className="p-2 m-2 fa-lg fb-ic"><i className="fab fa-facebook-f"> </i></a>
                                <a className="p-2 m-2 fa-lg tw-ic"><i className="fab fa-twitter"> </i></a>
                                <a className="p-2 m-2 fa-lg dribbble-ic"><i className="fab fa-dribbble"> </i></a>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm="12" md="6" lg="3" className="mb-5">
                    <MDBCard>
                        <MDBCardImage className="img-fluid" src={src3} />
                        <MDBCardBody>
                            <MDBCardTitle className="text-center mb-2 font-bold">Zahid Saleh</MDBCardTitle>
                            <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">Photographer</MDBCardTitle>
                            <MDBCardText>
                                <strong className="mb-2">About:</strong>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur quibusdam numquam laboriosam, minus, provident...
                            </MDBCardText>
                            <div className="row justify-content-center pr-1">
                                <a className="p-2 m-2 fa-lg fb-ic"><i className="fab fa-facebook-f"> </i></a>
                                <a className="p-2 m-2 fa-lg tw-ic"><i className="fab fa-twitter"> </i></a>
                                <a className="p-2 m-2 fa-lg dribbble-ic"><i className="fab fa-dribbble"> </i></a>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm="12" md="6" lg="3" className="mb-5">
                    <MDBCard>
                        <MDBCardImage className="img-fluid" src={src2} />
                        <MDBCardBody>
                            <MDBCardTitle className="text-center mb-2 font-bold">Neetesh Kumar</MDBCardTitle>
                            <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">Web Designer</MDBCardTitle>
                            <MDBCardText>
                                <strong className="mb-2">About:</strong>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur quibusdam numquam laboriosam, minus, provident...
                            </MDBCardText>
                            <div className="row justify-content-center pr-1">
                                <a className="p-2 m-2 fa-lg fb-ic"><i className="fab fa-facebook-f"> </i></a>
                                <a className="p-2 m-2 fa-lg tw-ic"><i className="fab fa-twitter"> </i></a>
                                <a className="p-2 m-2 fa-lg dribbble-ic"><i className="fab fa-dribbble"> </i></a>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        );
    }
}

export default About;