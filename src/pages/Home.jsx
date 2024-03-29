import { TbCopy } from "react-icons/tb";
// import { FaCode } from "react-icons/fa6";
import { useRef } from "react";
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { LuMousePointerClick } from "react-icons/lu";
import CodeBlock from "../components/codeBlock/codeblock";
import '../styles/codeblock.css'

function Home() {
   const usage = useRef(null)

   const executeScroll = () => usage.current.scrollIntoView()

   return (
      <div className="home-container">

         <div className="hero">
            <h1><span>Q</span>uick <span>i</span>nspiration <span>K</span>it</h1>
            <p>Hi there, welcome to QiK, your free toolbox for quick web development. Find ready-to-use loaders, buttons, and more. Innovate easily with speed and creativity—all in one kit!</p>
            <div className="sroll-down" onClick={executeScroll}>
               <i class="bi bi-arrow-bar-down"></i>
            </div>
         </div>

         <div ref={usage} className="usage">
            
            <div className="usagetitle">
               <h2><i className="bi bi-hash"></i>Usage</h2>
            </div>
            <div className="steps">
               <span>
                  <div>
                     <h1>1: Explore Collections</h1>
                     <p>Discover a variety of elements by browsing through our collections.</p>
                  </div>
                  <div className="example-loader">
                     <div className="loader-1"></div>
                     <div className="loader-2"></div>
                     <div className="loader-3"></div>
                     <div></div>
                  </div>
               </span>
               <span>
                  <div>
                     <h1>2: Choose and Reveal</h1>
                     <p>Pick your desired item, click on the source, and unveil the code.</p>
                  </div>
                  <div className="exmple-source-btn">
                     <button><LuMousePointerClick className="react-icon" />Click to Reveal</button>
                  </div>
               </span>
               <span>
                  <div>
                     <h1>3: Integrate Easily</h1>
                     <p>Copy the code provided and paste into your project.</p>
                  </div>
                  <div className="exmple-source-btn">
                     <button><TbCopy className="react-icon" />Copy</button>
                  </div>
               </span>
            </div>

         </div>

         <div className="code-container example-container">
            <h1>Example</h1>
            <div className="example">
               <div className="e1">
                  <div class="loader-1"></div>
               </div>

               <div className="codeSection">
                  <CodeBlock languages={['html', 'css', 'javascript']}/>
               </div>
            </div>
         </div>

         {/* <div className="grid-container">
            <h1><i className="bi bi-hash"></i>Breadcrumbs</h1>
            <div className="gc-grids">

               <span>
                  <div className="db-container">
                     <p>Home</p>
                     <div className="separator"></div>
                     <p>Shop</p>
                     <div className="separator"></div>
                     <p>You are here</p>
                  </div>
               </span>

               <span>
                  <div className="db-container bc2">
                     <p><i class="bi bi-house-door"></i> Home</p>
                     <div className="separator"></div>
                     <p><i class="bi bi-shop"></i> Shop</p>
                     <div className="separator"></div>
                     <p><i class="bi bi-file-earmark"></i> You are here</p>
                  </div>
               </span>



            </div>
         </div> */}

         {/* <SyntaxHighlighter
               language="javascript"
               style={monokaiSublime}
               customStyle={{
                  fontFamily: "consolas",
                  padding: "30px"
               }}
            >
               {codeString}
            </SyntaxHighlighter> */}

      </div>
   )
}

export default Home