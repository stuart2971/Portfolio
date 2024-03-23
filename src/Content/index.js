import ExperienceCard from "./ExpreienceSection/ExperienceCard";
import { useState } from "react";
import AE_1 from "./Images/AE_1.png";
import AE_2 from "./Images/AE_2.png";
import AE_3 from "./Images/AE_3.png";
import Population_1 from "./Images/Population_1.png";
import Population_2 from "./Images/Population_2.png";
import WOWA_1 from "./Images/WOWA_1.png";
import WOWA_2 from "./Images/WOWA_2.png";

const IMAGES = {
    "Appletree Express": [
        <img src={AE_1} alt="Appletree Express" />,
        <img src={AE_2} alt="Appletree Express" />,
        <img src={AE_3} alt="Appletree Express" />,
    ],
    "Population Visualizer": [
        <img src={Population_1} alt="Appletree Express" />,
        <img src={Population_2} alt="Appletree Express" />,
    ],
    "WOWA Leads": [
        <img src={WOWA_1} alt="Appletree Express" />,
        <img src={WOWA_2} alt="Appletree Express" />,
    ],
};

function Content() {
    const [selectedExperience, setSelectedExperience] = useState("");
    const [imageNum, setImageNum] = useState(0);

    function nextImage() {
        if (imageNum < IMAGES[selectedExperience].length - 1)
            setImageNum(imageNum + 1);
    }
    function prevImage() {
        if (imageNum > 0) setImageNum(imageNum - 1);
    }
    function exitOverlay() {
        setSelectedExperience("");
        setImageNum(0);
    }
    console.log(selectedExperience);
    return (
        <div>
            {selectedExperience !== "" && (
                <>
                    <div
                        id="overlay"
                        className="fixed z-10"
                        onClick={exitOverlay}
                    ></div>
                    <div
                        className="fixed top-0 right-0 text-white z-30 cursor-pointer "
                        onClick={exitOverlay}
                    >
                        ✖
                    </div>
                    <div
                        className="fixed z-20 text-white select-none space-x-4 left-0"
                        style={{ left: "46%" }}
                    >
                        <span className="cursor-pointer" onClick={prevImage}>
                            Prev
                        </span>
                        <span className="cursor-pointer" onClick={nextImage}>
                            {imageNum + 1} / {IMAGES[selectedExperience].length}
                        </span>
                        <span className="cursor-pointer" onClick={nextImage}>
                            Next
                        </span>
                    </div>
                </>
            )}
            <section id="about">
                <p className="mb-4">
                    Back in my early teenage years, at the age of 13, I embarked
                    on a self-taught journey into the world of programming and
                    web development. Fueled by curiosity and a passion for
                    creating digital experiences, I delved headfirst into
                    coding, exploring the intricacies of web technologies. Over
                    the years, this journey has taken me through diverse
                    professional landscapes, from contributing to an eDiscovery
                    platform and a real estate platform to working as a
                    freelance developer.
                </p>
                <p className="mb-4">
                    Currently, I find myself navigating the dynamic intersection
                    of academia and technology, as I dedicate my time to
                    completing my final year of school. Amidst the academic
                    challenges, my primary focus remains on honing my skills and
                    expanding my knowledge in web development.
                </p>
                <p className="mb-4">
                    In my free time, I channel my creativity into crafting
                    web-based projects, finding joy in the process of bringing
                    ideas to life online. Beyond the realm of coding, you'll
                    often find me in the gym, passionately preparing for
                    powerlifting competitions. Cooking up my favorite meals is
                    another cherished pastime, offering a delicious balance to
                    the digital endeavors that define my professional and
                    personal journey.
                </p>
            </section>
            <section className="mt-24" id="experience">
                <ExperienceCard
                    jobTitle="UI Developer"
                    company="iCONECT"
                    timeWorked="Sep 2022 - Apr 2023"
                    jobDescription="Contributed significantly to enhancing the user experience by actively engaging in the development of a new platform version. Responsibilities included identifying and resolving bugs, implementing new features, and ultimately improving overall user satisfaction. Demonstrated effective collaboration with the team to ensure tasks were completed on time, meeting milestone deadlines and ensuring the smooth progress of the project."
                    techStack={["JavaScript", "React", "CSHTML", "CSS", "C++"]}
                    link="https://www.iconect.com/"
                    setSelectedExperience={setSelectedExperience}
                    selectedExperience={selectedExperience}
                    images={IMAGES.iCONECT}
                    imageNum={imageNum}
                />
                <ExperienceCard
                    jobTitle="Full Stack Developer"
                    company="WOWA Leads"
                    timeWorked="Dec 2021 - Sep 2022"
                    jobDescription="Successfully designed and developed responsive React pages, leading to a notable increase of 10,000 daily active users and a positive impact on user engagement. Collaborated with a sizable team of over 20 individuals to create and maintain high-quality and coherent website content. Additionally, implemented calculation tools that not only boosted user engagement but also enhanced the visibility of the brand."
                    techStack={[
                        "JavaScript",
                        "React",
                        "HTML",
                        "CSS",
                        "Python",
                        "Node",
                    ]}
                    link="https://wowa.ca/"
                    setSelectedExperience={setSelectedExperience}
                    selectedExperience={selectedExperience}
                    images={IMAGES["WOWA Leads"]}
                    imageNum={imageNum}
                />
                <ExperienceCard
                    jobTitle="Full Stack Developer"
                    company="The Lazy Beaver Company"
                    timeWorked="Sep 2020 - May 2021"
                    jobDescription="Collaborated closely with the client to design, develop, and launch a website, enhancing brand awareness and promotional efforts, while also offering ongoing support through analytics and requested modifications for independent website operation and maintenance."
                    techStack={["JavaScript", "React", "HTML", "CSS"]}
                    setSelectedExperience={setSelectedExperience}
                    selectedExperience={selectedExperience}
                    images={IMAGES.iCONECT}
                    imageNum={imageNum}
                />
                <ExperienceCard
                    jobTitle="Data Analyst"
                    company="Robarts Research Institute"
                    timeWorked="Oct 2017 - May 2018"
                    jobDescription="Developed image data processing algorithms for Alzheimer's disease research, significantly advancing scientific understanding. Utilized strong written communication skills to document findings and create comprehensive reports, promoting knowledge sharing within the research community."
                    techStack={["MATLAB"]}
                    link="https://www.robarts.ca/index.html"
                    setSelectedExperience={setSelectedExperience}
                    selectedExperience={selectedExperience}
                    images={IMAGES.iCONECT}
                    imageNum={imageNum}
                />
                <div className="w-full text-center ">
                    <a
                        href="resume.pdf"
                        target="_blank"
                        className="hover:text-white"
                    >
                        View Resume
                    </a>
                </div>
            </section>
            <section id="projects" className="mt-4">
                <ExperienceCard
                    jobTitle=""
                    company="Appletree Express"
                    timeWorked="Oct 2021 - Dec 2021"
                    jobDescription="I crafted a website for Appletree restaurant, complete with a sandwich builder for custom orders and easy online ordering capabilities, streamlining the dining experience for customers."
                    techStack={["React", "SCSS"]}
                    link="https://appletree-bwr9pfpqv-stuart2971s-projects.vercel.app/"
                    setSelectedExperience={setSelectedExperience}
                    selectedExperience={selectedExperience}
                    images={IMAGES["Appletree Express"]}
                    imageNum={imageNum}
                />
                <ExperienceCard
                    jobTitle=""
                    company="Population Visualizer"
                    timeWorked="July 2019 - July 2019"
                    jobDescription="I created a website utilizing an API to fetch population data, which was then integrated into a 3D model, allowing users to visualize and interact with population densities across different countries dynamically."
                    techStack={["ThreeJS"]}
                    setSelectedExperience={setSelectedExperience}
                    selectedExperience={selectedExperience}
                    images={IMAGES["Population Visualizer"]}
                    imageNum={imageNum}
                />
            </section>
        </div>
    );
}
export default Content;
