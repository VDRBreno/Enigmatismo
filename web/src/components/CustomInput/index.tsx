import React, { useState } from 'react';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container, Label } from './styles';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type: string;
  width?: string;
  height?: string;
  maxLength?: number;
  color?: string;
  border?: string;
  placeholder?: string;
  visibilityButton?: boolean;
  disabled?: boolean;
  label?: boolean;
  step?: number;
  required?: boolean;
  min?: number;
  max?: number;
  hidden?: boolean;
}

function CustomInput({
  value,
  onChange,
  type,
  width,
  height,
  maxLength,
  color,
  border,
  placeholder = '',
  visibilityButton = false,
  disabled = false,
  label = false,
  step = 1,
  required = false,
  min,
  max,
  hidden = false
}: InputProps) {

  const [textVisibility, setTextVisibility] = useState(false);
  function toggleTextVisibility() {
    setTextVisibility(!textVisibility);
  }

  return (
    <Container
      style={{
        width: width || 'auto',
        height: height || 'auto',
        borderColor: border,
        backgroundColor: disabled ? 'rgba(0,0,0,0.06)' : '',
        paddingTop: label ? '15px': '',
        opacity: hidden ? '0' : '1'
      }}
    >
      {label && <Label>{placeholder}</Label>}
      <input
        style={{
          color: color
        }}
        step={step}
        maxLength={maxLength}
        autoComplete='false'
        spellCheck='false'
        type={visibilityButton ? (textVisibility ? 'text' : 'password') : type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        min={min}
        max={max}
      />
      
      {visibilityButton
        ? (
          !textVisibility
            ? <FiEye onClick={toggleTextVisibility} color='#C4C4C4' size={20} />
            : <FiEyeOff onClick={toggleTextVisibility} color='#C4C4C4' size={20} />
        )
        : null
      }
    </Container>
  );

};

export default CustomInput;