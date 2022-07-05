import React from 'react';

import {
  Button
} from './styles';

interface CustomButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: 'submit';
  style?: React.CSSProperties;
  disabled?: boolean;
}

function CustomButton({
  onClick,
  children,
  type,
  style,
  disabled
}: CustomButtonProps) {

  function handleClick() {
    if(disabled) return;
    if(onClick) onClick();
  }

  return (
    <Button
      onClick={handleClick}
      type={type}
      style={{...{
        backgroundColor: style?.backgroundColor,
        width: style?.width || 'auto',
        height: style?.height || 'auto',
        color: style?.color,
        fontWeight: style?.fontWeight || 'normal',
        margin: style?.margin || 0,
        border: style?.border || 'none'
      }, ...style}}
      className={`${disabled ?'disabled' :''}`}
    >
      {children}
    </Button>
  );
}

export default CustomButton;