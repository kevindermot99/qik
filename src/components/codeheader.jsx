import '../styles/codeheader.css';

const CodeHeader = ({languages}) => {
  
  return (
    <div className="codeHeaderHolder">
      {languages.forEach((lang) => {
        <button type="button">{lang}</button>
      })}
    </div>
  )
}

export default CodeHeader