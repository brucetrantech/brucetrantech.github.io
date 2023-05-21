import { Section } from '../../../components';
import styled from 'styled-components';
import { Button } from '../../../components';
import { PRICES } from '../../../../constants/content';
import PriceCard from './PriceCard';
import ContactUs from './ContactUs';

export default function DiscoverPricing() {
  return (
    <Section
      id='pricing'
      background='linear-gradient(359.64deg, #F0F4FF 0.29%, rgba(242, 245, 255, 0) 103.06%);'
    >
      <Container>
        <CustomButton
          radius='lg'
          color='blue'
          bg='#E9EDFF'
          fontSize={14}
          fontWeight={600}
          padding='8px 50px'
        >
          Discover Pricing
        </CustomButton>
        <PriceList>
          {PRICES.map(price => (
            <PriceCard price={price} key={price.type} />
          ))}
        </PriceList>
        <ContactUs />
      </Container>
    </Section>
  );
}

const Container = styled.div`
  text-align: center;
  padding-bottom: 40px;

  @media screen and (max-width: 928px) {
    padding-bottom: 20px;
  }
`;

const PriceList = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  gap: 15px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const CustomButton = styled(Button)`
  cursor: auto;

  &:hover {
    filter: brightness(100%);
  }
`;
