import styled from 'styled-components';
import { Prices } from '../../../../constants/content';
import { CheckMarkIcon } from '../../../icons';

export default function PriceCard({ price }: { price: Prices }) {
  return (
    <Card>
      <CardHead>{price.type}</CardHead>
      <Description>{price.description}</Description>
      <Price>$ {price.price}</Price>
      <PriceDes>{price.price_desc}</PriceDes>
      <Divider />
      <Details>
        {price.detail.map((item, k) => (
          <DetailItem key={k}>
            <CheckMarkIcon />
            <DetailContent highlight={!!item.highlight}>{item.content}</DetailContent>
          </DetailItem>
        ))}
      </Details>
    </Card>
  );
}

const Card = styled.li`
  border-radius: 15px;
  padding: 43px 39px;
  border: 2px solid ${props => props.theme.colors.border};
  text-align: left;
  width: 300px;
`;

const CardHead = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark_blue};
  margin-block: 0px;
`;

const Description = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: 16px;
  line-height: 188%;
`;

const Price = styled.h2`
  font-size: 42px;
  color: ${props => props.theme.colors.dark_blue};
  font-weight: 600;
  margin-block: 0px;
`;

const PriceDes = styled.h4`
  color: rgba(144, 147, 183, 0.59);
  font-size: 16px;
  font-weight: 500;
  margin-block: 10px;
`;

const Divider = styled.hr`
  border: 1px solid ${props => props.theme.colors.border};
  margin-block: 20px;
`;

const Details = styled.ul`
  list-style-type: none;
  padding-inline-start: 0px;
`;

const DetailItem = styled.li`
  margin-block: 10px;
  align-items: center;
`;

interface DetailContentProps {
  highlight: boolean;
}

const DetailContent = styled.span<DetailContentProps>`
  color: ${props => (props.highlight ? props.theme.colors.blue : props.theme.colors.gray)};
  font-weight: ${props => (props.highlight ? 700 : 500)};
  vertical-align: super;
  margin-left: 10px;
  font-size: 14px;
`;
