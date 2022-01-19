import React, { useState, useEffect } from 'react';
import events from 'data/events';
import OneTimeSlot from 'components/OneTimeSlot';
import uniqid from 'uniqid'

const TimeLine = (props) => {

  let { language } = props

  const [items, setItems] = useState([])
 
  useEffect(() => {
    events.filter((one => one.language === language))
      .map((one => (setItems(one.events))
      ))
  }, [language])


  return (
    <>
      <div className='tl_container' 
        >
        {items.sort((b, a) => {
                            return a.order - b.order
                        }).map((one, key ) => 
          <OneTimeSlot 
            header={one.header}
            when={one.when}
            where={one.where}
            type={one.type}
            description={one.description}
            align={key % 2 == 0? '0': '1'}
            key={uniqid()}
          ></OneTimeSlot>
        )}
      </div >
    </>
  )
}

export default TimeLine