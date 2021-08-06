export default function validateInfo(values) {
    let errors = {};
  
    if (!values.name) {
      errors.name = 'Name required';
    }
    
    if (!values.message) {
        errors.message = "Please Write your Message"
    }

    if (!values.phone) {
        errors.phone = "Phone Number Required"
    }

    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    return errors;
  }