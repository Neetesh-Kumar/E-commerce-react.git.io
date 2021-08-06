import React from 'react';
import { MDBCard, MDBAnimation, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
// import Desgin3cnt from './Pages/Design3cnt';

const Desgin31CardExample = () => {
  return (
    <MDBRow>
      
      <MDBCol style={{ maxWidth: "90rem" }}>
      <MDBAnimation reveal type="fadeInDown">
      <MDBCard reverse style={{position: 'relative', top:'-40px'}}>
        <MDBCardImage cascade style={{ height: '450px', width:'100%' }}src="https://media-exp1.licdn.com/dms/image/C561BAQGXNRvtPZNd4w/company-background_10000/0/1519801941280?e=2159024400&v=beta&t=xBmHJG-tWOhUErdQRosAvfM3LEpkiHKVE0XITdAOb7o" />
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>Brand Outfitters</MDBCardTitle>
            <h5 className="indigo-text"><strong>Women - Outfitters</strong></h5>
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

export default Desgin31CardExample;