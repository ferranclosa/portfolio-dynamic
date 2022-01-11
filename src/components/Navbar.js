import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import image from 'assets/icon/favicon.ico'
import languages from "data/languages";
import menus from 'data/menus'


const Navbar = (props) => {

    let navigate = useNavigate()

    // const {language } = props


   const [language, setLanguage] = useState(props.language)
    const [langMenu, setLangMenu] = useState({})
    const [menu, setMenu] = useState({})

    useEffect(() => {
        languages.filter((one => one.language === language))
            .map((one => {
                setLangMenu({ text: one.text, sp: one.sp, en: one.en, ca: one.ca, fr: one.fr, code: one.language })
            }))
        menus.filter((one => one.language === language))
            .map((one => {
                setMenu({
                    profes: one.profes, 
                    perso: one.perso, 
                    contact: one.contact, 
                    skills: one.skills, 
                    projects: one.projects, 
                    timel: one.timel, 
                    capture: one.capture
                })

            }))

    }, [language])



    const handleSpanish = () => {
        setLanguage('sp')
        navigate('/main/sp')
    }


    const handleFrench = () => {
        setLanguage('fr')
        navigate('/main/fr')
    }

    const handleCatalan = () => {
        setLanguage('ca')
        navigate('/main/ca')
    }

    const handleEnglish = () => {
        setLanguage('en')
        navigate('/main/en')
    }

    const handleProfesional = () => {
        switch (language) {
            case 'en':
                navigate('/profesional/en')
                break;
            case 'sp':
                navigate('/profesional/sp')
                break
            case 'ca':
                navigate('/profesional/ca')
                break
            case 'fr':
                navigate('/profesional/fr')
                break
            default:
                break;
        }

    }

    const handlePersonal = () => {
        switch (language) {
            case 'en':
                navigate('/personal/en')
                break;
            case 'sp':
                navigate('/personal/sp')
                break
            case 'ca':
                navigate('/personal/ca')
                break
            case 'fr':
                navigate('/personal/fr')
                break
            default:
                break;
        }

    }

    const handleSkills = () => {
        switch (language) {
            case 'en':
                navigate('/skills/en')
                break;
            case 'sp':
                navigate('/skills/sp')
                break
            case 'ca':
                navigate('/skills/ca')
                break
            case 'fr':
                navigate('/skills/fr')
                break
            default:
                break;
        }

    }

    const handleProjects = () => {
        switch (language) {
            case 'en':
                navigate('/projects/en')
                break;
            case 'sp':
                navigate('/projects/sp')
                break
            case 'ca':
                navigate('/projects/ca')
                break
            case 'fr':
                navigate('/projects/fr')
                break
            default:
                break;
        }

    }

    const handleContact = () => {
        switch (language) {
            case 'en':
                navigate('/contact/en')
                break;
            case 'sp':
                navigate('/contact/sp')
                break
            case 'ca':
                navigate('/contact/ca')
                break
            case 'fr':
                navigate('/contact/fr')
                break
            default:
                break;
        }
    }

    const handleTimeLine = () => {
        switch (language) {
            case 'en':
                navigate('/timeline/en')
                break;
            case 'sp':
                navigate('/timeline/sp')
                break
            case 'ca':
                navigate('/timeline/ca')
                break
            case 'fr':
                navigate('/timeline/fr')
                break
            default:
                break;
        }
    }

    const handleCapture = () => {
        switch (language) {
            case 'en':
                navigate('/data/en')
                break;
            case 'sp':
                navigate('/data/sp')
                break
            case 'ca':
                navigate('/data/ca')
                break
            case 'fr':
                navigate('/data/fr')
                break
            default:
                break;
        }
    }

    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={image} alt="erronea" />
                </div>

                <div className="dropdown">
                    <button className="dropbtn">{langMenu.text}</button>
                    <div className="dropdown-content">
                        {langMenu.en !== undefined ? <a onClick={handleEnglish}>{langMenu.en}</a> : null}
                        {langMenu.sp !== undefined ? <a onClick={handleSpanish}>{langMenu.sp}</a> : null}
                        {langMenu.fr !== undefined ? <a onClick={handleFrench}>{langMenu.fr}</a> : null}
                        {langMenu.ca !== undefined ? <a onClick={handleCatalan}>{langMenu.ca}</a> : null}

                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Menu</button>
                    <div className="dropdown-content">
                        {menu.profes !== undefined ? <a onClick={handleProfesional}>{menu.profes}</a> : null}
                        {menu.perso !== undefined ? <a onClick={handlePersonal}>{menu.perso}</a> : null}
                        {menu.skills !== undefined ? <a onClick={handleSkills}>{menu.skills}</a> : null}
                        {menu.projects !== undefined ? <a onClick={handleProjects}>{menu.projects}</a> : null}
                        {menu.contact !== undefined ? <a onClick={handleContact}>{menu.contact}</a> : null}
                        {menu.timel !== undefined ? <a onClick={handleTimeLine}>{menu.timel}</a> : null}
                        {menu.capture !== undefined ? <a onClick={handleCapture}>{menu.capture}</a> : null}
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Navbar


