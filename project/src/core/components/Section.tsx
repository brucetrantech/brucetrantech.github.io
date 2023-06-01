import { ReactNode } from 'react';
import styled from 'styled-components';

type SectionProps = {
  children: ReactNode;
  background?: string;
  paddingSmall?: boolean;
} & React.HTMLAttributes<HTMLElement>;

interface ContainerProps {
  background?: string;
  paddingSmall?: boolean;
}

export default function Section({
  children,
  background,
  paddingSmall = true,
  ...props
}: SectionProps) {
  return (
    <Container background={background} paddingSmall={paddingSmall} {...props}>
      {children}
    </Container>
  );
}

const Container = styled.section<ContainerProps>`
  padding-inline: 14vw;
  ${props => props.background && `background: ${props.background}`};

  @media screen and (max-width: 1570px) {
    padding-inline: 8vw;
  }

  /* @media screen and (max-width: 1440px) {
    padding-inline: 10vw;
  } */

  @media screen and (max-width: 1200px) {
    padding-inline: 8vw;
  }

  @media screen and (max-width: 992px) {
    padding-inline: 6vw;
  }

  @media screen and (max-width: 768px) {
    padding-inline: ${props => (props.paddingSmall ? '10px' : '0px')};
  }
`;
