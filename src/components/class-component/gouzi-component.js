import React from 'react'
class MyComponent extends React.Component {
  //挂载或者卸载阶段
  constructor(props) {
    super(props)
    this.state = {
      name: 'hello world',
    }
    console.log('constructor:初始化状态，接收来自父组件的props')
  }

  //react 16.8 新增钩子函数
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps:判断数据是否需要更新', props, state)
    return null //返回null表示不用更新
  }

  render() {
    console.log('render渲染')
    return <div>render</div>
  }

  componentDidMount() {
    //，可以获取canvas ， svg等操作，可以进行数据操作并获取接口数据
    console.log('componentDidMount:渲染完成时候触发')
  }

  //   static getSnapshotBeforeUpdate(prevProps, prevState) {
  //可以访问更新前的props和state
  //     console.log('返回组件更新dom')
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    //可以手动控制是否渲染组件，减少非必要的渲染，提高组件的性能
    console.log('shouldComponentUpdate:判断数据是否更新，返回true or false')
    return false
  }

  componentDidUpdate(prevProps) {
    // 组件更新后会被立即调用，首次渲染不会触发
    //只有在二次更新的时候会被触发
    console.log('componentDidUpdate:组件数据更新完毕')
  }

  componentWillUnmount() {
    console.log('已经销毁')
  }

  //其他api
  static getDerivedStateFromError(error) {
    //更新 state使得下一次渲染可以显使降级ui
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    //捕获错误信息
  }

  //增加错误信息校验
  render() {
    if (this.state.hasError) {
      console.log('可以渲染任何自定义降级的ui')
    }
    return this.props.children
  }
}

export default MyComponent
