import React from 'react'
import Layout from "components/Layout"
import Helmet from "react-helmet"
import '@suziwen/gitalk/dist/gitalk.css'
import Gitalk from 'gatsby-plugin-gitalk'

const Discussion = ({ uid }) => {

    let gitalkConfig = {
        id: `${uid}`,

    }

    return (
        <>
            <Helmet
                title={`Catournal Discussion`}
                titleTemplate={`Welcome to Discussion room`}
            />
            <Layout>
            <h1>Discussion</h1>
            <br/>
                <Gitalk options={gitalkConfig} />
            </Layout>
        </>
    )

}

export default Discussion