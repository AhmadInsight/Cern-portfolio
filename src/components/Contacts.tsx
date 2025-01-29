import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  description: string;
}

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>(); // Typing the form data

  const YOUR_SERVICE_ID = "service_tsc7u4a";
  const YOUR_TEMPLATE_ID = "template_08qonro";
  const YOUR_USER_ID = "v8GtOcsimUNerqAx5";

  // Typing the onSubmit function
  const onSubmit = (data: ContactFormData, r: React.BaseSyntheticEvent) => {
    console.log(data); // Log to see if the form data is coming through
    sendEmail(
      YOUR_SERVICE_ID,
      YOUR_TEMPLATE_ID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      YOUR_USER_ID
    );
    r.target.reset();
  };
  
  const sendEmail = (
    YOUR_SERVICE_ID: string,
    YOUR_TEMPLATE_ID: string,
    variables: ContactFormData,
    YOUR_USER_ID: string
  ) => {
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, variables, YOUR_USER_ID)
      .then(
        (response) => {
          console.log("Email sent successfully:", response); 
          setSuccessMessage("Message sent successfully! I'll contact you soon.");
          alert("Message sent successfully! I'll contact you soon.")
        },
        (error) => {
          console.error("Error sending email:", error); // Log any error
          alert("Error sending email:"+ error)
        }
      );
  };
  

  return (
    <div id="contacts" className="contacts">

      <div className="text-center">
        <h1 className="text-gradient">Contact Me</h1>
        <h4 className="text-gradient">
          Please fill the form below and describe your project. I'll contact you soon. Thank you.
        </h4>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
          <div className="col-md-3 col-xs-1"></div>
            <div className="col-md-6 col-xs-10">
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 32,
                      message: "Please enter a name fewer than 32 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.name && errors.name.message}</span>

              <div className="text-center">
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  aria-invalid={errors.phone ? "true" : "false"}
                  {...register("phone", {
                    required: "Please add your phone number",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.phone && errors.phone.message}</span>

              <div className="text-center">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Please add your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">{errors.email && errors.email.message}</span>

              <div className="text-center">
                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  aria-invalid={errors.subject ? "true" : "false"}
                  {...register("subject", {
                    required: "You forgot to add the subject",
                  })}
                />
                <div className="line"></div>
              </div>

              <span className="error-message">{errors.subject && errors.subject.message}</span>
            </div>
            <div className="col-md-3 col-xs-1"></div>
          </div>
          <div className="row">
            <div className="col-md-3 col-xs-1"></div>
          <div className="col-md-6 col-xs-10">
              <div className="text-center">
                <textarea
                  id="description"
                  type="text"
                  className="form-control"
                  placeholder="Type your text here..."
                  name="description"
                  aria-invalid={errors.subject ? "true" : "false"}
                  {...register("description", {
                    required: "Please describe your project needs...",
                  })}
                ></textarea>

                <div className="line"></div>
                <span className="error-message">{errors.description && errors.description.message}</span>
              </div>
              <button className="btn-main-offer contact-btn for-solid" type="submit">
                Contact Me
              </button>
            </div>
            <div className="col-md-3 col-xs-1"></div>

            </div>
        </form>
      </div>

    </div>
  );
};

export default Contacts;
