import { useState } from "react";
import FormField from "./FormField";

function ContactForm() {
    const [formData, setFormData]=useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted]=useState(false);

    const isAnyFieldEmpty = Object.values(formData).some(value => !value.trim());


    const handleChange = (ev) => {
        const {name, value} = ev.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setFormData({name: "", email: "", message: ""});
        setIsSubmitted(true);
    };
        return (
            <div className="contact-form">
                <h2>Get In Touch!</h2>

                {isSubmitted && (
                  <div className="success-message">
                    <p>Thank you! Someone will be reaching out shortly!</p>
                    <button type="button" onClick={() => setIsSubmitted(false)}>
                        OK
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                    <FormField id="name"
                                type="input"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required="required" />
                    <label htmlFor="email">Email:</label>
                        <input id="email"
                               type="email"
                               name="email"
                               value={formData.email}
                               onChange={handleChange} />
                    <label htmlFor="message">Message:</label>
                        <textarea id="message"
                               name="message"
                               value={formData.message}
                               onChange={handleChange}
                               maxLength="200"></textarea>
                    <button type="submit" disabled={isAnyFieldEmpty}>send</button>
                </form>
            </div>
        );
}

export default ContactForm;