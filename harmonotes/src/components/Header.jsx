import {Link} from 'react-router'

const Header = () => {
    return (
        <header>
            <div id="header">
                <em>Harmonotes</em>

                <nav>
                  <Link to="/">Home</Link>
                  <Link to="/About">About</Link>
                  <Link to="/Dashboard">Dashboard</Link>
                  <Link to="/Library">Library</Link>
                </nav>

            </div>
        </header>
    );
}

export default Header;