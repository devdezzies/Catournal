import React from 'react'

const Podcast = () => {
    return(
        <div style={{
            marginTop: '35px',
            marginBottom: '35px'
        }} className="Podcast-styling">
           <iframe title="podcaster" src="https://open.spotify.com/embed-podcast/show/5xYoI9KL0vshVrQnjuiNu7" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
        </div>
    )
}

export default Podcast