import React, { useEffect, useState } from "react";

import SkillCard from "components/SkillCard";

import skillsdata from "data/skillsdata";

/**
 * This page shows the skills collection, that are fed from a file in JSON
 * The only prop is acception is language, as it needs to know in which 
 * language it has to show them. 
 * 
 * The JSON object contains a language key value, that is used to filter the data
 * @param {*} props 
 * @returns 
 */

const Skills = (props) => {


    let { language } = props

    const [skill, setSkill] = useState({
        firstWord: '',
        spannedWord: '',
        intro: '',
        details: []
    })

    useEffect(() => {
        skillsdata.filter((one => one.language === language))
            .map((one => {
                setSkill({
                    firstWord: one.firstWord,
                    spannedWord: one.spannedWord,
                    intro: one.intro,
                    details: one.details
                })
            }))

    }, [language])

    // useEffect(() => {
    //     console.log(JSON.stringify(skill))
    // }, [skill])

    return (

        <main id="accordion">
            <h1 className="lg-heading">
                {skill.firstWord} <span className="text-secondary">{skill.spannedWord}</span>
            </h1>

            <div className="about-intro">
                <p>{skill.intro}</p>
            </div>

            <div className="faq-container" >
                {skill.details.length > 0 ?
                    skill.details.map((one => (
                        <div className="faq">
                            <SkillCard
                                title={one.title}
                                level={one.level}
                                description={one.description} />

                        </div>
                    )))
                    : null}
            </div>
        </main>


    )
}
 
export default Skills