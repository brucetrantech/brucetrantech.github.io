import styled from 'styled-components';
import { Button } from '../../../components';
import introImg from '../../../../public/full/Intro.png';

export default function Intro() {
  return (
    <Container>
      <Content>
        <Button bg='light_blue' color='blue' radius='md' fontWeight={600} padding='10px 20px'>
          Welcome GSBench
        </Button>
        <Title>Make your business easily with the good and seamless infrastructure</Title>
        <SubTitle>
          Get something better together, you have a best business, we make sure the best
          infrastructure for you
        </SubTitle>
        <Button
          color='white'
          padding='18px 26px'
          fontSize={18}
          fontWeight={600}
          small={{ fontSize: 12, fontWeight: 500, padding: '11px 78px' }}
        >
          Contact us
        </Button>
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
  display: flex;
  @media screen and (width <= 768px) {
    flex-flow: row wrap;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  width: 40vw;
  margin-block: 70px;
  @media screen and (width <= 768px) {
    order: 2;
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

  @media screen and (width <= 768px) {
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
  @media screen and (width <= 768px) {
    font-size: 12px;
  }
`;

const ImgContainer = styled.div`
  width: 50vw;
  @media screen and (width <= 768px) {
    order: 1;
    width: 100%;
    text-align: center;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;