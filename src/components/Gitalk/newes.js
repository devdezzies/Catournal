import React from 'react'
import Plyr from "react-plyr";
import { Helmet } from "react-helmet";
import Button from '../_ui/Button';
import styled from "@emotion/styled";
import { Link } from 'gatsby';
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const WorkLink = styled(Link)`
    margin-top: 3em;
    display: block;
    text-align: center;
    margin-bottom: 3em;
`

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
                <link rel="stylesheet" href="https://cdn.plyr.io/2.0.18/plyr.css" />
            </Helmet>
            <Plyr
                type="video"
                poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                url="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
            />
            <WorkLink to={"/blog"}>
                <Button className="Button--secondary">
                    Hi! Do you interesting about this? watch more {'\u2728'}
                </Button>
            </WorkLink>
        </div>
    )
}

export default Newes

