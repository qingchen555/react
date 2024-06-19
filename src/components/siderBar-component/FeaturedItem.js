import React from 'react'
import Icon from '../icons/index.js'

const FeaturedItem = ({ label, loggedIn }) => {
  return (
    <div
      className="featured-item"
      style={{ cursor: 'pointer' }}
      data-tip="list"
      data-for="tooltip"
      data-event="click"
    >
      <div className="playlist-icon">
        <Icon name="Like" />
      </div>
      <span className="featured-label">Liked songs</span>
    </div>
  )
}

export default FeaturedItem
