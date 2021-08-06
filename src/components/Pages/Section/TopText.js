import React from 'react';
import {MDBContainer,
        MDBNav,
        MDBNavItem} from 'mdbreact';

 
const TopText = () => {
    return (
        <MDBContainer className="main" style={{color: '#e66d0a'}} >
        <MDBNavItem className="d-flex mt-2 p-1">
        <i  class="fab fa-facebook p-1"></i>
        <i class="fab fa-twitter p-1"></i>
        <i class="fab fa-google-plus-g p-1"></i>
        <i class="fab fa-instagram p-1"></i>
        <MDBNavItem className="ms-auto p-1 d-flex justify-content-end" style={{ color:"black"}}>
        <i  class="fas fa-phone-alt p-1"> +92 336 3371438</i>
        </MDBNavItem>
        </MDBNavItem>
        </MDBContainer>

    );
}
 
TopText.propTypes = {};
 
export default TopText;