import React from 'react'
//import Header from '../header/Header'
import TopBar from '../topbar/Topbar'
import "./aboutus.css"

export default function Aboutus() {
  return (
      <>
      <TopBar />
      
      <br></br>
      <br></br>
      <div className='page'>
        <div className='aboutus'>
            <h1>ABOUT US</h1>
            <hr></hr>
            <br></br>
            <p>Like all good things, the idea of HELPING HANDS was born out of necessity. When you need help with small but important household chores, 
                isn't it practically impossible to find trusted providers, who deliver consistently impeccable service, on time? 
                Yes, that happened with us too. All the time. After trying dozens of other services which were just glorified directories, 
                we decided to build HELPING HANDS. HELPING HANDS is the most convenient and hassle free way to get your household work done. 
                With handcrafted mobile solutions, unmatched service quality, and background verified providers who are always willing to lend a hand, 
                we aim to aid in solving all your household problems with efficiency, ease and most importantly, a personal touch.</p>
                <br></br><h3>As our name suggests, we are here to help.
                We are here to build the best on-demand services company in the world.</h3> 
                <br></br><h2>And now, we simply can't wait to be of help to you.</h2>
        </div>
      </div>
    </>
  )
}
