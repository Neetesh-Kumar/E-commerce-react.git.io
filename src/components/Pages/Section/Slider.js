import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBCarouselCaption } from
"mdbreact";
import DesignOne from '../../../assets/dOne.jpg'
import DesignTwo from '../../../assets/dTwo.jpg'
import DesignThree from '../../../assets/dThree.jpg'
import DesignFour from '../../../assets/dFour.jpg'
import DesignFive from '../../../assets/dFive.jpg'

const Slider = () => {
  return (
    
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 sliderMargin"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 img"
                src={DesignOne}
                alt="First slide"
              />
            </MDBView>
            <MDBCarouselCaption className="caption">
            <hr/>
            <h1 className="h1-responsive  carouselTitle">Thoughtful Design</h1>
            <p className="carouselParagraph">Behold every design element you never knew you wanted but absolutely need</p>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100 img"
                src={DesignTwo}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100 img"
                src={DesignThree}
                alt="Third slide"
              />
            </MDBView>
            <MDBCarouselCaption className="caption">
            <hr/>
            <h1 className="h1-responsive  carouselTitle">Style Meets Comfort</h1>
            <p className="carouselParagraph">Behold every design element you never knew you wanted but absolutely need</p>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100 img"
                src={DesignFour}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100 img"
                src={DesignFive}
                alt="Third slide"
              />
            </MDBView>
            <MDBCarouselCaption className="caption">
            <hr/>
            <h1 className="h1-responsive  carouselTitle">Limited Edition Collections</h1>
            <p className="carouselParagraph">Small production means enormous opportunities to stand out</p>
          </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default Slider;