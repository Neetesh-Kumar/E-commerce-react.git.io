import React from "react";
import { MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBIcon,
    MDBTooltip,
    MDBAnimation, 
    MDBBadge,
    MDBView,
    MDBMask} from "mdbreact";

const CardSection = () => {
  return (
    <section className='text-center my-5'>
    <h2 className='h1-responsive font-weight-bold text-center my-5'>Our bestsellers</h2>
    <p className='grey-text text-center w-responsive mx-auto mb-5'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
      totam voluptas nostrum quisquam eum porro a pariatur veniam.
    </p>
    <MDBRow>
      <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
      <MDBAnimation reveal type="fadeInUp">
        <MDBCard cascade narrow ecommerce>
          <MDBView hover zoom>
          <MDBCardImage
            cascade
            src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg'
            top
            alt='sample photo'
            overlay='white-slight'
          />
          <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text overLayText">Denim</p>
          </MDBMask>
          </MDBView>
          <MDBCardBody cascade className='text-center'>
            <a href='#!' className='grey-text'>
              <h5>Denim</h5>
            </a>
            <MDBCardTitle>
              <strong>
                <a href='#!'>Denim trousers</a>
              </strong>
            </MDBCardTitle>
            <ul className='rating'>
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon far icon='star' className="amber-text" />
            </ul>
            <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
            <MDBCardFooter className='px-1'>
              <span className='float-left font-weight-bold'>
                <strong><s>49$</s></strong>
              </span>
              <span className='float-right'>
              <MDBBadge pill color="danger">New Price</MDBBadge>
              {" "}32$
              </span>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
        </MDBAnimation>
      </MDBCol>
      <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
      <MDBAnimation reveal type="fadeInUp">
        <MDBCard cascade narrow ecommerce>
          <MDBView hover zoom>
          <MDBCardImage
            cascade
            src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg'
            top
            alt='sample photo'
            overlay='white-slight'
          />
          <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text overLayText">White Dress</p>
          </MDBMask>
          </MDBView>
          <MDBCardBody cascade className='text-center'>
            <a href='#!' className='grey-text'>
              <h5>White Dress</h5>
            </a>
            <MDBCardTitle>
              <strong>
                <a href='#!'>Coctail-Dress</a>
              </strong>
            </MDBCardTitle>
            <ul className='rating'>
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
            </ul>
            <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
            <MDBCardFooter className='px-1'>
              <span className='float-left font-weight-bold'>
                <strong><s>89$</s></strong>
              </span>
              <span className='float-right'>
              <MDBBadge pill color="danger">New Price</MDBBadge>
              {" "}56$
              </span>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
        </MDBAnimation>
      </MDBCol>
      <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
      <MDBAnimation reveal type="fadeInDown">
        <MDBCard cascade narrow ecommerce>
          <MDBView hover zoom>
          <MDBCardImage
            cascade
            src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg'
            top
            alt='sample photo'
            overlay='white-slight'
          />
          <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text overLayText">Outwear</p>
          </MDBMask>
          </MDBView>
          <MDBCardBody cascade className='text-center'>
            <a href='#!' className='grey-text'>
              <h5>Outwear</h5>
            </a>
            <MDBCardTitle>
              <strong>
                <a href='#!'>Brown coat</a>
              </strong>
            </MDBCardTitle>
            <ul className='rating'>
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon far icon='star-half' className="amber-text" />
            </ul>
            <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
            <MDBCardFooter className='px-1'>
              <span className='float-left font-weight-bold'>
                <strong><s>59$</s></strong>
              </span>
              <span className='float-right'>
              <MDBBadge pill color="danger">New Price</MDBBadge>
              {" "}36$
              </span>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
        </MDBAnimation>
      </MDBCol>
      <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>
      <MDBAnimation reveal type="fadeInDown">
        <MDBCard cascade narrow ecommerce>
          <MDBView hover zoom>
          <MDBCardImage
            cascade
            src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg'
            top
            alt='sample photo'
            overlay='white-slight'
          />
          <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text overLayText">Blouses</p>
          </MDBMask>
          </MDBView>
          <MDBCardBody cascade className='text-center'>
            <a href='#!' className='grey-text'>
              <h5>Blouses</h5>
            </a>
            <MDBCardTitle>
              <strong>
                <a href='#!'>Shirt</a>
              </strong>
            </MDBCardTitle>
            <ul className='rating'>
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon icon='star' className="amber-text" />
                <MDBIcon far icon='star' className="amber-text" />
            </ul>
            <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
            <MDBCardFooter className='px-1'>
              <span className='float-left font-weight-bold'>
                <strong><s>119$</s></strong>
              </span>
              <span className='float-right'>
                <MDBBadge pill color="danger">New Price</MDBBadge>
                {" "}96$
              </span>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
        </MDBAnimation>
      </MDBCol>
    </MDBRow>

<br/>
    <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
        <MDBAnimation reveal type="fadeInLeft">
          <MDBCard className="align-items-center">
            <MDBView hover zoom>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text overLayText">Denim Shirt</p>
          </MDBMask>
          </MDBView>
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Shirt</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Denim Shirt<br/>
                    <MDBBadge pill color="danger">
                      NEW
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>120$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
        <MDBAnimation reveal type="fadeInLeft">
          <MDBCard className="align-items-center">
            <MDBView hover zoom>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text overLayText">Red Hoody</p>
          </MDBMask>
            </MDBView>
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport wear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Red Hoody<br/>
                    <MDBBadge pill color="danger">
                      NEW Edition
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>139$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
        <MDBAnimation reveal type="fadeInRight">
          <MDBCard className="align-items-center">
            <MDBView hover zoom>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text overLayText">Grey Shirt</p>
          </MDBMask>
            </MDBView>
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Sport wear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Grey Shirt<br/>
                    <MDBBadge pill color="primary">
                      BEST
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>99$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
        <MDBAnimation reveal type="fadeInRight">
          <MDBCard className="align-items-center">
            <MDBView hover zoom>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text overLayText">Black Jacket</p>
          </MDBMask>
          </MDBView>
            <MDBCardBody className="text-center">
              <a href="#!" className="grey-text">
                <h5>Outwear</h5>
              </a>
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    Black jacket<br/>
                    <MDBBadge pill color="dark">
                      Exclusive
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>219$</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
  </section>
  );
}

export default CardSection;