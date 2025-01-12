import React from 'react';


export default function Footer() {
  const currentYear = new Date().getFullYear();
    return (
      <footer className="flex w-full h-[8vh] py-4 justify-center content-center bg-[#003554] text-[#00A6FB] ">
        
            
              <p className="text-[1rem]">Copyright © <span>{currentYear}</span> | Energy-Hub All Rights Reserved</p>
            
           
        
      </footer>
    )
  }
  
  