import {NavLink} from "react-router";
import {UserButton} from "@clerk/clerk-react";

const Navbar = () => {
    return (
        <header className="fixed top-0 z-40 w-full bg-background border-b">
            <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
                <a href="#" className="text-lg font-bold">
                    Acme Inc.
                </a>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <NavLink to="/" className="[&.active]:font-bold hover:text-primary">
                        Home
                    </NavLink>
                    <NavLink to="/dashboard" className="[&.active]:font-bold hover:text-primary">
                        Dashboard
                    </NavLink>
                </nav>
                <UserButton/>
            </div>
        </header>
    );
};

export default Navbar;
