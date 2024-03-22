import LanguageWidget from "../LanguageWidget";
import imagesIcon from "../Images/images-icon.png";

function ExperienceCard({
    jobTitle,
    company,
    timeWorked,
    jobDescription,
    techStack,
    link,
    setSelectedExperience,
}) {
    return (
        <div className="flex flex-col md:flex-row pr-4 mb-4">
            <div className="w-38">
                <p className="text-sm mt-1 pl-8 md:pl-0">{timeWorked}</p>
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
            </div>
            <div className="max-w-96 pl-8">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                    className="text-white font-semibold"
                >
                    {jobTitle} {company ? `· ${company}` : ""} {link ? "➜" : ""}
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
