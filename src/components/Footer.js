import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon, MDBNavLink } from "mdbreact";
import Subscription from "./Pages/Section/Subscription";

const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-center">
        <MDBRow>
          <MDBCol md="4">
            <h3 className="title">ShoWala</h3>
            <p>
              We Provide you with best Outfits and Bestseller Product with Cradibility and Honesty, to make you experience the Pure look of your self with our Fashionable Dresses and Outfits.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Social Media</h5>
            <div style={{display:'flex', justifyContent:'center'}}>
            <MDBNavLink to='/homepage'><MDBIcon size="3x" fab icon="facebook-square" className="icon" /><br/>Facebook</MDBNavLink>
            <MDBNavLink to='/homepage'><MDBIcon size="3x" fab icon="twitter-square" className="icon" /><br/>Twitter</MDBNavLink>
            <MDBNavLink to='/homepage'><MDBIcon size="3x" fab icon="linkedin" className="icon" /><br/>LinkedIn</MDBNavLink>
            <MDBNavLink to='/homepage'><MDBIcon size="3x" fab icon="google" className="icon" /><br/>Google</MDBNavLink>
            </div>
          </MDBCol>
          <Subscription/>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3" style={{fontSize:'20px'}}>
        <MDBContainer fluid >
          &copy; {new Date().getFullYear()} Copyright: ShoWala
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;





// import React from 'react';
// // import { MDBFoote} from 'mdbreact';

// const Footer = () => {
//     return (
//         <footer class="bg-primary text-white text-center text-lg-start">
  
//         <div class="container p-4">
         
//           <div class="row">
           
//             <div class="col-lg-6 col-md-12  mb-4 mb-md-0">
//               <h5 class="text-uppercase">Footer Content</h5>
      
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
//                 molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
//                 voluptatem veniam, est atque cumque eum delectus sint!
//               </p>
//             </div>
            
//             <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
//               <h5 class="text-uppercase">Links</h5>
      
//               <ul class="list-unstyled mb-0">
//                 <li>
//                   <a href="#!" class="text-white">Link 1</a>
//                 </li>
//                 <li>
//                   <a href="#!" class="text-white">Link 2</a>
//                 </li>
//                 <li>
//                   <a href="#!" class="text-white">Link 3</a>
//                 </li>
//                 <li>
//                   <a href="#!" class="text-white">Link 4</a>
//                 </li>
//               </ul>
//               </div>
//               <div class="container p-4 pb-0 col-lg-3 col-md-12">
//     <form action="">
      
//       <div class="row">
       
//         <div class="col-auto mb-4 mb-md-0">
//           <p class="pt-2"><strong>Sign up</strong></p>
//         </div>
       
//         <div class="col-md-5 col-12 mb-4 mb-md-0">
        
//           <div class="form-outline mb-4">
//             <input type="email" id="form5Example2" class="form-control" />
//             <label class="form-label" for="form5Example2">Email address</label>
//           </div>
//         </div>
        
//         <div class="col-auto mb-4 mb-md-0">
         
//           <button type="submit" class="btn btn-primary mb-4">Subscribe</button>
//         </div>
        
//       </div>
     
//     </form>
//     </div>      
//         <div>
//             </div>
//             </div>
//           © 2020 Copyright:
//           <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
//         </div>
      
//       </footer>
      
      
//     );
// }

// export default Footer;