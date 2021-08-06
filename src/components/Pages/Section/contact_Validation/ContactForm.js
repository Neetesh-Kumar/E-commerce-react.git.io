import React from 'react';
import useForm from './UseForm'
import {MDBRow, MDBCol, MDBInput, MDBIcon, MDBBtn} from 'mdbreact'
import validate from './validateInfo'
import './Form.css';

const ContactForm = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <form className="form" onSubmit={handleSubmit}>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-name"
                      label="Your name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-email"
                      label="Your email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="number"
                      id="form-contact-phone"
                      label="Your phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <p>{errors.phone}</p>}
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="form-contact-message"
                      label="Your message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                    />
                    {errors.message && <p>{errors.message}</p>}
                    <MDBBtn rounded color="" style={{color: "#e66d0a", background: "black"}} type="submit">
                      <MDBIcon icon="paper-plane" size="1x"/>
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
              </form>
    );
};

export default ContactForm;