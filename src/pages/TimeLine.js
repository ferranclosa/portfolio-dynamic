import React, { useState, useEffect } from 'react';
import { Chrono } from "react-chrono";

import itemss from '../data/events';

const TimeLine = (props) => {

  let { language } = props

  const [items, setItems] = useState([])


  useEffect(() => {
    console.log(language)
    itemss.filter((one => one.language === language))
      .map((one => {
  
        setItems(one.events)
      }))

  }, [language])

 

  return (
    <>
      {items.length > 0 ? (
        <div style={{ width: "100vw", height: "90vh" }}>
          <Chrono items={items}
            slideShow
            slideItemDuration={4500}
            mode="VERTICAL_ALTERNATING" />
        </div>
      ) : null}
    </>
  )
}

export default TimeLine