
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
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { CgTemplate } from "react-icons/cg";
import { MdOutlineInvertColors } from "react-icons/md";
import kevin from "../images/kevin.jpg"
import chris from "../images/chris.jpeg"
import nick from "../images/nick.jpeg"

import netflix from "../images/netflix.png"
import discord from "../images/discord.png"
import todoist from "../images/todoist.png"
import github from "../images/github.png"
import spotify from "../images/spotify.png"
import openAi from "../images/openAi.png"
import { IoIosWarning } from "react-icons/io";



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
   const buttons = useRef(null);
   const shadows = useRef(null);
   const templates = useRef(null);

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

         <div className="companies">
            <h1>professional Look</h1>
            <p>Craft a pro-level web UI with QiK,
               effortlessly bringing together some elements from popular platforms such as:
            </p>
            <span className="companye-logos">
               <img src={netflix} alt="Netflix" title="Netflix" />
               <img src={spotify} alt="Spotify" title="Spotify" />
               <img src={discord} alt="Discord" title="Discord" />
               <img src={todoist} alt="Todoist" title="Todoist" />
               <img src={github} className="github" alt="Github" title="Github" />
               <img src={openAi} alt="OpenAi" title="OpenAi" />
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
                  <div className="sg-card c1">
                     <span><BsGrid1X2Fill /> pre-made Ui Elements</span>
                     <h1>UI Elegance in a Snap</h1>
                     <p>Make your project look great with ready-made elements for a professional design that's quick and efficient.</p>
                     <p className="links">
                        <h5 onClick={() => loaders.current?.scrollIntoView({ behavior: "smooth" })}><FaLink />Loaders</h5>
                        <h5 onClick={() => buttons.current?.scrollIntoView({ behavior: "smooth" })}><FaLink />Buttons</h5>
                        <h5 onClick={() => shadows.current?.scrollIntoView({ behavior: "smooth" })}><FaLink />Shadows</h5>
                        and more.
                     </p>
                  </div>
                  <div className="sg-card c2">
                     <span><FaPlayCircle /> Play Perfect: Media Players</span>
                     <h1>Custom Players</h1>
                     <p>Enhance user experience with our media players, fully customizable for engaging and entertaining content delivery.</p>
                     <p className="links">
                        <h5><FaLink />Media players</h5>
                     </p>
                  </div>
                  <div className="sg-card c3">
                     <span><CgTemplate /> Portfolio Templates</span>
                     <h1>Free Design Templates</h1>
                     <p>Make your online portfolio look great with easy-to-use templates. Whether you're showing off your work or presenting your business</p>
                     <p className="links">
                        <h5><FaLink />Web Templates</h5>
                     </p>
                  </div>
                  <div className="sg-card c4">
                     <span><MdOutlineInvertColors /> Color Palettes</span>
                     <h1>Palette Perfection: Inspiring Hues</h1>
                     <p> Infuse life into projects with our curated color palettes. Discover vibrant energy or soothing harmony to express your creativity</p>
                     <p className="links">
                        <h5><FaLink />Color Palettes</h5>
                     </p>
                  </div>

               </div>
            </div>
         </div>

         {/* Quote kevin */}
         <Fade delay={100} triggerOnce>
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
            <Fade triggerOnce duration={700}>
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
         <Fade delay={100} triggerOnce>
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
            <Fade triggerOnce duration={700}>
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

         {/* Quote nickson */}
         <Fade delay={100} triggerOnce>
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

         <div ref={shadows} className="elements-example shadows">

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
         </div>

         {/* <div className="elements-example help">
            <div className="section-header">
               <h1>Help & Suggestions</h1>
               <p>Reach out to us via email to seek assistance or share your suggestions with us. Email us today</p>
               <a href="#" className="sh-link">Send Email</a>
            </div>
            
         </div> */}

         <div ref={templates} className="elements-example templates">
            <div className="section-header">
               <div className="sh-title"><p><span className="identifier" onClick={() => shadows.current?.scrollIntoView({ behavior: "smooth" })}><FaLink /></span>Templates</p></div>
               <h1>Free Portfolio Templates</h1>
               <p>Get Creative with Our Free Portfolio Templates - Make Your Online Presence Shine!</p>
               <Link to="/" className="sh-link">See more <FaArrowRightLong /></Link>
            </div>
            <Fade triggerOnce duration={700}>
               <div className="grid-3">
                  <div className="grid-3-element">

                  </div>
                  <div className="grid-3-element">

                  </div>
                  <div className="grid-3-element">

                  </div>
                  <div className="grid-3-element">

                  </div>
                  <div className="grid-3-element">

                  </div>
                  <div className="grid-3-element">

                  </div>
                  <div className="grid-3-element">

                  </div>
                  <div className="grid-3-element">

                  </div>
                  <div className="grid-3-element">

                  </div>
                  <div className="grid-3-element">

                  </div>
               </div>
            </Fade>
         </div>

      </div>
   )
}

export default Home