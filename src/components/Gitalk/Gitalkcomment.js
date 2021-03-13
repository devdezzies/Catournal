import React from 'react'
import Gitalk from 'gatsby-plugin-gitalk'

const PostTemplate = () => {
  let gitalkConfig = {
    id: post.slug || post.id,
    title: post.title,
  }
  return (
     <Gitalk options={gitalkConfig}/>
  )
}

export default PostTemplate

