import { useState } from 'react'
import './App.css'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='wrap'>
        <header className="o_header">
          <div className='head-holder'>
            <a>
              <span>odoo</span></a>
            <ul className='center-header'>
              <li>
                Sales
                <i class="fa-solid fa-chevron-down" style={{paddingRight:"9px",paddingLeft:3,paddingTop:2}}></i>
              </li>|
              <li style={{color:"#01696f"}}>
                Overview
              </li>
              <li>
                Features
              </li>
            </ul>
            <ul className='right-header'>
              <li>
                Sign in
              </li>
              <li className='try-chip'>
                Try it free
              </li>
            </ul>
          </div>
        </header>
      </div>
      <Content/>
    </>
  )
}

export default App
