import { ReactNode } from 'react';
import styled from 'styled-components';

type SectionProps = {
  children: ReactNode;
  background?: string;
};

interface ContainerProps {
  background?: string;
}

export default function Section({ children, background }: SectionProps) {
  return <Container background={background}>{children}</Container>;
}

const Container = styled.section<ContainerProps>`
  padding-inline: 14vw;
  ${props => props.background && `background: ${props.background}`};

  @media screen and (max-width: 768px) {
    padding-inline: 10px;
  }
`;
