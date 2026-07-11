import {Link} from 'react-router';
import eighthNote from '../../assets/images/eighthNote.svg';
import sixteenthNote from '../../assets/images/sixteenthNote.svg';
import quarterNote from '../../assets/images/quarterNote.svg';
import halfNote from '../../assets/images/halfNote.svg';

const NavBar = () =>{
    return(
    <nav className='nav-bar'>
        <ul>
            <li><Link to="/"><img src={eighthNote} alt= "clickable 8th note icon" />Home</Link></li>
            <li><Link to="/about"><img src={halfNote} alt= "clickable half note icon" />About</Link></li>
            <li><Link to="/dashboard"><img src={sixteenthNote} alt= "clickable 16th note icon" />Dashboard</Link></li>
            <li><Link to="/library"><img src={quarterNote} alt= "clickable quarter note icon" />Library</Link></li>
        </ul>
    </nav>
    )
}


export default NavBar;