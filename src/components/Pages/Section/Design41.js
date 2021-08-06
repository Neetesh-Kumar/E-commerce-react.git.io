import React from 'react';
import { MDBCard,MDBAnimation, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
// import Desgin3cnt from './Pages/Design3cnt';

const Desgin41CardExample = () => {
  return (
    <MDBRow>
       
      <MDBCol style={{ maxWidth: "90rem" }}>
      <MDBAnimation reveal type="fadeInDown">
        <MDBCard reverse style={{position: 'relative', top:'-40px'}}>
          <MDBCardImage cascade style={{ height: '450px', width:'100%' }} src="https://cdn.shopify.com/s/files/1/0013/9326/2680/articles/J._junaid_Jamshed_Men_women_stiched_unstitched_kurti_lawn_cotton_suit_Fragrances_brand_in_Pakistan.jpg?v=1601566837" />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>Brand J.</MDBCardTitle>
            <h5 className="indigo-text"><strong>All Brand J.</strong></h5>
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

export default Desgin41CardExample;