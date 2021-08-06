import React, { Component, useState } from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer, MDBPageItem } from "mdbreact";
import contact from '../../assets/contact.gif';
import { NavLink } from 'react-router-dom';
import SimpleMap from './Section/GoogleMap';
import ContactForm from './Section/contact_Validation/ContactForm';
import FormSuccess from './Section/contact_Validation/FormSuccess';

const Contact =()=> {
        
        // handlechangeall =(event)=>{
        //     this.setState({[event.target.name] :event.target.value})
        //     event.preventDefault();
        //   event.target.className += " was-validated";
        // };

        // FormSubmit=(event)=>{
                     
        //     console.log("button is clicked.");
        //     // event.preventDefault();
  
           
        //         // alert('Full the form');
            
        //     alert('Thasnks For submition');
        // };
        // submitHandler = event => {
        //   event.preventDefault();
        //   event.target.className += " was-validated";
        // };
      
        // changeHandler = event => {
        //   this.setState({ [event.target.name]: event.target.value });
        // };

        const [isSubmitting, setisSubmitting] = useState(false)
        function submitForm(){
          setisSubmitting(true);
        }
       
    return (
      <>
   <MDBCol className="">
      <MDBCard className="d-flex bd-highlight example-parent ml-auto p-2 col-example ">
        <div className="bg " >
        <MDBRow>
         <MDBCol md='6 ' className=" ">
        <MDBCardImage className="img-fluid1 mt-1 " src={contact}
          waves />
          </MDBCol>
          <MDBCol md='6' className="app " >
          <h1 className="le">Contact</h1>
          </MDBCol>
          </MDBRow>
        </div>
      </MDBCard>
    </MDBCol>

    <section className="contact-section d-flex bd-highlight example-parent ">
      <MDBCard>
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form" >
            <h3 className="mt-4">
                <MDBIcon icon="envelope" className="pr-2" style={{color: "#e66d0a"}}/>
                Write to us:
              </h3>
              {!isSubmitting ? <ContactForm submitForm={submitForm}/> : <FormSuccess />}
              </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4">
            <MDBCardBody className="contact text-center h-100 black-text">
              <h3 className="my-5 pb-2">Contact information</h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p>
                    <MDBIcon icon="map-marker-alt" className="pr-2"style={{color: "#e66d0a"}} />
                    Karachi, 94126 Pakistan
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="phone" className="pr-2"style={{color: "#e66d0a"}} />+ 92 336 3371438
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="envelope" className="pr-2" style={{color: "#e66d0a"}}/>
                    neeteshkumar813@gmail.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="twitter"  style={{color: "#e66d0a"}}/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="linkedin-in" style={{color: "#e66d0a"}} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" style={{color: "#e66d0a"}} />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>

      {/* Map section npm */}
      


      </section>
    
      {/* <MDBContainer className=""> */}
      
      
<div style={{width: '100%', height: '400px'}}>
  <SimpleMap/>
</div>


    
    {/* </MDBContainer> */}
      </>
    );
  
}

export default Contact;