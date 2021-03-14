import React, {useEffect} from "react"
//import Script from "react-inline-script"

const Graphiccomments = () => {

  useEffect(() => {
    window.gc_params = {
      graphcomment_id: 'Catournal',
      fixed_header_height: 0,
   };

   (function() {
    var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
    gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
  })();
 }) 


  return (
      <div id="graphcomment"></div>
  )
}

export default Graphiccomments