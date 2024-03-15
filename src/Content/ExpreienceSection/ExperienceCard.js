import LanguageWidget from "../LanguageWidget";

function ExperienceCard({
    jobTitle,
    company,
    timeWorked,
    jobDescription,
    techStack,
}) {
    return (
        <div className="flex flex-col md:flex-row pr-4 mb-4">
            <div className="w-38">
                <p className="text-sm mt-1 pl-8 md:pl-0">{timeWorked}</p>
            </div>
            <div className="max-w-96 pl-8">
                <p className="text-white font-semibold">
                    {jobTitle} · {company}
                </p>
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
