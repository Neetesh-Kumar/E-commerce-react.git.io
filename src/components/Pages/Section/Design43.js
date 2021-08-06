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

class Desgin43EcommercePage extends Component {

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
              src='https://www.junaidjamshed.com/media/catalog/product/2/0/20-6004-11.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Kids J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Cambric Girls Kurti </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,323</strong>
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
              src='https://www.junaidjamshed.com/media/catalog/product/3/8/38257_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Kids J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Special Kurta</a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 2,472</strong>
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
              src='https://www.junaidjamshed.com/media/catalog/product/4/0/40044_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Kids J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Boys Kurta</a>
                </strong>
              </MDBCardTitle>
            
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 4,497</strong>
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
              src='https://www.junaidjamshed.com/media/catalog/product/2/0/20-6002_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Kids J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Khaddar Girls Kurti</a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,183</strong>
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
              src='https://www.junaidjamshed.com/media/catalog/product/2/0/20-1162_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Girls J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Khaddar Duppta </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 2,163</strong>
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
              src='https://www.junaidjamshed.com/media/catalog/product/2/0/20-1163_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Girls J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>MARIT  </a>
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
              src='https://www.junaidjamshed.com/media/catalog/product/2/0/20-1132_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Girls J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>ONYX</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 2,303</strong>
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
              src='https://www.junaidjamshed.com/media/catalog/product/2/0/20-7009_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Girls J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>WINTER WILLOW</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,533</strong>
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
              src='https://www.junaidjamshed.com/media/catalog/product/3/0/30731_1__1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Men Kameez Shalwar  </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 3,732</strong>
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
              src='https://www.junaidjamshed.com/media/catalog/product/3/6/36670_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Men Kameez Shalwar
</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 3,743</strong>
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
              src='https://www.junaidjamshed.com/media/catalog/product/7/0/7027-tsr_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Men Unstitched Fabric</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 5,092</strong>
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
              src='https://www.junaidjamshed.com/media/catalog/product/7/0/7018-tsr_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man J. Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Ta'assur Premium 
</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 5,092</strong>
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

      <MDBModal className="modalResize" size="lg" isOpen={this.state.modal13} toggle={this.toggle(13)}>
          <MDBModalBody className="d-flex">
            <MDBRow>
            <MDBCol>
              <MDBCardImage
              cascade
              src='https://www.junaidjamshed.com/media/catalog/product/2/0/20-6004-11.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
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



        <MDBModal className="modalResize" size="lg" isOpen={this.state.modal13} toggle={this.toggle(13)}>
          <MDBModalBody className="d-flex">
            <MDBRow>
            <MDBCol>
              <MDBCardImage
              cascade
              src='https://www.junaidjamshed.com/media/catalog/product/3/8/38257_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436'
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
};
};

export default Desgin43EcommercePage;