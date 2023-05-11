import styled from 'styled-components';
import { Button, Input } from '../../../components';

export default function ContactUs() {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Form>
        <Input placeholder='Enter your name or company' />
        <Input placeholder='Enter your phone or email' />
        <ButtonContainer>
          <CustomButton radius='input' padding='13px 103px' fontSize={14} fontWeight={700}>
            Submit
          </CustomButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-block: 100px 10px;
  @media screen and (max-width: 768px) {
    text-align: left;
    display: block;
    padding-top: 30px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  color: ${props => props.theme.colors.dark_blue};
  font-weight: 600;

  @media screen and (max-width: 1440px) {
    font-size: 28px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 20px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media screen and (max-width: 920px) {
    max-width: 600px;
  }

  @media screen and (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CustomButton = styled(Button)`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
