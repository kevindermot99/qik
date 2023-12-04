import { useState, useContext } from "react"
import codeContext from "../../contexts/codecontext"
import codeStorage from "../../data/codeStorage"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { TbCopy } from "react-icons/tb";
import { IoCheckmark } from "react-icons/io5";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";
import '../../styles/codeblock.css'

const CodeBody = () => {
  const { codeSettings } = useContext(codeContext);
  const { langName, langIndex } = codeSettings;
  const [copied, setCopied] = useState(false);
  console.log(codeStorage)
  const currentCode = codeStorage.homeExample.code[langName];

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
      <div className="">
         <div className="">
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
                  className=""
               >
                  {currentCode}
               </SyntaxHighlighter>

               <button className="codeCopy" onClick={() => {copyCode(currentCode)}}>
                  {copied ? <IoCheckmark className="copy-icon" /> : <TbCopy className="copy-icon" />}
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}

export default CodeBody;