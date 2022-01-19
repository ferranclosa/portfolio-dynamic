import React from 'react'

import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirlineSeatFlatAngledIcon from '@mui/icons-material/AirlineSeatFlatAngled';
import SchoolIcon from '@mui/icons-material/School';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const OneTimeSlot = (props) => {

    const provideIcon = (type) => {
        if (type !== '' && type !== undefined) {
            switch (type) {
                case 'LIVE':
                    return <AcUnitIcon />
                case 'EDUC':
                    return <SchoolIcon />
                case 'MUSI':
                    return <MusicNoteIcon />
                case 'TRAVE':
                    return <TravelExploreIcon />
                case 'TRAV':
                    return <AirlineSeatFlatAngledIcon />
                case 'DEVE':
                    return <DeveloperModeIcon />
                case 'TRAIN':
                    return <CastForEducationIcon />
                case 'ARCH':
                    return <ArchitectureIcon />
                default:
                    console.log('Unknown type')
                    return <FiberManualRecordIcon />
            }
        }
    }

    let { header, when, description, type, align, where } = props

    return (
        <>
            <li className='box'>
                {align === '0' ?
                    <>
                        <div className="date_box_l"
                        >
                            <p>{when}</p>
                            <DateRangeIcon />
                        </div >

                        <div className='separator'>
                            <div className='connector_line' />
                            <div className='connector_icon'>
                            <ArrowForwardIcon />
                         
                                {provideIcon(type)}
                                </div>
                            <div className='connector_line' />

                        </div>

                        <div className='content_box_r'

                        >
                            <h3>{header}</h3>
                            <h5>{where}</h5>
                            <p>{description}</p>
                        </div>
                    </>
                    :
                    <>
                        <div className='content_box_l'
                        >
                            <h3 >{header}</h3>
                            <h5>{where}</h5>
                            <p > {description}</p>
                        </div>

                        <div className='separator'>
                            
                            <div className='connector_line' />
                            <div className='connector_icon' >
                                <ArrowBackIcon />
                                {provideIcon(type)}
                             </div>
                            <div className='connector_line' />
                        </div >

                        <div
                            className="date_box_r">
                            <DateRangeIcon />
                            <p>{when}</p>
                        </div>
                    </>
                }
            </li>
        </>
    )
}

export default OneTimeSlot