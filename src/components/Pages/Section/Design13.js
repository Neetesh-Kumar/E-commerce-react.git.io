import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBAnimation,
  MDBTooltip,
  MDBBtn,
  MDBModalBody,
  MDBModal,
} from 'mdbreact';

import ModalPage from './ModalPage';

class Desgin13EcommercePage extends Component {

  state = {
    modal13: false,
    accordion: 1,
    img:""
  }
  
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  
  onClick = nr => () => {
    this.setState({
      accordion: nr
    });
  }


  render(){
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>Our bestsellers</h2>
      <p className='grey-text text-center w-responsive mx-auto mb-5'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="slideInLeft">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/295070942-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>TAPER FIT MEN'S JEANS </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 3,490</strong>
                </span>
                <span className='float-right'>
                 
                <MDBBtn onClick={this.toggle(13)} className="modalbtn"><MDBIcon icon="search-plus" className="modalbtnicon"/></MDBBtn>

                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="slideInLeft">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/Levis/clothing/723340223-front-pdp.jpg?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>ORIGINAL TRUCKER JACKET</a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 4,490</strong>
                </span>
                <span className='float-right'>
                 
                   <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="slideInRight">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/045114919-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>SLIM FIT MEN'S JEANS</a>
                </strong>
              </MDBCardTitle>
            
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 3,490</strong>
                </span>
                <span className='float-right'>
                 
                   <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="slideInRight">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/055101101-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>SKINNY FIT MEN'S JEANS</a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,990</strong>
                </span>
                <span className='float-right'>
                 
                   <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
            </MDBAnimation>
        </MDBCol>
        </MDBRow>

        <br/>
        <MDBRow>

        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="slideInLeft">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/045115007-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>SLIM FIT MEN'S JEANS </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 3,190</strong>
                </span>
                <span className='float-right'>
                 
                   <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="slideInLeft">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/171990027-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>CHINO SLIM FIT PANTS </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 3,190</strong>
                </span>
                <span className='float-right'>
                 
                   <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="slideInRight">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/005141541-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>STRAIGHT FIT MEN'S JEANS </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,190</strong>
                </span>
                <span className='float-right'>
                 
                   <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="slideInLeft">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/005013184-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>ORIGINAL FIT MEN'S JEANS</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 3,490</strong>
                </span>
                <span className='float-right'>
                 
                   <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        </MDBRow>

        <br/>
        <MDBRow>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="flipInX">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/723340322-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>ORIGINAL TRUCKER JACKET  </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 3,490</strong>
                </span>
                <span className='float-right'>
                 
                   <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="flipInX">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/845580052-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>SKINNY TAPER FIT MEN'S JEANS</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 2,190</strong>
                </span>
                <span className='float-right'>
                  
                   <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="flipInY">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/288330852-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>SLIM TAPER FIT MEN'S JEANS</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 2,190</strong>
                </span>
                <span className='float-right'>
                 
                   <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="flipInY">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/288330794-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Levis Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>SLIM TAPER FIT MEN'S JEANS </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 2,190</strong>
                </span>
                <span className='float-right'>
                <MDBTooltip domElement placement='top' class="iconhover">
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>

      
      <MDBModal className="modalResize" size="lg" isOpen={this.state.modal13} toggle={this.toggle(13)}>
          <MDBModalBody className="d-flex">
            <MDBRow>
            <MDBCol>
              <MDBCardImage
              cascade
              src='https://lsco.scene7.com/is/image/lsco/295070942-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120'
              top
              alt='sample photo'
              overlay='white-slight'
            />
              </MDBCol>
              <MDBCol>
                <div>
                  <h1>Man Levis Brand</h1>
                  <h3>Colors Available</h3>
                    <li className="liClass"><MDBIcon icon="square" className="black-text"/> Black</li>
                    <li className="liClass"><MDBIcon icon="square" className="pink-text"/> Pink</li>
                    <li className="liClass"><MDBIcon icon="square" className="red-text"/> Red</li>
                    <li className="liClass"><MDBIcon icon="square" className="blue-text"/> Blue</li>
                  <h2>Description</h2>
                  <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Tristique vitae ornare scelerisque justo adipiscing. Porta amet tortor vel orci magnis fringilla posuere. Turpis quis dolor quam accumsan ridiculus pretium class ex.</p>
                </div>
                <div>
                  
                </div>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
          <MDBRow className="justify-content-center">
              <MDBBtn color="secondary" className="ml-4" onClick={this.toggle(13)}>Close</MDBBtn>
              <ModalPage/>
            </MDBRow>
        </MDBModal>
    </section>
  );
};
};

export default Desgin13EcommercePage;