"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname();
    // console.log(pathName, pathName.includes('dashboard'));
    if (!pathName.includes('dashboard')) {
        return (
            <nav className="flex justify-center">
                <ul className="flex justify-between w-1/2 border">
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/posts'}><li>posts</li></Link>
                    <Link href={'/products'}><li>products</li></Link>
                    {/* <Link href={'/dashboard2/products/add'}><li>Add Products</li></Link> */}
                    <Link href={'/products/add'}><li>Add Products</li></Link>
                    {/* <Link href={'/services'}><li>Services</li></Link> */}
                    <Link href={'/about'}><li>About</li></Link>
                    <Link href={'/meals'}><li>Meals</li></Link>
                    {/* <li>
                    Services
                </li>
                <li>
                    About
                </li> */}
                </ul>
            </nav>
        );
    } else {
        return <>
        </>
    }

};

export default NavBar;