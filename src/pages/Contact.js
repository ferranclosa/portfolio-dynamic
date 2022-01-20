import React, { useEffect, useState } from "react";
import uniqid from 'uniqid'

import contac from "data/contac";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


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

    


    return (

        <main id="contact">
            <h1 className="lg-heading">
                {contacto.firstWord} <span className="text-secondary">{contacto.spannedWord}</span>{contacto.lastWord}
            </h1>

            <div className="contact-container">

                <div className="contact-intro">
                    <p>{contacto.intro}</p>
                </div>
                <div className="contact-item-container">


                    {contacto.details.length > 0 ?
                        contacto.details.map((one => (

                            <div className="contact-item" key={uniqid()}>
                                <h3 className="text-secondary">{one.mean}</h3>
                                <div className="logo">
                                    {one.means === "email" ? 
                                    (<a href={one.url} target="_blank"><EmailIcon ></EmailIcon></a>): null}
                                    {one.means === "web" ? (
                                    <a href={one.url} target="_blank">
                                    <LanguageIcon></LanguageIcon> </a>): null}
                                    {one.means === "github" ? 
                                    (<a href={one.url} target="_blank"> <GitHubIcon></GitHubIcon> </a>): null}
                                    {one.means === "linkedin" ? 
                                    (<a href={one.url} target="_blank"><LinkedInIcon></LinkedInIcon></a>) : null}
                                    {one.means === "youtube" ? 
                                    (<a href={one.url} target="_blank" ><YouTubeIcon></YouTubeIcon></a>): null}
                                    {one.means === "cv" ? 
                                    (<a href={one.url} target="_blank" download><FileDownloadIcon></FileDownloadIcon></a>): null}
                                    
                                    {/* <a href="/src/assets/img/Ferran CV 3.pdf" target="_blank" download>Download</a> */}
                                </div>
                            </div>
                        )))


                        : null}

                </div>
            </div>
        </main>

    )
}

export default Contact