import { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";
import { isValidEmail } from "../utils/validators";

function ContactForm() {
    const [formData, setFormData]=useState({
        name: "",
        email: "",
        message: ""
    });

    const [ isSubmitted, setIsSubmitted ]=useState(false);

    const isAnyFieldEmpty = Object.values(formData).some(value => !value.trim());

    const [ errors, setErrors ]=useState({});

    const validation = () => {
        const newErrors = {};
        if (!isValidEmail(formData.email)) newErrors.email = "Please enter a vaild email.";
            return newErrors;
    }

    const handleChange = (ev) => {
        const {name, value} = ev.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const validationErrors = validation();
        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setFormData({name: "", email: "", message: ""});
        setIsSubmitted(true);
    };
        return (
            <div className="contact-form">
                <h2>Get In Touch!</h2>

                {isSubmitted && (
                  <div className="success-message">
                    <p>Thank you! Someone will be reaching out shortly!</p>
                    <Button id="dismiss-btn" type="button" className="dismiss-btn" onClick={() => setIsSubmitted(false)} label="OK" />
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <FormField  label="Name:"
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={"Full Name"}
                                required/>
                    <FormField  label="Email:"
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder={"youremail@example.com"}
                                error={errors.email}/>
                    <FormField  label="Message"
                                as="textarea"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                maxLength="200" 
                                rows="5"
                                cols="30"
                                placeholder={"Your message here"}/>
                    <Button id="submit-btn" type="submit" disabled={isAnyFieldEmpty} className="submit-btn" label="Send"/>
                </form>
            </div>
        );
}

export default ContactForm;