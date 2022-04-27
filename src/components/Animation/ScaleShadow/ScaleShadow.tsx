import "./ScaleShadow.css";
import React from "react";

interface ScaleShadowProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const ScaleShadow = (props: ScaleShadowProps) => {
  const { children, style } = props;
  return (
    <div style={style} className="square">
      {children}
    </div>
  );
};
export default ScaleShadow;
