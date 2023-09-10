import React from 'react'
import './Heading.css'

function Heading(props) {
  return (
    <>
    
        <div className='heading-container'>
            <div className='screen-heading'>
                <span>{props.title}</span>
            </div>
        </div>
        <div className='heading-separator'>
            <div className='separator-line'>

            </div>
        </div>
    </>
  )
}

export default Heading