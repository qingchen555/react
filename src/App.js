import './App.css'
import React, { useState } from 'react'
import UserPage from './components/UserPage.js'
import SideBar from './components/siderBar-component/SideBar.js'
import { NavLink } from 'react-router-dom'
import NavList from './components/siderBar-component/NavList.js'
import { MessageContext } from './utilties/context.js'
import Footer from './components/footer-components/Footer.js'
import Featured from './components/featured-components/Featured.js'
import Icon from './components/icons/index.js'
import FeaturedPlaylist from './components/siderBar-component/FeaturedPlayList.js'
import FeaturedItem from './components/siderBar-component/FeaturedItem.js'
import MyComponent from './components/class-component/gouzi-component.js'
import HookComponent from './components/class-component/react-hook-gouzi.js'

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
        {/* <MyComponent /> */}
        <HookComponent />
      </div>
      <main className="main-container">
        <SideBar>
          <div className="nav-wrap">
            <div className="nav-link">
              <div className="nav-icon">
                <Icon name={'Home'} />
              </div>
              <span>Home</span>
            </div>
            <div className="nav-link">
              <div className="nav-icon">
                <Icon name={'Search'} />
              </div>
              <span>Search</span>
            </div>
          </div>
          <div className="palylist-wrap">
            <h1 className="play-title">playlists</h1>
            <FeaturedPlaylist>
              <FeaturedItem></FeaturedItem>
            </FeaturedPlaylist>
          </div>
        </SideBar>
        <Featured>
          <div>main feature part</div>
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
