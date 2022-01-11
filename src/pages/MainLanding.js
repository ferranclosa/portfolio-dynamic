import React, { useState, useEffect } from "react";
import image from 'assets/icon/favicon.ico'


import { mains } from "data/mains";

const MainLanding = (props) => {

    const [main, setMain] = useState(mains)

    let { language } = props

    useEffect(() => {

        mains.filter(one => one.language === language)
            .map((one => {
                setMain({
                    title: one.title, subtitle: one.subtitle, description: one.description, firstWord: one.firstWord, spannedWord: one.spannedWord,
                    ceo: one.ceo, objectives: one.objectives
                })
            }
            ))

    }, [language])


    return (
        <div>

            <main id="home">
                <h1 className="lg-heading">
                    {main.firstWord}
                    <span className="text-secondary">{main.spannedWord}</span>
                </h1>
                <h2 className="sm-heading">
                    {main.subtitle}
                </h2>
           
                <div className="container">
                    <div className="portrait">
                    </div>
                    <div className="welcome">
                        <p>
                            {main.description}
                        </p>
                        <br></br>
                        <p>
                            {main.objectives}
                        </p>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default MainLanding