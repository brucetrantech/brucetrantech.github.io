import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { FaCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import styled from 'styled-components';

interface NotificationConatinerProps {
  bg: string;
}

type NotificationContextType = {
  show: boolean;
  updateShow: () => void;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
};

export const NotificationContext = createContext<NotificationContextType>({
  show: false,
  updateShow: () => true,
  success: false,
  setSuccess: () => true,
  content: '',
  setContent: () => true,
});

export default function Notification() {
  const { show, success, content } = useContext(NotificationContext);

  if (!show) return null;

  return (
    <NotificationContainer bg={success ? 'blue' : '#e91e63'}>
      <ContentContainer>
        {success ? <FaCheckCircle style={{ width: 24, height: 24 }} /> : <FaRegTimesCircle />}
        <span>{content}</span>
      </ContentContainer>
    </NotificationContainer>
  );
}

const NotificationContainer = styled.div<NotificationConatinerProps>`
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  flex-wrap: wrap-reverse;
  align-items: flex-start;
  bottom: 50px;
  left: 30px;
  max-height: 100vh;
  background-color: ${props => props.theme.colors?.[props.bg] || props.bg};
  color: white;
  border-radius: 12px;
  padding: 10px;
  z-index: 999;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
