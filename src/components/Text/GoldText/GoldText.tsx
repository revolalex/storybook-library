import "./GoldText.css";

type GoldTextProps = {
  text: string;
  style?: React.CSSProperties;
};

const GoldText = (props: GoldTextProps) => {
  const text = props.text || "Gold";
  const style = props.style || {};
  return (
    <div className="gold-text-wrapper">
      <div style={style} className="gold-text-bg"> {text} </div>
      <div className="gold-text-fg"> {text} </div>
    </div>
  );
};

export default GoldText;