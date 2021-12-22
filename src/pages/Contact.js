import React, { useEffect, useState } from "react";

import contac from "data/contac";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { ReactComponent as GithubIcon } from 'assets/icon/github-svgrepo-com.svg';


const Contact = (props) => {


    let { language } = props;

    const [contacto, setContacto] = useState({
        firstWord: '',
        spannedWord: '',
        intro: '',
        details: []
    })

    useEffect(() => {

        contac.filter((one => one.language === language))
            .map((one => {
                setContacto({
                    firstWord: one.firstWord,
                    spannedWord: one.spannedWord,
                    lastWord: one.lastWord,
                    intro: one.intro,
                    icon: one.icon,
                    details: one.details
                })
            }))

    }, [language])

    useEffect(() => {
        console.log(JSON.stringify(contacto))
    }, [contacto])


    return (

        <main id="contact">
            <h1 className="lg-heading">
                {contacto.firstWord} <span className="text-secondary">{contacto.spannedWord}</span> {contacto.lastWord}
            </h1>

            <div className="contact-container">

                <div className="contact-intro">
                    <p>{contacto.intro}</p>
                </div>
                <div className="contact-item-container">


                    {contacto.details.length > 0 ?
                        contacto.details.map((one => (

                            <div className="contact-item">
                                <h3 className="text-secondary">{one.means}</h3>
                                <div className="logo">
                                    {one.means === "email" ? <EmailIcon ></EmailIcon>: null}
                                    {one.means === "web" ? <LanguageIcon></LanguageIcon>: null}
                                    {one.means === "github" ? <GitHubIcon></GitHubIcon>: null}
                                    {one.means === "linkedin" ? <LinkedInIcon></LinkedInIcon>: null}
                                    {/* <img src={one.icon} alt="erronea" /> */}
                                </div>

                                <a href={one.url} target="_blank">
                                    {one.mean}
                                </a>
                            </div>
                        )))


                        : null}

                </div>
            </div>
        </main>

    )
}

export default Contact