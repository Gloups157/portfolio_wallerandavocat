import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
    return (
        <nav className="flex flex-col p-7">
            <ul className="flex self-end gap-8">
                {/* Email */}
                <li>
                    <a href="mailto:wallerandavocat@sfr.fr">
                        <Image
                            src="/images/icons/email.png"
                            alt="Email"
                            width={30}
                            height={30}
                            className="hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                </li>
                {/* LinkedIn */}
                <li className="">
                    <a
                        href="https://www.linkedin.com/in/wallerand-avocat-8a3a33331/"
                    >
                        <Image
                            src="/images/icons/linkedin.png"
                            alt="LinkedIn"
                            width={30}
                            height={30}
                            className="hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                </li>

                {/* GitHub */}
                <li>
                    <a
                        href="https://github.com/gloups157"
                    >
                        <Image
                            src="/images/icons/github.png"
                            alt="GitHub"
                            width={30}
                            height={30}
                            className="hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
