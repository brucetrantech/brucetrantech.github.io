import styled from 'styled-components';
import { IconType } from 'react-icons';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import logo from '../../public/full/gsbench-logo.svg';
import { Button, Input } from '../components';
import { LIST_CONTACT } from '../../constants/content';

function ContactItem({ Icon, content }: { Icon: IconType; content: string }) {
  return (
    <ContactItemContainer>
      <Icon style={{ color: '#63657E', height: '20px', width: '20px' }} />
      <ContactItemContent>{content}</ContactItemContent>
    </ContactItemContainer>
  );
}

export default function Footer() {
  return (
    <FooterContainer id='contact'>
      <Container>
        <Left>
          <Title>Contact Us</Title>
          <Form>
            <CustomInput placeholder='Enter your name or company' />
            <CustomInput placeholder='Enter your phone or email' />
            <CustomButton radius={50} padding='12px 100px'>
              Submit
            </CustomButton>
          </Form>
        </Left>
        <Right>
          <MainContact>
            <ListSocial>
              {LIST_CONTACT.map((item, k) => (
                <li key={k}>
                  <item.icon
                    style={{ color: '#63657E', height: '20px', width: '20px', cursor: 'pointer' }}
                  />
                </li>
              ))}
            </ListSocial>
            <ContactItem Icon={FaMapMarkerAlt} content='District 2, Ho Chi Minh City, Vietnam' />
            <ContactItem Icon={FaRegEnvelope} content='gsbench@gmail.com' />
            <ContactItem Icon={FaPhoneAlt} content='(+84) 77 9291 669' />
          </MainContact>
          <SubContact>
            <div>
              <nav>
                <List>
                  <ListItem>Company</ListItem>
                  <ListItem>Services</ListItem>
                  <ListItem>Pricing</ListItem>
                </List>
              </nav>
              <CopyRight>Copyright ©2023 GSBench. All Rights Reserved</CopyRight>
            </div>
            <Logo src={logo} alt='GSBench' />
          </SubContact>
        </Right>
      </Container>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding-inline: 14vw;

  @media screen and (max-width: 1440px) {
    padding-inline: 10vw;
  }

  @media screen and (max-width: 1200px) {
    padding-inline: 8vw;
  }

  @media screen and (max-width: 992px) {
    padding-inline: 6vw;
  }

  @media screen and (max-width: 768px) {
    padding-inline: 0px;
  }
`;

const Container = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #e7f5ff;
  padding: 20px 40px 40px 40px;
  border-radius: 30px;
  margin-bottom: 100px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    border-radius: 0px;
    padding: 12px;
    margin-bottom: 0px;
  }
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  margin-block: 10px 25px;
  color: ${props => props.theme.colors.dark_blue};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Left = styled.div`
  padding-right: 100px;
  @media screen and (max-width: 768px) {
    padding-right: 0px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  width: 100%;

  @media screen and (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`;

const CustomInput = styled(Input)`
  display: block;
  margin-block: 15px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-block: 6px;
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-block: 6px;
  }
`;

const Right = styled.div`
  margin-left: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  gap: 50px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    gap: 30px;
  }
`;

const ListSocial = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 20px;
`;

const ContactItemContainer = styled.div`
  margin-block: 10px;
`;

const ContactItemContent = styled.span`
  margin-left: 20px;
  font-size: 18px;
  color: ${props => props.theme.colors.gray};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const MainContact = styled.div``;

const SubContact = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const Logo = styled.img`
  cursor: pointer;
  -ms-flex-item-align: end;
  -ms-grid-row-align: end;
  align-self: end;

  @media screen and (max-width: 768px) {
    width: 50px;
  }
`;

const List = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 20px;
  margin-block: 10px;
`;

const ListItem = styled.li`
  font-size: 18px;
  color: ${props => props.theme.colors.dark_blue};
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const CopyRight = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.gray};

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
