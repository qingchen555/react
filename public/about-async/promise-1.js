var promise = new Promise((resolve, reject) => {
  let value = true
  let error = ''
  console.log('new promise')
  if (value) {
    resolve(value)
  } else {
    reject(error)
  }
})
/**
 * Promise 构造函数接收一个函数作为参数
 * 该函数有两个参数 ： resolve， rejcet
 * resolve函数： 异步操作成功时调用该函数，将promise对象的状态从pending变为 resolved，
 *               并将异步操作的结果作为参数传递出去
 * reject函数：异步操作失败时调用该函数，将promise对象的状态从pending变为 rejected
 *             并将异步操作报出的错误作为参数传递出去
 *
 */

promise.then(
  (value) => {
    console.log(' success')
  },
  (error) => {
    console.log(' failed')
  }
)

console.log('hello')
/**
 * 当promise实例的状态变为resolved，就会触发then方法绑定的回掉函数
 * then方法接收两个回掉函数作为参数
 * 当promise对象的状态变为resolved时，调用第一个函数
 * 当promise对象的状态变为rejected时，调用第二个函数
 */

/** 对于promise中的一些调用顺序'new promise' -》 ‘hello’ -》success
 * Promise创建的时候会立刻执行，先输出'new promise'
 * then方法指定的回掉函数 会在当前脚本所有同步任务 执行完成之后才会执行，即异步操作完成之后才会执行
 *
 */

//promise 实现图片的异步加载,什么是图片的异步加载？
function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    var image = new Image()
    image.onload = () => {
      document.body.appendChild(image)
      resolve(image)
    }
    image.onerror = () => {
      reject(new Error('load failed' + url))
    }
    image.src = url
  })
}

//promise实现ajax操作
