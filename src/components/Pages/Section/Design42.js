import React from "react";
import { MDBContainer,MDBAnimation, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";

const Desgin42EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        J. Brand
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
                src="https://www.junaidjamshed.com/media/catalog/product/3/6/36687_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  Men Kurta<MDBIcon icon="angle-right" />
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
                src="https://www.junaidjamshed.com/media/catalog/product/4/0/40009_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  Men Kurta <MDBIcon icon="angle-right" />
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
                src="https://www.junaidjamshed.com/media/catalog/product/2/0/20-369_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  Ladies Kurti<MDBIcon icon="angle-right" />
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
                src="https://www.junaidjamshed.com/media/catalog/product/2/0/20-500s_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                  Ladies Kurti <MDBIcon icon="angle-right" />
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

export default Desgin42EcommercePage;