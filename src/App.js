import './App.css'
import React, { useState } from 'react'
import UserPage from './components/UserPage.js'

// 使用react class实现点击按钮切换字体颜色
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { color: 'blue' }
//   }

//   onSwitchColor = () => {
//     const { color } = this.state
//     this.setState({ color: color === 'blue' ? 'red' : 'blue' })
//   }

//   render() {
//     return (
//       <div>
//         <div style={{ color: this.state.color }}>
//           your like color: {this.state.color}
//         </div>
//         <button onClick={this.onSwitchColor}> color change</button>
//       </div>
//     )
//   }
// }

// use react hooks to realize the above same function
function App() {
  const [color, setColor] = useState('blue')

  const onSwitchColor = () => {
    setColor(color === 'blue' ? 'red' : 'blue')
  }

  return (
    <div>
      <div style={{ color: color }}>licked color: {color}</div>
      <button onClick={onSwitchColor}>click to change the color</button>
      <UserPage />
    </div>
  )
}
export default App
