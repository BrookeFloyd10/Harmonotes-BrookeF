import { useState } from "react";

function ContactForm() {
    const [formData, setFormData]=useState({
        name: "",
        email: "",
        message: ""
    });
    const isAnyFieldEmpty = Object.values(formData).some(value => !value.trim());

    const handleChange = (ev) => {
        const {name, value} = ev.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
        return (
            <div class="contact-form">
                <h2>Get In Touch!</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                        <input id="name"
                               type="text"
                               name="name"
                               value={formData.name}
                               onChange={handleChange}></input>
                    <label htmlFor="email">Email:</label>
                        <input id="email"
                               type="text"
                               name="email"
                               value={formData.email}
                               onChange={handleChange}></input>
                    <label htmlFor="message">Inquire today!</label>
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