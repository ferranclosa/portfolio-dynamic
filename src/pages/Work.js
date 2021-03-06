import React, { useEffect, useState } from "react";

import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import uniqid from 'uniqid'


import profes from "data/profes";



const StyledRating = styled(Rating)({
    // paddingLeft: '10px',
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

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
                    details: one.details
                })
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


                    {profesional.details.length > 0 ?
                        profesional.details.map((one => (

                            <div className="about-item" key={uniqid()}>
                                <h3 className="text-secondary">{one.title}</h3>
                                <h5>{one.subtitle}</h5> <span>
                                    <StyledRating
                                        className="styled-rating"
                                        name="customized-color"

                                        value={one.stars}
                                        readOnly
                                        size='small'
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.25}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />
                                    {/* <Rating value={one.stars} readOnly></Rating> */}
                                </span>
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