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
  MDBModal,
  MDBModalBody,
  MDBBtn
} from 'mdbreact';
import ModalPage from './ModalPage';

class Desgin33EcommercePage extends Component {

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
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/WTP402013JETBLK.jpg?v=1605528252'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Puffer Women Jacket Winter </a>
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
        <MDBAnimation reveal type="slideInRight">
                    <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/WTP402012-BEGOLV.jpg?v=1607148898'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Cargo Trucker with Hood</a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 4,490</strong>
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
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/WTP402015BLK_2.jpg?v=1608023400'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Basic Blazer with a Vent</a>
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
        <MDBAnimation reveal type="slideInRight">
                    <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/WTF402019OLV_1.jpg?v=1605851525'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Non-Denim Cropped Trucker </a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,990</strong>
                </span>
                <span className='float-right'>
                <MDBBtn onClick={this.toggle(13)} className="modalbtn"><MDBIcon icon="search-plus" className="modalbtnicon"/></MDBBtn>

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
        <MDBAnimation reveal type="slideInRight">    
              <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/WTF402006BLK_3.jpg?v=1603907043'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Velour Jacket </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 3,190</strong>
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
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/WTF402005BLK_cc4c3427-d0ea-4196-a42f-ca3be2effa9e.jpg?v=1603985107'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Cropped Puffer Jacket </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 3,190</strong>
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
        <MDBAnimation reveal type="slideInRight">
                    <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/115_1efd7217-0d6a-47dc-8c13-006374441d26.jpg?v=1607686255'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Flap Pockets shirt </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,190</strong>
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
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/WTF402040HTRGRY.jpg?v=1603899667'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Co-ord Set </a>
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
        </MDBRow>

        <br/>
        <MDBRow>
        <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
        <MDBAnimation reveal type="flipInX">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/frame-02.jpg?v=1604318956'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Co-ord Set with Multicolor  </a>
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
        <MDBAnimation reveal type="flipInX">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/WTF402054CBTBLU_2.jpg?v=1607155022'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Frill Sweater Multicolor</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 2,190</strong>
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
        <MDBAnimation reveal type="flipInY">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/13_628aaf1b-3f5f-4779-85a9-8fad80a66c43.jpg?v=1605761208'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Mélange Charcoal Tone Pullover </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 2,190</strong>
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
        <MDBAnimation reveal type="flipInY">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/WTF402035BLK.jpg?v=1605777383'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>W-OutFitters</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Over-Sized Sweater Multicolor </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 2,190</strong>
                </span>
                <span className='float-right'>
                <MDBBtn onClick={this.toggle(13)} className="modalbtn"><MDBIcon icon="search-plus" className="modalbtnicon"/></MDBBtn>

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
              src='https://cdn.shopify.com/s/files/1/2290/7887/products/WTP402013JETBLK.jpg?v=1605528252'
              top
              alt='sample photo'
              overlay='white-slight'
            />
              </MDBCol>
              <MDBCol>
                <div>
                  <h1>Puffer Jacket</h1>
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
  }
};

export default Desgin33EcommercePage;