import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex justify-center">
            <ul className="flex justify-between w-1/2 border">
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/services'}><li>Services</li></Link>
                <Link href={'/about'}><li>About</li></Link>

                {/* <li>
                    Services
                </li>
                <li>
                    About
                </li> */}
            </ul>
        </nav>
    );
};

export default NavBar;