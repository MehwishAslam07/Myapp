import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonWrap from './ButtonWrap'
import SocialMediaIcons from './SocialMediaIcons'

function App() {
  return (
    <div className="App">

      <div className="App-left">
        <h1>I'm Mehwish Aslam. </h1>



        <p>I earned a Bachelor's degree in Computer Science from Iqra University.</p>
        <p>I previously worked as a <b>CMS developer</b> at an IT firm, with  
        <b> 2.5 years</b> of experience. I am an expert in WordPress, 
          Shopify, Wix, Squarespace, Webflow, and Duda CMS, specializing in theme development and
           SEO optimization, PSD to html.</p>

   
        <p>  I am now looking to switch my field from CMS to MERN 
          stack development and aspire to become a 
          full-stack developer. </p>
<ButtonWrap/>
<SocialMediaIcons /> 


<img src="./src/assets/girl.jpeg" alt="React Image" />



      </div>
      
    </div>
  );
}
export default App

//there are 3 ways to get style on html elements

// 1) inline css
// 2) module css
// 3) external css


