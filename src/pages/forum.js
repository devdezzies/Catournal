import React from 'react'
import Layout from "components/Layout"
import Helmet from "react-helmet"
import '@suziwen/gitalk/dist/gitalk.css'
import Gitalk from 'gatsby-plugin-gitalk'

const Forum = ({ uid }) => {

    let gitalkConfig = {
        id: `${uid}`,

    }

    return (
        <>
            <Helmet
                title={`Catournal Forum`}
                titleTemplate={`Hello, welcome to Catournal Forum`}
            />
            <Layout>
                <Gitalk options={gitalkConfig} />
            </Layout>
        </>
    )

}

export default Forum