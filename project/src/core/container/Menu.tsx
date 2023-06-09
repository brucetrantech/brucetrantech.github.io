import styled from 'styled-components';
import logo from '../../public/full/gsbench-logo.svg';
import { Button } from '../components';

export default function Menu() {
  return (
    <Header id='header'>
      <Logo src={logo} alt='GSBench' id='logo' />

      <nav>
        <List>
          <ListItem>
            <Anchor href='#effective'>Effective</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href='#pricing'>Pricing</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href='#services'>Services</Anchor>
          </ListItem>
          <ListItem>
            <a href='#contact'>
              <Button
                color='white'
                padding='12px 32px'
                fontSize={18}
                small={{ fontSize: 12, fontWeight: 500, padding: '6px 9px' }}
              >
                Contact us
              </Button>
            </a>
          </ListItem>
        </List>
      </nav>
    </Header>
  );
}

const Header = styled.header`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-block: 18px;

  @media screen and (max-width: 768px) {
    padding-top: 6px;
  }
`;

const Logo = styled.img`
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 50px;
  }
`;

const List = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 5vw;

  @media screen and (max-width: 768px) {
    gap: 16px;
  }
`;

const ListItem = styled.li`
  font-size: 18px;
  cursor: pointer;
  color: ${props => props.theme.colors.dark_blue};

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Anchor = styled.a`
  color: inherit;
  &:hover,
  &:focus {
    color: inherit;
  }
`;
