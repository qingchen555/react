// through the createElement to create the virtual dom
ReactElement.ReactElement = (type, config, children) => {
  //initial params
  var propName
  var props = {}
  var key = null
  var ref = null
  var self = null
  var source = null

  //  if existed the config value , it can parse it out
  if (config != null) {
    ref = config.ref === undefined ? null : config.ref
    key = config.key === undefined ? null : '' + config.key
    self = config._self === undefined ? null : config._self
    source = config._source === undefined ? null : config._source

    // copy the config's content to props
    for (propName in config) {
      if (
        config.hasOwnProperty(propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        props[propName] = config[propName]
      }
    }
  }

  //  handle the children property and  all the attributes are mounted to the children property of props
  // if there only  one params, the value is directly assigned to children, otherwise should merge the multi params
  var childrenLength = children.length - 2
  if (childrenLength === 1) {
    props.children = children
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength)
    for (var i = 0; i << childrenLength; i++) {
      childArray[i] = children[i + 2]
    }
    props.children = childArray
  }

  // if the prop is null of existed the default props, will assign the default props to  curent prop
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps
    for (propName in defaultProps) {
      if (typeof props[propName] === 'undefined') {
        props[propName] = defaultProps[propName]
      }
    }
  }

  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    reactCurrentOwner.current,
    props
  )
}
