
import '../App.css'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg  navbar-light fixed-top bg-light shadow-lg">
            <div className="container">
                <a className="navbar-brand" href="#s">Movie App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#s">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="d#">Watch List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="d#">Watched</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}