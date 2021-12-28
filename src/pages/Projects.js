import React, { useEffect, useState } from "react";

import projectdata from "data/projectdata";

import ProjectCard from "components/ProjectCard";


const Projects = (props) => {


    let { language } = props;

    const [project, setProject] = useState({
        firstWord: '',
        spannedWord: '',
        intro: '',
        details: []
    })

    
    useEffect(() => {

        projectdata.filter((one => one.language === language))
            .map((one => {
                setProject({
                    firstWord: one.firstWord,
                    spannedWord: one.spannedWord,
                    intro: one.intro,
                    details: one.details
                })
            }))

    }, [language])


    return (

        <main id="project">
            <h1 className="lg-heading">
                {project.firstWord} <span className="text-secondary">{project.spannedWord}</span>
            </h1>

            <div className="project-container">

                <div className="project-intro">
                    <p>{project.intro}</p>
                </div>
                <div className="project-item-container">


                    {project.details.length > 0 ?

                        project.details.sort((a, b) => {
                            return a.order - b.order
                        }).map((one => (

                            <ProjectCard
                                title={one.title}
                                subtitle={one.subtitle}
                                place={one.place}
                                year={one.year}
                                code={one.code}
                                description={one.description}
                                stars={one.stars}

                            />
                        )))


                        : null}

                </div>
            </div>
        </main>

    )
}

export default Projects