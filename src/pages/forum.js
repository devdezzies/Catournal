import React from 'react'
import Layout from "components/Layout"
import Helmet from "react-helmet"
import '@suziwen/gitalk/dist/gitalk.css'
import Gitalk from 'gatsby-plugin-gitalk'
import TypeWriterEffect from 'react-typewriter-effect'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'


//const myRef = document.querySelector('.scrollable-div')

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
                <Jumbotron fluid>
                    <Container>
                        <h1>Catournal Forum</h1>
                    </Container>
                </Jumbotron>
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Open Sans',
                        color: '#000000',
                        fontWeight: 900,
                        fontSize: '1.5em',
                    }}
                    startDelay={2000}
                    cursorColor="#000000"
                    multiText={[
                        'Hey there, This is a type writer animation package',
                        'it consist of two types...',
                        'Single text display and multi text display',
                        'Fonts can be customized.',
                        'The type speed can be customized as well',
                    ]}
                    loop={true}
                    nextTextDelay={10}
                    typeSpeed={30}
                />
                <br />
                <Gitalk options={gitalkConfig} />
            </Layout>
        </>
    )

}

export default Forum