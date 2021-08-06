import React from "react";
import { MDBContainer, MDBAnimation, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";

const Desgin22EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Alkaram Brand
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
                src="https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/w/mw-24-_1_.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  Formal Jacquard Waistcoat <MDBIcon icon="angle-right" />
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
                src="https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/s/bsk-01-_1_.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  Boski Shalwar Kameez <MDBIcon icon="angle-right" />
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
                src="https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/w/fw-38.1-20-grey-1_1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  Printed Lawn Suit Printed Dupatta<MDBIcon icon="angle-right" />
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
                src="https://d3dn98j7qouk6g.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/w/fw-2.1-20-blue-1_1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  Printed Lawn Suit Printed Dupatta <MDBIcon icon="angle-right" />
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

export default Desgin22EcommercePage;