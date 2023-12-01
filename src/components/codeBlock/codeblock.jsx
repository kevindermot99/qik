import CodeHeader from "./codeheader";
import CodeBody from "./codebody";

function CodeBlock(languages) {
  return (
    <div className="codeBlock">
      <CodeHeader languages={languages}/>
      <CodeBody />
    </div>
  );
}

export default CodeBlock;