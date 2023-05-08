import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

type ButtonProps = {
  color?: string;
  bg?: string;
  radius?: number;
  padding?: string;
  fontSize?: number;
  fontWeight?: number;
} & React.HTMLAttributes<HTMLButtonElement>;

interface StyleBtnProps {
  color: string;
  bg: string;
  radius: number;
  padding: string;
  fontSize: number;
  fontWeight: number;
}

export default function Button({
  color = theme.colors.white,
  bg = theme.colors.main,
  radius = theme.radius.sm,
  padding = '8px 12px',
  fontSize = 14,
  fontWeight = 500,
  ...props
}: ButtonProps) {
  return (
    <StyleBtn
      color={color}
      bg={bg}
      radius={radius}
      padding={padding}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    >
      {props.children}
    </StyleBtn>
  );
}

const StyleBtn = styled.button<StyleBtnProps>`
  outline: none;
  border: none;
  border-radius: ${props => `${props.radius}px`};
  cursor: pointer;
  padding: ${props => props.padding};
  color: ${props => props.theme.colors?.[props.color] || props.color};
  background-color: ${props => props.theme.colors?.[props.bg] || props.bg};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => `${props.fontSize}px`};
  transition: 1s ease-out;

  &:hover {
    filter: brightness(88%);
  }
`;
