import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

type Radius = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'input' | number;

type ButtonProps = {
  color?: string;
  bg?: string;
  radius?: Radius;
  padding?: string;
  fontSize?: number;
  fontWeight?: number;
  breakpoint?: number;
  small?: {
    radius?: Radius;
    padding?: string;
    fontSize?: number;
    fontWeight?: number;
  };
  loading?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

interface StyleBtnProps {
  color: string;
  bg: string;
  radius: Radius;
  padding: string;
  fontSize: number;
  fontWeight: number;
  breakpoint?: number;
  smallRadius?: Radius;
  smallPadding?: string;
  smallFontSize?: number;
  smallFontWeight?: number;
  loading?: boolean;
}

export default function Button({
  color = theme.colors.white,
  bg = theme.colors.main,
  radius = theme.radius.sm,
  padding = '8px 12px',
  fontSize = 14,
  fontWeight = 500,
  breakpoint = 768,
  small = {},
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
      breakpoint={breakpoint}
      smallRadius={small?.radius}
      smallPadding={small?.padding}
      smallFontSize={small?.fontSize}
      smallFontWeight={small?.fontWeight}
      {...props}
    >
      {props.children}
    </StyleBtn>
  );
}

const StyleBtn = styled.button<StyleBtnProps>`
  outline: none;
  border: none;
  border-radius: ${props => `${props.theme.radius?.[props.radius] || props.radius}px`};
  cursor: pointer;
  padding: ${props => props.padding};
  color: ${props => props.theme.colors?.[props.color] || props.color};
  background-color: ${props => props.theme.colors?.[props.bg] || props.bg};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => `${props.fontSize}px`};
  transition: 1s ease-out;
  -webkit-transition: 1s ease-out;
  -o-transition: 1s ease-out;
  ${props => props.loading && 'cursor: wait;'}

  &:hover {
    filter: brightness(88%);
    -webkit-filter: brightness(88%);
  }

  ${props =>
    props.breakpoint &&
    `
    @media screen and (max-width: ${props.breakpoint}px) {
      padding: ${props.smallPadding};
      border-radius: ${props.smallRadius};
      font-weight: ${props.smallFontWeight};
      font-size: ${props.smallFontSize}px;
    }
  `}
`;
