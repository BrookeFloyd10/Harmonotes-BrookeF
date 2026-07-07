import {Link} from 'react-router'

const Header = () => {
    return (
        <header>
            <div id="header">
                <em>Harmonotes</em>

                <nav>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/library">Library</Link>
                </nav>

            </div>
        </header>
    );
}

export default Header;