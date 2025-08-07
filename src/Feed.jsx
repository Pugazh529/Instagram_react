import React from 'react'
import Content from './Content'
import Story from './assets/Story'

function Feed() {
  return (
    <div className='parent'>
        <div className='story-page'><Story/></div>
        <div className=''><Content/></div>
    </div>
  )
}

export default Feed