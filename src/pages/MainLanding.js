import React , { useState, useEffect } from "react";
import image from 'assets/icon/favicon.ico'


import { mains } from "data/mains";

const MainLanding = (props) => {

    const [main, setMain] =useState(mains)

    let { language } = props

    useEffect(() => {

        mains.filter(one => one.language === language)
            .map((one => {
                setMain({title : one.title, subtitle: one.subtitle, description: one.description , firstWord: one.firstWord, spannedWord : one.spannedWord ,
                ceo: one.ceo})
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
                <h2 className="sm-heading">{main.ceo} &nbsp; &nbsp; &nbsp;
                    <span><img src={image} alt="erronea"/></span>
                </h2>
                <div className="container">

                    <div className="icons ">
                        <a href="https://www.youtube.com/channel/UCEUqzslQQYfgLIyOdi4-qmQ" target="'_blank">
                            <i className="fab fa-youtube fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ferran-closa-cervera-02815221/" target="'_blank">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://github.com/ferranclosa">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </div>
                    <div className="welcome hidden">
                        <p>
                            {main.description}
                            </p>
                           
                    </div>
                </div>

            </main>
        </div>
    )
}

export default MainLanding