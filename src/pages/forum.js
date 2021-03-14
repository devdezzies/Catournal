import React from 'react'
import Layout from "components/Layout"
import '@suziwen/gitalk/dist/gitalk.css'
import Gitalk from 'gatsby-plugin-gitalk'

const Forum = () => {
    return (
    <Layout>
        <Gitalk />
    </Layout>
    )

}

export default Forum