import { useState, useContext } from "react"
import codeContext from "../contexts/codecontext"
import codeBase from "../data/code.json"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { TbCopy } from "react-icons/tb";
import { IoCheckmark } from "react-icons/io5";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";
import '../index.css'
import '../styles/codeheader.css'

const CodeBody = () => {
  const { codeSettings } = useContext(codeContext);
  const { langName, langIndex } = codeSettings;
  const [copied, setCopied] = useState(false);
  const currentCode = codeBase.homeExample.code[langName];
//   const currentCodeIdentifier = Object.keys(codeSamples).filter((code) => code === langName)

  const copyCode = async (code) => {
     try {
        await navigator.clipboard.writeText(code);
        setCopied(true)
        setTimeout(() => {
           setCopied(false)
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
    <div className="codeBody">
      <div className="example">
         <div className="e2">
            <div>
               <SyntaxHighlighter
                  language={langName}
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
                  {currentCode}
               </SyntaxHighlighter>

               <button className="copy-button" onClick={() => {copyCode(currentCode)}}>
                  {copied ? <IoCheckmark className="copy-icon" /> : <TbCopy className="copy-icon" />}
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}

export default CodeBody;