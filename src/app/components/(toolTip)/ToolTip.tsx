import "./ToolTip.css"

interface toolTipInterface {
  children: string
}

function ToolTip({children}: toolTipInterface) {
  return (
    <div className='toolTip'>
      {children}
    </div>
  );
}

export default ToolTip;
