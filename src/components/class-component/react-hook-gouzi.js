import React, { useEffect, useState, useCallback, useMemo } from 'react'

const HookComponent = React.memo((props) => {
  const [name, setName] = React.useState('name')

  //useMemo 用来缓存计算过程的值
  //   两个参数：计算函数，依赖项数组
  useMemo(() => {
    console.log('useMemo:dom节点渲染之前调用一次')
  }, [])

  useMemo(() => {
    console.log('useMemo:dom节点渲染之前根据依赖参数props调用')
  })

  useEffect(() => {
    console.log('useEffect:组件初始化时调用')
  }, [])

  useEffect(() => {
    console.log('useEffect:根据依赖参数props更新时调用')
  }, [props])

  useEffect(() => {
    return () => {
      console.log('useEffect:组件卸载时候调用')
    }
  }, [])

  useCallback(() => {
    //[]:表示某个事件只有在首次渲染时候才会被定义
    console.log('useCallback:监听事件是否重新被定义')
  }, [])

  return console.log('返回dom节点')
})

export default HookComponent
