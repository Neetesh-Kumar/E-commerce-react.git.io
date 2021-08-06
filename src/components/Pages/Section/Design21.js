import React from 'react';
import { MDBCard,MDBAnimation, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
// import Desgin3cnt from './Pages/Design3cnt';

const Desgin21CardExample = () => {
  return (
    <MDBRow>
       
      <MDBCol style={{ maxWidth: "90rem" }}>
      <MDBAnimation reveal type="fadeInDown">
      <MDBCard reverse style={{position: 'relative', top:'-40px'}}>
        <MDBCardImage cascade style={{ height: '450px', width:'100%' }} src="https://image.slidesharecdn.com/aktmpresentation-180523063034/95/alkaram-textile-mills-pvt-ltd-4-638.jpg?cb=1527057119" />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>Brand Alkaram</MDBCardTitle>
            <h5 className="indigo-text"><strong>  Alkaram Product</strong></h5>
            <MDBCardText>Snag these must-haves at great prices. End of season sale still on. </MDBCardText>
            <a href="#!" className="icons-sm li-ic ml-1">
              <MDBIcon fab icon="linkedin-in" /></a>
            <a href="#!" className="icons-sm tw-ic ml-1">
              <MDBIcon fab icon="twitter" /></a>
            <a href="#!" className="icons-sm fb-ic ml-1">
              <MDBIcon fab icon="facebook-f" /></a>
          </MDBCardBody>
        </MDBCard>
        </MDBAnimation>
      </MDBCol>
     
    </MDBRow>
  
  )
      }

export default Desgin21CardExample;