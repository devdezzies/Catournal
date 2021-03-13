import React from "react";
import SubscribeCard from "react-subscribe-card";
import colors from "styles/colors";

const mailchimpURL = `https://site.us1.list-manage.com/subscribe/post?u=109ed362d369c704e9f1aab04&amp;id=04d749b915`;

const outerCardStyle = `
      padding: 0;
      max-width: 100%;
      width: 550px;
      
    `;

const innerCardStyle = `
       background-color: ${colors.blue200};
       border-radius: 4px;
       padding: 20px;
       margin: 0;
      `;

const titleStyle = 
      `font-family: 'Montserrat', Arial, Helvetica, sans-serif;
      color: ${colors.blue600};
      font-size: 30px;
      font-weight: bold;
      margin: 0 0 10px 0;
      text-align: left;
      word-break: break-word;
    `;

const subContainerStyle = `
      box-shadow: 0 2px 5px -1px rgba(50,50,93,.25), 0 1px 3px -1px rgba(0,0,0,.3);
      align-items: center;
      
    `;
const subInputStyle = `
      border-width: 0;
      margin: 0;
      outline: none;
    `;
const subButtonStyle = `
      border-radius: 0;
      flex-grow: 1;
      background-color: ${colors.blue200};
      color: ${colors.blue600};
      outline: none;
    `;

const Newschimp = () => (
  <div>
    <SubscribeCard
      title="Subscribe Catournal &#9889;"
      description="Hello journals, are you interesting to follow this website and get a daily newsletter. If you want please susbcribe"
      innerCardStyle={innerCardStyle}
      titleStyle={titleStyle}
      mailchimpURL={mailchimpURL}
      outerCardStyle={outerCardStyle}
      subContainerStyle={subContainerStyle}
      subInputStyle={subInputStyle}
      subButtonStyle={subButtonStyle}
    />
  </div>
);

export default Newschimp