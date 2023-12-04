const codeStorage = {
  "homeExample": {
    "languages": "['html', 'css']",
    "code": {
      "html": `<div class=\"loader\"/></div>`,
      "css": 
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
  0%{
    transform: rotate(0deg);
  }
          
  100%{
    transform: rotate(360deg);
  }
}`
    }
  }
}

export default codeStorage