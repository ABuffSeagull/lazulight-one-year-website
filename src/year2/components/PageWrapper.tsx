import React, { useState } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import pw from './PageWrapper.module.scss'
import backgrounds  from "../assets/background/Space-Pomu.png"

export function PageWrapper ({
  children,
  pageTheme
}: {
  children: React.ReactNode
  pageTheme: string
}): JSX.Element {
  const [background, setBackground] = useState("page-bg-image");
  var opt = 1;
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
      
      setBackground("page-bg-imagebg")
      
    } else{
      setBackground("page-bg-image")
    }
  })
  
  

  
  return (
    <div className={`  ${pw[`page-container}`]} `} >
    

        <SiteHeader />
        <img src = {backgrounds} className={ `  ${pw[background]} `}/> 
        <div className ={ `  ${pw[`page-box`]} ` }> </div> 
        {/* This is the body of the page */}
        <div>
          {children}
        </div>

        <SiteFooter theme='lazulight' />
        </div>
    
  )
}

