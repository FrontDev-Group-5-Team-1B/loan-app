import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { nanoid } from "nanoid";
import "./contact.css";
import "./contactQueries.css";
import instagram from "../../../assets/instagram-icon.svg";
import facebook from "../../../assets/facebook-icon.svg";
import twiter from "../../../assets/twiter-icon.svg";
import mail from "../../../assets/Email.svg";
import phone from "../../../assets/phone-icon.svg";
import clock from "../../../assets/clock-icon.svg";
import address from "../../../assets/address-icon.svg";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  message: Yup.string().required("Required"),
});
const Contact = () => {
  const [successModal, setSuccessModal] = useState(undefined);
  return (
    <>
      <div className="contact-container">
        <div className="contact-content-holder">
          <div className="contact-heading-sec">
            <h2 className="contact-heading">Contact Us</h2>
            <p className="contact-text">
              Kindly reach out to us. we will get back to you as soon as we can
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, onsubmitProps) => {
              const data = {
                id: nanoid(),
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message,
              };

              await axios
                .post(
                  "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
                  data
                )
                .then((response) => {
                  //   setSuccessModal(true);
                  alert("Successfully submited");
                  onsubmitProps.resetForm();
                })
                .catch((e) => {
                  //   setErrorModal(true);
                  alert("Error submiting your form. Try again later");
                })
                .finally(() => {
                  // setSubmitting(false);
                  console.log("Done");
                });

              console.log(data);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="contact-form">
                  <h2>User Information</h2>
                  <div>
                    <label htmlFor="name">
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="input"
                      />
                    </label>
                  </div>
                  <ErrorMessage name="name">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>

                  <div>
                    <label htmlFor="email">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="input"
                      />
                    </label>
                  </div>
                  <ErrorMessage name="email">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>

                  <div>
                    <label htmlFor="message">
                      <Field
                        id="message"
                        name="message"
                        className="form-textarea"
                        placeholder="Message"
                        as="textarea"
                      />
                    </label>
                  </div>
                  <ErrorMessage name="message">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                {isSubmitting ? (
                  <button
                    type="submit"
                    className="contact-btn"
                    disabled={isSubmitting}
                  >
                    Submiting.....
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="contact-btn"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                )}
              </Form>
            )}
          </Formik>
          <div className="contact-info">
            <h2 className="info-heading">Info</h2>
            <div className="contact-info-icons">
              <div className="info-icon-img">
                <img src={mail} alt="mail-con" />
              </div>
              <div className="info-icon-text">
                <p>info@nodebt.co.uk</p>
              </div>
            </div>
            <div className="contact-info-icons">
              <div className="info-icon-img">
                <img src={phone} alt="phone-con" />
              </div>
              <div className="info-icon-text">
                <p>+2348160288037</p>
              </div>
            </div>
            <div className="contact-info-icons">
              <div className="info-icon-img">
                <img src={address} alt="address-icon" />
              </div>
              <div className="info-icon-text">
                <p>12, Adewale Street, Lagos. </p>
              </div>
            </div>
            <div className="contact-info-icons">
              <div className="info-icon-img">
                <img src={clock} alt="clock-con" />
              </div>
              <div className="info-icon-text">
                <p>9:00am- 5:00pm</p>
              </div>
            </div>
          </div>
          <aside className="contact-social-links">
            <div className="contact-social-icons">
              <img src={instagram} alt="instagram icon" />
            </div>
            <div className="contact-social-icons">
              <img src={facebook} alt="facebook icon" />
            </div>
            <div className="contact-social-icons">
              <img src={twiter} alt="twiter icon" />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Contact;
