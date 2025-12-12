"use client";

import Image from "next/image";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface Location {
  title: string;
  address: string;
  city: string;
}

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [popup, setPopup] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });

  const locations: Location[] = [
    {
      title: "Registered Office",
      address: "RKP - V/720-A12, YES square,",
      city: "Calicut, Kerala - 673633",
    },
    {
      title: "Administrative Office",
      address: "A - 18, Ramanujan street,",
      city: "New Delhi, India - 700078",
    },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(200, "Message cannot exceed 200 characters")
      .required("Message is required"),
  });

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm, setSubmitting }: FormikHelpers<ContactFormValues>
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (result.success) {
        setPopup({
          show: true,
          type: "success",
          message: "Your message has been sent successfully!",
        });
        resetForm();
      } else {
        setPopup({
          show: true,
          type: "error",
          message: result.message || "Something went wrong.",
        });
      }
    } catch (err) {
      console.error("Submit Error:", err);
      setPopup({
        show: true,
        type: "error",
        message: "Failed to send message. Try again later.",
      });
    }

    setSubmitting(false);
  };

  // PREMIUM POPUP COMPONENT
  const Popup = () => {
    if (!popup.show) return null;

    return (
      <div className="popup_overlay">
        <div className={`popup_card ${popup.type}`}>
          <h3>{popup.type === "success" ? "✔ Success" : "✖ Error"}</h3>
          <p>{popup.message}</p>
          <button onClick={() => setPopup({ ...popup, show: false })}>
            OK
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* POPUP */}
      <Popup />

      <section className="contact_page">
        <div className="contact_header">
          <h2>Contact Us</h2>
          <p>
            <a href="mailto:info@yesindiafoundation.com">
              info@yesindiafoundation.com
            </a>
            &nbsp; | &nbsp;
            <a href="tel:+919895662111">+91 989 566 2111</a>
          </p>
        </div>

        <div className="contact_card">
          <h3>Send us a Message</h3>

          <Formik<ContactFormValues>
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, errors, touched }) => (
              <Form className="contact_form">
                {/* NAME FIELD */}
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    maxLength={20}
                    className={errors.name && touched.name ? "input_error" : ""}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error_text"
                  />
                </div>

                {/* EMAIL FIELD */}
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={errors.email && touched.email ? "input_error" : ""}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error_text"
                  />
                </div>

                {/* MESSAGE FIELD */}
                <div className="message_field_wrapper">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    rows={5}
                    maxLength={200}
                    className={
                      errors.message && touched.message ? "input_error" : ""
                    }
                  />

                  {/* Character counter */}
                  <div
                    className={`char_count ${
                      values.message.length >= 200 ? "limit_reached" : ""
                    }`}
                  >
                    {values.message.length}/200
                  </div>

                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error_text"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      {/* LOCATIONS SECTION */}
      <section className="wrapper_section">
        <div className="map_locations_container">
          {locations.map((location, index) => (
            <div key={index} className="map_bg_wrapper">
              <div className="map_background">
                <Image
                  src="/map_bg.png"
                  width={600}
                  height={440}
                  alt="Background Map"
                  priority
                />
              </div>
              <div className="location_details">
                <h6>{location.title}</h6>
                <div className="location_address">
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;


