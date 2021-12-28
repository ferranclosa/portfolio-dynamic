import React, { useEffect, useState } from "react";

import profes from "data/profes";


const Work = (props) => {


    let { language } = props;

    const [profesional, setProfesional] = useState({
        firstWord: '',
        spannedWord: '',
        intro: '',
        details: []
    })

    useEffect(() => {

        profes.filter((one => one.language === language))
            .map((one => {
                setProfesional({
                    firstWord: one.firstWord,
                    spannedWord: one.spannedWord,
                    intro: one.intro,
                    details: one.details                })
            }))

    }, [language])

 
    return (

        <main id="about">
            <h1 className="lg-heading">
                {profesional.firstWord} <span className="text-secondary">{profesional.spannedWord}</span>
            </h1>

            <div className="about-container">

                <div className="about-intro">
                    <p>{profesional.intro}</p>
                </div>
                <div className="about-item-container">


                    {profesional.details.length > 0?
                        profesional.details.map((one => (

                            <div className="about-item">
                                <h3 className="text-secondary">{one.title}</h3>
                                <h5>{one.subtitle}</h5>
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

export default Work