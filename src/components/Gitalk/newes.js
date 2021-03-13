import React from 'react'
import Plyr from "react-plyr";
import { Helmet } from "react-helmet";
import Button from '../_ui/Button';
import styled from "@emotion/styled";
import { Link } from 'gatsby';
import "./Plyr.css";
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

const Newes = (props) => {

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
                
            </Helmet>
            <Plyr
                type={props.type}
                poster={props.poster}
                showPosterOnEnd="true"
                url={props.url}
                videoId={props.id}
            />
            <WorkLink to={"/blog"}>
                <Button className="Button--secondary">
                    {props.button}
                </Button>
            </WorkLink>
        </div>
    )
}

Newes.defaultProps = {
    type: "video",
    poster: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
    button: "Hi Are You Interested In This? watch more \u2728"
}


export default Newes

