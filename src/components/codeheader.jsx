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

export default CodeHeader