import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

    const location = useLocation();

    const links = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "Safari", path: "/safari" },
        { name: "Cards", path: "/cards" },
        { name: "Creatures", path: "/creatures" },
        { name: "Battle Pass", path: "/battlepass" },
        { name: "Tasks", path: "/tasks" },
        { name: "Editor", path: "/editor" },
        { name: "Profile", path: "/profile" }
    ];

    return (

        <nav className="navbar">

            <div className="logo">

                MythicMon

            </div>

            <div className="nav-links">

                {links.map((link) => (

                    <Link
                        key={link.path}
                        to={link.path}
                        className={
                            location.pathname === link.path
                                ? "active"
                                : ""
                        }
                    >

                        {link.name}

                    </Link>

                ))}

            </div>

            <div className="player-bar">

                <div className="currency">

                    🪙 0

                </div>

                <div className="currency">

                    💎 0

                </div>

                <div className="level">

                    Lv. 1

                </div>

            </div>

        </nav>

    );

}
