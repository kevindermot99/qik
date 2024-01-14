
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


// icons
import { FaLink } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";
import { TbPlayerSkipForward } from "react-icons/tb";
import { CgTemplate } from "react-icons/cg";
import { IoColorFillOutline } from "react-icons/io5";
import { MdFormatShapes } from "react-icons/md";
import { BsViewList } from "react-icons/bs";
import { FaRegRectangleList } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import { PiSquareHalfBottomFill } from "react-icons/pi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { LuCheckCircle2 } from "react-icons/lu";
import { TbInnerShadowRight } from "react-icons/tb";
import { LiaTableSolid } from "react-icons/lia";
import { TbRowInsertTop } from "react-icons/tb";



import kevin from "../images/kevin.jpg"
import chris from "../images/chris.jpeg"
import nick from "../images/nick.jpeg"

import { ReactComponent as Discord } from "../images/icons8-discord.svg"
import { ReactComponent as Todoist } from "../images/icons8-todoist.svg"
import { ReactComponent as Github } from "../images/icons8-github.svg"
import { ReactComponent as Spotify } from "../images/icons8-spotify.svg"
import { ReactComponent as Youtube } from "../images/icons8-youtube.svg"
import OpenAi from "../images/icons8-chatgpt.svg"
import videoPromo from "../images/videoPromo.mp4"
import { IoIosWarning } from "react-icons/io";
import CountUp from 'react-countup';
import ReactPlayer from 'react-player'



const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -10px, 0) scale(1.1);
    filter: blur(10px);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    filter: blur(0px);
  }
`;

const customAnimation2 = keyframes` 
  from {
   opacity: 0;
   transform: scale(0.6);
  }

  to {
   opacity: 1;
   transform: scale(1);
  }
