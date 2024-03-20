import ExperienceCard from "./ExpreienceSection/ExperienceCard";
import AE1 from "./Images/AE_1.png";
import AE2 from "./Images/AE_2.png";
import AE3 from "./Images/AE_3.png";
import Population_1 from "./Images/Population_1.png";
import Population_2 from "./Images/Population_2.png";

function Content() {
    return (
        <div>
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
                />
                <ExperienceCard
                    jobTitle="Full Stack Developer"
                    company="The Lazy Beaver Company"
                    timeWorked="Sep 2020 - May 2021"
                    jobDescription="Collaborated closely with the client to design, develop, and launch a website, enhancing brand awareness and promotional efforts, while also offering ongoing support through analytics and requested modifications for independent website operation and maintenance."
                    techStack={["JavaScript", "React", "HTML", "CSS"]}
                />
                <ExperienceCard
                    jobTitle="Data Analyst"
                    company="Robarts Research Institute"
                    timeWorked="Oct 2017 - May 2018"
                    jobDescription="Developed image data processing algorithms for Alzheimer's disease research, significantly advancing scientific understanding. Utilized strong written communication skills to document findings and create comprehensive reports, promoting knowledge sharing within the research community."
                    techStack={["MATLAB"]}
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
                    jobTitle="Appletree Express"
                    company=""
                    timeWorked="Oct 2021 - Dec 2021"
                    jobDescription="I crafted a website for Appletree restaurant, complete with a sandwich builder for custom orders and easy online ordering capabilities, streamlining the dining experience for customers."
                    techStack={["React", "SCSS"]}
                />
                <img src={AE1} className="rounded mt-4" />
                <img src={AE2} className="rounded mt-4" />
                <img src={AE3} className="rounded mt-4 mb-4" />
                <ExperienceCard
                    jobTitle="Population Visualizer"
                    company=""
                    timeWorked="July 2019 - July 2019"
                    jobDescription="I created a website utilizing an API to fetch population data, which was then integrated into a 3D model, allowing users to visualize and interact with population densities across different countries dynamically."
                    techStack={["ThreeJS"]}
                />
                <img src={Population_1} className="rounded mt-4" />
                <img src={Population_2} className="rounded mt-4" />
            </section>
        </div>
    );
}
export default Content;
