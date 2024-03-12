import { useState } from "react";
import TableOfContentsItem from "./TableOfContentsItem";

function NavColumn() {
    //Table of contents label, activeTab, and the id you want to scroll to all has to match
    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className="flex flex-col justify-between h-full">
            {/* Top Content */}
            <div>
                <h1 className="text-6xl text-white font-bold mb-4">
                    Stuart Fong
                </h1>
                <h2 className="text-2xl mb-2">Full Stack Developer</h2>
                <p className="text-lg mb-24">
                    Seeking Opportunities to Learn and Innovate
                </p>
                <TableOfContentsItem
                    label="about"
                    isActive={activeTab === "about"}
                    destination="#about"
                    setActiveTab={setActiveTab}
                />
                <TableOfContentsItem
                    label="experience"
                    isActive={activeTab === "experience"}
                    setActiveTab={setActiveTab}
                />
                <TableOfContentsItem
                    label="projects"
                    isActive={activeTab === "projects"}
                    setActiveTab={setActiveTab}
                />
            </div>
            {/* Bottom Content */}
            <div className="flex ">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/stuart-fong-8b5229141/"
                >
                    <img
                        className="logos"
                        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                        alt="Linkedin Logo"
                        width={40}
                        height={40}
                    />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/stuart2971?tab=repositories"
                >
                    <img
                        className="logos ml-2"
                        src="https://cdn.iconscout.com/icon/free/png-512/free-github-163-761603.png?f=webp&w=256"
                        alt="Github Logo"
                        width={35}
                        height={35}
                    />
                </a>
            </div>
        </div>
    );
}

export default NavColumn;
