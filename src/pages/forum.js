import React from 'react'
import Layout from "components/Layout"
import '@suziwen/gitalk/dist/gitalk.css'
import Gitalk from 'gatsby-plugin-gitalk'

const Forum = ({uid}) => {

    let gitalkConfig = {
        id: `${uid}`,
        
      }

    return (
    <Layout>
        <Gitalk options={gitalkConfig}/>
    </Layout>
    )

}

export default Forum