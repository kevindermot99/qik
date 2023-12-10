
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
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import uiDesignPng from "../images/Ui-Design.png"

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
   const loaders = useRef(null);
   const usage = useRef(null);

   // const executeScroll = () => usage.current.scrollIntoView()


   const [exampleHtml, setexampleHtml] = useState(false);
   const [exampleCss, setexampleCss] = useState(false);



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
               <div className="scroll-down" onClick={() => loaders.current?.scrollIntoView({ behavior: "smooth" })}>
                  Get Start For Free <FaArrowDownLong />
               </div>
            </Reveal>
         </div>

         <div className="showroom">
            <div className="section-header">
               <h1>kick-start</h1>
               <div className="showroom-grid">
                  <div>
                     <span><BsStars /> pre-made Ui Elements</span>
                     <h1>UI Elegance in a Snap</h1>
                     <p>Make your project look great with ready-made elements for a professional design that's quick and efficient.</p>
                     <img src={uiDesignPng} alt="" />
                  </div>
                  <div>
                     <span>Play Perfect: Media Players</span>
                     <h1>Custom Players</h1>
                     <p>Elevate user experience with our media players. Seamlessly integrate intuitive playback features for engaging and entertaining content.</p>
                  </div>
                  <div>
                     <span>Website Templates</span>
                     <h1>Web Wonders: Easy Design Kickstart</h1>
                     <p>Launch your online presence with customizable website templates. From sleek portfolios to powerful business sites, create with style and ease.</p>
                  </div>
                  <div>
                     <span>Color Palettes</span>
                     <h1>Palette Perfection: Inspiring Hues</h1>
                     <p> Infuse life into projects with our curated color palettes. Discover vibrant energy or soothing harmony to express your creativity</p>
                  </div>
               </div>
            </div>
         </div>

         <div ref={loaders} className="loaders-example">
            <div className="section-header">
               <div className="sh-title"><div className="identifier" onClick={() => loaders.current?.scrollIntoView({ behavior: "smooth" })}><FaLink /></div>Loaders</div>
               <h1>Improve Project UX with Loaders</h1>
               <p>empower you projects user experience with loading animations for smooth performance!</p>
               <Link to="/" className="sh-link">See more <FaArrowRightLong /></Link>
            </div>
            <Fade triggerOnce direction="up" duration={1200}>
               <div className="grid-1">
                  <div className="grid-1-element">
                     <svg class="container1" viewBox="0 0 40 40" height="40" width="40">
                        <circle class="bg1" cx="20" cy="20" r="17.5" pathlength="100" stroke-width="5px" fill="none" />
                        <circle class="snake1" cx="20" cy="20" r="17.5" pathlength="100" stroke-width="5px" fill="none" />
                     </svg>
                  </div>
                  <div className="grid-1-element">
                     <svg class="container2" viewBox="0 0 40 40" height="40" width="40">
                        <circle class="bg2" cx="20" cy="20" r="17.5" pathlength="100" stroke-width="5px" fill="none" />
                        <circle class="snake2" cx="20" cy="20" r="17.5" pathlength="100" stroke-width="5px" fill="none" />
                     </svg>
                  </div>
                  <div className="grid-1-element">
                     <svg class="container3" x="0px" y="0px" viewBox="0 0 37 37" height="37" width="37" preserveAspectRatio="xMidYMid meet">
                        <path class="bg3" fill="none" stroke-width="5" pathLength="100" d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5">
                        </path>
                        <path class="snake3" fill="none" stroke-width="5" pathLength="100" d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5">
                        </path>
                     </svg>
                  </div>
                  <div className="grid-1-element">
                     <div className="container4"></div>
                  </div>
                  <div className="grid-1-element">
                     <span class="container5"></span>
                  </div>
                  <div className="grid-1-element">
                     <span class="container6"></span>
                  </div>
                  <div className="grid-1-element">
                     <div class="container7"></div>
                  </div>
                  <div className="grid-1-element">
                     <div className="container8"></div>
                  </div>
                  <div className="grid-1-element">
                     <span class="container9"></span>
                  </div>
                  <div className="grid-1-element">
                     <div className="container10"></div>
                  </div>
               </div>
            </Fade>
         </div>


         {/* <div className="grid-container example-container">
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
         </div> */}

      </div>
   )
}

export default Home