import styled from 'styled-components';

type ServiceCardProps = {
  icon: string;
  text: string;
};

export default function ServiceCard({ icon, text }: ServiceCardProps) {
  return (
    <Card>
      <Img src={icon} alt={text} />
      <Content>{text}</Content>
    </Card>
  );
}

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0px 25px 47px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5f1ff;
  background: white;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  margin-block: 20px;
  width: 25vw;
  gap: 13px;

  @media screen and (width <= 1200px) {
    width: 30vw;
    padding: 20px 30px;
  }

  @media screen and (width <= 992px) {
    width: 32vw;
  }

  @media screen and (width <= 768px) {
    width: 100%;
    margin-block: 4px;
    padding: 12px 20px;
  }
`;

const Img = styled.img`
  @media screen and (width <= 768px) {
    width: 48px;
    height: 48px;
  }
`;

const Content = styled.h6`
  font-size: 20px;
  font-weight: 400;
  color: #818195;
  margin-block: 0;
  @media screen and (width <= 768px) {
    font-size: 14px;
  }
`;
