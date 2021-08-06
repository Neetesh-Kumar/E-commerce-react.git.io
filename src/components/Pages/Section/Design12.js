import React from "react";
import { MDBContainer, MDBAnimation, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";

const Desgin12EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Levis Brand
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBAnimation reveal type="fadeInUpBig">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://lsco.scene7.com/is/image/lsco/773800032-dynamic1-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  VINTAGE FIT TRUCKER JACKET <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
        <MDBAnimation reveal type="fadeInUpBig">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://lsco.scene7.com/is/image/lsco/181810550-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  ATHLETIC TAPER MEN'S JEANS <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
        <MDBAnimation reveal type="fadeInUpBig">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://lsco.scene7.com/is/image/lsco/045115011-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  SLIM FIT MEN'S JEANS <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
        <MDBAnimation reveal type="fadeInUpBig">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://lsco.scene7.com/is/image/lsco/852480001-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=840&hei=1120"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  VINTAGE FIT TRUCKER JACKET <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Desgin12EcommercePage;