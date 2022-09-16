import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div>
            <ul
                className="nav d-flex justify-content-end align-items-center bg-white shadow sticky-top"
                style={{ height: "70px" }}
            >
                <li className="nav-item">
                    <Link className="current" href="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="" href="/experience">
                        Experience
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="" href="/contact">
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="" href="/lab-07">
                        Lab-07
                    </Link>
                </li>
            </ul>
        </div>
    );
}
