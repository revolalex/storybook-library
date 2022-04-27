import "./NeonButton.css";

type NeonButtonProps = {
  class: string;
  text: string;
  link: string;
  style: React.CSSProperties;
};

const NeonButton = (props: NeonButtonProps) => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <a
      style={props.style}
      className={props.class === undefined ? "myA" : props.class}
      href={props.link === undefined ? "/#" : props.link}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text || "Sign-in"}
    </a>
  );
};

export default NeonButton;
