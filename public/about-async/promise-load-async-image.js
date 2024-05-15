//async load one image
function loadImageByPromise(url) {
  return new Promise((resolve, reject) => {
    var image = new Image()
    image.onload = () => {
      resolve(image)
    }
    image.onerror = () => {
      reject(new Error('load failed' + url))
    }
    image.src = url
  })
}
//async load multi image in parallel
async function loadMultiImagesByPromise() {
  const images = [url1, url2, url3]
  let promise = function (url) {
    return new Promise((resolve, rejcet) => {
      const image = new Image()
      image.onload = () => {
        resolve(image)
      }
      image.src = url
    })
  }

  const promises = images.map((i) => promise(i))
  const results = await Promise.all(promises)
  results.forEach((image) => {
    document.body.appendChild(image)
  })
}
//async load multi image in serial
// TODO