`;

function Home() {
   const loaders = useRef(null);
   const buttons = useRef(null);
   const shadows = useRef(null);
   const templates = useRef(null);
   const colors = useRef(null);

   const YourComponent = () => {
      useEffect(() => {
         document.getElementById('player').play();
      }, [])
   }


   return (
      <div className="home-container">

         <div className="hero">
            <Fade duration={10}><div className="hero-bubble"></div></Fade>
            <Reveal keyframes={customAnimation} triggerOnce duration={500} delay={0} >
               <h1><CountUp end={101} duration={9}></CountUp>+ Web UI Elements<br /> for developers</h1>
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={700} delay={100}>
               <p>It's time to discover professionally designed web UI elements—buttons, loaders, templates, and more—with striking color palettes, all for free.</p>
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={900} delay={200}>
               <div className="scroll-down" onClick={() => loaders.current?.scrollIntoView({ behavior: "smooth" })}>
                  Take a qik look
               </div>
            </Reveal>
            <Reveal keyframes={customAnimation} triggerOnce duration={500} delay={0} >
               <p className="times">
                  Qik has been visited <CountUp end={173099}></CountUp> times.
               </p>
            </Reveal>

         </div>

         <div className="companies">
            <h1>pro Look</h1>
            <p>Craft a pro-level web UI with QiK,
               effortlessly bringing together some elements from popular platforms such as:
            </p>
            <span className="companye-logos">
               <a href="https://open.spotify.com/" target="_blank"><Spotify className="cl-svg" /></a>
               <a href="https://todoist.com/" target="_blank"><Todoist className="cl-svg" /></a>
               <a href="https://github.com/" target="_blank"><Github className="cl-svg" /></a>
               <a href="https://discord.com/" target="_blank"><Discord className="cl-svg" /></a>
               <a href="https://youtube.com/" target="_blank"><Youtube className="cl-svg" /></a>
            </span>
         </div>

         <div className="showroom">
            <div className="bubbles">
               <span className="bubble1"></span>
               <span className="bubble2"></span>
            </div>
            <div className="section-header">
               {/* <h1>Provided For you !</h1> */}
               <div className="showroom-grid">
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><LuLoader /> Loaders</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><TbPlayerSkipForward />Media Players</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><CgTemplate /> Portfolios </span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><IoColorFillOutline /> Color Palettes</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><MdFormatShapes /> Forms</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><BsViewList /> Accordions</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><FaRegRectangleList /> Cards</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><IoMdCheckboxOutline /> Checkboxes</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><PiSquareHalfBottomFill /> Footers</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><BsFillMenuButtonWideFill /> Menus</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><LuCheckCircle2 /> Radio Buttons</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><TbInnerShadowRight /> Shadows</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><LiaTableSolid /> Tables</span>
                     </div>
                  </Fade>
                  <Fade delay={100} >
                     <div className="sg-card">
                        <span><TbRowInsertTop /> Tooltips</span>
                     </div>
                  </Fade>

               </div>
            </div>
         </div>

         {/* Quote kevin */}
         <Fade delay={100} >
            <div className="review">
               <p>“ Proudly one of the best Projects so far, QiK makes it quik. ”</p>
               <div className="by">
                  <img src={kevin} height="50" width="50" />
                  <span>
                     <h1>Kevin Dermot</h1>
                     <p>Creator</p>
                  </span>
               </div>
            </div>
         </Fade>

         <div ref={loaders} className="elements-example">
            <div className="section-header">
               <div className="sh-title"><p><span className="identifier" onClick={() => loaders.current?.scrollIntoView({ behavior: "smooth" })}><FaLink /></span>Loaders</p></div>
               <h1>Improve Project UX with Loaders</h1>
               <p>empower you projects user experience with loading animations for smooth performance!</p>
               <Link to="/" className="sh-link">See more <FaArrowRightLong /></Link>
            </div>
            <Fade duration={700}>
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

         {/* Quote chris */}
         <Fade delay={100} >
            <div className="review">
               <p>“ Qik: Where creativity meets efficiency. Empowering creators to bring ideas to life effortlessly, one pixel at a time. ”</p>
               <div className="by">
                  <img src={chris} height="50" width="50" />
                  <span>
                     <h1>Gisa Chris</h1>
                     <p>Creator</p>
                  </span>
               </div>
            </div>
         </Fade>

         <div ref={buttons} className="elements-example">
            <div className="section-header">
               <div className="sh-title"><p><span className="identifier" onClick={() => buttons.current?.scrollIntoView({ behavior: "smooth" })}><FaLink /></span>Buttons</p></div>
               <h1>Elevate UX with Dynamic Buttons</h1>
               <p>Boost your project's user experience using animated buttons for a seamless and engaging interface!</p>
               <Link to="/" className="sh-link">See more <FaArrowRightLong /></Link>
            </div>
            <Fade duration={700}>
               <div className="grid-2">
                  <div className="grid-2-element b1">
                     <button>Hover Me</button>
                  </div>
                  <div className="grid-2-element b2">
                     <button>Hover Me</button>
                  </div>
                  <div className="grid-2-element b3">
                     <button>Hover Me</button>
                  </div>
                  <div className="grid-2-element b4">
                     <button>Hover Me</button>
                  </div>
                  <div className="grid-2-element b5">
                     <button>Hover Me</button>
                  </div>
                  <div className="grid-2-element b6">
                     <button>Hover Me</button>
                  </div>
                  <div className="grid-2-element b7">
                     <button>Hover Me</button>
                  </div>
                  <div className="grid-2-element b8">
                     <button>Hover Me</button>
                  </div>
                  <div className="grid-2-element b9">
                     <button>Hover Me</button>
                  </div>
                  <div className="grid-2-element b10">
                     <button>Hover Me</button>
                  </div>
               </div>
            </Fade>
         </div>

         {/* <div ref={shadows} className="elements-example shadows">

            <div className="section-header">
               <div className="sh-title"><p><span className="identifier" onClick={() => shadows.current?.scrollIntoView({ behavior: "smooth" })}><FaLink /></span>Shadows</p></div>
               <h1>Enhance UX with Dynamic Shadows</h1>
               <p>Elevate your project's experience with engaging dynamic shadows for a seamless interface!</p>
               <Link to="/" className="sh-link">See more <FaArrowRightLong /></Link>
            </div>

            <div className="grid-2">
               <div className="only-in-light">
                  <IoIosWarning /> visible in light mode only
               </div>
               <div className="grid-2-element ch1">
                  #1
               </div>
               <div className="grid-2-element ch2">
                  #2
               </div>
               <div className="grid-2-element ch3">
                  #3
               </div>
               <div className="grid-2-element ch4">
                  #04
               </div>
               <div className="grid-2-element ch5">
                  #05
               </div>
               <div className="grid-2-element ch6">
                  #6
               </div>
               <div className="grid-2-element ch7">
                  #7
               </div>
               <div className="grid-2-element ch8">
                  #8
               </div>
               <div className="grid-2-element ch9">
                  #9
               </div>
               <div className="grid-2-element ch10">
                  #10
               </div>
            </div>
         </div> */}


         <div ref={templates} className="elements-example templates">
            <div className="section-header">
               <div className="sh-title"><p><span className="identifier" onClick={() => shadows.current?.scrollIntoView({ behavior: "smooth" })}><FaLink /></span>Templates</p></div>
               <h1>Free Templates</h1>
               <p>Get creative with our free website templates! Make great looking websites without spending money</p>
               <Link to="/" className="sh-link">Explore Templates <FaArrowRightLong /></Link>
            </div>


            <div className="grid-3">
               <div className="grid-3-element">
                  <span>
                     <Reveal keyframes={customAnimation2} duration={700}>
                        <video src={videoPromo} muted autoPlay loop id="player"></video>
                     </Reveal>
                  </span>
               </div>
            </div>



         </div>

         {/* Quote nickson */}
         <Fade delay={100} >
            <div className="review">
               <p>“ Ideas come to life with a click. Simple and innovative, created just for you! ”</p>
               <div className="by">
                  <img src={nick} height="50" width="50" />
                  <span>
                     <h1>Hirwa Nickson</h1>
                     <p>Creator</p>
                  </span>
               </div>
            </div>
         </Fade>

         <div ref={colors} className="elements-example colors">
            <div className="grid-4-element">
               <div className="g4e-left">
                  <Fade delay={100} direction="down"><h1><CountUp end={35} duration={5}></CountUp>+</h1></Fade>
                  <h2><Fade delay={200} direction="up">Handpicked Color Palettes</Fade><span><Fade delay={300} direction="up">for your designs, Transform your projects with vibrant hues and creative combinations</Fade></span></h2>
                  <Fade delay={100} direction="up"><Link className="explorebtn" to="/">Explore Colors</Link></Fade>
               </div>
               <div className="g4e-right">

                  <Fade direction="right">
                     <p>Monalisa Light Palette</p>
                     <div className="g4e-palette1">
                        <span className="px1"></span>
                        <span className="px2"></span>
                        <span className="px3"></span>
                        <span className="px4"></span>
                        <span className="px5"></span>
                     </div>
                  </Fade>

                  <Fade direction="right">
                     <p>Monalisa Dark Palett</p>
                     <div className="g4e-palette2">
                        <span className="px1"></span>
                        <span className="px2"></span>
                        <span className="px3"></span>
                        <span className="px4"></span>
                        <span className="px5"></span>
                     </div>
                  </Fade>

               </div>
            </div>
         </div>

      </div >
   )
}

export default Home