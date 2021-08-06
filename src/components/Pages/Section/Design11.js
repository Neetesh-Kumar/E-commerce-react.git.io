import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBAnimation } from 'mdbreact';
// import Desgin3cnt from './Pages/Design3cnt';

const Desgin11CardExample = () => {
  return (
    <MDBRow>
   
      <MDBCol style={{ maxWidth: "90rem" }}>
      <MDBAnimation reveal type="fadeInDown">
      <MDBCard reverse style={{position: 'relative', top:'-40px'}}>
      <MDBCardImage cascade style={{ height: '450px', width:'100%' }} src="https://thumbs.dreamstime.com/z/levis-logo-entrance-to-shop-mall-retail-chain-stores-sells-jeans-denim-clothing-rijeka-croatia-january-th-168399674.jpg" />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>Brand Levies</MDBCardTitle>
            <h5 className="indigo-text"><strong>All Brand Levis</strong></h5>
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

export default Desgin11CardExample;