import CalculateNumber from './calculated-number'

function Featured({ children }) {
  return (
    <>
      <CalculateNumber />
      <div className="featured">{children}</div>
    </>
  )
}

export default Featured
