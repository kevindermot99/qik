import propTypes from 'prop-types'
import '../styles/codeheader.css';

const CodeHeader = ({languages}) => {
  return (
    <div className="codeHeader">
      {languages.map((lang, index) => (
        <button type="button" key={index}>{lang}</button>
      ))}
    </div>
  )
}

CodeHeader.propTypes = {
  languages: propTypes.array.isRequired
}

export default CodeHeader