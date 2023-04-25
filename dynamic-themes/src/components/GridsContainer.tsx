import React from 'react'

export default function GridsContainer() {
  return (
    <div><div className="gridsContainer">
    <div className="gridPersonalInfoContainer">
      <h3>Susan Taylor</h3>
      <h6>Game Designer</h6>
      <p>
        Game designer at eric. delivering creative and wonderful experience.
        Contact today!
      </p>
    </div>

    <div className="gridShareContainer">
      <h4 className="column">share</h4>      
       <div className="vl "/>
       <h4 className="column">direction</h4>
    </div>

    <div className="gridContactContainer">
      <div className="contactMethod">
        <h4>add contact</h4>  
      </div>
      <div className="contactMethod">
        <h4>visit website</h4>
      </div>
    </div>

    <div className="gridAppContainer">
      <div className='app'>
      <h4>call</h4>
      </div>
      <div className='app'>
      <h4>email</h4>
      </div>
      <div className='app'>
      <h4>tik&nbsp;tok</h4>
      </div>
      <div className='app'>
      <h4>tik&nbsp;tok</h4>
      </div>

      </div>
    </div>
 </div>
  )
}
