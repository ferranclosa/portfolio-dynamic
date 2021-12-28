import React , { useState } from 'react';
import { Chrono } from "react-chrono";

import events from '../data/events';
  
  const ChronoVertical = (props) => {

    let {language} = props

    const [items, setItems] = useState(events)
    
    return (
      <div style={{ width: "100vw", height: "90vh" }}>
        <Chrono items={items} 
        slideShow
        slideItemDuration={4500}
        mode="VERTICAL_ALTERNATING"/>
      </div>
    )
  }

  export default ChronoVertical