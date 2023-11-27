import { useContext } from "react";
import codeContext from "../contexts/codecontext";

const CodeBody = () => {
  const {codeSettings, setCodeSettings } = useContext(codeContext)
  return (
    <div>code body</div>
  );
}

export default CodeBody;