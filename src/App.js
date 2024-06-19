import './App.css'
import React, { useState } from 'react'
import UserPage from './components/UserPage.js'
import SideBar from './components/siderBar-component/SideBar.js'
import { NavLink } from 'react-router-dom'
import NavList from './components/siderBar-component/NavList.js'
import { MessageContext } from './utilties/context.js'
import Footer from './components/footer-components/Footer.js'
import Featured from './components/featured-components/Featured.js'

function App() {
  const [color, setColor] = useState('blue')

  const onSwitchColor = () => {
    setColor(color === 'blue' ? 'red' : 'blue')
  }

  return (
    <div className="app-wrap">
      {/* <MessageContext.Provider value={}> */}
      {/* 上下栏固定，中间可以显示虚拟滚动 */}
      <div className="head-container">
        <div style={{ color: color }}>licked color: {color}</div>
        <button onClick={onSwitchColor}>click to change the color</button>
        {/* <UserPage /> */}
      </div>
      <main className="main-container">
        <SideBar>
          <ul>
            <li>home</li>
            <li>search</li>
          </ul>
        </SideBar>
        <Featured>
          <div>featured</div>
        </Featured>
      </main>

      <Footer>
        <div className="footer-container">footer</div>
      </Footer>

      {/* </MessageContext.Provider> */}
    </div>
  )
}
export default App
