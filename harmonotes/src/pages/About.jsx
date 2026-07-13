import { Link } from 'react-router';
import ContactForm from '../components/ContactForm';

const About = () => {
    return(
        <section className="about-page">
            <h1>Meet the Miestro!</h1>

            <div className="about-profile">
                <div className="about-photo">
                    photo here
                </div>

                <div className="about-bio">
                    <p> bio about Mr. Bob here</p>
                </div>
            </div>

            <ContactForm />
        </section>
    );
}

export default About;