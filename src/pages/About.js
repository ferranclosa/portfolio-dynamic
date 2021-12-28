import React, { useEffect, useState } from "react";

import perso from "data/perso";


const About = (props) => {


    let { language } = props;

    const [personal, setPersonal] = useState({
        firstWord: '',
        spannedWord: '',
        intro: '',
        details: []
    })

    useEffect(() => {

        perso.filter((one => one.language === language))
            .map((one => {
                setPersonal({
                    firstWord: one.firstWord,
                    spannedWord: one.spannedWord,
                    intro: one.intro,
                    details: one.details                })
            }))

    }, [language])

    // useEffect(() => {
    //     console.log(JSON.stringify(personal))
    // }, [personal])


    return (

        <main id="about">
            <h1 className="lg-heading">
                {personal.firstWord} <span className="text-secondary">{personal.spannedWord}</span>
            </h1>

            <div className="about-container">

                <div className="about-intro">
                    <p>{personal.intro}</p>
                </div>
                <div className="about-item-container">


                    {personal.details.length > 0?
                        personal.details.map((one => (

                            <div className="about-item">
                                <h3 className="text-secondary">{one.title}</h3>
                                <p>
                                    {one.description}
                                </p>
                            </div>
                        )))
                    

                         : null} 

                </div>
            </div>
        </main>

    )
}

export default About