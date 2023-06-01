import styled from 'styled-components';
import { Button } from '../../../components';
import introImg from '../../../../public/full/Intro.png';

export default function Intro() {
  return (
    <Container>
      <Content>
        <CustomButton bg='light_blue' color='blue' radius='md' fontWeight={600} padding='10px 20px'>
          Welcome GSBench
        </CustomButton>
        <Title>Make your business easily with the good and seamless infrastructure</Title>
        <SubTitle>
          Get something better together, you have a best business, we make sure the best
          infrastructure for you
        </SubTitle>
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
      </Content>
      <ImgContainer>
        <Img
          src={introImg}
          alt='Make your business easily with the good and seamless infrastructure'
        />
      </ImgContainer>
    </Container>
  );
}

const Container = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  @media screen and (max-width: 768px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
  }
`;

const Content = styled.div`
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  width: 40vw;
  margin-block: 70px;

  @media screen and (max-width: 992px) {
    margin-block: 30px;
  }

  @media screen and (max-width: 768px) {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
    -webkit-order: 2;
    width: 100%;
    text-align: center;
    margin-block: 10px;
  }
`;

const Title = styled.h1`
  font-size: 44px;
  color: ${props => props.theme.colors.dark_blue};
  font-weight: 600;
  line-height: 120%;
  margin-block: 20px;

  @media screen and (max-width: 1440px) {
    font-size: 40px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 36px;
  }

  @media screen and (max-width: 992px) {
    font-size: 32px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-inline: 20px;
  }
`;

const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  opacity: 0.7;
  color: ${props => props.theme.colors.gray};
  margin-block: 0 20px;

  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ImgContainer = styled.div`
  width: 50vw;
  @media screen and (max-width: 768px) {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    -webkit-order: 1;
    width: 100%;
    text-align: center;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const CustomButton = styled(Button)`
  cursor: auto;

  &:hover {
    filter: brightness(100%);
  }
`;
