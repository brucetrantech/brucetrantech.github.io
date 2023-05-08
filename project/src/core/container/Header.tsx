import styled from 'styled-components';
import Menu from './Menu';

export default function Header() {
  return (
    <Container>
      <Menu />
    </Container>
  );
}

const Container = styled.div`
  height: 740px;
  background: linear-gradient(178.7deg, #e4ecff 1.11%, rgba(234, 240, 255, 0) 103.22%);
`;
