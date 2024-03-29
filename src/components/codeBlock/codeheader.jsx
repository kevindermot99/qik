import { useContext } from 'react';
import codeContext from '../../contexts/codecontext';
import propTypes from 'prop-types'
import '../../styles/codeblock.css';

const CodeHeader = ({languages}) => {
  const { codeSettings, setCodeSettings } = useContext(codeContext)

  return (
    <div className="codeHeader">
      {languages.map((lang, index) => (
        <button 
          type="button"
          key={index}
          onClick={() => {
            setCodeSettings({
              langName: lang,
              langIndex: index
            })}}
          className={codeSettings.langName === lang ? 'activeCodeHeader' : ''}
        >{lang}</button>
      ))}
    </div>
  )
}

CodeHeader.propTypes = {
  languages: propTypes.array.isRequired
}

export default CodeHeader