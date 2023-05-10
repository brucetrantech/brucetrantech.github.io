import styled from 'styled-components';
import { BRANCH_LIST } from '../../../../constants/content';

export default function Branch() {
  return (
    <List>
      {BRANCH_LIST.map(branch => (
        <ListItem key={branch.alt}>
          <LogoBranch src={branch.logo} alt={branch.alt} title={branch.alt} />
        </ListItem>
      ))}
    </List>
  );
}

const List = styled.ul`
  margin-block: 20px;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 16px;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
`;

const ListItem = styled.li``;

const LogoBranch = styled.img`
  @media screen and (width <= 768px) {
    width: 88px;
    height: auto;
  }
`;
