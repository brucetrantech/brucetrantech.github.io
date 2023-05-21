import { Section } from '../../../components';
import styled from 'styled-components';
import { EFFECTIVES } from '../../../../constants/content';
import EffectiveCard from './EffectiveCard';
import effective from '../../../../public/full/Effective.png';

export default function Effective() {
  return (
    <Section id='effective'>
      <Container>
        <Content>
          <Title>Perfect Solution For Your Business</Title>
          <Description>
            Graphs displaying your performance for metrics like follower evolution, average rate per
            post and reach and impressions to give you the insights.
          </Description>
        </Content>
        <Images>
          <EffectiveList>
            <CardContainer1>
              <EffectiveCard
                title={EFFECTIVES[0].title}
                description={EFFECTIVES[0].description}
                icon={EFFECTIVES[0].icon}
                star={EFFECTIVES[0].star}
              />
            </CardContainer1>
            <CardContainer2>
              <EffectiveCard
                title={EFFECTIVES[1].title}
                description={EFFECTIVES[1].description}
                icon={EFFECTIVES[1].icon}
                star={EFFECTIVES[1].star}
              />
            </CardContainer2>
            <CardContainer3>
              <EffectiveCard
                title={EFFECTIVES[2].title}
                description={EFFECTIVES[2].description}
                icon={EFFECTIVES[2].icon}
                star={EFFECTIVES[2].star}
              />
            </CardContainer3>
          </EffectiveList>
          <ImgContainer>
            <Img src={effective} alt='effective' />
          </ImgContainer>
        </Images>
      </Container>
    </Section>
  );
}

const EffectiveList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  gap: 0px;

  @media screen and (max-width: 1600px) {
    width: 700px;
  }

  @media screen and (max-width: 1440px) {
    width: 600px;
  }

  @media screen and (max-width: 1200px) {
    width: 500px;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    gap: 16px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 30px;
  color: ${props => props.theme.colors.dark_blue};

  @media screen and (max-width: 992px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: ${props => props.theme.colors.gray};
  padding-inline: 11vw;

  @media screen and (max-width: 992px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImgContainer = styled.div`
  flex-grow: 1;
  margin-left: -400px;
  width: 800px;

  @media screen and (max-width: 1600px) {
    margin-left: -400px;
    width: 600px;
  }

  @media screen and (max-width: 1440px) {
    margin-left: -300px;
    width: 400px;
  }

  @media screen and (max-width: 1200px) {
    margin-left: -100px;
    width: 200px;
  }

  @media screen and (max-width: 992px) {
    margin-left: 0px;
    margin-top: -130px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: 100vw;
`;

const CardContainer1 = styled.div`
  width: 100%;
  margin-left: 160px;
  z-index: 3;

  @media screen and (max-width: 992px) {
    margin-left: 0px;
    width: auto;
  }
`;

const CardContainer2 = styled.div`
  margin-top: -250px;
  z-index: 4;

  @media screen and (max-width: 1200px) {
    margin-top: -30px;
  }

  @media screen and (max-width: 992px) {
    margin-top: 0px;
  }
`;

const CardContainer3 = styled.div`
  margin-top: -220px;
  margin-left: 100px;
  z-index: 2;

  @media screen and (max-width: 1200px) {
    margin-top: -20px;
  }

  @media screen and (max-width: 992px) {
    margin-top: 0px;
    margin-left: 0px;
  }
`;

const Container = styled.div`
  margin-block: 60px 20px;
`;
