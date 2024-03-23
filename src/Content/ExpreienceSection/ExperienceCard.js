import { useState } from "react";
import LanguageWidget from "../LanguageWidget";
import imagesIcon from "../Images/images-icon.png";

function ExperienceCard({
    jobTitle, // If there is no job title provided then it means its a personal project
    company,
    timeWorked,
    jobDescription,
    techStack,
    link,
    selectedExperience,
    setSelectedExperience,
    images = [],
    imageNum,
}) {
    return (
        <div className="flex flex-col md:flex-row pr-4 mb-4">
            {selectedExperience !== "" && selectedExperience === company && (
                <div className="fixed z-20 w-full md:w-1/2 top-1/4 md:left-1/4">
                    {images[imageNum]}
                </div>
            )}

            <div className="w-38">
                <p className="text-sm mt-1 pl-8 md:pl-0">{timeWorked}</p>
                {images.length !== 0 && (
                    <img
                        src={imagesIcon}
                        onClick={() => setSelectedExperience(company)}
                        alt="Images Icon"
                        className="mt-4 cursor-pointer"
                        style={{
                            filter: "invert(100%)",
                            webkitFilter: "invert(100%)",
                            width: "30px",
                            height: "30px",
                        }}
                    />
                )}
            </div>
            <div className="max-w-96 pl-8">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                    className="text-white font-semibold"
                >
                    {jobTitle && `${jobTitle} ·`} {company}
                    {link ? " ➜" : ""}
                </a>
                <p>{jobDescription}</p>
                <ul className="flex flex-wrap mt-2">
                    {techStack.map((language) => {
                        return <LanguageWidget language={language} />;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ExperienceCard;
