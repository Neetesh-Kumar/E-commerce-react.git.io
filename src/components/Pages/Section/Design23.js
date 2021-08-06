import React from 'react';
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
} from 'mdbreact';

const Desgin23EcommercePage = () => {
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
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/f/kf-39_1_.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5> Kids Girl Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Embroidered Cotton Net Suit </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 2,400</strong>
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
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/k/bks-20_1__1.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Kids Boys Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Dyed Lagoon Kameez Shalwar</a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,345</strong>
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
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/f/kf-38-_4_.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Kids Girls Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Embroidered Jacquard Suit</a>
                </strong>
              </MDBCardTitle>
            
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,745</strong>
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
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/c/bcs-19-_3_.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Kids Boys Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Printed Denim Casual Shirt</a>
                </strong>
              </MDBCardTitle>
             
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,075</strong>
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
        <MDBAnimation reveal type="slideInRight">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/w/fw-14.1-20-purple-1_1.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Girls Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Printed Lawn Suit With Printed Dupatta </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,950</strong>
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
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/w/fw-14.1-20-black-1_1.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Girls Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Printed Lawn Suit With Printed Dupatta </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,950</strong>
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
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/g/mg-48-_1_.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Girls Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Printed Cambric MAK Girl Kurti </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 925</strong>
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
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/mak-w-a5-20-purple-1.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Girls Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>1 Piece Printed Khaddar Shirt</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 813</strong>
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
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/q/mqs-70_1_.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Dyed Caramel Kameez Shalwar  </a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 3,088</strong>
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
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/d/mdk-65_1_.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Dyed Polyester Viscose Kurta</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,375</strong>
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
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/s/mshl-003_1_.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Plain Acrylic Shawl Special</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 2,490</strong>
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
              src='https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/d/mdk-68_5_.jpg'
              top
              alt='sample photo'
              overlay='white-slight'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='grey-text'>
                <h5>Man Alkaram Brand</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Dyed Poly Viscose Kurta</a>
                </strong>
              </MDBCardTitle>
           
              <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>PKR 1,350</strong>
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
    </section>
  );
};

export default Desgin23EcommercePage;