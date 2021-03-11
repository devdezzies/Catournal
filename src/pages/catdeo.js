import React from 'react'
import Layout from "components/Layout"
import Newes from '../components/Gitalk/newes'
//import Newschimp from '../components/Newsletter/Newschimp'

const catdeo = () => (
        <Layout>
            <Newes type="video" button="This is the film" url="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"/>
            <Newes type="youtube" button="Hey this is my second post!" id="HQBnfZ0x9Ls"/>
            <Newes type="youtube" button="Here's my youtube video" id="f080IGBQiaM" />
         
        </Layout>
)

export default catdeo