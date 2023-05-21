import styled from 'styled-components';
import { Section } from '../../../components';
import blockQuote from '../../../../public/full/BlockQuote.svg';
import { EXPLORE_SERVICES } from '../../../../constants/content';
import ServiceCard from './ServiceCard';

export default function ExploreService() {
  return (
    <Section id='services'>
      <Container>
        <div>
          <Img src={blockQuote} alt='block-quote' />
          <Header>Explore Services</Header>
        </div>
        <ServiceList>
          {EXPLORE_SERVICES.map((item, k) => (
            <ServiceCard key={k} icon={item.icon} text={item.text} />
          ))}
        </ServiceList>
      </Container>
    </Section>
  );
}

const Container = styled.div`
  margin-block: 50px;
`;

const Img = styled.img`
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const Header = styled.h2`
  margin-block: 0;
  display: inline;
  margin-left: -30px;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: -10px;

  @media screen and (max-width: 1200px) {
    font-size: 40px;
    margin-left: -24px;
  }

  @media screen and (max-width: 920px) {
    font-size: 34px;
    margin-left: -20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: -16px;
  }
`;

const ServiceList = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 20px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;
