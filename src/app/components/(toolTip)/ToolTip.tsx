import "./ToolTip.css"

interface ToolTipProps {
  children: string;
}

function ToolTip({ children }: ToolTipProps) {
  return (
    <div className='toolTip'>
      {children}
    </div>
  );
}

export default ToolTip;
