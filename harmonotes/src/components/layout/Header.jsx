import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="site-header">
            <div className="brand">
                <em>Harmonotes</em>
            </div>

            <NavBar />
        </header>
    );
}

export default Header;