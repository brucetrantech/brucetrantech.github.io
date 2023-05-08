import styled from 'styled-components';
import logo from '../../public/full/gsbench-logo.svg';
import { Button } from '../components';

export default function Menu() {
  return (
    <Header>
      <Logo src={logo} alt='GSBench' />

      <nav>
        <List>
          <ListItem>Effective</ListItem>
          <ListItem>Pricing</ListItem>
          <ListItem>Services</ListItem>
          <ListItem>
            <Button color='white' padding='12px 32px' fontSize={18}>
              Contact us
            </Button>
          </ListItem>
        </List>
      </nav>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 18px;
  margin-inline: 10vw;
`;

const Logo = styled.img`
  cursor: pointer;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 5vw;
`;

const ListItem = styled.li`
  font-size: 18px;
  cursor: pointer;
  color: ${props => props.theme.colors.dark_blue};
`;
