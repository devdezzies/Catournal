import React from 'react';
import Plyr from "react-plyr";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Applikasi = () => (
  <div style={styles}>
    <Plyr
      type="video"
      url="https://assets.mixkit.co/videos/preview/mixkit-waves-crash-on-a-shore-with-boulders-1088-large.mp4"
    />
    <h2>Start editing to see some magic happens {"\u2728"}</h2>
  </div>
);

export default Applikasi