import styled from 'styled-components';
import { Button, Input } from '../../../components';

export default function ContactUs() {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Form>
        <Input placeholder='Enter your name or company' />
        <Input placeholder='Enter your phone or email' />
        <div>
          <Button radius='input' padding='13px 103px' fontSize={14} fontWeight={700}>
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 25px;
  @media screen and (width <= 768px) {
    display: block;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  color: ${props => props.theme.colors.dark_blue};
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  gap: 20px;

  @media screen and (width <= 768px) {
    display: block;
    text-align: center;
  }
`;
