import styled from 'styled-components';
import { Prices } from '../../../../constants/content';
// import { CheckMarkIcon } from '../../../icons';
import checkMark from '../../../../public/full/Checkmark.svg';

export default function PriceCard({ price }: { price: Prices }) {
  return (
    <Card>
      <CardHead>{price.type}</CardHead>
      <Description>{price.description}</Description>
      {/* <Price>$ {price.price}</Price>
      <PriceDes>{price.price_desc}</PriceDes> */}
      <Divider />
      <ul>
        {price.detail.map((item, k) => (
          <DetailItem key={k}>
            <CheckMarkIcon src={checkMark} alt='check-mark' />
            <DetailContent highlight={!!item.highlight}>{item.content}</DetailContent>
          </DetailItem>
        ))}
      </ul>
    </Card>
  );
}

const Card = styled.li`
  border-radius: 15px;
  padding: 43px 39px;
  border: 2px solid ${props => props.theme.colors.border};
  text-align: left;
  width: 280px;
  background-color: white;

  @media screen and (max-width: 992px) {
    width: 250px;
    margin-inline: 6px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 16px;
    margin-inline: 20px;
  }
`;

const CardHead = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark_blue};
  margin-block: 0px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: 16px;
  line-height: 150%;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

// const Price = styled.h2`
//   font-size: 42px;
//   color: ${props => props.theme.colors.dark_blue};
//   font-weight: 600;
//   margin-block: 0px;

//   @media screen and (max-width: 768px) {
//     font-size: 20px;
//     display: inline;
//   }
// `;

// const PriceDes = styled.h4`
//   color: rgba(144, 147, 183, 0.59);
//   font-size: 16px;
//   font-weight: 500;
//   margin-block: 0px 10px;

//   @media screen and (max-width: 768px) {
//     margin-left: 10px;
//     font-size: 12px;
//     display: inline;
//   }
// `;

const Divider = styled.hr`
  border: 1px solid ${props => props.theme.colors.border};
  margin-block: 20px;

  @media screen and (max-width: 768px) {
    border: 2px solid ${props => props.theme.colors.border};
    margin-block: 16px;
  }
`;

const DetailItem = styled.li`
  margin-block: 10px;
  -webkit-box-align: center;
  -ms-flex-align: center;
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

  @media screen and (max-width: 768px) {
    font-size: 12px;
    vertical-align: text-top;
  }
`;

const CheckMarkIcon = styled.img`
  width: 24px;

  @media screen and (max-width: 768px) {
    width: 18px;
  }
`;
