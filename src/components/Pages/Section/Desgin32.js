import React from "react";
import { MDBContainer, MDBAnimation, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";

const Desgin32EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        OutFitters Brand
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
                src="https://cdn.shopify.com/s/files/1/2290/7887/products/WTP402030CMO_1.jpg?v=1607591057"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  Mutated Camo <MDBIcon icon="angle-right" />
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
                src="https://cdn.shopify.com/s/files/1/2290/7887/products/WTF402139-BLK.jpg?v=1607402334"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  Full Sleeves <MDBIcon icon="angle-right" />
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
                src="https://cdn.shopify.com/s/files/1/2290/7887/products/WTP402029BLK_4.jpg?v=1606831504"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  Spliced Panel <MDBIcon icon="angle-right" />
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
                src="https://cdn.shopify.com/s/files/1/2290/7887/products/WBP402169BEG_2.jpg?v=1609406224"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  High Waisted Leggings <MDBIcon icon="angle-right" />
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

export default Desgin32EcommercePage;