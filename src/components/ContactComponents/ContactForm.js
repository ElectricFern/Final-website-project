import React, { Component } from "react";
import "./ContactForm.scss";

const emailRegex = RegExp( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ );
  
const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
};
  
class ContactForm extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            Subject: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                Subject: ""
            }
        };
    }
  
    handleSubmit = e => {
      e.preventDefault();
  
      if (formValid(this.state)) {
        console.log(`
          --SUBMITTING--
          First Name: ${this.state.firstName}
          Last Name: ${this.state.lastName}
          Email: ${this.state.email}
          Subject: ${this.state.Subject}
        `);
      } else {
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      }
    };
  
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
  
        switch (name) {
            case "firstName":
            formErrors.firstName =
                value.length < 3 ? "minimum 3 characaters required" : "";
            break;
            case "lastName":
            formErrors.lastName =
                value.length < 3 ? "minimum 3 characaters required" : "";
            break;
            case "email":
            formErrors.email = emailRegex.test(value)
                ? ""
                : "invalid email address";
            break;
            case "Subject":
            formErrors.Subject =
                value.length < 1 ? "please enter a subject" : "";
            break;
            default:
            break;
        }
  
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
  
    render() {
        const { formErrors } = this.state;
  
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h3>Contact Us</h3>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input
                            className={formErrors.firstName.length > 0 ? "error" : null}
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            noValidate
                            onChange={this.handleChange}
                            />
                            {formErrors.firstName.length > 0 && (
                            <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                            className={formErrors.lastName.length > 0 ? "error" : null}
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            noValidate
                            onChange={this.handleChange}
                            />
                            {formErrors.lastName.length > 0 && (
                            <span className="errorMessage">{formErrors.lastName}</span>
                            )}
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                            className={formErrors.email.length > 0 ? "error" : null}
                            placeholder="Email"
                            type="email"
                            name="email"
                            noValidate
                            onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="Subject">
                            <label htmlFor="Subject">Subject</label>
                            <input
                            className={formErrors.Subject.length > 0 ? "error" : null}
                            placeholder="Subject"
                            type="Subject"
                            name="Subject"
                            noValidate
                            onChange={this.handleChange}
                            />
                            {formErrors.Subject.length > 0 && (
                            <span className="errorMessage">{formErrors.Subject}</span>
                            )}
                        </div>
                        <div class="form-group">
                            <label for="formControlTextarea1">Message</label>
                            <textarea className="form-control" id="formControlTextarea1" rows="4"></textarea>
                        </div>
                        <div className="submitForm">
                            <button type="submit">Send Enquiry</button>
                        </div>

                    </form>
                </div>
            </div>
      );
    }
}
  
export default ContactForm;
    

