import { Link } from 'react-router';
import ContactForm from '../components/ContactForm';

const About = () => {
    return(
        <section className="about-page">
            <h1>Meet the Miestro!</h1>

            <div className="about-profile">
                <div className="about-photo">
                    <img className="bio-photo" src="./src/assets/images/Mr.Bob.svg" alt="photo of instructor" /> 
                </div>

                <div className="about-bio">
                    <p> Whether you are just starting out on your musical journey, picking up where you have left off, 
                        overcoming challenging progression skills, looking for creative insights/methods or even wanting 
                        to explore the setup of your rig for optimized performance (hardware/software) Bob is enthused to 
                        join you on your journey. Bob has been playing Music since the age of 11, having had Parents that 
                        were both musically inclined. One parent being a Luthier and the other a music teacher. Bob started 
                        on piano and grew into fretted stringed instruments at age 14. He is currently teaching 
                        Acoustic/Electric Guitar, Dobro/lap slide, Bass, Banjo, Mandolin, dulcimer, hammer dulcimer, 
                        Ukulele & Entry Level Piano. Bob is a Roberto-Venn School of Luthiery certified Luthier since 2009 
                        creating exposure to several styles of instrument setups and approach. Bob has been performing in live 
                        and studio environments under The Owl In the Oak Collective since 2015 spanning musical stylings from 
                        classical, jazz, world, Folk, Blues, Rock, metal, digital/analog electronica & hip hop. Bob also produces 
                        and records in Ableton Live 12 (Ableton Since 2015) but recognizes the value of all DAWs. Bob encourages 
                        the practice of sight reading, ear training, Instrumentation exercises, music theory studies and solfege 
                        to help you build your repertoire of musical performance skills and writing regardless of the stylings you 
                        wish to focus on. I hope to meet you soon so we can PLAY and enjoy the Magic & Science of Music Together!</p>
                </div>
            </div>

            <ContactForm />
        </section>
    );
}

export default About;