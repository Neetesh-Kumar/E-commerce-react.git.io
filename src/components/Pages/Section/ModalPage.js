import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBCol, MDBCarouselInner, MDBCard, MDBCardBody, MDBCarousel, MDBModalBody,
MDBCollapseHeader, MDBCarouselItem, MDBSelectOption, MDBSelectOptions, MDBRow, MDBSelect, MDBSelectInput, MDBCollapse,
MDBIcon, 
MDBInput} from 'mdbreact';

class ModalPage extends Component {
state = {
  modal13: false,
  accordion: 1
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

render() {
const { accordion } = this.state;
  return (
    <React.Fragment>
        <MDBBtn onClick={this.toggle(13)}>Order Now <MDBIcon icon="cart-plus"/></MDBBtn>
        <MDBModal backdrop={false} className="modalResize" size="lg" isOpen={this.state.modal13} toggle={this.toggle(13)}>
          <MDBModalBody className="d-flex">
            <MDBRow>
              <MDBCol>
                <MDBInput label="Full Name" outline icon="user"/>
                <MDBInput label="E-mail address" outline icon="envelope" />
                <MDBInput label="Contact Number" outline icon="mobile"/>
                <MDBInput label="Address" outline icon="map-marked-alt" type="textarea"/>
              </MDBCol>
              <MDBCol>
                <div>
                  <select className="browser-default custom-select">
                    <option disabled selected>Choose your option</option>
                    <option value="1">Black</option>
                    <option value="2">White</option>
                    <option value="3">Pink</option>
                    <option value="4">Red</option>
                  </select>
                  <label>Choose Your Color</label>
                  <select className="browser-default custom-select">
                    <option disabled selected>Choose your option</option>
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                  </select>
                  <label>Choose Your Size</label>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
          <MDBRow className="justify-content-center">
              <MDBBtn color="secondary" className="ml-4" onClick={this.toggle(13)}>Close</MDBBtn>
              <MDBBtn color="primary" className="ml-4" onClick={this.toggle(13)}>Buy Now
                <MDBIcon icon="cart-plus" className="ml-2" />
              </MDBBtn>
            </MDBRow>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default ModalPage;