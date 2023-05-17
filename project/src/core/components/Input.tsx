import React from 'react';
import styled from 'styled-components';

type Radius = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'input' | number;

type InputProps = {
  radius?: Radius;
  name?: string;
  required?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

interface StyleInputProps {
  radius: Radius;
}

export default function Input({ radius = 'input', name, required = true, ...props }: InputProps) {
  return <StyleInput required={required} radius={radius} name={name} {...props} />;
}

const StyleInput = styled.input<StyleInputProps>`
  height: 27px;
  border: none;
  background: white;
  padding: 10px 20px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.colors.gray};
  border-radius: ${props => `${props.theme.radius?.[props.radius] || props.radius}px`};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(11, 7, 87, 0.2);
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;
