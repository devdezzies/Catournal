import React from 'react'
import Plyr from "react-plyr";
import {Helmet} from "react-helmet";
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const Newes = () => {

    const [
        hasmounted, 
        setHasMounted
    ] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasmounted) {
        return null;
    }

    return (
        <div style={styles}>
        <Helmet>
            <link rel="stylesheet" href="https://cdn.plyr.io/2.0.18/plyr.css"/>
        </Helmet>
            <Plyr
                type="video"
                url="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.webm"
            />
            <h2>Start editing to see some magic happens {"\u2728"}</h2>
        </div>
    )
}

export default Newes

