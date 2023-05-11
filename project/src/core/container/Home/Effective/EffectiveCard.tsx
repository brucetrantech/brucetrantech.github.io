import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

type EffectiveCardProps = {
  icon: string;
  title: string;
  description: string;
  star: 1 | 2 | 3;
};

function Stars({ star }: { star: 1 | 2 | 3 }) {
  return (
    <StarContainer>
      {Array(star)
        .fill(0)
        .map((_, k) => (
          <FaStar key={k} style={{ color: '#FFCB4B', width: 13 }} />
        ))}
      {Array(3 - star)
        .fill(0)
        .map((_, k) => (
          <FaStar key={k} style={{ color: '#B3B3C8', width: 13 }} />
        ))}
    </StarContainer>
  );
}

export default function EffectiveCard({ icon, title, description, star }: EffectiveCardProps) {
  return (
    <Card>
      <Img src={icon} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <FlexRight>
        <Stars star={star} />
      </FlexRight>
    </Card>
  );
}

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e9edff;
  box-shadow: 0px 20px 47px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 10px 20px 30px;
  width: 240px;

  @media screen and (max-width: 992px) {
    width: 148px;
    padding: 11px 10px;
  }
`;

const Img = styled.img`
  @media screen and (max-width: 992px) {
    width: 32px;
    height: auto;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  color: ${props => props.theme.colors.dark_blue};
  text-shadow: 1px 1px 1px #e9edff;
  @media screen and (max-width: 992px) {
    font-size: 12px;
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.colors.gray};
  text-shadow: 1px 1px 1px #e9edff;
  @media screen and (max-width: 992px) {
    font-size: 8px;
  }
`;

const StarContainer = styled.div`
  display: flex;
  gap: 4px;
`;
const FlexRight = styled.div`
  display: flex;
  justify-content: right;
`;
