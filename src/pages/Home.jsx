
import { TbCopy } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

function Home() {
  const usage = useRef(null)

  const executeScroll = () => usage.current.scrollIntoView()
  return (
    <div>

      <div className="hero">
        <h1><span>Q</span>uick <span>i</span>nspiration <span>K</span>it</h1>
        <p>Hi there, welcome to QiK, your free toolbox for quick web development. Find ready-to-use loaders, buttons, and more. Innovate easily with speed and creativity—all in one kit!</p>
        <div className="sroll-down" onClick={executeScroll}>
          <i class="bi bi-arrow-bar-down"></i>
        </div>
      </div>

      <div ref={usage} className="usage">
        <span>
          <div>
            <h1>1: Explore Collections</h1>
            <p>Discover a variety of elements by browsing through our collections.</p>
          </div>
          <div className="example-loader">
            <div class="loader-1"></div>
            <div class="loader-2"></div>
            <div class="loader-3"></div>
            <div class="loader-4"></div>
          </div>
        </span>
        <span>
          <div>
            <h1>2: Choose and Reveal</h1>
            <p>Pick your desired item, click on the source, and unveil the code.</p>
          </div>
          <div className="exmple-source-btn">
            <button><FaCode className="react-icon" />Source</button>
          </div>
        </span>
        <span>
          <div>
            <h1>3: Integrate Easily</h1>
            <p>Copy the code provided—seamless integration into your project begins!</p>
          </div>
          <div className="exmple-source-btn">
            <button><TbCopy className="react-icon" />Copy</button>
          </div>
        </span>
      </div>

      <div className="grid-container">
        <h1><i className="bi bi-hash"></i>Breadcrumbs</h1>
        <div className="gc-grids">

          <span>
            <div className="db-container">
              <a>Home</a>
              <div className="separator"></div>
              <a>Shop</a>
              <div className="separator"></div>
              <a>You are here</a>
            </div>
          </span>

          <span>
            <div className="db-container bc2">
              <a><i class="bi bi-house-door"></i> Home</a>
              <div className="separator"></div>
              <a><i class="bi bi-shop"></i> Shop</a>
              <div className="separator"></div>
              <a><i class="bi bi-file-earmark"></i> You are here</a>
            </div>
          </span>

         
          
        </div>
      </div>  

    </div>
  )
}

export default Home