import React from 'react'
import "./Content.css";
const Content = () => {
  return (
    <div className='content'>
      <div className='left-content'>
        <h1 style={{width:"300px", marginBottom:"16px"}}>Easy quotation software</h1>
        <h4 style={{marginBottom:"48px"}}>Send polished quotations
         with Odoo Sign and online payment.</h4>
        <a className='start-now-button'>Start now - its free</a>
        <a className='meet-expert'>Meet an Expert</a>
        <br/>
        <p style={{padding:"24px 0px 16px"}}>Free, forever, with unlimited users
          <a className='why'>{`(Why?)`}</a>
        </p>
      </div>
      <div>hiu
        <img src="./browser.png"/>
        <img
          class="fit-picture"
          src="../assets/grapefruit-slice-332-332.jpg"
            alt="Grapefruit slice atop a pile of other slices"
        />

      </div>
    </div>

  )
}

export default Content