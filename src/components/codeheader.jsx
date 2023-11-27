import { useContext } from 'react';
import codeContext from '../contexts/codecontext';
import propTypes from 'prop-types'
import '../styles/codeheader.css';

const CodeHeader = ({languages}) => {
  const { codeSettings, setCodeSettings } = useContext(codeContext)
  console.log(codeSettings)

  return (
    <div className="codeHeader">
      {languages.map((lang, index) => (
        <button 
          type="button"
          key={index}
          onClick={() => {
            setCodeSettings({
              defaultLangName: lang,
              defaultLangIndex: index             
            })}}
        >{lang}</button>
      ))}
    </div>
  )
}

CodeHeader.propTypes = {
  languages: propTypes.array.isRequired
}

export default CodeHeader