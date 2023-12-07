
import { TbCopy } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { LuMousePointerClick } from "react-icons/lu";
import { IoCheckmark } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 70px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function Home() {
   const usage = useRef(null)

   // const executeScroll = () => usage.current.scrollIntoView()
   const executeScroll = () => {
      const topElement = document.getElementById('grid-1'); // Replace 'top' with the ID of the element you want to scroll to
      setTimeout(() => {
         if (topElement) {
            topElement.scrollIntoView({
               duration: 5000, // specify the duration of the scroll animation in milliseconds
               smooth: 'easeInOutQuart', // specify the easing function
            });
         } 
      }, 50);
      
   };

   const [exampleHtml, setexampleHtml] = useState(false);
   const [exampleCss, setexampleCss] = useState(false);


   const exampleLoaderHtml = `<div class="loader"></div>`;
   const exampleLoaderCss =
      `.loader {
   width: 35px;
   height: 35px;
   border: 3px solid #64b6e5;
   border-bottom-color: #c7c7c7;
   border-left-color: #c7c7c7;
   border-radius: 50%;
   display: inline-block;
   box-sizing: border-box;
   animation: rotation 1s linear infinite;
}


@keyframes rotation {
   0% {
       transform: rotate(0deg);
   }

   100% {
       transform: rotate(360deg);
   }
}
`;

   const copyExampleHtml = async () => {

      try {
         await navigator.clipboard.writeText(exampleLoaderHtml);
         setexampleHtml(true)
         setTimeout(() => {
            setexampleHtml(false)
         }, 1500);
      } catch (err) {
         console.error(
            "Unable to copy to clipboard.",
            err
         );
         alert("Copy to clipboard failed.");
      }
   }

   const copyExampleCss = async () => {
      try {
         await navigator.clipboard.writeText(exampleLoaderCss);
         setexampleCss(true)
         setTimeout(() => {
            setexampleCss(false)
         }, 1500);
      } catch (err) {
         console.error(
            "Unable to copy to clipboard.",
            err
         );
         alert("Copy to clipboard failed.");
      }
   }


   return (
      <div className="home-container">

         <div className="hero">
            <Reveal keyframes={customAnimation} triggerOnce duration={1200} delay={0} >
               <h1>Designing Tomorrow, Today.</h1>
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={1200} delay={100}>
               <p>Your Free Web UI Inspiration, Unleash Creativity Without Limits.</p>
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={1200} delay={200}>
               <div className="scroll-down" onClick={executeScroll}>
                  Get Start For Free <FaArrowDownLong />
               </div>
            </Reveal>
         </div>

         <div ref={usage} className="grid-1" id="grid-1">


         </div>

         <div className="grid-container example-container">
            <h1>Example</h1>
            <div className="example">
               <div className="e1">
                  <div class="loader-1"></div>
               </div>
               <div className="e2">
                  <div>
                     <SyntaxHighlighter
                        language="html"
                        style={monokaiSublime}
                        customStyle={{
                           fontFamily: "consolas",
                           width: "100%",
                           fontSize: "14px",
                           backgroundColor: "transparent"
                        }}
                     >
                        {exampleLoaderHtml}
                     </SyntaxHighlighter>

                     <button className="copy-button" onClick={copyExampleHtml}>{exampleHtml ? <IoCheckmark className="copy-icon" /> : <TbCopy className="copy-icon" />}</button>
                  </div>
                  <div>
                     <SyntaxHighlighter
                        language="css"
                        style={monokaiSublime}
                        customStyle={{
                           fontFamily: "consolas",
                           width: "100%",
                           fontSize: "14px",
                           backgroundColor: "transparent",
                           maxHeight: "300px",
                           overflowY: "scroll",
                           paddingBottom: "100px"
                        }}
                        className="exampleLoaderCss"
                     >
                        {exampleLoaderCss}
                     </SyntaxHighlighter>

                     <button className="copy-button" onClick={copyExampleCss}>{exampleCss ? <IoCheckmark className="copy-icon" /> : <TbCopy className="copy-icon" />}</button>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Home