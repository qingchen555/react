import React, { useContext } from 'react'
import Icon from '../icons'

//Component a little different than all the other nav items
// because it is a button and doesnt link to anything
function CreatePlaylist() {
  //   const setMessage = useContext(MessageContext)

  return (
    <>
      <button
        className="create-button no-outline"
        data-tip="create"
        data-for="tooltip"
        data-event="click"
      >
        <div className="playlist-icon">
          <Icon name="Create" />
        </div>
        <span className="featured-label">Create Playlist</span>
      </button>
    </>
  )
}

export default CreatePlaylist
